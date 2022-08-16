const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const emailValidator = require('email-validator');
const generatePage = require('./src/generate-page');

// Manager
const managerPrompt = [
    {
        type: "input",
        name: 'name',
        message: 'Manager name?',
        validate: (answer) => {
            if(answer) {
                return true;
            } else {
                return 'Enter the Manager name'
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the 'id' for the Manager",
        validate: (answer) => {
            if(answer) {
                return true;
            } else {
                return 'Enter the Manager id'
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Manager's email?",
        validate: (answer) => {
            if(emailValidator.validate(answer)) {
                return true;
            } else {
                return 'Enter the Manager email'
            }
        }
    },
    {
        type: 'input',
        name: 'officenumber',
        message: "What is the office number for the Manager",
        validate: (answer) => {
            if(answer) {
                return true;
            } else {
                return 'Enter the Manager office number'
            }
        }
    },
    {
        type: 'list',
        name: 'addEmployee',
        message: "Add another employee?",
        choices: ['Yes', 'No']
    }
]
// Engineer
const engineerPrompt = [
    {
        type: "input",
        name: 'name',
        message: 'Engineer name?',
        validate: (answer) => {
            if(answer) {
                return true;
            } else {
                return 'Enter the Engineer name'
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the 'id' for the Engineer",
        validate: (answer) => {
            if(answer) {
                return true;
            } else {
                return 'Enter the Engineer id'
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email?",
        validate: (answer) => {
            if(emailValidator.validate(answer)) {
                return true;
            } else {
                return 'Enter the Engineer email'
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the GitHub for the Engineer?',
        validate: (answer) => {
            if(answer) {
                return true;
            } else {
                return 'Please enter the Github username'
            }
        }
    },
    {
        type: 'list',
        name: 'addEmployee',
        message: "Add another employee?",
        choices: ['Yes', 'No']
    }
]
// Intern
const internPrompt = [
    {
        type: "input",
        name: 'name',
        message: 'Intern name?',
        validate: (answer) => {
            if(answer) {
                return true;
            } else {
                return 'Enter the Intern name'
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the 'id' for the Intern",
        validate: (answer) => {
            if(answer) {
                return true;
            } else {
                return 'Enter the Intern id'
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Intern's email?",
        validate: (answer) => {
            if(emailValidator.validate(answer)) {
                return true;
            } else {
                return 'Enter the Intern email'
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school is the Intern from?',
        validate: (answer) => {
            if(answer) {
                return true;
            } else {
                return 'Please enter the School name'
            }
        }
    },
    {
        type: 'list',
        name: 'addEmployee',
        message: "Add another employee?",
        choices: ['Yes', 'No']
    }
]

// Choose role
const pickRole = {
    type: 'list',
    name: 'selectRole',
    message: 'Select what role is being added',
    choices: ['Manager', 'Engineer', 'Intern']
}

function writeToFile(filename, data) {
    fs.writeFile(filename, data, err => {
        if(err) {
            console.log(err);
        } else {
            console.log('File created');
        }
    })
}

let teamArray = [];
let oneManager = true;

function start() {
    inquirer
    .prompt(pickRole)
    .then((answers) => {
        if(answers.selectRole === 'Manager') {
            if(oneManager === false) {
                console.log('Only one Manager');
                return start();
            }
            oneManager = false;
            inquirer.prompt(managerPrompt)
            .then((data) => {
                teamArray.push(new Manager(data.name, data.id, data.email, data.officenumber));
                if (data.addEmployee === 'Yes') {
                    return start();
                }
                writeToFile('./dist/index.html', generatePage(teamArray));
            });
        }
        if(answers.selectRole === 'Engineer') {
            inquirer.prompt(engineerPrompt)
            .then((data) => {
                teamArray.push(new Engineer(data.name, data.id, data.email, data.github));
                if(data.addEmployee === 'Yes') {
                    return start();
                }
                writeToFile('./dist/index.html', generatePage(teamArray));
            });
        }
        if(answers.selectRole === 'Intern') {
            inquirer.prompt(internPrompt)
            .then((data) => {
                teamArray.push(new Intern(data.name, data.id, data.email, data.school));
                if(data.addEmployee === 'Yes') {
                    return start()
                }
                writeToFile('./dist/index.html', generatePage(teamArray));
            })
        }
    })
}
start();
