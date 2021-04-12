setInterval(setClock, 1000);

const hoursElement = document.querySelector(`[data-hours]`);
const minutesElement = document.querySelector(`[data-minutes]`);
const secondsElement = document.querySelector(`[data-seconds]`);

function setClock() {
    const currentTime = new Date();
    
    const secondsRatio = currentTime.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentTime.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentTime.getHours()) / 12;

    setRotation(secondsElement, secondsRatio);
    setRotation(minutesElement, minutesRatio);
    setRotation(hoursElement, hoursRatio);    
    
}

function setRotation(element, rotationRatio) {
    return element.style.setProperty(`--rotation`, rotationRatio * 360);
}

setClock();




