const mysql = require('mysql2');

const inquirer = require('inquirer');

const cTable = require('console.table');

require('dotenv').config();

// connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'R@m!r3Z*1',
    database: 'employee_db'
  });

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    afterConnection();
  });
  
  // function after connection is established and welcome image shows 
  afterConnection = () => {
    console.log("***********************************")
    console.log("*                                 *")
    console.log("*        EMPLOYEE MANAGER         *")
    console.log("*                                 *")
    console.log("***********************************")
    promptUser();
  };
// inquirer prompt for questions
const promptUser = () => {
    inquirer.prompt ([
      {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
            'View all departments', 
            'View all roles', 
            'View all employees', 
            'Add a department', 
            'Add a role', 
            'Add an employee', 
            'Update an employee role',
            'Update an employee manager',
            "View employees by department",
            'Delete a department',
            'Delete a role',
            'Delete an employee',
            'View department budgets',
            'No Action']
        }
    ])
    .then((answers) => {
        const { choices } = answers;

        if (choices === "View all departments") {
            showDepartments();
        }
        if (choices === "View all roles") {
            showRoles();
        }
        if (choices === "View all employees") {
            showEmployees();
        }
        if (choices === "ADD a department") {
            addDepartment();
        }
        if (choices === "ADD a role") {
            addRole();
        }
        if (choices === "ADD an employee") {
            addEmployee();
        }
        if (choices === "Update an employee role") {
            updateEmployee();
        }
        if (choices === "Update an employee manager") {
            updateManager();
        }
        if (choices === "View employees by department") {
            employeeDepartment();
        }
        if (choices === "Delete a department") {
            deleteDepartment();
        }
        if (choices === "Delete a role") {
            deleteRole();
        }
        if (choices === "Delete an employee") {
            deleteEmployee();
        }
        if (choices === "View department budgets") {
            viewBudget();
        }
        if (choices === "No Actions") {
            connection.end();
        };
    });
};

// Show all departments
showDepartments = () => {
    console.log('Showing all departments...\n');
    const sql = `SELECT department.id AS id, department.name AS department FROM department`;

    connection.promise().query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
    })
};

// Show all roles
showRoles = () => {
    console.log('Show all roles...\n');

    const sql = `SELECT role.id, role.title, department.name AS department FROM role
    INNER JOIN department ON role.department_id = department.id`;

    connection.promise().query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
    })
};

// function to show all employees
showEmployees = () => {
    console.log('Show all employees...\n');
    const sql = `SELECT employee.id,
                        employee.first_name,
                        employee.last_name,
                        role.title,
                        department.name AS department,
                        role.salary,
                        CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee
                        LEFT JOIN role ON employee.role_id = role.id
                        LEFT JOIN department ON role.department_id = department.id
                        LEFT JOIN employee manager ON employee.manager_id = manager.id`;

    connection.promise().query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
    });
};
// function to add a department
addDepartment = () => {
    inquirer.prompt([
    {
        type: 'input',
        name: 'addDept',
        message: "What department do you want to add?",
        validate: addDept => {
            if (addDept) {
                return true;
            } else {
                console.log('Please enter a department');
                return false;
            }
        }
    }
  ])
    .then(answer => {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        connection.query(sql, (err, results) => {
            if (err) throw err;
            console.log('Added ' + answer.addDept + " to departments");
            showDepartments();
        });
    });
};

// function to add a role
addRole = () => {
    inquirer.promptUser([
        {
            type: 'input',
            name: 'role',
            message: "What role do you want to add?",
            validate: addRole => {
                if (addRole) {
                    return true;
                } else {
                    console.log('Please enter a role');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: "What is the salary for this role?",
            validate: addSalary => {
                if (isNaN(addSalary)) {
                    return true;
                } else {
                    console.log('Please enter a salary');
                    return false;
                }
            }
        }
    ])
        .then(answer => {
            const params = [answer.role, answer.salary];

            const roleSql = `SELECT name, id FROM department`;

            connection.promise().query(roleSql, (err, data) => {
                if (err) throw err;

                const dept = data.map(({ name, id }) => ({ name: name, value:id }));

                inquirer.prompt([
                {
                    type: 'list',
                    name: 'dept',
                    message: "What department is this role in?",
                    choices: dept
                }
                ])
                .then(deptChoice => {
                    const dept = dept.Choice.dept;
                    params.push(dept);

                    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?,?)`;

                    connection.query(sql, params, (err, result) => {
                        if (err) throw err;
                        console.log('Added' + answer.role + " to roles");

                        showRoles();
                    });
                });
            });
        });
};
// function to add an employee
addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName'
        }
    ])
}