const mongoose = require("mongoose")
const validator = require("mongoose-unique-validator")

const userSchema = new mongoose.Schema({
    code: {
        type: "String",
        required: true,
    },
    name: {
        type: "String",
        required: true       
    },
    lastname: {
        type: "String",
        required: true       
    },
    colFav: {
        type: "String",
        required: true,
    },
    telefono: {
        type: "String",
        required: true       
    },
    correo: {
        type: "String",
        required: true       
    },
    direccion: {
        type: "String",
        required: true,
    },
    ocupacion: {
        type: "String",
        required: true       
    },
    estadoCivil: {
        type: "String",
        required: true       
    },
    edad: {
        type: "String",
        required: true       
    }
})

// userSchema.plugin(validator)
module.exports = userSchema