import React, { useEffect, useState } from "react";
import axios from "axios";
import { Experience_Peace_With_Your_Squad } from "../../allapi/api";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import CarouselCard from "./CarouselCard";

interface Card {
  link: string;
  img: string;
  name: string;
}

function FacilityandServices() {
  const [slides, setSlides] = useState<Card[]>([]);

  useEffect(() => {
    axios
      .get(Experience_Peace_With_Your_Squad)
      .then((response) => {
        console.log(response.data);
        setSlides(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        backgroundColor: "#fff",
        padding: "2rem 0",
      }}
    >
      <h1
        style={{
          marginTop: "3rem 0",
          fontSize: "2rem",
          fontWeight: "bold",
          lineHeight: "1.6",
          fontFamily: "Cinzel",
        }}
      >
        Experience Peace With Your Squad
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={20}
        loop={true}
        grabCursor={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false, // Prevents stopping on interaction
          pauseOnMouseEnter: false, // Prevents pausing on hover
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile (small screens)
          480: { slidesPerView: 2, spaceBetween: 15 }, // Small tablets
          768: { slidesPerView: 3, spaceBetween: 20 }, // Tablets
          1200: { slidesPerView: 4, spaceBetween: 25 }, // Laptops & larger screens
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <CarouselCard img={slide.img} link={slide.link} name={slide.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FacilityandServices;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Experience_Peace_With_Your_Squad } from "../../allapi/api";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Pagination,
//   Autoplay,
//   EffectCoverflow,
// } from "swiper/modules";
// import CarouselCard from "./CarouselCard";

// interface Card {
//   link: string;
//   img: string;
//   name: string;
// }

// function FacilityandServices() {
//   const [slides, setSlides] = useState<Card[]>([]);

//   useEffect(() => {
//     axios
//       .get(Experience_Peace_With_Your_Squad)
//       .then((response) => {
//         console.log(response.data);
//         setSlides(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div
//       style={{
//         margin: "auto",
//         textAlign: "center",
//         backgroundColor: "#fff",
//         padding: "2rem 0",
//       }}
//     >
//       <h1
//         style={{
//           marginTop: "3rem 0",
//           fontSize: "2rem",
//           fontWeight: "bold",
//           lineHeight: "1.6",
//           fontFamily: "Cinzel",
//         }}
//       >
//         Experience Peace With Your Squad
//       </h1>

//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
//         spaceBetween={20}
//         loop={true}
//         grabCursor={true}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false, // Prevents stopping on interaction
//           pauseOnMouseEnter: false, // Prevents pausing on hover
//         }}
//         breakpoints={{
//           320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile (small screens)
//           480: { slidesPerView: 2, spaceBetween: 15 }, // Small tablets
//           768: { slidesPerView: 3, spaceBetween: 20 }, // Tablets
//           1200: { slidesPerView: 4, spaceBetween: 25 }, // Laptops & larger screens
//         }}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <CarouselCard img={slide.img} link={slide.link} name={slide.name} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default FacilityandServices;
