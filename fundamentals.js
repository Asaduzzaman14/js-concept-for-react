//  How to declare a variable using let const 

const fatherNmae = "Arnold"
let season = 'rainy'
season = 'winter'


// 6 basic  condation <,> ===, !==, >=
//  multipale condation &&, ||

if (fatherNmae == 'arnold' || season == 'rain') {

} else if (fatherNmae == 'rainy') {

} else {

}

//  array
// index
// length,push
const numbers = [3, 54, 65, 56, 54, 30]

for (let i = 0; i < number.length; i++) {
    const number = numbers[i]
    console.log(number);
}

//5 function
function multply(num1, num2) {
    const result = num1 * num2
    return result
}

const output = multply(10, 22)
// console.log(output);



// 6 object 
// 3 waays to access property by name
const student = {
    name: 'sakib',
    age: 29,
    movies: ['king khan', 'dhakar king']
}

const age = 'age'

console.log(student.name);  // direct property
console.log(student['age']);  // access via property name string
console.log(student[age]);  // access via proprrty name is variable





