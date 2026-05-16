import React, { useEffect, useState } from 'react'
import Navbar from './Skeleton/Nav'
import { motion } from 'framer-motion'
import { Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const [favorites, setFavorites] = useState([])

    const navigate = useNavigate()

    // LOAD FAVORITES
    useEffect(() => {

        const savedRecipes =
            JSON.parse(localStorage.getItem('favoriteRecipes')) || []

        setFavorites(savedRecipes)

    }, [])

    // REMOVE FAVORITE
    const removeFavorite = (id) => {

        const updatedRecipes = favorites.filter(
            (item) => item._id !== id
        )

        setFavorites(updatedRecipes)

        localStorage.setItem(
            'favoriteRecipes',
            JSON.stringify(updatedRecipes)
        )
    }

    // VIEW RECIPE
    const handleViewRecipe = (recipe) => {

        navigate(`/viewrecipe/${recipe._id}`, {
            state: { recipe }
        })
    }

    return (

        <div className='min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100'>

            <Navbar />

            <div className='max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-16'>

                {/* TITLE */}
                <div className='mb-14 text-center'>

                    <h1 className='text-5xl font-extrabold text-orange-500'>
                        Favorite Recipes ❤️
                    </h1>

                    <p className='text-gray-600 mt-4 text-lg'>
                        Your saved delicious recipes
                    </p>

                </div>

                {/* RECIPES */}
                {favorites.length > 0 ? (

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>

                        {favorites.map((recipe) => (

                            <motion.div
                                key={recipe._id}
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                }}
                                transition={{ duration: 0.3 }}
                                className='bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'
                            >

                                {/* IMAGE */}
                                <div className='overflow-hidden'>

                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                        className='w-full h-60 object-cover hover:scale-110 transition-all duration-500'
                                    />

                                </div>

                                {/* CONTENT */}
                                <div className='p-5'>

                                    <div className='flex justify-between items-start gap-3'>

                                        <h2 className='text-2xl font-bold text-orange-500'>
                                            {recipe.title}
                                        </h2>

                                        <button
                                            onClick={() => removeFavorite(recipe._id)}
                                            className='text-red-500 hover:scale-110 transition'
                                        >
                                            <Trash2 size={24} />
                                        </button>

                                    </div>

                                    <p className='text-gray-600 mt-3 line-clamp-3'>
                                        {recipe.description}
                                    </p>

                                    <button
                                        onClick={() => handleViewRecipe(recipe)}
                                        className='mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-all duration-300'
                                    >
                                        View Recipe
                                    </button>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                ) : (

                    // EMPTY STATE
                    <div className='flex flex-col items-center justify-center min-h-[60vh] text-center'>

                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                            }}
                            className='text-8xl'
                        >
                            ❤️
                        </motion.div>

                        <h1 className='text-5xl font-extrabold text-orange-500 mt-6'>
                            No Favorite Recipes
                        </h1>

                        <p className='text-gray-600 text-xl mt-4'>
                            Save your favorite foods here 🍕
                        </p>

                    </div>

                )}

            </div>

        </div>
    )
}

export default Cart