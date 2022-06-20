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


// when button clicked it is stored within a variable and will populate within the display class


// TO DO: add each number to the display when you click each button dependent on the content within the class

//append the element to this display class when you do it



// try #1, this does not give me shit but does return the element i need in console
let display = document.querySelector('display');

/*
buttons.map( button => {
    button.addEventListener('click', (e) => {
       display.innerText = e.target.innerText;

    });
});
*/

//try #2
/*
if (document.addEventListener) {
    document.addEventListener("click", handleClick, false);
}
else if (document.attachEvent) {
    document.attachEvent("onclick", handleClick);
}

function handleClick(event) {
    event = event || window.event;
    event.target = event.target || event.srcElement;

    var element = event.target;

    // Climb up the document tree from the target of the event
    while (element) {
        if (element.nodeName === "BUTTON" && /button/.test(element.className)) {
            // The user clicked on a <button> or clicked on an element inside a <button>
            // with a class name called "foo"
            todisplay(element);
            break;
        }

        element = element.parentNode;
    }
}

function todisplay(button) {

    // create a div to add a number to
    let number = document.createElement("div");

    //select the button content
    let numberVal = document.querySelector('.button');
    number.textContent = numberVal.innerText;
    

    //append button content to the display
    console.log(numberVal)
}
*/



// now I am going to try another way that does this on click
//
function storeVar(el) {

    var amount = el.getAttribute('value'); 
    let number = document.createElement("div");
    number.textContent = el.value;
    // OR: simply 
    // var amount = el.value;
    //display.appendChild(number)
   
    console.log(document.getElementsByClassName('button').value); // javascript
    
    //console.log(number)
  } 