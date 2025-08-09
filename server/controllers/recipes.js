const Recipe = require("../models/recipes");

//Index Route
module.exports.listRecipes = async (req, res) => {
    const recipes = await Recipe.find({});
    res.json(recipes);
};


//New Route
module.exports.addRecipes = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const newRecipe = new Recipe(req.body);
    newRecipe.image = { url, filename };
    await newRecipe.save();
    res.status(201).json({message:"Added new recipe sucessfully",newRecipe:newRecipe});
};

//Show Route
module.exports.showRecipe = async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
    };
    res.json({message:"Recipe found",foundRecipe:recipe});
}

//Edit route
module.exports.editRecipes = async (req, res) => {
    const { id } = req.params;
    
    const recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!recipe) {
        return res.status(404).json({ message: "Recipe Not found" })
    }
    res.json({message:"Edited recipe sucessfully",updatedRecipe:recipe})
};

//delete Route
module.exports.deleteRecipe = async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndDelete(id);
    if (!recipe) {
     return  res.status(404).json({ message: "Recipe not found" });
    }

    res.json({message:"Recipe deleted Sucessfully",deletedRecipe:recipe})
}