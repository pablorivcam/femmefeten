import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
    
    	<Header/>
    	<Navbar/>
    	<Home/>

    </div>
  );
}

export default App;
