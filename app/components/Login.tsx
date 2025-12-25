import Button from "./Button"
import Input from "./Input"

interface LoginProps {
    onClose?: () => void
}

const Login = ({ onClose }: LoginProps) => {
    const inputs = [
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
            value :"Sign In" , 
            text : "or" , 
            properities : "px-6 w-full py-2.5 bg-brandOrange text-white "
        } , 
        {
            value :"Sign In with Google" , 
            properities : "px-6 w-full py-2.5 text-gray333  border border-[#33333333]" , 
            svg:"/assets/icons/google.svg"
        }
        ]
    return (
        <div className="flex flex-col gap-3.5 lg:gap-4 2xl:gap-6 max-w-authMw rounded-3xl px-5 py-6 lg:py-9 2xl:py-authYPadding sm:px-7 2xl:px-10 mx-auto bg-white">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-2xl sm:text-[32px]">Login</h2>
                <Button buttons={[{img : "/assets/icons/close.svg" , properities:"flex-row-reverse", onClick: onClose}]}/>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 2xl:gap-5">    
                <Input inputs={inputs}/>
                <p className="text-[#33333399] text-end">Forgot your password?</p>
            </div>
            <div className="flex flex-col gap-6"><Button buttons={buttons}/></div>
            <p className="text-base font-normal">Don't have an account ? <span className="text-brandOrange">Sign Up</span></p>
        </div>
    )
}

export default Login

