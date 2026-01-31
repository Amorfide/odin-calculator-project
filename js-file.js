const btn = document.querySelectorAll(".number");
const screen = document.querySelector(".screen");

btn.forEach(btn => {
    btn.addEventListener("click", (event) => {
        screen.textContent += event.target.textContent;
    })
});