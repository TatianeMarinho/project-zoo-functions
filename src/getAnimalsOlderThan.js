const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animals = data.species.find((specie) => animal.toLowerCase().includes(specie.name)).residents;

  return animals.every((species) => species.age >= age);
};

getAnimalsOlderThan('tigers', 4);

module.exports = getAnimalsOlderThan;
