//packages and files needed for the program to run
const inquirer = require('inquirer');
const fs = require('fs');
const writeFile = require('./utils/generateMarkdown');


//greet the user
console.log("Welcome to my README generator, answer the following questions to generate a professional README.")

//array of questions to prompt the user
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true; 
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Please describe your project (Required)',
            validate: projectDescriptionInput => {
                if (projectDescriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Do you need to include instructions on how to install and run your project?',
            default: true,
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please describe how to install and run your project:',
            when: ({confirmInstall}) => confirmInstall
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions on how to use your project (Required)',
            validate: use => {
                if (use) {
                    return true;
                } else {
                    console.log('Please enter instructions for use of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please list contributors to your project (Required)',
            validate: contribution => {
                if (contribution) {
                    return true;
                } else {
                    console.log('Please list the contributors!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please pick the type of license:',
            choices: ['Apache', 'BSD', 'MIT', 'None']
        },
        {
            type: 'confirm',
            name: 'confirmContribute',
            message: 'Would you like to add how to contribute to the project?',
            default: true,
        },
        {
            type: 'input',
            name: 'addition',
            message: 'Please explain how to contribute to the project:',
            when: ({confirmContribute}) => confirmContribute
        },
    ])
};

promptUser()
    .then(pageMarkdown => {
        return writeFile(pageMarkdown);
    });