import React, {useState} from 'react';
import { render } from 'react-dom';
import './style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import config from './configuration';

import Header from './components/Header'
import Uvod from './components/Uvod';
import Vytvorit from './components/Vytvorit';
import Vyzvednout from './components/Vyzvednout';


const App = () => {

  return (
  
    <BrowserRouter>
      <Header />
  
        <Routes>
          <Route path="/" element={<Uvod />} />
          <Route path="/vyzvednout" element={<Vyzvednout />} />
          <Route path="/vytvorit" element={<Vytvorit data={config} />} />
          
        </Routes>
      

      
    </BrowserRouter>
  );
};

render(<App />, document.querySelector('#app'));
