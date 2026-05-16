import React from 'react';
import Navbar from './Skeleton/Nav';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 overflow-hidden'>
      <Navbar />

      {/* Hero Section */}
      <div className='container mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12'>

        {/* Left Content */}
        <motion.div
          className='md:w-1/2 space-y-6'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-5xl md:text-7xl font-extrabold text-orange-600 leading-tight'>
            Discover <span className='text-yellow-500'>Delicious</span> Recipes
          </h1>

          <p className='text-gray-700 text-lg leading-relaxed'>
            Explore thousands of tasty recipes from around the world.
            Cook your favorite meals with simple ingredients and easy
            step-by-step instructions.
          </p>

          <div className='flex gap-4 flex-wrap'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl text-lg shadow-xl'
              onClick={() => navigate('/recipe')}
            >
              Explore Recipes
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='bg-white text-orange-500 border-2 border-orange-500 px-8 py-3 rounded-2xl text-lg shadow-lg'
              onClick={() => navigate('/about')}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className='md:w-1/2 flex justify-center'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop'
            alt='Food'
            className='rounded-3xl shadow-2xl w-full max-w-xl object-cover border-4 border-white'
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>

      {/* Categories */}
      <div className='py-16 px-6 bg-white'>
        <div className='container mx-auto text-center'>
          <motion.h2
            className='text-4xl font-bold text-orange-500 mb-12'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Popular Categories
          </motion.h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>

            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className='bg-orange-50 p-6 rounded-3xl shadow-lg'
            >
              <div className='text-6xl mb-4'>🍕</div>
              <h3 className='text-2xl font-bold text-orange-600'>
                Pizza
              </h3>
              <p className='text-gray-600 mt-2'>
                Cheesy and delicious pizza recipes.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className='bg-orange-50 p-6 rounded-3xl shadow-lg'
            >
              <div className='text-6xl mb-4'>🍔</div>
              <h3 className='text-2xl font-bold text-orange-600'>
                Burgers
              </h3>
              <p className='text-gray-600 mt-2'>
                Juicy burgers with amazing flavors.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className='bg-orange-50 p-6 rounded-3xl shadow-lg'
            >
              <div className='text-6xl mb-4'>🍜</div>
              <h3 className='text-2xl font-bold text-orange-600'>
                Noodles
              </h3>
              <p className='text-gray-600 mt-2'>
                Tasty noodle recipes for every mood.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className='bg-orange-50 p-6 rounded-3xl shadow-lg'
            >
              <div className='text-6xl mb-4'>🍰</div>
              <h3 className='text-2xl font-bold text-orange-600'>
                Desserts
              </h3>
              <p className='text-gray-600 mt-2'>
                Sweet desserts and cakes to enjoy.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className='py-16 px-6'>
        <div className='container mx-auto text-center'>
          <motion.h2
            className='text-4xl font-bold text-orange-600 mb-12'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Why Choose Recipe Maker?
          </motion.h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-white p-8 rounded-3xl shadow-xl'
            >
              <div className='text-5xl mb-4'>👨‍🍳</div>
              <h3 className='text-2xl font-bold text-orange-500'>
                Easy Cooking
              </h3>
              <p className='text-gray-600 mt-3'>
                Step-by-step cooking instructions for beginners.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-white p-8 rounded-3xl shadow-xl'
            >
              <div className='text-5xl mb-4'>🥗</div>
              <h3 className='text-2xl font-bold text-orange-500'>
                Healthy Meals
              </h3>
              <p className='text-gray-600 mt-3'>
                Nutritious recipes for a healthy lifestyle.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-white p-8 rounded-3xl shadow-xl'
            >
              <div className='text-5xl mb-4'>⚡</div>
              <h3 className='text-2xl font-bold text-orange-500'>
                Quick Recipes
              </h3>
              <p className='text-gray-600 mt-3'>
                Save time with fast and easy meals.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;