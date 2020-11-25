import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchTextField from './SearchTextField';

const YoutubeHeader = (props) => (
            <div className="content-container__navbar">
                <div className="youtube-header">
                    <img src="/images/youtube-circle.png" className="youtube-circle" alt="" />
                    <div className="youtube-header-nav">
                        <NavLink
                            activeClassName="link--active"
                            className="youtube-header-nav__button youtube-header-nav__button--home" exact to='/' >
                            <i className="fas fa-home"></i>
                            <span>Home</span>
                        </NavLink>
                        <NavLink
                            activeClassName="link--active"
                            className="youtube-header-nav__button youtube-header-nav__button--trending" to='/trending'>
                            <i className="fas fa-fire"></i>
                            <span>Trending</span>
                        </NavLink>
                    </div>
                    <SearchTextField onSearch={props.onSearch}/>
                </div>
            </div>
        ) 

export default YoutubeHeader;