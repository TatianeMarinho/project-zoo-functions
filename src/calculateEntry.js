const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const initialValue = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((element) => {
    if (element.age < 18) {
      initialValue.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      initialValue.adult += 1;
    } else {
      initialValue.senior += 1;
    }
  });
  return initialValue;
};

const calculateEntry = (entrants) => {
  if (!entrants || !entrants.length) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const total = (child * data.prices.child) + (adult * data.prices.adult)
  + (senior * data.prices.senior);
  return parseFloat(total.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
