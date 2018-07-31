// BMI Problem

var person1 = {
  name: "Marius",
  gender: "M",
  height: 1.70,
  weight: 65
};

var person2 = {
  name: "Andreea",
  gender: "F",
  height: 1.64,
  weight: 77
};

// List of persons
var persons = [person1, person2];
console.log("Persons", persons);

for (var i = 0; i < persons.length; i++) {
  var person = persons[i];
  var result = "";
  var bmi = person.weight / (person.height * person.height);
  var n = bmi.toFixed(0);
  if (n < 18) {
    result = "underweight";
  } else if (n < 25) {
    result = "normal";
  } else if (n < 30) {
    result = "overweight";
  } else {
    result = "obese";
  }
  console.log(person.name, "|", person.gender, "|", "BMI:", n, "|", result);
}
