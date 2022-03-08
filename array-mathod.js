const products = [
    { name: 'laptop', price: '23499', brand: 'lenavo', color: 'silver' },
    { name: 'phone', price: '3000', brand: 'iPhone', color: 'blue' },
    { name: 'watch', price: '3000', brand: 'samsung', color: 'black' },
    { name: 'Camera', price: '6000', brand: 'Canon', color: 'black red' },
    { name: 'mug', price: '900', brand: 'galss', color: 'water' },
]
// console.log(products);
const obj = products.map(product => product.price)
// console.log(obj);

const name = products.map(proName => proName.name)
// console.log(name);

products.forEach(producT => {
    // console.log(producT);

});



// 3 filter 
const cheap = products.filter(product => product.name.includes('p'))
const cheaps = products.filter(product => product.price < 1000)
// console.log(cheap);
// console.log(cheaps);


// 4 find 
const cheafFind = products.find(product => product.name.includes('p'))
console.log(cheafFind);

