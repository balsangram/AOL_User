import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { Advertisement_Img } from "../../allapi/api";

interface Advertisement {
  link: string;
  img: string;
}

interface RawAdvertisement {
  [key: string]: {
    link: string;
    img: string;
  };
}

const MyCarousel = () => {
  const [ads, setAds] = useState<Advertisement[]>([]);

  useEffect(() => {
    axios
      .get(Advertisement_Img)
      .then((response) => {
        console.log(response.data.data, "response adv");

        if (response.data.data.length > 0) {
          const adData: RawAdvertisement = response.data.data[0]; // Get the first object
          const extractedAds = Object.values(adData)
            .filter((item) => typeof item === "object" && item.img && item.link)
            .map((item) => ({
              link: item.link,
              img: item.img,
            }));
          setAds(extractedAds);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Swiper
      style={{ margin: "5rem 2rem" }}
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
      loop={true}
      grabCursor={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        480: { slidesPerView: 1, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1200: { slidesPerView: 3, spaceBetween: 25 },
      }}
    >
      {ads.map((ad, index) => (
        <SwiperSlide key={index}>
          <a href={ad.link} target="_blank" rel="noopener noreferrer">
            <img
              src={ad.img}
              style={{ height: "40vh", width: "100%", objectFit: "cover" }}
              alt={`Advertisement ${index + 1}`}
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MyCarousel;
