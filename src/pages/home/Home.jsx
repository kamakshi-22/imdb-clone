import React, { useEffect, useState } from 'react'
import './Home.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import { MovieList } from '../../components/movieList/MovieList';

export const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])


    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={5000}>
                    {
                        popularMovies.map((movie, index) => (
                            // link to movie page with id as parameter
                            <Link to={`/movie/${movie.id}`}>
                                <div key={index}>
                                    <img src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt={movie.title} />
                                    <div className='poster__overlay'>
                                        <div className='poster__title'>{movie.title}</div>
                                        <div className='container'>
                                            <div className='poster__date'>{movie.release_date}</div>
                                            <div className='poster__rating'>
                                                        {movie.vote_average}
                                                        {movie.vote_average >= 7 ? <ion-icon name="star-outline"></ion-icon> : <ion-icon name="star-half-outline"></ion-icon>}
                                            </div>
                                        </div>
                                        <div className='poster__overview'>{movie.overview}</div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}
