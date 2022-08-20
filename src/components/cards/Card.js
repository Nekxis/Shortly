import React from "react";
import './Card.css'

function Card() {
    return (
        <div className={'w-1/4 h-3/4 bg-white self-center justify-center p-5 rounded-md flex flex-col'}>
            <p className={'text-xl flex  self-center'}>Title</p>
            <p className={'text-the-light-grey flex self-center'}>Major text</p>
        </div>
    )
}

export default Card;
