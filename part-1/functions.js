// Show A Month

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
let date = new Date(2017, 5, 19) //June

function month (date){
    return months[date.getMonth()];
}

console.log(month(date));

////// Reverse A Sentence /////
let str = "please let me pass this test";

function reverseSentence(str) {
    return str.split(" ").reverse().join(" ");
}
console.log(reverseSentence(str));

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

function filterBetween(arr, min, max) {
  for(var i = 1; i < arr.length; i++){
    if(arr[i] < max){
      max === arr[i];
      return filterBetween
    }else{
      console.error("Enter vaild string");
    }
  }
}

module.exports = {
  month: month,
  reverseSentence: reverseSentence,
  nameProp: nameProp,
  filterBetween: filterBetween
}
