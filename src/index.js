import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyAWY4jZn0tLeDzjTvcnBD29U0UKtGYz7aQ",
    authDomain: "despliegue-de-apps-web.firebaseapp.com",
    databaseURL: "https://despliegue-de-apps-web.firebaseio.com",
    projectId: "despliegue-de-apps-web",
    storageBucket: "despliegue-de-apps-web.appspot.com",
    messagingSenderId: "654902042974"
});

window.onload=function(){

  const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', e => {
    firebase.auth().signInAnonymously();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
    console.log(firebaseUser);
    if(firebaseUser) {
        btnLogin.classList.add('hide');
    } else {
        btnLogin.classList.remove('hide');
    }
});
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
