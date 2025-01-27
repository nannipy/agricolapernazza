import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLeaf, FaLightbulb, FaUsers} from 'react-icons/fa';


function About() {
  return (
    <main>
    <motion.div 
      className="bg-beige text-feldgrau p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative w-full max-w-[1300px] h-96 mb-12 mx-auto">
        <img src="/images/girasoli.jpg" alt="Famiglia Pernazza" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
          <h1 className="text-5xl font-bold text-center text-white ">La Famiglia Pernazza</h1>
        </div>
      </section>

      {/* Introduzione */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Tradizione e Innovazione dal Cuore dell'Umbria</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto text-center">
          La nostra azienda agricola è una vera impresa di famiglia, guidata da generazioni di passione e dedizione alla terra. 
          Siamo orgogliosi di portare avanti una tradizione che si rinnova ogni giorno, combinando metodi antichi con tecnologie moderne 
          per offrire prodotti di altissima qualità.
        </p>
      </section>

      {/* La Nostra Storia */}
      <section className="bg-green text-white py-12 rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">La Nostra Storia</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center text-xl">
            <div>
              <p className="mb-4">
                A capo c'è mio padre Federico, insieme a mia madre Silvana, che da sempre sono il cuore pulsante della nostra attività. 
                Con noi ci sono anche mia sorella Giulia e mio fratello Giovanni, che contribuiscono con energia e idee fresche, 
                mentre io, Giacomo, porto avanti la tradizione con uno sguardo rivolto al futuro.
              </p>
              <p>
                Accanto a noi, ci sono i nostri fidati contadini Mario e Mirko, che conoscono ogni angolo delle nostre terre e 
                lavorano con la stessa dedizione della famiglia. Non possiamo dimenticare i nostri nonni, Fernanda e Pietro, 
                che ci hanno trasmesso i valori su cui si basa la nostra azienda, e i nostri zii Giovanna, Fiorenza e Ludovico, 
                che ci offrono sempre il loro prezioso supporto.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/vendemmia.jpg" alt="La famiglia al lavoro" className="rounded-lg shadow-lg" />
              <img src="/images/olive_trattore.jpg" alt="La nostra produzione" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Il Nostro Impegno */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Il Nostro Impegno</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaLeaf className="mr-2 text-green" />
              Sostenibilità
            </h3>
            <p>Stiamo sviluppando colture sostenibili e biologiche, per garantire un futuro prospero e sano per la nostra terra.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaLightbulb className="mr-2 text-yellow-500" />
              Innovazione
            </h3>
            <p>Combiniamo metodi tradizionali con tecnologie moderne per migliorare costantemente la qualità dei nostri prodotti.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaUsers className="mr-2 text-blue-500" />
              Comunità
            </h3>
            <p>Siamo profondamente radicati nella nostra comunità locale e ci impegniamo a contribuire al suo benessere e sviluppo.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-feldgrau text-black py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Scopri i Nostri Prodotti</h2>
          <p className="text-lg mb-6">Assapora la tradizione e la qualità dei prodotti della Famiglia Pernazza.</p>
          <Link
            to="/products"
            className="bg-green text-white font-bold py-3 px-6 rounded-lg hover:bg-beige hover:text-feldgrau transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
              Visita il Nostro Shop  
          </Link>
        </div>
      </section>
    </motion.div>
    </main>
  );
}

export default About;