let days = document.getElementById("days"); // id=
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let dd = document.getElementById("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let day_dot = document.querySelector('.day_dot');  //<div class="dots day_dot" 
let hr_dot = document.querySelector('.hr_dot');  //<div class="dots hr_dot">
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');


// logic for date Countdown 
// date format mm/dd/yyyy   
let endDate = '01/01/2024 00:00:00';


let x = setInterval( function(){
    let now = new Date(endDate).getTime();
    let countDown =  new Date().getTime();
    let distance = now - countDown;

    // time calculation for days, hours, minutes, seconds
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let m = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let s = Math.floor(distance % (1000 * 60) / (1000));

    // output results
    days.innerHTML = d + "<br><span>Days</span></br>";
    hours.innerHTML = h + "<br><span>Hours</span></br>";
    minutes.innerHTML = m + "<br><span>Minutes</span></br>";
    seconds.innerHTML = s + "<br><span>Seconds</span></br>";


    //animate stroke color
    dd.style.strokeDashoffset = 440 - (440 * d) / 365; // 365 days in an year
    hh.style.strokeDashoffset = 440 - (440 * h) / 24; // 24 hours in an day
    mm.style.strokeDashoffset = 440 - (440 * m) / 60; // 60 min in an hour
    ss.style.strokeDashoffset = 440 - (440 * s) / 365; // 60 seconds in an min 


    // animate circle dots
    day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;  // 360 deg / 365 dys  = 0.986
    hr_dot.style.transform = `rotateZ(${h * 15}deg)`; // 360 deg / 24h = 15
    min_dot.style.transform = `rotateZ(${m * 6}deg)`; // 360 deg / 60min = 6
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`; // 360 deg / 60seconds = 6


    // if countdown is over, write some text..
    if (distance < 0){
        clearInterval(x);
        document.getElementById("time").style.display = 'none';
        // document.getElementById(".newYear").style.display = 'block';
    }
});