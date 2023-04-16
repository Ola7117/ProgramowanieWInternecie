var columns = 5;
var rows = 4;
let numberOfPieces = columns * rows;
var currentPiece;
var otherPiece;

window.onload = function() {
    showBlankPieces();
    pieces = shufflePieces();
    showPieces(pieces);   
}

function showBlankPieces() {
    for (let blankPieceNumber = 0; blankPieceNumber < numberOfPieces; blankPieceNumber++) {
        let blankPiece = document.createElement("img");
        blankPiece.alt = "blank_piece";
        blankPiece.src = "./pieces/blank_piece.png";
        blankPiece.addEventListener("dragstart", dragStart);
        blankPiece.addEventListener("dragover", dragOver);
        blankPiece.addEventListener("dragenter", dragEnter);
        blankPiece.addEventListener("dragleave", dragLeave);
        blankPiece.addEventListener("drop", drop);
        blankPiece.addEventListener("dragend", dragEnd);
        document.getElementById("board").append(blankPiece);
    }
}

function shufflePieces() {
    let pieces = [];
    for (let pieceNumber = 1; pieceNumber <= numberOfPieces; pieceNumber++) {
        pieces.push(pieceNumber);
        let pieceToSwitchWith = Math.floor(Math.random() * pieceNumber);
        let temp = pieces[pieceNumber - 1];
        pieces[pieceNumber - 1] = pieces[pieceToSwitchWith];
        pieces[pieceToSwitchWith] = temp;
    }
    return pieces;
}

function showPieces(pieces) {
    for (let pieceNumber = 0; pieceNumber < pieces.length; pieceNumber++) {
        let piece = document.createElement("img");
        piece.alt = "piece";
        piece.src = "./pieces/piece" + pieces[pieceNumber] + ".png";
        piece.addEventListener("dragstart", dragStart);
        piece.addEventListener("dragover", dragOver);
        piece.addEventListener("dragenter", dragEnter);
        piece.addEventListener("dragleave", dragLeave);        
        piece.addEventListener("drop", drop);
        piece.addEventListener("dragend", dragEnd);
        document.getElementById("pieces").append(piece);
    }
}

function dragEnd() {
    if (currentPiece.src.includes("blank_piece")) {
        return;
    }
    let currentPicture = currentPiece.src;
    let otherPicture = otherPiece.src;
    currentPiece.src = otherPicture;
    otherPiece.src = currentPicture;
    if (checkIfSolved()) {
        document.getElementById("win").innerHTML = "Gratulacje!";
    };
}

function dragEnter(event) {
    event.preventDefault();
}

function dragLeave(event) {
    
}

function dragOver(event) {
    event.preventDefault();
}

function dragStart() {
    currentPiece = this;
}

function drop() {
    otherPiece = this;
}

function checkIfSolved() {
    let piecesOrder = document.getElementById("board").getElementsByTagName("img");
    let solved = true;
    for (let piecesOrderNumber = 0; piecesOrderNumber < piecesOrder.length; piecesOrderNumber++) {
        let shiftedPiecesOrderNumber = piecesOrderNumber + 1;
        let correctSrc = "./pieces/piece" + shiftedPiecesOrderNumber + ".png";
        let actualSrc = "";
        if (correctSrc.length == 19) {
            actualSrc = "." + piecesOrder[piecesOrderNumber].src.slice(-18);
        }
        if (correctSrc.length == 20) {
            actualSrc = "." + piecesOrder[piecesOrderNumber].src.slice(-19);
        }
        if (actualSrc !== correctSrc) {
            solved = false;
            break;
        }
    }
    return solved;
}