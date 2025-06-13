const express = require('express');
const router = express.Router();
const controller = require('../controllers/destinationController');

router.post('/destinations', controller.createDestination);
router.get('/destinations', controller.getAllDestinations);
router.put('/destinations/:id', controller.updateDestination);
router.delete('/destinations/:id', controller.deleteDestination);

module.exports = router;
