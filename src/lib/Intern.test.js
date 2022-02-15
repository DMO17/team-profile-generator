const Intern = require("./Intern");

describe("get intern", () => {
  const { name, id, email, school, role } = {
    name: "Raelph Ragnick",
    id: 65226,
    email: "r.ragnick@gmail.com",
    school: "Lipzig Prep",
    role: "Intern",
  };

  // add mock data
  const mockEngineer = new Intern(name, id, email, school);

  // verify that the mock data is an instance of the engineer class
  test("should be an instance of Intern", () => {
    expect(mockEngineer).toBeInstanceOf(Intern);
  });

  // verify name input
  test("Should return a string of Raelph Ragnick for the input of Raelph Ragnick", () => {
    expect(mockEngineer.getName()).toBe("Raelph Ragnick");
  });

  //verify id input
  test("should return a number of 9818516 for an input of 9818516", () => {
    expect(mockEngineer.getId()).toBe(65226);
  });

  // very email input
  test("Should return an email string of r.ragnick@gmail.com with input of r.ragnick@gmail.com ", () => {
    expect(mockEngineer.getEmail()).toBe("r.ragnick@gmail.com");
  });

  // very school input
  test("Should return an school string of Lipzig Prep with input of Lipzig Prep ", () => {
    expect(mockEngineer.getSchool()).toBe("Lipzig Prep");
  });

  // verify role
  test("Should return an github username string of Intern with input of Intern ", () => {
    expect(mockEngineer.getRole()).toBe(role);
  });
});
