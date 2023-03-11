import React, { Suspense } from 'react';
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
import AkfaAbout from './pages/AkfaPages/AkfaAbout'
import Flour from './pages/FlourPage'
import Animal from './pages/animlaPge/allAnimal'
import Contact from './pages/Contact';
import Sigir from './pages/animlaPge/sgirPage'
import AnimalAbout from './pages/animlaPge/Aboutpage'
import Access from './components/ui/Accessories/Access'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import './i18n'
import {ClockLoader} from 'react-spinners'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div style={{display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center'}}><ClockLoader color="#fff" /></div>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index path='/' element={<Home />} />
            <Route path='/about' element={<About_us />} />
            <Route path='/akwin' element={<Akfa />} />
            <Route path='/akfaabout' element={<AkfaAbout />} />
            <Route path='/flour' element={<Flour />} />
            <Route path='/animal' element={<Animal />} />
            <Route path='/sigir' element={<Sigir />} />
            <Route path='/animalabout' element={<AnimalAbout />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/access' element={<Access />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

