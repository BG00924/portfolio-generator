const fs = require('fs')
const generatePage = require('./src/page-template')

//Lesson 1 Code
const profileDataArgs = process.argv.slice(2)
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

const [name, github] = profileDataArgs



fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
    
    console.log('Portfolio complete! Checkout index.html to see the output!')
})