import React from 'react'
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <div>
            <nav>
                <Link to='login' className='mx-2 my-1 p-2 bg-blue-600 text-white'>Log in</Link>
                <Link to='signup' className='mx-2 my-1 p-2 bg-blue-600 text-white'>Sign up</Link>
            </nav>
            Welcome to Wasplit!
        </div>
    )
}

export default LandingPage