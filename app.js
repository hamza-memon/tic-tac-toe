


const winningPatterns = [
    // Horizontal
    [0, 1, 2], [1, 2, 3],
    [4, 5, 6], [5, 6, 7],
    [8, 9, 10], [9, 10, 11],
    [12, 13, 14], [13, 14, 15],

    // Vertical
    [0, 4, 8], [4, 8, 12],
    [1, 5, 9], [5, 9, 13],
    [2, 6, 10], [6, 10, 14],
    [3, 7, 11], [7, 11, 15],

    // Diagonal
    [0, 5, 10], [4, 9, 14],
    [3, 6, 9], [7, 10, 13],
    [1,6,11],[5,10,15],[6,9,12],
    [2,5,8],
];


boxes = document.querySelectorAll(".btn");
turn = true
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerHTML = "x"
            turn = false

        } else {
            box.innerHTML = "o"
            turn = true
        }
        box.disabled = true;
        checkWinner()
    })
});


let winner = document.getElementById("winner");
let span = document.getElementsByTagName("span")[0];

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let position1 = boxes[pattern[0]].innerHTML;
        let position2 = boxes[pattern[1]].innerHTML;
        let position3 = boxes[pattern[2]].innerHTML;
    

    if (position1 != "" && position1 === position2 && position1 === position3) {
        winner.style.display="block";
        span.innerHTML=position1;
        for(let box of boxes){
            box.disabled=true;
        }
    }
}
}

function reset() {

    for (let box of boxes){
        box.disabled=false;
        box.innerHTML="";
        winner.style.display="none";

    }
}



