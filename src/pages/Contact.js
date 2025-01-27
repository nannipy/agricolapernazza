import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui implementeresti la logica per inviare il messaggio
    console.log('Messaggio inviato:', formData);
    // Resetta il form
    setFormData({ nome: '', email: '', messaggio: '' });
    alert('Messaggio inviato con successo!');
  };

  return (
    <main className="max-w-6xl mx-auto">

      <section className="relative w-full h-72 mb-12 ">
        <img src="/images/tramonto3.jpeg" alt="Contattaci" className=" w-full h-full object-cover rounded-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
          <h1 className="text-5xl font-bold text-white">Contattaci</h1>
        </div>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-black text-extrabold mb-4">I nostri contatti</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <FaEnvelope className="text-black text-semibold mr-2" />
              <a href="mailto:agricolapernazza@gmail.com" className="text-black text-semibold hover:underline">
                agricolapernazza@gmail.com
              </a>
            </p>
            <p className="flex items-center">
              
              <FaPhoneAlt className="mr-2 text-black text-extrabold" />
              <a href="tel:+393341287766" className="text-black text-semibold hover:underline">
                +39 334 1287766
              </a>
            </p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="text-black text-semibold mr-2" />
              Strada di Cecanibbio, Amelia TR
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-black text-extrabold mb-4">Dove siamo</h2>
            <div className="aspect-w-18 aspect-h-10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1348.189212643293!2d12.440250833600794!3d42.54282598602986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ee0831814d863%3A0x296fe94f4c5950ac!2sStrada%20di%20Cecanibbio%2C%2005022%20Amelia%20TR!5e0!3m2!1sit!2sit!4v1725113824002!5m2!1sit!2sit"
                style={{border:0, filter: 'grayscale(20%) invert(0%)'}} 
                allowFullScreen="" 
                loading="lazy"
                className="w-full h-56 rounded-lg"
                title="Mappa della nostra sede"
              ></iframe>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">Inviaci un messaggio</h2>
          <form onSubmit={handleSubmit} className="space-y-4 pb-12">
            <div>
              <label htmlFor="nome" className="block text-black mb-1">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-black mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="messaggio" className="block text-black mb-1">Messaggio</label>
              <textarea
                id="messaggio"
                name="messaggio"
                value={formData.messaggio}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green text-white px-6 py-3 rounded-md hover:text-beige transition-colors"
            >
              Invia Messaggio
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
