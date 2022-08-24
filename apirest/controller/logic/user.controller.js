const userDto = require("../../model/dto/user.dto")
const config = require("config")
const helper = require("../helpers/general.helper")

exports.createUser = (req, res, next) => {
    let usr = {
        code: req.body.code,
        name: req.body.name,
        lastname: req.body.lastname,
        colFav: req.body.colFav,
        telefono: req.body.telefono,
        correo: req.body.correo,
        direccion: req.body.direccion,
        ocupacion: req.body.ocupacion,
        estadoCivil: req.body.estadoCivil,
        edad: req.body.edad
    }
    userDto.create(usr, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(201).json(
            {
                info: data
            }
        )
    })
}

exports.updateUser = (req, res, next) => {
    let usr = {
        code: req.body.code,
        name: req.body.name,
        lastname: req.body.lastname,
        colFav: req.body.colFav,
        telefono: req.body.telefono,
        correo: req.body.correo,
        direccion: req.body.direccion,
        ocupacion: req.body.ocupacion,
        estadoCivil: req.body.estadoCivil,
        edad: req.body.edad
    }
    userDto.update({ _id: req.body.id }, usr, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }

        res.status(201).json(
            {
                info: data
            }
        )

    })
}

exports.getAll = (req, res, next) => {

    userDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }

        res.status(200).json(
            {
                info: data
            }
        )

    })
}

exports.getByCode = (req, res, next) => {

    userDto.getByCode({ code: req.params.code }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }

        res.status(200).json(
            {
                info: data
            }
        )

    })
}

exports.deleteUser = () => {
    userDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }

        res.status(204).json()

    })
}