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