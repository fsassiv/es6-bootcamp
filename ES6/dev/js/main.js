function moduleName(mdname) {
  console.log(`- Content of the ${mdname} section`);
}

moduleName("Generators");

function* select() {
  yield 'House';
  yield 'Garage';
}

let it = select();

console.log(it.next());
console.log(it.next());
console.log(it.next());

moduleName("Generators");

let obj = {
  [Symbol.iterator]: gen
}

function* gen() {
  yield 1;
  yield 2;
}

for (let element of obj) {
  console.log(element);
}