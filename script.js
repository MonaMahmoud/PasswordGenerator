// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  //strings containing different password choices
  var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  var specialAlphabet =' !"#$%&,()*+-./:;<=>?@[]_^`{}|~\\\'';
  var numericAlphabet = "0123456789";
  var pass = "";

  //password length entered by user
  var passwordLength;
  //indicates whether password length has met required conditions (number between 8 and 128)
  var conditions=false;

  do{
    //ask user about password length
    passwordLength = prompt("How many chars in the password? Please enter a number between 8 and 128.");
    //check that user entered a number between the specified range
    if(parseInt(passwordLength)!=NaN && passwordLength>=8 &&passwordLength<=128){
      passwordLength = parseInt(passwordLength);
      conditions=true;
    }
  //loop again until user inputs a number within specified range  
  }while(!conditions);

  //ask user for password choices and store them in boolean variables
  var lowerCase = confirm("Include lower case characters?");
  var upperCase = confirm("Include upper case characters?");
  var numeric = confirm("Include numbers?");
  var specialChars = confirm("Include special characters?")
  
  //loop counter
  var i;
  //length of each choice section
  var sectionLength;
  
  

  if(!upperCase&&!lowerCase&&!numeric&&!specialChars){
    alert("Can't generate password. Please choose at least one option.");
  }
  else{

    for(i=0;i<passwordLength;){
      if(upperCase){
        pass = pass.concat(upperAlphabet.charAt(Math.floor(Math.random() * upperAlphabet.length)).toString());
        i++;
      }
      if(lowerCase&&i<passwordLength){
        pass = pass.concat(lowerAlphabet.charAt(Math.floor(Math.random() * lowerAlphabet.length)).toString());
        i++;
      }
  
      if(numeric&&i<passwordLength){
        pass = pass.concat(numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length)).toString());
        i++;
      }
  
      if(specialChars&&i<passwordLength){
        pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
        i++;
      }
  
    }

  }

  return pass;
}
