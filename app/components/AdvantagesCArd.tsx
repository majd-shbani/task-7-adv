
interface Advantage {
    imgSrc : string
    imgAlt : string
    title : string
}

interface AdvantagesInterface {
    items : Advantage[]
}


const AdvantagesCArd = ({items} : AdvantagesInterface) => {
    return (
        <>
        {items.map((item , index) => {
            return (
                <div className="flex flex-col w-full items-center gap-3.75 p-7.5 bg-pink200 rounded-3xl max-w-73" key={index}>
                    <img className="w-15" src={item.imgSrc} alt={item.imgAlt} />
                        <p className="text-xl text-center font-semibold">{item.title}</p>
                </div>
            )
        })}
        </>
    )
}

export default AdvantagesCArd
