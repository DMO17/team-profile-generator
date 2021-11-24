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

  while (inProgress) {
    const { employeeType } = await inquirer.prompt(typeOfEmployeeQuestion);

    if (employeeType === "intern") {
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );
      const intern = new Intern(name, id, email, school);
      console.log(intern);
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

  const { intern, engineer } = formatEmployeeArray(employeeDetails);

  const titleAndManagerHtml = (manager) => {
    return `
    
    ${manager.getTeamName()}

    ${manager.getRole()}
    
    `;
  };

  const internHtml = (intern) => {
    return `<section class="container mb-5">
    <div class="h1 animate__animated animate__fadeInLeftBig">
      <u>INTERN</u>
    </div>

    <div
      class="
        d-flex
        flex-row flex-wrap
        justify-content-between
        border border-dark
        mt-3
      "
    >
    
    ${intern.map((each) => {
      return each.getRole();
    })}

    </div>
  </section>`;
  };

  console.log(internHtml(intern));

  const generateHtml = () => {};
};

init();
