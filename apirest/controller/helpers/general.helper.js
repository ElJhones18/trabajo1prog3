/** Encrypt password */
const CryptoJS = require("crypto-js")
const config = require("config")

exports.EncryptPassword = (password) => {
    let secretKey = config.get("secretKeys").cryptojs
    let EncryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString()
    return EncryptedPassword
}