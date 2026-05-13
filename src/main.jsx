import React from 'react'
import ReactDOM from 'react-dom/client'

import '../src/Styles/global.css'

import AppRoutes from './routes/AppRoutes'

import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(
    document.getElementById('root')
).render(

    <>

        <Toaster

            position="top-right"

            toastOptions={{

                duration: 3000,

                style: {
                    background: '#6C3DF4',
                    color: '#fff',

                    borderRadius: '14px',

                    padding: '16px',

                    fontSize: '14px',

                    fontWeight: '500'
                },

                success: {

                    style: {
                        border:
                            '2px solid #00c853'
                    },

                    iconTheme: {
                        primary: '#00c853',
                        secondary: '#fff'
                    }
                },

                error: {

                    style: {
                        border:
                            '2px solid #ff5252'
                    },

                    iconTheme: {
                        primary: '#ff5252',
                        secondary: '#fff'
                    }
                }

            }}

        />

        <AppRoutes />

    </>

)