import React from 'react';
// import photo from '../../assets/photo.jpg';
import photo from '../../assets/hero.png';
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="photo">
          <img
            src={photo}
            alt="Profile"
            className="profile-img"
          />
        </div>

        <div className="about-text">
          <div className="about-text">
            <h2>À propos de moi 🚀</h2>
            <p>💻 Passionnée par le développement web et les nouvelles technologies, je conçois des expériences numériques innovantes et performantes. Spécialisée en React, Next.js et Vite, j'accorde une attention particulière à la performance, l’accessibilité et le design. </p>
            <p>🎨 Forte d’une expertise en développement front-end et intégration UI, je transforme les idées en interfaces dynamiques et interactives.</p>
            <p> Mon objectif ? Créer des solutions modernes et engageantes qui offrent une expérience utilisateur fluide et intuitive.</p>
            <p>🔍 Toujours en quête de nouveaux défis, j’aime explorer les dernières tendances du web et optimiser chaque projet pour qu’il se démarque.</p>

            <p>👉 Besoin d'une développeuse pour donner vie à votre projet ? </p>
            <p><a className='contact-link' href="/contact">📩 Contactez-moi !</a></p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
