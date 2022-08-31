import React from "react";
import facebook from "./images/icon-facebook.svg"
import twitter from "./images/icon-twitter.svg"
import pinterest from "./images/icon-pinterest.svg"
import instagram from "./images/icon-instagram.svg"

function Footer () {
    return(
        <div className={'h-72 w-full bg-the-dark-purple flex justify-around'}>
            <div className={'w-1/3 h-full flex'}>
                <p className={'text-white text-3xl px-32 py-14'}>
                    Shortly
                </p>
            </div>
            <div className={'w-1/6 h-full flex flex-col py-14'}>
                <p className={'text-white flex self-start m-0 py-4'}>
                    Features
                </p>
                <ul>
                    <li className={'w-fit text-the-light-grey font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Link Shortening </li>
                    <li className={'w-fit text-the-light-grey font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Brand Links </li>
                    <li className={'w-fit text-the-light-grey font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Analytics </li>
                </ul>
            </div>
            <div className={'w-1/6 h-full flex flex-col py-14'}>
                <p className={'text-white flex self-start m-0 py-4'}>
                    Resources
                </p>
                <ul>
                    <li className={'w-fit text-the-light-grey font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Blog </li>
                    <li className={'w-fit text-the-light-grey font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Developers </li>
                    <li className={'w-fit text-the-light-grey font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Support </li>
                </ul>
            </div>
            <div className={'w-1/6 h-full flex flex-col py-14'}>
                <p className={'text-white flex self-start m-0 py-4'}>
                    Company
                </p>
                <ul>
                    <li className={'w-fit text-the-light-grey font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> About </li>
                    <li className={'w-fit text-the-light-grey font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Our Team </li>
                    <li className={'w-fit text-the-light-grey font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Careers </li>
                    <li className={'w-fit text-the-light-grey font-medium text-sm py-0.5 hover:text-the-blue-focused cursor-pointer'}> Contacts </li>
                </ul>
            </div>
            <div className={'w-1/4 h-full flex pt-16 justify-start'}>
                <img className={'w-10 h-10 p-2 mx-2'} src={facebook} alt="facebook"/>
                <img className={'w-10 h-10 p-2 mx-2'} src={twitter} alt="twitter"/>
                <img className={'w-10 h-10 p-2 mx-2'} src={pinterest} alt="pinterest"/>
                <img className={'w-10 h-10 p-2 mx-2'} src={instagram} alt="instagram"/>
            </div>
        </div>
    )
}

export default Footer;
