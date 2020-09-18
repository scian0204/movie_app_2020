import React from 'react';

function Food({fav}) {
  return (
    <h3>I Love {fav}</h3>
  );
}

function App() {
  // return <div className="App" />
  return (
    <div>
      <h1>hello world!</h1>
      <Food fav="kimchi" />
      <Food fav="pizza" />
      <Food fav="chicken" />
      <Food fav="dumpling" />
    </div>
  );
}

export default App;
