import React from 'react';
import hero from '../../assets/hero.png';
import './Hero.css';
// import logo from '../assets/logo.webp';
import '../../index.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importer les icônes LinkedIn et GitHub


function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            {/* <img src={logo} alt="Logo Black Orange" className="logo" /> */}
            <div className="social-icons">
              {/* <a href="#" className="social-icon">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fa fa-youtube"></i>
            </a> */}
            <a href="https://www.linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/votreprofil" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub size={30} />
              </a>
            </div>
            <div className="text-content">
              <p className="hello">Hello 👋</p>
              <h1><span className="am">Je suis</span> Samiya B</h1>

              <p className="description"> Développeur FrontEnd basé à Paris.</p>
              <div className="hero-buttons">
                <a href="#projects" className="primary-button">Voir mes projets</a>
                <a href="#contact" className="secondary-button">Contactez-moi</a>
              </div>
            </div>
            {/* <p className="scroll-down">&lt; scroll down</p> */}
          </div>
          <div className="hero-right">
            <img src={hero} alt="Illustration 3D" className="illustration" />
          </div>

          <div className="orange-cube cube-1">
            <div className="front"></div>
            <div className="back"></div>
            <div className="left"></div>
            <div className="right"></div>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>

          <div className="orange-cube cube-2">
            <div className="front"></div>
            <div className="back"></div>
            <div className="left"></div>
            <div className="right"></div>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>

          <div className="orange-cube cube-3" id="cube-3">
            <div className="front"></div>
            <div className="back"></div>
            <div className="left"></div>
            <div className="right"></div>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Hero;