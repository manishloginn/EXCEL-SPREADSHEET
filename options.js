

const activeCellElement = document.querySelector('.selected-cell')
let selectedCell = null

bodyy.addEventListener("click", (e) => {
    selectedCell = e.target.id;
    activeCellElement.innerText = selectedCell
})