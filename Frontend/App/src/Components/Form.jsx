import { useState } from 'react'
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        image: '',
        title: '',
        description: '',
        ingredients: '',
        instructions: ''
    })

    const URL = import.meta.env.VITE_URI || 'http://localhost:2000'
    console.log(URL)

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            setLoading(true)

            const payload = {
                image: formData.image,
                title: formData.title,
                description: formData.description,

                ingredients: formData.ingredients
                    .split(',')
                    .map(item => item.trim()),

                instructions: formData.instructions
                    .split(',')
                    .map(item => item.trim())
            }

            const response = await axios.post(
                `${URL}/api/food/add`,
                payload
            )

            console.log(response.data)

            toast.success('Recipe Added Successfully 🍕')
            navigate('/recipe')

            setFormData({
                image: '',
                title: '',
                description: '',
                ingredients: '',
                instructions: ''
            })

        } catch (error) {

            console.log(error)

            toast.error('Failed to add recipe')

        } finally {

            setLoading(false)
        }
    }

    return (

        <div className='min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 flex items-center justify-center px-4 py-10'>

            <Toaster position='top-right' />

            <div className='w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 md:p-12'>

                <h1 className='text-4xl font-extrabold text-orange-500 text-center mb-3'>
                    Add New Recipe 🍽️
                </h1>

                <p className='text-center text-gray-500 mb-10'>
                    Share your delicious recipe with everyone
                </p>

                <form
                    onSubmit={handleSubmit}
                    className='space-y-6'
                >

                    {/* IMAGE URL */}
                    <div>

                        <label className='block mb-2 text-lg font-semibold text-gray-700'>
                            Recipe Image URL
                        </label>

                        <input
                            type='text'
                            name='image'
                            value={formData.image}
                            onChange={handleChange}
                            placeholder='Paste image URL'
                            className='w-full border border-orange-200 focus:border-orange-500 outline-none rounded-2xl px-5 py-4'
                            required
                        />

                    </div>

                    {/* TITLE */}
                    <div>

                        <label className='block mb-2 text-lg font-semibold text-gray-700'>
                            Recipe Title
                        </label>

                        <input
                            type='text'
                            name='title'
                            value={formData.title}
                            onChange={handleChange}
                            placeholder='Enter recipe title'
                            className='w-full border border-orange-200 focus:border-orange-500 outline-none rounded-2xl px-5 py-4'
                            required
                        />

                    </div>

                    {/* DESCRIPTION */}
                    <div>

                        <label className='block mb-2 text-lg font-semibold text-gray-700'>
                            Description
                        </label>

                        <textarea
                            name='description'
                            value={formData.description}
                            onChange={handleChange}
                            placeholder='Write short description'
                            rows='4'
                            className='w-full border border-orange-200 focus:border-orange-500 outline-none rounded-2xl px-5 py-4 resize-none'
                            required
                        />

                    </div>

                    {/* INGREDIENTS */}
                    <div>

                        <label className='block mb-2 text-lg font-semibold text-gray-700'>
                            Ingredients
                        </label>

                        <textarea
                            name='ingredients'
                            value={formData.ingredients}
                            onChange={handleChange}
                            placeholder='Separate ingredients with comma'
                            rows='4'
                            className='w-full border border-orange-200 focus:border-orange-500 outline-none rounded-2xl px-5 py-4 resize-none'
                            required
                        />

                    </div>

                    {/* INSTRUCTIONS */}
                    <div>

                        <label className='block mb-2 text-lg font-semibold text-gray-700'>
                            Instructions
                        </label>

                        <textarea
                            name='instructions'
                            value={formData.instructions}
                            onChange={handleChange}
                            placeholder='Separate instructions with comma'
                            rows='4'
                            className='w-full border border-orange-200 focus:border-orange-500 outline-none rounded-2xl px-5 py-4 resize-none'
                            required
                        />

                    </div>

                    {/* BUTTON */}
                    <button
                        type='submit'
                        disabled={loading}
                        className='w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl text-lg font-bold transition-all duration-300 shadow-lg'
                    >
                        {
                            loading
                                ? 'Adding Recipe...'
                                : 'Add Recipe'
                        }
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Form