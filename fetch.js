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


// for of on array like object
//  loop on an object using for in


//  add or remove form an array
const products = [
    { name: 'laptop', price: '23499', brand: 'len', color: 'silver' },
    { name: 'phone', price: '3000', brand: 'HTC', color: 'blue' },
    { name: 'watch', price: '3000', brand: 'samsung', color: 'black' },
    { name: 'Camera', price: '6000', brand: 'Canon', color: 'black red' },
    { name: 'mug', price: '900', brand: 'galss', color: 'water' },
]

const newProduct = { name: 'webcam', price: 7000, brand: 'no brand' }

//  copy products and then add new product

const newProducts = [...products, newProduct]


// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone')


