import React from 'react';
import '../assets/styles/notfound.css'
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <div id="particles-js">
                <canvas class="particles-js-canvas-el"></canvas>
            </div>
            <div class="container">
                <div id="text" class="text">
                    <h1>404</h1>
                    <p>Oops! page not found</p>
                    <Link to='/login' className='btn'>Go Back</Link>
                </div>
                <div id="glitchBox"></div>
            </div>

        </div>
    );
}

export default Notfound;
