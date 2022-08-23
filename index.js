// define variables 
const fs = require('fs');
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site');
const generatePage = require('./source/page-template');

const Engineer = require('./libs/Engineer');
const Intern = require('./libs/Intern');
const Manager = require('./libs/Manager');

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
    ]).then(managerData function {
        const {name, id, email, officeNumber} = managerData
        employee = new Manager(name, id, email, officeNumber)
        let role = {role: "Manager"};
        return {...managerData, ...role}
    })
}

// create prompts to fill in data, once data is filled in update the data
// at the bottom of the index copy the data

// create the index and css for source (portfolio generator)
// write the utils folder for fs write and fs copy (portfolio generator)