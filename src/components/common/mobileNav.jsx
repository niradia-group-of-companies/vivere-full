import { useState } from "react";
import { TfiAlignRight, TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";

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
        <div
          className="fixed text-th_ivory top-0 right-0 p-7 z-[1001] md:p-10"
          onClick={toggleHamburger}
        >
          <TfiClose size={50} />
        </div>

        <ul className="fixed text-3xl font-semibold gap-10 flex flex-col text-th_ivory w-screen h-screen bg-th_green justify-center items-center z-[1000]">
          <li>LOCATION</li>
          <li>
            <Link to="/interiors">INTERIORS</Link>
          </li>
          <li>EXTERIORS</li>
          <li>FLOORPLANS</li>
          <li>AMENITIES</li>
          <li>DEVELOPER</li>
        </ul>
      </nav>

      <div
        className={
          "text-th_green flex w-full justify-end pl-7 z-[999] md:pl-10 xl:hidden mx-auto max-w-[1980px] " +
          (navbar ? "bg-th_ivory fixed" : "bg-transparent")
        }
      >
        <div className="w-full flex flex-row justify-between items-center">
          <Link to="/">
            <img
              src="/logos/Vivere Primary - Green.png"
              className="w-36 lg:w-52 object-contain pr-5"
              alt=""
            />
          </Link>
          <div className="p-7 md:p-10" onClick={toggleHamburger}>
            <TfiAlignRight size={50} />
          </div>
        </div>
      </div>
    </>
  );
};
