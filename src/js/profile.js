import React from 'react';
import ReactDOM from 'react-dom';
import './../css/profile.css';
import App from './App';
import Header from './js/Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('profileHeader'));
registerServiceWorker();
