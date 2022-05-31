const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name must be present"],
    
    },
    price: {
        type: Number,
        required: [true, "price must be present"],
    },
    imgURL: {
        type: String,
        required: [true,"image is required"]
    }

    
}, {timestamps:true})




// crete the schema and export it
const Ingredient = mongoose.model("Ingredient", IngredientSchema);
module.exports = Ingredient;