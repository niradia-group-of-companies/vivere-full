export const SolterraFooter = () => {
  return (
    <div className="bg-th_darkgray bg-solterra bg-contain bg-no-repeat h-fit w-full p-20">
      <div className="h-full mx-auto pb-0 flex items-start justify-between flex-col gap-6">
        <div
          className=" w-full flex justify-center items-start flex-col gap-4 
        md:items-end"
        >
          <div className="flex-1"></div>
          <div
            className="text-white font-sub max-w-max w-full h-auto inline-block flex-1
          md:max-w-[300px] 
          lg:max-w-[680px]"
          >
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
              Solterra understands the importance of home and prides themselves
              on creating residences that feature exceptional design, solid
              construction, and quality finishes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
