var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "list",
      name: "start",
      message: "Please continue if you would like to VIEW, UPDATE OR DELETE employee information.",
      choices: ["VIEW", "ADD", "UPDATE", "DONE"]
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });