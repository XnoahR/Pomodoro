var pomodoro = 1;
var shortBreak = 5;
var longBreak = 15;

var totalSession = 4;

isWork = true;
const pomodoroSession = document.getElementById("pomodoro-session");
const shortBreakSession = document.getElementById("short-break-session");
const longBreakSession = document.getElementById("long-break-session");
const startButton = document.getElementById("start");

let seconds = "00";

window.onload = () => {
    document.getElementById("minute").innerHTML = pomodoro;
    document.getElementById("second").innerHTML = seconds;

    isWork = true;
    pomodoroSession.classList.add("activate");
    shortBreakSession.classList.remove("activate");
    longBreakSession.classList.remove("activate");
    }

    let timeFunction;

    startButton.addEventListener("click", () => {
        let seconds = "3";
        let pomodoroTime = pomodoro - 1;
    
        timeFunction = setInterval(function () {
            document.getElementById("minute").innerHTML = pomodoroTime;
            document.getElementById("second").innerHTML = seconds;
    
            seconds--;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if(pomodoroTime == 0 && seconds == 0){
                clearInterval(timeFunction);
            }
            if (seconds == 0) {
                pomodoroTime--;
                if (pomodoroTime < 10 && pomodoroTime >= 0) {
                    pomodoroTime = "0" + pomodoroTime;
                }
                seconds = "59";
            }
        }, 1000);
    });
    
