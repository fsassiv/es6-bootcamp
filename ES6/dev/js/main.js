function moduleName(mdname) {
  console.log(`- Content of the ${mdname} section`);
}

moduleName("Symbols");

let symbol = Symbol('debug');
let anotherSymbol = Symbol('debug');

console.log(typeof symbol);
console.log(symbol == anotherSymbol);

let obj = {
  name: 'Max',
  [symbol]: 22
}

console.log(obj);

let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');
console.log(symbol1 == symbol2);