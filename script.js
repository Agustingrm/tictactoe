const playerFactory = (name) => {
    return {name}
}

const Gameboard = (() => {

    let one = document.getElementById('one');
    let two = document.getElementById('two');
    let three = document.getElementById('three');
    let four = document.getElementById('four');
    let five = document.getElementById('five');
    let six = document.getElementById('six');
    let seven = document.getElementById('seven');
    let eight = document.getElementById('eight');
    let nine = document.getElementById('nine');

    let gameboard = [one,two,three,four,five,six,seven,eight,nine]
    //R stand for the Result of the game
    let R = [];

    const message = document.getElementById('message')

    const start = document.getElementById('start');

    start.addEventListener('click',() => game())

    const game = function(){

        const displayBoard = document.getElementById('gameboard')

        let player1 = playerFactory(document.getElementById('player1Name').value);
        let player2 = playerFactory(document.getElementById('player2Name').value);

        let turnToPlay = player1.name

        if (document.getElementById('player1Name').value == ''){
            message.style.display = 'block'
            message.innerHTML = 'Please insert your Name'
            message.style.color = 'red'
            return
        }
        else {
            displayBoard.style.display = 'grid'
            start.style.display = 'none'
            restart.style.display = 'inline-block'
            message.style.display = 'none'
            message.style.color = 'black'
            if (player2.name == undefined){
                player2 = playerFactory('computer')
            }
            for (let i=0;i<9;i++){
                gameboard[i].addEventListener('click',() => {
                    if (turnToPlay == player1.name && R[i] == undefined && gameover == false){
                        R[i] = 1;
                        gameboard[i].innerHTML = 'X'
                        turnToPlay = player2.name;
                        evaluateResult();
                    }
                    else if (turnToPlay == player2.name && R[i] == undefined && gameover == false) {
                        R[i] = -1;
                        gameboard[i].innerHTML = 'O'
                        turnToPlay = player1.name;
                        evaluateResult();
                    }
                })
            }

            let gameover = false;

            const evaluateResult = function(){
                for (let i=0;i<9;i++){
                    //In a 3x3 conventional tic tac toe exist 8 posible winning results.These ones are:
                    let winningResults = [(R[0]+R[1]+R[2]),(R[3]+R[4]+R[5]),(R[6]+R[7]+R[8]),(R[0]+R[3]+R[6]),(R[1]+R[4]+R[7]),
                    (R[2]+R[5]+R[8]),(R[0]+R[4]+R[8]),(R[2]+R[4]+R[6])];

                    if (winningResults[i] === 3) {
                        message.style.display = 'block'
                        message.innerHTML = player1.name + ' wins'
                        return gameover = true
                    }
                    else if (winningResults[i] === -3){
                        message.style.display = 'block'
                        if (player1.name == ''){
                            message.innerHTML = 'Player 2 wins!'
                        }
                        message.innerHTML = player2.name + ' wins'
                        return gameover = true
                    }
                }
            }
        }
    }
        
    const restart = document.getElementById('restart')
            restart.addEventListener('click', () => {
                    for (let i=0;i<9;i++){
                        gameboard[i].innerHTML = '';
                    }
                    R = []
                    gameover = false
                    message.innerHTML = '&nbsp'
                    game();
            })        
    return {R}
})();

