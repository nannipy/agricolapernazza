import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, Minus, Award, Leaf, ThermometerSun } from 'lucide-react';

// Mock detailed product database


const detailedProductsDB = [
  {
    id: 1,
    nome: "Il nostro Olio EVO - 1l",
    prezzo: 13.00,
    descrizione: "il nostro Olio umbro",
    categoria: "olio",
    dettagliProduzione: "Il nostro olio extravergine d'oliva viene prodotto seguendo metodi tradizionali tramandati da generazioni. Le olive vengono raccolte a mano nel momento ottimale di maturazione e lavorate entro 24 ore dalla raccolta nel nostro frantoio.",
    caratteristiche: {
      colore: "Verde dorato con riflessi brillanti",
      profumo: "Fruttato medio con note di erba fresca e carciofo",
      sapore: "Equilibrato con un leggero piccante e retrogusto di mandorla",
      acidita: "≤ 0.3%"
    },
    valoriNutrizionali: {
      porzione: "100ml",
      valoreEnergetico: "824 kcal",
      grassi: "92g",
      acidoOleico: "73g",
      vitaminaE: "22mg"
    },
    immagini: [
      "/images/olio/olio_p2.jpg",
      "/images/olio/olio-shoot-sm.jpg",
      "/images/olio/olio.jpg",
      "/images/olio/olio-shoot.jpg"
    ],
    certificazioni: [
      { nome: "Biologico", icon: "Leaf", descrizione: "Prodotto secondo standard biologici" },
      { nome: "DOP Umbria", icon: "Award", descrizione: "Denominazione di Origine Protetta" },
      { nome: "Spremitura a Freddo", icon: "ThermometerSun", descrizione: "Lavorazione a temperatura controllata" }
    ],
    consiglieUso: "Ideale per condire insalate, bruschette e zuppe. Perfetto per la cottura a bassa temperatura.",
    processoLavorazione: [
      {
        titolo: "Raccolta",
        descrizione: "Le olive vengono raccolte manualmente nel periodo ottimale",
        immagine: "/images/ulivi.jpg"
      },
      {
        titolo: "Spremitura",
        descrizione: "Lavorazione a freddo entro 24 ore dalla raccolta",
        immagine: "/images/produzione.jpg"
      },
      {
        titolo: "Filtrazione",
        descrizione: "Processo naturale per garantire la massima purezza",
        immagine: "/images/olio/filtrazione.jpg"
      }
    ]
  },
  {
    id: 2,
    nome: "Il nostro Olio EVO - 5l",
    prezzo: 65.00,
    descrizione: "Olio extravergine d'oliva di altissima qualità prodotto in Umbria - Formato famiglia",
    categoria: "olio",
    dettagliProduzione: "Il nostro olio extravergine d'oliva viene prodotto seguendo metodi tradizionali tramandati da generazioni. Le olive vengono raccolte a mano nel momento ottimale di maturazione e lavorate entro 24 ore dalla raccolta nel nostro frantoio. La spremitura a freddo e la lavorazione meccanica garantiscono la massima qualità del prodotto finale.",
    caratteristiche: {
      colore: "Verde dorato con riflessi brillanti",
      profumo: "Fruttato medio con note di erba fresca e carciofo",
      sapore: "Equilibrato con un leggero piccante e retrogusto di mandorla",
      acidita: "≤ 0.3%"
    },
    valoriNutrizionali: {
      porzione: "100ml",
      valoreEnergetico: "824 kcal",
      grassi: "92g",
      acidoOleico: "73g",
      vitaminaE: "22mg"
    },
    immagini: [
      "/images/olio/olio_hero.jpg",
      "/images/olio/olio-retro.jpg",
      "/images/olio/olio_g3.jpg",
      "/images/olio/latteolio4.jpeg"
    ],
    certificazioni: [
      { nome: "Biologico", icon: "Leaf", descrizione: "Prodotto secondo standard biologici" },
      { nome: "DOP Umbria", icon: "Award", descrizione: "Denominazione di Origine Protetta" },
      { nome: "Spremitura a Freddo", icon: "ThermometerSun", descrizione: "Lavorazione a temperatura controllata" }
    ],
    consiglieUso: "Ideale per condire insalate, bruschette e zuppe. Perfetto per la cottura a bassa temperatura. Si consiglia di conservare in luogo fresco e asciutto, al riparo dalla luce diretta.",
    processoLavorazione: [
      {
        titolo: "Raccolta",
        descrizione: "Le olive vengono raccolte manualmente nel periodo ottimale di maturazione, tra ottobre e novembre",
        immagine: "/images/ulivi.jpg"
      },
      {
        titolo: "Spremitura",
        descrizione: "Lavorazione a freddo entro 24 ore dalla raccolta per preservare tutte le proprietà organolettiche",
        immagine: "/images/produzione.jpg"
      },
      {
        titolo: "Filtrazione",
        descrizione: "Processo naturale di decantazione e filtrazione delicata per garantire la massima purezza",
        immagine: "/images/olio/filtrazione.jpg"
      }
    ]
  },
  {
    id: 3,
    nome: "Tagliatelle con grano antico Timilia - 350g",
    prezzo: 3.00,
    descrizione: "Tagliatelle artigianali prodotte con grano antico Timilia",
    categoria: "pasta",
    dettagliProduzione: "Le nostre tagliatelle sono prodotte utilizzando esclusivamente farina di grano Timilia, un'antica varietà di grano duro siciliano coltivato nel nostro podere. La pasta viene trafilata al bronzo e essiccata lentamente a bassa temperatura per preservare al meglio le caratteristiche nutrizionali e il sapore autentico del grano.",
    caratteristiche: {
      colore: "Ambrato intenso tipico del grano Timilia",
      consistenza: "Ruvida e porosa",
      tempoCottura: "4-5 minuti",
      conservazione: "24 mesi in luogo fresco e asciutto"
    },
    valoriNutrizionali: {
      porzione: "100g",
      valoreEnergetico: "356 kcal",
      carboidrati: "72g",
      proteine: "14g",
      fibre: "3.2g"
    },
    immagini: [
      "/images/pasta/tagliatelle.jpg",
      "/images/pasta/tagliatelle2.jpg",
      "/images/pasta/top_tagliatelle.jpg",
      "/images/pasta/tagliatelle4.jpg"
    ],
    certificazioni: [
      { nome: "Biologico", icon: "Leaf", descrizione: "Prodotto secondo standard biologici" },
      { nome: "Grani Antichi", icon: "Award", descrizione: "100% Grano antico Timilia" },
      { nome: "Artigianale", icon: "ThermometerSun", descrizione: "Produzione e essiccazione lenta" }
    ],
    consiglieUso: "Perfette con sughi leggeri a base di verdure o pesce. Ottimo risalto con condimenti a base di pomodoro fresco e basilico.",
    processoLavorazione: [
      {
        titolo: "Macinatura",
        descrizione: "Il grano viene macinato a pietra per preservare le proprietà nutrizionali",
        immagine: "/images/campo.jpg"
      },
      {
        titolo: "Impasto",
        descrizione: "Lavorazione dell'impasto con sola acqua e farina, senza additivi",
        immagine: "/images/pasta_processo2.jpg"
      },
      {
        titolo: "Essiccazione",
        descrizione: "Processo lento a bassa temperatura per 24-36 ore",
        immagine: "/images/pasta_processo3.jpg"
      }
    ]
  },
  {
    id: 4,
    nome: "Fusilloni con grano antico Timilia - 500g",
    prezzo: 3.00,
    descrizione: "Fusilloni artigianali prodotti con grano antico Timilia",
    categoria: "pasta",
    dettagliProduzione: "I nostri fusilloni sono prodotti utilizzando esclusivamente farina di grano Timilia, un'antica varietà di grano duro siciliano coltivato nel nostro podere. La pasta viene trafilata al bronzo e essiccata lentamente a bassa temperatura per preservare al meglio le caratteristiche nutrizionali e il sapore autentico del grano.",
    caratteristiche: {
      colore: "Ambrato intenso tipico del grano Timilia",
      consistenza: "Ruvida e porosa",
      tempoCottura: "12-13 minuti",
      conservazione: "24 mesi in luogo fresco e asciutto"
    },
    valoriNutrizionali: {
      porzione: "100g",
      valoreEnergetico: "356 kcal",
      carboidrati: "72g",
      proteine: "14g",
      fibre: "3.2g"
    },
    immagini: [
      "/images/pasta/fusilloni.jpg",
      "/images/pasta/fusilloni2.jpg",
      "/images/pasta/top_fusilloni.jpg",
      "/images/pasta/fusilloni_legno.jpg"
    ],
    certificazioni: [
      { nome: "Biologico", icon: "Leaf", descrizione: "Prodotto secondo standard biologici" },
      { nome: "Grani Antichi", icon: "Award", descrizione: "100% Grano antico Timilia" },
      { nome: "Artigianale", icon: "ThermometerSun", descrizione: "Produzione e essiccazione lenta" }
    ],
    consiglieUso: "Ideali per sughi elaborati e condimenti corposi. La forma cattura perfettamente il condimento.",
    processoLavorazione: [
      {
        titolo: "Macinatura",
        descrizione: "Il grano viene macinato a pietra per preservare le proprietà nutrizionali",
        immagine: "/images/campo.jpg"
      },
      {
        titolo: "Impasto",
        descrizione: "Lavorazione dell'impasto con sola acqua e farina, senza additivi",
        immagine: "images/pasta_processo2.jpg"
      },
      {
        titolo: "Essiccazione",
        descrizione: "Processo lento a bassa temperatura per 24-36 ore",
        immagine: "images/pasta_processo3.jpg"
      }
    ]
  },
  {
    id: 5,
    nome: "La nostra farina di Grano Duro antico Timilia - 1kg",
    prezzo: 3.00,
    descrizione: "Farina di grano duro Timilia macinata a pietra",
    categoria: "farina",
    dettagliProduzione: "La nostra farina è ottenuta dalla macinatura a pietra del pregiato grano duro Timilia, un'antica varietà siciliana coltivata con metodi biologici nel nostro podere. Il processo di macinatura lenta a pietra mantiene intatte le proprietà nutrizionali e organolettiche del cereale.",
    caratteristiche: {
      colore: "Ambrato chiaro con riflessi dorati",
      consistenza: "Fine ma non raffinata",
      proteine: "13-14%",
      conservazione: "6 mesi in luogo fresco e asciutto"
    },
    valoriNutrizionali: {
      porzione: "100g",
      valoreEnergetico: "340 kcal",
      carboidrati: "70g",
      proteine: "13g",
      fibre: "3g"
    },
    immagini: [
      "images/farina.jpg",
      "images/grano_processo1.jpg",
      "images/macinatura.jpg",
      "images/farina_confezionamento.jpg"
    ],
    certificazioni: [
      { nome: "Biologico", icon: "Leaf", descrizione: "Coltivazione secondo standard biologici" },
      { nome: "Grani Antichi", icon: "Award", descrizione: "100% Grano antico Timilia" },
      { nome: "Macinatura a Pietra", icon: "ThermometerSun", descrizione: "Lavorazione tradizionale" }
    ],
    consiglieUso: "Perfetta per la preparazione di pasta fresca, pane e prodotti da forno. Ideale anche per pizze e focacce.",
    processoLavorazione: [
      {
        titolo: "Selezione",
        descrizione: "Accurata selezione dei migliori chicchi di grano Timilia",
        immagine: "images/grano_processo1.jpg"
      },
      {
        titolo: "Macinatura",
        descrizione: "Macinatura lenta a pietra per preservare le proprietà nutritive",
        immagine: "images/macinatura.jpg"
      },
      {
        titolo: "Confezionamento",
        descrizione: "Confezionamento in ambiente controllato per garantire la massima freschezza",
        immagine: "images/farina_confezionamento.jpg"
      }
    ]
  },
  {
    id: 6,
    nome: "La nostra farina di Grano Duro antico Timilia - 5kg",
    prezzo: 14.00,
    descrizione: "Farina di grano duro Timilia macinata a pietra - Formato famiglia",
    categoria: "farina",
    dettagliProduzione: "La nostra farina è ottenuta dalla macinatura a pietra del pregiato grano duro Timilia, un'antica varietà siciliana coltivata con metodi biologici nel nostro podere. Il processo di macinatura lenta a pietra mantiene intatte le proprietà nutrizionali e organolettiche del cereale.",
    caratteristiche: {
      colore: "Ambrato chiaro con riflessi dorati",
      consistenza: "Fine ma non raffinata",
      proteine: "13-14%",
      conservazione: "6 mesi in luogo fresco e asciutto"
    },
    valoriNutrizionali: {
      porzione: "100g",
      valoreEnergetico: "340 kcal",
      carboidrati: "70g",
      proteine: "13g",
      fibre: "3g"
    },
    immagini: [
      "images/farina_grande.jpg",
      "images/grano_processo1.jpg",
      "images/macinatura.jpg",
      "images/farina_confezionamento.jpg"
    ],
    certificazioni: [
      { nome: "Biologico", icon: "Leaf", descrizione: "Coltivazione secondo standard biologici" },
      { nome: "Grani Antichi", icon: "Award", descrizione: "100% Grano antico Timilia" },
      { nome: "Macinatura a Pietra", icon: "ThermometerSun", descrizione: "Lavorazione tradizionale" }
    ],
    consiglieUso: "Perfetta per la preparazione di pasta fresca, pane e prodotti da forno. Ideale anche per pizze e focacce.",
    processoLavorazione: [
      {
        titolo: "Selezione",
        descrizione: "Accurata selezione dei migliori chicchi di grano Timilia",
        immagine: "images/grano_processo1.jpg"
      },
      {
        titolo: "Macinatura",
        descrizione: "Macinatura lenta a pietra per preservare le proprietà nutritive",
        immagine: "images/macinatura.jpg"
      },
      {
        titolo: "Confezionamento",
        descrizione: "Confezionamento in ambiente controllato per garantire la massima freschezza",
        immagine: "images/farina_confezionamento.jpg"
      }
    ]
  }
];

function ProductPage({ addToCart }) {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState('descrizione');
  const [quantity, setQuantity] = useState(1);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    const product = detailedProductsDB.find(p => p.id === parseInt(id));
    setCurrentProduct(product);
  }, [id]);

  if (!currentProduct) {
    return (
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-feldgrau"
        >
          Prodotto non trovato
        </motion.div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAnimating(true);
    addToCart({ ...currentProduct, quantity });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === currentProduct.immagini.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentProduct.immagini.length - 1 : prev - 1
    );
  };

  const getIconComponent = (iconName) => {
    const icons = {
      Leaf,
      Award,
      ThermometerSun
    };
    return icons[iconName] || Award;
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-8 shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gallery Section */}
          <div className="space-y-4">
            <div className="relative h-96 group">
              <motion.img
                key={currentImageIndex}
                src={currentProduct.immagini[currentImageIndex]}
                alt={currentProduct.nome}
                className="ml-14 h-full object-cover rounded-lg cursor-pointer"
                onClick={() => setShowGallery(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-6 h-6 text-feldgrau" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-6 h-6 text-feldgrau" />
              </button>
            </div>
            <div className="flex gap-2 overflow-x-auto py-2">
              {currentProduct.immagini.map((img, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  whileHover={{ scale: 1.05 }}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden transition-all duration-200 ${
                    currentImageIndex === index ? 'ring-2 ring-feldgrau' : ''
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-feldgrau"
            >
              {currentProduct.nome}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-between"
            >
              <p className="text-2xl font-semibold text-feldgrau">
                {(currentProduct.prezzo * quantity).toFixed(2)} €
              </p>
              <div className="flex items-center gap-4 bg-gray-100 rounded-lg p-2">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <div className="flex space-x-4">
                {['descrizione', 'caratteristiche', 'nutrizione'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-4 border-b-2 transition-colors ${
                      activeTab === tab
                        ? 'border-feldgrau text-feldgrau'
                        : 'border-transparent text-gray-500 hover:text-feldgrau'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'descrizione' && (
                  <div className="space-y-4">
                    <p className="text-gray-700">{currentProduct.dettagliProduzione}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                      {currentProduct.certificazioni.map((cert, index) => {
                        const IconComponent = getIconComponent(cert.icon);
                        return (
                          <motion.div
                            key={cert.nome}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 p-4 rounded-lg text-center"
                          >
                            <IconComponent className="w-6 h-6 mx-auto mb-2 text-green" />
                            <h3 className="font-semibold text-feldgrau">{cert.nome}</h3>
                            <p className="text-sm text-gray-600">{cert.descrizione}</p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeTab === 'caratteristiche' && (
                  <div className="space-y-4">
                    {Object.entries(currentProduct.caratteristiche).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 p-4 rounded-lg"
                      >
                        <span className="font-medium capitalize text-feldgrau">
                          {key}:
                        </span>{' '}
                        {value}
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'nutrizione' && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-4">
                      Per {currentProduct.valoriNutrizionali.porzione}
                    </p>
                    <div className="space-y-2">
                      {Object.entries(currentProduct.valoriNutrizionali).map(([key, value]) => (
                        key !== 'porzione' && (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex justify-between py-2 border-b border-gray-200 last:border-0"
                          >
                            <span className="font-medium capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <span>{value}</span>
                          </motion.div>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <motion.button
              onClick={handleAddToCart}
              className="w-full bg-green text-beige font-bold py-4 rounded-xl mt-6 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={isAnimating ? { scale: [1, 1.05, 1] } : {}}
            >
              {isAnimating ? "Aggiunto!" : "Aggiungi al Carrello"}
            </motion.button>
          </div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-feldgrau mb-8">Il Nostro Processo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentProduct.processoLavorazione.map((step, index) => (
              <motion.div
                key={step.titolo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <img
                  src={step.immagine}
                  alt={step.titolo}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-feldgrau mb-2">{step.titolo}</h3>
                  <p className="text-gray-600">{step.descrizione}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Full Screen Gallery */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={() => setShowGallery(false)}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 text-feldgrau" />
              </button>

              <motion.img
                key={currentImageIndex}
                src={currentProduct.immagini[currentImageIndex]}
                alt={currentProduct.nome}
                className="max-h-[80vh] max-w-[80vw] object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
              >
                <ChevronRight className="w-6 h-6 text-feldgrau" />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-2">
                  {currentProduct.immagini.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full ${
                        currentImageIndex === index ? 'bg-white' : 'bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recommended Products Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold text-feldgrau mb-8">Potrebbero Interessarti</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Qui potresti mappare altri prodotti correlati */}
          {detailedProductsDB
            .filter(p => p.id !== currentProduct.id)
            .slice(0, 3)
            .map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  window.location.href = `/prodotto/${product.id}`;
                }}
              >
                <img
                  src={product.immagini[0]}
                  alt={product.nome}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-feldgrau mb-2">{product.nome}</h3>
                  <p className="text-green font-bold">{product.prezzo.toFixed(2)} €</p>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </main>
  );
}

export default ProductPage;
      