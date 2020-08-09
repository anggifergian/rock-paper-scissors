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

let computerChoice = () => {
    let computerChoice = getRandomChoice();
    switch (computerChoice) {
        case 'r':
            addClicked(3);
            break;
        case 's':
            addClicked(4);
            break;
        case 'p':
            addClicked(5);
            break;
        default:
            break;
    }
    return computerChoice;
}

let addClicked = (n) => { card[n].classList.add('clicked') }

let showResult = (data) => {
    beginTitle.classList.toggle('hide--status');
    centerSide.classList.toggle('hide--status');
    if (data == 'win') {
        statusTitle.innerHTML = `PLAYER 1 <br> WIN`;
    } else if (data == 'lose') {
        statusTitle.innerHTML = `COM <br> WIN`;
    } else {
        statusCard.classList.add('bg-draw');
        statusTitle.classList.add('pd-10');
        statusTitle.innerHTML = 'DRAW';
    }
}

let resultProcess = (userChoice) => {
    let comChoice = computerChoice();
    switch (userChoice+comChoice) {
        case 'rs':
        case 'sp':
        case 'pr':
            showResult('win');
            break;
        case 'rp':
        case 'sr':
        case 'ps':
            showResult('lose');
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            showResult('draw');
            break;
        default:
            break;
    }
}

let checkVersion = (n) => {
    let result = 0;
    if (counter == 1) {
        alert('Please refresh first');
    } else {
        switch (n) {
            case 'first':
                addClicked(0);
                break;
            case 'second':
                addClicked(1);
                break;
            case 'third':
                addClicked(2);
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
        resultProcess('r');
    }
});
card[1].addEventListener('click', () => {
    let status = checkVersion('second');
    if (status) {
        counter = 1;
        resultProcess('s');
    }
});
card[2].addEventListener('click', () => {
    let status = checkVersion('third');
    if (status) {
        counter = 1;
        resultProcess('p');
    }
});
let refreshGame = () => {
    counter = 0;
    cardAll.forEach(n => n.classList.remove('clicked'));
    beginTitle.classList.toggle('hide--status');
    centerSide.classList.toggle('hide--status');
    statusCard.classList.remove('bg-draw');
    statusTitle.classList.remove('pd-10');
}
refreshButton.addEventListener('click', () => refreshGame());