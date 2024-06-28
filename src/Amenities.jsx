import "./App.css";
import { useEffect } from "react";
import { VivereFooter } from "./components/common/VivereFooter";
import { MobileNav } from "./components/common/MobileNav";
import { Nav } from "./components/common/Nav";
import { AmenitiesHero } from "./components/amenities/AmenitiesHero";
import AmenitiesSectionOne from "./components/amenities/AmenitiesSectionOne";
import AmenitiesSectionTwo from "./components/amenities/AmenitiesSectionTwo";
import AmenitiesSectionThree from "./components/amenities/AmenitiesSectionThree";
import AmenitiesSlideshow from "./components/amenities/AmenitiesSlideshow";
import AmenitiesSectionFour from "./components/amenities/AmenitiesSectionFour";
import AmenitiesSectionFive from "./components/amenities/AmenitiesSectionFive";
import AmenitiesSectionSix from "./components/amenities/AmenitiesSectionSix";
import AmenitiesSlideShowTwo from "./components/amenities/AmenitiesSlideShowTwo";
import AmenitiesSectionSeven from "./components/amenities/AmenitiesSectionSeven";
import AmenitiesSectionEight from "./components/amenities/AmenitiesSectionEight";

function Amenities() {
  // useEffect(
  //   () =>
  //     (document.title =
  //       "Vivere by Solterra - North Guildford High-Rise - Surrey New Homes"),
  //   []
  // );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-th_ivory overflow-x-hidden">
      <div className="w-screen mx-auto max-w-[1980px]">
        <MobileNav />
        <p className="hidden lg:block fixed font-sub -rotate-90 origin-[50%_53%] text-xs font-bold text-th_darkgray -left-16 2xl:-left-10 bottom-40 z-[100]">
          a quality development by solterra
        </p>
        <Nav />
        <AmenitiesHero />
        <AmenitiesSectionOne />
        <AmenitiesSectionTwo />
        <AmenitiesSectionThree />
        <AmenitiesSlideshow />
        <AmenitiesSectionFour />
        <AmenitiesSectionFive />
        <AmenitiesSectionSix />
        <AmenitiesSlideShowTwo />
        <AmenitiesSectionSeven />
        <AmenitiesSectionEight />
        <VivereFooter />
      </div>
    </div>
  );
}

export default Amenities;
