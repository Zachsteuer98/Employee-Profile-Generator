const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/generateHTML.js');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const teamArray = []

const addManager = portfolioData => {
console.log(`
=================
Add a New README
=================
`);

//if there is no README array property, create one
 return inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'Who is the manager of this team?',
          validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter an employee's name!");
                return false; 
            }
        }
      },
      {
          type: 'input',
          name: 'id',
          message: 'Please enter the Managers ID.',
          validate: idInput => {
            if  (isNaN(idInput)) {
                console.log ("Please enter the employee's ID!")
                return false; 
            } else {
                return true;
            }
        }
      },
      {
          type: 'input',
          name: 'email',
          message: 'What is the Managers Email?',
          validate: email => {
            valid = /@/.test(email)
            if (valid) {
                return true;
            } else {
                console.log ('Please enter an email!')
                return false; 
            }
        }
      },
      {
          type: 'input',
          name: 'officeNumber',
          message: 'Please enter the Managers office number.',
          validate: officeNumber =>{
              if (isNaN(officeNumber)) {
                  console.log('please enter a valid office number!')
                  return false
              } else {
                  return true;
              }
          }
      }
  ])
  .then(managerData => {
    const {name, id, email, officeNumber} = managerData;
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager);
    // console.log(manager);
    });
};

const addEmployee = () => {
    console.log(`
============================
Adding employees to the team
============================
    `)
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose the employees role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a valid name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: idInput => {
                if  (isNaN(idInput)) {
                    console.log ("Please enter a valid ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /@/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            // console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            // console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })
}

addManager()
.then(addEmployee)
.then(teamArray => {
  console.log(teamArray);
})


// const GenerateREADME = generatePage(teamArray);

// fs.writeFile('./README.md', GenerateREADME, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// })  
// });