const inputMin = document.getElementById("minInput");
    const inputMax = document.getElementById("maxInput");
    const main = document.getElementById("container");

inputMin.onkeyup = function(e) {
        this.value = inputMin.value.replace(/^(0*)/,"");
        if (inputMin.value >= 1 && inputMin.value <= 99) {
            return inputMin.value;
        } else {
            inputMin.value = null;
        }
        if (!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58) 
        || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
       )) {
            return false;
        }
        
    };
    
    inputMax.onkeyup = function(e) {
        this.value = inputMax.value.replace(/^(0*)/,"");
        if (inputMax.value > inputMin.value && inputMax.value <= 100) {
            return inputMax.value;
        } else {
            inputMax.value = null;
        }
        if (!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58) 
        || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
       )) {
            return false;
           }
           
    };



const fizzBuzz = function() {
    for( let i = 1; i <= 100; i++ ) {
        let newDiv = document.createElement("div");
        let newPar = document.createElement("p");
        
        newDiv.appendChild(newPar);
        main.appendChild(newDiv).setAttribute("id", "div_" + i);

        if (i < inputMin.value || i > inputMax.value) {
            main.children.style = "display: none";
            
            
        } else {
        
        if( i % 3 === 0 && i % 5 === 0 ) {
            newPar.appendChild(document.createTextNode('FIZZ BUZZ'));
            main.appendChild(newDiv).setAttribute("class", "fizbuz");
            
        } else if ( i % 3 === 0 ) {
            newPar.appendChild(document.createTextNode('FIZZ'));
            main.appendChild(newDiv).setAttribute("class", "fiz");
        
        } else if ( i % 5 === 0 ){
            newPar.appendChild(document.createTextNode('BUZZ'));
            main.appendChild(newDiv).setAttribute("class", "buz");
        
        } else {
            newPar.appendChild(document.createTextNode(i));
            main.appendChild(newDiv).setAttribute("class", "num");

        }
    }
}
};

fizzBuzz();





