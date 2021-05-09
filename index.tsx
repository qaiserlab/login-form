import React from 'react';
import { render } from 'react-dom';

import "antd/dist/antd.css";

import { AuthProvider, AuthStore } from './AuthReducer';
import LoginForm from './LoginForm';

function App() {
  const [state, dispatch] = React.useContext(AuthStore);

  return (
    <AuthProvider>
      <section style={{padding: '16px'}}>
        <LoginForm />
        
        <button onClick={() => { alert(JSON.stringify(state)) }}>
          test
        </button>
      </section>
    </AuthProvider>
  );
}

render(<App />, document.getElementById('root'));
