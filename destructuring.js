let number = [23, 55]

const [x, y] = number
// console.log(x, y);


const boxify = (num1, num2) => {
    const res = num1 + num2
    return res

}
const { first, second } = boxify(30, 55)
// console.log(boxify(30, 55));

const student = {
    name: 'asad',
    age: 20,
    favColor: ['balck', 'blue']
}


const [firstC, secondC] = student.favColor
console.log(firstC);


const emlploy = {
    name: 'asad',
    weight: 55,
    age: 20,
    watch: {
        color: 'black',
        barnd: 'mi',
        price: 20050
    }

}
const { brand } = emlploy?.watch

