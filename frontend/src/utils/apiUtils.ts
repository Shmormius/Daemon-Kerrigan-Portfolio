import { ApiResponse, ApiError, ContactFormSubmission } from '../types';

// API utility functions
export class ApiUtils {
  private static readonly BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
  private static readonly DEFAULT_TIMEOUT = 10000; // 10 seconds

  /**
   * Creates a standardized API request
   */
  static async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
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

  /**
   * Handles API errors consistently
   */
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

  /**
   * Validates form data before submission
   */
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

  /**
   * Formats date for API responses
   */
  static formatTimestamp(date: Date = new Date()): string {
    return date.toISOString();
  }

  /**
   * Debounces function calls (useful for search, form validation)
   */
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