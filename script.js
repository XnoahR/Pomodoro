var pomodoro = 10;
var shortBreak = "05";
var longBreak = 15;

var totalSession = 0;

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
        let seconds = "3";
        let minute = mode - 1;
    
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
                    seconds = "00";
                }
                else{
                    mode = shortBreak;
                    document.getElementById("minute").innerHTML = shortBreak;
                    seconds = "00";
                }
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
        let seconds = "3";
        let minute = mode - 1;
    
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
    
