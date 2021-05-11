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

    for (let i=0;i<9;i++){
        gameboard[i].addEventListener('click',() => gameboard[i].innerHTML = 'X')
    }
    return {}
})();

const playerFactory = (name) => {
    return {name}
}
