import React, { useEffect, useState } from "react";
import Card from "../../components/cards/Card";
import { useLocation } from "react-router-dom";
import img1 from "../../assets/cardImg/panchakarma.jpg";
import img2 from "../../assets/cardImg/h.jpg";
import axios from "axios";
import { userType_action } from "../../allapi/api";

interface card {
  action: string;
  link: string;
  img: string;
}

function Internal2() {
  const location = useLocation();
  console.log(location.state?.usertype, "location");
  const userType = location.state?.usertype;
  // console.log(userType, "userType");

  const [internal, setInternal] = useState<card[]>([]);
  useEffect(() => {
    axios
      .get(`${userType_action}/${userType}`)
      .then((response) => {
        console.log(response.data, "data action");
        setInternal(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex gap-12 flex-wrap justify-center mt-12">
      {internal.length > 0 ? (
        internal.map((item, index) => (
          <Card
            key={index}
            link={item.link}
            name={item.action}
            img={item.img}
          />
        ))
      ) : (
        <p className="text-gray-500 text-center">No actions available</p>
      )}
    </div>
  );
}

export default Internal2;
