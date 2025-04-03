import React, { useEffect, useState } from "react";
// import img1 from "../../assets/images/image1.png"
import Card from "../cards/Card";
import axios from "axios";
import { Stay_Updated } from "../../allapi/api";

interface card {
  name: string;
  link: string;
  img: string;
}

function StayUpdated() {
  // const items = [
  //   { Contents: "Daily Events & Activities", Links: "", img: img1 },
  //   { Contents: "Upcoming Programs & Events", Links: "", img: img1 },
  // ];
  const [items, setItems] = useState<card[]>([]);
  useEffect(() => {
    axios
      .get(Stay_Updated)
      .then((response) => {
        console.log(response.data, "Stay_Updated");
        setItems(response.data);
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
        Stay Updated
      </h2>
      <div className="flex items-center justify-center gap-8">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {items.map((item, index) => (
            <Card
              key={index}
              link={item.link}
              name={item.name}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StayUpdated;
