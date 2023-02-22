import React, {useEffect} from 'react'
import './MovieList.scss'
import { Card } from '../card/Card'
import { useParams } from 'react-router-dom'

export const MovieList = () => {

    const { type } = useParams()
    const [movieList, setMovieList] = React.useState([])

    // create a function to fetch data from API and then call that function in useEffect hook to fetch data from API when the component is mounted and when the type parameter changes in the URL and then set the data to the movieList state variable and then map through the movieList state variable to display the movie cards
    useEffect(() => { getData()}, [])

    useEffect(() => { getData()}, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <>
            <div className="movieList__title">
                {type === "popular" ? "Popular Movies" : type === "top_rated" ? "Top Rated Movies" : type === "upcoming" ? "Upcoming Movies" : "Now Playing Movies"}
            </div>
            <div className="movieList">
                {
                    movieList.map((movie, index) => (
                        <Card key={index} movie={movie} />
                    ))
                }
            </div>
        </>
    )
}
