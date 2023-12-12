'use strict'
const express = require('express');
const app = express();

const { MongoClient } = require('mongodb');
const config = require('./dbconfig.json');

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

function saveFortuneLocal() {
    const fortuneEl = document.querySelector('#fortunetext');
    localStorage.setItem('Fortune', fortuneEl.value);
    window.location.href = "myFortunes.html";
}

// async function saveScore(score) {
//     const userName = this.getPlayerName();
//     const date = new Date().toLocaleDateString();
//     const newScore = {name: userName, score: score, date: date};

//     try {
//       const response = await fetch('/api/score', {
//         method: 'POST',
//         headers: {'content-type': 'application/json'},
//         body: JSON.stringify(newScore),
//       });

//       // Store what the service gave us as the saved fortunes
//       const scores = await response.json();
//       localStorage.setItem('scores', JSON.stringify(scores));
//     } catch {
//       // If there was an error then just track scores locally
//       this.updateScoresLocal(newScore);
//     }
//   }

async function saveFortune(fortunetext) {
    const newFortune = {fortune: fortunetext};

    try {
      const response = await fetch('/api/fortune', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newFortune),
      });

      // Store what the service gave us as the Saved Fortunes
      const fortunes = await response.json();
      localStorage.setItem('fortunes', JSON.stringify(fortunes));
    } catch {
      // If there was an error then just track fortunes locally
      this.updateScoresLocal(newFortune);
    }
  }

function updateScoresLocal(newFortune) {
    let fortunes = [];
    const fortuneText = localStorage.getItem('fortunes');
    if (fortuneText) {
      fortunes = JSON.parse(fortuneText);
    }
    // updated to here
    let found = false;
    for (const [i, prevFortune] of fortunes.entries()) {
      if (newFortune > prevFortune.fortune) {
        fortunes.splice(i, 0, newFortune);
        found = true;
        break;
      }
    }

    if (!found) {
      fortunes.push(newFortune);
    }

    if (fortunes.length > 5) {
      fortunes.length = 5;
    }

    localStorage.setItem('fortunes', JSON.stringify(fortunes));
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


