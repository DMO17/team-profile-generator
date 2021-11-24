const { Engineer, Intern } = require("./lib");

const fs = require("fs");

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

const verifyResponses = (input) => {
  return input ? true : "Please Enter Something";
};

const verifyEmail = (input) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(input) || "Please Enter A Valid Email Address";
};

const verifyNumber = (input) => {
  const reg = /^\d+$/;
  return reg.test(input) || "Please Enter A Valid Number";
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  formatEmployeeArray,
  verifyResponses,
  verifyEmail,
  verifyNumber,
  writeToFile,
};
