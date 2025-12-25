

interface Data {
    imgSrc : string
    imgAlt : string
    title : string
    subTitle : string
}

interface InputInterface {
    items : Data[]
}


const Data = ({items} : InputInterface) => {
    return (
        <>
        {items.map((item , index) => {
            return (
                <div className="flex items-start gap-1.75 py-1 sm:py-4 ps-2 2xl:ps-4 pe-[2.5px]" key={index}>
                    <img src={item.imgSrc} alt={item.imgAlt} />
                    <div>
                        <p className="text-xs sm:text-sm 2xl:text-lg font-semibold">{item.title}</p>
                        <p className="text-xs sm:text-sm 2xl:text-lg font-normal inline">{item.subTitle}<img className="inline" src="/assets/icons/arrow.svg" alt="arrow" /></p>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default Data
