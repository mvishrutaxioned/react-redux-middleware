import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ProductListing from './components/ProductListing';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
