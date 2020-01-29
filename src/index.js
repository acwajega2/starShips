import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//----> imorting the Starship provider and wrapping it all over the App
  import {StarShipProvider} from './components/Context'

ReactDOM.render(
  <StarShipProvider>
     <App />
</StarShipProvider>
 ,
  document.getElementById('root')
);
