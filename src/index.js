import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import MetisMenu from 'react-metismenu';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
