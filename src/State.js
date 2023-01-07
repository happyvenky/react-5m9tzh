import React, { Component } from 'react';

/*class State extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome to state Component',
    };
  }
  heandler() {
    this.setState({
      message: 'State Value was changed',
    });
  }
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.heandler()}>click</button>
      </div>
    );
  }
}*/
class State extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incremnt() {
    /*this.state.count = this.state.count + 1;
    console.log(this.state.count);*/
    /* this.setState(
      {
        count: this.state.count + 1,
      },
      console.log(this.state.count)
    );*/

    /*this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log('calBack value', this.state.count);
      }
    );
    console.log(this.state.count);*/

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <h1>Increment value useing state</h1>
        <h3>Count Value {this.state.count}</h3>
        <button onClick={() => this.incremnt()}>Increment</button>
      </div>
    );
  }
}
export default State;
