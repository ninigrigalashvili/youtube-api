import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className="not-found__container">
        <h1>404</h1>
        <h2>Sorry!</h2>
        <p>This page isn't available.
        Click the button below
        to go back to the homepage.
        </p>
        <Link to="/" className="not-found-link">Go home</Link>
    </div>
)

export default NotFoundPage;