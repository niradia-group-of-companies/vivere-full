import { useEffect } from "react";
import { VivereFooter } from "./components/common/VivereFooter";
import { SolterraFooter } from "./components/common/SolterraFooter";
import { NavWithoutBtn } from "./components/common/NavWithoutBtn";
import { RegisterFormForPage } from "./components/RegisterFormForPage";

export const Register = () => {
  // useEffect(
  //   () =>
  //     (document.title =
  //       "Vivere by Solterra - North Guildford High-Rise - Surrey New Homes - Register"),
  //   []
  // );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-th_green overflow-x-hidden">
      <div className="w-screen min-h-screen max-w-[1980px] mx-auto">
        <p className="hidden lg:block fixed font-sub -rotate-90 origin-[50%_53%] text-xs font-bold text-th_darkgray -left-16 2xl:-left-10 bottom-40 ">
          a quality development by solterra
        </p>
        <NavWithoutBtn />
        <RegisterFormForPage />
        <VivereFooter />
      </div>
    </div>
  );
};
