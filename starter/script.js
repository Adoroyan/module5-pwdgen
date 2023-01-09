// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// Function to get number of characters
// User is asked to provide value until valid value is provided
// Reference: https://www.w3schools.com/js/js_popup.asp
function getNumberOfCharacters (){

  var choice = 8;
  do {
    
    choice = prompt ("How many characters would you like your password to contain? (please provide a number between 10 and 64)","10");
    if(choice > 64)
    {
      alert("Password length must be less than 65.");
    }
    else if (choice < 10)
    {
      alert("Password length must be more than 9.");
    }
  } while ((choice < 10) || (choice > 64))

  return choice;

}


// Function to get types of characters from user until at least one is selected
function getCharacterTypes (){

  var selectedTypes = [];
  var valid = true;
  do {
    if(valid == false){
      alert("Please confirm at least one character type.")
    }
    if(confirm ("Click OK to confirm including lowercase characters.")){
      selectedTypes.push(lowerCasedCharacters);
    }
    if(confirm ("Click OK to confirm including uppercase characters.")){
      selectedTypes.push(upperCasedCharacters);
    }
    if(confirm ("Click OK to confirm including numeric characters.")){
      selectedTypes.push(numericCharacters);
    }
    if(confirm ("Click OK to confirm including special characters.")){
      selectedTypes.push(specialCharacters);
    }
    valid = false;
  } while (selectedTypes.length == 0)

  return selectedTypes;

}

// Function to prompt user for password options
// Reference: https://www.w3schools.com/jsref/jsref_concat_array.asp
function getPasswordOptions() {
  allUsableCharacters=[];
  var totalCharacters = getNumberOfCharacters();
  var selectedCharacterTypes = getCharacterTypes();
  for (var i=0; i<selectedCharacterTypes.length; i++)
  {
      allUsableCharacters = allUsableCharacters.concat(selectedCharacterTypes[i]);
  }
  var choices = {
    totalCharacters: totalCharacters,
    selectedCharacters: allUsableCharacters
  };
  return choices;
  
}


// Function for getting a random element from an array
function getRandom(arr) {
  var min = 0;
  var max = arr.length-1;
  var random =  arr[Math.floor(Math.random() * (max - min +1) + min)];

  return random;
}

// Function to generate password with user input
// Generates a password of the specified length from the provided array of characters
function generatePassword() {
  var userAnswers = getPasswordOptions();
  var password = "";
  do
  {
    password=password+getRandom(userAnswers.selectedCharacters);

  } while (password.length<userAnswers.totalCharacters)
  // console.log(password);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);