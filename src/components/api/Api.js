import React from "react";
import  "./Api.css";

function Api (){
    return (
        <div className={"background w-4/5 h-1/6 flex px-8 py-4 justify-around rounded-lg self-center bg-the-purple bg absolute -top-20"}>
            <input
                name="text"
                type="text"
                autoComplete="text"
                className="flex self-center text-lg appearance-none rounded-none relative block w-4/5 h-12 px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-the-blue-focused focus:border-the-blue-focused focus:z-10"
                placeholder="Shorten a link here..."
            />
            <button className={"flex blue-button rounded-md self-center h-12 w-1/6 border border-transparent text-white bg-the-blue hover:bg-the-blue-focused focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-the-blue-focused"}>
                <p className={'self-center'}>Shorten It!</p>
            </button>
        </div>
    )
}

export default Api;
