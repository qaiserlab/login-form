import React, {createContext, useReducer} from 'react';

const initialState = {
  status: {
    token: '',
    isLogin: false
  },
  userInfo: {
    userName: '',
    fullName: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  }
};
const AuthStore = createContext(initialState);
const { Provider } = AuthStore;

const AuthProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'login':
        localStorage.token = action.payload.status.token;
        localStorage.isLogin = action.payload.status.isLogin;

        return {
          status: {
            ...state.status,
            ...action.payload.status,
            isLogin: true
          },
          userInfo: {
            ...state.userInfo,
            ...action.payload.userInfo
          }
        };
      case 'logout':
        localStorage.token = '';
        localStorage.isLogin = '';

        return AuthStates();
      default:
        throw new Error();
    }
  }, initialState);

  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  );
};

export default { AuthStore, AuthProvider }
