var firstNamesArray = ["Sudhanshu", "Sud", "sudhanshu", "Su"];
var firstNamePattern = /^[A-Z]{1}[a-z]{2,}/;
validate(firstNamePattern, firstNamesArray);

var lastNamesArray = ["Ghinmine", "Ghi", "ghinmine", "Gh"];
var lastNamePattern = /^[A-Z]{1}[a-z]{2,}/;
validate(lastNamePattern, lastNamesArray);

function validate(pattern, array) {
  for (var i = 0; i < array.length; i++) {
    if (pattern.test(array[i])) console.log(array[i] + ": Valid");
    else console.log(array[i] + ": Invalid");
  }
  console.log("\n");
}
