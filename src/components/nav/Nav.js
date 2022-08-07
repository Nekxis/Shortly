import React from "react";
import './Nav.css'
import MyImage from './logo.svg';

function Nav(){
    return(
        <div className={'nav flex w-full  justify-between p-1 box-border'} >
            <div className={'flex justify-around w-2/5'}>
               <img className={'logo flex self-center'} alt={'Logo'} src={MyImage} />
                <ul className={'flex list-none p-0 self-center'}>
                    <li className={"theLi"}>Features</li>
                    <li className={"theLi"}>Pricing</li>
                    <li className={"theLi"}>Resources</li>
                </ul>
            </div>
            <div className='flex mr-4 w-20'>
                <button className={'log flex self-center justify-center bg-white border-0 w-4/5'}>Login</button>
                <button className={'blue-button w-4/5'}>Sign Up</button>
            </div>
        </div>
    )
}

export default Nav;
