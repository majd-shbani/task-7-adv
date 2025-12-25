import Image from "next/image"
import Data from "./Data"




const HeroHome = () => {
    const myData = [
    {    
    imgSrc : "/assets/icons/tours.svg",
    imgAlt : "tours",
    title : "Number of people",
    subTitle : "Choose number"
    },
    {    
    imgSrc : "/assets/icons/calendar.svg",
    imgAlt : "calendar",
    title : "Date",
    subTitle : "Choose Date"
    },
    {    
    imgSrc : "/assets/icons/clock.svg",
    imgAlt : "clock",
    title : "Time",
    subTitle : "Choose Time"
    },
    {    
    imgSrc : "/assets/icons/tours.svg",
    imgAlt : "tours",
    title : "Tour",
    subTitle : "Select Tour"
    },
    {    
    imgSrc : "/assets/icons/iconCar.svg",
    imgAlt : "iconCar",
    title : "Transportation",
    subTitle : "Select Transport"
    }
    ]
    return (
        <div className="h-screen relative flex flex-col items-center justify-center gap-6 2xl:gap-15 py-10 px-5 lg:px-10 2xl:px-whiteSpacing pt-31 lg:pt-33 2xl:pt-43.5">
        <Image src="/assets/images/heroBackGround.png"  alt="Hero Background" fill  className="object-cover -z-10" 
        />
            <div>
                <h1 className="text-xl sm:text-7xl font-normal font-podcast text-center mb-2 sm:mb-4 text-white">Enjoy in the best way!</h1>
                <p className="text-lg sm:text-2xl text-center text-white">Enjoy our services for your trip anytime</p>
            </div>
            <div className= "p-3 lg:p-5 bg-gray600 rounded-xl" >
                <div className="flex ">
                    <p className="text-sm sm:text-lg font-semibold inline bg-white text-brandOrange p-2 sm:p-4 rounded-tl-2xl">
                        <img src="/assets/icons/earth.svg" alt="earth" className="inline me-2.5" />
                        Public Tours
                    </p>
                    <p className="text-sm sm:text-lg font-semibold inline bg-[#FFFFFF66] text-white p-2 sm:p-4 rounded-tr-2xl">
                        <img className="inline me-2.5" src="/assets/icons/iconTours.svg" alt="icon Tour" />
                        Private Tours
                    </p>
                </div>
                <div className="grid grid-cols-[auto] sm:grid-cols-[auto_auto_auto] lg:grid-cols-[auto_auto_auto_auto_auto_auto] gap-1 lg:gap-2 2xl:gap-6 px-3 py-1 sm:py-4 rounded-b-2xl sm:rounded-tr-2xl bg-white">
                    <Data items={myData}/>
                    <button className="bg-brandOrange mx-auto w-10 sm:w-20 p-2 sm:p-6 rounded-xl"><img src="/assets/icons/iconsSearch.svg" alt="iconsSearch" /></button>
                </div>
            </div>
        </div>
    )
}

export default HeroHome