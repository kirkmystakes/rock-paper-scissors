const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
  
  
    
    const playGame = () => {
        const rockBtn = document.querySelector("#rock");
        const paperBtn = document.querySelector("#paper");
        const scissorBtn = document.querySelector("#scissors");
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ["✊","🖐","✌️"]
          
        playerOptions.forEach(option => {
            option.addEventListener("click",function(){
  
                const movesLeft = document.querySelector("#movesLeft");
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                  
  
                const choiceNumber = Math.floor(Math.random()*2);
                const computerChoice = computerOptions[choiceNumber];

  
               
                winner(this.innerText,computerChoice)
                  
               
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
          
    }
  
   
    const winner = (player,computer) => {
        const result = document.querySelector("#result");
        const playerScoreBoard = document.querySelector("#playerCount");
        const computerScoreBoard = document.querySelector("#botCount");
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = "Draw"
        }
        else if(player == "✊"){
            if(computer == "🖐"){
                result.textContent = "Computer Won";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
               
  
            }else{
                result.textContent = "Player Won"
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == '✌️'){
            if(computer == '✊'){
                result.textContent = "Computer Won";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = "Player Won";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == '🖐'){
            if(computer == '✌️'){
                result.textContent = "Computer Won";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = "Player Won";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
  
   
    const gameOver = (playerOptions,movesLeft) => {
  
        const chooseMove = document.querySelector("#move");
        const result = document.querySelector("#result");
        const reloadBtn = document.querySelector("#reset");
  
        playerOptions.forEach(option => {
            option.style.display = "none";
        })
  
       
        chooseMove.innerText = "Game Over!";
        chooseMove.style.fontSize = "50px";
        movesLeft.style.display = "none";
  
        if(playerScore > computerScore){
            result.style.fontSize = "50px";
            result.innerText = "You won the game";
            result.style.color = "black";
        }
        else if(playerScore < computerScore){
            result.style.fontSize = "50px";
            result.innerText = "You lost the game";
            result.style.color = "black";
        }
        else{
            result.style.fontSize = "50px";
            result.innerText = "Draw";
            result.style.color = "black";
        }
        reloadBtn.innerText = "Restart";
        reloadBtn.style.display = "initial";
        reloadBtn.addEventListener("click",() => {
            window.location.reload();
        })
    }
  
  
    
    playGame();
      
}
  

game();
