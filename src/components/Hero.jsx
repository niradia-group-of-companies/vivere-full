import { useState, useEffect } from "react";
import { Nav } from "./common/Nav";

export const Hero = () => {
  return (
    <>
      <div className="w-full h-screen min-h-[950px] relative home-hero text-th_ivory bg-local">
        <Nav />
        <div className="absolute z-[51] top-[47.5%] right-0">
          <button
            className="w-fit z-[200] bg-th_brown border border-th_brown relative top-[3%]
       text-th_ivory hover:bg-th_lightbrown py-3 lg:py-3 px-20 pl-30
       lg:px-20 text-sm lg:text-2xl font-sub cursor-pointer text-center"
          >
            REGISTER
          </button>
        </div>
        <div
          className="absolute z-50 right-0 top-1/2 bg-th_green h-full home-hero-heading-section min-w-[450px]
          xl:right-0 xl:top-1/2 w-1/2 xl:h-full
          sm:min-w-[750px]"
        >
          <div
            className="absolute right-[4%] top-[15%]
            xl:right-[13%] xl:top-[15%]
            sm:right-[8%] sm:top-[15%]"
          >
            <h2
              className="bold font-main flex flex-col gap-2 mb-5 text-2xl
            xl:text-5xl xl:gap-4
            sm:text-3xl
            md:text-5xl"
            >
              <span>North Guildford's</span>
              <span>First Residential</span>
              <span>High Rise</span>
            </h2>
            <p
              className="semi-bold flex flex-col text-xs
            xl:text-xl
            sm:text-lg
            md:text-xl"
            >
              <span>Nestled in North GuildFord, Vivere will be the</span>
              <span>first High-Rise to Emerge Here</span>
            </p>
          </div>
          <div
            className="absolute right-[21%] top-[60%] 
          xl:right-[23%] xl:top-[58%]
          sm:right-[27%] sm:top-[59%]
          md:right-[17%] md:top-[58%]"
          >
            <h2
              className="bold font-main text-2xl mb-5
              xl:text-5xl xl:mb-10
              sm:text-3xl
              md:text-5xl"
            >
              /Vi.ve.re/
            </h2>
            <p
              className="semi-bold flex flex-col text-lg mb-4 
            xl:text-xl xl:mb-4
            md:text-xl"
            >
              NOUN - TO LIVE
            </p>
            <p
              className="text-xs w-[250px] mb-2 
            xl:text-base xl:w-[500px]
            sm:text-sm sm:w-[300px]
            md:text-base md:w-[450px]"
            >
              Vivere by Solterra embodies a life of enrichment and authenticity.
              Drawing inspiration from the heart of Italian culture, it
              celebrates a lifestyle where simplicity and quality elevate
              everyday living to something extraordinary.
            </p>
            <p
              className="text-xs w-[250px] mb-2 
            xl:text-base xl:w-[500px]
            sm:text-sm sm:w-[300px]
            md:text-base md:w-[450px]"
            >
              A home at Vivere offers you a sanctuary of your own, with a list
              of thoughtfully curated amenities tailored for your ease and
              enjoyment, creating a haven you'll be reluctant to leave, and will
              be able to enjoy for years to come.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen max-h-[50vh] min-h-[475px] relative home-section-one text-th_ivory object-fill"></div>
    </>
  );
};
