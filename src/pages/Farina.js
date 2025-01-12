import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';

// Mock database
let mockDB = [
  { id: 7, nome: "La nostra farina di Grano Duro antico Timilia - 1kg", prezzo: 3.00, descrizione: "il nostro Olio umbro", img: "images/farina/farina.jpg" },
  { id: 8, nome: "La nostra crusca di Grano Duro antico Timilia - 2kg", prezzo: 6.00, descrizione: "il nostro Olio umbro", img: "images/farina/farina.jpg" },
  { id: 9, nome: "La nostra crusca - 1kg ", prezzo: 1.50, descrizione: "il nostro Olio umbro", img: "images/farina/crusca.jpg" },

];

function Farina({ addToCart }) {
  const [prodotti, setProdotti] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // In un'app reale, qui faresti una chiamata API
    setProdotti(mockDB);
  }, []);

  const aggiungiProdotto = (nuovoProdotto) => {
    const prodottoConId = { ...nuovoProdotto, id: Date.now() };
    mockDB.push(prodottoConId);
    setProdotti([...mockDB]);
    setShowForm(false);
  };

  const rimuoviProdotto = (id) => {
    mockDB = mockDB.filter(prodotto => prodotto.id !== id);
    setProdotti([...mockDB]);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-feldgrau mb-8">Le nostre Farine</h1>
      
      <div className="mb-16 bg-sage-50 rounded-2xl p-8 shadow-sm bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-feldgrau mb-6">Farina e Crusca di Grano Timilia</h2>
            <p className="mb-4 text-lg text-gray-700">
              La nostra farina è ottenuta dalla macinatura a pietra del pregiato grano duro Timilia, un'antica varietà siciliana 
              coltivata con passione nel Podere Pernazza. Questo metodo tradizionale preserva intatte le proprietà nutritive del 
              cereale, mantenendo un alto contenuto di fibre, proteine e minerali essenziali. La crusca, ricavata dalla parte 
              esterna del chicco, è particolarmente ricca di fibre alimentari, vitamine del gruppo B e antiossidanti. I nostri 
              prodotti sono ideali per chi cerca un'alimentazione sana e genuina, offrendo benefici per la salute digestiva e il 
              controllo glicemico.
            </p>
          </div>
          <div className="order-1 md:order-2 h-96">
            <img src="/images/campo.jpg" alt="Farina di grano Timilia" className="rounded-lg shadow-lg w-full h-full object-cover" />
          </div>
        </div>
      </div>
      
      {showForm && <ProductForm onSubmit={aggiungiProdotto} onCancel={() => setShowForm(false)} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mb-8 gap-20">
        {prodotti.map(prodotto => (
          <ProductCard 
            key={prodotto.id} 
            prodotto={prodotto} 
            onDelete={() => rimuoviProdotto(prodotto.id)}
            onAddToCart={() => addToCart(prodotto)}
          />
        ))}
      </div>
      
    </main>
  );
}

export default Farina;