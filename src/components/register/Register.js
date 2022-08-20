import React from 'react'
import "./Register.css"

function Register ({switchRegister}) {
    return (
        <div className="flex justify-center bg-black/30 absolute w-full h-screen y z-50">
            <div className="flex self-center justify-center bg-white w-1/3 h-3/5 rounded overflow-hidden shadow-lg">
                <div className="flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <h2 className="mt-2 text-center text-5xl font-extrabold text-gray-900">Create new account!</h2>
                        </div>
                        <form className="fix-margin space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="name" className="sr-only">
                                        Name
                                    </label>
                                    <input
                                        id="Name"
                                        name="name"
                                        type="name"
                                        autoComplete="name"
                                        required
                                        className="text-lg appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-the-blue-focused focus:border-the-blue-focused focus:z-10"
                                        placeholder="Name"
                                    />
                                </div>
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
                                        className="text-lg appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-the-blue-focused focus:border-the-blue-focused focus:z-10"
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
                                        className="text-lg appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-the-blue-focused focus:border-the-blue-focused focus:z-10"
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
                                        className="h-5 w-5 text-the-blue-focused focus:ring-the-blue-focused border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-4 block  text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <p className="ml-4 text-the-blue hover:text-the-blue-hover cursor-pointer">
                                        You already have an account?
                                    </p>
                                </div>
                            </div>

                            <div className={"flex justify-center"}>
                                <button
                                    onClick={() => switchRegister(false)}
                                    type="submit"
                                    className="group relative w-4/5 flex justify-center py-2 px-3 border border-transparent text-2xl rounded-md text-white bg-the-blue hover:bg-the-blue-focused focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-the-blue-focused"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
