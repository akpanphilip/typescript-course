// Typescript - superset to Javascript. 

// installation
// npm install typescript 
// npx tsc with-typescript.ts

// basic data types
// 1. primitive - number, string, boolean 
// 2. complex - array, object 
// 3. more complex - function 

// primitive
let age: number = 2;

let fullname: string = "John Doe";

let isHungry: boolean = true;


// complex
let fruits: string [];
fruits = ['apple', 'orange'];

let person : {
    name: string, 
    age: number 
}

person = {
    name: 'John Doe', 
    age: 23
}

// Type inference
// with type inference, typesc can read the type of a value instead of specifying it 
// let name: string = 'Paul'; 
// let name = 'Paul'

// union type
let student: string | number = "John Doe";
student = 20;

// Type Alias
let family : {
    children: number, 
    address: string, 
    hungry: boolean
}

family = {
    children: 20, 
    address : "Abuja", 
    hungry: true
}

// the above using type alias which allows for writting repetitive tpe definition

type Family = {
    children : number, 
    address: string, 
    hungry: boolean
}

let familyOne = family


// functions
function add (a:number, b:number){
    return a + b
}

// Generics
// helps to write functions which are type safe and flexible

function insertAtBegining<T>(array: T[], value: T[]){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

// const updatedArray = insertAtBegining(demoArray, 4);