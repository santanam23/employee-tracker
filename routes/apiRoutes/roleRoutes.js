const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all roles
router.get('/role', (req, res) => {
  // internal logic remains the same
  const sql = `SELECT * FROM role`;

  db.query(sql, (err, rows) => {
      if (err) {
          res.status(500).json({ error: err.message});
          return;
      }
      res.json({
          message: 'success',
          data: rows
      });
  });
});

// Get single role
router.get('/role/:id', (req, res) => {
    const sql = `SELECT * FROM role WHERE id = ?`;
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


   // Create a role
   router.post('/api/role', ({body}, res) => {
    const errors = inputCheck(body, 'title', 'salary', 'department_id');
    if (errors) {
      res.status(400).json({error: errors });
      return;
    }
      // Create a role
    const sql = `INSERT INTO role (title, salary, department_id) 
    VALUES (?,?,?)`;
    const params = [body.title, body.salary, body.department_id];
  
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

 // originally app.put('/api/role/:id')
router.put('/role/:id', (req, res) => {
    const errors = inputCheck(req.body, 'department_id');

    if (errors) {
        res.status(400).json({ error: errors});
        return;
    }
    const sql = `UPDATE employee SET department_id = ? WHERE id = ?`;
    
    const params = [res.body.department_id, req.params.id];
    
    db.query(sql, params, (err, result) => {
    if (err) {
        res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
        res.json({
        message: 'role not found'
        });
    } else {
        res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
        });
    }
    });
});

// Delete a role
router.delete('/role/:id', (req, res) => {
    const sql = `DELETE FROM employee WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({ error: res.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Role NOT found'
            });
        } else {
            res.json ({
                message: 'deleted',
                changes: result.affectedRows,
                id: req.params.id
            });
        } 
    });
});

module.exports = router;