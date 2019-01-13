function moduleName(mdName) {
  console.log(`- Content of ${mdName} section`);
}

// LET AND CONST
moduleName("Let and Const");
let myName = "Flavio";

if (true) {
  let myName = "Sinner";
  console.log(myName);
};

console.log(myName);

const anotherName = "Sinner";
// anotherName = "Sad"; ERROR
console.log(anotherName);

const array1 = [1, 2, 3];
array1.push(4);
console.log(array1);

const Obj1 = {
  age: 29
}

Obj1.age = 30;

console.log(Obj1.age);

//ARROW FUNCTIONS
moduleName("Arrow function");
var fn1 = () => console.log("Hello");

fn1();

var fn2 = () => {
  let a = 2;
  let b = 3;
  return a + b;
};

console.log(fn2());

var fn3 = (a, b) => a + b;

console.log(fn3(3, 8));

//default parameters

function isEqualTo(number, compare = 0) {
  return number == compare;
}

console.log(isEqualTo(0));

moduleName("Object literal");

let name = 'Anna';
let age = 20;

let obj = {
  name: "Max",
  age,
  greet() {
    console.log(this.name + ', ' + this.age);
  }
}

obj.greet();

moduleName("Rest operator");

function sumUp(...toAdd) {
  let result = 0;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}

console.log(sumUp(100, 10, 20));

moduleName("Spread operator");

let num1 = [1, 2, 3, 4, 5];

console.log(Math.max(...num1));

moduleName("For-of loop");

let testResults = [1.12, 1.10, 4.1];

for (let testRestul of testResults) {
  console.log(testRestul);
}

moduleName("Destructuring - arrays");

let numbers = [1, 2, 3];

let [a, b, c, d = "Default"] = numbers;

console.log(c);

moduleName("Destructuring - objects");

let objL = {
  name3: "max",
  age3: 27
}

let {
  name3: nome,
  age3
} = objL;

console.log(nome, age3);