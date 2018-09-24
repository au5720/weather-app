var yargs = require('yargs');
var geocode = require('./geolocation/geolocation');

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
  console.log(argv);
if(argv.address) {
  geocode.getAddress(argv.address, ({lat, lng, address}) =>{
    console.log(`Address: ${address}`);
    console.log(`Location: (lat,lng) [${lat},${lng}]`);
  });
}