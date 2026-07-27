import type { User } from "./user";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: User;

  accessToken: string;

  refreshToken: string;
}

export interface AuthContextType {
  user: User | null;

  isAuthenticated: boolean;

  loading: boolean;

  login: (
    data: LoginRequest
  ) => Promise<void>;

  register: (
    data: RegisterRequest
  ) => Promise<void>;

  logout: () => void;
}