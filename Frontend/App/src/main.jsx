// main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/useAuth.jsx'
import { Helmet } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Helmet>
        <AuthProvider>

            <App />

        </AuthProvider>
    </Helmet>

)