// User types
export interface User {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

// Property types
export interface Property {
  id: number;
  name: string;
  price: number;
  currency: string;
  priceLabel: string;
  imageUrl: string;
  yieldPercentage: number;
  soldPercentage: number;
  ticketSize: string;
  daysLeft: number;
  createdAt: string;
  updatedAt: string;
}

// API types
export interface ApiError {
  message: string;
  error: string;
  statusCode: number;
}

// Redux state types
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface PropertiesState {
  properties: Property[];
  isLoading: boolean;
  error: string | null;
}

export interface RootState {
  auth: AuthState;
  properties: PropertiesState;
}