const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    const animals = {};
    data.species.forEach((specie) => { animals[specie.name] = specie.popularity; });

    return animals;
  }
  return data.species.find((specie) =>
    specie.name === animal.species).residents.reduce((acc, curr) => {
    if (!animal.sex || curr.sex === animal.sex) return acc + 1;

    return acc;
  }, 0);
};
console.log(countAnimals({ species: 'penguins' }));

module.exports = countAnimals;
