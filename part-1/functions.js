// Show A Month

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
let date = new Date(2017, 5, 19) //June

function month (date){
    return months[date.getMonth()];
}
// Valid input
console.log(month(date));
// Invaild input - this is invaild because the wrong argument is passed
console.log(month(2017, 5, 19));

////// Reverse A Sentence /////
let str = "please let me pass this test";

function reverseSentence(str) {
    return str.split(" ").reverse().join(" ");
}
// Valid input
console.log(reverseSentence(str));
// Invaild input - this gives an error because it is not a string
console.log(reverseSentence(123));

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
let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow'];

const filterBetween = function(arr, min, max) {
  if(typeof(min) === 'string' && typeof(max) === 'string') {
    return arr.filter(function(word) {
      return word > min && word < max;
    });
  } else {
    return "Invaild input, please enter valid input."
  }
  }
// Valid input
console.log(filterBetween(arr, "cat", "zebra"));
// Invaild input gives an error because there is a number which is not a valid input
console.log(filterBetween(arr, "dog", 3445));

module.exports = {
  month: month,
  reverseSentence: reverseSentence,
  nameProp: nameProp,
  filterBetween: filterBetween
}
