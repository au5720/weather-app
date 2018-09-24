const request = require('request');


const G_API=JSON.parse(require('fs').readFileSync('secrets.json','utf8'))['google-maps-api-key'];
const DS_API=JSON.parse(require('fs').readFileSync('secrets.json','utf8'))['dark-sky-api-key'];

const url=`https://maps.googleapis.co/maps/api/geocode/json?key=${G_API}`;
const DSURL=`https://api.darksky.net/forecast/${DS_API}`;

var requestUrl=`https://api.darksky.net/forecast/${DS_API}/37.0355485,-95.6150322`;

console.log(requestUrl);

request({
  url: requestUrl,
  json: true
  }, (error, response, body) => {
    console.log(body.currently.summary);
  });





// console.log(`${url}&address=monksland%20carlingford`);



// var getUser = (id, callback) => {
//   var user={
//     id: id,
//     name: 'jen'
//   };
//   setTimeout( () => {
//     callback(user);
//   }, 3000);
// };

// getUser(31, (userObject) => {
//   console.log(userObject);
// });