import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './actions';

function App() {
  const Counter = useSelector(state => state.Counter);
  const IsLogged = useSelector(state => state.IsLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter : {Counter}</h1>

<button onClick={() => dispatch(increment(5))}>+</button>
<button onClick={() => dispatch(decrement())}>-</button>

      {IsLogged ? <h3>Valuable Information I should not see</h3>: ''}
    </div>
  );
}

export default App;

