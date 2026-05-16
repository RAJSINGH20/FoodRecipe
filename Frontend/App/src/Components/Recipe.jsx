// Recipe.jsx

import { useEffect, useState } from 'react'
import Navbar from './Skeleton/Nav.jsx'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import API from '../utils/api'
import { useAuth } from '../context/useAuth.jsx'
import { toast } from 'react-hot-toast'

const Recipe = () => {
    const URL = import.meta.env.VITE_URI || 'http://localhost:2000'
    console.log(URL)
    const navigate = useNavigate()

    const { user } = useAuth()

    const [recipes, Setrecipes] = useState([])

    const [loading, setLoading] = useState(true)

    // FETCH RECIPES
    useEffect(() => {

        const fetchRecipes = async () => {

            try {

                const response = await API.get(
                    `${URL}/api/food/all`
                )

                console.log(response.data.recipes)

                Setrecipes(response.data.recipes || [])

            } catch (error) {

                console.log(error)

                toast.error('Failed to fetch recipes')

            } finally {

                setLoading(false)
            }
        }

        fetchRecipes()

    }, [])

    // ADD RECIPE BUTTON
    const handleClick = () => {

        if (!user) {

            toast.error('Please Login to add recipe!')

            navigate('/login')

            return
        }

        navigate('/form')
    }

    // VIEW SINGLE RECIPE
    const handleViewRecipe = async (id) => {

        try {

            const response = await API.get(
                `${URL}/api/food/${id}`
            )

            const selectedRecipe = response.data.recipe

            console.log(selectedRecipe)

            navigate(`/viewrecipe/${id}`, {
                state: { recipe: selectedRecipe }
            })

        } catch (error) {

            console.log(error)

            toast.error('Failed to fetch recipe')
        }
    }

    return (

        <div className='min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100'>

            <Navbar />

            <div className='max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-16'>

                <div className='flex flex-col md:flex-row justify-between items-center gap-6 mb-14'>

                    <div>

                        <h1 className='text-5xl font-extrabold text-orange-500'>
                            All Recipes
                        </h1>

                        <p className='text-gray-600 mt-3 text-lg'>
                            Discover delicious recipes made with love ❤️
                        </p>

                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleClick}
                        className='bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg transition-all duration-300'
                    >
                        + Add Your Recipe
                    </motion.button>

                </div>

                {loading ? (

                    <div className='text-center text-3xl font-bold text-orange-500'>
                        Loading...
                    </div>

                ) : recipes?.length > 0 ? (

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>

                        {recipes.map((recipe) => (

                            <motion.div
                                key={recipe._id}
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                }}
                                transition={{ duration: 0.3 }}
                                className='bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'
                            >

                                <div className='overflow-hidden'>

                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                        className='w-full h-60 object-cover hover:scale-110 transition-all duration-500'
                                    />

                                </div>

                                <div className='p-5'>

                                    <h2 className='text-2xl font-bold text-orange-500'>
                                        {recipe.title}
                                    </h2>

                                    <p className='text-gray-600 mt-3 line-clamp-3'>
                                        {recipe.description}
                                    </p>

                                    <button
                                        onClick={() => handleViewRecipe(recipe._id)}
                                        className='mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-all duration-300'
                                    >
                                        View Recipe
                                    </button>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                ) : (

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
                            🍽️
                        </motion.div>

                        <h1 className='text-5xl font-extrabold text-orange-500 mt-6'>
                            No Recipes Found
                        </h1>

                        <p className='text-gray-600 text-xl mt-4'>
                            Please add your delicious recipe 🍕
                        </p>

                    </div>

                )}

            </div>

        </div>
    )
}

export default Recipe