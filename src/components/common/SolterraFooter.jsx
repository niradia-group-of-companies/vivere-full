export const SolterraFooter = () => {
  return (
    <div className="bg-th_darkgray bg-solterra bg-contain bg-no-repeat w-full py-20">
      <div
        className="flex justify-center flex-col items-center px-20
        xl:flex-row xl:items-start xl:px-0"
      >
        <div className="basis-1/2 flex-1 hidden xl:flex">
          <img
            className="pl-20 max-h-[500px]"
            src="/img/solterra-construction.png"
            alt="solterra-construction.png"
          />
        </div>
        <div className="text-white font-sub flex-1 basis-1/2">
          <img
            className="mb-20"
            src="/logos/solterra_footer_logo.svg"
            alt="solterra_logo"
          />
          <h3 className="pb-8 text-3xl font-pluto">
            A QUALITY <br />
            DEVELOPMENT
          </h3>
          <p
            className="hidden text-sm font-sub
             md:block md:text-base "
          >
            Solterra understands the importance of home and prides
            <br />
            themselves on creating residences that feature exceptional design,
            <br />
            solid construction, and quality finishes.
          </p>
          <p
            className="block text-sm whitespace-break-spaces font-sub leading-none
             md:hidden md:text-base 
             lg:leading-none"
          >
            Solterra understands the importance of home and prides themselves on
            creating residences that feature exceptional design, solid
            construction, and quality finishes.
          </p>
        </div>
      </div>
    </div>
  );
};
