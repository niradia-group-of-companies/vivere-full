import { useState } from "react";
import { TfiAlignRight, TfiClose } from "react-icons/tfi";

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
      <div
        className={
          "text-th_green flex w-full justify-end p-7 z-[999] md:p-10 xl:hidden mx-auto max-w-[1980px] " +
          (navbar ? "bg-th_ivory fixed" : "bg-transparent")
        }
        onClick={toggleHamburger}
      >
        <div className="w-full flex flex-row justify-between items-center">
          <a className="block" href="/">
            <img
              src="/logos/Vivere Primary - Green.png"
              className="w-36 lg:w-52 object-contain pr-5"
              alt=""
            />
          </a>
          <TfiAlignRight size={50} />
        </div>
      </div>

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
          <li>INTERIORS</li>
          <li>EXTERIORS</li>
          <li>FLOORPLANS</li>
          <li>AMENITIES</li>
          <li>DEVELOPER</li>
        </ul>
      </nav>
    </>
  );
};
