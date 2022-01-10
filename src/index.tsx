import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AboutPage } from './components/aboutPageLayout/AboutPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={ <App /> } />
  <Route path="about" element={ <AboutPage />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


