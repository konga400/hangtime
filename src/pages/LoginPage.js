import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
        <>
            <div className='relative flex flex-col items-center justify-center h-screen w-screen overflow-hidden'>
                <div className='absolute top-5 flex flex-col items-center justify-center'>
                    <Link to='/preferences'>
                        <img className='my-4' src='./images/logo.png' alt="Logo"></img>
                    </Link>
                    <h1 className=' text-gray-600 font-bold text-2xl drop-shadow'>Connect & Hangout</h1>
                    <h1 className='text-gray-600 text-xl drop-shadow'>Created by Jordan, Annie, & Spencer</h1>
                </div>
                <div className='absolute -bottom-36 flex flex-col items-center pt-20 rounded-full bg-purple-800 h-3/4 circle-container'>
                    <div className='w-screen flex flex-col items-center justify-center'>
                        <Link to='/preferences'>
                            <img className='my-4' src='./images/Facebook.png' alt="Facebook"></img>
                        </Link>
                        <Link to='/preferences'>
                            <img className='my-4' src='./images/Apple.png' alt="Apple"></img>
                        </Link>
                        <Link to='/preferences'>
                            <img className='my-4' src='./images/Google.png' alt="Google"></img>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
