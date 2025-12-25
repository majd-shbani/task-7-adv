
'use client'

interface Inputs {
    type : string
    placeHolder : string
    label : string
    svg?:string
    properities? :string
}

interface InputInterface {
    inputs : Inputs[]
}


const Input = ({inputs} : InputInterface) => {
    return (
        <>
            {inputs.map((input , index) => {
                return(
                    <div className="relative" key = {index}>
                        <label className="text-lg font-semibold">{input.label}</label>
                        <input className={`bg-white mt-1 2xl:mt-2.5 w-full text-base font-normal px-2 lg:px-3 2xl:px-6 py-2 2xl:py-3.5 rounded-lg ${input.properities}`} 
                        type={input.type} placeholder={input.placeHolder}/>
                        {input.svg && <img src={input.svg} alt="icon" 
                        className="absolute w-6 -translate-x-1/2 -translate-y-1/2 -bottom-0.75 2xl:bottom-0.5 right-0"/>} 
                    </div>
                )
            })}
        </>
    )
}

export default Input
