export const InteriorsHero = () => {
  return (
    <>
      <div className="w-full h-screen min-h-[950px] relative interior-hero text-th_ivory bg-local">
        <div className="absolute z-[51] -top-[2.5%] right-0">
          <button
            className="w-fit z-[200] bg-th_brown border border-th_brown relative top-[3%]
       text-th_ivory hover:bg-th_lightbrown py-3 lg:py-3 px-20 pl-30
       lg:px-20 text-sm lg:text-2xl font-sub cursor-pointer text-center"
          >
            REGISTER
          </button>
        </div>
        <div className="z-50 flex py-40 px-96 justify-end items-end h-full">
          <h2
            className="bold font-main flex flex-col gap-2 mb-5
            text-7xl xl:gap-4"
          >
            <span>The</span>
            <span>Homes</span>
          </h2>
        </div>
      </div>
    </>
  );
};