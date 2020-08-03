const card = document.querySelectorAll('.card');
const cardAll = document.querySelectorAll('.card');
const beginTitle = document.querySelector('.begin-title');
const centerSide = document.querySelector('.center--side');
const statusCard = document.querySelector('.status-card');
const statusTitle = document.querySelector('.status-card h2');
const refreshButton = document.querySelector('.refresh--col > img');

let counter = 0;

let getRandomChoice = () => {
    const comChoose = Math.round(Math.random() * 2);
    const comArray = ['r', 'p', 's'];
    return comArray[comChoose];
}


let checkVersion = (n) => {
    let result = 0;
    if (counter == 1) {
        alert('Please refresh first');
    } else {
        switch (n) {
            case 'first':
                card[0].classList.add('clicked');
                break;
            case 'second':
                card[1].classList.add('clicked');
                break;
            case 'third':
                card[2].classList.add('clicked');
                break;
            default:
                break;
        }
        result = 1;
    }
    return result;
}


card[0].addEventListener('click', () => {
    let status = checkVersion('first');
    if (status) {
        counter = 1;

    }
});
card[1].addEventListener('click', () => {
    let status = checkVersion('second');
    if (status) {
        counter = 1;

    }
});
card[2].addEventListener('click', () => {
    let status = checkVersion('third');
    if (status) {
        counter = 1;

    }
});


let refreshGame = () => {
    counter = 0;
    cardAll.forEach(n => n.classList.remove('clicked'));
}
refreshButton.addEventListener('click', () => {
    refreshGame();
});