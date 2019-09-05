function playGame(playerInput) {
    clearMessages();
    function getMoveName(argMoveId){
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

    function displayResult(argComputerMove, argPlayerMove){
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if(argPlayerMove == 'nieznany ruch'){
            printMessage('Wpisz liczbę od 1 do 3');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');  
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');  
        } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Tym razem przegrywasz :(');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Tym razem przegrywasz :(');
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Tym razem przegrywasz :(');
        } else {
            printMessage('Remis!');
        } 
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    console.log('Przypisanie wylosowanemu numerowi ruch komputera');

    /*if(randomNumber == 1){
        computerMove = 'kamień';
    } else if(randomNumber == 2){
        computerMove = 'papier';
    } else if(randomNumber == 3){
        computerMove = 'nożyce';
    } */
    printMessage('Mój ruch to: ' + computerMove);

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    //console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    //console.log('Przypisanie wpisanemu numerowi ruch gracza'); 

    /*if(playerInput == 1){
        playerMove = 'kamień';
    } else if(playerInput == 2){
        playerMove = 'papier';
    } else if(playerInput == 3){
        playerMove = 'nożyce';
    } */

    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);

    //console.log('Wywołanie funkcji wyświetlającej wynik');
}

document.getElementById('play-rock').addEventListener('click', playGame(2));

document.getElementById('play-paper').addEventListener('click', playGame(2));

document.getElementById('play-scissors').addEventListener('click', playGame(3));
