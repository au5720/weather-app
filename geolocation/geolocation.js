const request = require('request');
  
const G_API=JSON.parse(require('fs').readFileSync('secrets.json','utf8'))['google-maps-api-key'];

var drawLine= (n) => {
  console.log('-'.repeat(n));
};
var verbose = (obj) => {
  drawLine(100);
  console.log(JSON.stringify(obj, undefined, 2));
  drawLine(100);
};

var getAddress = (address, callback) => {
  let url=`https://maps.googleapis.com/maps/api/geocode/json?key=${G_API}`;
  let encodedAddress=encodeURIComponent(address);

  requestUrl=`${url}&address=${encodedAddress}`;

  request({
  url: requestUrl,
  json: true
  }, (error, response, body) => {
  //body.results[0].geometry.location    
    if(error) {
      console.log('There was an error connecting to the API');
    } else if(body.status === "OK") {
      let lng=body.results[0].geometry.location.lng;
      let lat=body.results[0].geometry.location.lat;
      let address=body.results[0].formatted_address;
      callback({
        lat,
        lng,
        address
      });
    } else {
      console.log('Address not found');
    }
  });
};

module.exports = {
  getAddress
};
