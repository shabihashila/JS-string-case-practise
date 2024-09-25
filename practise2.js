// For this object below add a property named passenger capacity with value 5

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
// add a property when alrdy gave a keys and values
// passenger capacity with value 5
car["passenger capacity"] = 5;
console.log(car);
// how to delete .extra things
delete car.make;
console.log(car);
