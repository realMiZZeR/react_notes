import {useContext} from 'react';
import {AuthContext} from '../AuthProvider.tsx';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('auth context doesnt exist');
  }

  return context;
};
