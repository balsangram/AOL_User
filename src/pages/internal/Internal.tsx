import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { user_Type } from "../../allapi/api";

interface card {
  link: string;
  usertype: string;
  img: string;
  state: string;
}

function Internal() {
  // const navigate = useNavigate();

  const [internal, setInternal] = useState<card[]>([]);
  useEffect(() => {
    axios
      .get(user_Type)
      .then((response) => {
        console.log(response.data);
        setInternal(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex gap-12 flex-wrap justify-center my-12">
      {internal.map((item, index) => (
        <Link
          to="/internal2"
          state={{ usertype: item.usertype }} // Sending data in state
          className="  shadow-2xl flex  p-10 
                    transition-all duration-500 ease-in-out
                    w-full flex-col cursor-pointer min-w-6
                     text-[#5A382D]
                 hover:text-[#7B480F] hover:font-bold hover:shadow-2xl hover:scale-105 hover:px-7"
          style={{
            backgroundColor: "white",
            boxShadow: "10px 10px 20px 0 rgb(97 75 66 / 70%)",
            borderRadius: "4px",
            maxWidth: "15rem",
            maxHeight: "15rem",
            // minWidth:"15rem"
          }}
        >
          <img
            src={item.img}
            alt=""
            style={{
              height: "5rem",
              width: "5rem",
              margin: "auto",
              borderRadius: "5rem",
            }}
          />

          <a
            //  href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center m-auto text-xl mt-4"
          >
            {item.usertype}
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Internal;
