import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quadcopter from './components/Projects/Quadcopter';
import Rover from './components/Projects/Rover';
import Scart from './components/Projects/Scart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path='*' element={<App/>}></Route>
          <Route path='/quadcopter' element={<Quadcopter/>}></Route>
          <Route path='/Rover' element={<Rover/>} ></Route>
          <Route path='/Scart' element={<Scart/>} ></Route>
        </Routes>
      </React.StrictMode>       
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
