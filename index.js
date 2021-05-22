// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?',
        validate: function (projectInput) {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;


            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your Read Me about?',
        validate: function (projectInput) {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;

            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions',
        validate: function (projectInput) {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter installation instructions');
                return false;

            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What usage would this project provide?',
        validate: function (projectInput) {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;

            }
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Did anyone else contribute to this assignment?',
        validate: function (projectInput) {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;

            }
        }
    },
    // License list is taken from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
    // Only took the top version to make list short enough
    {
        type: 'list',
        name: 'license',
        message: 'what kind of license do you have',
        choices: ['Apache 2.0', 'Boost', 'BSD 3-Clause', 'Eclipse', 'GNU GPL', 'none']
    },
    {
        type: 'input',
        name: 'features',
        message: 'What features are provided project?',
        validate: function (projectInput) {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;

            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide instructions for others to collaberate',
        validate: function (projectInput) {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;

            }
        }

    },
    {
        type: 'input',
        name: 'tests',
        message: 'How to test the project',
        validate: function (projectInput) {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;

            }
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter email address',
        validate: function (projectInput) {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter an email address');
                return false;

            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            console.log("error")
        } else {
            console.log("FileCreated")
        }
    }
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers)
            writeToFile("README.md", (answers))
        })
}

// Function call to initialize app
init();