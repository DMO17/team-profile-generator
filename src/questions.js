const { verifyResponses, verifyEmail, verifyNumber } = require("./util");

const starterQuestions = [
  {
    type: "input",
    name: "teamName",
    message: "Whats is your Team/Department name?",
    validate: verifyResponses,
  },
  {
    type: "input",
    name: "name",
    message: "What is your Managers name?",
    validate: verifyResponses,
  },
  {
    type: "input",
    name: "id",
    message: "What is your Managers Employee ID?",
    validate: verifyResponses,
  },
  {
    type: "input",
    name: "email",
    message: "Enter your Managers Email Address",
    validate: verifyEmail,
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter your Managers Office Number",
    validate: verifyNumber,
  },
];

const typeOfEmployeeQuestion = [
  {
    type: "list",
    name: "employeeType",
    message: "Select the type of employee you want to add",
    choices: [
      { name: "Engineer", value: "engineer" },
      { name: "Intern", value: "intern" },
    ],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the Engineers Name",
    validate: verifyResponses,
  },
  {
    type: "input",
    name: "id",
    message: "Enter the Engineers Employee ID",
    validate: verifyResponses,
  },
  {
    type: "input",
    name: "email",
    message: "Enter the Engineers Email Address",
    validate: verifyEmail,
  },
  {
    type: "input",
    name: "github",
    message: "Enter Engineers Github Username",
    validate: verifyResponses,
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the Interns Name",
    validate: verifyResponses,
  },
  {
    type: "input",
    name: "id",
    message: "Enter the Interns Employee ID",
    validate: verifyResponses,
  },
  {
    type: "input",
    name: "email",
    message: "Enter the Interns Email Address",
    validate: verifyEmail,
  },
  {
    type: "input",
    name: "school",
    message: "Enter Intern school name",
    validate: verifyResponses,
  },
];

const addAnotherEmployeeType = [
  {
    type: "confirm",
    name: "addAnother",
    message: "Do you want to add another employee to the team ?",
  },
];

module.exports = {
  starterQuestions,
  typeOfEmployeeQuestion,
  engineerQuestions,
  internQuestions,
  addAnotherEmployeeType,
};
