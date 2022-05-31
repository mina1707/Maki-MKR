const Payment_User = require("../controllers/Payment_User.controllers.js");

module.exports = (app) => {

    app.get("/api/users", Payment_User.findAll)
    app.post("/api/users", Payment_User.create)
    
    
}