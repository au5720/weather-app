var url='https://maps.googleapis.com/maps/api/geocode/json?address=monksland%20carlingford';


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