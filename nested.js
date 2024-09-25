const college = {
  name: "shila jahan",
  age: 24,
  profession: "developer",
  salary: 25000,
  married: true,
  class: ["11", "12", "54"],
  events: ["science fair", "21 feb", "16 december"],
  speciality: {
    color: "blue",
    dress: {
      female: "skirt",
      male: "shirt",
      "thrid Gender": {
        behave: "good",
      },
    },
  },
};
// chaile ami change o korte pari array events er moddhe any data,array jeheto tay eikhane index use korechi

college.events[1] = "14 february";
console.log(college.events[1]);

// ekhane key and value man ber kora hisab ache
// key er jaygai ami chaile values o use korte pari
// tahole value er variable er man gulo ashbe
// const keys = Object.keys(college);
// console.log(keys);

// example of object  nested
// kono ekta object er bitore aro object,tar bitore aro object ber korte chaile eivabe ber korte pari amra

college.speciality.dress["thrid Gender"].behave = "bad";
// chaile eivabeo change korte pari......bitorer man
console.log(college.speciality.dress["thrid Gender"].behave);

// delete korte caile ami ki korbo?
// vhule gele google k ask krbo,how to delete a property from an object like-
delete college.events;
console.log(college);
