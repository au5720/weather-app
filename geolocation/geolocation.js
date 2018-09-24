const request = require('request');

  
const G_API=JSON.parse(require('fs').readFileSync('secrets.json','utf8'))['google-maps-api-key'];


var extractAdressDetails = (results) => {
  let lng=results.geometry.location.lng;
  let lat=results.geometry.location.lat;
  let address=results.formatted_address;
  return {
    lat,
    lng,
    address
  };
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
      callback( extractAdressDetails(body.results[0]));
    } else {
      console.log('Address not found');
    }
  });
};

module.exports = {
  getAddress
};
