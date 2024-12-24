import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero'


const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default Homepage
