import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LogicProvider from './context/LogicProvider' 
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
    <LogicProvider>
      <App />
    </LogicProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

