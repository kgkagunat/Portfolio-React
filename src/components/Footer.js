// FooterSection.jsx
import React from 'react';
import logoFooter from '../images/K.A.-logo.jpeg';


function FooterSection() {
    return (
        <footer className="contact-section-container" id="Contact">
            <img className="image-logo-footer" src={logoFooter} alt="My Logo"/>
            <div className="footer-text">
                <p><strong>Contact</strong></p>
                <p><a className="footer-links" href="mailto:kgkagunat@gmail.com">kgkagunat@gmail.com</a></p>
                <p><a className="footer-links" href="tel:+18089273132">+1 808 927 3132</a></p>
            </div>
        </footer>
    );
}

export default FooterSection;
