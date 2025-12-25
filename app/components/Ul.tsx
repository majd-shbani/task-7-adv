
interface LiInterface {
    text? : string
    imgSrc? : string
    imgAlt? : string
}


interface UlInterface {
    items:LiInterface[]
    head:string
}


const Ul = ({items , head }:UlInterface ) => {
    return (
        <>
            <li className="text-xl font-extrabold pb-2.5">{head}</li>
            {items.map((item , index) => {
                return(
                    <li className="font-semibold text-lg flex gap-2.5" key={index}>
                        {item.imgSrc && <img src={item.imgSrc} alt={item.imgAlt} />}
                        {item.text}
                    </li>
                )
            })}
        </>
    )
} 

export default Ul
