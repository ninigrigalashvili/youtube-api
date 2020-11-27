import React from 'react';
import { NavLink } from 'react-router-dom';
import redHeartSquare from '../assets/images/heart-in-square-red.png'

const FavouriteCounter = ({ count }) => {
    return (
        <div className="favourite-counter__container">
            <NavLink to='/favourites'>
                <div className="favourite-counter-image">
                    <div className="counter">{count ? count : '0'}</div>
                    <img src={redHeartSquare} />
                </div>
            </NavLink>
        </div>
    )
}

export default FavouriteCounter;