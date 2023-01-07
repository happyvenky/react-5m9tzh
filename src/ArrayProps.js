import React from 'react';

/*export default function Arrayprops({ deatils }) {
  return (
    <div>
      <h1>ArrayProps</h1>
      <ul>
        {deatils.map((item) => {
          return <h3>{item}</h3>;
        })}
      </ul>
    </div>
  );
} */

export default function Arrayprops({ deatils }) {
  return (
    <div>
      <h1>ArrayProps</h1>
      <ul>
        {deatils.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <h3>{item.place}</h3>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
