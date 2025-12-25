

import Ul from "./Ul"


const Footer = () => {
    const firstUl = [
        {text :"Bike and Rickshaw rental"},
        {text :"Guided Tours of Lucca"},
        {text :"Guided Bike Tour of Lucca"},
        {text :"Trip In The Tuscan Hills"},
        {text :"Transportation With Luxury Cars"},
        {text :"Wine Tours By Bus With Guide"}
    ]
    const SecondUl = [
        {text :"Home"},
        {text :"About Us"},
        {text :"Tour Packages"},
    ]
    const ThirdUL = [
        {text :"Terms of Use"},
        {text :"Provicy Policy"},
    ]
    const Links = [
        {imgSrc:"/assets/icons/location.svg" , imgAlt:"location" , text :"Piazza Napoleone, Lucca, Tuscany"},
        {imgSrc:"/assets/icons/phone.svg" , imgAlt:"phone" , text :"+39 346 368 5708"},
        {imgSrc:"/assets/icons/message.svg" , imgAlt:"message" , text :"italiainlimo@gmail.com"}
    ]
    return (
        <footer className="flex flex-col items-center lg:items-stretch gap-8.25 text-white bg-gray333 py-10 px-5 lg:px-10 2xl:px-whiteSpacing">
            <img src="/assets/icons/logo.svg" className="w-33.25" alt="our logo" />
            <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-4 2xl:gap-[93.7px] py-5 lg:py-8 2xl:py-8.25 border-b border-t ">
                <ul className="flex flex-col gap-2.5">
                    <Ul head="Services" items={firstUl} />
                </ul>
                <ul className="flex flex-col gap-2.5">
                    <Ul head="Home" items={SecondUl} />
                </ul>
                <ul className="flex flex-col gap-2.5">
                    <Ul head="Help" items={ThirdUL} />
                </ul>
                <ul className="flex flex-col gap-2.5">
                    <Ul head="Contacts" items={Links} />
                </ul>
                <ul>
                    <li className="text-center text-xl font-extrabold pb-2.5">Social Media</li>
                    <li className="flex justify-evenly gap-2 2xl:gap-5.75">
                        <img src="/assets/icons/twitter.svg" alt="twitter" className="w-10 lg:w-11"/>
                        <img src="/assets/icons/facebook.svg" alt="facebook" className="w-10 lg:w-11"/>
                        <img src="/assets/icons/instagram.svg" alt="instagram" className="w-10 lg:w-11"/>
                    </li>
                </ul>
            </div>
            <span className="mx-auto">Copyright © 2022. All rights reserved.</span>
        </footer>
    )
}

export default Footer

