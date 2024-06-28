import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { TfiAlignRight, TfiClose } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

export const MobileNav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => {
      return !prev;
    });
  };

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
          "mobile-nav z-[1000] " + (hamburgerOpen ? "block" : "hidden")
        }
      >
        <Fade>
          <ul className="fixed text-3xl font-semibold gap-10 flex flex-col text-th_ivory w-screen h-screen bg-th_green justify-center items-center z-[1000]">
            <li
              className="fixed text-th_ivory top-0 right-0 p-7 z-[1001] md:p-10 cursor-pointer"
              onClick={toggleHamburger}
            >
              <TfiClose size={50} />
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending, isTransitioning }) =>
                  [isActive ? "text-th_brown" : ""].join(" ")
                }
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li>LOCATION</li>
            <li>
              <NavLink
                className={({ isActive, isPending, isTransitioning }) =>
                  [isActive ? "text-th_brown" : ""].join(" ")
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
        </Fade>
      </nav>

      <div
        className={
          "text-th_green flex w-full justify-end pl-7 z-[999] md:pl-10 xl:hidden mx-auto max-w-[1980px] duration-300 fixed " +
          (navbar ? "bg-th_ivory" : "bg-transparent")
        }
      >
        <div className="w-full flex flex-row justify-between items-center">
          <NavLink to="/">
            <img
              src="/logos/Vivere Primary - Green.png"
              className="w-36 lg:w-52 object-contain pr-5"
              alt=""
            />
          </NavLink>
          <div className="p-7 md:p-10 cursor-pointer" onClick={toggleHamburger}>
            <TfiAlignRight size={50} />
          </div>
        </div>
      </div>
    </>
  );
};
