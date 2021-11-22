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

  // Loop through these set of question to keep adding other employee details

  let inProgress = true;

  while (inProgress) {
    // question for the type of employee to add to team
    const { employeeType } = await inquirer.prompt(typeOfEmployeeQuestion);
    console.log(employeeType);

    // questions depending on the type of employee selected
    if (employeeType === "intern") {
      const internAnswers = await inquirer.prompt(internQuestions);
      console.log(internAnswers);
    }

    if (employeeType === "engineer") {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);
      console.log(engineerAnswers);
    }

    // question if user want to add another employee
    const { addAnother } = await inquirer.prompt(addAnotherEmployeeType);
    console.log(addAnother);

    if (!addAnother) inProgress = false;
  }
};

init();
