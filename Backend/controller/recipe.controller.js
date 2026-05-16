 import Recipe from "../models/recipe.model.js";
    export const AddRecipe = async (req, res) => {

        try {

            const {
                title,
                description,
                ingredients,
                instructions
            } = req.body;

            // FOR JSON REQUEST
            const image = req.body.image;

            console.log(image)

            // VALIDATION
            if (
                !title ||
                !description ||
                !ingredients ||
                !instructions ||
                !image
            ) {
                return res.status(400).json({
                    success: false,
                    message: 'All fields are required'
                });
            }

            // CREATE RECIPE
            const newRecipe = new Recipe({
                image,
                title,
                description,
                ingredients,
                instructions
            });

            // SAVE
            await newRecipe.save();

            // RESPONSE
            return res.status(201).json({
                success: true,
                message: 'Recipe added successfully',
                recipe: newRecipe
            });

        } catch (error) {

            console.log(error);

            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

export const getRecipe = async (req, res) => {

    try {

        const recipes = await Recipe.find();

        return res.status(200).json({
            success: true,
            recipes
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getSingleRecipe = async (req, res) => {

    try {

        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {

            return res.status(404).json({
                success: false,
                message: 'Recipe not found'
            });
        }

        return res.status(200).json({
            success: true,
            recipe
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


// recipe.controller.js

export const deleteRecipe = async (req, res) => {

    try {

        const deletedRecipe = await Recipe.findByIdAndDelete(
            req.params.id
        )
        console.log(deleteRecipe,"recipe deleted sucessfully")

        if (!deletedRecipe) {

            return res.status(404).json({
                success: false,
                message: 'Recipe not found'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Recipe deleted successfully'
        })

    } catch (error) {

        console.log(error)

        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}