const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const specie = data.employees.find((person) => person.id === id).responsibleFor[0];

  const animal = data.species.find((species) => species.id === specie);

  const objectAnimal = animal.residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));

  const { name, sex, age } = objectAnimal;

  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;
