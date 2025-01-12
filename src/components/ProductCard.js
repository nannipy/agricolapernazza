import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function ProductCard({ prodotto, onDelete, onAddToCart }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    setIsAnimating(true);
    onAddToCart(prodotto);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <motion.div 
      className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-sm h-[600px] flex flex-col justify-between"
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-feldgrau h-16 overflow-hidden text-center">{prodotto.nome}</h3>
        <div className="relative h-72 mb-4">
          <img 
            src={prodotto.img} 
            alt={prodotto.nome} 
            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
        <p className="text-feldgrau text-center mb-4">{prodotto.prezzo.toFixed(2)} €</p>
        <Link to={`/prodotto/${prodotto.id}`}
          className="bg-beige font-extrabold text-black px-4 py-6 w-auto rounded-2xl justify-center flex items-center mb-2"
        >
          Maggiori Dettagli
        </Link>
        <div className="mt-0">
          <AnimatePresence>
            <motion.button 
              onClick={handleAddToCart}
              className="bg-green font-extrabold text-beige px-4 py-6 w-full rounded-2xl justify-center flex items-center"
              whileTap={{ scale: 0.95 }}
              animate={isAnimating ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              {isAnimating ? "Aggiunto!" : "Aggiungi al Carrello"}
            </motion.button>
          </AnimatePresence>
        </div>
    </div>
    </motion.div>
  );
}

export default ProductCard;