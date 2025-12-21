const express = require('express');
const router = express.Router();
const alternatifController = require('../controllers/alternatifController');
const protect = require('../middleware/authMiddleware');

router.get('/alternatif', protect, alternatifController.getAll);
router.post('/alternatif', protect, alternatifController.insert);
router.put('/alternatif/:id', protect, alternatifController.update);
router.delete('/alternatif/:id', protect, alternatifController.remove);

module.exports = router;