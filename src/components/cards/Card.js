import React from "react";

function Card({image, align, title, major}) {
    return (

        <div className={`w-1/4 h-5/6 bg-white justify-around relative  p-5 pt-12 rounded-md flex flex-col ${align}`} >
            <div className={'w-20 h-20 bg-the-purple rounded-full absolute flex justify-center -top-10'}>
                <img className={'self-center flex'} src={image} alt="test"/>
            </div>
            <p className={'text-xl flex  self-start'}>{title}</p>
            <p className={'text-the-light-grey flex self-center'}>{major}</p>
        </div>
    )
}

export default Card;
