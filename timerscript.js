//times
let focus = document.getElementById("focus-timer") //25 min (pomodoro)
let short = document.getElementById("sbreak-timer") //5 min {short}
let long = document.getElementById("lbreak-timer") //10 min (long)
let timers = document.querySelectorAll(".tdisplay") //timers under pomodoro
//buttons
let session = document.getElementById("focus") //button
let sB = document.getElementById("sbreak") //button
let lB = document.getElementById("lbreak") //button
let startB = document.getElementById("start")
let endB = document.getElementById("stop")
let button = document.querySelector(".button")
let timernow = null
let interval = null

function defaulttime() {
    focus.style.display = "block"
    short.style.display = "none"
    long.style.display = "none"
    timernow = focus
}

defaulttime()

function hide() {
    timers.forEach((timer) => {
        timer.style.display="none"
    });
}
session.addEventListener("click", () => {
    hide()
    focus.style.display="block"
    session.classList.add("active")
    sB.classList.remove("active")
    lB.classList.remove("active")
    timernow = focus
})
sB.addEventListener("click", () => {
    hide()
    short.style.display="block"
    session.classList.remove("active")
    sB.classList.add("active")
    lB.classList.remove("active")
    timernow = short
})
lB.addEventListener("click", () => {
    hide()
    long.style.display="block"
    session.classList.remove("active")
    sB.classList.remove("active")
    lB.classList.add("active")
    timernow = long
})


 function begin(timerDisplay) {
    if(interval) {
        clearInterval(interval)
    }
    timerlength = timerDisplay.getAttribute("data-duration").split(":")[0]

    let ms =timerlength *60*1000
    let ending = Date.now() + ms
    interval = setInterval(function () {
        const timeleft = new Date(ending - Date.now())
        if (timeleft <= 0) {
            clearInterval(interval)
            timerDisplay.textContent = "00:00"
            const alarm=new Audio("assets/sparkle-timer.mp3")
            alarm.play()
        }
        else {
            const minutes = Math.floor(timeleft/60000)
            const seconds = ((timeleft%60000)/1000).toFixed(0)
            const formatted = `${minutes}:${seconds.toString().padStart(2, "0")}`
            timerDisplay.textContent = formatted
            
        } 
    }, 1000)

 } 


startB.addEventListener("click", () => {
        begin(timernow)
    

})

stopB.addEventListener("click", () => {
        clearInterval(interval)

})