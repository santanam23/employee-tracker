var inquirer = require('inquirer');

function start () {
inquirer
  .prompt([
    
    {
      type: "list",
      name: "start",
      message: "Please continue if you would like to VIEW, UPDATE OR DELETE employee information.",
      choices: ["VIEW", "ADD", "UPDATE", "DONE"]
    }
  ])
  .then((answers) => {
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// View By Department, Role or Employee Section
function viewByDepartment() {
inquirer
  .prompt([
    
  ])
  .then((answers) => {
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}
function viewByRole() {
  inquirer
    .prompt([
      
    ])
    .then((answers) => {
      
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  }
  function viewAllEmployees() {
    inquirer
      .prompt([
        
      ])
      .then((answers) => {
        
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
    }
// Add Section
function addDepartment() {
  inquirer
    .prompt([
      
    ])
    .then((answers) => {
      
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  }
function addEmployeeRole() {
  inquirer
    .prompt([
      
    ])
    .then((answers) => {
      
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  }
function addEmployee() {
  inquirer
    .prompt([
      
    ])
    .then((answers) => {
      
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  }
// Delete Section
function deleteDepartment() {
  inquirer
    .prompt([
      
    ])
    .then((answers) => {
      
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  }
function deleteRole() {
  inquirer
    .prompt([
      
    ])
    .then((answers) => {
      
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  }
function deleteEmployee() {
  inquirer
    .prompt([
      
    ])
    .then((answers) => {
      
    })
    .catch((error) => {
      if (error.isTtyError) {
        
      } else {
        
      }
    });
  }