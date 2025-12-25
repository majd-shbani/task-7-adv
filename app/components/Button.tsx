'use client'

interface btn {
    value? : string
    text? : string
    svg? : string
    properities? :string
    img? : string
    onClick? : () => void
} 

interface ButtonsInterface {
    buttons : btn[]
}

const Button = ({buttons} : ButtonsInterface) => {
    return (
        <>
            {buttons?.map((btn , index) => {
                return(
                    <div className="relative" key = {index}>
                        <button 
                            className={`text-sm flex items-center justify-center gap-1 lg:text-xl font-semibold rounded-[50px] ${btn.properities}`}
                            onClick={btn.onClick}>
                            {btn.value}
                            {btn.img && <img className="mt-1" src={btn.img} alt="out logo" />}
                        </button>
                        {btn.text && <span className="absolute top-1/2 left-1/2  translate-y-2/2 text-base font-normal align-middle">or</span>}
                        {btn.svg && <img src={btn.svg} alt={btn.svg} className="absolute bottom-3 left-5.5" />}
                    </div>
                )
            })}
        </>
    )
}

export default Button

