const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super({ name, id, email });

    this.github = github;
  }

  getGithub() {}

  getRole() {
    return `  <div
    class="card animate__animated animate__zoomIn"
    style="width: 18rem"
  >
    <img
      class="card-img-top"
      src="./dist/assets/images/engineer.PNG"
      alt="Card image cap"
    />

    <div class="card-body">
      <h3 class="card-title">${this.name}</h3>

      <ul class="list-group">
        <li class="list-group-item">Employee ID: ${this.id}</li>
        <li class="list-group-item">Email Address:${this.email}</li>
        <li class="list-group-item">GitHub Username: ${this.github}</li>
      </ul>
    </div>
  </div>`;
  }
}

module.exports = Engineer;
