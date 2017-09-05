const clients = require('./clients.json');
const city = process.argv[2];
let clientsInCity = clients.filter(function (place) {
       return (place.city.toLowerCase() === city.toLowerCase())
});

let searchResults = clientsInCity.map(function (person){
      return { "id": person.id, "rep_name": person.rep_name, "company": person.company, "city": person.city, "state": person.state }
})

console.log (searchResults);
