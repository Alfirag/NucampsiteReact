 //this is me first JavaScript code!
 console.log('Hello world!');

 //initialize a variable - let
 //cannot be a reserved keyword
 //should be meaningful
 //cannot start with a number(1name)
 //cannot contain a space or hyphen(-)
 //case-sensitive

 //primitives/value types
 let name1 = 'Mosh'; // String Literal
 let age1 = 30; // Number literal (don't have floats, everything is number)
 let isApproved = false; // Boolean Literal
 let firstName = undefined;//not common, typeof also undefined
 let lastName = null;// when we want clear a variable
 console.log(name); 
 console.log(lastName); 

 /*JS 8 DATA TYPES: 
 NUMBER
 STRING
 BOOLEAN 
 OBJECT - not primitive data type
 UNDEFINED
 NULL
 SYMBOL
 BIGINT
 */


 //initialize a constant(can't change)
 const interestRate = 0.3;
 console.log(interestRate); 

//reference types:object,array,function
let person1 = {
    name: 'Mosh',
    age: 30
};//Object Literal
console.log(person1);

//Dot Notation
person1.name = 'John';
console.log(person1);
console.log(person1.name);

//Bracket Notataion
person1['name'] = 'Mary';
console.log(person1.name);

let selectedColors = ['red', 'blue'];//Array Literal
console.log(selectedColors);
selectedColors[2] = 1; // can safe a different types
console.log(selectedColors[0]);
console.log(selectedColors.length);//numbers of elements

//Performing a task function
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}//parameter
greet('John', 'Smith');//argument
greet('Mary');

//Calculate a value function
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);
//or
console.log(square(2));

//operators: arithmetic, assignment, comparison, logical,bitwise
let x = 10;
let y = 3;
console.log(x + y);
console.log(x ** y);

//increment(++)
console.log(++x);
console.log(x++);

//decrement
console.log(--x);

x = x + 5;
x += 5;

console.log(x > 5);
console.log(x !== 1);
console.log(x === 1);

// Strict Equality(Type + Value)
console.log(1 === 1);//true
console.log('1' === 1);//false


//Lose Equality(only value, JS convert type to match)
console.log(1 == 1);//true
console.log('1' == 1);//true
console.log(true == 1);//true

//Conditinal operators
//if customer have  more than 100 points - golden, other silver 
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

//logical operators
//AND (&&) returns TRUE if both operants are TRUE
console.log(true && true);

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

//OR (||) returns TRUE if one of the operant is TRUE
//NOT (!)
let applicationRefused = !eligibleForLoan;
console.log(eligibleForLoan);

//Falsy (false); undefined,null,0,false,'',NaN
//Anything that is not Falsy is Truthy
//Short-circuiting: false || 1 || 2  returns 1

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

//birwise operators
// 1 = 00000001
// 2 = 00000010

// 3 = 00000011
console.log(1 | 2)// Bitwise OR
// 0 = 00000000
console.log(1 & 2)// Bitwise AND

//read,write,execute
//00000100 only read
//00000110 read, write
//00000111 read,write,execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes': 'no';
console.log(message);

//swap value
let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);

//if and else if

//switch and case
let role = 'guest';
switch(role){
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
 }

//loops: for, while, do...while, for...in, for...of
//do...while  - code runs at least one time
let i = 0;
do{
    if(1 % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);

// for-in (properties in an object)
const person = {
    name: 'Mosh',
    age: 30
};

for(let key in person)
    console.log(key, person[key]);

//for-of  (in arrays)
const colors = ['red', 'green', 'blue'];
for (let color of colors)
    console.log(color);


let num = max(3, 7);
console.log(num);
function max(a, b) {
    return (a > b) ? a : b; //conditional operator
}


let f = isLandscape(56,87);
console.log(f);
function isLandscape(width, height){
    return (width > height);
}


// Divisible by 3 -- Fizz
// Divisible by 5 -- Buzz
// Divisible by 3 and 5 -- FizzBuzz
// NotDivisible -- input
// not a number -- 'Not a number'

const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';
    
    if (input % 5 === 0)
        return 'Buzz';
    
    return input;
}


//speed limit = 70
//5 -- 1 point
//Math.floor(1.3)
//12 points -- suspended

checkSpeed(130);
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('License suspended');
    else
        console.log('Points', points);
    
}


shownumbers(5);
function shownumbers(limit){
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}


const myArray = [0, null, undefined, '', 2, 3];
console.log(countTruthy(myArray));

function countTruthy(array) {
    let count = 0;
    for(let value of array){
        if (value) // all truthy, don't need to write
            count++;
    }
    return count;
}


const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};
showProperties(movie);

function showProperties(obj){
    for(let key in obj){
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}



//multiple of 3: 3,6,9
//multiple of 5: 5,10
console.log(sum(10));

function sum(limit){
    let sum = 0;
    for(let i = 0; i <= limit; i++)
        if(i % 3 === 0 || i % 5 === 0)
            sum += i;
    return sum;
}



const marks = [80,80,50];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    return 'A';
}
function calculateAverage(array){
    let sum = 0;
    for(let value of array)
        sum += value;
    return sum / array.length;
}



showStars(5);

function showStars(rows) {
    for (let row = 1; row <= rows; row++){
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}



showPrimes(10);

function showPrimes(limit) {
    for(let number = 2; number <= limit; number++)
        if(isPrime(number)) console.log(number);
}

function isPrime(number){
    let isPrime = true;
    for(let factor = 2; factor < number; factor++)
        if(number % factor === 0)
            return false;
    
    return true;
}



//Object-oriented Programming (OOP)

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

delete circle.location;
console.log(circle)
circle.draw(); //method


//Camel Notation: oneTwoThreeFour
//Pascal Notation: OneTwoThreeFour

//Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);



//Constractor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle5 = new Circle(1);

Circle.call({},1);
Circle.apply({},[1, 2, 3]);



// Value Types: Number,String,Boolean,Symbol,undefined,null
// Reference Types: Object, Function, Array

let m = { value: 10 };
let n = m;

m.value = 20;


//clon an object

const another1 = Object.assign({},circle);
console.log(another1);

const another2 = { ...circle };
console.log(another2);


//String primitive
const message3 = 'This is my first message';

//String object
const another3 = new String('hi');


//Object {}

//Template literals
const another7 = 
`Hi John,
How are you?
Regards,
Mosh!`;


const name5 = 'John';
const another = 
`Hi ${name5} ${2 + 3},
Thank you!`


//Date
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);



let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};
function showAddress(address){
    for (let key in address)
        console.log(key, address[key]);
};
showAddress(address);



let address1 = createAddress('d','h','l');
console.log(address1);

//Factory Function
function createAddress(street,city,zipCode) {
    return {
        street,
        city,
        zipCode
    };
}



let address2 = new Address('m','n','p');
console.log(address2);
let address3 = new Address('m','n','p');
console.log(address3);
let address4 = address2;

console.log(areEqual(address2, address3));//true
console.log(areSame(address2, address3));//false
console.log(areSame(address4, address2));//true

//Constractor Function
function Address(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address2, address3){
    return address2.street === address3.street &&
        address2.city === address3.city &&
        address2.zipCode === address3.zipCode;
}

function areSame(address2, address3){
    return address2 === address3;
}



let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comment: [
        { author: 'a', body: 'b'},
        { author: 'c', body: 'd'},
    ],
    isLive: true
};

console.log(post);



let post1 = new Post('a','b','c');
console.log(post1);

function Post (title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.view = 0;
    this.comments = [];
    this.isLive = false;
}


let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
];

let restaurants = [
    { averagePerPerson : 5 }
]


//ARRAYS

//add to array
const numbers = [3,4];
numbers.push(5, 6);//add end
numbers.unshift(1, 2)//add beginning
numbers.splice(2, 0, 'a','b');//add middle
console.log(numbers);

const numbers2 = [1, 2, 3, 1, 4];
console.log(numbers.indexOf('1'));
console.log(numbers.indexOf(1));

console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));


const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const course = courses.find(function(course) {
    return course.name ==='a';
});
console.log(course);
/*can write code more simple here:
const course = courses.find(course => course.name ==='a');
console.log(course);*/

const course1 = courses.findIndex(function(course) {
    return course.name ==='a';
});
console.log(course1);


//remove from array
const v = [1, 2, 3, 4];

const last = v.pop();//remove end
const first = v.shift();//remove beginning
v.splice(2, 1)//remove middle 

console.log(v);


//emptying array
const numb = [1,2,3,4];

//solution1 
//numb = [];

//solution2
// numb.length = 0;

//solution3
//numb.splice(0, numb.length);

//solution4
//while (numb.length > 0)
//    numb.pop();


//combine array
const array1 = [1,2,3];
const array2 = [4,5,6];

const combined = array1.concat(array2);
//const combined = [...array1, ...array2. 'b'];

const slice = combined.slice(2,4);
//const copy = combined.slice();
//const copy = [...combined];

console.log(combined);
console.log(slice);

const array5 = [1,2,3];
for (let number of array5)
    console.log(number);


//for each
array5.forEach(function(number) {
    console.log(number);
});
array5.forEach((number, index) => console.log(index, number));


//join method
const array6 = [1, 2, 3];
const joined = array6.join(',');
console.log(joined);


const message10 = 'My Name is Alfira';
const parts = message10.split(' ');
console.log(parts);

const combined10 = parts.join('-');
console.log(combined10);


//sorting arrays
const array7 = [2,3,1];
console.log(array7.sort());
console.log(array7.reverse());

const courses7 = [
    {id:1, name: 'Node.js'},
    {id:2, name: 'javaScript'},
];
courses7.sort(function(a,b){
// a < b => -1
// a > b => 1
// a === b => 0
const nameA = a.name.toUpperCase();
const nameB = b.name.toUpperCase();

if(nameA < nameB) return -1;
if(nameA > nameB) return 1;
return 0;
});

console.log(courses7);


//every()
const numbers11 = [1, 2, 3, -1];

const allPositive = numbers11.every(function(value){
    return value >= 0;
});
console.log(allPositive);

//some()
const somePositive = numbers11.some(function(value){
    return value >= 0;
});
console.log(somePositive);


//filtering an array
const numbers12 = [1, 2, 3, -1];

const filtered = numbers12.filter(function(value) {
    return value >= 0;
});
//const filtered = numbers12.filter(n => n >= 0);

console.log(filtered); 


//mapping array
const numbers13 = [1, 2, 3];
const items = numbers13.map(n => '<li>' + n + '</li>');
const html = '<ul>' + items.join(' ') + '</ul>';

console.log(html);


const items2 = numbers13.map(n => {
    return { value:n };
});
//const items2 = numbers13.map(n => { value:n });

console.log(items2);


//chaining 
/*
const numbers = [1, -1, 2, 3];
const items = numbers
    .filter(n => n => 0)
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
    
console.log(items)
*/


//reducing an array
const numbers14 = [1, -1, 2, 3];

/*
let sum14 = 0;
for (let n of numbers14)
    sum14 += n;
console.log(sum14);
*/


//a = 0, c = 1 => a = 1
//a = 1, c = -1 => a = 0
//a = 0, c = 2 => a = 2
//a = 2, c = 3 => a = 5
const sum14 = numbers14.reduce((accumulator, currenValue) => {
    return accumulator + currenValue;
}, 0);

//or
//a = 1, c = -1 => a = 0
//a = 0, c = 2 => a = 2
//a = 2, c = 3 => a = 5
/*
const sum14 = numbers14.reduce((accumulator, currenValue) => {
    return accumulator + currenValue;
});

//or
const sum14 = numbers14.reduce(
    (accumulator, currenValue) => accumulator + currenValue
);
*/

console.log(sum14);


//EXERCISE_ARRAY

const numbers17 = arrayFromRange(1, 6);
console.log(numbers17);

function arrayFromRange(min,max) {
    const array = [];
    while (min <= max) {
        array.push(min);
        min++;
    }
    return array;
}



const numbers18 =  [1, 2, 3, 4];
console.log(includes(numbers18, 1));

function includes(array, searchElement) {
    for (let n of array)
        return (n === searchElement);
}



const numbers19 = [1, 2, 3, 4];
const output19 = except(numbers19, [1,2]);
console.log(output19);

function except(array, excluded) {
    const output = [];
    for (let n of array)
        if (!excluded.includes(n))
            output.push(n);
    return output;
}



const numbers20 = [1, 2, 3, 4];
const output20 = move(numbers20, 0, 2);
console.log(output20);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}


 
const numbers21 = [1, 2, 3, 4, 1];
const count = countOccurences(numbers21, 1);
console.log(count);

function countOccurences(array, searchElement) {
    /*
    let count = 0;
    for (let n of array)
        if (n === searchElement)
            count++;
    return count; 
    */  

    return array.reduce((accumulator,current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement)
        return accumulator + occurence;
    }, 0)
}



const numbers22 = [1, 2, 3, 4, 1];
const max22 = getMax(numbers22);
console.log(max22);

function getMax(array) {
    /*
    if (array.length === 0) 
        return undefined;
    let max = array [0];
    for (let i = 1; i < array.length; i++)
        if (array[i] > max) 
            max = array[i];
    return max;
    */

    if (array.length === 0) 
        return undefined;
    return array.reduce((a, b) => (a > b) ? a : b);
}



const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
]
//all the movies  in 2018 with rating > 4
//sort them by their rating
//descending order
//pick their title
const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(titles);
     
    

//FUNCTIONS

walk();// can call before defined function(HOISTING - move function up)
//Function Declaration
function walk() {
    console.log('walk');
}

//Named Function Expression
const run = function run(){
    console.log('run');
};

//Anonymous Function Expression
const run2 = function(){
    console.log('run');
};
run2();//can't call before defined function
const move2 = run;
move2();


function sum20() {
    let total = 0;
    for(let value of arguments)
        total += value;
    return total;
}
console.log(sum20(1, 2, 3, 4, 5));
//or
//rest operator (can't have any parameter after rest operator)
function sum21(...args) {
    return args.reduce((a, b) => a + b);
}
console.log(sum21(1, 2, 3, 4, 5));


function sum22(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sum22(0.1, 20, 30, 1));



function interest(principal, rate, years){
    return principal * rate / 100 * years;
}
console.log(interest(10000, 3.5, 5));

//or
function interest(principal, rate, years){
    rate = rate || 3.5;
    years = years || 5;
    return principal * rate / 100 * years;
}
console.log(interest(10000));

//or
function interest(principal, rate = 3.5, years = 5){
    return principal * rate / 100 * years;
}
console.log(interest(10000));



const person15 = {
    first: 'Alfira',
    last: 'Gutierrez'
};
console.log(`${person15.first} ${person15.last}`);
//console.log(person15.first + ' ' + person15.last);

//or
const person16 = {
    first: 'Alfira',
    last: 'Gutierrez',
    fullName() {
        return `${person16.first} ${person16.last}`
    }
};
console.log(person16.fullName());


//getters => access properties
//setters => change (mutate) them
//try and Catch

const person17 = {
    first: 'Alfira',
    last: 'Gutierrez',
    get fullName() {
        return `${person17.first} ${person17.last}`
    },
    set fullName(value) {
        if (typeof value !== 'string') 
            throw new Error('Value is not a string.');

        const parts = value.split(' ');
        if( parts.length !== 2)
            throw new Error('Enter a first and last name.');

        this.first = parts[0];
        this.last = parts[1];
    }
};
try {
    person17.fullName = 'Daniel Gutierrez';
}
catch (e) {
    alert(e);
}
console.log(person17);



// var => function-scoped  (avoid to use var) 
// let, const => block-scoped

// method -> obj
// function -> global (window, global)


function playVideo(a, b) {
    console.log(this);
}
playVideo.call({name: 'Alfira' }, 1, 2);
playVideo.apply({name: 'Alfira' }, [1, 2]);
playVideo.bind({name: 'Alfira' }) ();


const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this));
    }
};
video.showTags();

//or(better way)
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};
video2.showTags();


//EXERCISE

// sum(1, 2, 3, 4) => 10
console.log(sum(1, 2, 3, 4));
function sum(...items){
    return items.reduce((a, b) => a + b);
}
// sum([1, 2, 3, 4]) => 10
console.log(sum([1, 2, 3, 4]));
function sum(...items){
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a, b) => a + b);
}


// circle.radius = 2;
// console.log(circle.area);

const circle15 = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};
console.log(circle15.area);


try {
    const numbers30 = [1, 2, 3, 4];
    const count = countOccurences(null, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.');

    return array.reduce((accumulator,current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement)
        return accumulator + occurence;
    }, 0);
}




