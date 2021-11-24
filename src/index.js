const inquirer = require("inquirer");
const { Intern, Engineer, Manager } = require("./lib");
const {
  starterQuestions,
  typeOfEmployeeQuestion,
  internQuestions,
  engineerQuestions,
  addAnotherEmployeeType,
} = require("./questions");
const { formatEmployeeArray, generateHtml } = require("./util");

const init = async () => {
  const { teamName, name, id, email, officeNumber } = await inquirer.prompt(
    starterQuestions
  );

  const manager = new Manager(name, id, email, officeNumber, teamName);

  let inProgress = true;

  const employeeDetails = [];

  // while (inProgress) {
  //   const { employeeType } = await inquirer.prompt(typeOfEmployeeQuestion);

  //   if (employeeType === "intern") {
  //     const { name, id, email, school } = await inquirer.prompt(
  //       internQuestions
  //     );
  //     const intern = new Intern(name, id, email, school);
  //     console.log(intern);
  //     employeeDetails.push(intern);
  //   }

  //   if (employeeType === "engineer") {
  //     const { name, id, email, github } = await inquirer.prompt(
  //       engineerQuestions
  //     );
  //     const engineer = new Engineer(name, id, email, github);
  //     employeeDetails.push(engineer);
  //   }

  //   const { addAnother } = await inquirer.prompt(addAnotherEmployeeType);

  //   if (!addAnother) inProgress = false;
  // }

  // const categorizedEmployeeTypeDetails = formatEmployeeArray(employeeDetails);

  // console.log(categorizedEmployeeTypeDetails);

  const titleAndManagerHtml = (manager) => {
    return `
    
    ${manager.getTeamName()}

    ${manager.getRole()}
    
    `;
  };

  const generateHtml = () => {};
};

init();
