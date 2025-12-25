


import Explore from "./components/Explore";
import OffersSlider from "./components/OffersSlider";
import ImageText from "./components/ImageText";
import Package from "./components/Package";
import HeroHome from "./components/HeroHome";
import SpecialOfhers from "./components/SpecialOfhers";
import BookNowBike from "./components/BookNowBike";





export default function Home() {
  return (
    <div >
      <HeroHome/>
      <Explore/>
      <ImageText
      backGround
      maxWidth="max-w-60 lg:max-w-75" 
      imgSrc= "/assets/images/woman.png"  
      imgAlt = "woman"  
      title = "We are the best companyfor your visit"  
      subTitle = "After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!"/>
      <SpecialOfhers/>
      <OffersSlider/>
      <BookNowBike/>
      <Package/>
    </div>
  );
}
