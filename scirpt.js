const container = document.querySelector('#container');
const gridContainer = document.querySelector('#grid');
const resetButton = document.querySelector('#reset');
const colorPicker = document.querySelector('#colorPicker');
const clearButton = document.querySelector('#clear');

const createGraph = (gridSize) => {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        gridContainer.appendChild(gridBox);
    };
    document.querySelectorAll('.dimensions').textContent = `${gridSize}x${gridSize}`;
};

const addFunctionality = () => {
    let gridBoxList = document.querySelectorAll('.gridBox');
    gridBoxList.forEach(gridBox => {
        gridBox.addEventListener('mouseover', function(){
            gridBox.style.backgroundColor = colorPicker.value;
        });
    });
};

colorPicker.addEventListener('change', function(){
    color = colorPicker.value;
})

resetButton.addEventListener('click', function(){
    let gridSize = prompt('Enter grid size, it should be a value from 1 to 100: ');
    if (gridSize === null) {
        return;
    }
    while (gridSize < 1 || gridSize > 100) {
        gridSize = prompt('Invalid input, please enter a value from 1 to 100');
    }
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGraph(gridSize);
    addFunctionality();
});

clearButton.addEventListener('click', function(){
    document.querySelectorAll('.gridBox').forEach(gridBox => {
        gridBox.style.backgroundColor = 'white';
    });
});

let gridSize = 16;
createGraph(gridSize);
addFunctionality();
