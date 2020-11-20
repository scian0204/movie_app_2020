import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        
        if (location.state === undefined) {
            history.push('/');
        }

        console.log(location.state);
    }

    printStar(rating) {
        let cnt = Number.parseInt(rating);
        cnt = cnt / 2;
        let star = "";
        for (let i = 0; i < cnt; i++) {
            star += "★"
        }
        return (
            <div className='rs'>
                <span className="star">☆☆☆☆☆</span>
                <span className="rating">{star}</span>
            </div>
        );
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className='detail-container'>
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} /> 
                    <span className='title'><h2>{location.state.title} ({location.state.year})</h2></span>
                    <span className='sum'>
                        <h3>{location.state.rating} / 10 {this.printStar(location.state.rating)}</h3>
                        <ul>
                            {location.state.genres.map((genre, index) => {
                                return <li key={index} className="movie-genre">{genre}</li>
                            })}
                        </ul>
                        <p>{ location.state.summary }</p>
                    </span>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;
