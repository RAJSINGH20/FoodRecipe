import mongoose from "mongoose";

const recipieSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: [String],
        required: true
    }
}, {
    timestamps: true
});

const Recipe = mongoose.model('Recipe', recipieSchema);

export default Recipe;