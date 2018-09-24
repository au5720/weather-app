var yargs = require('yargs');
var geocode = require('./geolocation/geolocation');

let showAddress = ({lat, lng, address}) => {
  console.log(`Address: ${address}`);
  console.log(`Location: (lat,lng) [${lat},${lng}]`);
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
  .argv;

  if(argv.address) {
  geocode.getAddress(argv.address, showAddress);
}

