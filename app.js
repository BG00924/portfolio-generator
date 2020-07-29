// const fs = require('fs')
const inquirer = require('inquirer')
// console.log(inquirer)
// const generatePage = require('./src/page-template')

// //Lesson 1 Code
// const profileDataArgs = process.argv.slice(2)
// //console.log(profileDataArgs)
// const printProfileData = (profileDataArr) => {
//     for (let i = 0; i < profileDataArr.length; i +=1) {
//         console.log(profileDataArr[i])
//     }
//     console.log('===================================')
//     profileDataArr.forEach(profileItem =>console.log(profileItem))
// }
// printProfileData(profileDataArgs)
// End Lesson 1 code

// const [name, github] = profileDataArgs



// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;
    
//     console.log('Portfolio complete! Checkout index.html to see the output!')
// })

const promptUser = () => {
    return inquirer.prompt([
    /* Pass your questions in here */
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your username!')
                    return false
                }
            }
        },
        {
            type: 'confirm', 
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
            when: ({ confirmAbout }) => confirmAbout
        }
    ])
}


  const promptProject = portfolioData => {
    // if there's no 'projects' array propery, create one
    if (!portfolioData.projects) {  
        portfolioData.projects = []
    }
      console.log(`
      =================
      Add a New Project
      =================`)
      return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (required).',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project description!')
                    return false
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you complete this project with? (Check all that apply)',
            choices: ['javascrip', 'html', 'css', 'es6', 'jquery', 'bootstrap', 'node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project link!')
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
      ])
      .then(projectData => {
          portfolioData.projects.push(projectData)
          if (projectData.confirmAddProject) {
              return promptProject(portfolioData)
          } else {
              return portfolioData
          }
      })
  }

  promptUser()
  //.then(answers => console.log(answers))
  .then(promptProject)
  .then(projectAnswers => console.log(projectAnswers))