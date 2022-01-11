import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AboutPage } from './components/layout/About/AboutPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { WorkPage } from './components/WorkPageLayout/WorkPage';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={ <App /> } />
  <Route path="about" element={ <AboutPage />} />
  <Route path="work" element={ <WorkPage />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


