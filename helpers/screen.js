var drawLine= (n) => {
  console.log('-'.repeat(n));
};
var verbose = (obj) => {
  drawLine(100);
  console.log(JSON.stringify(obj, undefined, 2));
  drawLine(100);
};

module.exports = {  
  verbose
};
