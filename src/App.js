import React from 'react';
import './style.css';
import { About } from './About';
import Jsx from './Jsx';
import Props from './Props';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <br />
      -----------------------------------------------------------------
      <About />
      -----------------------------------------------------------------
      <Jsx />
      -----------------------------------------------------------------
      <Props name="venky" place="Salem" />
      -----------------------------------------------------------------
    </div>
  );
}
