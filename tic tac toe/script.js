const mainGrid = document.querySelector(".main-grid");
const resetBtn = document.querySelector(".btn.reset");
const winnerParagraph= document.querySelector(".winner-para");
let gameState = "running";
const exitBtn = document.querySelector(".btn.exit");
const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");
const col3 = document.getElementById("col3");
const col4 = document.getElementById("col4");
const col5 = document.getElementById("col5");
const col6 = document.getElementById("col6");
const col7 = document.getElementById("col7");
const col8 = document.getElementById("col8");
const col9 = document.getElementById("col9");



let turn="X";
function clearBoard()
{
    for(let i=1;i<10;i++)
    {
        document.getElementById(`col${i}`).textContent = "";
        document.getElementById(`col${i}`).disabled = false;
    }
    winnerParagraph.textContent="";
    gameState="running";
}
function determineWinner(){
if(
    (col1.textContent === "X" &&
       col2.textContent === "X" &&
       col3.textContent === "X") ||
     (col4.textContent === "X" &&
       col5.textContent === "X" &&
       col6.textContent === "X") ||
     (col7.textContent === "X" &&
       col8.textContent === "X" &&
       col9.textContent === "X") ||
     (col1.textContent === "X" &&
       col4.textContent === "X" &&
       col7.textContent === "X") ||
     (col2.textContent === "X" &&
       col5.textContent === "X" &&
       col8.textContent === "X") ||
     (col3.textContent === "X" &&
       col6.textContent === "X" &&
       col9.textContent === "X") ||
     (col1.textContent === "X" &&
       col5.textContent === "X" &&
       col9.textContent === "X") ||
     (col3.textContent === "X" &&
       col5.textContent === "X" &&
       col7.textContent === "X")
   ) {
     winnerParagraph.textContent = "X is the winner! Press Reset To play again.";
     winnerParagraph.classList.remove("invisible");
     gameState = "Over";
   } else if (
     (col1.textContent === "O" &&
       col2.textContent === "O" &&
       col3.textContent === "O") ||
     (col4.textContent === "O" &&
       col5.textContent === "O" &&
       col6.textContent === "O") ||
     (col7.textContent === "O" &&
       col8.textContent === "O" &&
       col9.textContent === "O") ||
     (col1.textContent === "O" &&
       col4.textContent === "O" &&
       col7.textContent === "O") ||
     (col2.textContent === "O" &&
       col5.textContent === "O" &&
       col8.textContent === "O") ||
     (col3.textContent === "O" &&
       col6.textContent === "O" &&
       col9.textContent === "O") ||
     (col1.textContent === "O" &&
       col5.textContent === "O" &&
       col9.textContent === "O") ||
     (col3.textContent === "O" &&
       col5.textContent === "O" &&
       col7.textContent === "O")
   ) {
     winnerParagraph.textContent = "O is the winner! Press Reset To play again.";
     winnerParagraph.classList.remove("invisible");
     gameState = "Over";

}
else if(isDraw())
{
    winnerParagraph.textContent = "Draw! Press Reset To play again.";
    winnerParagraph.classList.remove("invisible");
    gameState = "Over";
  
}
}

function playTurn(event)
{
    if(gameState==="Over")
    {
     return;
    }
    const target=event.target;
    if(target.tagName==="BUTTON")
    {
    target.textContent=turn;
    target.disabled = true;
    if(turn === "X")
    {
        turn ="O";
    }
    else{
        turn="X";
    }

    determineWinner();
    }
}
function isDraw(){
    const buttons =  mainGrid.querySelectorAll("button");
    for(const i of buttons)
    {
        if(i.disabled===false)
        {
            return false;
        }
    }
    return true;
    
}
function thanks()
{
    window.location="thanks.html";
}

resetBtn.addEventListener('click',clearBoard);
mainGrid.addEventListener('click',playTurn);
exitBtn.addEventListener('click',thanks);
