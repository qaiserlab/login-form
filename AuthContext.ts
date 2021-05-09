import React, { useReducer } from 'react';
import { AuthReducer, AuthStates } from './AuthReducer'

export default function AuthContext() {
  const authReducer = useReducer(AuthReducer, AuthStates());

  return React.createContext(authReducer);
}