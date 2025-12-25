import Informatin from "./Informatin"


interface Dataterface {
    imgSrc : string
    imgAlt : string
    title : string
    subTitle : string
    maxWidth?:string
    backGround?: boolean
}


const ImageText = ({imgSrc , imgAlt , title , subTitle , maxWidth ,backGround} : Dataterface) => {
    const information = [
        {
            number : "20+",
            title : "Years Experience"
        },
        {
            number : "100+",
            title : "Happy Customer"
        },
        {
            number : "15+",
            title : "Choice of Services"
        },
        {
            number : "10+",
            title : "Professional Guides"
        }
    ]
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-17.5 px-5 lg:px-10 2xl:px-whiteSpacing pt-15 lg:pt-30">
            <div className="relative">
                {backGround && <div className="w-full h-[60%] absolute rounded-full bg-brandOrange right-1/2 translate-x-1/2 top-17 lg:top-20 2xl:top-25 -z-10"> </div>} 
                <img className={`${maxWidth}  2xl:max-w-max `}src={imgSrc} alt={imgAlt} />
            </div>
            <div className="flex flex-col gap-8 max-w-125 lg:max-w-175">
                <div >
                    <span className="font-semibold">WELCOME TO OUR SITE!</span>
                    <p className="mt-1.5 text-[32px] font-extrabold">{title}</p>
                </div>
                <p>{subTitle}</p>
                <div className="flex gap-2 sm:gap-5 justify-between max-w-120">
                    <Informatin items = {information}/>
                </div>
            </div>
        </div>
    )
}

export default ImageText
