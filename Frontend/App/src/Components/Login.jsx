// LOGIN.jsx

import axios from 'axios'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useAuth } from '../context/useAuth'

const Login = () => {
  const URL = import.meta.env.VITE_URI || 'http://localhost:2000'
    console.log(URL)

  const navigate = useNavigate()

  const { login } = useAuth()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      const response = await axios.post(
        `${URL}/api/user/login`,
        formData
      )

      toast.success('Login Successful 🚀')

      console.log(response.data)

      // SAVE USER
      login(response.data.user)

      // SAVE TOKEN
      localStorage.setItem(
        'token',
        response.data.token
      )

      setTimeout(() => {
        navigate('/')
      }, 1500)

    } catch (error) {

      console.log(error)

      toast.error(
        error.response?.data?.message || 'Login Failed ❌'
      )

    } finally {

      setLoading(false)

    }
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="min-h-screen flex items-center justify-center bg-black">

        <>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            theme="dark"
          />

          <div className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center px-4">

            <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-blue-500 rounded-full blur-[120px] opacity-30"></div>

            <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-purple-500 rounded-full blur-[120px] opacity-30"></div>

            <div className="absolute top-[40%] left-[40%] w-[250px] h-[250px] bg-pink-500 rounded-full blur-[120px] opacity-20"></div>

            <div className="relative z-10 w-full max-w-6xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

              <div className="hidden md:block h-full">

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                  alt="login"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="flex items-center justify-center p-8 md:p-16">

                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-md"
                >

                  <h1 className="text-4xl font-bold text-white mb-3">
                    Welcome Back
                  </h1>

                  <p className="text-zinc-300 mb-10">
                    Login to continue your journey
                  </p>

                  <div className="mb-6">

                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-zinc-300 py-4 px-5 rounded-2xl outline-none focus:border-blue-400 backdrop-blur-md"
                    />

                  </div>

                  <div className="mb-6">

                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-zinc-300 py-4 px-5 rounded-2xl outline-none focus:border-blue-400 backdrop-blur-md"
                    />

                  </div>

                  <div className="flex items-center justify-between mb-8 text-zinc-300 text-sm">

                    <label className="flex items-center gap-2">

                      <input
                        type="checkbox"
                        className="accent-blue-500"
                      />

                      Remember me

                    </label>

                    <button
                      type="button"
                      className="hover:text-blue-400 transition"
                    >
                      Forgot Password?
                    </button>

                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-[1.02] text-white font-semibold py-4 rounded-2xl transition duration-300 shadow-lg"
                  >
                    {loading ? 'Loading...' : 'LOGIN'}
                  </button>

                  <p className="text-center text-zinc-300 mt-8">

                    Don&apos;t have an account?{' '}

                    <span
                      onClick={() => navigate('/registration')}
                      className="text-blue-400 cursor-pointer hover:underline font-medium"
                    >
                      Register
                    </span>

                  </p>

                </form>

              </div>

            </div>

          </div>
        </>

      </div>
    </>
  )
}

export default Login