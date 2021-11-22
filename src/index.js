const inquirer = require("inquirer");
const {
  starterQuestions,
  typeOfEmployeeQuestion,
  internQuestions,
  engineerQuestions,
  addAnotherEmployeeType,
} = require("./questions");

const addingAnEmployee = async (typeofEmployee) => {
  if (typeofEmployee.employeeType === "intern") {
    const internAnswers = await inquirer.prompt(internQuestions);
    console.log(internAnswers);
  }

  if (typeofEmployee.employeeType === "engineer") {
    const engineerAnswers = await inquirer.prompt(engineerQuestions);
    console.log(engineerAnswers);
  }
};

const init = async () => {
  // starter Questions Team name and manager deatails
  const starterAnswer = await inquirer.prompt(starterQuestions);
  console.log(starterAnswer);

  // question for the type of employee to add to team
  const typeofEmployeeAnswer = await inquirer.prompt(typeOfEmployeeQuestion);
  console.log(typeofEmployeeAnswer);

  // questions depending on the type of employee selected
  addingAnEmployee(typeofEmployeeAnswer);

  // question if user want to add another employee
  const addAnotherAnswer = await inquirer.prompt(addAnotherEmployeeType);
  console.log(addAnotherAnswer);
};

init();
