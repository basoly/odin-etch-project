// create children of container based on user input
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid() {

    let container = document.querySelector('.grid-container');
    removeAllChildNodes(container);
    userInput = prompt()
    if (userInput > 100) {
    alert('Input size above limit of 100')
    } else {
        let gridSize = userInput; // = input from user
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
        }}
    }
}

    let btn = document.querySelector('#set-size')
    btn.addEventListener('click', (event) => {
        createGrid();
    })
