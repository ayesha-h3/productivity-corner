const box = document.getElementById("task")
const list = document.getElementById("task-list")
function savestuff(){
    localStorage.setItem("stuff", list.innerHTML)
}
function newtask() {
    if(box.value === ""){
        alert("add an actual task pls")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = box.value;
        list.appendChild(li);
        let span = document.createElement("span")
        span.textContent = "\u00d7"
        li.appendChild(span)
    }
    box.value=""
    savestuff()

}

list.addEventListener("click", (e) => {
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("done")
        savestuff()
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove()
        savestuff()
    }
}, false)

function listing() {
    list.innerHTML = localStorage.getItem("stuff")
}
listing()
