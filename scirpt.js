const container = document.querySelector('#container');
const gridContainer = document.querySelector('#grid');
const resetButton = document.querySelector('#reset');
const colorPicker = document.querySelector('#colorPicker');
const clearButton = document.querySelector('#clear');

const createGraph = (gridSize) => {
    // Create grid
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    // Create grid boxes
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        gridContainer.appendChild(gridBox);
    };
    // Display the grid size
    document.querySelector('.dimensions').textContent = `${gridSize}x${gridSize}`;
};

// Functionality for each grid
const addFunctionality = () => {
    let gridBoxList = document.querySelectorAll('.gridBox');
    gridBoxList.forEach(gridBox => {
        gridBox.addEventListener('mousedown', function() {
            isDrawing = true; // Start drawing when mouse button is pressed
            gridBox.style.backgroundColor = colorPicker.value;
        });

        gridBox.addEventListener('mouseup', function() {
            isDrawing = false; // Stop drawing when mouse button is released
        });

        gridBox.addEventListener('mouseover', function() {
            if (isDrawing) { // Only sketch if mouse button is pressed
                gridBox.style.backgroundColor = colorPicker.value;
            }
        });

    });
};

// Update the color of the grid
colorPicker.addEventListener('change', function(){
    color = colorPicker.value;
})

// Add functionality to the reset button
resetButton.addEventListener('click', function(){
    // Only take new grid size if valud
    let gridSize = prompt('Enter grid size, it should be a value from 1 to 100: ');
    if (gridSize === null) {
        return;
    }
    while (gridSize < 1 || gridSize > 100) {
        gridSize = prompt('Invalid input, please enter a value from 1 to 100');
    }
    // Clear the grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    // Create new grid
    createGraph(gridSize);
    addFunctionality();
});

// Add functionality to the clear button
clearButton.addEventListener('click', function(){
    // Change color of all grid box to white
    document.querySelectorAll('.gridBox').forEach(gridBox => {
        gridBox.style.backgroundColor = 'white';
    });
});

// Initialize the grid
let gridSize = 16;
createGraph(gridSize);
addFunctionality();
