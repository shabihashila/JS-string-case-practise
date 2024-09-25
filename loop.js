// const mobile = {
//   brand: "iphn",
//   price: 34345,
//   color: "black",
//   camera: "12mp",
// };

// for of and for in hoy,,object er moddhe alws for in hoy,

// eta for in
// for (const prop in mobile) {
//   console.log(prop);
//   console.log(mobile.prop);
// }

// const keys = Object.keys(mobile);
// // console.log(keys);
// // keys hcce array.er modhe [for of] marbo
// for (const key of keys) {
//   console.log(key, ":", mobile[key]);
// }

// eta arekta example

const visa = {
  countrySelect: "USA",
  cost: 1000000,
  duration: "3 days 4 nights",
  carryBag: "10kg",
};
const keys = Object.keys(visa);
console.log(keys);
// for of rules
for (const key of keys) {
  console.log(key, ":", visa[key]);
}
