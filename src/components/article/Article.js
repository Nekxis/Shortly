import React from 'react';
import DeskImg from './illustration-working.svg'
import './Article.css'

function  Article() {
    return(
        <div className="article">
            <div className="text">
                <h1 className="title">More than just shorter links</h1>
                <p className="description">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className="blue-button get-button" > Get Started</button>
            </div>

            <img className="deskImg" src={DeskImg} alt="#" />
        </div>
    )
}

export default Article;
