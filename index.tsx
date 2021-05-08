import React from 'react';
import { render } from 'react-dom';

import "antd/dist/antd.css";

import LoginForm from './LoginForm';

function App() {
  return (
    <section style={{padding: '16px'}}>
      <LoginForm />
    </section>
  );
}

render(<App />, document.getElementById('root'));
