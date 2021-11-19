class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {}

  getId() {}

  getEmail() {}

  getRole() {}
}

class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;

    super(employeeName, id, email);
  }

  getRole() {}
}

class Engineer extends Employee {
  constructor(github) {
    this.github = github;

    super(employeeName, id, email);
  }

  getGithub() {}

  getRole() {}
}

class Intern extends Employee {
  constructor(school) {
    this.school = school;

    super(employeeName, id, email);
  }

  getSchool() {}

  getRole() {}
}
