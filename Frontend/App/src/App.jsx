// App.jsx

import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Home from './Components/Home'
import Login from './Components/Login'
import Registration from './Components/Registration'
import About from './Components/About'
import Recipe from './Components/Recipe'
import Cart from './Components/Cart'
import Form from './Components/Form'
import ViewRecipe from './Components/ViewRecipe'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/recipe',
    element: <Recipe />,
  },

  // SINGLE RECIPE PAGE
  {
    path: '/viewrecipe/:id',
    element: <ViewRecipe />,
  },

  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/form',
    element: <Form />
  }
]

const router = createBrowserRouter(routes)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App