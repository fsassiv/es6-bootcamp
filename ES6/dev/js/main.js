function moduleName(mdName) {
  console.log(`- Content of the ${mdName} section`);
}

moduleName("Basic exports");

// import {
//   keyValue
// } from './modules/external';
// import {
//   test
// } from './modules/external';

import {
  keyValue,
  test
} from './modules/external';

console.log(keyValue);

test();
console.log(keyValue);

// The default keyword suppress the necessity of the {} in the import declaration
// the import name doesnt need to match since it is the default export component
// * as allias, to import everything in the file exports -  return an object

import importedAB from './modules/external';

console.log(importedAB);

moduleName("Classes");

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hello, My name is " + this.name + " and I am " + this.age);
  }
}

// Use the super keyword to invoke the parent class constructor inside de class instance
//Use the super keyword to also get direct access to the parent properties e methods
class Sinner extends Person {
  constructor(age) {
    super("Sinner")
    this.age = age;
  }
}

let sinner = new Sinner(29);

sinner.greet();


//Uset the static keyword to call a method or propertie without direct from the class blueprint, not the it´s instance
class Helper {
  static logTwice(message) {
    console.log(message);
    console.log(message);
  }
}

Helper.logTwice("Logged");