// async code is executed after the time it is completed
// eg: setInterval, setTimeout functions
// used for http requests, api calls, etc.

const textioSetupCompleteWait = 400;
const errorHandlingWait = 300;
const messageRoutingWait = 200;
const smsProviderWait = 100;

setTimeout(() => {
  console.log("Textio setup Complete!");
}, textioSetupCompleteWait);

setTimeout(() => {
  console.log("Setting up error handling and retries...!");
}, errorHandlingWait);

setTimeout(() => {
  console.log("Configuring message routing...");
}, messageRoutingWait);

setTimeout(() => {
  console.log("Connecting to SMS providers...");
}, smsProviderWait);

console.log("Starting textio service initialization...");