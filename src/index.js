
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './pages/Home';
import About_us from './pages/AboutUS';
import Akfa from './pages/AkfaPages/AkfaMain'
import Flour from './pages/FlourPage'
import Animal from './pages/animlaPge/allAnimal'
import { BrowserRouter,Router, Routes, Route } from 'react-router-dom'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About_us/>}/>
          <Route path='/akwin' element={<Akfa/>} />
          <Route path='/flour' element={<Flour/>} />
          <Route path='/animal' element={<Animal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


