import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div class="header">
            <Link to='/imdb-clone' class="header__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="logo" />
            </Link>
            <div class="header__nav">
                <Link to="/movies/popular" class="nav__item">Popular</Link>
                <Link to="/movies/top_rated" class="nav__item">Top Rated</Link>
                <Link to="/movies/upcoming" class="nav__item">Upcoming</Link>
            </div>
        </div>
    )
}
