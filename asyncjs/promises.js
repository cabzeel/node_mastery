 //method 1...
//  getWeather(weatherReceived);

//  function weatherReceived(data) {
//     let weather = data;
//     console.log(weather)
//  }
// function getWeather(callback) {
//     setTimeout(() => {
//         callback('Sunny')
//     })
// }

//promises
// function getWeather() {
//     return new Promise((resolve, reject) => {
//         resolve('Sunny')
//     })
// }

// const onSuccess = (data) => {
//     console.log(`Success : ${data}`);
// }

// const onError = (error) => {
//     console.log(`Error : ${error}`);
// }

// getWeather().then(onSuccess, onError);

function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('good data')
        }, 100)
    })   
}

function fun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('200')
        }, 100)
    })   
}

function onSuccess(data) {
    console.log(data);
}

function onError(error) {
    console.log(`Error: ${error}`);
}

fun1()
.then(fun2)
.then(onSuccess)

//trying out a promises trick
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
            if(getRandom()) {
            resolve('resolved')
        }
        else {
            reject('Promise: rejected')
        }
    })
})

const getRandom = () => {
    return (Math.random() * 10) > 5;
}

promise
.then((data) =>console.log(data) )
.catch((err) => console.log(err))

//damage example from boot.dev

const message = await applyDamage(25, 500);
console.log(message);


function applyDamage(damage, currentHp) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const newHP = currentHp - damage;

            if(newHP <= 0) {
                reject(`the player suffers ${damage} points of damage and has fallen unconscious`);
            } else {
                resolve(`player suffers ${damage} points of damage and has ${newHP} hit points of health remaining`)
            }
        }, 1000)
    })
}



try {
    printCharacterStats(4);
    printCharacterStats(10);
    printCharacterStats('ten');
} catch (error) {
    console.log(error)
}

function printCharacterStats(level) {
    if(isNaN(level)) throw 'parameter is not a number';

    console.log(`your character is level ${level}`);
}