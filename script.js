// Assignment code here


/*WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/



// Get references to the #generate element


var generateBtn = document.querySelector("#generate");

var upperChar = "abcdefghijklmnopqrstuvwxyz";
var lowerChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var numsChar = "0123456789";
var passwordLength = "";
var validInput = true;
// by default it is false unless change unless it meets requirements

var lowerCharCheck = false;
var upperCharCheck = false;
var specCharCheck = false;
var numsCharCheck = false;


// logic for length

function determineLength(){
  passwordLength = prompt("Choose a length between 8-128");
  
  if(passwordLength < 8){
    alert("Length has to be between 8-128!");  
    validInput = false;

  } else if (passwordLength > 128){
    alert("Length has to be between 8-128!");  
    validInput = false;

  } else if (isNaN(passwordLength)){
    alert("You have to put a number!");
    validInput = false;

  } else {
    alert("Next choice!");
    validInput = true;
  } 
}

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

function determineCharType(){
  prompt("Input corresponding numbers to include that character type; Lowercase(1), Uppercase(2), Numeric(3), Special(4)")

  if(prompt === 1){}
}









// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
