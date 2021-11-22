const inquirer = require("inquirer");
const { starterQuestions, typeOfEmployeeQuestion } = require("./questions");

const init = async () => {
  const starterAnswer = await inquirer.prompt(starterQuestions);
  console.log(starterAnswer);

  const typeofEmployeeAnswer = await inquirer.prompt(typeOfEmployeeQuestion);
  console.log(typeofEmployeeAnswer);
};

init();
