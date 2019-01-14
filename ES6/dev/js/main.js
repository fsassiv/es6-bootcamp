function moduleName(mdname) {
  console.log(`- Content of the ${mdname} section`);
}

moduleName("Iterators");


let array = [1, 2, 3];

let it = array[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// Custom iterator
let person = {
  name: "Max",
  hobbies: ['Sports', 'Cooking'],
  [Symbol.iterator]: function () {
    let i = 0;
    let hobbies = this.hobbies;
    return {
      next: function () {
        let value = hobbies[i];
        i++;
        return {
          done: i > hobbies.length ? true : false,
          value: value
        }
      }
    }
  }
}

for (let hobby of person) {
  console.log(hobby);
}