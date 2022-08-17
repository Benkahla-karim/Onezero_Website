// document.querySelector(".days").textContent = "25"

let counDown = new Date("12/31/2022 23:59:59").getTime()
let count =setInterval(() => {
    let dateNow = new Date().getTime()
    let DiffTime = counDown - dateNow;
    let days = Math.floor(DiffTime / (1000 * 60 * 60 * 24 ))
    let hours = Math.floor(DiffTime % (1000 * 60 * 60 * 24 ) / (1000 * 60 *60))
    let minutes = Math.floor(DiffTime % (1000 * 60 * 60 ) / (1000 * 60 ))
    let secondes = Math.floor(DiffTime % (1000 * 60 ) / (1000 ))

    document.querySelector(".days").innerHTML = days< 10 ?`0${days}`:days;;
    document.querySelector(".hours").innerHTML = hours< 10 ?`0${hours}`:hours;;
    document.querySelector(".minutes").innerHTML = minutes< 10 ?`0${minutes}`:minutes;
    document.querySelector(".seconds").innerHTML = secondes < 10 ?`0${secondes}`:secondes;

},1000)

