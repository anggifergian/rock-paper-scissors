
// forEach
const myArray = ['JavaScript', 'Python', 'PHP'];
function forEach(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) newArray.push(callback(array[i]));
    return newArray;
}
const lengthArray = forEach(myArray, (item) => item.length);
// console.log(lengthArray);


// Challenge 1
let jadwalPiket = {
    Senin: [],
    Selasa: [],
    Rabu: [],
    Kamis: [],
    Jumat: [],
    Sabtu: []
}
let absensiHarian = {
    tanggal: '29-7-2020',
    hadir: ['Bona', 'Chrestella', 'Anhar', 'Paul', 'Yogi']
}
absensiHarian.hadir.forEach(item => jadwalPiket.Rabu.push(item));
var gantiJadwal = ['Yogi', 'Bona', 'Paul'];
gantiJadwal.forEach(item => {
    jadwalPiket.Rabu.splice(jadwalPiket.Rabu.indexOf(item),1);
    jadwalPiket.Sabtu.push(item);
});
// console.log(jadwalPiket.Sabtu);
// console.log('Hari rabu', jadwalPiket.Rabu);


// Challenge 2
const rateUsdIdrData = {
    '27-7-2020': 15400,
    '28-7-2020': 15477,
    '29-7-2020': 15379,
    '30-7-2020': 15290,
    '31-7-2020': 13333
}
let getMaxDate = (data) => {
    let result = {};
    let maxRate = 0;
    let maxKey = '';
    for (const key in data) {
        if (data[key] > maxRate) {
            maxKey = key;
            maxRate = data[maxKey];
        }
    }
    result[maxKey] = maxRate;
    return result;
}
const maxRate = getMaxDate(rateUsdIdrData);
// console.log(maxRate);


// Challenge 3
function getMaxChange(data) {
    let array = Object.keys(data);
    let result = [];
    let compare = 0;
    let first = '';
    let second = '';
    for (let i = 0; i < array.length - 1; i++) {
        let temp = Math.abs(data[array[i+1]] - data[array[i]]);
        if (temp > compare) {
            compare = temp;
            first = array[i];
            second = array[i+1];
        }
    }
    result.push(first, second);
    return result;
}
let result = getMaxChange(rateUsdIdrData);
// console.log(result);


class User {
    constructor() {
        this.cost;
        this.numberOfScreen;
        this.numberOfPhone;
        this.unlimitedMoview = 1;
        this.watchMobile = 1;
    }
}

class Mobile extends User {
    constructor(cost) {
        super();
    }
}

class Basic extends Mobile {
    constructor() {

    }
}

class Standard extends Basic {
    constructor() {

    }
}

class Premium extends Standard {
    constructor() {

    }
}

const mobile = new Mobile(1);

console.log(mobile);


let defineWinLose = (userChoice) => {
    let computerChoice = getRandomChoice();
    let result = '';
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            result = 'win';
            break;
        case "rp":
        case "sr":
        case "ps":
            result = 'lose';
            break;
        case "rr":
        case "ss":
        case "pp":
            result = 'draw';
            break;
    }
    console.log(`${userChoice} : ${computerChoice} --> PLAYER 1 ${result}`);
    return result;
}