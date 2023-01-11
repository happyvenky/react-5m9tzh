import React, { useState } from 'react';

export default function FnState() {
  //without useing Setstate
  /* let user = 'React';
  const stateLess = () => {
    user = 'Js';
    console.log(user);
  };*/

  //using SetState

  const [user, setUser] = useState('React Function');

  const changestateFull = () => {
    setUser('Useing React UseState');
  };

  //using SetState Object

  const [detail, setDeatil] = useState({ name: 'venky', place: 'salem' });

  const nameChanges = () => {
    setDeatil({
      ...detail,
      name: 'NewName',
    });
  };
  const placeChanges = () => {
    setDeatil({
      ...detail,
      place: 'Chennai',
    });
  };

  ///current state display

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    console.log('count', count);
  };
  const decrement = () => {
    setCount(count - 1);
    console.log('count', count);
  };
  return (
    <div>
      <h1>Function State</h1>
      <h2>{user}</h2>
      <button onClick={changestateFull}>Click</button>
      <h2>{detail.name}</h2>
      <h2>{detail.place}</h2>
      <button onClick={nameChanges}>NameChange</button>
      <button onClick={placeChanges}>PlaceChange</button>

      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
