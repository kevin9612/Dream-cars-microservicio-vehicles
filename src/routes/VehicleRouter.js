const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehicleController');


router.get('/', controller.helloWordController);

router.post('/addVehicle', controller.addVehicleController);

router.delete('/deleteVehicle/:id', controller.deleteVehicleController);

router.put('/updateVehicle/:id', controller.updateVehicleController);

router.get('/:id', controller.getVehicleControllerById);

module.exports = router;