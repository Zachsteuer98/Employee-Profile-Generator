const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Zach', 1, 'Zach.Steuer98@gmail', 'Zachsteuer98');
    
    expect(engineer.github).toEqual(expect.any(String));
});

test('Get the Github username', () => {
    const engineer = new Engineer('Zach', 1, 'Zach.Steuer98@gmail', 'Zachsteuer98');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test('Get the role of the Employee', () => {
    const engineer = new Engineer('Zach', 1, 'Zach.Steuer98@gmail.com', 'Zachsteuer98');

    expect(engineer.getRole()).toEqual('Engineer');
})