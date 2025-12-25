

interface CustomerInterface {
    imgSrc : string
    imgAlt : string
    name : string
    title : string
}

interface Customer {
    items : CustomerInterface[]
}



const CustomerCard = ({items} : Customer) => {
    return (
        <>
        {items.map((item , index) => {
            return(
                <div key={index} className="p-7.5 rounded-3xl border border-[#EFEFEF] max-w-175 flex flex-col items-center">
                    <div>
                        <img src={item.imgSrc} alt={item.imgAlt} className="mb-4 mx-auto" />
                        <p className="text-lg font-normal">{item.name}</p>
                    </div>
                    <p className="text-lg font-normal px-5 py-7.5">{item.title}</p>
                </div>
            )
        })}
        </>
    )
}

export default CustomerCard