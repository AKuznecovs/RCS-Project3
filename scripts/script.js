
const fizzBuzz = function() {
    for( i = 1; i <= 100; i++ ) {

        let newDiv = document.createElement("div");
        let newPar = document.createElement("p");
        let main = document.getElementById("container");
        let button = document.getElementById("btn");


let inputMin = document.getElementById("minInput");
let inputMax = document.getElementById("maxInput");


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
        inputMax.value === null;
    }
    if (!((e.keyCode > 95 && e.keyCode < 106)
    || (e.keyCode > 47 && e.keyCode < 58) 
    || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
   )) {
        return false;
       }
       
};


let list = main.querySelectorAll('div');
for (var i = 0; i < list.length; i++) {
    if (list[i] < inputMin.onkeyup.value && list[i] > inputMax.onkeyup.value) {
        list[i].style.display = 'hidden';
    }
};
        
        if( i % 3 === 0 && i % 5 === 0 ) {

            newDiv.appendChild(newPar);
            newPar.appendChild(document.createTextNode('FIZZ BUZZ'));
            main.appendChild(newDiv).setAttribute("id", "div_" + i);
            main.appendChild(newDiv).setAttribute("class", "fizbuz");
            
        } else if ( i % 3 === 0 ) {
            newDiv.appendChild(newPar);
            newPar.appendChild(document.createTextNode('FIZZ'));
            main.appendChild(newDiv).setAttribute("id", "div_" + i);
            main.appendChild(newDiv).setAttribute("class", "fiz");
        
        } else if ( i % 5 === 0 ){
            newDiv.appendChild(newPar);
            newPar.appendChild(document.createTextNode('BUZZ'));
            main.appendChild(newDiv).setAttribute("id", "div_" + i);
            main.appendChild(newDiv).setAttribute("class", "buz");
        
        } else {
            newDiv.appendChild(newPar);
            newPar.appendChild(document.createTextNode(i));
            main.appendChild(newDiv).setAttribute("id", "div_" + i);
            main.appendChild(newDiv).setAttribute("class", "num");

        }
    }
    
};

fizzBuzz();


