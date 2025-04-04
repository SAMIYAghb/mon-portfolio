import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Projects from './components/project/Project';
// import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import ProjectDetails from './components/project/ProjectDetails/ProjectDetails';
// import Navbar from './components/Navbar';
import './index.css'
import About from './components/about/About';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //     <Route path="/" element={<Hero />} /> 
    //       <Route path="/projects" element={<Projects />} />
    //       <Route path="/projects/:id" element={<ProjectDetails />} />
    //       <Route path="/blog" element={<Blog />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </div>
    // </Router>
    <Router>
      <div className="App">
        {/* Navbar pour la navigation */}
        {/* <Navbar /> */}

        <Routes>
          {/* Route principale - Page d'accueil */}
          <Route path="/" element={
            <>
              <Hero />
              <main>
                <About />  {/* Section About */}
                <Projects />  {/* Section Projects */}
                <Contact />  {/* Section Contact */}
              </main></>

          } />

          {/* Routes pour afficher les détails d'un projet spécifique */}
          <Route path="/projects/:id" element={<ProjectDetails />} />

          {/* Routes supplémentaires (si besoin) */}
          {/* Exemple de routes pour le blog ou autre */}
          <Route path="/blog" element={<h1>Blog</h1>} />

          {/* Route par défaut pour une page 404 */}
          <Route path="*" element={<h1>Page non trouvée</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;