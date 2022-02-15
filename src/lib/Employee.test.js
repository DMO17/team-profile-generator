const Employee = require("./Employee");

describe("get employee", () => {
  const { name, id, email } = {
    name: "Micheal",
    id: 111555,
    email: "play@gmail.com",
  };

  // add mock data
  const mockEngineer = new Employee({ name, id, email });

  // verify that the mock data is an instance of the engineer class
  test("should be an instance of engineer", () => {
    expect(mockEngineer).toBeInstanceOf(Employee);
  });

  // verify name input
  test("Should return a string of Micheal  for the input of Micheal ", () => {
    expect(mockEngineer.getName()).toBe("Micheal");
  });

  //verify id input
  test("should return a number of 111555 for an input of 111555", () => {
    expect(mockEngineer.getId()).toBe(111555);
  });

  // very email input
  test("Should return an email string of play@gmail.com with input of play@gmail.com ", () => {
    expect(mockEngineer.getEmail()).toBe("play@gmail.com");
  });
});
