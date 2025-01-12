import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';

// Mock database
let mockDB = [
  { id: 1, nome: "Il nostro Olio EVO - 1l", prezzo: 13.00, descrizione: "il nostro Olio umbro", img: "images/olio/olio_p2.jpg" },
  { id: 2, nome: "Il nostro Olio Evo - 5l", prezzo: 65.00, descrizione: "il nostro Olio umbro", img: "images/olio/olio_g1.jpg" },
];

function Olio({ addToCart }) {
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
    <main className="container mx-auto px-4 py-8 ">
      <h1 className="text-4xl font-bold text-feldgrau mb-8">Il Nostro Olio</h1>
      
      <div className="mb-16 bg-sage-50 rounded-2xl p-8 shadow-sm bg-white ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-feldgrau mb-6">L'Oro Verde dell'Umbria</h2>
            <p className="mb-4 text-lg text-gray-700">
              Il nostro olio extravergine d'oliva è prodotto con passione e dedizione nelle colline di Amelia, nel cuore verde dell'Umbria. 
              Ottenuto esclusivamente attraverso processi meccanici a freddo, questo metodo di estrazione preserva tutte le preziose 
              caratteristiche organolettiche e i benefici nutrizionali delle olive.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              La spremitura a freddo, effettuata a temperature inferiori a 27°C, garantisce un olio di altissima qualità, 
              caratterizzato da un gusto equilibrato, con note fruttate e un retrogusto leggermente piccante, 
              tipico degli oli umbri di alta qualità.
            </p>
          </div>
          <div className="order-1 md:order-2 h-96 ">
            <img 
              src="/images/olio/olio_hero.jpg" 
              alt="Produzione olio d'oliva ad Amelia" 
              className="rounded-2xl shadow-md w-auto h-full object-cover mx-auto"
            />
          </div>
        </div>
      </div>

      
      {showForm && <ProductForm onSubmit={aggiungiProdotto} onCancel={() => setShowForm(false)} />}
      <div className="flex justify-center mb-8 gap-20">
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

export default Olio;