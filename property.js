const person = {
  name: "shila jahan",
  age: 24,
  profession: "developer",
  salary: 25000,
  married: true,
};

person.age = 45;
console.log(person);

person.name = "jerin jahan";
person["age"] = 50;
person["profession"] = "dr";
person["married"] = false;

const surname = "name";
person.name = "huhuhu";
console.log(person);
