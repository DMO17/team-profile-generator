const { Engineer, Intern } = require("./lib");

const formatEmployeeArray = (employeeDetails) => {
  return employeeDetails.reduce(
    (acc, each) => {
      if (each instanceof Engineer) {
        acc.engineer = [...acc.engineer, each];
      }
      if (each instanceof Intern) {
        acc.intern = [...acc.intern, each];
      }

      return acc;
    },
    { engineer: [], intern: [] }
  );
};

module.exports = { formatEmployeeArray };
