import boto3
import json
import logging
import os
from typing import Dict, Any
from botocore.exceptions import ClientError, ReadTimeoutError, ConnectTimeoutError
from botocore.config import Config

logger = logging.getLogger(__name__)

class BedrockChatbotManager:
    def __init__(self):
        self.region = os.getenv("AWS_REGION_BEDROCK", "us-east-1")
        self.agent_id = os.getenv("AWS_BEDROCK_AGENT_ID")
        self.agent_alias_id = os.getenv("AWS_BEDROCK_AGENT_ALIAS_ID", "TSTALIASID")
        
        if not self.agent_id:
            raise ValueError("AWS_BEDROCK_AGENT_ID not found in environment")
        
        self.access_key = os.getenv("AWS_ACCESS_KEY_ID")
        self.secret_key = os.getenv("AWS_SECRET_ACCESS_KEY")
        
        if not self.access_key or not self.secret_key:
            raise ValueError("AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY must be set")
        
        logger.info(f"Using AWS credentials for region: {self.region}")
        
        try:
            config = Config(
                read_timeout=300,  # 5 minutes
                connect_timeout=60,  # 1 minute
                retries={
                    'max_attempts': 3,
                    'mode': 'adaptive'
                }
            )
            
            self.client = boto3.client(
                'bedrock-agent-runtime',
                region_name=self.region,
                aws_access_key_id=self.access_key,
                aws_secret_access_key=self.secret_key,
                config=config
            )
            logger.info("Bedrock client initialized successfully with extended timeouts")
        except Exception as e:
            logger.error(f"Failed to create Bedrock client: {e}")
            raise
    
    async def chat_with_agent(self, message: str, session_id: str = None) -> Dict[str, Any]:
        try:
            if not session_id:
                import uuid
                session_id = str(uuid.uuid4())
            
            logger.info(f"Invoking agent {self.agent_id} with message: {message}")
            
            response = self.client.invoke_agent(
                agentId=self.agent_id,
                agentAliasId=self.agent_alias_id,
                sessionId=session_id,
                inputText=message
            )
            
            agent_response = ""
            chunk_count = 0
            
            try:
                for event in response['completion']:
                    chunk_count += 1
                    logger.debug(f"Processing chunk {chunk_count}: {event}")
                    
                    if 'chunk' in event and 'bytes' in event['chunk']:
                        try:
                            chunk_bytes = event['chunk']['bytes']
                            chunk_str = chunk_bytes.decode('utf-8')
                            
                            if not chunk_str.strip():
                                logger.debug("Skipping empty chunk")
                                continue
                            
                            logger.debug(f"Chunk content: {chunk_str}")

                            try:
                                chunk_data = json.loads(chunk_str)
                                
                                if 'outputText' in chunk_data:
                                    agent_response += chunk_data['outputText']
                                    logger.debug(f"Added JSON outputText: {chunk_data['outputText']}")
                                elif 'text' in chunk_data:
                                    agent_response += chunk_data['text']
                                    logger.debug(f"Added JSON text: {chunk_data['text']}")
                                    
                            except json.JSONDecodeError:
                                agent_response += chunk_str
                                logger.debug(f"Added plain text: {chunk_str}")
                                
                        except Exception as chunk_err:
                            logger.warning(f"Error processing chunk {chunk_count}: {chunk_err}")
                            continue
                    
                    elif 'trace' in event:
                        logger.debug(f"Received trace event: {event['trace']}")
                    elif 'returnControl' in event:
                        logger.debug(f"Received return control event")
                        
            except Exception as stream_err:
                logger.error(f"Error processing response stream after {chunk_count} chunks: {stream_err}")
                if agent_response:
                    logger.info("Returning partial response due to stream error")
                else:
                    return {
                        "success": False,
                        "error": f"Stream processing error: {str(stream_err)}",
                        "response": "I encountered an error while processing the response."
                    }
            
            logger.info(f"Processed {chunk_count} chunks, final response length: {len(agent_response)}")
            logger.info(f"Final agent response: {agent_response}")
            
            if agent_response.strip():
                return {
                    "success": True,
                    "response": agent_response.strip(),
                    "session_id": session_id
                }
            else:
                return {
                    "success": False,
                    "error": "Empty response from agent",
                    "response": "I didn't receive a proper response. Please try again."
                }
                
        except (ReadTimeoutError, ConnectTimeoutError) as timeout_err:
            logger.error(f"Timeout error: {timeout_err}")
            return {
                "success": False,
                "error": f"Request timed out: {str(timeout_err)}",
                "response": "The request took too long to process. Please try again."
            }
        except ClientError as e:
            error_code = e.response.get('Error', {}).get('Code', 'Unknown')
            error_message = e.response.get('Error', {}).get('Message', str(e))
            
            logger.error(f"AWS Error - Code: {error_code}, Message: {error_message}")
            
            return {
                "success": False,
                "error": f"AWS Error ({error_code}): {error_message}",
                "response": "I'm experiencing technical difficulties. Please try again later."
            }
        except Exception as e:
            logger.error(f"Unexpected error: {e}", exc_info=True)
            return {
                "success": False,
                "error": str(e),
                "response": "I encountered an unexpected error."
            }