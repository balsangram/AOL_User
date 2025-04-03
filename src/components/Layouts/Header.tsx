import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IRootState } from "../../store";
import {
  toggleRTL,
  toggleTheme,
  toggleSidebar,
} from "../../store/themeConfigSlice";
import IconMenu from "../Icon/IconMenu";

import logo from "../../../public/assets/logo/AOL LOGO BANGALORE ASHRAM BLACK.png";

const Header = () => {
  const isRtl =
    useSelector((state: IRootState) => state.themeConfig.rtlClass) === "rtl"
      ? true
      : false;

  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const dispatch = useDispatch();

  // function createMarkup(messages: any) {
  //     return { __html: messages };
  // }

  return (
    <>
      {/* {!authState.isAuthenticated &&  <Login /> } */}

      <header
        className={`z-40 ${
          themeConfig.semidark && themeConfig.menu === "horizontal"
            ? "dark"
            : ""
        }`}
      >
        <div
          className="shadow-sm"
          style={{
            // height:"6rem",
            background: " #FFF",
          }}
        >
          <div
            className="relative flex justify-between w-full items-center px-5 py-2.5 dark:bg-black"
            style={{}}
          >
            <button
              type="button"
              className="collapse-icon flex-none dark:text-[#d0d2d6] hover:text-primary dark:hover:text-primary flex lg:hidden ltr:ml-2 rtl:mr-2 p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
              onClick={() => {
                dispatch(toggleSidebar());
              }}
            >
              <IconMenu className="w-5 h-5" />
            </button>
            <div className="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2 ">
              <Link to="/" className="main-logo flex items-center  shrink-0">
                <img
                  className="w-32 ltr:-ml-1 rtl:-mr-1 inline"
                  src={logo}
                  alt="logo"
                />
                {/* <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5  font-semibold  align-middle hidden md:inline dark:text-white-light transition-all duration-300">Art Of Living</span> */}
              </Link>
            </div>
            <button
              type="button"
              className="collapse-icon flex-none  dark:hover:text-primary flex lg:hidden ltr:ml-2 rtl:mr-2 p-2 rounded-full"
              // onClick={() => {
              //     dispatch(toggleSidebar());
              // }}
            >
              <IconMenu className="w-5 h-5 opacity-0" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../../public/assets/logo/AOL LOGO BANGALORE ASHRAM BLACK.png";

// function Header() {
//   const navigate = useNavigate();
//   return (
//     <div
//     className="shadow-xl"
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent:"center",
//         backgroundColor:"white",
//         padding: "10px",
//         boxShadow: "0px 0px 10px 0 rgb(97 75 66 / 70%)"
//       }}
//     >
//       <img src={logo} alt=""
//       onClick={()=>{
//         navigate("/")
//       }}
//       style={{
//         height:"4rem"
//       }}
//       />

//     </div>
//   );
// }

// export default Header;
