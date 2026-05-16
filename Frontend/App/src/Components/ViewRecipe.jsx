import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from './Skeleton/Nav'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { toast } from 'react-hot-toast'
import axios from 'axios'

const ViewRecipe = () => {

    const location = useLocation()

    const navigate = useNavigate()

    const recipe = location.state?.recipe

    const [isFavorite, setIsFavorite] = useState(false)

    // CHECK FAVORITE
    useEffect(() => {

        const favorites =
            JSON.parse(localStorage.getItem('favoriteRecipes')) || []

        const exists = favorites.find(
            (item) => item._id === recipe?._id
        )

        if (exists) {

            setIsFavorite(true)
        }

    }, [recipe])

    // ADD TO FAVORITE
    const handleFavorite = () => {

        const favorites =
            JSON.parse(localStorage.getItem('favoriteRecipes')) || []

        // REMOVE FAVORITE
        if (isFavorite) {

            const updatedFavorites = favorites.filter(
                (item) => item._id !== recipe._id
            )

            localStorage.setItem(
                'favoriteRecipes',
                JSON.stringify(updatedFavorites)
            )

            setIsFavorite(false)

            toast.error('Removed from Favorites 💔')

        } else {

            // ADD FAVORITE
            favorites.push(recipe)

            localStorage.setItem(
                'favoriteRecipes',
                JSON.stringify(favorites)
            )

            setIsFavorite(true)

            toast.success('Added to Favorites ❤️')
        }
    }

    // DELETE RECIPE
    const handleDelete = async () => {
        const recipeid = recipe._id

        try {

            await axios.post(
                `http://localhost:2000/api/food/delete/${recipeid}/`
            )

            // REMOVE FROM FAVORITES
            const favorites =
                JSON.parse(localStorage.getItem('favoriteRecipes')) || []

            const updatedFavorites = favorites.filter(
                (item) => item._id !== recipe._id
            )

            localStorage.setItem(
                'favoriteRecipes',
                JSON.stringify(updatedFavorites)
            )

            toast.success('Recipe Deleted Successfully 🗑️')

            navigate('/recipe')

        } catch (error) {

            console.log(error)

            toast.error('Failed to delete recipe')
        }
    }

    if (!recipe) {

        return (

            <div className='min-h-screen bg-orange-50'>

                <Navbar />

                <div className='flex items-center justify-center min-h-screen'>

                    <h1 className='text-4xl font-bold text-orange-500'>
                        Recipe Not Found 🍽️
                    </h1>

                </div>

            </div>
        )
    }

    return (

        <div className='min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100'>

            <Navbar />

            <div className='max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-16'>

                {/* TOP SECTION */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>

                    {/* IMAGE */}
                    <div className='overflow-hidden rounded-3xl shadow-2xl'>

                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className='w-full h-[450px] object-cover hover:scale-105 transition-all duration-500'
                        />

                    </div>

                    {/* CONTENT */}
                    <div>

                        <div className='flex items-center justify-between gap-5 mb-6'>

                            <h1 className='text-5xl font-extrabold text-orange-500'>
                                {recipe.title}
                            </h1>

                            {/* FAVORITE BUTTON */}
                            <motion.button
                                whileTap={{ scale: 0.7 }}
                                whileHover={{ scale: 1.1 }}
                                onClick={handleFavorite}
                                className={`p-4 rounded-full shadow-xl transition-all duration-300 ${
                                    isFavorite
                                        ? 'bg-red-500 text-white'
                                        : 'bg-white text-gray-500'
                                }`}
                            >

                                <Heart
                                    size={30}
                                    fill={isFavorite ? 'white' : 'none'}
                                />

                            </motion.button>

                        </div>

                        <p className='text-gray-700 text-lg leading-8'>
                            {recipe.description}
                        </p>

                        {/* BUTTONS */}
                        <div className='flex items-center gap-4 mt-8'>

                            {/* DELETE BUTTON */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleDelete}
                                className='bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl transition-all duration-300'
                            >
                                Delete Recipe 🗑️
                            </motion.button>

                        </div>

                    </div>

                </div>

                {/* INGREDIENTS */}
                <div className='mt-16 bg-white rounded-3xl shadow-xl p-8'>

                    <h2 className='text-4xl font-bold text-orange-500 mb-8'>
                        Ingredients 🥘
                    </h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

                        {recipe.ingredients?.map((item, index) => (

                            <div
                                key={index}
                                className='bg-orange-100 text-orange-700 px-5 py-4 rounded-2xl font-semibold'
                            >
                                ✅ {item}
                            </div>

                        ))}

                    </div>

                </div>

                {/* INSTRUCTIONS */}
                <div className='mt-16 bg-white rounded-3xl shadow-xl p-8'>

                    <h2 className='text-4xl font-bold text-orange-500 mb-8'>
                        Instructions 👨‍🍳
                    </h2>

                    <div className='space-y-5'>

                        {recipe.instructions?.map((step, index) => (

                            <div
                                key={index}
                                className='flex gap-4 bg-orange-50 p-5 rounded-2xl'
                            >

                                <div className='min-w-[45px] h-[45px] bg-orange-500 text-white flex items-center justify-center rounded-full font-bold text-lg'>
                                    {index + 1}
                                </div>

                                <p className='text-gray-700 text-lg leading-7'>
                                    {step}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewRecipe