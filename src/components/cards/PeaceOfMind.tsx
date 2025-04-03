import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import { youtubeLink } from "../../allapi/api";

// Define a type for the video data
interface YouTubeVideo {
  YouTubeLink: string;
  thumbnail: string; // Include thumbnail for debugging or potential UI improvements
}

// Function to extract YouTube Video ID from URL
const extractYouTubeID = (url: string) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*embed\/|.*shorts\/))([^?&/"'>]+)/
  );
  return match ? match[1] : null;
};

const PeaceOfMind: React.FC = () => {
  const [sriVideos, setSriVideos] = useState<YouTubeVideo[]>([]);

  useEffect(() => {
    axios
      .get<{ links: YouTubeVideo[] }>(youtubeLink) // Typing API response
      .then((response) => {
        console.log(response.data.links, "response youtube");
        setSriVideos(response.data.links);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }} className="p-12">
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "2rem",
          lineHeight: "1.6",
          fontFamily: "Cinzel",
        }}
      >
        Peace Of Mind
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // spaceBetween={20}
        // slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        style={{ width: "100%", margin: "0 auto" }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile (small screens)
          480: { slidesPerView: 1, spaceBetween: 15 }, // Small tablets
          768: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
          1200: { slidesPerView: 3, spaceBetween: 25 }, // Laptops & larger screens
        }}
      >
        {sriVideos.map((video, index) => {
          const videoId = extractYouTubeID(video.YouTubeLink);
          return videoId ? (
            <SwiperSlide key={index}>
              <iframe
                width="100%"
                height="300"
                src={`https://www.youtube.com/embed/${videoId}`} // Corrected embedding format
                title={`Peace of Mind Video ${index + 1}`}
                frameBorder="0"
                allowFullScreen
                style={{ borderRadius: "10px" }}
              ></iframe>
            </SwiperSlide>
          ) : (
            <p key={index} style={{ color: "red" }}>
              {/* Invalid YouTube URL */}
            </p>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PeaceOfMind;
