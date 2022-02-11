// the end of the year
let countYear = new Date("apr 1, 2022 23:59:59").getTime()
console.log(countYear);

let counter = setInterval(() => {
    // get new date 
    let nowDate = new Date().getTime();

    // find the diffrance btween now and the ebd of the year
    let muinasTime = countYear - nowDate;

    // get time in days
    let days = Math.floor(muinasTime / (1000 * 60 * 60 * 24));
    document.querySelector(".days").innerHTML =
      days < 10 ? `0${days}` : days;

    let hours = Math.floor(
      (muinasTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    document.querySelector(".hours").innerHTML =
      hours < 10 ? `0${hours}` : hours;
    
    let minutes = Math.floor((muinasTime % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector(".mins").innerHTML =
      minutes < 10 ? `0${minutes}` : minutes;
    let seconds = Math.floor((muinasTime % (1000 * 60 )) / (1000));
    document.querySelector(".secs").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    if (muinasTime < 0) {
        clearInterval(counter);
    }
}, 1000);