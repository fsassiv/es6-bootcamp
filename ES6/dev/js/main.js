function moduleName(mdName) {
  console.log(`- Content of the ${mdName} section`);
}

moduleName("Object Extensions - Objects");

var obj1 = {
  a: 1
}

var obj2 = {
  b: 2
}

var obj = Object.assign(obj1, obj2);

console.log(obj);