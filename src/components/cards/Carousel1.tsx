import React, { useEffect, useState } from "react";
import axios from "axios";
import { Experience_Peace_With_Your_Squad, Facilities_Services_at_Center } from "../../allapi/api";
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
const MyCarousel = () => {

  const [slides, setSlides] = useState<Card[]>([]);

  useEffect(() => {
    axios
      .get(Facilities_Services_at_Center)
      .then((response) => {
        console.log(response.data);
        setSlides(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 font-cinzel">
          Facilities & Services at Center
        </h1>

        <div className="relative">
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
      </div>
    </section>
  );
};

export default MyCarousel;

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import {
//   Navigation,
//   Pagination,
//   Autoplay,
//   EffectCoverflow,
// } from "swiper/modules";
// import CarouselCard from "./CarouselCard";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Facilities_Services_at_Center } from "../../allapi/api";

// interface Card {
//   img: string;
//   name: string;
//   link: string;
// }

// const MyCarousel1 = () => {
//   const [slides, setSlides] = useState<Card[]>([]);

//   useEffect(() => {
//     axios
//       .get(Facilities_Services_at_Center)
//       .then((response) => {
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
//         Facilities & Services at Center
//       </h1>

//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
//         spaceBetween={20}
//         loop={true}
//         loopAdditionalSlides={1} // Ensures smooth infinite looping
//         grabCursor={true}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: false,
//           waitForTransition: true, // Waits for slide transition to complete
//         }}
//         speed={800} // Slightly faster for smoother feel
//         breakpoints={{
//           320: { slidesPerView: 1, spaceBetween: 10 },
//           480: { slidesPerView: 2, spaceBetween: 15 },
//           768: { slidesPerView: 3, spaceBetween: 20 },
//           1200: { slidesPerView: 4, spaceBetween: 25 },
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
// };

// export default MyCarousel1;
