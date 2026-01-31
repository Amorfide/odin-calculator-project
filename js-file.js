const btn = document.querySelectorAll(".number");
const screen = document.querySelector(".screen");
const btnContainer = document.getElementById("button-container")

btnContainer.addEventListener("click", (event) => {
    if(event.target.id === "number" || event.target.id === "operator"){
        screen.textContent += event.target.textContent;
    }

});

