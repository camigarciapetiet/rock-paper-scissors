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

function getHumanChoice(){
    let choice= prompt("What's your choice? Rock, paper or scissors?");
    choice.toLowerCase();
    if (choice=="rock"){
        return 0;
    }else if(choice=="paper"){
        return 1;
    }else {
        return 2;
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice==computerChoice){
        console.log("It's a tie!");
    } else if(humanChoice==0){
        if(computerChoice==1){
            console.log("You loose! Paper beats rock :(");
            computerScore++;
        }else if (computerChoice==2){
            console.log("You win! Rock beats scissors :)");
            humanScore++;
        }
    } else if(humanChoice==1){
        if(computerChoice==2){
            console.log("You loose! Scissors beats paper :(");
            computerScore++;
        }else if (computerChoice==0){
            console.log("You win! Paper beats rock :)");
            humanScore++;
        }
    } else if(humanChoice==2){
        if(computerChoice==0){
            console.log("You loose! Rock beats scissors :(");
            computerScore++;
        }else if (computerChoice==1){
            console.log("You win! Scissors beats paper :)");
            humanScore++;
        }
    }
}

let btnR= document.querySelector("#btn-r");
let btnP= document.querySelector("#btn-p");
let btnS= document.querySelector("#btn-s");

let humanScore=0;
let computerScore=0;

btnR.addEventListener("click", () => playRound(0, getComputerChoice()));
btnP.addEventListener("click", () => playRound(1, getComputerChoice()));
btnS.addEventListener("click", () => playRound(2, getComputerChoice()));