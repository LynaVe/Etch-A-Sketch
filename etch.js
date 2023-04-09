let createMultipleSquare = document.querySelector('.main-container');
let squares = createMultipleSquare.querySelectorAll('div');
let subDiv = document.getElementsByClassName('sub-container');
let getColor = document.querySelector(".color-picker");



function createSixteenxSixteen(size){     //create a 16x16 grid box
    squares.forEach((div) => div.remove());
    createMultipleSquare.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    createMultipleSquare.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size*size;  //change the size of the container
    for( let i= 0; i < amount ; i++){
    let multipleDivs = document.createElement('div');
    multipleDivs.classList.add('sub-container');
    createMultipleSquare.insertAdjacentElement("beforeend", multipleDivs);
    }
}

createSixteenxSixteen(16);

function changeSize(input){
    createSixteenxSixteen(input);
}

function multipleColorChange(){ //change the bg color in multiple color
    
        for (let i = 0; i < subDiv.length; i++) {
            subDiv[i].onmouseover = function(e) {
            if (e.buttons === 1){
            let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = randomColor;
        }
    }
    }
}

function eraseButton(){ //erase the color
    
        for (let i = 0; i < subDiv.length; i++) {
            subDiv[i].onmouseover = function(e) {
            if (e.buttons === 1){
            e.target.style.backgroundColor = null;
        }
    }
    }
}

function changeSingleColor(){
    
    for (let i = 0; i < subDiv.length; i++) {
        subDiv[i].onmouseover = function(e) {
        if (e.buttons === 1){
        e.target.style.backgroundColor = getColor.value;
        }
    }
    }
}

function clearButton(){
    let createMultipleSquare = document.querySelector('.main-container');
    let squares = createMultipleSquare.querySelectorAll('div');
        for( let i = 0 ; i < squares.length; i++){
            squares[i].style.backgroundColor = null;
        }
}

