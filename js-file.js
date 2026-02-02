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

container.addEventListener("click", (event) => {
    if(event.target.classList.contains("number")){
        if(operation === true){
            operation = false;
            screen.textContent = "";
        }
        screen.textContent += event.target.textContent;
    }

    if(event.target.classList.contains("operator")){
        operator = event.target.textContent;
        operation = true;
        a = Number(screen.textContent);
        screen.textContent = event.target.textContent;
    }

    if(event.target.classList.contains("equals")){
        b = Number(screen.textContent);
        screen.textContent = String(operate(a, operator, b));
    }
})

let a;
let b;
let operator;