const express = require('express');
const mysql = require('mysql2');
const inputCheck = require('./utils/inputCheck');


const PORT = process.env.PORT || 3002;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'R@m!r3Z*1',
    database: 'employee_db'
  },
  console.log('Connected to the employee database.')
);

db.query(`SELECT * FROM employee`, (err, rows) => {
  console.log(rows);
});
// Get all employees
app.get('/api/employee', (req, res) => {
  const sql = `SELECT * FROM employee`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// GET a single employee
app.get('/api/employee/:id', (req, res) => {
  const sql = `SELECT * FROM employee WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});


// Delete a employee
app.delete('/api/employee/:id', (req, res) => {
  const sql = `DELETE FROM employee WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
  if (err) {
    res.statusMessage(400).json({ error: res.message });
  } else if (!result.affectRows) {
    res.json({
      message: 'Employee not found'
    });
  } else {
    res.json({
      message: 'deleted',
      changes: result.affectedRows,
      id: req.params.id
    });
   }
  });
});
// Create an employee
app.post('/api/employee', ({body}, res) => {
  const errors = inputCheck(body, 'first_name', 'last_name', 'role_id', 'manager_id');
  if (errors) {
    res.status(400).json({error: errors });
    return;
  }
    // Create a employee
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
  VALUES (?,?,?,?)`;
  const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

  db.query(sql, params, (err, result) => {
  if (err) {
  res.status(400).json({ error: err.message});
  return;
  } 
  res.json({
  message: 'success',
  data: body
  });
 });
});
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
