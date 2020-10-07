import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
  };

  setCount = (num) => this.setState(cur => ({count: cur.count + num}));

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={()=>this.setCount(1)}>Add</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={()=>this.setCount(-1)}>Minus</button>
      </div>
    );
  }
}

export default App;
