import PackageCard from "./PackageCard"







const Package = () => {
const packages = [  
    {
    imgSrc : "/assets/images/tokTok.png" ,
    imgAlt : "tok tok" ,
    title : "BIKE / RICKSHAW" ,
    number:"10" ,
    svg1:"/assets/icons/oneDay.svg" ,
    Package1:"Your bike for a day" ,
    svg2:"/assets/icons/map.svg" ,
    Package2:"City App" ,
    svg3:"/assets/icons/cityMap.svg" ,
    Package3:"Discount on Rickshaw" 
    },
    {
    imgSrc : "/assets/images/bicycle.png" ,
    imgAlt : "bicycles" ,
    title : "BIKE TOURS" ,
    number:"30" ,
    svg1:"/assets/icons/mountainBike.svg" ,
    Package1:"A Mountain Bike" ,
    svg2:"/assets/icons/guide.svg" ,
    Package2:"A Guide For You" ,
    svg3:"/assets/icons/water.svg" ,
    Package3:"A Guide For You" 
    },
    {
    imgSrc : "/assets/images/party.png" ,
    imgAlt : "party" ,
    title : "BUS TRIPS" ,
    number:"45" ,
    svg1:"/assets/icons/ticket.svg" ,
    Package1:"Park ticket" ,
    svg2:"/assets/icons/bus.svg" ,
    Package2:"Return bus" ,
    svg3:"/assets/icons/companion.svg" ,
    Package3:"Companion" 
    },
    {
    imgSrc : "/assets/images/driver.png" ,
    imgAlt : "private driver" ,
    title : "TRANSFER" ,
    number:"10" ,
    svg1:"/assets/icons/driver.svg" ,
    Package1:"Personal Driver" ,
    svg2:"/assets/icons/orangeLocation.svg" ,
    Package2:"Wherever You Want" ,
    svg3:"/assets/icons/price.svg" ,
    Package3:"At the best price" 
    }
    ]
    return (
        <div className="px-5 lg:px-10 2xl:px-whiteSpacing pt-15 lg:pt-30">
            <h1 className="text-xl lg:text-[32px]  font-extrabold">Explore Our Popular Destinantions</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 sm:gap-3 2xl:gap-5  pt-8 lg:pt-15">
                <PackageCard items={packages}/>
            </div>
        </div>
    )
}

export default Package
