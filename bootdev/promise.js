// promises are used to handle async code instead of callbacks
// uses are HTTP requests, fetch function, also I/O

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (getRandomBool())
      resolve("resolved");
    else
      reject("rejected");
  }, 1000);
});

function getRandomBool() {
  return Math.random() < 0.5
}

promise
  .then((message) => {
    console.log(`The promise finally ${message}`);
  })
  .catch((message) => {
    console.log(`The promise finally ${message}`);
  });