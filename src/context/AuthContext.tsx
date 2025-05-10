import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  user: { isAdmin: boolean } | null;
  setUser: (user: { isAdmin: boolean }) => void;
  clearUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<{ isAdmin: boolean } | null>(null);

  const setUser = (user: { isAdmin: boolean }) => setUserState(user);
  const clearUser = () => setUserState(null);

  return (
    <AuthContext.Provider value={{ user, setUser, clearUser }}>
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
