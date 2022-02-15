const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber, teamName) {
    super({ name, id, email });

    this.officeNumber = officeNumber;
    this.teamName = teamName;
  }

  getTeamNameHtml() {
    return `  <header>
    <div class="jumbotron">
      <h1
        class="
          display-4
          text-center
          font-weight-bold
          animate__animated animate__backInDown
        "
      >
        ${this.teamName}
      </h1>
    </div>
  </header>`;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getHtml() {
    return ` <section class="container mb-5">
    <div>
      <div class="h1 animate__animated animate__fadeInLeftBig">
        <u>MANAGER</u>
      </div>
    </div>

    <div
      class="
        d-flex
        flex-row flex-wrap
        border border-dark
        mt-3
        animate__animated animate__zoomIn
      "
    >
      <div class="card" style="width: 18rem">
        <img
          class="card-img-top"
          src="./dist/assets/images/manager.PNG"
          alt="Card image cap"
        />
      </div>

      <div class="card-body manager-details-container">
        <h3 class="card-title">${this.name}</h3>

        <ul class="list-group">
          <li class="list-group-item">Employee ID: ${this.id}</li>
          <li class="list-group-item">Email Address: ${this.email}</li>
          <li class="list-group-item">
            Office Number: ${this.officeNumber}
          </li>
        </ul>
      </div>
    </div>
  </section>`;
  }
}

module.exports = Manager;
