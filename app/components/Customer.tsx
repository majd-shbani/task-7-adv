import Arrow from "./Arrow"
import CustomerCard from "./CustomerCard"



const Customer = () => {
    const customer = [
        {    
        imgSrc : "/assets/images/Ellipse.jpg",
        imgAlt : "pofile",
        name : "Lyod Gomez",
        title : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"
        },
        {    
        imgSrc : "/assets/images/Ellipse.jpg",
        imgAlt : "pofile",
        name : "Lyod Gomez",
        title : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"
        }
    ]
    return (
        <div className="px-5 lg:px-10 2xl:px-whiteSpacing pb-10 lg:pb-40 pt-15 lg:pt-30 ">
            <div className="flex items-center flex-col gap-5 sm:flex-row justify-between">
                <h1 className="text-xl lg:text-[32px] font-extrabold">Happy Customers Says</h1>
                <Arrow/>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5  pt-8 lg:pt-15">
                <CustomerCard items={customer}/>
            </div>
        </div>
    )
}

export default Customer
