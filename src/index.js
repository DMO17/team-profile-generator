const inquirer = require("inquirer");
const { Intern, Engineer } = require("./lib");
const {
  starterQuestions,
  typeOfEmployeeQuestion,
  internQuestions,
  engineerQuestions,
  addAnotherEmployeeType,
} = require("./questions");

const init = async () => {
  const starterAnswer = await inquirer.prompt(starterQuestions);

  let inProgress = true;
  const employeeDetails = [];

  while (inProgress) {
    const { employeeType } = await inquirer.prompt(typeOfEmployeeQuestion);

    if (employeeType === "intern") {
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );
      const intern = new Intern(name, id, email, school);
      employeeDetails.push(intern);
    }

    if (employeeType === "engineer") {
      const { name, id, email, github } = await inquirer.prompt(
        engineerQuestions
      );
      const engineer = new Engineer(name, id, email, github);
      employeeDetails.push(engineer);
    }

    const { addAnother } = await inquirer.prompt(addAnotherEmployeeType);

    if (!addAnother) inProgress = false;
  }

  console.log(employeeDetails);
};

init();
