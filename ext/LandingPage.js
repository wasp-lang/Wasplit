import React from 'react'
import { Link } from "react-router-dom"
import waspLogo from './assets/waspLogo.png'

const LandingPage = () => {
    return (
        <div>
            <nav class="flex flex-row justify-between items-center bg-yellow-100 px-8 py-5">
                <span class='text-xl text-yellow-600 font-bold'>Wasplit</span>
                <span class="flex">
                  <Link to='login' className='mx-2 my-1 px-5 py-3 text-yellow-600 font-bold'>
                    Log in
                  </Link>
                  <Link to='signup' className='mx-2 my-1 px-5 py-3 bg-yellow-500 text-white rounded font-bold'>
                    Sign up
                  </Link>
                </span>
            </nav>

            <div class='container mx-auto px-8 pt-12'>

              <div class='flex'>
                <div class='w-5/12'>
                  <div class='flex flex-col justify-center h-full'>
                    <h1 class='text-4xl text-neutral-700 font-bold'>
                      Less stress when sharing expenses with Waspeteers.
                    </h1>
                    <div>
                      <p class='text-lg my-6'>
                        Keep track of your shared expenses and balances with your co-waspers and friends.
                      </p>
                      <Link to='signup' className='px-16 py-4 inline-block bg-neutral-800 text-white rounded font-bold'>
                        Sign up
                      </Link>
                    </div>
                  </div>
                </div>

                <div class='w-7/12'>
                  <div class='w-96 mx-auto'>
                    <img src={waspLogo} alt='wasp' />
                  </div>
                </div>
              </div>

            </div>

        </div>
    )
}

export default LandingPage
