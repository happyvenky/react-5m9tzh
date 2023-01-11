import React from 'react';
import './style.css';
import { About } from './About';
import Jsx from './Jsx';
import Props from './Props';
import State from './State';
import FnState from './FnState';

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
      <State />
      ----------------------------------------------------------------
      <FnState/>
    </div>
  );
}
