// ProjectSection.jsx
import React from 'react';
import ImageJustyn from '../images/Down-on-the-sidewalk-in-waikiki.png';
import ImageMcd from '../images/MCD-Hawaii.jpg';
import ImageHt from '../images/Hawaiian-Telcom.jpg';
import ImageGroupProject from '../images/Vacation Planner Website.png';
import ImageGroupProject2 from '../images/management-portal.png';


function ProjectSection() {
    return (
        <section className="project-section-container" id="Projects">
            <h2>Projects</h2>
            <div className="project-area">

                {/* Project Card - Justyn */}
                <div className="project-card-justyn">
                    <a className="project-links" href="https://vimeo.com/669991844" target="_blank" rel="noreferrer">
                        <img className="project-image-justyn" src={ImageJustyn} alt="Down on the Sidewalk in Wakiki short film poster" />
                    </a>
                    <h3>Short Film Project</h3>
                    <p className="project-text">
                        This project was a collaboration with <a className="justyn-link" href="https://www.instagram.com/jahchong/reels/?hl=en" target="_blank" rel="noreferrer">Justyn Ah Chong</a>, independent film maker. Worked on the audio for this short film and was my very first short film project. Film was submitted to HIFF.
                    </p>
                    <hr />
                </div>

                {/* Project Card - MCD */}
                <div className="project-card-mcd">
                    <a className="project-links" href="https://www.youtube.com/watch?v=02-VYUIJJp0" target="_blank" rel="noreferrer">
                        <img className="project-image-mcd" src={ImageMcd} alt="McDoanld's of Hawaii Logo" />
                    </a>
                    <h3>Commercial Project One</h3>
                    <p className="project-text">
                        This project was for one of my clients. <a className="mvnp-link" href="https://www.mvnp.com/" target="_blank" rel="noreferrer">MVNP</a> tasked me with dealing with the audio for this local McDonald's commercial. It is a :15 second ad for web.
                    </p>
                    <hr />
                </div>

                {/* Project Card - HT */}
                <div className="project-card-ht">
                    <a className="project-links" href="https://www.facebook.com/hawaiiantelcom/videos/say-hello-to-fiopticsjust-imagine-if-everyone-in-hawaii-had-fiber-internet-imagi/357556153074966/" target="_blank" rel="noreferrer">
                        <img className="project-image-ht" src={ImageHt} alt="Hawaiian Telcom Logo" />
                    </a>
                    <h3>Commercial Project Two</h3>
                    <p className="project-text">
                        This project was for one of my clients. <a className="anthology-link" href="https://www.anthologygroup.com/" target="_blank" rel="noreferrer">Anthology</a> tasked me with dealing with the audio recording and mixing for Hawaiian Telcom. This is a :60 second ad for broadcast TV.
                    </p>
                    <hr />
                </div>

                {/* Project Card - Group Project */}
                <div className="project-card-group-project">
                    <a className="project-links" href="https://kgkagunat.github.io/Vacation-Planner/" target="_blank" rel="noreferrer">
                        <img className="project-image-group-project" src={ImageGroupProject} alt="Group Project Vacation-Planner" />
                    </a>
                    <h3>Vacation Planner</h3>
                    <p className="project-text">
                        This was a collaborative group project with my classmates in my bootcamp from UC Davis Bootcamp. Contains a planner in which the user will input their activities. It is a 3-day weekend (Fri-Sun) planner that spans the United States cities. Contains integrated Google Map Embed API and OpenWeather API.
                    </p>
                    <hr />
                </div>

                {/* Project Card - Group Project 2 */}
                <div className="project-card-group-project-2">
                    <a className="project-links" href="https://afternoon-hollows-57432-406c1c702d75.herokuapp.com/login" target="_blank" rel="noreferrer">
                        <img className="project-image-group-project-2" src={ImageGroupProject2} alt="Management-Portal" />
                    </a>
                    <h3>Management-Portal</h3>
                    <p className="project-text">
                        This was a collaborative group project with my classmates in my bootcamp from UC Davis Bootcamp. Built for managers/ceo to manage their departments, jobs, and employees. Ability to create, edit, and delete. To login use this Username: JohnDoe@test.com -- Password: test1234
                    </p>
                    <hr />
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;
