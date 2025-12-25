import Image from "next/image"
import Button from "./Button"
import Input from "./Input"



const BookNowBike = () => {
    const inputs = [
        {
        label:"Name and Surname", 
        type :"text" , 
        placeHolder : "Enter your name and surname"
        },
        {
        label:"Email Address", 
        type :"email" , 
        placeHolder : "Enter your email address"
        },
        {
        label:"Telephone Number", 
        type :"text" , 
        placeHolder : "Enter your telephone number"
        },
        {
        label:"Service Type", 
        type :"password" , 
        placeHolder : "Select the service types",
        svg:"/assets/icons/arrow.svg"
        },
        {
        label:"Date", 
        type :"text" , 
        placeHolder : "Select the date",
        svg:"/assets/icons/calendar.svg"
        },
        {
        label:"Time", 
        type :"password" , 
        placeHolder : "Select the time",
        svg:"/assets/icons/clock.svg"
        }
    ]
    return (
        <div className="relative h-225 sm:h-200 lg:h-full flex flex-col items-center lg:items-start px-5 lg:px-10 2xl:px-whiteSpacing py-7 2xl:py-15 mt-15.75 ">
            <div className="lg:w-[50%] max-w-183.5">
                <h1 className="text-xl lg:text-[32px] mx-auto mb-4 2xl:mb-9 text-center font-extrabold">Book Now Bike</h1>
                <div className="flex flex-col items-center gap-2 lg:gap-3 2xl:gap-7.5 p-4 2xl:p-7.5 bg-pink200 rounded-3xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 2xl:gap-7.5 ">
                        <Input inputs = {inputs}/>
                    </div>
                    <Button buttons = {[{value : "Book Now" , properities:"px-6 py-2.5 bg-brandOrange text-white"}]}/>
                </div>
            </div>
            <img src="/assets/images/bike.png" alt="tourist woman"
            className="max-w-75 sm:max-w-124 2xl:w-[40%] 2xl:max-w-max absolute -bottom-5.5 right-[40%] translate-x-1/2 lg:translate-x-0 lg:right-10 2xl:right-55"/>
            <Image src="/assets/images/bg.png" alt="Hero Background" fill  className="object-cover -z-10"  priority  />
        </div>
    )
}

export default BookNowBike