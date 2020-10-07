
import PropTypes from 'prop-types';
import img_kimchi from './images/kimchi.jpg';
import img_pizza from './images/pizza.jpg';
import img_chicken from './images/chicken.jpg';

function Food({name, picture, alt, rating}) {
  return (
    <div>
      <h2>I Love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={alt} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: img_kimchi,
    alt: '김치 사진',
    rating: 5
  },
  {
    id: 2,
    name: 'Pizza',
    image: img_pizza,
    alt: '피자 사진',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Chicken',
    image: img_chicken,
    alt: '치킨 사진',
    rating: 4.5
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => 
        <Food 
          alt={dish.alt}
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      )}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
