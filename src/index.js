import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import AppRoutes from './routes'


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
    <AppRoutes/>
</Router>
, document.getElementById('root'));
registerServiceWorker();
