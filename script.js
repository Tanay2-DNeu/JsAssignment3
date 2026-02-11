// 1 Filter unique array members using Set.
// let arr= [1,2,4,6,7,"Hello", "Hello", 1, 4]
// let set= new Set(arr);
// console.log(set);





// 2 Filter anagrams using Map.
let str=["leet", "teel", "apple", "heart", "earth"];
let sorted= new Set(str.map(x=> x.split("").sort().join("")));
console.log(sorted);

let anagrams={};
for (const ele of sorted) {
    for (const arrelement of str)
    {
        if(arrelement.split("").sort().join("").valueOf() == ele.valueOf())
        {
            if(!anagrams[ele])
            {
                anagrams[ele]=[];
            }
            anagrams[ele].push(arrelement);
        }
    }
}
console.log(anagrams)


// Write a program to implement inheritance upto 3 classes.The Class must contain private and public variables and static functions.
class Person {
    #ssn;
    name;
    age;

    constructor(name, age, ssn) {
        this.name = name;
        this.age = age;
        this.#ssn = ssn;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

    static species() {
        return "Human Being";
    }

    getSSN() {
        return this.#ssn;
    }
}

class Employee extends Person {
    #salary;
    department;
    constructor(name, age, ssn, department, salary) {
        super(name, age, ssn);
        this.department = department;
        this.#salary = salary;
    }
    getEmployeeInfo() {
        return `${this.getDetails()}, Department: ${this.department}`;
    }
    getSalary() {
        return this.#salary;
    }
    static companyName() {
        return "Tech Solutions Pvt Ltd";
    }
}
class Manager extends Employee {
    #teamSize;

    constructor(name, age, ssn, department, salary, teamSize) {
        super(name, age, ssn, department, salary);
        this.#teamSize = teamSize;
    }
    getManagerInfo() {
        return `${this.getEmployeeInfo()}, Team Size: ${this.#teamSize}`;
    }
    static role() {
        return "Managerial Role";
    }
}
const m1 = new Manager("Tanay", 24, "123-45-6789", "IT", 80000, 10);
console.log(m1.getManagerInfo());
console.log("Department:", m1.department);
console.log(Person.species());
console.log(Employee.companyName());
console.log(Manager.role());




// Write a program to implement a class having static functions
class Sample {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static square(n) {
        return n * n;
    }
}

console.log(Sample.add(5, 10));
console.log(Sample.multiply(4, 3));
console.log(Sample.square(6));




// Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.

import { PI, circleArea, rectangleArea, cylinderArea } from "./area.js";

console.log(circleArea(5));
console.log(rectangleArea(4, 6));
console.log(cylinderArea(3, 7));




// Import a module for filtering unique elements in an array.

import { getUnique } from "./unique.js";
const arr = [1, 2, 3, 2, 4, 1, 5];
console.log(getUnique(arr));


// Write a program to flatten a nested array to single level using arrow functions.
let nestedArray = [[1, 2, 3], [4, 5, 6], [7, [8, 8.5], 9]];
let flattened = [];

const flatArray = (arr, flattened) => {
    arr.forEach(val => {
        if (Array.isArray(val)) {
            flatArray(val, flattened);
        } else {
            flattened.push(val);
        }
    });
};

flatArray(nestedArray, flattened);
console.log(flattened);




