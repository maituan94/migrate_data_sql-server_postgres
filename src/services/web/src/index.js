import React from 'react';
import ReactDOM from 'react-dom';
import { processSilentRenew } from 'redux-oidc';
import './antd/antd.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-table/react-table.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


if (window.location.pathname === '/silent_renew') {
  processSilentRenew();
} else {
  ReactDOM.render(<App />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
