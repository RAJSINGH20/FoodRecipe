// routes file

import express from "express";
import multer from "multer";

import {
    AddRecipe,
    getRecipe,
    getSingleRecipe,
    deleteRecipe
} from "../controller/recipe.controller.js";

import { isAuthenticated } from "../config/authMiddleware.js";

const router = express.Router();


// MULTER CONFIG
const storage = multer.diskStorage({})

const upload = multer({ storage })


// TEST ROUTE
router.get('/test', (req, res) => {
    res.status(200).send('✅ API Working');
});


// ADD RECIPE WITH IMAGE
router.post('/add',upload.single('img'),isAuthenticated,AddRecipe);
// GET RECIPES
router.get('/all',isAuthenticated, getRecipe);

router.get('/:id', getSingleRecipe);

router.post('/delete/:id', isAuthenticated, deleteRecipe);



export default router;