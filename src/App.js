import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home/home';
import Sesion from './components/sesion/sesion';

function App() {
  return (
    <div className="App">
    
    	<BrowserRouter>
    		<Switch>
			<Route component = {Home} />
    		</Switch>
    	</BrowserRouter>

    </div>
  );
}

export default App;
