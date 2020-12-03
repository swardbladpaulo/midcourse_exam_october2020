import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

let apiUrl;
  apiUrl = "https://api.github.com/search/users?";
axios.defaults.baseURL = apiUrl;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
