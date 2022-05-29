const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "maki_makr_db";

// ---- middleware ----
app.use(cors(), express.json(), express.urlencoded({extended:true}))
// --------------------

// database connection
require("./config/mongoose.config")(DB);

// connect the routes
require("./routes/Ingredients.routes")(app)


// start the server
app.listen(PORT, () => console.log(`✨✨✨✨✨✨✨✨✨ server up on port: ${PORT} ✨✨✨✨✨✨✨✨✨✨✨`))