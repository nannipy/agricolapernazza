import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';



// Mock database
let mockDB = [
  { id: 4, nome: "Spaghetti", prezzo: 3.00, descrizione: "I nostri spaghetti sono fatti con farina di grano antico Timilia che dà un sapore unico e delicato.", img: "images/fusilloni2.jpg" },
  { id: 5, nome: "Fusilloni", prezzo: 3.00, descrizione: "I nostri fusilloni sono fatti con farina di grano antico Timilia che dà un sapore unico e delicato.", img: "images/fusilloni.jpg" },
  { id: 6, nome: "Paccheri", prezzo: 3.00, descrizione: "I nostri penne sono fatti con farina di grano antico Timilia che dà un sapore unico e delicato.", img: "images/fusilloni.jpg" },
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-feldgrau mb-8"> La Nostra Pasta</h1>
      
      {showForm && <ProductForm onSubmit={aggiungiProdotto} onCancel={() => setShowForm(false)} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prodotti.map(prodotto => (
          <ProductCard 
            key={prodotto.id} 
            prodotto={prodotto} 
            onDelete={() => rimuoviProdotto(prodotto.id)}
            onAddToCart={() => addToCart(prodotto)}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Prodotti;