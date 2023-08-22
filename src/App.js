import React from 'react';
import '../src/assets/style.css';
import Navbar from './components/Navbar';
import MainArea from './components/MainArea';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <MainArea />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
