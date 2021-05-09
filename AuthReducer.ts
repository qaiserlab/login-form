export function AuthStates() {
  return {
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
}

export function AuthReducer(state, action) {
  switch (action.type) {
    case 'login':
      localStorage.token = action.payload.status.token;
      localStorage.isLogin = action.payload.status.isLogin;

      return {
        status: {
          ...action.payload.status,
          isLogin: true
        },
        userInfo: {
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
}
