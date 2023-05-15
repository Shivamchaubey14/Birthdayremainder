const daysEl  = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");


const newYears = '14 Dec 2023';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYearsDate -currentDate) / 1000;
    
    const days = Math.floor(seconds / 3600 / 24);

    const hours = Math.floor(seconds/3600) % 24;

    const minutes = Math.floor(seconds/60) % 60;

    const sec = Math.floor(seconds)%60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(minutes);
    secEl.innerHTML = formatTime(sec);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(countdown, 1000);

countdown();