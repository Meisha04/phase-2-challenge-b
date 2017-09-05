const clients = require('./clients.json');
const company = process.argv[2];

const clientsByComp = clients.filter(function(person) {
  return (person.company.toLowerCase().startsWith(company.toLowerCase()))
});

let searchResults = clientsByComp.map(function(result) {
  return {"id": result.id, "company": result.company, "phone": result.phone};
});

console.log(searchResults);
console.log ('Found companies with the letters "' + company + '"...')
