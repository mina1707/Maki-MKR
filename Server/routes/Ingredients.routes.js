// import the controller
const Ingredient = require("../controllers/Ingredients.controllers")
// console.log(Note);

module.exports = (app) => {
    app.get("/api/ingredients",  Ingredient.findAll)
    app.post("/api/ingredients", Ingredient.create)
    app.get("/api/ingredients/:id", Ingredient.findOne)
    app.put("/apiingredients/:id", Ingredient.update)
    app.delete("/api/ingredients/:id", Ingredient.delete)
}
