const container = document.querySelector('#container');
const grid = document.querySelector('#grid');
const resetButton = document.querySelector('#reset');
const colorPicker = document.querySelector('#colorPicker');

let gridSize = 16;
let color = colorPicker.value;

const createGraph = (gridSize) => {
    
}

colorPicker.addEventListener('change', function(){
    color = colorPicker.value;
})

resetButton.addEventListener('click', function(){
    gridSize = prompt('Enter grid size, it should be a value from 1 to 100: ');
    createGraph(gridSize);
});
