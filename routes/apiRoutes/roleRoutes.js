const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all roles
router.get('/role', (req, res) => {
  // internal logic remains the same
});

// Get single role
router.get('/role/:id', (req, res) => {});

// Delete a role
router.delete('/role/:id', (req, res) => {});

module.exports = router;