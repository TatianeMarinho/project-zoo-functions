/* eslint-disable no-undef */
const data = require('../data/zoo_data');

const isManager = (id) => data.employees
  .some((employe) => employe.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    data.employees.reduce((acc, curr) =>
      (curr.managers === managerId ? `${curr.firstName} ${curr.lastName}` : acc), []);
  }
};
getRelatedEmployees();

module.exports = { isManager, getRelatedEmployees };
