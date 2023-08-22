import React from 'react';
import logoImage from '../images/K.A.-logo.jpeg';


function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(0, 0, 0)',
    position: 'fixed',
    top: 0,
    height: '100px',
    width: '100%'
};

const logoStyle = {
    height: '80px',
    margin: '5px'
};

  return (
    <nav style={navStyle}>
      <img src={logoImage} alt="my-logo" style={logoStyle}/>
      <ul>
        <li><a class="nav-link" href="#Home">Home</a></li>
        <li><a class="nav-link" href="#About">About</a></li>
        <li><a class="nav-link" href="#Projects">Projects</a></li>
        <li><a class="nav-link" href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
