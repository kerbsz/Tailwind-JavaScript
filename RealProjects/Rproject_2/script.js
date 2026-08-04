function clock(){
    
    const date = new Date();
    let hours = date.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM"; 
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.querySelector("#clock").innerHTML = timeString;

}

clock();
setInterval(clock,1000);


const stopwatchDisplay = document.querySelector("#stopwatchClock");
let timer = null;
let startTime = 0;
let elaspsedtime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elaspsedtime;
        timer = setInterval(update,10);
        isRunning = true;

    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elaspsedtime = Date.now() - startTime;
        isRunning = false;
    }
}
function restart(){
    clearInterval(timer);
    startTime = 0;
    elaspsedtime = 0;
    isRunning = false;
    stopwatchDisplay.textContent = "00:00:00";

}
function update(){
    const currentTime = Date.now();
    elaspsedtime = currentTime - startTime;

    let hours = Math.floor(elaspsedtime / (1000 * 60 * 60));
    let minutes = Math.floor(elaspsedtime / (1000 * 60) % 60);
    let seconds = Math.floor(elaspsedtime / 1000 % 60);

    hours = String(hours).padStart(2,0);
    minutes = String(minutes).padStart(2,0);
    seconds = String(seconds).padStart(2,0);

    stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`
}



