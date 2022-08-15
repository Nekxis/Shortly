import React from 'react';
import DeskImg from './illustration-working.svg'
import './Article.css'

function  Article({switchRegister}) {
    return(
        <div className="flex justify-end mt-2 mb-20 ">
            <div className="flex flex-col p-10 w-1/2 mr-5">
                <h1 className="title m-0 text-6xl">More than just shorter links</h1>
                <p className="description m-0 text-xl">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button onClick={() => switchRegister(true)} className="blue-button py-3 self-start text-2xl w-1/3 font-bold get-button flex mt-3 border border-transparent rounded-full text-white bg-the-blue hover:bg-the-blue-focused focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-the-blue-focused" > Get Started</button>
            </div>

            <img className="flex self-center w-2/3" src={DeskImg} alt="#" />
        </div>
    )
}

export default Article;
