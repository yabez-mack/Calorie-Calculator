import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Food from './food';

const Index = () => {



  return (
    <BrowserRouter>
      <Routes>
   
        <Route>
        <Route path='/' element={<App/>}/>
        <Route path='/food' element={<Food/>}/>





        </Route>
      </Routes>
    </BrowserRouter>

  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Index />)