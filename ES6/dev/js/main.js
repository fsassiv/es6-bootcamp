function moduleName(mdName) {
  console.log(`- Content of the ${mdName} section`);
}

moduleName("Promises");

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('Done!');
    reject('Failed!');
  }, 1500);
});

promise.then(function (value) {
  console.log(value);
}, function (error) {
  console.log(error);
});

moduleName("Promises - Built-in methods");

let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('Resolved!');
  }, 1000);
})


let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject('Rejected!');
  }, 2000);
})

// Promise.all([promise1, promise2])
//   .then(function (success) {
//     console.log(success);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


Promise.race([promise1, promise2])
  .then(function (success) {
    console.log(success + ' race method');
  })
  .catch(function (error) {
    console.log(error);
  });