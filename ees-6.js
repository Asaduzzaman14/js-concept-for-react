
const numbers = [3, 54, 65, 56, 54, 30]

const student = {
    name: 'sakib',
    age: 29,
    movies: ['king khan', 'dhakar king']
}


// 1 tampleat string 
const about = `My name is ${student.name}, age of ${student.age} 
has number ${numbers[2]} also liked movie ${student.movies[1]}`;


//2. arrow function 

const getFeftiFive = () => 55
const isOdd = (num1) => num1 % 2 == 0
const addNumber = (num1, num2) => num1 + num2;
const addThiree = (a1, a2, a3) => a1 + a2 + a3;
const doMath = (x, y) => {
    let res = x + y;
    return res;

}

//  spared operator
let newNumber = [...numbers]


// create a new array form an new array and add an elemetn
let num = [...numbers, 888]

numbers.push(999)
numbers.push(999)
numbers.push(999)

console.log(numbers);
console.log(newNumber);
console.log(num);



