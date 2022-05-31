const Payment_User =  require("../models/Payment_User.models.js");

module.exports ={


    // READ ALL
    findAll: (req, res) => {
        Payment_User.find()
            .then( (pirates) => {
                console.log(pirates);
                return res.json(pirates)
            })
            .catch( err => res.json(err))
    },
     // CREATE
     create: (req, res) => {
        // pass in body data
        console.log(req.body); // if it's undefined check middleware
        Payment_User.create(req.body)
            .then( newIngredient => {
                console.log("DB Success created new User");
                return res.json(newIngredient)
            })
            .catch(err => {
                console.log("DB ERROR creating User");
                // 🆘 return to the client a 400 status to trigger React's .catch()
                return res.status(400).json(err)
            })
    },
}