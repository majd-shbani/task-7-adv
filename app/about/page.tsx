import AboutHero from "@/app/components/AboutHero"
import Advantages from "@/app/components/Advantages"
import ImageText from "@/app/components/ImageText"


const About = () => {
    return (
        <div>
            <AboutHero/>
            <ImageText 
            maxWidth="max-w-75 w-full lg:w- lg:max-w-125" 
            imgSrc= "/assets/images/city.png"  
            imgAlt = "city"  
            title = "We Are The Center Of Lucca To Offer You The Best"  
            subTitle = "We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!"/>
            <Advantages/>
        </div>
    )
}

export default About