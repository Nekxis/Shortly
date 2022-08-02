import React from "react";
import './Nav.css'
import MyImage from './logo.svg';

function Nav(){
    return(
        <div className={'nav'} >
            <div className={'menu'}>
               <img className={'logo'} alt={'Logo'} src={MyImage} />
                <ul className={'list'}>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div className='LogReg'>
                <button className={'log'}>Login</button>
                <button className={'reg blue-button'}>Sign Up</button>
            </div>
        </div>
    )
}

export default Nav;
