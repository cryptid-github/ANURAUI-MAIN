import './App.scss';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './components/home/home';


function App() {


  return (

    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>

  );
}

export default App;
