import React from 'react'
import './Movie.scss'
import { useParams } from 'react-router-dom'

export const Movie = () => {

    const { id } = useParams()
    const [currentMovie, setCurrentMovie] = React.useState([])

    React.useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => setCurrentMovie(data))
    }

    return (
        <div className="movie">
            <div className="movie__poster">
                <img src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`} alt="" />

            </div>
            <div className="movie__info">
                <div className="movie__name">{currentMovie ? currentMovie.original_title : ""}</div>
                <div className="movie__tagline">{currentMovie ? currentMovie.tagline : ""}</div>
                <div className="movie__rating">
                    <span>
                        {currentMovie.vote_average}
                        {currentMovie.vote_average >= 7 ? <ion-icon name="star-outline"></ion-icon> : <ion-icon name="star-half-outline"></ion-icon>}
                    </span>
                    <div className="movie__runtime">{currentMovie ? currentMovie.runtime + " mins" : ""}</div>
                </div>
                <div className="movie__releaseDate">{currentMovie ? "Release date: " + currentMovie.release_date : ""}</div>
                <div className="movie__overview">{currentMovie ? currentMovie.overview : ""}</div>
                <div className="links__heading">Useful Links</div>
                <div className="movie__links">
                    
                    {
                        currentMovie && currentMovie.homepage &&
                        // eslint-disable-next-line react/jsx-no-target-blank
                        <a href={currentMovie.homepage} target="_blank" className='movie__link__button'>
                            Homepage
                        </a>
                    }
                    {
                        currentMovie && currentMovie.imdb_id &&
                        // eslint-disable-next-line react/jsx-no-target-blank
                        <a href={"https://www.imdb.com/title/" + currentMovie.imdb_id} target="_blank" className='movie__link__button'>
                            IMDb
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}
