export type UserRole =
  | "customer"
  | "vendor"
  | "admin";

export interface User {
  id: number;

  fullName: string;

  email: string;

  phone?: string;

  avatar?: string;

  role: UserRole;

  isVerified: boolean;

  createdAt: string;

  updatedAt: string;
}