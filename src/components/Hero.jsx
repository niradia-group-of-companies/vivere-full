import { useState, useEffect } from "react";
import { Nav } from "./common/Nav";

export const Hero = () => {
  return (
    <>
      <div className="w-full h-screen min-h-[950px] relative home-hero text-th_ivory bg-local">
        <Nav />
        <div
          className="absolute z-50 right-0 top-1/2 bg-th_green w-full h-full home-hero-heading-section
          xl:right-0 xl:top-1/2 xl:w-1/2 xl:h-full"
        >
          <div
            className="absolute right-[4%] top-[15%]
            xl:right-[9%] xl:top-[15%]"
          >
            <h2
              className="bold font-main flex flex-col gap-2 mb-5 text-2xl
            xl:text-5xl xl:gap-4"
            >
              <span>North Guildford's</span>
              <span>First Residential</span>
              <span>High Rise</span>
            </h2>
            <p
              className="semi-bold flex flex-col text-xs
            xl:text-xl"
            >
              <span>Nestled in North GuildFord, Vivere will be the</span>
              <span>first High-Rise to Emerge Here</span>
            </p>
          </div>
          <div
            className="absolute right-[21%] top-[60%] 
          xl:right-[17%] xl:top-[58%]"
          >
            <h2
              className="bold font-main text-2xl mb-5
              xl:text-5xl xl:mb-10 "
            >
              /Vi.ve.re/
            </h2>
            <p className="semi-bold flex flex-col text-lg mb-4 xl:text-xl xl:mb-4">
              NOUN - TO LIVE
            </p>
            <p
              className="text-xs w-[250px] mb-2 
            xl:text-base xl:w-[500px]"
            >
              Vivere by Solterra embodies a life of enrichment and authenticity.
              Drawing inspiration from the heart of Italian culture, it
              celebrates a lifestyle where simplicity and quality elevate
              everyday living to something extraordinary.
            </p>
            <p
              className="text-xs w-[250px] mb-2 
            xl:text-base xl:w-[500px]"
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
