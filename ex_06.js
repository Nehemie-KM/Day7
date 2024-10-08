document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("robot").onclick = function() {
        let yolo = document.getElementById("speech-bubble");
        yolo.textContent = "Ouch, that hurts!"; 
    };
    function curseur() { 
    let olo = document.getElementById('container');
    
    }
    let olo = document.getElementById('square')
    olo.addEventListener('mouseover',curseur)
    olo.addEventListener('mouseleave',resetOpacity)
    })