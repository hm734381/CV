import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: any; // Replace with your user type
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null); // Replace with your user type

  const login = (email: string, password: string) => {
    // Implement login logic here
    setUser({ email }); // Mock user data
  };

  const signup = (email: string, password: string) => {
    // Implement signup logic here
    setUser({ email }); // Mock user data
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};