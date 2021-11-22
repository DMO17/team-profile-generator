const inquirer = require("inquirer");
const {
  starterQuestions,
  typeOfEmployeeQuestion,
  internQuestions,
  engineerQuestions,
} = require("./questions");

const addingAnEmployee = async (typeofEmployee) => {
  if (typeofEmployee.employeeType === "intern") {
    const internAnswers = await inquirer.prompt(internQuestions);
    console.log(internAnswers);
    return internAnswers;
  }

  if (typeofEmployee.employeeType === "engineer") {
    const engineerAnswers = await inquirer.prompt(engineerQuestions);
    console.log(engineerAnswers);
    return engineerAnswers;
  }
};

const init = async () => {
  // const starterAnswer = await inquirer.prompt(starterQuestions);
  // console.log(starterAnswer);

  const typeofEmployeeAnswer = await inquirer.prompt(typeOfEmployeeQuestion);
  console.log(typeofEmployeeAnswer);

  addingAnEmployee(typeofEmployeeAnswer);
};

init();
