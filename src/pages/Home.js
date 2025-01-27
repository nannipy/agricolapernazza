import React from 'react';
import { Link } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery';

function Home() {
  return (
    <main className="flex flex-col items-center p-5">
      <div className="relative w-full max-w-[1300px] h-96 mb-12 mx-auto">
        <img 
          src="images/ulivitramonto2.jpg"
          alt="Tramonto" 
          className=" mx-auto w-full h-full object-cover rounded-lg shadow-lg object-right"
        />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center rounded-lg">
        
        <Link to="/products" className="font-extrabold text-xl bg-green text-beige py-3 px-6 rounded-xl hover:text-beige transition-colors block md:inline-block md:w-auto w-full md:text-center md:px-8 md:py-4 md:mt-0 mt-4 whitespace-nowrap">
          SCOPRI I NOSTRI PRODOTTI →
        </Link>
      </div>
      </div>
      
     
      <PhotoGallery /> {/* Aggiungi la galleria di foto qui */}
    </main>
    
  );
}

export default Home;