// Task-4
// Count the number of properties.

// Input:

let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

// find out the length in google searching

const keys = Object.keys(student);
const count = keys.length;
console.log("number of keys :" + count);
