   
     var inputMin = document.getElementById("minInput");
     let inputMax = document.getElementById("maxInput");
    const main = document.getElementById("container");
    
    
 
const fizzBuzz = function() {

    inputMin.value = 1;
    inputMax.value = 100;

    

    for( i = inputMin.value; i <= inputMax.value; i++ ) {
        let newDiv = document.createElement("div");
        let newPar = document.createElement("p");
        newDiv.appendChild(newPar);
        main.appendChild(newDiv).setAttribute("id", "div_" + i);
        
        if ( i < inputMin.value || i > inputMax.value) {
            newDiv.style = "display: none";
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



inputMin.oninput = function(e){
    e.target.innerHTML = inputMin.value;
    
    fizzBuzz();
};

inputMax.onkeyup = function(e){
    e.target.value = inputMax.value;
    fizzBuzz();
};




 













