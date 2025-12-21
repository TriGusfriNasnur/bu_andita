const express = require('express');
const router = express.Router();
const bobotController = require('../controllers/bobotController');
const protect = require('../middleware/authMiddleware');

router.get('/bobot', protect, bobotController.getAll);
router.get('/bobot/order', protect, bobotController.getAllByOrder);
router.get('/bobot/:id', protect, bobotController.getOne);
router.post('/bobot', protect, bobotController.insert);
router.put('/bobot/:id', protect, bobotController.update);
router.delete('/bobot/:id', protect, bobotController.remove);

module.exports = router;