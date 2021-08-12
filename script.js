let logs = document.getElementById("logged-el")
let countEl = document.getElementById("count-el")
let count = 0;

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function logged() {
    let countStr = count + " - "
    logs.textContent += countStr
    countEl.textContent = 0
    count = 0
}