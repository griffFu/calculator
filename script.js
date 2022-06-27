// youtube try version
// grabbing elements from the HTML
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

// array for the storing of the number and the function
let opArray = []

//blank strings that will be appended with either the number or the operation
let firstArg = "";
let firstArgFloat = "";
let secondArgFloat = "";
let secondArg = "";
let calOperator = "";
let firstArgFull = false;
let operatorExists = false;
let operationHappened = false;
let firstArgDecimal = false;
let secondArgDecimal = false;




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
    output.textContent = `${result.textContent} =`
    result.textContent = " "
    let roundedCalc = parseFloat(calc.toFixed(3));
    result.textContent += roundedCalc;
    return roundedCalc
    
};




//create an event listener for click of buttons
keys.forEach(key => {
    key.addEventListener("click", calculate);
})




function calculate(){

    // set a variable to the contents of the button press
    let buttonText = this.innerText;

     // if AC is clicked, everything is cleared
    if (buttonText === "AC"){
        output.innerText = ""
        result.innerText = "";
        opArray = [];
        firstArg = "";
        secondArg = "";
        calOperator = "";
        firstArgFull = false;
        operatorExists = false;
        operationHappened = false;
        firstArgDecimal = false;
        secondArgDecimal = false;
    }



    // if the intial operation has happened
    else if (operationHappened == true){
        // first arg is set to the previous calculation
        if(!isNaN(buttonText) && calOperator != "" || buttonText == "."){

            if (buttonText == "." && secondArgDecimal == false){
                secondArg += buttonText
                result.textContent += buttonText;
                secondArgDecimal = true;
            }
            else if (buttonText != "."){
                secondArg += buttonText
                result.textContent += buttonText;
            }
        }
        else if (calOperator == "" && (buttonText == '+' || buttonText == '−' || buttonText == '÷' || buttonText == '×')){
            calOperator = buttonText;
            result.textContent += buttonText;
        }
        else if (buttonText == "=" && firstArg != "" && secondArg != "" && calOperator != ""){
            if (secondArg == "0" && calOperator == '÷'){
                output.textContent = ""
                result.textContent = "You cannot divide a number by 0!"
            }
            else{
                firstArgFloat = parseFloat(firstArg)
                secondArgFloat = parseFloat(secondArg)
                firstArg = operate(firstArgFloat,secondArgFloat,calOperator)
                secondArg = "";
                calOperator = "";
                secondArgDecimal = false;
            }


        }



        

    }




    // logic for first operation
    else if (!isNaN(buttonText) || buttonText == "."){

        if (operatorExists == true){
            if (buttonText == "." && secondArgDecimal == false){
                secondArg += buttonText
                result.textContent += buttonText;
                secondArgDecimal = true;
            }
            else if (buttonText != "."){
                secondArg += buttonText
                result.textContent += buttonText;
            }
        }
        else{
            if (buttonText == "." && firstArgDecimal == false){
                firstArg += buttonText
                result.textContent += buttonText;
                firstArgDecimal = true;
            }
            else if (buttonText != ".") {
                firstArg += buttonText
                result.textContent += buttonText;
            }
        }
        
    }
    //if the button is the operator
    // first arg must exist, user cant just through in operators before number
    else if (firstArg != "" && (buttonText == '+' || buttonText == '−' || buttonText == '÷' || buttonText == '×') && !operatorExists){

        // set the operator for the text
        calOperator = buttonText
        result.textContent += buttonText

        //set operator exists = true so that they can not just add infite versions of it
        operatorExists = true;
    }

    // only operate when there are two numbers and an operator
    else if (firstArg != "" && secondArg != "" && calOperator != "" && buttonText == '=') {
        if (secondArg == "0" && calOperator == '÷'){
            output.textContent = ""
            result.textContent = "You cannot divide a number by 0!"
        }
        else{
        firstArgFloat = parseFloat(firstArg)
        secondArgFloat = parseFloat(secondArg)
        firstArg = operate(firstArgFloat,secondArgFloat,calOperator)
        operationHappened = true;
        secondArg = "";
        calOperator = "";
        secondArgDecimal = false;
        }

    }

    // now i need to figure out how to add this calc operator 

}









/*function calculate(){
    
    // this is a variable that will store the inner text from the button press
    let buttonText = this.innerText;
    let opInArray = false;



    // if AC is clicked, everything is cleared
    if (buttonText === "AC"){
        output.innerText = ""
        result.innerText = "";
        opArray = [];
        firstArg = "";
        secondArg = "";
        calOperator = "";
        firstArgFull = false;
        operatorHappened = false;
    }

    else if (operatorHappened == true){

        // 
        //if (buttonText == '+' || buttonText == '−' || buttonText == '÷' || buttonText == '×'){
        /*changes result on plus click
        output.textContent = result.textContent
        result.textContent = buttonText
        
        calOperator = buttonText;
        
        if (!isNaN(buttonText) == true){
            secondArgFloat += buttonText;

        }
    }


    else if (operatorHappened == true & !isNaN(buttonText)){
        console.log("cant do that")
    }
    
    // if the user wants to operator
    else if (buttonText == "="){
        // cycling through the array and adding values of firstArg, secondArg, and operator
        //add the operators to output

        // need to set the first argument to the rounded calc
        // clear the second argument
        // run a loop to set a new operation and second argument
        
        for (let i = 0; i < opArray.length; i++){
            if ((!(isNaN(opArray[i])) || opArray[i] == ".") && firstArgFull === false){
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
        // deals with setting the display up when the user enters an operator
        output.textContent = result.textContent

        //moves the args and operator to the top
        //set the string values to float values
        firstArgFloat = parseFloat(firstArg)
        secondArgFloat = parseFloat(secondArg)

        //run the function that returns the value of the calculation (calc) and adds it to the output
        operate(firstArgFloat,secondArgFloat,calOperator)
        firstArgFloat = roundedCalc;
        secondArgFloat = ""

        //want the button press to know that we have already entered a function and therefore we must add an operator now to do more things
        operatorHappened = true

        // heres what to do next
        // need to find a way to set this result to the first argument
        //clear the second argument and the operator
        // change thtop e layout to match the TOP version
        // round the result to 3 decimal places
    }
            
    

    

    // logic for what can be in the array
    // can not start with an operate
    else if (opArray.length == 0 && (buttonText == '+' || buttonText == '−' || buttonText == '÷' || buttonText == '×' || buttonText == 'AC')){
        /*output.textContent += buttonText;
        opArray.push(buttonText);
        console.log(opArray);
        console.log("is it happening in first array")
        
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
            result.textContent += " ";
            result.textContent += buttonText;
            result.textContent += " ";
            opArray.push(buttonText);
            console.log(opArray);
        }
    }
    

    // if the button pressed is a number only, then it will be added to the array no matter what
    else if (buttonText != '=') {
        result.textContent += buttonText;
        opArray.push(buttonText);
        console.log(opArray);


    }

}
*/
