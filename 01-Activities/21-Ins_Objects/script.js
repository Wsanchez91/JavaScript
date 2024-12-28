// Objects are a collection of properties
const planet = {
  // Properties are made up of key-value pairs
  name: 'Earth',
  age: '4.543 billion years',
  moons: 1,
  isPopulated: true,
  population: '7.594 billion',
};

// To access a property's value that is a string, number or boolean, use the object's name and the associated key
// Uses dot notation and logs 'Earth'
console.log(planet.name);
console.log(planet.age);
console.log(planet.ethnicity);
console.log(planet.loser);
console.log(planet.friends);

// Uses bracket notation and logs 'Earth'
console.log(planet['name']);
console.log(planet["age"]);
console.log(planet['name']);
