import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../src/assets/global.css'

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
import { ClockLoader } from 'react-spinners'
import logo from '../src/assets/footer_images/logo.png'
const Home = lazy(() => import('./pages/Home/index.jsx'));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center', marginTop: '10%', flexDirection: 'column', height: '100vh', width: '100vw', alignItems: 'center' }}>
          <div>
            <img src={logo}  width="180px" height="200px" alt="1-son kompleks" />
            <h1 className='m-0 p-0 img_loader text-white my-3' ><span>Parvoz </span>Group</h1>
          </div>
          <div>
            <ClockLoader color="#fff" />
          </div>
        </div>
      }
    >
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

