import Image from "next/image"
import AdvantagesCArd from "./AdvantagesCArd"


const Advantages = () => {
    const advanteges = [
        {    
        imgSrc : "/assets/icons/iconMap.svg",
        imgAlt : "map",
        title : "Complete Packages For All Your Wishes"
        },
        {    
        imgSrc : "/assets/icons/iconExperience.svg",
        imgAlt : "experience",
        title : "Over 30 Years Of Experience"
        },
        {    
        imgSrc : "/assets/icons/guide.svg",
        imgAlt : "guide",
        title : "Expert Guides For You"
        },
        {    
        imgSrc : "/assets/icons/bestPrice.svg",
        imgAlt : "best Price",
        title : "Guaranteed fun at the best price!"
        }
    ]
    return (
        <div className="relative px-5 lg:px-10 2xl:px-whiteSpacing py-20.75 mt-15 lg:mt-30">
            <Image src="/assets/images/bg.png"  alt="Hero Background" fill  className="object-cover -z-10"  priority  />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  2xl:gap-20.75 justify-items-center">
                <AdvantagesCArd items={advanteges}/>
            </div>
        </div>
    )
}

export default Advantages
