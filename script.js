const DEFAULT_GRID_SIZE = 16;
const grid = document.querySelector("#grid");

function drawGrid(size) {
    grid.innerHTML = "";
    const squareSize = grid.clientWidth / size;

    for (let i = 0, n = size ** 2; i < n; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.minWidth = `${squareSize}px`;
        box.style.minHeight = `${squareSize}px`;
        grid.appendChild(box);
    }
}

document.querySelector("button").addEventListener("click", e => {
    let input;
    do {
        input = parseInt(prompt("Enter a new grid size (1-100)"));
    } while (!input || typeof input != "number" || Math.floor(input) != input || input < 1 || input > 100);
    drawGrid(input)
})

document.addEventListener("mouseover", e => {
    if (e.target.classList.contains("box")) {
        const opacity = getComputedStyle(e.target).getPropertyValue("opacity")
        if (opacity > 0)
            e.target.style.opacity = opacity - 0.1;
    }
})

drawGrid(DEFAULT_GRID_SIZE)