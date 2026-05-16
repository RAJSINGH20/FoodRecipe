import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import {
    FaBars,
    FaTimes,
    FaSignOutAlt,
    FaUtensils
} from 'react-icons/fa'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate()

    const location = useLocation()

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Recipe', path: '/recipe' },
        { name: 'Favourites', path: '/cart' },
    ]

    const handleLogout = () => {

        localStorage.removeItem('token')

        toast.success('Logout Successful 🚀', {
            position: 'top-right',
            autoClose: 2000,
            theme: 'dark',
        })

        setTimeout(() => {
            navigate('/login')
        }, 1500)
    }

    return (
        <>
            <ToastContainer />

            <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">

                {/* Glow Effects */}
                <div className="absolute top-0 left-10 w-40 h-40 bg-orange-500/20 blur-[100px] rounded-full"></div>
                <div className="absolute top-0 right-10 w-40 h-40 bg-pink-500/20 blur-[100px] rounded-full"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-10">

                    <div className="flex items-center justify-between h-20">

                        {/* LOGO */}
                        <Link
                            to="/"
                            className="flex items-center gap-3 group"
                        >

                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-500">

                                <FaUtensils className="text-white text-xl" />

                            </div>

                            <div>

                                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wide">
                                    Foodie
                                </h1>

                                <p className="text-[10px] tracking-[4px] text-gray-300 uppercase">
                                    Delicious Recipes
                                </p>

                            </div>

                        </Link>

                        {/* DESKTOP MENU */}
                        <div className="hidden md:flex items-center gap-5">

                            {navLinks.map((link) => {

                                const isActive =
                                    location.pathname === link.path

                                return (

                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`relative px-5 py-2 rounded-xl font-semibold overflow-hidden transition-all duration-500 group
                                        
                                        ${isActive
                                                ? 'text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg'
                                                : 'text-white hover:text-orange-300'
                                            }`}
                                    >

                                        <span className="relative z-10">
                                            {link.name}
                                        </span>

                                        {!isActive && (

                                            <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-xl opacity-20"></span>

                                        )}

                                    </Link>
                                )
                            })}

                            {/* LOGOUT BUTTON */}
                            <button
                                onClick={handleLogout}
                                className="ml-3 flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 text-white font-bold shadow-xl hover:scale-105 hover:shadow-pink-500/50 transition-all duration-500"
                            >

                                <FaSignOutAlt />

                                Logout

                            </button>

                        </div>

                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white"
                        >

                            {
                                isOpen
                                    ? <FaTimes size={28} />
                                    : <FaBars size={28} />
                            }

                        </button>

                    </div>

                </div>

                {/* MOBILE MENU */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-500
                    ${isOpen
                            ? 'max-h-[500px] opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                >

                    <div className="mx-4 mb-4 rounded-3xl bg-black/60 backdrop-blur-2xl border border-white/10 p-6 flex flex-col gap-5 shadow-2xl">

                        {navLinks.map((link) => {

                            const isActive =
                                location.pathname === link.path

                            return (

                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-5 py-4 rounded-2xl text-lg font-semibold transition-all duration-300
                                    
                                    ${isActive
                                            ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                                            : 'text-white hover:bg-white/10'
                                        }`}
                                >

                                    {link.name}

                                </Link>
                            )
                        })}

                        {/* MOBILE LOGOUT */}
                        <button
                            onClick={handleLogout}
                            className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 text-white font-bold shadow-xl"
                        >

                            <FaSignOutAlt />

                            Logout

                        </button>

                    </div>

                </div>

            </nav>
        </>
    )
}

export default Navbar