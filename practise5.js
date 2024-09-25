// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

// Input:

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
const keys = Object.keys(myObject);
for (const key of keys) {
  console.log(key, ":", myObject[key], "|", typeof myObject[key]);
  //   typeof dile type ber hoy
}

// const keys = Object.keys(myObject);

// for (const key of keys) {
//   console.log(key, ":", myObject[key], "|", typeof myObject[key]);
//   //   typeof dile eikhane value ta ki type er oita pawa jay ba bhuja jay
// }
