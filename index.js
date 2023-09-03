const counter = document.querySelector(".counter");


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