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
    let result = 0
    if (operation == '+'){
        result = add(a,b)
    }
    if (operation == '-'){
        result = subtract(a,b)
    }
    if (operation == '*'){
        result = multiply(a,b)
    }
    else if (operation == '/'){
        result = divide(a,b)
    }
    console.log(result);
};




//create an event listener for click of buttons
keys.forEach(key => {
    key.addEventListener("click", calculate);
})



function calculate(){
    
    // this is a variable that will store the inner text from the button press
    let buttonText = this.innerText;
    let opInArray = false;

    // if AC is clicked, everything is cleared
    if (buttonText === "AC"){
        output.innerText = ""
        result.innerText = "";
        opArray = [];
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
            output.textContent += buttonText;
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
        
    
  
    // lets start off with an easy example where the array is [3,+,8]
    // i might be able to put this function at the very top
    // append
    else if (buttonText == "="){
        for (let i = 0; i < opArray.length; i++){
            // append the values to this unless it is an operator
            firstArg += opArray[i]
            secondArg += opArray[i]
            calOperator += opArray[i]
    
        }
    }
    
    

    
    
    


   

    
   
    
    

   

}