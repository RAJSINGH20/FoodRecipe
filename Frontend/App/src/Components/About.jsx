import Navbar from './Skeleton/Nav';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  const navigate = useNavigate();

  const handlechange = () => {
    navigate('/');
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 overflow-hidden'>
      <Navbar />

      <div className='container mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12'>

        {/* Left Content */}
        <motion.div
          className='md:w-1/2 space-y-6'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className='text-5xl md:text-6xl font-extrabold text-orange-600 leading-tight'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to <span className='text-yellow-500'>Recipe Maker</span>
          </motion.h1>

          <motion.p
            className='text-gray-700 text-lg leading-relaxed'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Recipe Maker is your perfect food companion where you can
            explore delicious recipes from around the world. Discover
            easy cooking ideas, tasty dishes, and step-by-step meal
            preparation guides.
          </motion.p>

          <motion.p
            className='text-gray-600 text-base'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Whether you are a beginner or a food lover, Recipe Maker
            helps you create amazing meals with simple ingredients and
            quick cooking methods.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl text-lg shadow-xl transition-all duration-300'
            onClick={handlechange}
          >
            Explore Recipes
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className='md:w-1/2 flex justify-center'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop'
            alt='Delicious Food'
            className='rounded-3xl shadow-2xl w-full max-w-lg object-cover border-4 border-white'
            whileHover={{
              scale: 1.05,
              rotate: 1,
            }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>

      {/* Why Choose Section */}
      <div className='py-16 px-6 bg-white'>
        <motion.div
          className='container mx-auto text-center'
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl font-bold text-orange-500 mb-6'>
            Why Choose Recipe Maker?
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>

            {/* Card 1 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className='bg-orange-50 p-6 rounded-3xl shadow-lg'
            >
              <div className='text-5xl mb-4'>🍔</div>

              <h3 className='text-2xl font-semibold text-orange-600 mb-3'>
                Easy Recipes
              </h3>

              <p className='text-gray-600'>
                Find simple and beginner-friendly recipes for everyday cooking.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className='bg-orange-50 p-6 rounded-3xl shadow-lg'
            >
              <div className='text-5xl mb-4'>🥗</div>

              <h3 className='text-2xl font-semibold text-orange-600 mb-3'>
                Healthy Food
              </h3>

              <p className='text-gray-600'>
                Explore healthy and nutritious meal ideas for a better lifestyle.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className='bg-orange-50 p-6 rounded-3xl shadow-lg'
            >
              <div className='text-5xl mb-4'>⚡</div>

              <h3 className='text-2xl font-semibold text-orange-600 mb-3'>
                Fast Cooking
              </h3>

              <p className='text-gray-600'>
                Save time with quick cooking recipes and smart kitchen tips.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;