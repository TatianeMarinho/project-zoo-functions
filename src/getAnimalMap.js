const data = require('../data/zoo_data');
/*
const animals = () =>
  ({
    NE: data.species.filter((specie) => specie.location === 'NE').map((specie) => specie.name),
    NW: data.species.filter((specie) => specie.location === 'NW').map((specie) => specie.name),
    SE: data.species.filter((specie) => specie.location === 'SE').map((specie) => specie.name),
    SW: data.species.filter((specie) => specie.location === 'SW').map((specie) => specie.name),
  }); */

/* const animalsNames = () => {
  const animals = animals();
  animals.map((location) => {
    //NE: [ 'lions', 'giraffes' ],
    location.map((specieLocat) => {
    data.species.every((specie) => specie.name === specieLocat)
  })

} */

const getAnimalMap = (options) => {
/*   if (!options || !options.includeNames) {
    return animals();
  } if (options.includeNames === true) {
    return
  } */
};

console.log(getAnimalMap({ sex: 'female', sorted: true }));
module.exports = getAnimalMap;
