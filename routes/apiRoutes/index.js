const express = require('express');
const router = express.Router();

router.use(require('./employeeRoutes'));
router.use(require('./roleRoutes'));
router.use(require('./departmentRoutes'));

module.exports = router;

// SELECT employee.*, parties.name AS party_name, COUNT(candidate_id) AS count
// FROM votes
// LEFT JOIN candidates ON votes.candidate_id = candidates.id
// LEFT JOIN parties ON candidates.party_id = parties.id
// GROUP BY candidate_id ORDER BY count DESC
