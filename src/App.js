import React from 'react';

function Food(props) {
  return (
    <h3>I Love {props.fav.image}</h3>
  );
}

const foodLike = [
  {
    name: 'Kimchi',
    image: '/public/logo512.png'
  },
  {
    name: 'Pizza',
    image: '/public/logo512.png'
  },
  {
    name: 'Chiken',
    image: '/public/logo512.png'
  }
];

function App() {
  return (
    <div>
      <h1>hello world!</h1>
      <Food fav={foodLike}/>
    </div>
  );
}

export default App;
