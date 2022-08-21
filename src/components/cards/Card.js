import React from "react";
import './Card.css'

function Card({image}) {
    return (
        <div className={'w-1/4 h-4/5 bg-white self-center justify-around relative p-5 rounded-md flex flex-col'}>
            <div className={'w-20 h-20 bg-the-purple rounded-full absolute flex justify-center -top-10'}>
                <img className={'self-center flex'} src={image} alt="test"/>
            </div>
            <p className={'text-xl flex  self-center'}>Title</p>
            <p className={'text-the-light-grey flex self-center'}>Major text</p>
        </div>
    )
}

export default Card;
