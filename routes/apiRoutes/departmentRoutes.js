const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const db = require('../../db/connection');

// Get all departments
router.get('/department', (req, res) => {
  const sql = `SELECT * FROM department`;

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

// Get single department
router.get('/department/:id', (req, res) => {
    const sql = `SELECT * FROM department WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json ({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});    
 // Create a department
 router.post('/api/department', ({body}, res) => {
    const errors = inputCheck(body, 'name', 'description');
    if (errors) {
      res.status(400).json({error: errors });
      return;
    }
      // Create a department
    const sql = `INSERT INTO department (name, description) 
    VALUES (?,?)`;
    const params = [body.name, body.description];
  
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

// Delete a department
router.delete('/department/:id', (req, res) => {
    const sql = `DELETE FROM department WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({ error: res.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Department not found'
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
