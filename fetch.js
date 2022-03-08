// 1 JSON

const student = {
    name: 'sakib',
    age: 29,
    movies: ['king khan', 'dhakar king']
}


const studentJSON = JSON.stringify(student)
// console.log(studentJSON);


const studentOBJ = JSON.parse(studentJSON)
// console.log(studentOBJ);


// 2 fetch


/* fetch('url')
    .then(res => res.JSON)
    .then(data => console.log(data))
 */

//  key,values
const key = Object.keys(student)
// console.log(key);

const value = Object.values(student)
// console.log(value);


// for
