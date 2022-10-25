// Import statements
import {name,age} from './module'


let a=12; // let statements
console.log(a)

const user="Deepak"; // const statements
console.log(user)

//Arrow functions

const greet = () =>{
    console.log("Hello world")
}
greet()

class Dog{
    name="Bruno";
    speak(){
        console.log("Dog says Bow Bow!!")
    }
    greet(name){
        console.log(`Hello ${name}`)
    }
}

let dog=new Dog()
dog.speak()
dog.greet(name)

//Rest Parameters

function fun(...input){
    let sum=0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}

console.log(fun(1,2,3,4,5,6,7,8,9,10))

// Spread Operators

const arr1=[1,2,3]
const arr2=[4,5,6]

const arr=[...arr1,...arr2]
console.log(arr)

// Array Destructuring OR Spread operators

const numbers=[1,2,3,4,5,6,7,8,9,10]

const [one,two,three,...rest]=numbers;

console.log(one)
console.log(rest)

const myVehicle={
    brand:'Ford',
    model:'Mustang',
    color:'red'
}

const updateMyVehicle={
    type:'car',
    year:2021,
    color:'yellow'
}

const myUpdatedVehicle={...myVehicle,...updateMyVehicle}
console.log(myUpdatedVehicle)

// Default value for function parameters

function defaultParam(num="I am Default Parameter"){
    console.log(num)
}

defaultParam()
defaultParam("I am passed Parameter")

// Template Literals
let price=10;
let VAT=0.25;

console.log(`Total: ${(price*(1+VAT).toFixed(2))}`)