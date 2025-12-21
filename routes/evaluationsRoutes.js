const express = require('express');
const router = express.Router();
const evaluationsController = require('../controllers/evaluationsController');
const protect = require('../middleware/authMiddleware');

router.get('/evaluations', protect, evaluationsController.getAll);
router.get('/evaluations/order', protect, evaluationsController.getAllByOrder);
router.get('/evaluations/group/order', protect, evaluationsController.getAllByGroupOrder);
router.get('/evaluations/benefit/group/order', protect, evaluationsController.getAllByBenefitGroupOrder);
router.get('/evaluations/:id', protect, evaluationsController.getOne);
router.post('/evaluations', protect, evaluationsController.insert);
router.put('/evaluations/:id', protect, evaluationsController.update);
router.delete('/evaluations/:id', protect, evaluationsController.remove);

module.exports = router;