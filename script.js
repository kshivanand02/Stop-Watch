const btnstatus = (stats) => {
    if (stats === "stopped") {
        document.getElementById("start").style.display = "block";
        document.getElementById("stopbtn").style.display = "none";
        document.getElementById("reset").style.display = "none";
    } else if (stats === "running") {
        document.getElementById("start").style.display = "none";
        document.getElementById("stopbtn").style.display = "block";
        document.getElementById("reset").style.display = "block";
    } else if (stats === "continue") {
        document.getElementById("start").style.display = "block";
        document.getElementById("stopbtn").style.display = "none";
        document.getElementById("reset").style.display = "block";
    }
}

let time = {
    min: 0,
    sec: 0,
    ms: 0
};

let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");
let ms = document.getElementById("millisec");

let starttimer; // Declare starttimer in the global scope

const start = () => {
    btnstatus("running");
    starttimer = setInterval(() => {
        time.ms++;
        if (time.ms === 100) {
            time.ms = 0;
            time.sec++;
        }
        if (time.sec === 60) {
            time.sec = 0;
            time.min++;
        }
        if (time.min === 60) {
            time.min = 0;
        }
        millisec.innerHTML = time.ms < 10 ? '0' + time.ms : time.ms;
        minutes.innerHTML = time.min < 10 ? '0' + time.min : time.min;
        seconds.innerHTML = time.sec < 10 ? '0' + time.sec : time.sec;
    }, 10);
}

const stop = () => {
    clearInterval(starttimer);
    btnstatus("continue");
}

const reset = () => {
    stop();
    time.min = 0;
    time.sec = 0;
    time.ms = 0;
    millisec.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
}

btnstatus("stopped");
