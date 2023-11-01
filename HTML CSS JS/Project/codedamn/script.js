/*
- note: pass by value / pass by reference
*/
console.log("Hello World!")

/* Variables - differents?
- let: allows you to cahnge the value after initialize it
- const: not allows, it's fixed
*/
// const myFirstVariable = 250
// console.log(myFirstVariable)

// let mySecondVariable = 250
// console.log(mySecondVariable)
// mySecondVariable = 251
// console.log(mySecondVariable)

/* Datatype */
const myAge = 22 // int
const amIAbove18 = true // bool
const myName = "Kien" // string
const friends = [22, true, "Kien"] // object
// const
let someSpecialValue = null // undefined
const bigIntNumber = 1111111111111111111111111111111111n // big intn
console.log(friends[2])
console.log(bigIntNumber)
console.log(someSpecialValue)

/* Typeof */
const typeOfConst = (typeof friends)
console.log(typeOfConst)

/* Operators */
// frist way
console.log("===============")
const my3age = 22
const update3age = my3age + 1
console.log("update my3age = " + update3age)
console.log("update my3age with power pow(int,int(ex = 23^2))[**]= " + update3age ** 2)

const fAge = [20, 21, 22, 23, 14]
const sum = fAge[0] + fAge[1] + fAge[2] + fAge[3] + fAge[4]
console.log("Sum og Friends Age = " + sum)
const totalFriends = 5
console.log("Total of Friends = " + totalFriends)
const avarage = sum / totalFriends
console.log("Avarage Friends Age = " + avarage)
console.log("===============")

// second way 
// let: flexible
console.log("===============")
let my2Age = 21
my2Age++
console.log(my2Age)
console.log("===============")

/* Console log */
console.log("===============")
console.log("Hello World!")
console.log(myAge, 2, 3, "Kien dep trai")
console.log("===============" + '\n' + "new line: 123")

/* Function */
console.log("===============")
let my4age = 20
let sum2 = 200
let totalCount = 5
/*
function makeConsleLog() {
    console.log('want to work with us?')
    console.log(totalCount)
}
makeConsleLog()
*/

/*
function printAllVariable() {
    console.log('my 4 age = ', my4age)
    console.log('sum 2 = ', sum2)
    console.log('total count', totalCount)
}
console.log('print all variable')
printAllVariable() 
*/

/*
// new my4age
console.log('print all variable')
my4age = 30
printAllVariable()
*/

// pass value
/*function addAge() {
    my4age = my4age + 1;
}
addAge(5)
*/

/*
function addAge(incrementBy){
    my4age = my4age + incrementBy
}
// because let is flex so my4age just increase function after function 
addAge(5)
addAge(5)
*/

// incrementBy: tăng với (+)
// multiplyBy: nhân với (*)
function addAge(incrementBy, multiplyBy) {
    my4age = (my4age + incrementBy) * multiplyBy
}

addAge(10, 2)

console.log('my 4 age = ' + my4age)

console.log("===============")

/* return */
console.log("===============")
const my5age = 20
let sum3 = 200
let totalCount1 = 5

function addAge2(incrementBy, multiplyBy) {
    // after return no statement gets executed
    // can return all the type
    return (my5age + incrementBy) * multiplyBy
}

const myNewAge = addAge2(10, 2)
console.log(my5age, myNewAge)

console.log("===============")

/* If Else */
console.log("===============")
const my6age = 20
let sum4 = 200
let totalCount2 = 5

function shouldIGetALicense(age) {
    if (age > 18) {
        console.log('Above 18')
        return true
    }
    console.log('Below 18')
    return false
}

console.log(shouldIGetALicense(20))
console.log(shouldIGetALicense(15))

console.log("===============")

/* Logical Operators */
console.log("===============")
// if else nested 
function shouldIGetALicense2(age, bribe, whitelisted) {
    if (!whitelisted) {
        console.log('whitelisted = ' + whitelisted)
        console.log('you are banned')
        return
    }

    if (age >= 18 && bribe >= 100) {
        console.log('you above 18, you can go.')
        return
    } else if (age < 18) {
        console.log('you below 18, stay.')
        return
    } else if (bribe < 100) {
        console.log('bribe too less, stay.')
        return
    }
}

shouldIGetALicense2(18, 100, true)

console.log("===============")

/* Common Array Operations */
console.log("===============")
let myFriends = ['default-theLF']

function addMyFriends(friend) {
    //myFriends.push(friend)
    myFriends.unshift(friend)
    console.log(myFriends)
}

addMyFriends('Kien')
addMyFriends('dep')
addMyFriends('trai')
console.log('myFriends length = ' + myFriends.length)
//myFriends[3] = undefined
//console.log(myFriends)

/* cau truc du lieu giai thuat + tree 
- push
- pop
*/
/*
myFriends.pop()
myFriends.pop()
console.log(myFriends)
*/

// modify
myFriends[2] = 'anh Kien dep zai'
console.log('The final Array', myFriends)
console.log("===============")

/* Loops */
console.log("===============")
// for 
for (let i = 0; i < 10; i++) {
    myFriends.push(i)
}
console.log(myFriends)
console.log("===============")

/* Continue and Break */
console.log("===============")
let evenNumbers = []
let oddNumbers = []

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i)
    } else {
        oddNumbers.push(i)
    }
}

console.log('even numbers = ', evenNumbers)
console.log('odd numbers = ', oddNumbers)

// skip number 
function skipNumber(number) {
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0 && i !== number) {
            evenNumbers.push(i)
        } else {
            oddNumbers.push(i)
        }
    }
    return evenNumbers
}

console.log('skip number = ', skipNumber(10))

// continue 
function continueNumbers() {
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i)
            continue
        }
    }
}
// break
function breakNumbers(number) {
    for (let i = 0; i < 20; i++) {
        if (i === number) {
            break;
        }
        if (i % 2 === 0) {
            evenNumbers.push(i)
            continue
        }
    }
}
console.log("===============")

/* Equality */
console.log("===============")
// === certain - same type can compare
// == uncertain different type can compare 
const result = 1 === 1
console.log(result)
console.log("===============")
/* Object */
console.log("===============")
const myObject = {
    keyname: {
        'keyname 2.1': 'hello its me'
    },
    keyname2: 'value2'
}
// 1 way to write a keyname
//console.log(myObject['keyname']['keyname 2.1'])
// 2nd to write a keyname
console.log(myObject.keyname["keyname 2.1"])
console.log("===============")

/* Call By Refernce */
console.log("===============")
const myProfile = {
    name: 'Kien',
    age: 20
}

const my2Profile = {
    name: 'anh kien dep zai',
    age: 40
}

//primitive: nguyen thuy
function primitiveMutate(primitive) {
    primitive++
    console.log(primitive)
}

// mutate: dot bien
function mutate(obj) {
    obj.age++
    console.log(obj.age)
}

let a = 100
// copy a to passed to privimite
primitiveMutate(a)
console.log(a)

mutate(my2Profile)
console.log(my2Profile)
console.log("===============")

/* Scope */
console.log("===============")
function inScope() {
    const str1 = 'hello' // inscope
    if (true) {
        //const str1 = 'hello' // in scope
        console.log(str1)
    }
    console.log(str1)
}
inScope()
console.log("===============")

/* Variable Shadowing */
console.log("===============")
const my7age = 20
if (true) {
    const my7age = 25
    function printMyAge() {
        let my7age
        console.log(my7age)
    }
}
printMyAge()
console.log("===============")

/* Document Object Model - DOM */

/* Query Selector */
console.log("===============")
const heading = document.querySelector('h1')
const heading3 = document.querySelector('#hello')
const heading2 = document.querySelector('.hi')

console.log(heading)
console.log(heading2)
console.log(heading3)

heading.innerText = 'Hello Kien'
heading3.innerText = 'hello hello'
heading2.innerText = 'hello hi'
console.log("===============")

/* Query Selector All */
console.log("===============")
const allListItems = document.querySelectorAll('ul li')
console.log(allListItems)

for (let i = 0; i < allListItems.length; i++) {
    const listItems = allListItems[i]
    listItems.innerText = 'ok'
    
}

console.log("===============")

/* More on Traersing */
console.log("===============")
// more performant than queryselector
const para = document.querySelector('#para')
const para2 = document.getElementById('para')

// ul li 
const ul = document.querySelector('ul')
const li = ul.querySelector('li')
console.log(li)
console.log("===============")

/* Evvent listeners */
console.log("===============")
const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')

let counter = 0

function incrementCounter() {
    //console.log('Run')
    const countElement = document.getElementById('counter')
    counter++
    countElement.innerText = counter
}

function decrementCounter() {
    const countElement = document.getElementById('counter')
    counter--
    countElement.innerText = counter
}

incrementBtn.addEventListener('click', incrementCounter)
decrementBtn.addEventListener('click', decrementCounter)

console.log("===============")

/* Create Element */
const incrementUlElementBtn = document.querySelector('#incrementUlElement')
const decrementUlElementBtn = document.querySelector('#decrementUlElement')
console.log("===============")
const ulElement =  document.getElementById('list-items')

function incrementUlElement(){
    // create an element 
    const li = document.createElement('li')
    li.innerHTML = '<b>Sentence</b>' // bold
    //const textNode = document.createTextNode('Sentence')
    //li.appendChild(textNode)

    // append that element
    ulElement.appendChild(li)
}

function decrementUlElement(){
    ulElement.remove(li)
}

incrementUlElementBtn.addEventListener('click', incrementUlElement)
decrementUlElementBtn.addEventListener('click', decrementUlElement)

console.log("===============")

/* Manipulating Attributes */

/* CSS Style Manipulation */
li.setAttribute('class', 'red')
li.style.background = 'red'
li.style.padding = '10px'

/* ES6 destrcuturing */
console.log("===============")
// ES6 / ...
/*
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1, ...arr2]
console.log(arr3)
*/
/*
const arr1 = [{
    name: 'Kien'
}]
const arr2 =[{
    name: 'depzai'
}]
const arr3 = [...arr1, ...arr2]
console.log(arr3)
*/

const KEYNAME = 'cool'

const obj1 = {
    name: 'Kien', 
    KEYNAME, 
    some: 100
}

const obj2 = {
    name: 'depzai', 
    age: 20
}

const obj3 = {
    ...obj1, 
    ...obj2
}

console.log(obj3)

console.log("===============")

/* ES6 Arrow Functions */
console.log("===============")
/*
function likeThis() {
    return 200
}

// aFunctionLikeThis() // cannot
const aFunctionLikeThis = () => {
    return 1
}
aFunctionLikeThis()
*/
/*
const aFunctionLikeThis = () => 200
aFunctionLikeThis()
*/

//const aFunctionLikeThis = ()(no arg) or (arg)(more than 1) or arg(if you have only 1 arg) => arg
const aFunctionLikeThis = (arg) => arg
console.log(aFunctionLikeThis(2002))

const btn = document.getElementById('increment')
/*
btn.addEventListener('click', () => {
    console.log('clicked')
})
*/
console.log("===============")

/* Array Functions */
console.log("===============")
const friendss = [
    {
        name: 'a',
        age: 18
    },
    {
        name: 'b',
        age: 19
    },
    {
        name: 'c',
        age: 20
    }
]
const arr = [1,2,3,4,5,6,7,8,9]

const newMappedArray_forEq = []

for (let i = 0; i < arr.length; i++) {
    const el = arr[i]

    // do anything 
    newMappedArray_forEq.push(el + 5)
    
}

const newMappedArray = arr.map(element => element + 5)

const filterArray = arr.filter(element => element<5)

const filterArray2 = friendss.filter(element => element.age <= 20)

const findX = friendss.find(friend => friend.name == 'a')

arr.forEach(friend => {
    console.log(friend)
})

console.log(findX)

console.log(arr, filterArray, filterArray2)


/*
const newMappedArray = arr.map(function(element) {
    console.log(element)
    return element + 5
})
console.log(arr, newMappedArray)
*/
console.log("===============")

/* Template Literals */
console.log("===============")
const me = {
    name: 'Kien dep trai',
    age: 20
}

const aboutMe = 'My name is '+ me.name +' and i am '+ me.age +' years old.'
const aboutMe2 = `My name is ${me.name} and i am ${me.age} years old.`

console.log(aboutMe)
console.log(aboutMe2)
console.log("===============")

/* Promises and Fetch: nạp - xem của f8 và luyện sẽ hiểu hơn */
console.log("===============")
const promiseObject = fetch('/data.json')
// response: phản hồi
promiseObject.then(response => {
    const promiseObject2 = response.json()
    promiseObject2.then(data => {
        console.log(data)
    })
})
console.log("===============")