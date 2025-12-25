import Arrow from "./Arrow"
import ExploreCard from "./ExploreCard"


const OffersSlider = () => {
    const customer = [
        {    
        imgSrc : "/assets/images/offers1.png",
        imgAlt : "bike",
        title : "Bike and rickshaw rental",
        paragragh : "Book your quality vehicle quickly for an hour or all day!"
        },
        {    
        imgSrc : "/assets/images/offers2.png",
        imgAlt : "Guided",
        title : "Guided tour of the countryside",
        paragragh : "Live the real Lucchese experience by visiting the suburbs by bike!"
        },
        {    
        imgSrc : "/assets/images/offers3.png",
        imgAlt : "Taxi",
        title : "Taxi and NCC service",
        paragragh : "Do you need not only a bike but also a driver? Then you have found the right place!"
        },
        {    
        imgSrc : "/assets/images/offers4.png",
        imgAlt : "Bus Package",
        title : "Bus Package",
        paragragh : "Do you need not only a bike but also a driver? Then you have found the right place!"
        }
    ]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8.25 px-5 lg:px-10 2xl:px-whiteSpacing pt-15 lg:pt-30">
                <ExploreCard items={customer}/>
            </div>
    )
}

export default OffersSlider
