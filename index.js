let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function increment(){
 count++
countEl.textContent = count
}


function save(){
let countSave = count + " - "
saveEl.textContent += countSave
count = 0
countEl.textContent = count
}


