import Arrow from "./Arrow"
import ExploreCard from "./ExploreCard"




const Explore = () => {
    const customer = [
        {    
        imgSrc : "/assets/images/natural4.png",
        imgAlt : "natural",
        title : "Lucca Bike Tour",
        date:"EVERY DAY",
        persons:"3-10 PP",
        paragragh : "A tour of the city and its surroundings led by a professional guide ..."
        },
        {    
        imgSrc : "/assets/images/natural1.png",
        imgAlt : "natural",
        title : "Lyod Gomez",
        date:"MONDAY",
        persons:"10-30 PP",
        paragragh : "The real magic is here where you can enjoy the best Tuscan wine and eat ..."
        },
        {    
        imgSrc : "/assets/images/natural2.png",
        imgAlt : "natural",
        title : "Cinque Terre Tour",
        date:"TO BE DECIDED",
        persons:"10-50 PP",
        paragragh : "Visiting the 5 Terre is a must, and you can never go there enough ..."
        },
        {    
        imgSrc : "/assets/images/natural3.png",
        imgAlt : "natural",
        title : "Siena and Surroundings",
        date:"TO BE DECIDED",
        persons:"5-10 PP",
        paragragh : "Visit the beautiful Siena and the cities that surround it to experience ..."
        }
    ]
    return (
        <div className="px-5 lg:px-10 2xl:px-whiteSpacing pt-15 lg:pt-30">
            <div className="flex items-center flex-col gap-5 sm:flex-row justify-between">
                <h1 className="text-xl lg:text-[32px]  font-extrabold">Explore Our Popular Destinantions</h1>
                <Arrow/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8.25  pt-8 lg:pt-15">
                <ExploreCard items={customer}/>
            </div>
        </div>
    )
}

export default Explore