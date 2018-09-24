var yargs = require('yargs');
var geocode = require('./geocode/geocode');

let showAddress = ({lat, lng, address}) => {
  console.log(`Address: ${address}`);
  console.log(`Location: (lat,lng) [${lat},${lng}]`);
};
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

var argv = yargs
  .options({
    a: {
      demand: true,
      describe: 'Get geocode for you the given address',
      alias: 'address'
    }
  })
  .help()
  .alias('h','help')
  .argv;

  if(argv.address) {
  geocode.geocodeAddress(argv.address, (error, response) => {
    var body = response.body;
    if(error) {
      console.log('There was an error connecting to the API');
    } else if(body.status === "OK") {
      showAddress( extractAdressDetails(body.results[0]));
    } else {
      console.log('Address not found');
    }
  });
}

