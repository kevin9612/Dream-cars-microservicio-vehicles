const service = require('../services/VehicleService');

exports.helloWordController = function(req, res) {
    res.send(service.helloWordService);
}

exports.addVehicleController = function(req, res) {
    console.log(req.body);
    res.send(service.addVehicleService(req.body));
};

exports.deleteVehicleController = function(req, res) {
    console.log(req.body);
    res.send(service.deleteVehicleService(req.params.id));
};

exports.updateVehicleController = function(req, res) {
    console.log(service.updateVehicleService(req.body, req.params.id));
    res.send(service.updateVehicleService(req.body, req.params.id));
};

exports.getVehicleControllerById = function(req, res) {
    console.log(req.body);
    res.send(service.getVehicleControllerById(req.params.id));
};