import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/home';
import Resumen from './components/resumen/resumen';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
    
    	<Header/>
    	<Navbar/>
    	<Home/>
    	<Resumen/>
    	<Footer/>

    </div>
  );
}

export default App;
