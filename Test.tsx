import React, { useContext } from 'react';
import { authStore } from './AuthReducer';

export default function Test() {
  const { state, dispatch } = useContext(authStore);

  return (
    <section>
      <hr />
      { JSON.stringify(state) }
      <button onClick={() => { alert(JSON.stringify(state)) }}>
        test
      </button>
    </section>
  )
}