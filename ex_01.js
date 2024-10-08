document.addEventListener("DOMContentLoaded", function() {

function reduceOpacity() { 
    let olo = document.getElementById('square')
    olo.style.opacity = parseFloat(olo.style.opacity) * 0.5
}

function resetOpacity() { 
let olo = document.getElementById('square')
olo.style.opacity = 1
}
let olo = document.getElementById('square')
olo.addEventListener('mouseover',reduceOpacity)
olo.addEventListener('mouseleave',resetOpacity)
})