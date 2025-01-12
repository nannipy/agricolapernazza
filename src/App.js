import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Olio from './pages/Olio';
import Pasta from './pages/Pasta';
import Farina from './pages/Farina';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Territorio from './pages/Territorio';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';

function App() {
  const [cart, setCart] = useState([]); // Assicurati che cart sia inizializzato come array
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <Navbar cart={cart} toggleCart={toggleCart} />
      
        <div className="flex">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/olio" element={<Olio addToCart={addToCart} />} />
              <Route path="/pasta" element={<Pasta addToCart={addToCart} />} />
              <Route path="/farina" element={<Farina addToCart={addToCart} />} />
              <Route path="/checkout" element={<Checkout cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
              <Route path="/territorio" element={<Territorio />} />
              <Route path="/products" element={<Products />} />
              <Route path="/prodotto/:id" element={<ProductPage addToCart={addToCart} />} />

            </Routes>
          </div>
        </div>
      <Footer className="bottom-0" />
      <CartDrawer
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        isOpen={isCartOpen}
        toggleCart={toggleCart}
      />
    </Router>
  );
}

export default App;