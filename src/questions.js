const { verifyResponses } = require("./util");

const starterQuestions = [
  {
    type: "input",
    name: "teamName",
    message: "Whats is your Team/Department name?",
    validate: (input) => {
      return input ? true : "Please Enter Something";
    },
  },
  {
    type: "input",
    name: "name",
    message: "What is your Managers name?",
    // validate: verifyResponses(name),
  },
  {
    type: "input",
    name: "id",
    message: "What is your Managers Employee ID?",
    // validate: verifyResponses(id),
  },
  {
    type: "input",
    name: "email",
    message: "Enter your Managers Email Address",
    validate: (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(email) || "Please Enter A Valid Email Address";
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter your Managers Office Number",
    validate: (officeNumber) => {
      const reg = /^\d+$/;
      return reg.test(officeNumber) || "Please Enter A Valid Number";
    },
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
    // validate: verifyResponses(input),
  },
  {
    type: "input",
    name: "id",
    message: "Enter the Engineers Employee ID",
    // validate: verifyResponses(input),
  },
  {
    type: "input",
    name: "email",
    message: "Enter the Engineers Email Address",
    // validate: verifyEmail(input),
  },
  {
    type: "input",
    name: "github",
    message: "Enter Engineers Github Username",
    // validate: verifyResponses(input),
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the Interns Name",
    // validate: verifyResponses(input),
  },
  {
    type: "input",
    name: "id",
    message: "Enter the Interns Employee ID",
    // validate: verifyResponses(input),
  },
  {
    type: "input",
    name: "email",
    message: "Enter the Interns Email Address",
    // validate: verifyEmail(input),
  },
  {
    type: "input",
    name: "school",
    message: "Enter Intern school name",
    // validate: verifyResponses(input),
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
