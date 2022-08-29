import React from "react";
import "./PreFooter.css"

function PreFooter ({switchRegister}) {
    return(
        <div className={'background w-full h-64 flex flex-col px-8 py-4 justify-center  self-center bg-the-purple text-white'}>
            <p className={'text-4xl font-bold flex self-center m-0'}>Boost your links today!</p>
            <button onClick={() => switchRegister(true)} className="blue-button py-3 self-center text-xl w-1/6 font-bold get-button flex mt-5 border border-transparent rounded-full text-white bg-the-blue hover:bg-the-blue-focused focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-the-blue-focused" > Get Started</button>
        </div>
    )
}

export default PreFooter;
