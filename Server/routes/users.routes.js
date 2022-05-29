// import the controller
const User = require("../controllers/user.controllers")
// console.log(Note);

module.exports = (app) => {
    app.get("/api/users",  User.register)
 
}
