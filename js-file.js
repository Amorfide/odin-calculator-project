const btn = document.querySelectorAll(".number");
const screen = document.querySelector(".screen");
const btnContainer = document.getElementById("button-container")

let currentValue = "";
let a = null;
let operator = null;

btnContainer.addEventListener("click", (event) => {
    if(event.target.id === "number"){
        currentValue += event.target.textContent;
        screen.textContent += event.target.textContent;
    }

    if(event.target.id === "operator"){
        a = Number(currentValue);
        operator = event.target.textContent;
        currentValue = "";
        screen.textContent += event.target.textContent;
    }

    if(event.target.id === "equals"){
        const b = Number(currentValue);
        let result;
        if(operator === "+"){
            result = add(a,b);
        }
        if(operator === "-"){
            result = subtract(a, b);
        }
        screen.textContent = result;
        currentValue = result.toString();
    }

});

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}