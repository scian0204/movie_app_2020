import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=50`);
    this.setState({movies, isLoading: false});
    console.log(this.state.movies);
  }

  componentDidMount() {
    this.getMovies();
  }

  // test = (movie) => {
  //   return (
  //     <div>
  //       <h3>{movie.title}</h3>
  //       <a href={movie.url}>
  //         <img src={movie.large_cover_image}></img>
  //       </a>
  //       <h4>genres : {movie.genres}</h4>
  //       <h3>{movie.rating} / 10</h3>
  //       <hr/>
  //     </div>
  //   )
  // } this.state.movies.map(movie => this.test(movie))

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        <h1>
          {isLoading ? 'Loading...' : 'We are Ready'
            // movies.map(movie => 
            //   <Movie 
            //     id={movie.id}
            //     title={movie.title}
            //     year={movie.year}
            //     summary={movie.summary}
            //     poster={movie.large_cover_image}
            //   />)
         }
        </h1>
      </div>
    );
  }
}

export default App;
