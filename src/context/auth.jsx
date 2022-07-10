import { createContext, useState } from 'react';

import { loginWithGoogle } from '@/services/firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async () => {
    const user = await loginWithGoogle();

    if (!user) {
      // TODO: handle failed login
    }

    setUser(user);
  };

  const value = { user, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
