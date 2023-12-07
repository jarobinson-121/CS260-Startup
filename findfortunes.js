'use strict'

// import { rawConfig } from './index.js';

// const rawConfig = require('./config.json');

// const config = JSON.parse(rawConfig);

// const apiKey = config.apiKey;

// const apiEndpoint = config.apiEndpoint;

// const fs = require('fs');


// const rawConfig = fs.readFileSync('./config.json');
// const config = JSON.parse(rawConfig);

// const apiKey = config.apiKey;
// const apiEndpoint = config.apiEndpoint;

// console.log('API Key:', apiKey);

function signin() {
    window.location.href = "signin.html";
}

function openFortune() {
    window.location.href = "openfortune.html";
    newFortune();
}

function newFortune(data) {
    const url = 'https://fortune-cookie4.p.rapidapi.com/slack';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cce9287eefmsha3bfe59e36bf17dp1276d1jsnf7a360956124',
            'X-RapidAPI-Host': 'fortune-cookie4.p.rapidapi.com'
        }
    };
    
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            const fortuneEl = document.querySelector("#fortunetext");

            fortuneEl.textContent = data.text;

            fortuneEl.innerHTML = data.text;
        });
}

function saveFortune() {
    const fortuneEl = document.querySelector('#fortunetext');
    localStorage.setItem('Fortune', fortuneEl.value);
    window.location.href = "myFortunes.html";
}

function replaceNewText(newtext, result) {
    newtext = result;
}

function toFortunes() {
    window.location.href='findfortunes.html';
}

function signmein() {
    window.location.href = "signin.html";
}

function gohome() {
    window.location.href = "index.html";
}


