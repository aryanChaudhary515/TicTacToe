let boxes = document.querySelectorAll('.block');
let resetButton = document.querySelector('#resetButton');
let newGame = document.querySelector('#newButton');
let final_Result = document.querySelector('.finalResult');
let message = document.querySelector('#winner_text');


let play = true;
const winning = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8]
];

const resetGame = () => {
    play = true;
    enableboxes();
    final_Result.classList.add("hide");
};

boxes.forEach((block) =>{
    block.addEventListener("click" , ()=>{
        if(play){
            block.innerText = "O";
            play = false;
        }
        else{
            block.innerText = "X";
            play = true;
        }
        block.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let block of boxes){
        block.disabled = true;
    }
}
const enableboxes = () =>{
    for(let block of boxes){
        block.disabled = false;
        block.innerText = "";
    }
}
const showWinner = (winner) =>{
    message.innerText = `Congratulations , Winner is ${winner}`;
    final_Result.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winning){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" &&  pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3 && pos3 === pos1){
                console.log("Winner " + pos1);
                showWinner(pos1);
            }
        }
    }
}
newGame.addEventListener("click" , resetGame);
resetButton.addEventListener("click" , resetGame);