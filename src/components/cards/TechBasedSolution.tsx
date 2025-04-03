// import React from "react";
// import img1 from "../../assets/cardImg/guruji1.jpg";
// import img2 from "../../assets/cardImg/mandap2.jpg";
// import img3 from "../../assets/cardImg/audio.jpg";
// import img4 from "../../assets/cardImg/vertual.jpg";
// // import {  CardContent, CardMedia, Typography } from "@mui/material";
// import Card from "./Card";

// function TechBasedSolution() {
//   const items = [
//     { Contents: "Virtual Tour", Links: "", img: img1 },
//     { Contents: "Audio Tour", Links: "", img: img2 },
//     { Contents: "Register", Links: "", img: img3 },
//     { Contents: "Visitors", Links: "", img: img4 },
//   ];

//   return (
//     <div style={{ textAlign: "center", marginTop: "2rem" }}>
//       <h2>EXPERIENCE PEACE WITH YOUR SQUAD</h2>

//       <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
//         {items.map((item, index) => (
//        <Card key={index} link={item.Links} name={item.Contents} img={item.img} />
//         ))}
//       </div>
//     </div>
//   );
// }



// export default TechBasedSolution;



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import img1 from '../../assets/images/sri.jpg';
import img2 from '../../assets/images/sri1.jpg';
import img3 from '../../assets/images/sri2.jpeg';
import CarouselCard from './CarouselCard';

const slides = [
  { id: 1, img: img1, name: "Virtual Tour" },
  { id: 2, img: img1, name: "Audio Tour" },
  { id: 3, img: img3, name: "Virtual Tour" },
  { id: 4, img: img2, name: "Explore the world" },
];

const TechBasedSolution = () => {
  return (
    <div style={{ margin: "auto", textAlign: "center",
      backgroundColor:"#fff",
      padding:"2rem 0"    //  maxWidth: "1200px"
      }}>
      <h1 style={{ marginTop: "3rem", fontSize: "2rem", fontWeight: "bold" }}>
      EXPERIENCE PEACE WITH YOUR SQUAD
      </h1>

      <Swiper
        // style={{ margin: "0 2rem" }}
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        grabCursor={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <CarouselCard img={slide.img} name={slide.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechBasedSolution;
