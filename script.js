// youtube try version
// grabbing elements from the HTML
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

// array for the storing of the number and the function
let opArray = []

//blank strings that will be appended with either the number or the operation
let firstArg = "";
let secondArg = "";
let calOperator = "";
let firstArgFull = false;




// creating the functions for the different kinds of operations used in the calc
function add(a,b) {
    return (a + b)  
};
  
function subtract(a,b) {
    return (a-b)
};

function multiply(a,b) {
    return (a * b)
};

function divide(a,b) {
    return (a / b)
};

// creating a function that can take in two numbers and an operation and return a result
// note that you will have to change this to be a return most likely for the JS w the dom to work
function operate(a,b,operation) {
    let calc = 0
    if (operation == '+'){
        calc = add(a,b)
    }
    if (operation == '−'){
        calc = subtract(a,b)
    }
    if (operation == '×'){
        calc = multiply(a,b)
    }
    else if (operation == '÷'){
        calc = divide(a,b)
    }
    //console.log(result);
    result.textContent += " = "
    result.textContent += calc;
};




//create an event listener for click of buttons
keys.forEach(key => {
    key.addEventListener("click", calculate);
})



function calculate(){
    
    // this is a variable that will store the inner text from the button press
    let buttonText = this.innerText;
    let opInArray = false;

    // if the user wants to operator
    if (buttonText == "="){
        // cycling through the array and adding values of firstArg, secondArg, and operator
        //['3','3','+','8']
        for (let i = 0; i < opArray.length; i++){
            if (!(isNaN(opArray[i])) && firstArgFull === false){
                firstArg += opArray[i]
            }
            else if(opArray[i] == '+' || opArray[i] == '−' || opArray[i] == '÷' || opArray[i] == '×'){
                calOperator += opArray[i]
                firstArgFull = true
            }
            else {
                secondArg += opArray[i]
            }  
        }

        firstArgInt = parseInt(firstArg)
        secondArgInt = parseInt(secondArg)
        operate(firstArgInt,secondArgInt,calOperator)
        
        // need to find a way to set this result to the first argument
        //clear the second argument and the operator
        // change the layout to match the top TOP version
    }
            
    

    // if AC is clicked, everything is cleared
    if (buttonText === "AC"){
        output.innerText = ""
        result.innerText = "";
        opArray = [];
        firstArg = "";
        secondArg = "";
        calOperator = "";
        firstArgFull = false;
    }
    

    // logic for what can be in the array
    // can not start with an operate
    else if (opArray.length == 0 && (buttonText == '+' || buttonText == '−' || buttonText == '÷' || buttonText == '×' || buttonText == 'AC')){
        /*output.textContent += buttonText;
        opArray.push(buttonText);
        console.log(opArray);
        console.log("is it happening in first array")
        */
    }  

    // can not add an operator if one already exists
    else if (buttonText == '+' | buttonText == '−' | buttonText == '÷' | buttonText == '×'){
        // goes through array, if finds an operator in the array, will not add this operator to the array
        for (let i = 0; i < opArray.length; i++){
            if (opArray[i] === '+' | opArray[i] === '−' | opArray[i] === '÷' | opArray[i] === '×'){
                opInArray = true;
                break;
            }
        }
        // if there is not an operator already in the array, then add the operator to it
        if (opInArray == false) {
            output.textContent += " ";
            output.textContent += buttonText;
            output.textContent += " ";
            opArray.push(buttonText);
            console.log(opArray);
        }
    }
    

    // if the button pressed is a number only, then it will be added to the array no matter what
    else if (buttonText != '=') {
        output.textContent += buttonText;
        opArray.push(buttonText);
        console.log(opArray);


    }

}