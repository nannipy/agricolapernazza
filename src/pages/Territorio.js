import React from 'react';

function Territorio() {
  return (
    <main className="bg-beige text-outer-space p-5">
      {/* Hero Section */}
      <section className="relative w-full max-w-[1300px] h-96 mb-12 mx-auto">
        <img src="/images/amelia.jpg" alt="Panorama di Amelia" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
          <h1 className="text-5xl font-bold text-white">Il Nostro Territorio:  Amelia </h1>
        </div>
      </section>

      {/* Introduzione */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Un Viaggio nel Cuore dell'Umbria</h2>
        <p className="text-lg mb-4">
          Amelia, situata nella zona sud-ovest dell'Umbria, è un gioiello nascosto ricco di storia e bellezza naturale. 
          Vicino al confine con il Lazio, questa antica città si trova nell'estremità sud della catena dei Monti Amerini, 
          offrendo un panorama mozzafiato e un clima ideale per la coltivazione di prodotti di alta qualità.
        </p>
      </section>

      {/* Storia */}
      <section className="bg-beige text-black py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 ">Una Storia Millenaria</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className=" text-2xl font-semibold mb-4">Epoca Preromana e Romana</h3>

              
              <p className="flex-col-2 text-lg">
                Fondata secondo la leggenda nel 1134 a.C., Amelia vanta una storia ricchissima. Le sue mura megalitiche 
                e i numerosi reperti archeologici testimoniano un passato florido, culminato nell'importante ruolo di 
                Municipio durante l'epoca romana.
              </p>
              <img src="/images/germanico2.jpg" alt="germanico" className="  flex w-full h-80 object-cover rounded-lg mt-2 mb-4" />


             
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Medioevo e Oltre</h3>
              
              <p className="text-lg">
                Dopo la caduta dell'Impero Romano, Amelia passò sotto il controllo di vari regni, diventando un importante 
                centro strategico conteso tra Longobardi e Bizantini. Nel Medioevo, la città si schierò con il fronte ghibellino, 
                giocando un ruolo chiave nelle dinamiche politiche dell'epoca.
              </p>
              <img src="/images/castello_amelia.jpg" alt="castello" className="  flex w-full h-80 object-cover rounded-lg mt-2 mb-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Attrazioni */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Scopri le Meraviglie di Amelia</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Le Mura Ciclopiche</h3>
            <img src="/images/muraciclopiche.jpg" alt="Le Mura Ciclopiche" className="w-full h-40 object-cover rounded-lg mb-4" />
            <p>Imponenti mura poligonali che circondano il centro storico, testimonianza dell'antica potenza della città.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Il Museo Civico</h3>
            <img src="/images/museocivico.jpg" alt="Il Museo Civico" className="w-full h-40 object-cover rounded-lg mb-4" />
            <p>Ospita reperti preromani, romani e medievali, tra cui la famosa statua bronzea del Germanico.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Palazzi Rinascimentali</h3>
            <img src="/images/palazzopetrignani.jpg" alt="Palazzi Rinascimentali" className="w-full h-40 object-cover rounded-lg mb-4" />
            <p>Ammirate l'eleganza di Palazzo Petrignani e Palazzo Farrattini, gioielli dell'architettura rinascimentale.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green text-white py-12 text-center rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Vieni a Scoprire Amelia</h2>
          <p className="text-lg mb-6">Immergiti nella storia, assapora i nostri prodotti e vivi un'esperienza indimenticabile.</p>
          <button className="bg-white text-green font-bold py-2 px-4 rounded hover:bg-beige transition duration-300">
            Pianifica la Tua Visita
          </button>
        </div>
      </section>
    </main>
  );
}

export default Territorio;
