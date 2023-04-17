import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} path="/" />
        <Route index element={<About />} path="/about" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
