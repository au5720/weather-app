console.log('Starting App');
var globalVar=0;
setTimeout(() => {
  globalVar+=1;
  console.log('inside of callback ', globalVar);
}, 2000);

setTimeout(() => {
  globalVar++;
  console.log('Second Callback ',globalVar);
}, 5000);
console.log('Ending App');