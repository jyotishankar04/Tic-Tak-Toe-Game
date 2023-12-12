let reset  = document.querySelector(".resetBtn");
let btns = document.querySelectorAll(".gameBtns");
let playerTurnDisplay = document.querySelector(".turnShowSpan");
let winnerPopUp = document.querySelector(".showWinner");
let newGameBtn = document.querySelector(".showBtn");
let winnerPopUpPlayer =  document.querySelector(".winnerPlayer");
let playerTurn = true;//!player1, player2
const  winPatterns = [[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[3,4,5],
[6,7,8],
[6,4,2]
];

// Player turn switching
btns.forEach((box)=>{
   box.addEventListener("click",()=>{
        if(playerTurn){
            box.innerHTML = "O";
            playerTurnDisplay.innerHTML ="X";
            box.style.color = "#e95a66f7";
            playerTurn = false;
        }else{
            box.innerHTML = "X";
            box.style.color = "#e95a66f7";
            playerTurnDisplay.innerHTML ="O";
            playerTurn = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledBoxes = ()=>{
    for(box of btns){
        box.disabled = true;
    }
}


const resetFun= () =>{
    let i = 0;
    for(btn of btns){
        if(i === 0){
            btn.innerHTML = ".";
            i++;
        }else {
            btn.innerHTML = " ";
            i++;
        }
    }
}
reset.addEventListener("click",()=>{
    resetFun();
});

const showWinner = (winPlayer)=>{
    winnerPopUp.style.top= "0";
    if(winPlayer ==='O')
    winnerPopUpPlayer.innerHTML = "O";
else{
    
    winnerPopUpPlayer.innerHTML = "X";
}
}

const checkWinner= ()=>{
    for(pattern of winPatterns){
        let pos0 = btns[pattern[0]].innerText;
        let pos1 = btns[pattern[1]].innerText;
        let pos2= btns[pattern[2]].innerText;
        if(pos0 != "" && pos1 != "" && pos2 != 0){
            if(pos0 === pos1 && pos1 === pos2){
                // !Checking the winner
                showWinner(pos0);
                disabledBoxes();
                // !

            }
        }
       
    }
}

newGameBtn.addEventListener("click",()=>{
    winnerPopUp.style.top = "-300px";
    resetFun();
    for(btn of btns){
        btn.disabled = false;
    }
})

