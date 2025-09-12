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
        return 2;
    } else if(humanChoice==0){
        if(computerChoice==1){
            console.log("You loose! Paper beats rock :(");
            return 0;
        }else if (computerChoice==2){
            console.log("You win! Rock beats scissors :)");
            return 1;
        }
    } else if(humanChoice==1){
        if(computerChoice==2){
            console.log("You loose! Scissors beats paper :(");
            return 0;
        }else if (computerChoice==0){
            console.log("You win! Paper beats rock :)");
            return 1;
        }
    } else if(humanChoice==2){
        if(computerChoice==0){
            console.log("You loose! Rock beats scissors :(");
            return 0;
        }else if (computerChoice==1){
            console.log("You win! Scissors beats paper :)");
            return 1;
        }
    }
}

let humanScore=0;
let computerScore=0;

for (let i=0; i<5; i++){
    let human = getHumanChoice();
    let computer= getComputerChoice();
    let round = playRound(human, computer);
    if (round==0){
        computerScore++;
    }else if(round==1){
        humanScore++;
    }
}
if(humanScore<computerScore){
    console.log("You lost, your score is " + humanScore +" and the computer's is "+ computerScore);
}else if(humanScore>computerScore){
    console.log("You won! Your score is " + humanScore +" and the computer's is "+ computerScore);
}else {
    console.log("It's a tie! You both scored "+ humanScore);
}
