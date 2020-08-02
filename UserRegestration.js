var firstNamesArray = ["Sudhanshu", "Sud", "sudhanshu", "Su"];
var firstNamePattern = /^[A-Z]{1}[a-z]{2,}/;
validate(firstNamePattern, firstNamesArray);

var lastNamesArray = ["Ghinmine", "Ghi", "ghinmine", "Gh"];
var lastNamePattern = /^[A-Z]{1}[a-z]{2,}/;
validate(lastNamePattern, lastNamesArray);

var emailsArray = ["abc.xyz@bl.co.in"];
var emailPattern = /^[0-9A-Za-z]+(([._+-]*)[0-9A-Za-z]+)*@[0-9A-Za-z]+.[a-z]{2,4}([.][a-z]{2,3})*$/;
validate(emailPattern, emailsArray);

var mobileArray = ["91 8551973494", "8551973494", "91 855197", "918551973494"];
var mobilePattern = /^[1-9]+[0-9]+[\ ]+[1-9]+[0-9]{9}$/;
validate(mobilePattern, mobileArray);

var passwordArray = ["Sudhanshu1", "sudhansh&ua", "Sudh1"];
var passwordPattern = /^((?=.*([A-Z]{1,}).*)(?=.*([0-9]{1,}).*)(?=.*([!@#$%^&*]{1,}).*)[0-9A-Za-z]{8,})$/;
validate(passwordPattern, passwordArray);

function validate(pattern, array) {
  for (var i = 0; i < array.length; i++) {
    if (pattern.test(array[i])) console.log(array[i] + ": Valid");
    else console.log(array[i] + ": Invalid");
  }
  console.log("\n");
}
