const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// Connect to mysql db
const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  PORT: process.env.PORT || 3006,
  password: 'R@m!r3Z*1',
  database: 'employee_db'
});
// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  start();
});

function start() {
  inquirer
    .prompt([
      
      {
        type: "list",
        name: "start",
        message: "Please continue if you would like to VIEW, UPDATE OR DELETE employee information.",
        choices: ["View By Department", "View By Role", "View all Employees", "Add Department", "Add Employee Role", "Add Role", "Update Department", "Update Role", "Update Employee", "Delete Department", "Delete Role", "Delete Employee", "Done"]
      }
    ])
    .then((answers) => {
      switch(answers.start) {
        case "View By Department":
          // code block
          viewByDepartment();
          break;
        case "View By Role":
          viewByRole();
          break;
        case "View All Employees":
          viewAllEmployees();
          break;
        case "Add Department":
          // code block
          addDepartment();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Role":
          addRole();
          break;
        case "Update Department":
          // code block
          updateDepartment();
          break;
        case "Update Role":
          updateRole();
          break;
        case "Update Employee":
          updateEmployee();
          break;
        case "Delete Department":
          deleteDepartment();
          break;
        case "Delete Role": 
          deleteRole();        
          break;
        case "Delete Employee":
          deleteEmployee();
          break;
        case "Done":
          // code block
          console.log("Finished!")
          break;
        default:
          // code block
          console.log("default");
      }
    });
  }
  
  // View By Department, Role or Employee Section
  function viewByDepartment() {
    const sql = `SELECT department.id AS id, department.name FROM department;`
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
      start();
    });
  }
  function viewByRole() {
    const sql = `SELECT role.id, role.title, department.name AS department FROM role INNER JOIN department ON role.department_id = department.id`;
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
      start();
      });
    }
  function viewAllEmployees(){
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name`;
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
      start();
      });
      }
  // Add Department
  function addDepartment() {
    inquirer
      .prompt([
        {
        type: 'input',
        name: 'addByDepartment',
        validate: addByDepartment => {
          if(addByDepartment) {
            return true;
          } else {
            console.log('Department Needs To Be Entered');
            return false;
          }
        }
      }
      ])
      .then(answers => {
        const sql = `INSERT INTO department(name)
        VALUES (?)`;
        db.query(sql, answers.addByDepartment, (err, result) => {
        if (err) throw err;
        console.log('Added ' + answers.addByDepartment + " addition success!"); 
        viewByDepartment();
      });
    });
  };
  function addRole() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'addByRole',
          validate: addByRole => {
            if(addByRole) {
              return true;
            } else {
              console.log('Role Needs To Be Entered');
              return false;
            }
          }
        }
        ])
        .then(answers => {
          const sql = `INSERT INTO role(name)
          VALUES (?)`;
          db.query(sql, answers.addByRole, (err, result) => {
          if (err) throw err;
          console.log('Added ' + answers.addByRole + " addition success!"); 
          viewByRole();
        });
      });
    };
  function addEmployee() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'addByFirstName',
          validate: addFirstName => {
            if(addFirstName) {
              return true;
            } else {
              console.log('First Name Needs To Be Entered');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'addByLastName',
          validate: addLastName => {
            if(addLastName) {
              return true;
            } else {
              console.log('Last Name Needs To Be Entered');
              return false;
            }
          }
        }
        ])
        .then(answers => {
          const sql = `INSERT INTO employee (first_name, last_name)
          VALUES (?,?)`;
          db.query(sql, answers.addFirstName, answers.addLastName, (err, result) => {
          if (err) throw err;
          console.log("Addition success!"); 
          addEmployee();
        });
      });
    };
  // Delete Section
  function deleteDepartment() {
    inquirer
      .prompt([
        
      ])
      .then((answers) => {
        
     
      });
    }
  function deleteRole() {
    inquirer
      .prompt([
        
      ])
      .then((answers) => {
        
    
      });
    }
  function deleteEmployee() {
    inquirer
      .prompt([
        
      ])
      .then((answers) => {
        
     
      });
    }