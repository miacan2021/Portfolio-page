import ReactDOM from 'react-dom';
import App from './App';
import { AboutPage } from './components/layout/About/AboutPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { WorkPage } from './components/layout/Work/WorkPage';
import { Cafe } from './components/layout/Projects/Cafe';
import { Error } from './components/layout/Error';
import { FocusTube } from './components/layout/Projects/FocusTube';
import { Weather }from './components/layout/Projects/Weather';
import { FindBlog } from './components/layout/Projects/FindBlog';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={ <App /> }/>
    <Route path="about" element={ <AboutPage />} />
    <Route path="work" element={ <WorkPage />} />
    <Route path="work/cafe-van" element={ <Cafe />} />
    <Route path="work/focustube" element={ <FocusTube />} />
    <Route path="work/weather-app" element={ <Weather />} />
    <Route path="work/blog-search" element={ <FindBlog />} />
    <Route path="*" element={<Error />} />
  </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


