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

const fs = require("fs");

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
    
    ${intern
      .map((each) => {
        return each.getRole();
      })
      .join("")}

    </div>
  </section>`;
  };

  const engineerHtml = (engineer) => {
    return `
    <section class="container mb-5">
      <div class="h1 animate__animated animate__fadeInLeftBig">
        <u>ENGINEER</u>
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

      
      ${engineer
        .map((each) => {
          return each.getRole();
        })
        .join("")}
      
      </div>
    </section>`;
  };

  const generateHtml = () => {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TEAM NAME</title>
    
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
    
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
    
        <link rel="stylesheet" href="./style.css" />
      </head>
    
      <body>
        <main>
    
        ${titleAndManagerHtml(manager)}

        ${internHtml(intern)}
    
        ${engineerHtml(engineer)}
    
          
        </main>
    
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>`;
  };

  const html = generateHtml();

  const writeToFile = (filePath, data) => {
    try {
      fs.writeFileSync(filePath, data);
    } catch (error) {
      console.log(error.message);
    }
  };

  writeToFile("team-profile.html", html);
};

init();
