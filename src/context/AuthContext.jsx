import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  // Try to load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('urbane_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    // Mock login - accepts any email/password and creates a user session
    const mockUser = {
      id: 'usr_' + Math.random().toString(36).substr(2, 9),
      name: email.split('@')[0],
      email,
    };
    setUser(mockUser);
    localStorage.setItem('urbane_user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('urbane_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
