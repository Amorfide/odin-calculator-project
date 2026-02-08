const container = document.getElementById("button-container");
const screen = document.querySelector(".screen");

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, operator, b){

    switch(operator){
        case "+":
            return add(a, b);
    
        case "-":
            return subtract(a, b);
    
        case "*":
            return multiply(a, b);

        case "/":
            return divide(a, b);
    }
}

let operation = false;

// enabling state control using boolean on the operator selected
container.addEventListener("click", (event) => {
    if(event.target.classList.contains("number")){

        if(operation === true){
            operation = false;
            screen.textContent = "";
        }

        screen.textContent += event.target.textContent;
    }

    // enable chain calculation, updating a each time an operator is selected
    if(event.target.classList.contains("operator")){
        const newOperator = event.target.textContent;

        if (operation && operator !== null) {
            operator = newOperator;

            screen.textContent = screen.textContent.replace(/[+\-*/]$/,newOperator);
            return;
        }

        if(a !== null && operator !== null && !operation){
            b = Number(screen.textContent);
            a = operate(a, operator, b);
            screen.textContent = a;
        }else{
            a = Number(screen.textContent);
        }
        
        operator = event.target.textContent;
        operation = true;
        screen.textContent = a;
        screen.textContent += event.target.textContent;
    }
    
    // enable result to show on screen when a and operator hold some value.
    if(event.target.classList.contains("equals")){

        if(operation){
            return;
        }
        if(a !== null && operator !== null){

            b = Number(screen.textContent);
            const result = operate(a, operator, b);
            screen.textContent = result;

            a = result;
            operator = null;
            operation = true;
        }
    }
})

let a = null;
let b = null;
let operator = null;