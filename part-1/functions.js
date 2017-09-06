// Show A Month

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
let date = new Date(2017, 5, 19) //June

function month (){
  return months[date.getMonth()];
}
console.log(month(date));

// Reverse A Sentence

function reverseSentence(str) {
    return str.split(" ").reverse().join(" ");
}
console.log(reverseSentence("please let me pass this test"));

// Names of Properties

function nameProp(obj){
  let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
  };
  return Object.keys(friend).sort();
}
console.log(nameProp());

// FilterBetween

function filterBetween(array, min, max){
  let filteredAnimals = array.filter(function(animals) {
    return animals >= min && animals <= max
  });
  return filteredAnimals
}
