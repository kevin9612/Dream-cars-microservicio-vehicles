const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    brand: { type: String, require: true, max: 200 },
    model: { type: String, require: true, max: 200 },
    version: { type: String, require: true, max: 10 },
    year: { type: Date, require: true },
    num_wheels: { type: Number, require: true },
    num_plazas: { type: String, require: false, max: 10 },
    acceleration: { type: String, require: true }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);