const starterQuestions = [
  {
    type: "input",
    name: "teamName",
    message: "Whats is your Team/Department name?",
  },
  {
    type: "input",
    name: "name",
    message: "What is your Managers name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your Managers Employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your Managers Email Address",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter your Managers Office Number",
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
  },
  {
    type: "input",
    name: "id",
    message: "Enter the Engineers Employee ID",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the Engineers Email Address",
  },
  {
    type: "input",
    name: "github",
    message: "Enter Engineers Github Username",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the Interns Name",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the Interns Employee ID",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the Interns Email Address",
  },
  {
    type: "input",
    name: "school",
    message: "Enter Intern school name",
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
