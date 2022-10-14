import React from 'react'
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <div>
            <nav class="flex flex-row justify-between items-center bg-yellow-100">
                <span class='text-lg mx-1'>Wasplit</span>
                <span class="flex">
                  <Link to='signup' className='mx-2 my-1 p-2 bg-yellow-500 text-white rounded'>Sign up</Link>
                  <Link to='login' className='mx-2 my-1 p-2 bg-yellow-500 text-white rounded'>Log in</Link>
                </span>
            </nav>
            Welcome to Wasplit! This is the landing page where you can see what Wasplit is.
        </div>
    )
}

export default LandingPage
