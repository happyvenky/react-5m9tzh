import React, { useState, useEffect } from 'react';

//step-1
/*export default function UseEffect() {
  console.log('start');
  useEffect(() => {
    console.log('useEffect Call');
  });
  return (
    <div>
      <h1>UseEffect</h1>
      {console.log('rendering')}
    </div>
  );
}*/
//step-2
/*export default function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect Call');
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>UseEffect</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Add</button>
    </div>
  );
}*/

//step-3
export default function UseEffect() {
  const [item, setItem] = useState('users');
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${item}`)
      .then((item) => item.json())
      .then((json) => setData(json));
  }, [item]);

  return (
    <div>
      <h1>UseEffect</h1>
      <button onClick={() => setItem('users')}>User</button>
      <button onClick={() => setItem('photos')}>Photos</button>
      {item === 'users' ? (
        <div className="User">
          <table border="1" cellspacing="0" cellpadding="0">
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
            {data.map((data) => (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.address.city}</td>
              </tr>
            ))}
          </table>
        </div>
      ) : (
        <div className="photo">
          <table border="1" cellspacing="0" cellpadding="0">
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th>Imgage</th>
            </tr>
            {data.map((data) => (
              <tr>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>
                  <img src={data.url} width="100" height="100" />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}
