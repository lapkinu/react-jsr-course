import { createContext, useState } from 'react';
import { mockUsers } from '../../materials/mockUsers';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (name) => {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    const lowerName = trimmedName.toLowerCase();
    const userData = mockUsers[lowerName] || {
      name: trimmedName,
      role: 'user',
      avatar: '',
    };

    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export { AuthContext };
