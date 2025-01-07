const board = document.querySelector("#board");
const start = document.querySelector("#start");

start.addEventListener('click', () => {
    while(board.firstChild){
        board.removeChild(board.firstChild);
    }
    let gridInput = prompt("What size grid?");
    
    let gridSize = parseInt(gridInput);

    board.style.borderStyle = "solid";
    board.style.borderWidth = "2px";
    board.style.borderColor = "black";
    board.style.width = `${gridSize}px`;
    board.style.height = `${gridSize}px`;

    for(let i=0; i<parseInt(gridInput)**2; i++){
    const square = document.createElement("div");
    square.style.backgroundColor = "green";
    square.style.height = "1px";
    square.style.width = "1px";
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = "black";
    });
    board.appendChild(square);
    };
});

    

    