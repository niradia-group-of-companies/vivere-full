import { useState } from "react";
import { NavLink } from "react-router-dom";

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
          "w-full justify-center items-center pt-8 pb-5 z-[100] xl:flex hidden mx-auto max-w-[1980px] fixed " +
          (navbar ? "bg-th_ivory" : "bg-transparent")
        }
      >
        <div
          className="w-full h-full
        xl:flex xl:items-center xl:justify-between px-20"
        >
          <NavLink to="/">
            <img
              src="/logos/Vivere Primary - Green.png"
              className="w-36 lg:w-52 object-contain pr-5"
              alt=""
            />
          </NavLink>
          <ul className="text-xl font-semibold gap-16 flex-row text-th_green flex">
            <li>LOCATION</li>
            <li>
              <NavLink
                className={({ isActive, isPending, isTransitioning }) =>
                  [isActive ? "text-th_brown" : ""].join(" ") +
                  " hover:text-th_brown"
                }
                to="/interiors"
              >
                INTERIORS
              </NavLink>
            </li>
            <li>EXTERIORS</li>
            <li>
              <NavLink
                className={({ isActive, isPending, isTransitioning }) =>
                  [isActive ? "text-th_brown" : ""].join(" ")
                }
                to="/amenities"
              >
                AMENITIES
              </NavLink>
            </li>
            <li>DEVELOPER</li>
          </ul>
        </div>
      </nav>
    </>
  );
};
