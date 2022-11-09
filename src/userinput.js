/*    
import promptSync from 'prompt-sync';
const prompt = promptSync();
 ------import method works with .mjs file
******************************************
 var prompt = require("prompt-sync")();
 ------works with .js file
  */

var prompt = require("prompt-sync")();
let x = prompt("enter the number: ");
if (x > 0) {
  console.log("number is a positive integer");
} else {
  console.log("number is a negitive integer");
}
