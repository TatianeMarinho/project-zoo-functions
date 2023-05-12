const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName) {
    return data.employees.find((employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName);
  }
  return {};
};

getEmployeeByName();
module.exports = getEmployeeByName;
