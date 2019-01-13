let keyValue = 1000;

function test() {
  keyValue = 2000;
  console.log('tested!');
}

export {
  keyValue,
  test
};

let ab = "Some text";
// with default keyword
export default ab;