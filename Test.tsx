import React, { useContext } from 'react';
import { AuthStore } from './AuthReducer';

export default function Test() {
  const { state, dispatch } = useContext(AuthStore);

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