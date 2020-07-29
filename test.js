let firstName = 'Adewale';
let secondName = 'Omoyeni';
let states = 'lagos, ogun, oyo, osun'
let age=34;

console.log("My full name is" + " " + firstName + " " + secondName);

console.log(`My firstname is ${firstName}, my surname is ${secondName}, and I am ${age} years old`)

//console.error('This is an Error')

//console.warn('This is a warning')

console.log(`Number of Characters in firstName is ${firstName.length}`)

console.log(firstName.toUpperCase())

console.log(firstName.toLowerCase())

console.log(firstName.substring(1,5).toUpperCase())

//split using nothingt because there is no space between each item
console.log(firstName.split(''))


//Split using comma and space because each item in the list is seperated by a comma followed by a space
console.log(states.split(', '));
upperstates=(states.toUpperCase())
console.log(upperstates.split(', '));


// ARRAY
console.log('ARRAY MANUPULATION')
console.log('==================')
numbers = [3,66,7,2,4,7,8,0]
let mixedItems = [1,3,5, 'dog','goats',88,7]
const fruits= ['mango', 'banana', 'carrot', 'pine-apple']

console.log(numbers)
console.log(fruits)
console.log(mixedItems)

console.log('ADD A FRUIT INTO THE LIST')
console.log('=========================')
fruits[2] = 'lime';
console.log(fruits)

console.log('Add a fruit to the begining and END of the List')
console.log('==================================')
fruits.unshift('pawpaw')
fruits.push("lemon")
console.log(fruits);
console.log(`Number of items in Fruits is ${fruits.length}`)

//DELETE ITEM LAST ITEM
fruits.pop();

//GET INDEX OF ITEM
console.log(fruits)
console.log(fruits.indexOf('lemon'))
console.log(fruits.indexOf('pawpaw'))

//LOOP
let mult = 4;
for (let i = 1; i <= 10; i++){
    ans = mult * i;
    console.log (`${mult} * ${i} = ${ans}`);

}

