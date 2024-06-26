import { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav
        className={
          "w-full justify-center items-center pt-8 pb-5 z-[100] xl:flex hidden mx-auto max-w-[1980px] " +
          (navbar ? "bg-th_ivory fixed" : "bg-transparent")
        }
      >
        <div
          className="w-full h-full
        xl:flex xl:items-center xl:justify-around"
        >
          <Link to="/">
            <img
              src="/logos/Vivere Primary - Green.png"
              className="w-36 lg:w-52 object-contain pr-5"
              alt=""
            />
          </Link>
          <ul className="text-xl font-semibold gap-16 flex-row text-th_green flex">
            <li>LOCATION</li>
            <li>
              <Link to="/interiors">INTERIORS</Link>
            </li>
            <li>EXTERIORS</li>
            <li>FLOORPLANS</li>
            <li>AMENITIES</li>
            <li>DEVELOPER</li>
          </ul>
        </div>
      </nav>
    </>
  );
};
