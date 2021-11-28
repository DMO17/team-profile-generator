const Manager = require("./Manager");

describe("get manager", () => {
  const { name, id, email, officeNumber, teamName, role } = {
    name: "Dana White",
    id: 5811698,
    email: "bigBossDana@gmail.com",
    officeNumber: 2020844206510,
    teamName: "Ultimate Fighting Competition",
    role: "Manager",
  };

  // add mock data
  const mockEngineer = new Manager(name, id, email, officeNumber, teamName);

  // verify that the mock data is an instance of the engineer class
  test("should be an instance of Manager", () => {
    expect(mockEngineer).toBeInstanceOf(Manager);
  });

  // verify name input
  test("Should return a string of Dana White for the input of Dana White", () => {
    expect(mockEngineer.getName()).toBe("Dana White");
  });

  //verify id input
  test("should return a number of 5811698 for an input of 5811698", () => {
    expect(mockEngineer.getId()).toBe(5811698);
  });

  // very email input
  test("Should return an email string of bigBossDana@gmail.com with input of bigBossDana@gmail.com ", () => {
    expect(mockEngineer.getEmail()).toBe("bigBossDana@gmail.com");
  });

  // very school input
  test("Should return an office number of 2020844206510 with input of 2020844206510 ", () => {
    expect(mockEngineer.getOfficeNumber()).toBe(2020844206510);
  });

  // very Team name input
  test("Should return an school string of Ultimate Fighting Competition with input of Ultimate Fighting Competition ", () => {
    expect(mockEngineer.teamName).toBe("Ultimate Fighting Competition");
  });

  // verify role
  test("Should return an github username string of Manager with input of Manager ", () => {
    expect(mockEngineer.getRole()).toBe(role);
  });
});
