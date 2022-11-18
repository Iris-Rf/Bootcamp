const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: "list",
      name: "prettier",
      message: "Quiere prettier",
      choices: ["Yes", "No", "Luego"],
    },
  ])
  .then((answers) => {
    if (answers.prettier === "Yes") {
      console.log("Archivo prettier");
      fs.writeFile("prettierc", "Archivo prettier", () => {
        // console.log("Crear prettier");
      });
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(err);
    } else {
        console.log("File written successfully\n");
      }
  });

  module.exports = require