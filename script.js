const grid = document.querySelector("#grid");

const size = 16;

const squareSize = grid.clientWidth / size;

for (let i = 0, n = size ** 2; i < n; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.minWidth = `${squareSize}px`;
    box.style.minHeight = `${squareSize}px`;
    grid.appendChild(box);
}