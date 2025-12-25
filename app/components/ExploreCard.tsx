

interface ExploreInterface {
    imgSrc : string
    imgAlt : string
    title : string
    paragragh:string
    date?: string
    persons? : string
}

interface Explore {
    items : ExploreInterface[]
}




const ExploreCard = ({items} : Explore) => {
    return (
        <>
        {items.map((item , index) => {
            return(
                <div key={index} className="max-w-82.5 flex flex-col gap-4">
                    <img src={item.imgSrc} alt={item.imgAlt} className="h-75 2xl:h-101" />
                    <div className="flex flex-col gap-3">
                        <strong className="text-2xl font-bold">{item.title}</strong>
                        {item.date &&
                        <div >
                            <p className="text-lg font-semibold">from<span className="text-2xl font-bold px-5 py-7.5 text-brandOrange">34 €</span></p>
                            <div className="flex justify-between pt-3">
                                <p className="font-semibold text-brandOrange text-sm lg:text-base flex items-center gap-1">
                                    <img src="/assets/icons/orangeCalendar.svg" alt="Calendar" />
                                    {item.date}
                                </p>
                                <p className="font-semibold text-brandOrange text-sm lg:text-base flex items-center gap-1 pe-1">
                                    <img src="/assets/icons/orahgeTours.svg" alt="Tours" />
                                    {item.persons}
                                </p>
                            </div>
                        </div>
                        }
                        <p className="text-lg font-normal">{item.paragragh}</p>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default ExploreCard
