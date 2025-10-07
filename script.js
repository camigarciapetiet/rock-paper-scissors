function getComputerChoice(){
    let x= Math.random();
    if (x<0.34){
        return 0; //rock
    } else if (x<0.67) {
        return 1; //paper
    } else {
        return 2; //scissors 
    };
}

function incrementHumanScore(){
    h++;
    humanScore.textContent=h;
}

function incrementComputerScore(){
    c++;
    computerScore.textContent=c;
}

function showEndScreen(message){
    modalTitle.textContent=message;
    overlay.style.display="flex";
}

function checkWinner(){
    if(h>=5){
        showEndScreen("You won!");
    }else if(c>=5){
        showEndScreen("You lost");
    }
    
}

function playRound(humanChoice, computerChoice){
    let p= document.createElement("p");
    
    if (humanChoice==computerChoice){
        p.textContent="It's a tie!";
    } else if(humanChoice==0){
        if(computerChoice==1){
            p.textContent="You loose! Paper beats rock :(";
            incrementComputerScore();
        }else if (computerChoice==2){
            p.textContent="You win! Rock beats scissors :)";
            incrementHumanScore();
        }
    } else if(humanChoice==1){
        if(computerChoice==2){
            p.textContent="You loose! Scissors beats paper :(";
            incrementComputerScore();
        }else if (computerChoice==0){
            p.textContent="You win! Paper beats rock :)";
            incrementHumanScore();
        }
    } else if(humanChoice==2){
        if(computerChoice==0){
            p.textContent="You loose! Rock beats scissors :(";
            incrementComputerScore();
        }else if (computerChoice==1){
            p.textContent="You win! Scissors beats paper :)";
            incrementHumanScore();
        }
    }

    results.appendChild(p);
    checkWinner();
}

function updateScoresOnScreen(){
    humanScore.textContent=0;
    computerScore.textContent=0;
}

function restartGame(){
    h=0;
    c=0;
    overlay.style.display="none";
    updateScoresOnScreen();
    results.innerHTML='';
}


let btnR= document.querySelector("#btn-r");
let btnP= document.querySelector("#btn-p");
let btnS= document.querySelector("#btn-s");

let humanScore=document.querySelector("#you-score");
let computerScore=document.querySelector("#computer-score");
let h=0;
let c=0;

let results= document.querySelector("#results");
let overlay=document.querySelector("#overlay");
let modalTitle=document.querySelector("#modal-title");
let btnRestart= document.querySelector("#btn-restart");

btnR.addEventListener("click", () => playRound(0, getComputerChoice()));
btnP.addEventListener("click", () => playRound(1, getComputerChoice()));
btnS.addEventListener("click", () => playRound(2, getComputerChoice()));
btnRestart.addEventListener("click", ()=> restartGame());