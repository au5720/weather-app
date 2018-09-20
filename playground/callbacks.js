var G_API=JSON.parse(require('fs').readFileSync('secrets.json','utf8'))['google-maps-api-key'];
var url=`https://maps.googleapis.com/maps/api/geocode/json?key=${G_API}`
console.log(`${url}&address=monksland%20carlingford`);



var getUser = (id, callback) => {
  var user={
    id: id,
    name: 'jen'
  };
  setTimeout( () => {
    callback(user);
  }, 3000);
};

getUser(31, (userObject) => {
  console.log(userObject);
});