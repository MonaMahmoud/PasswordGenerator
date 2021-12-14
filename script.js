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
  //strings containing different password characters used to generate the password
  var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  var specialAlphabet =' !"#$%&,()*+-./:;<=>?@[]_^`{}|~\\\'';
  var numericAlphabet = "0123456789";
  var pass = "";

  //password length entered by user
  var passwordLength;
  //indicates whether password length has met required conditions (a number between 8 and 128)
  var conditions=false;

  do{
    //ask user about password length
    passwordLength = prompt("How many chars in the password? Please enter a number between 8 and 128.");
    //check that user entered a number between the specified range
    if(parseInt(passwordLength)!=NaN && passwordLength>=8 &&passwordLength<=128){
      passwordLength = parseInt(passwordLength);
      //no need to ask user again, break the while loop condition
      conditions=true;
    }
  //wrong type or numberic value not in the specified range, loop until user inputs a number within specified range  
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
  
  //user declined all options, ask to include at least one
  if(!upperCase&&!lowerCase&&!numeric&&!specialChars){
    alert("Can't generate password. Please choose at least one option.");
  }
  //at least one option was chosen, continue to generate password according to user choice
  else{

    //loop generating the password according to length entered by user, loop breaks when length of generated password is the same as length entered by user
    for(i=0;i<passwordLength;){
      //if upper case characters are included add one upper case character and increment password length counter
      if(upperCase){
        pass = pass.concat(upperAlphabet.charAt(Math.floor(Math.random() * upperAlphabet.length)).toString());
        i++;
      }
      //if lower case characters are included and password length is less than user's enterd value add one lower case character and increment password length counter
      if(lowerCase&&i<passwordLength){
        pass = pass.concat(lowerAlphabet.charAt(Math.floor(Math.random() * lowerAlphabet.length)).toString());
        i++;
      }
      //if numeric characters are included and password length is less than user's enterd value add one number and increment password length counter
      if(numeric&&i<passwordLength){
        pass = pass.concat(numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length)).toString());
        i++;
      }
      
      //if special characters are included and password length is less than user's enterd value add one special character and increment password length counter
      if(specialChars&&i<passwordLength){
        pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
        i++;
      }
  
    }

  }
  //return the generated password
  return pass;
}
