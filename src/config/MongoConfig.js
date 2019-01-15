const mongoose = require('mongoose');

exports.getMongoApp = function() {
        return mongoose;
    },

    exports.getMongoUrlDatabaseConection = function() {
        return 'mongodb://localhost/VehicleDreamcars';
    }