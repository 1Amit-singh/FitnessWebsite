const counter = document.querySelector(".counter");
let buttons = document.querySelector(".nav-btns")
let singleButton = document.querySelectorAll(".nav-btn")

buttons.addEventListener("click", (event)=> {
    singleButton.forEach((val) => {
        if (val.classList[1] === "active"){
            val.classList.remove("active");
        }
    })
    if(event.target.classList[0] !== "nav-btns"){
        event.target.classList.add("active")
    }
})


let speed = 500;
const updateCounter = () => {
    const initial = parseInt(counter.innerText);
    const range = parseInt(counter.dataset.numbers);

    if (initial < range){
        counter.innerText = initial + speed + '+';
        setTimeout(updateCounter, 60);
    }

}

updateCounter();