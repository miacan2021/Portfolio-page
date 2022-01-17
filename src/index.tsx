import React from 'react';
import { createContext } from "react";
import ReactDOM from 'react-dom';
import App from './App';
import { AboutPage } from './components/layout/About/AboutPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { WorkPage } from './components/layout/Work/WorkPage';

export const ModeContext: React.Context<string> = createContext('light')

ReactDOM.render(
  <ModeContext.Provider value={'dark'}>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={ <App /> } />
  <Route path="about" element={ <AboutPage />} />
  <Route path="work" element={ <WorkPage />} />
  </Routes>
  </BrowserRouter>
  </ModeContext.Provider>
  ,
  document.getElementById('root')
);


