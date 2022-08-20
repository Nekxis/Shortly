import React from "react";
import './Nav.css'
import MyImage from './logo.svg';

function Nav({switchLogin, switchRegister}){
    return(
        <div className={'flex w-full justify-between py-4 px-16'} >
            <div className={'flex justify-between w-1/3'}>
               <img className={'logo flex self-center'} alt={'Logo'} src={MyImage} />
                <ul className={'flex list-none p-0 self-center'}>
                    <li className={"theLi "}>Features</li>
                    <li className={"theLi"}>Pricing</li>
                    <li className={"theLi"}>Resources</li>
                </ul>
            </div>
            <div className='flex w-1/6'>
                <button onClick={() => switchLogin(true)} className={'log text-base flex self-center justify-center bg-white border-0 w-4/5 hover:text-the-grey'}>Login</button>
                <button onClick={() => switchRegister(true)} className={'blue-button p-2 self-center text-base w-4/5 border border-transparent rounded-full text-white bg-the-blue hover:bg-the-blue-focused focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-the-blue-focused'}>Sign Up</button>
            </div>
        </div>
    )
}

export default Nav;
