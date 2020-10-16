import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  state = {
    count: 0,
  };

  // setCount = (num) => this.setState(cur => ({count: cur.count + num}));
  add = () => this.setState(cur => ({count: cur.count + 1}));
  minus = () => this.setState(cur => ({count: cur.count - 1}));

  componentDidMount() {
    console.log("component Did Mount");
  }

  componentDidUpdate() {
    console.log("component Did Update");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
