const student = {
  name: "shila khan",
  roll: 3354,
  friend: ["jerin", "niyom", "tamim", "konok"],
  school: {
    first: "MMA",
    second: "SAGC",
    third: {
      coaching: "Mirja coaching",
    },
  },
};

// array er value change kora
student.friend[1] = "yeasin";

// const values = Object.values(student);
// console.log(values);

// value change
student.school.third.coaching = "bijoy coaching";
console.log(student.school.third.coaching);

// delete korar niyom
delete student.school.first;
console.log(student);
