const Manager = require('../lib/Manager');

test('Creates a Manager Object', () => {
    const manager = new Manager('Zach', 1, 'Zach.Steuer98@gmail.com', 1234)

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('Get the role of the Employee', () => {
    const manager = new Manager('Zach', 1, 'Zach.Steuer98@gmail.com', 1234)

    expect(manager.getRole()).toEqual("Manager");
})