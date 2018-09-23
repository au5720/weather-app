
var getAddress = (address) => {
  let G_API=JSON.parse(require('fs').readFileSync('secrets.json','utf8'))['google-maps-api-key'];
  let url=`https://maps.googleapis.com/maps/api/geocode/json?key=${G_API}`;

  const request = require('request');
  var encodedAddress=encodeURIComponent(address);
  console.log(encodedAddress);

  requestUrl=`${url}&address=${encodedAddress}`;
  request({
  url: requestUrl,
  json: true
  }, (error, response, body) => {
  //body.results[0].geometry.location
  
  var lng=body.results[0].geometry.location.lng;
  var lat=body.results[0].geometry.location.lat;
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Location: (lat,lng) [${lat},${lng}]`);
  });
};

module.exports = {
  getAddress
};
