import React, { useEffect, useState } from "react";
import img1 from "../../assets/cardImg/guruji1.jpg";
import img2 from "../../assets/cardImg/mandap2.jpg";
import img3 from "../../assets/cardImg/audio.jpg";
import img4 from "../../assets/cardImg/vertual.jpg";
// import {  CardContent, CardMedia, Typography } from "@mui/material";
import Card from "../cards/Card";
import { useNavigate } from "react-router-dom";
import { Experience_Center_Digitally } from "../../allapi/api";
import axios from "axios";
// import FacilityandServices from "./FacilityandServices";

interface cards {
  link: string;
  name: string;
  img: string;
}

function FacilitiesAndServices() {
  const [items, setItems] = useState<cards[]>([]);
  useEffect(() => {
    axios
      .get(Experience_Center_Digitally)
      .then((result) => {
        console.log(result.data);
        setItems(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ textAlign: "center", margin: "3rem " }}>
      <h2
        style={{
          marginTop: "3rem",
          fontSize: "2rem",
          fontWeight: "bold",
          padding: "2rem",
          lineHeight: "1.6",
          fontFamily: "Cinzel",
        }}
      >
        {/* Facilities & Services at Center */}
        Experience Center Digitally
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {items.map((item, index) => (
          <Card key={index} link={item.link} name={item.name} img={item.img} />
        ))}
      </div>
    </div>
  );
}

export default FacilitiesAndServices;
