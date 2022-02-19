const mysql = require('mysql2');

const inquirer = require('inquirer');

const cTable = require('console.table');

const db = require('./db/connection');
const Choices = require('inquirer/lib/objects/choices');

require('dotenv').config()

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
    .then((answer) => {
        const { choices } = answers;

        if (choices === "View all departments") {
            showDepartments();
        }
    }
}