import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
// TIRAR A ANOTAÇÃO DEPOIS PARA QUE FUNCIONE! import Sobre from './pages/Sobre';//
//TIRAR A ANOTAÇÃO DEPOIS PARA QUE FUNCIONE! import Galeria from './pages/Galeria';//

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}