import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import MetisMenu from 'react-metismenu';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
