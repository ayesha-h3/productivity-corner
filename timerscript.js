//times
let focus = document.getElementById("focus-timer") //25 min
let short = document.getElementById("sbreak-timer") //5 min
let long = document.getElementById("lbreak-timer") //10 min
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
}

defaulttime()

function hide() {
    timers.forEach((time) => {
        time.style.display="none"
    });
}
session.addEventListener("click", () => {
    hide()
    focus.style.display="block"
    session.classList.add("active")
    sB.classList.remove("active")
    lB.classList.remove("active")
})
sB.addEventListener("click", () => {
    hide()
    short.style.display="block"
    session.classList.remove("active")
    sB.classList.add("active")
    lB.classList.remove("active")
})
lB.addEventListener("click", () => {
    hide()
    long.style.display="block"
    session.classList.remove("active")
    sB.classList.remove("active")
    lB.classList.add("active")
})
function begin(timers) {
    if(interval) {
        clearInterval(interval)
    }
    timerlength = timers.getAttribute("data-duration").split(":")[0]

    let ms =timerlength *60000
    let ending = Date.now() + ms
    interval = setInterval(() => {
        const timeleft = new DataTransfer(ending - Date.now())
        if (timeleft < 0) {
            clearInterval(interval)
            timers.textcontent = "00:00"
            const alarm=new Audio("assets/sparkle-timer.mp3")
            alarm.play()
        }
        else {
            
        }
        
    }, 1000)

}
startB.addEventListener("click", () => {
    if(timernow){
        begin(timernow)
    }
    

})