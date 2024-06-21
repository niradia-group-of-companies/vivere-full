import { useState, useEffect } from "react";
import { Nav } from "./common/Nav";

export const Hero = () => {
  return (
    <>
      <div className="w-full h-screen min-h-[950px] relative home-hero text-th_ivory bg-local">
        <Nav />
        <div className="absolute right-0 top-1/2 z-50 bg-th_green w-1/2 h-full home-hero-heading-section">
          <div className="absolute right-[13%] top-[15%]">
            <h2 className="text-5xl bold font-main flex flex-col gap-4 mb-5">
              <span>North Guildford's</span>
              <span>First Residential</span>
              <span>High Rise</span>
            </h2>
            <p className="text-xl semi-bold flex flex-col">
              <span>Nestled in North GuildFord, Vivere will be the</span>
              <span>first High-Rise to Emerge Here</span>
            </p>
          </div>
          <div className="absolute right-[26%] top-[60%]">
            <h2 className="text-5xl bold font-main mb-10">/Vi.ve.re/</h2>
            <p className="text-xl semi-bold flex flex-col mb-4">
              NOUN - TO LIVE
            </p>
            <p>
              Vivere by Solterra embodies a life of enrichment and authenticity.
              <br />
              Drawing inspiration from the heart of Italian culture, it
              celebrates
              <br />
              a lifestyle where simplicity and quality elevate everyday living
              to
              <br />
              something extraordinary.
            </p>
            <p>
              A home at Vivere offers you a sanctuary of your own, with a
              <br />
              list of thoughtfully curated amenities tailored for your ease and
              <br />
              enjoyment, creating a haven you'll be reluctant to leave, and will
              <br />
              be able to enjoy for years to come.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen max-h-[50vh] min-h-[475px] relative home-section-one text-th_ivory object-fill"></div>
    </>
  );
};
