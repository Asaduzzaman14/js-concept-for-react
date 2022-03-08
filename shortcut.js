//  truthe
//  "some",5,true, {},[]


// false
//  '', 0.false,null,undefind



//  check truthy
let x = 4;
//  check any trutheys
if (x) {
    x += 100
} else {
    x = 0
}

let myMoney = 59;
//  youn check begative or false anything
if (!myMoney) {

}

const money = 80;
let food;
if (money > 100) {
    food = 'fast food'
} else {
    food = 'cheap food'

}

//  ternery

let food1 = money > 100 ? 'fast food' : 'cheap food'

console.log(food1);

let drink = (money > 100 && myMoney > 100) ? 'coke' : 'filter water'

// console.log(drink);


//  convart number to string
const num1 = 44;

const numStr = num1 + ''
// console.log(numStr);



//  convart string to number
let strNum = '4445'
let num = + strNum



// 
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

isActive ? showUser() : hideUser()


// use && if the left side is true then right side will be executed
isActive && showUser()


// use || if the left side is false then right side will be executed
isActive || hideUserUser()


//  toggae boolean
isActive = !isActive