import "./App.css";
import { useEffect } from "react";
import { Hero } from "./components/Hero";
import { LeadCopy } from "./components/LeadCopy";
import { RegisterForm } from "./components/RegisterForm";
import { Nav } from "./components/common/Nav";
import { SolterraFooter } from "./components/common/SolterraFooter";
import { VivereFooter } from "./components/common/VivereFooter";
import HomeSectionTwo from "./components/HomeSectionTwo";
import HomeSectionThree from "./components/HomeSectionThree";

function App() {
  useEffect(
    () =>
      (document.title =
        "Vivere by Solterra - North Guildford High-Rise - Surrey New Homes"),
    []
  );

  return (
    <div className="bg-th_ivory overflow-x-hidden">
      <div className="w-screen mx-auto max-w-[1980px]">
        <p className="hidden lg:block fixed font-sub -rotate-90 origin-[50%_53%] text-xs font-bold text-th_darkgray -left-16 2xl:-left-10 bottom-40 z-[100]">
          a quality development by solterra
        </p>
        <Hero />
        <HomeSectionTwo />
        <HomeSectionThree />
        <SolterraFooter />
        <VivereFooter />
      </div>
    </div>
  );
}

export default App;
