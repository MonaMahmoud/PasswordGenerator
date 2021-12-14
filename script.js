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
  var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  var specialAlphabet =' !"#$%&,()*+-./:;<=>?@[]_^`{}|~\\\'';
  var numericAlphabet = "0123456789";
  var pass = "";

  var passwordLength;
  var conditions=false;

  do{
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
  
  var i;
  var sectionLength;
  
  //1
  //user chose all 4 options
  if(upperCase&&lowerCase&&specialChars&&numeric){
    sectionLength=Math.floor(passwordLength/4);
    for(i=0;i<sectionLength;i++){
      pass = pass.concat(lowerAlphabet.charAt(Math.floor(Math.random() * lowerAlphabet.length)).toString());
      pass = pass.concat(upperAlphabet.charAt(Math.floor(Math.random() * upperAlphabet.length)).toString());
      pass = pass.concat(numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length)).toString());
      pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
    }
    if((passwordLength%4)!=0){
      for(i=0;i<(passwordLength%4);i++){
        pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
    }
    } 
  }
  //2
  //user chose 3 out of 4
  else if(upperCase&&lowerCase&&specialChars&&!numeric){
    sectionLength = Math.floor(passwordLength/3);
    for(i=0;i<sectionLength;i++){
      pass = pass.concat(lowerAlphabet.charAt(Math.floor(Math.random() * lowerAlphabet.length)).toString());
      pass = pass.concat(upperAlphabet.charAt(Math.floor(Math.random() * upperAlphabet.length)).toString());
      pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
    }
    if((passwordLength%3)!=0){
      for(i=0;i<(passwordLength%3);i++){
        pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
    }
    } 
  }
  //3
  //user chose 3 out of 4
  else if(upperCase&&lowerCase&&!specialChars&&numeric){
    sectionLength = Math.floor(passwordLength/3);
    for(i=0;i<sectionLength;i++){
      pass = pass.concat(lowerAlphabet.charAt(Math.floor(Math.random() * lowerAlphabet.length)).toString());
      pass = pass.concat(upperAlphabet.charAt(Math.floor(Math.random() * upperAlphabet.length)).toString());
      pass = pass.concat(numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length)).toString());
    }
    if((passwordLength%3)!=0){
      for(i=0;i<(passwordLength%3);i++){
        pass = pass.concat(numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length)).toString());
    }
    }
  }
  //4
  //user chose 3 out of 4
  else if(upperCase&&!lowerCase&&specialChars&&numeric){
    sectionLength = Math.floor(passwordLength/3);
    for(i=0;i<sectionLength;i++){
      pass = pass.concat(upperAlphabet.charAt(Math.floor(Math.random() * upperAlphabet.length)).toString());
      pass = pass.concat(numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length)).toString());
      pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
    }
    if((passwordLength%3)!=0){
      for(i=0;i<(passwordLength%3);i++){
        pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
    }
    }
  }
  //5
  //user chose 3 out of 4
  else if(!upperCase&&lowerCase&&specialChars&&numeric){
    sectionLength = Math.floor(passwordLength/3);
    for(i=0;i<sectionLength;i++){
      pass = pass.concat(upperAlphabet.charAt(Math.floor(Math.random() * upperAlphabet.length)).toString());
      pass = pass.concat(numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length)).toString());
      pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
    }
    if((passwordLength%3)!=0){
      for(i=0;i<(passwordLength%3);i++){
        pass = pass.concat(numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length)).toString());
    }
    }
  }
  //6
  //user chose 2 out of 4 options
  else if(!upperCase&&!lowerCase&&specialChars&&numeric){
    sectionLength = Math.floor(passwordLength/2);
    for(i=0;i<sectionLength;i++){
      pass = pass.concat(numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length)).toString());
      pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
    }
    if((passwordLength%2)!=0){
        pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
    }
  }
  //7
  //user chose 2 out of 4 options
  else if(upperCase&&lowerCase&&!specialChars&&!numeric){

    sectionLength = Math.floor(passwordLength/2);
    for(i=0;i<sectionLength;i++){
      pass = pass.concat(upperAlphabet.charAt(Math.floor(Math.random() * upperAlphabet.length)).toString());
      pass = pass.concat(lowerAlphabet.charAt(Math.floor(Math.random() * lowerAlphabet.length)).toString());
    }
    if((passwordLength%2)!=0){
        pass = pass.concat(lowerAlphabet.charAt(Math.floor(Math.random() * lowerAlphabet.length)).toString());
    }
  }
  //8
  //user chose 2 out of 4 options
  else if(!upperCase&&lowerCase&&specialChars&&!numeric){

    sectionLength = Math.floor(passwordLength/2);
    for(i=0;i<sectionLength;i++){
      pass = pass.concat(lowerAlphabet.charAt(Math.floor(Math.random() * lowerAlphabet.length)).toString());
      pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
    }
    if((passwordLength%2)!=0){
        pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
    }

  }
  //9
  //user chose 2 out of 4 options
  else if(upperCase&&!lowerCase&&!specialChars&&numeric){

    sectionLength = Math.floor(passwordLength/2);
    for(i=0;i<sectionLength;i++){
      pass = pass.concat(upperAlphabet.charAt(Math.floor(Math.random() * upperAlphabet.length)).toString());
      pass = pass.concat(numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length)).toString());
      
    }
    if((passwordLength%2)!=0){
        pass = pass.concat(numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length)).toString());
    }

  }

  //10
  //user chose 2 out of 4 options
  else if(!upperCase&&lowerCase&&!specialChars&&numeric){

    sectionLength = Math.floor(passwordLength/2);
    for(i=0;i<sectionLength;i++){
      pass = pass.concat(lowerAlphabet.charAt(Math.floor(Math.random() * lowerAlphabet.length)).toString());
      pass = pass.concat(numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length)).toString());
      
    }
    if((passwordLength%2)!=0){
        pass = pass.concat(numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length)).toString());
    }

  }
  //11
  //user chose 2 out of 4 options
  else if(upperCase&&!lowerCase&&specialChars&&!numeric){

    sectionLength = Math.floor(passwordLength/2);
    for(i=0;i<sectionLength;i++){
      pass = pass.concat(upperAlphabet.charAt(Math.floor(Math.random() * upperAlphabet.length)).toString());
      pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
      
    }
    if((passwordLength%2)!=0){
        pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
    }
  }
  //12
  //user chose 1 out of 4 options
  else if(upperCase&&!lowerCase&&!specialChars&&!numeric){
    for(i=0;i<passwordLength;i++){
      pass = pass.concat(upperAlphabet.charAt(Math.floor(Math.random() * upperAlphabet.length)).toString());
    }
  }
  //13
  //user chose 1 out of 4 options
  else if(!upperCase&&lowerCase&&!specialChars&&!numeric){
    for(i=0;i<passwordLength;i++){
      pass = pass.concat(lowerAlphabet.charAt(Math.floor(Math.random() * lowerAlphabet.length)).toString());
    }
  }
  //14
  //user chose 1 out of 4 options
  else if(!upperCase&&!lowerCase&&specialChars&&!numeric){
    for(i=0;i<passwordLength;i++){
      pass = pass.concat(specialAlphabet.charAt(Math.floor(Math.random() * specialAlphabet.length)).toString());
    }
  }
  //15
  //user chose 1 out of 4 options
  else if(!upperCase&&!lowerCase&&!specialChars&&numeric){
    for(i=0;i<passwordLength;i++){
      pass = pass.concat(numericAlphabet.charAt(Math.floor(Math.random() * numericAlphabet.length)).toString());
    }
  }
  //16
  //no choice was selected
  else{
    alert("Couldn't generate password. Please choose at least one option.");
  }
  return pass;
}
