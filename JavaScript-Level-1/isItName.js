// Write a function called "isItName" that accepts one argument
// of type String named "name" and returns either "Ola Universe" if the name
// is empty string eg. "" or not provided at all or "Ola <name>"


// *** YOUR CODE HERE *** //

function isItName(name){
  if(!(typeof name === "string") || (name === "")){
    name = "Universe"
  } 
  return `Ola ${name}`
}

module.exports = isItName;
