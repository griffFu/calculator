// youtube try version
// grabbing elements from the HTML
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

let opArray = []




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
    else if (opArray.length == 0 && (buttonText == '+' || buttonText == '−' || buttonText == '÷' || buttonText == '×' || buttonText == 'AC' || buttonText == '=')){
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
        if (opInArray == false) {
            output.textContent += buttonText;
            opArray.push(buttonText);
            console.log(opArray);
            console.log("is it happening in second array ")

        }
    }
    
    else if (buttonText != '=') {
        output.textContent += buttonText;
        opArray.push(buttonText);
        console.log(opArray);


    }
        
    

    

    // if the array contains an operater, you can not add another operator to it
    // cycle through the array and check if there is an r
    // have bool that is opInArray that is false unless there is operator, 
    // if OpInarray is true, return nothing


    // lets you add a number
    /*
    else {
        output.textContent += buttonText;
        opArray.push(buttonText);
        console.log(opArray);
    }
    */
    
    
    

    

    // push button text to the array based on some scenarios
    // button can either be an operator or a number press
    // lets first see if we can add button presses to a display and also add them to an opArray
    
    
    // if first press is an operator, do not display to output and do not add to any variables
    // we know if the first press is an operator if the array is blank


    // if first press is a number, we will append this number to the array

    //if last value in the array is an operater, we can not add another operator to the arry

    // now we need to find a way to store the variables from the array

    // append the number to dummy string and add numbers to it if the button press is a number
    // if the button press is an operator, we clear the dummy string and add the operator to the array



   

    
   
    
    

   

}