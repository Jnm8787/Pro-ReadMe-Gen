// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const render = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Insert the name of your project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Add a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Add the projects installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Insert the projects usage of information.',
    },
    {
        type: 'input',
        name:'Addition',
        message:'Insert additional instructions.',
    },
    {
        type:'input',
        name:'test',
        message:'Insert projects test instructions.',
    },
    {
        type:'input',
        name:'email',
        message:'Add an email address.',
    },
    {
        type:'input',
        name:'github',
        message:'Add an Github username.',
    },
    {
        type:'list',
        name:'License',
        message:'Add a license.',
        choices:['Apache', 'MIT', 'GPL', 'None',],
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      writeToFile("Generating a README.md", render(answers));
    });
  }

// Function call to initialize app


// const answerVar = {
//     title: "a project name",
//     description: "a project description"
// }
// console.log(answerVar.title)

init();