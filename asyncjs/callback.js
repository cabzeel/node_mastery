// //explaining synchronous and assynchronous code
let pizza;
// const orderPizza = () => {
//   console.log('order the pizza');
//   pizza = '🍕';
  
// }
// orderPizza();
// console.log('call Sammy');
// console.log('pizza delivered');
// console.log(`eat the ${pizza}`)

//async...since calling Sammy is independent of the pizza process, we can chain the related processes

const orderPizza = (callback) => {
    console.log('order the pizza');
    setTimeout(() => {

        pizza = '🍕';
        console.log(`${pizza} is ready`);
        callback();
        console.log()
    }, 2000)
} 

const eatPizza = () => {
    console.log(`eat the ${pizza}`);
} 

orderPizza(eatPizza);
console.log('call Sammy');

//simulate callback hell
const thingOne = (callback) => {
    callback();
}

const thingTwo = (callback) => {
    callback();
}

const thingThree = () => {
    console.log('hello world')
}

thingOne(() => {
    thingTwo(() => {
        thingThree()
    })
})

//test event loop and callstack...
const greeting1 = () => {
    setTimeout(() => {
        console.log('hi')
    }, 2000)
}

const greeting2 = () => {
    setTimeout(() => {
        console.log('hello')
    }, 1000)
}

const greeting3 = () => {
    setTimeout(() => {
        console.log('bye bye')
    }, 1000)
}

greeting1();
greeting2();
greeting3();

//syncronous and asyncronous callbacks..
//sync

const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => {
//     console.log(number)
// })

//none blocking - asynchrononus

numbers.forEach(number => {
    setTimeout(() =>{
        console.log(number)
    }, 1000)
})
console.log("hello zilo")