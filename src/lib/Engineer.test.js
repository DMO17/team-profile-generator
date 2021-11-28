const Engineer = require("./Engineer");

describe("get engineer", () => {
  const { name, id, email, github, role } = {
    name: "Micheal Irving",
    id: 9818516,
    email: "playmaker@gmail.com",
    github: "playMIrving77",
    role: "Engineer",
  };

  // add mock data
  const mockEngineer = new Engineer(name, id, email, github);

  // verify that the mock data is an instance of the engineer class
  test("should be an instance of engineer", () => {
    expect(mockEngineer).toBeInstanceOf(Engineer);
  });

  // verify name input
  test("Should return a string of Micheal Irving for the input of Micheal Irving", () => {
    expect(mockEngineer.getName()).toBe("Micheal Irving");
  });

  //verify id input
  test("should return a number of 9818516 for an input of 9818516", () => {
    expect(mockEngineer.getId()).toBe(9818516);
  });

  // verify email input
  test("Should return an email string of playmaker@gmail.com with input of playmaker@gmail.com ", () => {
    expect(mockEngineer.getEmail()).toBe("playmaker@gmail.com");
  });

  // verify github input
  test("Should return an github username string of playMIrving77 with input of playMIrving77 ", () => {
    expect(mockEngineer.getGithub()).toBe("playMIrving77");
  });

  // verify role
  test("Should return an github username string of Engineer with input of Engineer ", () => {
    expect(mockEngineer.getRole()).toBe(role);
  });
});
