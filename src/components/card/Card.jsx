import React, { useEffect } from 'react'
import './Card.scss'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Link } from "react-router-dom"

export const Card = ({ movie }) => {

    const [loading, setLoading] = React.useState(true)

    // Set loading to false after 1.5 seconds to show skeleton loader for 1.5 seconds and then show the movie card with data from API call and then hide the skeleton loader after 1.5 seconds and show the movie card with data from API call
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            {
                loading ?

                    <div className="card">
                        <SkeletonTheme color="#202020" highlightColor="#444">
                            <Skeleton height={300} duration={2} />
                        </SkeletonTheme>
                    </div>
                    :
                    <Link to={`/movie/${movie.id}`}>
                        <div className="card">
                            <div className="card__image">
                                <img src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt={movie.title} />
                            </div>
                            <div className="card__overlay">
                                <div className="card__title">{movie.title}</div>
                                <div className="container">
                                    <div className="card__date">{movie.release_date}</div>
                                    <div className="card__rating">
                                        {movie.vote_average}
                                        {movie.vote_average >= 7 ? <ion-icon name="star-outline"></ion-icon> : <ion-icon name="star-half-outline"></ion-icon>}
                                    </div>
                                </div>
                                <div className="card__overview">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
                            </div>
                        </div>
                    </Link>
            }
        </>
    )
}
