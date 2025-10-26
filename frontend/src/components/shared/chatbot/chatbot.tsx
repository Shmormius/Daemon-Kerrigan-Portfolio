import { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import { ApiUtils } from '../../../utils/apiUtils';
import './chatbot.css';

const TOOLTIP_MESSAGES = [
  "Hi, I am Hannibal!",
  "Have questions?",
  "Something you want to know?",
  "Ask about my projects!",
  "I'm here to help!",
  "Click me to chat!",
  "Need assistance?",
  "Let's talk tech!",
  "I'm your AI assistant!",
  "Curious about my skills?"
];

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface RateLimitInfo {
  messageCount: number;
  windowStart: Date;
}

export default function Chatbot(): ReactElement {
  const [isShaking, setIsShaking] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState(TOOLTIP_MESSAGES[0]);
  const [isTooltipFadingOut, setIsTooltipFadingOut] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Hannibal, your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [rateLimitInfo, setRateLimitInfo] = useState<RateLimitInfo>({
    messageCount: 0,
    windowStart: new Date()
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const MAX_MESSAGE_LENGTH = 200;
  const MAX_MESSAGES_PER_WINDOW = 5;
  const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const checkRateLimit = (): boolean => {
    const now = new Date();
    const timeSinceWindowStart = now.getTime() - rateLimitInfo.windowStart.getTime();
    
    // Reset window if 10 minutes have passed
    if (timeSinceWindowStart >= RATE_LIMIT_WINDOW_MS) {
      setRateLimitInfo({
        messageCount: 0,
        windowStart: now
      });
      return true;
    }
    
    return rateLimitInfo.messageCount < MAX_MESSAGES_PER_WINDOW;
  };

  const getRemainingTime = (): string => {
    const now = new Date();
    const timeSinceWindowStart = now.getTime() - rateLimitInfo.windowStart.getTime();
    const remainingMs = RATE_LIMIT_WINDOW_MS - timeSinceWindowStart;
    const remainingMinutes = Math.ceil(remainingMs / (60 * 1000));
    return `${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`;
  };

  const triggerShakeAndTooltip = useCallback(() => {
    if (isChatOpen) return; // Don't show tooltip when chat is open
    
    const randomMessage = TOOLTIP_MESSAGES[Math.floor(Math.random() * TOOLTIP_MESSAGES.length)];
    setTooltipMessage(randomMessage);
    
    setIsShaking(true);
    
    setTimeout(() => {
      setShowTooltip(true);
    }, 200);
    
    setTimeout(() => {
      setIsTooltipFadingOut(true);
      setTimeout(() => {
        setShowTooltip(false);
        setIsTooltipFadingOut(false);
      }, 300);
    }, 3000);
    
    setTimeout(() => {
      setIsShaking(false);
    }, 600);
  }, [isChatOpen]);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      triggerShakeAndTooltip();
    }, 1000);

    const recurringTimer = setInterval(() => {
      triggerShakeAndTooltip();
    }, Math.random() * 3000 + 5000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(recurringTimer);
    };
  }, [triggerShakeAndTooltip]);

  const handleChatbotClick = () => {
    setShowTooltip(false);
    setIsTooltipFadingOut(false);
    setIsChatOpen(true);
    setError(null); 
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setError(null);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Check message length
    if (inputMessage.trim().length > MAX_MESSAGE_LENGTH) {
      setError(`Message must be ${MAX_MESSAGE_LENGTH} characters or less.`);
      return;
    }

    // Check rate limit
    if (!checkRateLimit()) {
      setError(`You've reached the limit of ${MAX_MESSAGES_PER_WINDOW} messages per 10 minutes. Please wait ${getRemainingTime()} before sending another message.`);
      return;
    }

    const messageText = inputMessage.trim();

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setError(null);

    // Update rate limit info
    setRateLimitInfo(prev => ({
      ...prev,
      messageCount: prev.messageCount + 1
    }));

    try {
      const response = await ApiUtils.sendChatMessage(messageText, sessionId);
      
      if (!sessionId && response.session_id) {
        setSessionId(response.session_id);
      }

      const botResponse: Message = {
        id: Date.now() + 1,
        text: response.response,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Failed to send message:', error);
      setError('Sorry, I encountered an error. Please try again.');
      
      // Add error message to chat
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
      
      // Revert rate limit count on error
      setRateLimitInfo(prev => ({
        ...prev,
        messageCount: Math.max(0, prev.messageCount - 1)
      }));
    } finally {
      setIsTyping(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_MESSAGE_LENGTH) {
      setInputMessage(value);
      if (error && error.includes('characters')) {
        setError(null);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleTooltipHide = () => {
    setIsTooltipFadingOut(true);
    setTimeout(() => {
      setShowTooltip(false);
      setIsTooltipFadingOut(false);
    }, 300);
  };

  const remainingMessages = Math.max(0, MAX_MESSAGES_PER_WINDOW - rateLimitInfo.messageCount);
  const isRateLimited = !checkRateLimit();

  return (
    <div className="chatbot-container">
      <div 
        className={`chatbot ${isShaking ? 'shake' : ''}`}
        onClick={handleChatbotClick}
        onMouseEnter={() => setIsShaking(false)}
      />
      
      {showTooltip && !isChatOpen && (
        <div 
          className={`chatbot-tooltip ${showTooltip ? 'show' : ''} ${isTooltipFadingOut ? 'fade-out' : ''}`}
          onClick={handleTooltipHide}
        >
          {tooltipMessage}
        </div>
      )}

      {isChatOpen && (
        <div className="chat-panel">
          <div className="chat-header">
            <div className="chat-title">
              <img src="/image/chatbot/chatbot-avatar.png" alt="Hannibal" className="chat-avatar" />
              <span>Chat with Hannibal</span>
            </div>
            <button className="close-button" onClick={handleCloseChat}>×</button>
          </div>
          
          {error && (
            <div className="chat-error">
              <span className="error-message">{error}</span>
            </div>
          )}
          
          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.isUser ? 'user' : 'bot'}`}>
                <div className="message-content">
                  {message.text}
                </div>
                <div className="message-timestamp">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot">
                <div className="message-content typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chat-input">
            <div className="input-container">
              <input
                type="text"
                value={inputMessage}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="message-input"
                disabled={isTyping || isRateLimited}
              />
              <div className="input-info">
                <span className="char-count">
                  {inputMessage.length}/{MAX_MESSAGE_LENGTH}
                </span>
                <span className="message-count">
                  {remainingMessages} messages remaining
                </span>
              </div>
            </div>
            <button 
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping || isRateLimited || inputMessage.length > MAX_MESSAGE_LENGTH}
              className="send-button"
            >
              {isTyping ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}