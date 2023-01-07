import React from 'react';

/*export default function Jsx() {
  return (
    <div id="idname" className="Jsx">
      <h1>Jsx</h1>
    </div>
  );
}*/

//with out Jsx signle Line

/*export default function Jsx() {
  return React.createElement('div', null, 'with out Jsx');
}
*/

//with out Jsx multi line

export default function Jsx() {
  return React.createElement(
    'div',
    { id: 'jsx', classname: 'Jsx' },
    React.createElement('h1', null, 'With out Jsx MultiLine')
  );
}
