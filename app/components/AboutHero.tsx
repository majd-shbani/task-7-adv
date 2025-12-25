import Image from "next/image"


const AboutHero = () => {
    return (
        <div className="h-screen relative flex flex-col items-center justify-center gap-6 px-5 lg:px-10 2xl:px-whiteSpacing pt-28 lg:pt-32 2xl:pt-43.5">
        <Image src="/assets/images/heroAboutBackGround.png"  alt="Hero Background" fill  className="object-cover -z-10"  priority  />
            <div className="flex flex-col items-center">
                <h1 className="text-2xl sm:text-5xl font-podcast lg:text-7xl font-normal text-center mb-2 sm:mb-4 text-white ">Our team cares about your full relax</h1>
                <p className="text-sm lg:text-lg sm:text-2xl text-center text-white max-w-125 lg:max-w-200  2xl:max-w-211.75">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
            </div>
            <button className="px-6 py-3.5 text-white font-semibold text-lg lg:text-xl  border border-white rounded-[50px]">
                View our Tour Packages
            </button>
        </div>
    )
}

export default AboutHero
