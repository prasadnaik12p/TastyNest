const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        require: true
    },
    image: {
        url: String,
        filename: String
    },
    ingredients: {
        name: String,
        quantity: String
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    preparationTime: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    category: {
        type:String
    }
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;