import React from 'react';
import ArrayProps from './ArrayProps';

const array = [
  {
    id: '1',
    name: 'venky',
    place: 'Salem',
    phone: '123456789',
    add: 'TamilNadu',
  },
  { id: '2', name: 'NewName', place: 'Chennai', phone: '', add: 'TamilNadu' },
];
const array1 = ['venky', 'Salem', '123456789', 'TamilNadu'];

///Destructuring Way1
/* export default function Props(props) {
  return (
    <div>
      <h1>Props</h1>
      <h2>{props.name}</h2>
      <h2>{props.place}</h2>
      <Arrayprops/>
    </div>
  );
}*/

///Destructuring Way2
/* export default function Props({ name, place }) {
  return (
    <div>
      <h1>Props</h1>
      <h2>{name}</h2>
      <h2>{place}</h2>
      <Arrayprops/>
    </div>
  );
}*/

///Destructuring Way3
export default function Props(props) {
  const { name, place } = props;
  return (
    <div>
      <h1>Props</h1>
      <h2>{name}</h2>
      <h2>{place}</h2>
      <ArrayProps deatils={array} />
    </div>
  );
}
