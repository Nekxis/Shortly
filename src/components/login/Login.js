import React from 'react'
import "./Login.css"

function Login () {
    return (
        <div className="flex justify-center bg-black/30 absolute w-full h-screen y z-50">
            <div className="flex align-middle bg-white mt-28 w-2/5 h-3/5 max-w-sm rounded overflow-hidden shadow-lg">
                <div className="flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <h2 className="mt-2 text-center text-2xl font-extrabold text-gray-900">Sign in to your account</h2>
                        </div>
                        <form className="fix-margin space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="text-sm appearance-none rounded-none relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="text-sm appearance-none rounded-none relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            <div className="flex fix-margin items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-3 w-3 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-1 block small-font text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <p className="small-font font-medium ml-4 text-indigo-600 hover:text-indigo-500 cursor-pointer">
                                        Forgot your password?
                                    </p>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-1 px-3 border border-transparent medium-font font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
