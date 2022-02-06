const inquirer = require('inquirer');

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
            name: 'confirmContents',
            message: 'Would you like to include a table of contents?',
            default: true,
        },
        {
            type: 'input',
            name: 'contents',
            message: 'Please provide a table of contents:',
            when: ({confirmContent}) => confirmContent
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Do you need to include instructions on how to install and run your project?',
            default: true,
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please describe how to install and run your project:',
            when: ({confirmInstall}) => confirmInstall
        },
        {
            type: 'input',
            name: 'use',
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
            name: 'credits',
            message: 'Please list contributors to your project (Required)',
            validate: credits => {
                if (credits) {
                    return true;
                } else {
                    console.log('Please list the contributors!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add licensing information?',
            default: true,
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please add licensing information:',
            when: ({confirmLicense}) => confirmLicense
        },
        {
            type: 'confirm',
            name: 'confirmContribute',
            message: 'Would you like to add how to contribute to the project?',
            default: true,
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please explain how to contribute to the project:',
            when: ({confirmContribute}) => confirmContribute
        },
    ])
};

promptUser ();