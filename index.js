const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const emailValidator = require('email-validator');

// Manager
const managerPrompt = inquirer.prompt([
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
        name: 'office number',
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
])
// Engineer
const engineerPrompt = inquirer.prompt([
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
])
// Intern
const internPrompt = inquirer.prompt([
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
])