import React from 'react';
import { motion } from 'framer-motion';
const products = [
    { src: 'images/olio/olio_hero.jpg', alt: 'Il Nostro Olio EVO', Link: '/olio' },
    { src: 'images/pasta/pasta_2_def.jpg', alt: 'La Nostra Pasta', Link: '/pasta' },
    { src: 'images/farina/farina.jpg', alt: 'La Nostra Farina', Link: '/farina' },
  ];

function Products() {
 
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-black mb-8">I nostri prodotti</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className=''>
            <img src={product.src} alt={product.alt} className="h-80 w-full object-cover" onClick={() => window.location.href = product.Link} />
            <h3 className="text-2xl font-bold text-black text-center p-10 bg-white"> {product.alt} </h3>
            </div>
            
          </motion.div>
          

        ))}

      

      </div>
    </main>
  );
}

export default Products;