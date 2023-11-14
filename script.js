let mode;
let seconds = "00";

var pomodoro = 25;
var shortBreak = 5;
var longBreak = 15;
var totalSession = 0;

var minuteValue = document.getElementById("minute");
var secondValue = document.getElementById("second");
const pomodoroSession = document.getElementById("pomodoro-session");
const shortBreakSession = document.getElementById("short-break-session");
const longBreakSession = document.getElementById("long-break-session");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");

const timeStart = () => {
    minuteValue.innerHTML = minute;
    secondValue.innerHTML = seconds;

    seconds--;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if(minute === "00" && seconds === "0-1"){
        seconds = "00";
        isWork = false;
        totalSession++;
        if(totalSession%4 == 0){
            mode = longBreak;
            minuteValue.innerHTML = longBreak;
            pomodoroSession.classList.remove("activate");
            shortBreakSession.classList.remove("activate");
            longBreakSession.classList.add("activate");
            seconds = "00";
        }
        else{
            mode = shortBreak;
            minuteValue.innerHTML = shortBreak;
            pomodoroSession.classList.remove("activate");
            shortBreakSession.classList.add("activate");
            seconds = "00";
        }
        playAlarm();
        clearInterval(timeFunction);

    }
    if (seconds === "0-1") {
        minute--;
        if (minute < 10 && minute >= 0) {
            minute = "0" + minute;
        }
        seconds = "59";
    }
}

const breakStart = () =>{
    minuteValue.innerHTML = minute;
            secondValue.innerHTML = seconds;
    
            seconds--;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if(minute === "00" && seconds === "0-1"){
                seconds = "00";
                isWork = true;
                mode = pomodoro;
                minuteValue.innerHTML = pomodoro;
                seconds = "00";
                clearInterval(timeFunction);

            }
            if (seconds === "0-1") {
                minute--;
                if (minute < 10 && minute >= 0) {
                    minute = "0" + minute;
                }
                seconds = "59";
            }
}

isWork = true;
playAlarm = () => {
    var audio = new Audio("kururin.mp3"); //Ganti ke link bucket
    audio.play();
}

window.onload = () => {
    mode=pomodoro;
    minuteValue.innerHTML = mode;
    secondValue.innerHTML = seconds;

    isWork = true;
    pomodoroSession.classList.add("activate");
    shortBreakSession.classList.remove("activate");
    longBreakSession.classList.remove("activate");
    }

    let timeFunction;

    startButton.addEventListener("click", () => {
        startButton.classList.add("hidden");
        pauseButton.classList.remove("hidden");
        
        if(isWork){
        minute =  mode < 11? "0" + (mode) : mode;
        
        
        timeFunction = setInterval(function () {
           
            timeStart();

            pauseButton.addEventListener("click", () => {
                clearInterval(timeFunction);
                pauseButton.classList.add("hidden");
                resumeButton.classList.remove("hidden");
            });

            resumeButton.addEventListener("click", () => {
                clearInterval(timeFunction);
                resumeButton.classList.add("hidden");
                pauseButton.classList.remove("hidden");
                timeFunction = setInterval(function () {
                    timeStart();
                }, 1000);
            });

        }, 1000);
    }

    if(!isWork){
        minute =  mode < 11? "0" + (mode) : mode;
       
        timeFunction = setInterval(function () {
            breakStart();
            pauseButton.addEventListener("click", () => {
                clearInterval(timeFunction);
                pauseButton.classList.add("hidden");
                resumeButton.classList.remove("hidden");
            });

            resumeButton.addEventListener("click", () => {
                clearInterval(timeFunction);
                resumeButton.classList.add("hidden");
                pauseButton.classList.remove("hidden");
                timeFunction = setInterval(function () {
                    breakStart();
                }, 1000);
            });
        }, 1000);
    }
    });
    
pomodoroSession.addEventListener("click", () => {
    clearInterval(timeFunction);
    startButton.classList.remove("hidden");
    mode = pomodoro;
    seconds = "00";
    minuteValue.innerHTML = mode;
    secondValue.innerHTML = seconds;

    isWork = true;
    pomodoroSession.classList.add("activate");
    shortBreakSession.classList.remove("activate");
    longBreakSession.classList.remove("activate");
    pauseButton.classList.add("hidden");
    resumeButton.classList.add("hidden");
});

shortBreakSession.addEventListener("click", () => {
    startButton.classList.remove("hidden");
    clearInterval(timeFunction);
    mode = shortBreak;
    seconds = "00";
    minuteValue.innerHTML = mode;
    secondValue.innerHTML = seconds;

    isWork = false;
    pomodoroSession.classList.remove("activate");
    shortBreakSession.classList.add("activate");
    longBreakSession.classList.remove("activate");
    pauseButton.classList.add("hidden");
    resumeButton.classList.add("hidden");
});

longBreakSession.addEventListener("click", () => {
    startButton.classList.remove("hidden");
    clearInterval(timeFunction);
    mode = longBreak;
    seconds = "00";
    minuteValue.innerHTML = mode;
    secondValue.innerHTML = seconds;

    isWork = false;
    pomodoroSession.classList.remove("activate");
    shortBreakSession.classList.remove("activate");
    longBreakSession.classList.add("activate");
    pauseButton.classList.add("hidden");
    resumeButton.classList.add("hidden");
});