let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
let sto = 0;
const msg = document.getElementById("msg")
const msg2 = document.getElementById("msg2")
const stp = document.getElementById("stop");
const strt = document.getElementById("start");
stp.addEventListener("click", () => {
    setTimeout(() => { msg.style.display = "block" },)
    setTimeout(() => { msg.style.display = "none" }, 2000)
}
)
strt.addEventListener("click", () => {
    setTimeout(() => { msg2.style.display = "block" },)
    setTimeout(() => { msg2.style.display = "none" }, 2000)
}
)

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("display").textContent = `${h}:${m}:${s}`;
}

function tick() {
    seconds++;
    if (seconds === 60) { seconds = 0; minutes++; }
    if (minutes === 60) { minutes = 0; hours++; }
    updateDisplay();
}

function start() {
    if (timer === null) {
        timer = setInterval(tick, 1000);
    }
    sto = 0;
}

function stop() {
    clearInterval(timer);
    timer = null;
    if (sto != 1) { document.getElementById("howmany").textContent++; }
    sto = 1;

}

function reset() {
    stop();
    seconds = 0; minutes = 0; hours = 0;
    updateDisplay();
    document.getElementById("howmany").textContent = 0;


}
/*========================================================================================================*/

const input = document.querySelector("input")
const form = document.querySelector("form");
const task = document.querySelector(".Task");
const bin = document.querySelector(".icon-bin");
const heart = document.querySelector(".icon-heart");
const sad = document.querySelector(".icon-sad2");
form.addEventListener("submit",
    (eo) => {
        eo.preventDefault();
        task.innerHTML += `<div class="task"><span class="icon-star-full icon"></span><p>${input.value}</p><div><span class="icon-sad2 icon" ></span><span class="icon-bin icon"> </span></div></div>`
        input.value=" ";
    });

task.addEventListener("click", (eo) => {
    if (eo.target.className == "icon-bin icon") {
        eo.target.parentElement.parentElement.remove();
    }

});

task.addEventListener("click", (eo) => { 
    if (eo.target.classList.contains("icon-sad2")) {
        eo.target.classList.add("dn"); 
        eo.target.parentElement.parentElement.style.backgroundColor=" rgba(156, 91, 148, 0.94)";
        eo.target.parentElement.innerHTML += `<span class="icon-heart" ></span> <span class="icon-wink2 icon"> </span>`
    }
});




task.addEventListener("click", (eo) => { 
    if (eo.target.classList==("icon-heart")) {
        eo.target.parentElement.parentElement.style.backgroundColor=" rgba(180, 214, 241, 0.4)";
        eo.target.classList.add("dn"); 
        eo.target.parentElement.innerHTML = `</span> <span class="icon-sad2 icon"> </span> <span class="icon-bin icon"> </span>`
    }
});
task.addEventListener("click", (eo) => { 
    if (eo.target.classList==("icon-star-full icon")) {
        eo.target.parentElement.parentElement.prepend(eo.target.parentElement) 
        eo.target.classList.add("orange"); 
    }
     else if (eo.target.classList==("icon-star-full icon orange")) {
         eo.target.classList.remove("orange");  
    }
});



