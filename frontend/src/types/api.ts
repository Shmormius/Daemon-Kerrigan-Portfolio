// API-specific types and interfaces

export interface ContactFormSubmission {
  name: string;
  subject: string;
  message: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface ApiResponse<T = unknown> {
  data: T;
  success: boolean;
  error?: ApiError;
  timestamp: string;
}

export interface ContactApiResponse {
  id: string;
  status: 'sent' | 'pending' | 'failed';
  timestamp: string;
}

// Generic API method types
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ApiRequestConfig {
  method: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
  timeout?: number;
}

export interface ApiEndpoint {
  url: string;
  method: HttpMethod;
}

// Type guards for API responses
export function isApiError(response: unknown): response is ApiError {
  return typeof response === 'object' && 
         response !== null && 
         'code' in response && 
         'message' in response;
}

export function isApiResponse<T>(response: unknown): response is ApiResponse<T> {
  return typeof response === 'object' && 
         response !== null && 
         'success' in response && 
         'timestamp' in response;
}