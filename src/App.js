import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import MyCart from './components/Mycart';
import Addproduct from './components/Addproduct';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [addTocart, setAddToCart] = useState([]);
  const addToCartFun = (items) => {
    let temp = [...addTocart, items];
    setAddToCart(temp);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product purchaseItems={addToCartFun} />} />
        <Route path='/Addproduct' element={<Addproduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/mycart' element={<MyCart purchaseItems={addTocart} />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
