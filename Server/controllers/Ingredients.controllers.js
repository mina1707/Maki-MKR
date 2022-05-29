// controller is for CRUD
// import the model to use queries 
const Ingredient = require("../models/ingredients.models");

module.exports = {

    // READ ALL
    findAll: (req, res) => {
        Ingredient.find()
            .then( (ingredients) => {
                // 🆘 what we send back to the client (React) is what we will receive in axios's .then(res => res.data)
                console.log(ingredients);
                // return res.json({all_notes: notes, status: "ok"})
                // if we return just the object, in this case, it's an array
                return res.json(ingredients)
            })
            .catch( err => res.json(err))
    },

    // CREATE
    create: (req, res) => {
        // pass in body data
        console.log(req.body); // if it's undefined check middleware
        Ingredient.create(req.body)
            .then( newIngredient => {
                console.log("DB Success created new Ingredient");
                return res.json(newIngredient)
            })
            .catch(err => {
                console.log("DB ERROR crating ingredient");
                // 🆘 return to the client a 400 status to trigger React's .catch()
                return res.status(400).json(err)
            })
    },

    // READ ONE
    findOne: (req, res) => {
        console.log(req.params);
        // Note.findOne({_id : req.params.id})
        Ingredient.findById(req.params.id)
            .then(ingredient => res.json(ingredient))
            .catch(err => res.json(err))
    },

    // UPDATE
    update: (req, res) => {
        console.log("UPDATE id:", req.params.id); // the id
        console.log("UPDATE OBJ:", req.body); // the {object}
        // Note.findOneAndUpdate({_id: req.req.params.id})
        Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then(updatedIngredient => res.json(updatedIngredient))
            .catch(err => res.json(err))
    },

    // DELETE
    delete: (req, res) => {
        console.log(req.params.id);
        Ingredient.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }

}