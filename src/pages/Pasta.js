import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';



// Mock database
let mockDB = [
  { id: 5, nome: "Fusilloni con grano antico Timilia Pernazza - 500g", prezzo: 3.00, descrizione: "I nostri fusilloni sono fatti con farina di grano antico Timilia che dà un sapore unico e delicato.", img: "images/fusilloni.jpg" },
  { id: 4, nome: "Tagliatelle con grano antico Timilia Pernazza - 350g", prezzo: 3.00, descrizione: "Le nostre tagliatelle sono fatti con farina di grano antico Timilia che dà un sapore unico e delicato.", img: "images/tagliatelle.jpg" },

];

function Prodotti({ addToCart }) {
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
      <h1 className="text-4xl font-bold text-feldgrau mb-8"> La Nostra Pasta</h1>
      
      <div className="mb-16 bg-sage-50 rounded-2xl p-8 shadow-sm bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-feldgrau mb-6">Pasta Artigianale di Grano Timilia</h2>
            <p className="mb-4 text-lg text-gray-700">
              La nostra pasta è prodotta esclusivamente con grano duro Timilia 100%, un'antica varietà di grano siciliano 
              coltivato con cura nel Podere Pernazza. La farina viene ottenuta attraverso un processo di macinatura a pietra, 
              che preserva intatte le proprietà nutritive e organolettiche del cereale. La scelta di utilizzare farine antiche 
              non lavorate può aiutare a ridurre il colesterolo cattivo e migliorare la digestione, inoltre tende ad avere un 
              indice glicemico più basso rispetto alle farine moderne, prevenendo malattie croniche come il diabete.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src="/images/pasta_2.jpg" alt="Pasta artigianale di grano Timilia" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </div>
      
      {showForm && <ProductForm onSubmit={aggiungiProdotto} onCancel={() => setShowForm(false)} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
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

export default Prodotti;