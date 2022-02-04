const Intern = require('../lib/Intern')

test('Create a Intern Object', () => {
    const intern = new Intern('Zach', 1, 'Zach.Steuer98@gmail.com', 'University of Connecticut')

    expect(intern.school).toEqual(expect.any(String))
}) 

test('Get the users school name', () => {
    const intern = new Intern('Zach', 1, 'Zach.Steuer98@gmail.com', 'University of Connecticut')

    expect(intern.getSchool()).toEqual(expect.any(String))
})

test('Get the role of the employee', () => {
    const intern = new Intern('Zach', 1, 'Zach.Steuer98@gmail.com', 'University of Connecticut')

    expect(intern.getRole()).toEqual('Intern')
})