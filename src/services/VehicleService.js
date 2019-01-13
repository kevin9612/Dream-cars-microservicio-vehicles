var Vehicle = require('../model/Vehicle');

exports.helloWordService = function(bodyRequest) {
    return 'Hello Word';
}

exports.addVehicleService = function(bodyRequest) {
    const vehicle = new Vehicle(bodyRequest);
    vehicle.save(function(err) {
        if (err) {
            return 'Error a la hora de guardar un registro ' + err;
        }
    })

    return 'Registro guardado exitosamente';
}


exports.updateVehicleService = function(bodyRequest, id) {
    const vehicle = Vehicle.findById(id);
    vehicle.update({ _id: id }, bodyRequest, function(err) {
        if (err) {
            return 'Error a la hora de editar el registro ' + err;
        }
    })

    return 'Registro editado exitosamente';
}

exports.deleteVehicleService = function(id) {
    const vehicle = Vehicle.findById(id);
    vehicle.remove({ _id: id }, function(err) {
        if (err) {
            return 'Error a la hora de editar el registro ' + err;
        }
    })

    return 'Registro editado exitosamente';
}

exports.getVehicleControllerById = function(id) {
    Vehicle.findById(id, function(err, vehicle) {
        if (err) return 'Error a la hora de consultar un vehiculo por id';
        return vehicle;
    })
}