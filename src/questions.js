const starterQuestions = [
  {
    type: "input",
    name: "teamName",
    message: "Whats is your Team/Department name?",
  },
  {
    type: "input",
    name: "managerName",
    message: "What is your Managers name?",
  },
  {
    type: "input",
    name: "managerEmployeeID",
    message: "What is your Managers Employee ID?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter your Managers Email Address",
  },
  {
    type: "input",
    name: "managerOfficeNum",
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
    name: "engineerName",
    message: "Enter the Engineers Name",
  },
  {
    type: "input",
    name: "engineerEmployeeID",
    message: "Enter the Engineers Employee ID",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Enter the Engineers Email Address",
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "Enter Engineers Github Username",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "Enter the Interns Name",
  },
  {
    type: "input",
    name: "internsEmployeeID",
    message: "Enter the Interns Employee ID",
  },
  {
    type: "input",
    name: "internEmail",
    message: "Enter the Interns Email Address",
  },
  {
    type: "input",
    name: "internSchool",
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
