document.addEventListener("DOMContentLoaded", function() { 

    let rotadeg = 0;

    function rotateCircle(angles) { 
      
  rotadeg += angles;
            let plusn = document.getElementById('circle'); plusn.style.transform = `rotate(${rotadeg}deg)`;
        plusn.style.transformOrigin = 'center';
    }

    let botttonn = document.querySelectorAll('.rotate-button');

    botttonn.forEach(button => {
        button.addEventListener('click', function() { 
            let ange = parseInt(this.value);
            if (ange === 0) {
                rotadeg = 0;
            }
            rotateCircle(ange);
        });
    });
});