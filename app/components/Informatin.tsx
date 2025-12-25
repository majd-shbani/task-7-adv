

interface Informatin {
    number : string
    title : string
}

interface InformatinInterface {
    items : Informatin[]
}


const Informatin = ({items} : InformatinInterface) => {
    return (
        <>
        {items.map((item , index) => {
            return(
                <div className="max-w-18 sm:max-w-21 " key={index}>
                    <b className="text-2xl sm:text-[32px] font-bold text-brandOrange">{item.number}</b>
                    <p className="text-sm sm:text-base font-normal">{item.title}</p>
                </div>
            )
        })}
        </>
    )
}

export default Informatin
