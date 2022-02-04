const Employee = require('../lib/Employee');

test('Creates an employee Object.', () => {
    const employee = new Employee('Zach', 1, 'Zach.Steuer98@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('gets the name of the Employee.', () => {
    const employee = new Employee('Zach', 1, 'Zach.Steuer98@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
})

test('get the employees id number.', () => {
    const employee = new Employee('Zach', 1, 'Zach.Steuer98@gmail.com')

    expect(employee.getId()).toEqual(expect.any(Number))
})

//fixed a bug using https://github.com/nicolewallace09/team-profile-generator
test('get Employees email address.', () => {
    const employee = new Employee('Zach', 1, 'Zach.Steuer98@gmail.com')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

//getRole
test('gets the role of the employee.', () => {
    const employee = new Employee('Zach', 1, 'Zach.Steuer98@gmail.com')

    expect(employee.getRole()).toEqual("Employee")
})