

import Image from "next/image"
import Button from "./Button"


const SpecialOfhers = () => {
    return (
        <div className="relative h-200 lg:h-full flex flex-col items-center lg:items-start gap-40 px-5 lg:px-10 2xl:px-whiteSpacing py-7 2xl:py-15 mt-15 lg:mt-40 2xl:mt-54.25">
            <div className="flex lg:w-[40%] flex-col items-center gap-3 2xl:gap-8 p-4 2xl:p-7.5 max-w-142.25 bg-pink200 rounded-3xl">
                <h1 className="text-xl text-center lg:text-[32px] font-extrabold">Get Special Offers for Organizations</h1>
                <p className="text-lg text-center font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <Button buttons = {[{value : "Contact Us" , properities : "px-6 py-2.5 bg-brandOrange text-white"}]}/>
            </div>
            <img src="/assets/images/touristWoman.png" alt="tourist woman" 
            className="max-w-75 2xl:max-w-max absolute bottom-0 tra right-[50%] translate-x-1/2 lg:translate-x-0 lg:right-10 2xl:right-whiteSpacing"/>
            <Image src="/assets/images/bg.png" alt="Hero Background" fill  className="object-cover -z-10"  priority  />
        </div>
    )
}

export default SpecialOfhers