var characters = require('./characters.json').data.results;

//Print out every name to the terminal.
// characters.forEach(function(el) {
//   console.log(el["name"]);
// });

//Get a list of every character and their ID, as an object.
// var list = characters.reduce(function(acc, character) {
//   acc[character.name] = character.id;
//   return acc;
// }, {});
// 
// console.log(list);

// Get a list of every character and their description, as an object. 
// Remove any characters without a description.

// var list = 
// characters.filter(function(el){
//   return el["description"].length > 0;
// })
// .reduce(function(acc, character) {
//   acc[character.name] = character.description;
//   return acc;
// }, {});
// 
// console.log(list);

// Return an array of all the names of the comics "Adam Warlock" has been in.
// var solution = characters.filter(function (char) {
//   return char.name === 'Adam Warlock';
// })[0].comics.items
// .map(function (comic) {
//   return comic.name;
// });
// 
// console.log(solution);