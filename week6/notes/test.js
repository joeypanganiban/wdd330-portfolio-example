
// Strings
const name = "Joey";
console.log(name.length);
console.log(typeof(name));
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(3));
console.log(name.indexOf('J'));
console.log(name.indexOf('z'));
console.log(name.lastIndexOf('e'));
console.log(name.includes('o'));
console.log(name.includes('u'));
console.log(name.startsWith('J'));
console.log(name.startsWith('j'));
console.log(name.endsWith('Y'));
console.log(name.endsWith('y'));
console.log('JavaScript'.concat('Ninja'));
console.log('Hello'.concat(' ','World','!'));
console.log('Java' + 'Script' + ' ' + 'Ninja');
console.log('    Hello World     '.trim());
console.log('   \t\t  JavaScript Ninja! \r'.trim());
console.log('Hello'.repeat(2));

// Template Literals 
console.log(`Hello!`);
console.log(`She said, "It's Me!"`);
const name1 = `Siri`;
console.log(`Hello ${ name1 }!`);
const age = 39;
console.log(`I will be ${ age + 1 } next year`);
console.log(`This is the start ...
.... and this is the end`);


// Symbols
const uniqueID = Symbol('this is a unique ID');
console.log(typeof(uniqueID));
console.log(String(uniqueID));
const A = Symbol.for('shared symbol');
const B = Symbol.for('shared symbol');  

// Numbers
console.log(typeof 42);
console.log(typeof 3.14159);
console.log(Number.isInteger(42));
console.log(Number.isInteger(3.142));
console.log(new Number(3));

// Octal and Hexadecimal Numbers
console.log(0xAF); // A represents 10, F represents 15
console.log(0o47); // 4 eights and 7 units
console.log(0b1010); // 1 eight, 0 fours, 1 two and 0 units

// Exponential Notation
console.log(1e6); // means 1 multiplied by 10 to the power 6 (a million)
console.log(2E3); // 2 multiplied by 10^3 (two thousand)
console.log(2.5e-3); // means 2.5 multiplied by 10 to the power -3 (0.001)

// Number Methods
console.log(5..toExponential()); //"5e+0"
console.log(5 .toExponential());
console.log(5.0.toExponential());
console.log((5).toExponential());
const PI = 3.1415926;
console.log(PI);
console.log(PI.toFixed(3)); // "3.142" only one dot is needed when using constants or variables
console.log(325678..toPrecision(2)); //"3.3e+5"
console.log(2.459.toPrecision(2)); // "2.5"

// Incrementing Values
let points = 5;
console.log(points++); // 5
console.log(points++); // will return 6, then increase points to  // 6
console.log(++points); // will increase points to 8, then return it // 8
console.log(points--); // returns 8, but has decreased points to 7 // 8
console.log(--points); // decreases points to 6, then returns that value // 6

// Booleans
console.log(Boolean('hello'));
console.log(Boolean(42));
console.log(Boolean(0));

// Logical Operators
console.log(!true); // negating true returns false
console.log(!0); // negating true returns false
console.log(!!'');
console.log(!!"hello");
console.log(!!"false");

// Arrays
const heroes = [];
console.log(heroes[0]);
console.log(heroes[0] = 'Superman');
console.log(heroes[0] = 'Batman');
console.log(heroes[1] = 'Wonder Woman');
console.log(heroes[2] = 'Flash');
console.log(heroes[5] = 'Aquaman');
console.log(heroes);

let avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk'];
const mixedArray = [ null, 1, [], 'two', true ];
console.log(delete avengers[2]);
console.log(avengers);
console.log(avengers[3]);
const [x,y] = [1,2];
console.log(x);
console.log(y);
console.log(avengers.length);
console.log(avengers.length - 1);
console.log(avengers);
console.log(avengers.pop());
console.log(avengers.shift());
console.log(avengers.push('Thor'));
console.log(avengers.unshift('Captain America'));
console.log(avengers.concat(['Hulk','Hawkeye', 'Black Widow']));

console.log(avengers);
console.log(avengers.join(", "));

console.log(avengers.slice(2,4));

avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
console.log(avengers.splice(3, 1, 'Scarlet Witch'));
console.log(avengers.splice(2,1));

avengers = ['Captain America', 'Iron Man', 'Scarlet Witch', 'Quicksilver', 'Hawkeye', 'Black Widow'];
console.log(avengers.reverse());

console.log(avengers.sort());
console.log([5, 9, 10].sort());

console.log(avengers.indexOf('Iron Man'));
console.log(avengers.indexOf('Thor'));

console.log(avengers.includes('Iron Man'));
console.log(avengers.includes('Thor'));
console.log(avengers.includes('Black Widow', 1));

const coordinates = [[1,3],[4,2]];
console.log(coordinates);
console.log(coordinates[0][0]); // The first value of the first array
console.log(coordinates[1][0]); // The first value of the second array
console.log(coordinates[0][1]); // The second value of the first array
console.log(coordinates[1][1]); // The second value of the second array

const summer = ['Jun', 'Jul', 'Aug'];
const winter = ['Dec', 'Jan', 'Feb'];
const nested = [ summer, winter ];
console.log(nested);
const flat = [...summer, ...winter];
console.log(flat);

// Sets
const list = new Set();
console.log(list.add(1));
console.log(list.add(2).add(3).add(4));
const numbers = new Set([1,2,3]);
console.log(numbers);
const moreNumbers = new Set([7,7,7,7,7,8,8,8,9,9]); // If any values are repeated in the array, then they will only appear once in the set
console.log(moreNumbers);
const letters = new Set('hello');
console.log(letters);
const words = new Set().add('the').add('quick').add('brown').add('fox');
console.log(words);
const arrays = new Set().add([1]).add([1]);
console.log(arrays);
const mixedTypes = new Set().add(2).add('2');
console.log(mixedTypes);

const jla = new Set().add('Superman').add('Batman').add('Wonder Woman');
console.log(jla);
console.log(jla.size);

console.log(jla.has('Superman'));
console.log(jla.has('Green Lantern'));

console.log(jla.delete('Superman'));
console.log(jla.delete('Flash'));

console.log(jla.clear());
console.log(jla);
console.log(jla.size);

// converting Set to Array
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
console.log(shoppingSet);
const shoppingArray = [...shoppingSet]; // convert it into array
console.log(shoppingArray);
const shopeeSet = new Set().add('Apples').add('Bananas').add('Beans');
const shopeeArray = Array.from(shoppingSet);
console.log(shopeeArray);
// Weak Sets
let array = [1,2,3];
const strong = new Set().add(array);
array = null;
console.log(strong);
array = [...strong][0];
console.log(array);
const weak = new WeakSet();
console.log(weak.add(array));
console.log(weak.has(array));
console.log(weak.delete(array));
console.log(weak.has(array));

// Maps
const romanNumerals = new Map();
console.log(romanNumerals);
console.log(romanNumerals.set(1,'I'));
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
console.log(romanNumerals);
console.log(romanNumerals.get(4));
console.log(romanNumerals.has(5));
console.log(romanNumerals.has(10));
const heroes2 = new Map([ ['Clark Kent','Superman'], ['Bruce Wayne', 'Batman'] ]);
console.log(heroes2.size);
console.log(heroes2.delete('Clark Kent'));
console.log(heroes2.size);
console.log(heroes2.delete('Clark Kent'));
console.log(heroes2.size);
console.log(heroes2.clear());
console.log(heroes2.size);
// Converting Map to Array
console.log([...romanNumerals]); 
console.log(Array.from(romanNumerals));

// Logic
//if 
const ageA = 23;
if (ageA < 12) {
console.log('Sorry, you are not old enough to play this game');
} 
//else
else {
console.log('good')
}
// if..else
const n = 12;
if (n%2 === 0) {
console.log('n is an even number');
} else {
console.log('n is an odd number');
}
// Ternary Operator
const en = 5;
en%2 === 0 ? console.log('n is an even number') : console.log('n is an odd number');
console.log(`n is a ${(n%2 === 0)? 'even' : 'odd'} number`); // shorter form
// if... else statement
let number = 6;
if (number === 4) {
console.log('You rolled a four');
} else if (number === 5) {
console.log('You rolled a five');
} else if(number === 6){
console.log('You rolled a six');
} else {
console.log('You rolled a number less than four');
}
// switch statement
switch (number) {
    case 4:
    console.log('You rolled a four');
    break;
    case 5:
    console.log('You rolled a five');
    break;
    case 6:
    console.log('You rolled a six');
    break;
    default:
    console.log('You rolled a number less than four');
    break;
}

// Loops
// While Loops
let bottles = 3;
while (bottles > 0){
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
    bottles--;
}
// Infinite Loop
// let n2 = 1;
// while(n>0){
//     console.log('Hello');
//     n2++;
// }

// Do.. While Loops
let bote = 3;
do {
    console.log(`There were ${bote} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bote-1} green bottles hanging on the wall`);
    bote--;
} while (bote > 0);

// For Loop
for (let bottles = 10 ; bottles > 0 ; bottles--) {
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
}
   // - it can be weritten as..
let bottle = 10; // bottles is initialized here instead
for ( ; bottle > 0 ; ) { // empty initialization and increment
    console.log(`There were ${bottle} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottle-1} green bottles hanging on the wall`);
    bottle--; // increment moved into code block
}

// Nested for Loops
let j = 1;
for(let i=1 ; j<=12 ; i++){
for(let i=1 ; j<=12 ; j++){
    console.log(`${j} multiplied by ${i} is ${i*j}`);
    }
}

// Looping over Arrays
for(let i=0, max=avengers.length; i < max; i++){
console.log(avengers[i]);
}
for(const value of avengers){
console.log(value);
}

// Looping OVer Sets
for(const letter of letters) {
    console.log(letter);
}

// Looping Over Maps
const romanNumerals2 = new Map();
romanNumerals2.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');

console.log(romanNumerals2);
// << Map { 1 => 'I', 2 => 'II', 3 => 'III', 4 => 'IV', 5 => 'V' }
for(const key of romanNumerals2.keys()) {
    console.log(key);
}


// Functions
function hello(){
    console.log('Hello World!');
}
const goodbye = function bye(){
    console.log('Goodbye World!');
};
const hi = new Function('console.log("Hi World!");');
console.log(hi());
console.log(hello());
console.log(goodbye());
console.log(goodbye);
seeya = goodbye;
console.log(seeya());
// Return Values
function howdy(){
    return 'Howdy World!';
}
const message = howdy();
console.log(message);
function square(x){
    return x*x;
}
console.log(square(4.5));
function mean(a,b,c){
    return (a+b+c)/3;
}
console.log(mean(1, 3, 6));
console.log(mean(1,2));
console.log(mean(1,2,3,4,5));
// function Arguments
function arguments(){
    return arguments;
}
console.log(arguments('hello', NaN));
console.log(arguments(1,2,3,4,5));
function rest(...args){
    return args;
}
function rest(...args){
    for(arg of args){
        console.log(arg);
    }
}

rest(2,4,6,8);
function mean(...values) {
    let total = 0;
    for(const value of values) {
        total += value;
    }
    return total/values.length;
}
console.log(mean(2,8,13,11,4,2));
function hello(name='World') {
    console.log(`Hello ${name}!`);
}
hello();
hello("Philippines");
function discount(price, amount=10) {
    return price*(100-amount)/100;
}
console.log(discount(20));
console.log(discount(15,20));

function discount(amount=10, price) {
    return price*(100-amount)/100;
}
console.log(discount(20));
console.log(discount(10,20));


// Arrow Functions
const add = (x2,y2) => x2+y2;
console.log(add(1,2));
const hello3 = () => alert('Hello World');
// console.log(hello3());
const tax = (salary) => {
    const taxable = salary - 8000;
    const lowerRate = 0.25 * taxable;
    taxable - 20000;
    const higherRate = 0.4 * taxable;
    return lowerRate + higherRate;
}
console.log(tax(200000));
// function is invoked at the start of the code
        hoist();

// ...
// ... lots more code here
// ...

// function definition is at the end of the code
function hoist(){
    console.log('Hoist Me!');
}
console.log(name); // will return undefined before assignment

// variable is defined here
var name4 = 'Alexa';

console.log(name4); // will return 'Alexa' after assignment

// // the variable helloExpression has a value of undefined, so the function cannot be invoked
// helloExpression(); // throws an error

// // the function declaration can be invoked before it is declared
// helloDeclaration(); // returns 'hello'

// assign function expression to a variable
var helloExpression = function() { 
    console.log('hello') 
}

// declare function declaration
function helloDeclaration() {
    console.log('hello') 
}

// The function expression can only be invoked after assignment
helloExpression(); // returns 'hello'
helloDeclaration();                     

// CallBacks
function sing(song) {
    console.log(`I'm singing along to ${song}`);
}
sing('Let It Go');

// function sing(song,callback) {
//     console.log(`I'm singing along to ${song}.`);
//     callback();
// }
if(typeof(callback) === 'function'){
    callback();
}
function dance() {
    console.log("I'm moving my body to the groove."); //( We’re just logging a simple message to the console in these examples, but these functions could be used to do anything in a practical sense.)
}
sing('Let It Go',dance);
sing('Let It Go',()=>{ console.log("I'm standing on my head.");})
let ves = [1,3,12,5,23,18,7].sort();
console.log(ves);


// Arrow Funtion + Callback 
let ver = [1,3,12,5,23,18,7].sort((a,b) => (a-b));
console.log(ver);
console.log([1,3,12,5,23,18,7].sort((a,b) => (a-b)));


function numerically (a,b) {
    if (a < b) {
        return -1;
    } else if (a> b) {
        return 1;
    } else {
        return 0;
    }
}
console.log(numerically(1,2));

// Array Iterators
const colors = ['Red', 'Green', 'Blue']

for(let i = 0; i < colors.length ; i++ ) {
    console.log(`Color at position ${i} is ${colors[i]}`);
}
colors.forEach( (color,index) =>
console.log(`Color at position ${index}  is ${color}`) );   

console.log([1,2,3].map( square ));
console.log([1,2,3].map( x => 2 * x));
console.log(['red','green','blue'].map( color => `<p> ${color.toUpperCase()}</p>` ));
console.log(['red','green','blue'].map( (color, index, array) => 
    `Element ${index} is ${color}. There are ${array.length} items in total.` ));
console.log([1,2,3,4,5].reduce( (acc,val) => acc + val ));
console.log([1,2,3,4,5].reduce( (acc,val) => acc + val,10));
const sentence = 'The quick brown fox jumped over the lazy dog'
console.log(sentence.split(" "));
const words2 = ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']
const total4 = words2.reduce((acc,word) => 
    acc + word.length,0);
console.log(total4/words2.length); 

// Filter
const numbers2 = [ 2, 7, 6, 5, 11, 23, 12 ].filter(x => x%2 === 0 ); // this returns true if the number is even
console.log(numbers2);
const array2 = [ 0, 1, '0', false, true, 'hello' ].filter(Boolean);
console.log(array2);
console.log(array2.filter(x => !x));
let chain = [1,2,3].map( x => x*x ).reduce((acc,x) => acc + x );
console.log(chain);
const sales = [ 100, 230, 55];
totalAfterTaxSales = sales.map( (amount) => amount * 1.15 ).reduce( (acc,val) => acc + val );
console.log(totalAfterTaxSales);

// Mean
// function mean(array3) {
//     const total = array3.reduce((a, b) => a + b);
//     return total/array3.length;
// }
// function mean(array4,callback) {
//     if (callback) {
//     array4.map( callback );
//     } 
//     const total = array4.reduce((a, b) => a + b);
//     return total/array4.length;
// }
console.log(mean(2,5,7,11,4)); // this should just calculate the mean
console.log(mean(2,5,7,11,4), (x) => (2*x));
console.log(mean(2,5,7,11,4),square); 
