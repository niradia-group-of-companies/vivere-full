import { Link } from "react-router-dom";

export const AmenitiesHero = () => {
  return (
    <>
      <div className="w-full h-screen min-h-[950px] relative amenities-hero text-th_ivory bg-local">
        <div className="absolute z-[51] top-[20%] right-0">
          <Link
            to="/register"
            className="w-fit z-[200] bg-th_brown border border-th_brown relative top-[3%]
            text-th_ivory hover:bg-th_lightbrown py-3 sm:py-3 px-20 pl-30
             sm:text-sm md:text-2xl font-sub cursor-pointer text-center"
          >
            REGISTER
          </Link>
        </div>
        <div
          className="z-50 flex h-full justify-end items-end py-20 px-5
        xl:py-40 xl:px-96
        sm:py-20 sm:px-24"
        >
          <h2
            className="bold font-main flex flex-col gap-2 mb-5 text-7xl 
            xl:flex-col xl:gap-4"
          >
            <span>The</span>
            <span>Amenities</span>
          </h2>
        </div>
      </div>
    </>
  );
};
