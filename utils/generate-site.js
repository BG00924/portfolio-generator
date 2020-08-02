const fs = require('fs')
// const { resolve } = require('path')

const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if err, reject promise and send err to promise '.catch' method
            if (err) {
                reject(err)
                // return out of function here to make sure promise doesn't 
                //accidently run the resolve function too
                return;
            }

            // if everything went well, resolve promise and send successful
            // data to '.then()' method
            resolve({
                ok: true,
                message: 'file created'
            })
        })
    })
}

const copyFile = () => {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err)
                return
            }

            resolve({
                ok: true,
                message: 'file copied'
            })
        })
    })
}

module.exports = { writeFile, copyFile
    // writeFile: writeFile,
    // copyFile: copyFile
}