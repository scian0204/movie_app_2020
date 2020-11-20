import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about-container">
            <span>
                React-app Movie App 2020
            </span>
            <span>201930107 남궁찬</span>
        </div>
    );
}

export default About;