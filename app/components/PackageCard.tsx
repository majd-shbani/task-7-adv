


interface Package {
    imgSrc : string
    imgAlt : string
    title : string
    number:string
    svg1:string
    Package1:string
    svg2:string
    Package2:string
    svg3:string
    Package3:string
}

interface PackageInterface {
    items : Package[]
}


const PackageCard = ({items} : PackageInterface) => {
    return (
        <>
        {items.map((item , index) => {
            return(
                <div key={index} className="h-full">
                    <img src={item.imgSrc} alt={item.imgAlt} />
                    <div className="p-4 2xl:p-6.25 flex flex-col justify-between gap-4">
                        <p className="text-xl font-extrabold">{item.title}</p>
                        <div>
                            <p className="text-xl font-normal">
                                <span className="align-top">€</span><span className="text-5xl font-bold text-brandOrange">{item.number}</span>
                                <span className="text-lg">/day</span> 
                            </p>
                        </div>
                        <div>
                            <p className="font-normal text-lg py-2 2xl:py-4 flex gap-2 2xl:gap-4"><img src={item.svg1} alt="icon" />{item.Package1}</p>
                            <p className="font-normal text-lg py-2 2xl:py-4 flex gap-2 2xl:gap-4"><img src={item.svg2} alt="icon" />{item.Package2}</p>
                            <p className="font-normal text-lg py-2 2xl:py-4 flex gap-2 2xl:gap-4"><img src={item.svg3} alt="icon" />{item.Package3}</p>
                            <p className="font-normal text-lg py-2 2xl:py-4 flex gap-2 2xl:gap-4"><img src="/assets/icons/support.svg" alt="support" />Guaranteed Support</p>
                        </div>
                        <button className="px-6 py-3 border rounded-[50px] border-brandOrange">
                            Book Now
                        </button>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default PackageCard
