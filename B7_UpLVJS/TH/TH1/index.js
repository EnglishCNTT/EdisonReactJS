//Part 1: Làm việc với string
console.log("---Part 1---");

let str1 = 'My name is: ';
let name = 'NgocAnh';

let str2 = `${str1} ${name}`;
console.log(str2);

//Part 2: Destructuring objects
console.log("---Part 2---");

let information = { firstName: 'Vu', lastName: 'Ngoc Anh'}

let {firstName, lastName} = information;


console.log(firstName);

console.log(lastName);

//Part 3: Destructuring objects

console.log("---Part 3---");

let [myname] = ['Anh', 'Ngoc'];
console.log(myname);

//Part 4: Object Literal

console.log("---Part 4---");

let firstName4 = 'Anh';

let information4 = {firstName4}

console.log(information4);

//Part 5: Vòng lặp for... of

console.log("---Part 5---");

let str = 'hello';

for(let char of str){
    console.log(char);
}

//Part 6: Spread synctax

console.log("---Part 6---");

let arr1 = [1, 2, 3];

let arr2 = [4, 5, 6]

let arr3 = [...arr1, ...arr2]

console.log(arr3);

//Part 7: Arrow Function

console.log("---Part 7---");

let strHello = 'Hello word';

console.log(str.includes('hello'));

//Part 8: Class

console.log("---Part 8---");

class Car {
    constructor(wheels, doors) {
       this.wheels = wheels;
       this.doors = doors;
    }
    describeMe() {
      console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
    }}
 
 
 const car1 = new Car(4, 2);  
 car1.describeMe(); 

//Part 9: Promise, async và await

console.log("---Part 9---");

function takeLongTimeAsync(){
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000)
    });
}

async function test(){
    const v = await takeLongTimeAsync();
    console.log(v);
}

test();
