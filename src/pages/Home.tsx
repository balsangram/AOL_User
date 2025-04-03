import { useNavigate } from "react-router-dom";
import Card from "../components/cards/Card";
import MyCarousel from "../components/cards/MyCarousel";
import img1 from "../assets/cardImg/guruji1.jpg";
import img2 from "../assets/cardImg/mandap2.jpg";
import img3 from "../assets/cardImg/audio.jpg";
import img4 from "../assets/cardImg/vertual.jpg";
import img5 from "../assets/cardImg/map2.jpg";
import img6 from "../assets/cardImg/Visitor.jpg";
import img7 from "../assets/cardImg/register.jpg";
import img8 from "../assets/cardImg/bring.jpg";
import img9 from "../assets/cardImg/internal.png";
import img10 from "../assets/cardImg/sri-sri-bangalore.png";
import img11 from "../assets/cardImg/product.jpg";
import MyCarousel1 from "../components/cards/Carousel1";
import PeaceOfMind from "../components/cards/PeaceOfMind";
import ExperiencePeace from "../components/cards/ExperiencePeace";
import TechBasedSolution from "../components/cards/TechBasedSolution";
import FacilitiesAndServices from "../components/section/FacilitiesAndServices";
import StayUpdated from "../components/section/StayUpdated";
import FacilityandServices from "../components/cards/FacilityandServices";
import Popups from "../components/Popups/Popups";

const Home = () => {
  const navigate = useNavigate();
  const items = [
    {
      Contents: "Our Founder",
      Links: "https://gurudev.artofliving.org/",
      img: img1,
    },
    {
      Contents: "Bengaluru International Center",
      Links: "https://bangaloreashram.org/",
      img: img2,
    },
    {
      Contents: "Register for Programs",
      Links: "https://programs.vvmvp.org/",
      img: img7,
    },
    { Contents: "Visitor Service", Links: "http://aolic.org/kiosk", img: img6 },
  ];

  return (
    <div
      style={{
        // backgroundColor: "rgb(255 249 245)",
        padding: "4rem 0 2rem",

        margin: "auto",
      }}
    >
      {/* <Popups /> */}
      <div
        className="flex gap-12 flex-wrap justify-around p-12"
        style={{
          // maxWidth:"00px",
          margin: " auto ",
          paddingBottom: "3rem",
        }}
      >
        {items.map((item, index) => (
          <Card
            key={index}
            link={item.Links}
            name={item.Contents}
            img={item.img}
          />
        ))}
      </div>

      {/* carousel1  */}
      <FacilitiesAndServices />
      <MyCarousel1 />

      {/* Experience  */}
      {/* <ExperiencePeace />  */}
      <StayUpdated />

      <FacilityandServices />

      {/* tech base  */}
      {/* <TechBasedSolution /> */}

      {/* vido  */}

      <PeaceOfMind />

      {/* Carousel */}
      <MyCarousel />
      {/* <MyCarousel1 /> */}
    </div>
  );
};

export default Home;
