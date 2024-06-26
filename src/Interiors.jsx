import "./App.css";
import { useEffect } from "react";
import { InteriorsHero } from "./components/interiors/InteriorsHero";
import InteriorsSectionOne from "./components/interiors/InteriorsSectionOne";
import InteriorsSectionTwo from "./components/interiors/InteriorsSectionTwo";
import { VivereFooter } from "./components/common/VivereFooter";
import { MobileNav } from "./components/common/MobileNav";
import { Nav } from "./components/common/Nav";
import InteriorsSectionThree from "./components/interiors/InteriorsSectionThree";
import InteriorsSectionFour from "./components/interiors/InteriorsSectionFour";
import InteriorsSectionFive from "./components/interiors/InteriorsSectionFive";

function Interiors() {
  // useEffect(
  //   () =>
  //     (document.title =
  //       "Vivere by Solterra - North Guildford High-Rise - Surrey New Homes"),
  //   []
  // );

  return (
    <div className="bg-th_ivory overflow-x-hidden">
      <div className="w-screen mx-auto max-w-[1980px]">
        <MobileNav />
        <p className="hidden lg:block fixed font-sub -rotate-90 origin-[50%_53%] text-xs font-bold text-th_darkgray -left-16 2xl:-left-10 bottom-40 z-[100]">
          a quality development by solterra
        </p>
        <Nav />
        <InteriorsHero />
        <InteriorsSectionOne />
        <InteriorsSectionTwo />
        <InteriorsSectionThree />
        <InteriorsSectionFour />
        <InteriorsSectionFive />
        <VivereFooter />
      </div>
    </div>
  );
}

export default Interiors;
