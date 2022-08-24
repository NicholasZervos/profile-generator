// define variables 
const fs = require('fs');
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site');
const generatePage = require('./source/page-template');

const Engineer = require('./libs/Engineer');
const Intern = require('./libs/Intern');
const Manager = require('./libs/Manager');

// create prompts to fill in data, once data is filled in update the data
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ]).then(managerData => {
        const {name, id, email, officeNumber} = managerData
        employee = new Manager(name, id, email, officeNumber)
        let role = {role: "Manager"};
        return {...managerData, ...role}
    })
}


const promptEmployee = managerData => {
    if(!managerData.engineers) {
        managerData.engineers = [];
    }
    if (!managerData.interns) {
        managerData.interns = [];
    }
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Would you like to add an engineer, an intern, or finish building your team?',
            choices: ['Engineer', 'Intern', 'Finished']
        }
    ]).then(({ role }) => {
        if (role === 'Engineer') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the engineers name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the engineers ID number?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the engineers email?',
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is the engeineers GitHub username?'
                }
            ]).then(employeeData => {
               employee = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github)
               let role = {role: 'Engineer'}
               managerData.engineers.push({...employeeData, ...role})
               return promptEmployee(managerData)
            })
        } else if (role === 'Intern') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the interns name?'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the interns ID number?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the interns email?',
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Which school does the intern attend?'
                }
            ]).then(employeeData => {
                employee = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school)
                let role = {role: 'Intern'}
                managerData.interns.push({...employeeData, ...role})
                return promptEmployee(managerData)
             })
        } else {
            return managerData
        }
    })
} 

promptManager()
.then(promptEmployee)
.then(managerData => {
    return generatePage(managerData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log("------------------------")
    console.log(writeFileResponse.message);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse.message)
    console.log("------------------------");
  })
  .catch(err => {
    console.log(err);
  });


// at the bottom of the index copy the data

// create the index and css for source (portfolio generator)
// write the utils folder for fs write and fs copy (portfolio generator)