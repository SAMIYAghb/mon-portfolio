import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoi des données du formulaire via EmailJS
    emailjs.sendForm('service_znuqxzg', 'template_qm9cjce', e.target, 'aKTWF7oThceIeJJE6')
      .then((result) => {
        console.log(result.text); // Affiche la réponse de l'API dans la console
        setFormData({ name: '', email: '', message: '' }); // Réinitialise le formulaire
        // Afficher une notification de succès
        toast.success('Message envoyé avec succès !', {
          position: "top-right", // Position de la notification
          autoClose: 5000, // Durée avant fermeture (en ms)
          hideProgressBar: false, // Afficher la barre de progression
          closeOnClick: true, // Fermer au clic
          pauseOnHover: true, // Pause au survol
          draggable: true, // Rendre le toast déplaçable
        });
      }, (error) => {
        console.log(error.text); // Affiche les erreurs dans la console
        toast.error('Erreur lors de l\'envoi du message.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }); 
      });
  };
  
  return (
    <section className="contact" id='contact'>
      <h2>Contactez-moi</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p>
          <i className="fa fa-map-marker" /> Votre Adresse
          </p>
          <p>
          <i className="fa fa-phone" /> Votre Numéro de Téléphone
          </p>
          <p>
          <i className="fa fa-envelope" /> Votre Adresse Email
          </p>
        </div>
      {/* Formulaire de contact */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
      </div>
    </section>
  );
}

export default Contact;

