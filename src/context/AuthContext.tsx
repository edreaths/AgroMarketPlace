import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type {
  AuthContextType,
  LoginRequest,
  RegisterRequest,
} from "@/types/auth";

import type { User } from "@/types/user";

export const AuthContext =
  createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
 const [user, setUser] = useState<User | null>(null);

useEffect(() => {
  const storedUser =
    localStorage.getItem("agro_user");

  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);

  const [loading] = useState(false);

  const login = async (
    data: LoginRequest
  ) => {
    const mockUser: User = {
      id: 1,
      fullName: "Demo User",
      email: data.email,
      role: "customer",
      isVerified: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setUser(mockUser);
    localStorage.setItem(
  "agro_user",
  JSON.stringify(mockUser)
);
  };

  const register = async (
    data: RegisterRequest
  ) => {
    const mockUser: User = {
      id: 1,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      role: "customer",
      isVerified: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setUser(mockUser);
    localStorage.setItem(
  "agro_user",
  JSON.stringify(mockUser)
);
  };

const logout = () => {
  localStorage.removeItem("agro_user");
  setUser(null);
};

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated:
          user !== null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}