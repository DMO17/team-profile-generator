const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super({ name, id, email });

    this.school = school;
  }

  getSchool() {}

  getRole() {
    return ` <div
    class="card animate__animated animate__zoomIn"
    style="width: 18rem"
  >
    <img
      class="card-img-top"
      src="./assets/images/engineer.PNG"
      alt="Card image cap"
    />

    <div class="card-body">
      <h3 class="card-title">${this.name}</h3>

      <ul class="list-group">
        <li class="list-group-item">Employee ID: ${this.id}</li>
        <li class="list-group-item">Email Address:${this.email}</li>
        <li class="list-group-item">School: ${this.school}</li>
      </ul>
    </div>
  </div>`;
  }
}

module.exports = Intern;
