const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("span");


function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTitle.innerText = `${hours}:${minutes}`
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();