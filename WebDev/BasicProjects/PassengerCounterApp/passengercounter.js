let count=0
let countEl= document.getElementById("elcount")
let saveEl= document.getElementById("save-el")
function increment() {
    count = count + 1
    countEl.innerText= count
}
function save(){
    let a = count + " - "
    saveEl.textContent+= a
    count=0
    countEl.innerText= 0
}
