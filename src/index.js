import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import {AppProvider} from './context'
ReactDOM.render(
  <AppProvider>
  <BrowserRouter>
  <Navbar/>
  <Routes>
<Route path='/' element={<App/>}/>
  </Routes>
  </BrowserRouter>
  </AppProvider>

  ,
  document.getElementById('root')
);

