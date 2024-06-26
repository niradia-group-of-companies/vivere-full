import { useState } from "react";
import { TfiAlignRight, TfiClose } from "react-icons/tfi";

export const MobileNav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    console.log("test");
    setHamburgerOpen((prev) => {
      console.log(prev);
      return !prev;
    });
  };

  return (
    <>
      <div
        className="fixed text-th_green top-0 right-0 p-7 z-[999] xl:hidden"
        onClick={toggleHamburger}
      >
        <TfiAlignRight size={50} />
      </div>

      <nav
        className={
          "mobile-nav z-[1000] " + (hamburgerOpen ? "block" : "hidden")
        }
      >
        <div
          className="fixed text-th_ivory p-7 top-0 right-0 z-[1001]"
          onClick={toggleHamburger}
        >
          <TfiClose size={50} />
        </div>

        <ul className="fixed text-3xl font-semibold gap-5 flex flex-col text-th_ivory w-screen h-screen bg-th_green justify-center items-center z-[1000]">
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
