import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'
import React, { Component }  from 'react';

function MainNavigation () {
 
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                React Meetups
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Some Link</Link>
                    </li>

                    <li>
                        <Link to="/new-mmetup">New Meetup</Link>
                    </li>

                    <li>
                        <Link to="/favorites">My Favorite</Link>
                    </li>

                    
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;