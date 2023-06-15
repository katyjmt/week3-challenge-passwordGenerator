// Assignment code here
  
// Set global variables for password character input types .
const lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(lowerCaseAlphabet);
console.log(`There should be 26 characters in the lower case alphabet. Your array contains ${lowerCaseAlphabet.length}`);

const upperCaseAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
console.log(upperCaseAlphabet);
console.log(`There should be 26 characters in the upper case alphabet. Your array contains ${upperCaseAlphabet.length}`);

const numbersAlphabet = [1,2,3,4,5,6,7,8,9,0];
console.log(numbersAlphabet);
console.log(`There should be 10 numbers available. Your array contains ${numbersAlphabet.length}`);

const specialCharactersAlphabet = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[",'\\',"]","^","_","`","{","|","}","~"];
console.log(specialCharactersAlphabet);
console.log(`There should be 32 characters in the special character alphabet. Your array contains ${specialCharactersAlphabet.length}`);



// Create a generatePassword function to create a password based on user responses. This will be called when the user clicks the Generate Password button
const generatePassword = () => {
  // When the user clicks the button, they receive a series of questions:
  console.log('User has clicked the Generate Password button.')

  // Question 1. How many characters should your password have? (8-128 characters)

  let passwordCharacters;

  // Prompt the user for their input, but only let them proceed to the next question if they choose a number that is between 8-128 characters.
  while (true) {
    passwordCharacters = window.prompt("How many characters should your password have? (must be 8-128 characters)");

    if (passwordCharacters === null) {
      alert("Please enter a number between 8-128 characters.");
      console.log('User didn\'t enter a value');
      break; // Exit the loop
    };

    if (!isNaN(passwordCharacters) && passwordCharacters >= 8 && passwordCharacters <= 128) {
      // Valid input
      console.log(`User entered ${passwordCharacters}`);
      break; // Exit the loop
    };

    // Invalid input, continue the loop
    console.log('User entered an invalid input');
    alert("Invalid input. Please choose a number between 8-128 characters.");
  };


  // Create variable with available characters for password
  let availableCharacters = [];

  // Question 2. Should your password include lowercase letters?
  let includeLowercaseLetters = window.confirm('Should your password include lowercase letters?');
  console.log(includeLowercaseLetters);

  // If the user does want to include lower case characters, add them to the available characters array
  if (includeLowercaseLetters === true) {
    availableCharacters = availableCharacters.concat(lowerCaseAlphabet);
  };

  console.log(`Characters currently available for password = ${availableCharacters}`);

  // Question 3. Should your password include uppercase letters?
  let includeUppercaseLetters = window.confirm('Should your password include uppercase letters?');
  console.log(includeUppercaseLetters);

  // If the user does want to include upper case characters, add them to the available characters array
  if (includeUppercaseLetters === true) {
    availableCharacters = availableCharacters.concat(upperCaseAlphabet);
  };

  console.log(`Characters currently available for password = ${availableCharacters}`);


  // Question 4. Should your password include numbers?
  let includeNumbers = window.confirm('Should your password include numbers?');
  console.log(includeNumbers);

  // If the user does want to include numbers, add them to the available characters array
  if (includeNumbers === true) {
    availableCharacters = availableCharacters.concat(numbersAlphabet);
  }

  console.log(`Characters currently available for password = ${availableCharacters}`);


  // Question 5. Should your password include special characters?
  let includeSpecialCharacters = window.confirm('Should your password include special characters?');
  console.log(includeSpecialCharacters);

  // If the user does want to include special characters, add them to the available characters array
  if (includeSpecialCharacters === true) {
    availableCharacters = availableCharacters.concat(specialCharactersAlphabet);
  }

  console.log(`Characters currently available for password = ${availableCharacters}`);
  console.log(`Number of characters available for password = ${availableCharacters.length}. Length of password to draw these for: ${passwordCharacters}`);


  // Create variable to store the password
  let password = [];

  // Check that user has selected at least one character type to create their password. If they haven't show an error message in the password generator box.
  if (availableCharacters.length == 0) {
    password.toString();
    password = 'Please try again and select at least one character type for your password to be generated';
    return password;
  } else {
    // Loop through the number of characters the user has specified
  for (let i = 0; i < passwordCharacters; i++) {
    // For each index, generate a random number between 1 and the number of available characters, based on the user's responses to earlier questions
    let generateRandomNumber = Math.floor((Math.random() * availableCharacters.length) + 1);
    console.log(`${i+1}: The random number generated is ${generateRandomNumber}, which is associated with ${availableCharacters[generateRandomNumber]}`);
    // Select character for that index of the password, based on the random number generated
    password.push(availableCharacters[generateRandomNumber]);
    console.log(`The password container is currently ${password}`);
    };

    // Convert password array into a string without commas
    password = password.join("");

    return password;
  };
  
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button - when the element with a #generate id is clicked, then run writePassword function
generateBtn.addEventListener("click", writePassword);
