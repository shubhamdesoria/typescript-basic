export { }
//First console log.

let message = "Hello Typescript";
console.log(message);

//Variable Declaration.

let x = 10;
const y = 20;

let sum;
const title = 'Typescript Assignment';

// Varibles with types.

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Shubham';

let sentence: string = `My name is ${name}
I am a rokkie in TypeScript`;

console.log(sentence);


let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;


// Array with two types of declaration.

let list1: number[] = [1, 2, 3, 4, 5];
let list2: Array<number> = [1, 2, 3, 4, 5];



// Tuples

let person1: [string, number] = ["Lokesh", 26];

// Enums
enum Color { Red, Green, Blue }
let c: Color;
Color.Red;
console.log(c);
Color.Blue;
console.log(c);

//Any type and Unknown Type
let randomValue: any = 10;
randomValue = true;
randomValue = "Shubham";


let myVariable: any = 10;
console.log(myVariable.name.firstName);
myVariable();
myVariable.toLowerCase();

// Type inference

let a;
a = 10;
a = true;

let b = 10;
// let b = "SD" not possible.

// Varible with multi types.

let multiType: number | boolean | string ;
multiType = 20;
multiType = true;
multiType = "Crownstack";

let anyType: any;
anyType = 20;
anyType = true;



function add(num1: number, num2: number = 10): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}

add(5, 10);
add(5);


// Interfaces

interface Person {
    firstName: string;
    lastName?: string;
}

function fullName(person: Person) {
    console.log(person.firstName + " " + person.lastName);
}

let p = {
    firstName: "Henry",
    lastName: "Cavil"
};
fullName(p);


// Class and Access Modifiers.

class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(" Good morning " + this.employeeName);
    }
}

let emp1 = new Employee("Shubham");
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log("Manager delgating tasks" + this.employeeName);
    }
}

let m1 = new Manager("Henry");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
