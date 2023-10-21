// create children of container based on user input
let container = document.querySelector('.grid-container');
let gridSize = 100; // = input from user
// create grid function for later use
let rowContainer;
//loop for creation of grid
for (let i = 0; i < gridSize; i++) {
    rowContainer = document.createElement('div');
    rowContainer.className = 'row-container';
    container.appendChild(rowContainer);
    // second loop for creation of children boxes of rowSquare
    let childSquare;
    for (let j = 0; j < gridSize; j++) {
        childSquare = document.createElement('div');
        childSquare.className = 'square';
        childSquare.addEventListener('mouseover', (event) => {
            let target = event.target;
            target.setAttribute('style', 
            'background-color: yellow;')});
        rowContainer.appendChild(childSquare);
    }
}

let squares = document.body.querySelectorAll('.square')

// container.addEventListener('mouseover', (event) => {
//     let target = event.target;
//     target.setAttribute('style', 'background-color: yellow;');
// })

let hoverListener = function() {
    // if hover, change background color
}

