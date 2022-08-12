import React from 'react';
import DeskImg from './illustration-working.svg'
import './Article.css'

function  Article({switchRegister}) {
    return(
        <div className="flex justify-end mt-2 mb-20">
            <div className="flex flex-col p-8">
                <h1 className="title m-0">More than just shorter links</h1>
                <p className="description m-0">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button onClick={() => switchRegister(true)} className="blue-button p-2 get-button flex mt-2.5 border border-transparent rounded-md text-white bg-the-blue hover:bg-the-blue-focused focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-the-blue-focused" > Get Started</button>
            </div>

            <img className="flex self-center w-1/2" src={DeskImg} alt="#" />
        </div>
    )
}

export default Article;
