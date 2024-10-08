

function baba (elements,modifier){ 

    let b = 0;
   let  fniarray = new array(elements.length);
    
    while (b<elements.length) {
        fniarray[b] = modifier(elements[b]);
        b = b+1;
    };
    return fniarray;
    };
    function even(number) {
        return number % 2 === 0;
    };
    console.log(baba([5, 8, 10], even));