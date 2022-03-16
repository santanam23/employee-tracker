const express = require('express');
const { route } = require('.');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

  // Get all employees
  router.get('/api/employee', (req, res) => {
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
  router.get('/api/employee/:id', (req, res) => {
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
  
   // Create an employee
   router.post('/api/employee', ({body}, res) => {
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
  
// originally app.put('/api/employee/:id')
router.put('/employee/:id', (req, res) => {

});

  // Delete a employee
  router.delete('/api/employee/:id', (req, res) => {
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

  module.exports = router;