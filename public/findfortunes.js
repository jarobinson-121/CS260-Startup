'use strict'

function signin() {
    window.location.href = "signin.html";
}

function openFortune() {
    window.location.href = "openfortune.html";
    newFortune();
}

 function newFortune() {
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

            localStorage.setItem("Current Fortune", data.text);

            const fortuneEl = document.querySelector("#fortunetext");

            fortuneEl.textContent = data.text;

            fortuneEl.innerHTML = data.text;
        });
}

// function saveFortuneLocal() {
//     const fortuneEl = document.querySelector('#fortunetext');
//     localStorage.setItem('Fortune', fortuneEl.value);
//     window.location.href = "myFortunes.html";
// }

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

async function saveFortune() {
    const newFortune = { "fortune" : localStorage.getItem("Current Fortune")};
      const response = await fetch('/api/fortune', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newFortune),
      });
  }

// function updateScoresLocal(newFortune) {
//     let fortunes = [];
//     const fortuneText = localStorage.getItem('fortunes');
//     if (fortuneText) {
//       fortunes = JSON.parse(fortuneText);
//     }
//     // updated to here
//     let found = false;
//     for (const [i, prevFortune] of fortunes.entries()) {
//       if (newFortune > prevFortune.fortune) {
//         fortunes.splice(i, 0, newFortune);
//         found = true;
//         break;
//       }
//     }

//     if (!found) {
//       fortunes.push(newFortune);
//     }

//     if (fortunes.length > 5) {
//       fortunes.length = 5;
//     }

//     localStorage.setItem('fortunes', JSON.stringify(fortunes));
//   }


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


