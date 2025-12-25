'use client'

import { useState } from 'react'
import Button from "./Button"
import CreateAccount from "./CreateAccount"
import Login from "./Login" 
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
    const [activeModal, setActiveModal] = useState<'login' | 'signup' | null>(null)
    const pathName = usePathname()
    const buttons =[
        {
            value : "Eng",
            properities:"text-white",
            img:"/assets/icons/arrowDown.svg"
        }, 
        {
            value : "Login",
            properities:"text-white",
            onClick: () => setActiveModal('login')
        }, 
        {
            value : "Sign Up" , 
            properities:"bg-brandOrange px-3 2xl:px-6 py-2.5 text-white ",
            onClick: () => setActiveModal('signup')
        }
    ]
    const [show , setShow] = useState(false)
    const editshow = () => {
        setShow(!show)
    }
    return (
        <>
            <div className="fixed w-full top-0 z-10 bg-gray600 h-20 lg:h-30 2xl:h-42.5 flex justify-between items-center px-5 lg:px-10 2xl:px-whiteSpacing ">
                <img src="/assets/icons/logo.svg" className="w-18 lg:w-25 2xl:w-33.25" alt="our logo" />
                <div className="hidden lg:flex justify-between lg:w-[68%] 2xl:w-[65%]">
                    <ul className="flex items-center gap-2 lg:gap-3 2xl:gap-6"> 
                        <li  className='text-base lg:text-lg font-semibold text-white'><Link href = '/' className={pathName === "/" ? "underline underline-offset-6 decoration-2 decoration-brandOrange" : ""}>Home</Link></li>
                        <li className='text-base lg:text-lg font-semibold text-white'><Link href = '/about'className={pathName === "/about" ? "underline underline-offset-6 decoration-2 decoration-brandOrange" : ""}>About Us</Link></li>
                        <li className='text-base lg:text-lg font-semibold text-white'><Link href = '/'>Tour Packages</Link></li>
                        <li className='text-base lg:text-lg font-semibold text-white'><Link href = '/'>Contact Us</Link></li>
                    </ul>
                    <div className="flex items-center gap-1.5 lg:gap-2">
                        <Button buttons={buttons}/>
                    </div>
                </div>
                <button onClick={() => editshow()} className="block lg:hidden"><img  src="/assets/icons/burger.svg" alt="burger" /></button>
                    <div className={`${show ? "top-20" : "-top-200"} absolute w-full right-0 rounded-xl flex flex-col gap-4 p-1 lg:hidden bg-gray333/70 backdrop-blur-sm transition-all`}>
                        <ul className="flex flex-col items-center gap-2 lg:gap-3 2xl:gap-10"> 
                            <li  className='text-base lg:text-lg font-semibold text-white'><Link href = '/' className={pathName === "/" ? "underline underline-offset-6 decoration-2 decoration-brandOrange" : ""}>Home</Link></li>
                            <li className='text-base lg:text-lg font-semibold text-white'><Link href = '/about'className={pathName === "/about" ? "underline underline-offset-6 decoration-2 decoration-brandOrange" : ""}>About Us</Link></li>
                            <li className='text-base lg:text-lg font-semibold text-white'><Link href = '/'>Tour Packages</Link></li>
                            <li className='text-base lg:text-lg font-semibold text-white'><Link href = '/'>Contact Us</Link></li>
                        </ul>
                        <div className="flex flex-col items-center gap-2 ">
                            <Button buttons={buttons}/>
                        </div>
                    </div>
                </div>
            {activeModal === 'signup' && (
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray333/80">
                    <div className="relative">
                        <CreateAccount onClose={() => setActiveModal(null)} />
                    </div>
                </div>
            )}
            
            {activeModal === 'login' && (
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray333/80">
                    <div className="relative">
                        <Login onClose={() => setActiveModal(null)} />
                    </div>
                </div>
            )}
        </>
    )
}

export default NavBar

