const data = require('../data/zoo_data');

const newObject = (employee) => {
  const { id, firstName, lastName, responsibleFor } = employee;

  const object = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: [],
    locations: [],
  };
  responsibleFor.forEach((specieId) => {
    const species = data.species.find((specie) => specie.id === specieId);
    object.species.push(species.name);
    object.locations.push(species.location);
  });
  return object;
};

const getEmployeesCoverage = (object) => {
  if (!object) return data.employees.map((employee) => newObject(employee));

  const employees = data.employees.find((employee) =>
    Object.values(employee).includes(Object.values(object)[0]));
  if (!employees) throw new Error('Informações inválidas');
  return newObject(employees);
};

module.exports = getEmployeesCoverage;
