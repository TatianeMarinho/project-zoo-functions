/* const data = require('../data/zoo_data');

const animals = (test) => {
  data.species.find((element) => element.name.includes(test));
};

const days = (test) => {
  const lower = test.toLowerCase();
  const day = ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  return day.includes(lower);
}; */

/* const objectDays = (test) => {
  const officeHour = data.hours.

  let object = {
    officeHour: `Open from ${officeHour.open} until ${officeHour.close}`,
    exhibittion: [],
  };

  data.species.forEach((element) => {
    (element.availability === test) ? object.exhibittion += element.name : object;
  })
  return object;
};
console.log(objectDays('sunday')); */

const getSchedule = (scheduleTarget) => {
/*  if (animals(scheduleTarget) !== undefined) {
    return animals(scheduleTarget).availability;
  } else if (days(scheduleTarget) === true) {
    return data.employees.filter((employee) => employee.availability === scheduleTarget).
  } */
};

module.exports = getSchedule;
