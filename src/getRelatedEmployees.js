/* eslint-disable no-undef */
const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((employe) =>
  employe.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const result = [];
  const employees = data.employees.filter((employe) => employe.managers.includes(managerId));
  employees.forEach((employe) => result.push(`${employe.firstName} ${employe.lastName}`));
  return result;
};

module.exports = { isManager, getRelatedEmployees };
