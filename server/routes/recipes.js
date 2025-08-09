const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const multer = require("multer");
const recipe = require("../controllers/recipes.js")
const { storage } = require("../config/cloudConfig.js");
const upload = multer({ storage });

router.get("/", wrapAsync(recipe.listRecipes));
router.post("/new",upload.single('image'),wrapAsync(recipe.addRecipes));
router.get("/:id", wrapAsync(recipe.showRecipe));
router.put("/edit/:id", wrapAsync(recipe.editRecipes));
router.delete("/:id", wrapAsync(recipe.deleteRecipe));


module.exports = router;