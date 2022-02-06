// create the manager card
const createManager = function (manager) {
    return `
<div class="col-4">
    <div class="card">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <h4>Manager</h4>
        </div>
        <div class="card-body">
            <p>ID: ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>
`;
}

// create the engineer card
const createEngineer = function (engineer) {
    return `
<div class="col-4">
    <div class="card">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4>
        </div>
        <div class="card-body">
            <p>ID: ${engineer.id}</p>
            <p">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>
`
}

// create the intern card 
const createIntern = function (intern) {
    return `
<div class="col-4">
    <div class="card">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4>
        </div>
        <div class="card-body">
            <p>ID: ${intern.id}</p>
            <p>Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};


generateHTML = (data) => {

    // team profile array
    teamProfileArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = createManager(employee);

            teamProfileArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);

            teamProfileArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = createIntern(employee);

            teamProfileArray.push(internCard);
        }
        
    }

    // joining card strings 
    const cards = teamProfileArray.join('')

    // return cards to generateTeam
    const generateTeam = generateTeamPage(cards); 
    return generateTeam;

}

// generate html page 
const generateTeamPage = function (cards) {   
  return`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Employee Profile</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  </head>
  <body>
      <header>
        <nav class="navbar" id="navbar">
        <span class="h1 w-100 text-center">Team Profile</span>
        </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center">
                  ${cards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

module.exports = generateHTML; 