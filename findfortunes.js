'use strict'

function signin() {
    window.location.href = "signin.html";
}

function openFortune() {
    window.location.href = "openfortune.html";
}

const fortuneList = ["Adventure awaits just around the corner.",
"A dream you have will come true.",
"Your kindness will lead you to success.",
"Embrace change for it brings new opportunities.",
"Your creativity knows no bounds.",
"Good things come to those who wait.",
"The best is yet to come.",
"You are stronger than you think.",
"Wisdom is the key to unlocking your potential.",
"A joyful heart brings good fortune.",
"Believe in yourself and you will succeed.",
"Happiness is a journey, not a destination.",
"You will find joy in the little things.",
"Seize the day, embrace the night.",
"Fortune favors the bold.",
"Listen to your heart; it knows the way.",
"The world is full of beauty; open your eyes.",
"Your perseverance will pay off.",
"A golden opportunity is on the horizon.",
"The past does not define your future.",
"You are destined for greatness.",
"Success is in your nature.",
"Love and laughter will fill your days.",
"Your dedication will lead to success.",
"Your potential is limitless.",
"Trust in yourself and you will succeed.",
"Today is a gift, that's why it's called the present.",
"You have a heart of gold.",
"A journey of a thousand miles begins with a single step.",
"Cherish the ones you love.",
"The sun always shines after the rain.",
"You are never alone; love surrounds you.",
"You are capable of amazing things.",
"A smile is your best accessory.",
"Embrace the beauty of simplicity.",
"Your hard work will pay off in the end.",
"Success is on the horizon; keep pushing forward.",
"Your positive outlook will lead to great things.",
"Seize every opportunity that comes your way.",
"Believe in yourself, and anything is possible.",
"Your potential is endless.",
"You are a beacon of light in someone's life.",
"A happy heart is a healthy heart.",
"Embrace the unknown; it holds the key to your future.",
"You are destined for greatness.",
"Your intuition will lead you down the right path.",
"Fortune favors those who dare to dream.",
"Success is a journey, not a destination.",
"Joy is the key to a fulfilled life.",
"Your strength will carry you through any storm.",
"The best way to predict the future is to create it.",
"You are a magnet for miracles.",
"Your kindness will leave a lasting impression.",
"Every day is a new beginning.",
"You are a force to be reckoned with.",
"Believe in yourself, and magic will happen.",
"You have the power to make a difference.",
"Your potential is boundless.",
"Cherish the moments that take your breath away.",
"Your journey will inspire others.",
"The world is full of beauty; take time to appreciate it.",
"You are destined to make a positive impact.",
"Trust in yourself; you know more than you think.",
"Adventure is just around the corner.",
"Your positive attitude will lead to success.",
"You are a beacon of hope for others.",
"Dream big, and the universe will conspire to make it happen.",
"Your hard work will lead to great success.",
"You are a source of light in the world.",
"Embrace change, and you will flourish.",
"A joyful heart brings good fortune.",
"You are capable of extraordinary things.",
"Your journey will lead to a place of fulfillment.",
"You have the power to shape your own destiny.",
"The world is a canvas; paint it with your colors.",
"Your potential is like a vast ocean.",
"Believe in yourself, and you will be unstoppable.",
"You are a beacon of positivity.",
"Your kindness will lead you to greatness.",
"A golden opportunity is on the horizon.",
"The universe is conspiring to bring you great things.",
"Your inner strength will guide you to success.",
"You are on the right path; keep moving forward.",
"Trust in yourself, and you will soar.",
"You are destined for extraordinary things.",
"Success is in your nature.",
"You are a source of inspiration for many.",
"Your journey will lead to a place of contentment.",
"You are capable of creating your own destiny.",
"The world is a stage; perform with confidence.",
"Your potential knows no bounds.",
"Believe in yourself, and you will achieve greatness.",
"You are a beacon of light in the world.",
"Your kindness will leave a lasting legacy.",
"A golden opportunity is just around the corner.",
"The universe is aligned in your favor.",
"Your inner strength will lead you to victory.",
"You are on the right path; keep moving forward.",
"Trust in yourself, and you will conquer all.",
"You are destined for extraordinary success."]

let newtext = fortuneList[0];

let iterationator = 1;

function newFortune(newtext, fortuneList, iterationator) {
    document.getElementById("fortunetext").innerHTML = newtext;
    replaceNewText(newtext, fortuneList, iterationator);
    console.log(iterationator, fortuneList[iterationator]);
}

function saveFortune() {

}

function replaceNewText(newtext, fortuneList, iterationator) {
    newtext = fortuneList[iterationator];
    iterationator++;
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


