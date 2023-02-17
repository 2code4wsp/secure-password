// Assignment code here
const numericChar = ['0','1','2','3','4','5','6','7','8','9']
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const specialChar = ['!','@','#','$','%','^','&','*','(',')','_','-','=','+','?','/','.','{','}','[',']','<','>']
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let characterNum
let charCodes
//do i need to change const to let because they will be pulled by getRandom? 

  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  charCodes = [];
  characterNum = prompt("How many characters in the password");
  console.log(characterNum)
 
  //alert("Password must be between 8-128 characters in length");
   // }
  let useUpperCase = confirm("do you want to use uppercase characters in your password? Press cancel for no.");
 console.log("use upper case", useUpperCase)
 if (useUpperCase) {
  charCodes = charCodes.concat(upperCase);
  console.log(charCodes)
 }

  let useLowerCase = confirm("do you want to use lowercase characters in your password? Press cancel for no.");
  console.log("use lower case", useLowerCase)
 if (useLowerCase) {
  charCodes = charCodes.concat(lowerCase)
  console.log(charCodes)
 }
 
  let useNumericChar = confirm("Numeric characters?");
  if (useNumericChar) {
    charCodes = charCodes.concat(numericChar)
    console.log(charCodes)
  }

  let useSpecialChar = confirm("Special characters in your password?");
  if (useSpecialChar) {
    charCodes = charCodes.concat(specialChar)
    console.log(charCodes)
  }
return getRandom()
}

function getRandom() {
  let password=""
  for (let i = 0; i < characterNum; i++) {
     let randomchar = charCodes[Math.floor(Math.random() * charCodes.length)]
    password = password.concat(randomchar)
  }
   return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

