import React from 'react';
import DeskImg from './illustration-working.svg'
import './Article.css'

function  Article() {
    return(
        <div className="flex justify-end mt-2 mb-20">
            <div className="flex flex-col p-8">
                <h1 className="title m-0">More than just shorter links</h1>
                <p className="description m-0">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className="blue-button get-button flex mt-2.5" > Get Started</button>
            </div>

            <img className="flex self-center w-1/2" src={DeskImg} alt="#" />
        </div>
    )
}

export default Article;
