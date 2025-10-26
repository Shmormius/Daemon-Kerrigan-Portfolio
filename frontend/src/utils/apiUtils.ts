import {ApiError, ContactFormSubmission } from '../types';

interface ChatRequest {
  message: string;
  session_id?: string;
}

interface ChatResponse {
  success: boolean;
  response: string;
  session_id: string;
  error?: string;
}

// API utility functions
export class ApiUtils {
  private static readonly BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
  private static readonly DEFAULT_TIMEOUT = 30000; // 30 seconds

  static async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.BASE_URL}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.DEFAULT_TIMEOUT);

      const response = await fetch(url, {
        ...config,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  static async sendChatMessage(message: string, sessionId?: string): Promise<ChatResponse> {
    const requestBody: ChatRequest = {
      message,
      ...(sessionId && { session_id: sessionId })
    };

    try {
      const apiResponse = await this.makeRequest<any>('/chat', {
        method: 'POST',
        body: JSON.stringify(requestBody),
      });

      console.log('Raw API response:', apiResponse);
      console.log('Response type:', typeof apiResponse);
      console.log('Response keys:', Object.keys(apiResponse));

      if (apiResponse.response && typeof apiResponse.response === 'string') {
        return {
          success: true,
          response: apiResponse.response,
          session_id: apiResponse.session_id || sessionId || '',
          error: undefined
        };
      } else if (apiResponse.error) {
        throw new Error(apiResponse.error);
      } else {
        console.error('Unexpected response format:', apiResponse);
        throw new Error('Unexpected response format from server');
      }

    } catch (error) {
      console.error('Chat API error:', error);
      throw error;
    }
  }

  static handleApiError(error: unknown): ApiError {
    if (error instanceof Error) {
      return {
        code: 'FETCH_ERROR',
        message: error.message,
        details: { originalError: error.name },
      };
    }
    
    return {
      code: 'UNKNOWN_ERROR',
      message: 'An unexpected error occurred',
      details: { error },
    };
  }

  static validateContactForm(data: ContactFormSubmission): string[] {
    const errors: string[] = [];
    
    if (!data.name.trim()) {
      errors.push('Name is required');
    }
    
    if (!data.subject.trim()) {
      errors.push('Subject is required');
    }
    
    if (!data.message.trim()) {
      errors.push('Message is required');
    }
    
    if (data.message.length > 1000) {
      errors.push('Message must be less than 1000 characters');
    }
    
    return errors;
  }

  static formatTimestamp(date: Date = new Date()): string {
    return date.toISOString();
  }

  static debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: number;
    
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }
}