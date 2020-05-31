{
let playerScore = 0;
let computerScore = 0;
const play = function(playerInput) {
    clearMessages();
    const move = function(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        } else if(argMoveId == 2){
            return  'papier';
        } else if(argMoveId == 3){
            return 'nożyce';
        } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
        }
    }

       const result = function(argComputerMove, argPlayerMove){
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            playerScore++;
            printMessage('Ty wygrywasz!');
        } else if(argPlayerMove == 'nieznany ruch'){
            printMessage('Wpisz liczbę od 1 do 3');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            playerScore++;
            printMessage('Ty wygrywasz!');  
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            playerScore++;
            printMessage('Ty wygrywasz!');  
        } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            computerScore++;
            printMessage('Tym razem przegrywasz :(');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            computerScore++;
            printMessage('Tym razem przegrywasz :(');
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            computerScore++;
            printMessage('Tym razem przegrywasz :(');
        } else {
            printMessage('Remis!');
        } 
        console.log('player:' + playerScore + 'compputer:' + computerScore);
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    // console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = move(randomNumber);

    // console.log('Przypisanie wylosowanemu numerowi ruch komputera ' + computerMove);


    printMessage('Mój ruch to: ' + computerMove);


    const playerMove = move(playerInput);


    printMessage('Twój ruch to: ' + playerMove);

    result(computerMove, playerMove);

    printMessage('<span class="playerScore">' + playerScore + '</span>' + ' / ' + '<span class="computerScore">' + computerScore + '</span>');

    if (playerScore == 10) {
        printMessage('<span class="win">Wygrałeś!!!</span>');
        computerScore = 0;
        playerScore = 0;
    } else if (computerScore == 10) {
        printMessage('<span class="loose">Niestety przegrałeś!!!</span>');
        computerScore = 0;
        playerScore = 0;
    }
    
}

document.getElementById('play-rock').addEventListener('click', function(){
    play(1);
  });

document.getElementById('play-paper').addEventListener('click', function(){
    play(2);
  });

document.getElementById('play-scissors').addEventListener('click', function(){
    play(3);
  });
}