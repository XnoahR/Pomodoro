var pomodoro = 25;
var shortBreak = 5;
var longBreak = 15;

var totalSession = 0;

playAlarm = () => {
    var audio = new Audio("kururin.mp3"); //Ganti ke link
    audio.play();
}

isWork = true;
const pomodoroSession = document.getElementById("pomodoro-session");
const shortBreakSession = document.getElementById("short-break-session");
const longBreakSession = document.getElementById("long-break-session");
const startButton = document.getElementById("start");
let mode;
let seconds = "00";

window.onload = () => {
    mode=pomodoro;
    document.getElementById("minute").innerHTML = mode;
    document.getElementById("second").innerHTML = seconds;

    isWork = true;
    pomodoroSession.classList.add("activate");
    shortBreakSession.classList.remove("activate");
    longBreakSession.classList.remove("activate");
    }

    let timeFunction;

    startButton.addEventListener("click", () => {
        if(isWork){
            
        minute =  mode < 11? "0" + (mode-1) : mode-1;
        let seconds = "59";
        
        timeFunction = setInterval(function () {
            document.getElementById("minute").innerHTML = minute;
            document.getElementById("second").innerHTML = seconds;
    
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
                    document.getElementById("minute").innerHTML = longBreak;
                    pomodoroSession.classList.remove("activate");
                    shortBreakSession.classList.remove("activate");
                    longBreakSession.classList.add("activate");
                    seconds = "00";
                }
                else{
                    mode = shortBreak;
                    document.getElementById("minute").innerHTML = shortBreak;
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
        }, 1000);
    }

    if(!isWork){
        minute =  mode < 11? "0" + (mode-1) : mode-1;
        let seconds = "59";
       
        timeFunction = setInterval(function () {
            document.getElementById("minute").innerHTML = minute;
            document.getElementById("second").innerHTML = seconds;
    
            seconds--;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if(minute === "00" && seconds === "0-1"){
                seconds = "00";
                isWork = true;
                mode = pomodoro;
                document.getElementById("minute").innerHTML = pomodoro;
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
        }, 1000);
    }
    });
    
pomodoroSession.addEventListener("click", () => {
    clearInterval(timeFunction);
    mode = pomodoro;
    document.getElementById("minute").innerHTML = mode;
    document.getElementById("second").innerHTML = seconds;

    isWork = true;
    pomodoroSession.classList.add("activate");
    shortBreakSession.classList.remove("activate");
    longBreakSession.classList.remove("activate");
});

shortBreakSession.addEventListener("click", () => {
    clearInterval(timeFunction);
    mode = shortBreak;
    document.getElementById("minute").innerHTML = mode;
    document.getElementById("second").innerHTML = seconds;

    isWork = false;
    pomodoroSession.classList.remove("activate");
    shortBreakSession.classList.add("activate");
    longBreakSession.classList.remove("activate");
});

longBreakSession.addEventListener("click", () => {
    clearInterval(timeFunction);
    mode = longBreak;
    document.getElementById("minute").innerHTML = mode;
    document.getElementById("second").innerHTML = seconds;

    isWork = false;
    pomodoroSession.classList.remove("activate");
    shortBreakSession.classList.remove("activate");
    longBreakSession.classList.add("activate");
});