import Button from "./Button"
import Input from "./Input"

interface CreateAccountProps {
    onClose?: () => void
}


const CreateAccount = ({ onClose }: CreateAccountProps) => {
    const inputs = [
        {
        label:"Name and Surname", 
        type :"text" , 
        placeHolder : "Enter your name and surname",
        properities:"border border-[#33333333]"
        },
        {
        label:"Email Address", 
        type :"email" , 
        placeHolder : "Enter your email address",
        properities:"border border-[#33333333]"
        },
        {
        label:"Password", 
        type :"password" , 
        placeHolder : "Enter your password",
        svg:"/assets/icons/eyeInvisible.svg",
        properities:"border border-[#33333333]"
        }
    ]
    const buttons = [
        {
            value :"Sign Up" ,
            properities : "px-6 w-full py-2.5 bg-brandOrange text-white" , 
            text : "or"
        } ,
        {
            value :"Sign Up with Google" , 
            properities : "px-6 w-full py-2.5 text-gray333 border border-[#33333333]",
            svg:"/assets/icons/google.svg"
        }
    ]
    
    return (
        <div className="flex flex-col gap-3.5 lg:gap-4 2xl:gap-6 max-w-authMw rounded-3xl px-5 py-7 lg:py-8 2xl:py-authYPadding sm:px-7 2xl:px-10 mx-auto bg-white">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl sm:text-[32px] font-bold">Create Account</h2>
                <Button buttons={[
                    {
                        img : "/assets/icons/close.svg", 
                        properities:"flex-row-reverse",
                        onClick: onClose
                    }
                ]}/>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 2xl:gap-5">
                <Input inputs={inputs}/>
                <p className="text-sm font-normal">
                    <input type="checkbox" /> I agree with 
                    <span className="text-brandOrange"> Terms</span> and 
                    <span className="text-brandOrange"> Privacy</span>
                </p>
            </div>
            <div className="flex flex-col gap-6">
                <Button buttons={buttons}/>
            </div>
            <p className="text-base font-normal">
                Already have an account? 
                <span className="text-brandOrange"> Log In</span>
            </p>
        </div>
    )
}

export default CreateAccount
