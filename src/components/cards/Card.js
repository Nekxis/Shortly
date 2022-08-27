import React from "react";

function Card({image, align, title, major}) {
    return (

        <div className={`w-1/3 h-5/6 bg-white justify-around relative  p-10 pt-12 rounded-md flex flex-col ${align}`} >
            <div className={'w-20 h-20 bg-the-purple rounded-full absolute flex justify-center -top-10'}>
                <img className={'self-center flex'} src={image} alt="test"/>
            </div>
            <p className={'text-xl flex text-2xl self-start'}>{title}</p>
            <p className={'text-the-light-grey text-xl font-medium flex self-center'}>{major}</p>
        </div>
    )
}

export default Card;
