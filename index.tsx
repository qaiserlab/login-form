import React from 'react';
import { render } from 'react-dom';

import "antd/dist/antd.css";

import { AuthProvider, AuthStore } from './AuthReducer';
import LoginForm from './LoginForm';
import Test from './Test';

function App() {
  return (
    <AuthProvider>
      <section style={{padding: '16px'}}>
        <LoginForm />
        <Test />
      </section>
    </AuthProvider>
  );
}

render(<App />, document.getElementById('root'));
