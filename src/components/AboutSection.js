// AboutSection.jsx
import React from 'react';
import whiteWallpaper from '../images/white-wallpaper.png';
import headshot from '../images/Screen Shot 2023-03-26 at 8.30.43 PM.png';

function AboutSection() {
    const aboutContainerStyle = {
        backgroundColor: 'white',
        backgroundImage: `url(${whiteWallpaper})`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '80px'
    };

    return (
        <section style={aboutContainerStyle} className="about-section-container" id="About">
            <div className="my-info">
                <h2>About Me</h2>
                <p>Aloha! My name is Kamauliola Agunat and I am an audio engineer that is based in Hawaii. I've been an audio engineer for a few years and currently a freelancer. I enjoy collaborating with others, whether it be clients or personal projects.</p>
            </div>

            <div className="headshot-container">
                <img className="my-face" src={headshot} alt="my-headshot" />
            </div>
        </section>
    );
}

export default AboutSection;
