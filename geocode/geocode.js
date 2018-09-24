const request = require('request');

  
const G_API=JSON.parse(require('fs').readFileSync('secrets.json','utf8'))['google-maps-api-key'];

var geocodeAddress = (address, callback) => {
  let url=`https://maps.googleapis.com/maps/api/geocode/json?key=${G_API}`;
  let encodedAddress=encodeURIComponent(address);

  requestUrl=`${url}&address=${encodedAddress}`;

  request({
  url: requestUrl,
  json: true
  }, (error, response, body) => {
    callback(error, response);
  });
};

module.exports = {
  geocodeAddress
};
