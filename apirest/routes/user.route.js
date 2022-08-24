const controller = require("../controller/logic/user.controller")


module.exports = (app) => {
    app.get("/user", (req, res, next) => {
        controller.getAll(req, res, next)
    })

    app.get("/user/bycode/:code", (req, res, next) => {
        controller.getByCode(req, res, next)
    })
    
    app.post("/user", (req, res, next) => {
        controller.createUser(req, res, next)
    })
        
    app.put("/user", (req, res, next) => {
        controller.updateUser(req, res, next)
    })
    
    app.delete("/user", (req, res, next) => {
        controller.deleteUser(req, res, next)
    })
} 