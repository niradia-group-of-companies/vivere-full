export const HomeSectionThree = () => {
  return (
    <div
      className="w-full h-screen max-h-[100vh] min-h-[950px] relative home-section-three flex justify-center py-10 flex-col 
    xl:flex-row xl:py-20"
    >
      <div
        class="section-three-left flex-1  basis-1/3 flex flex-col justify-center items-center 
      xl:py-48"
      >
        <div className="p-10">
          <h3
            className="text-th_green text-5xl font-semibold font-main tracking-wider text-center mb-5
          xl:mb-10 xl:text-6xl xl:text-start"
          >
            Savour the <br /> Joy of Living
          </h3>
          <p
            className="text-th_green text-xl font-semibold mb-5 text-center 
          xl:text-start"
          >
            BEGIN THE LIFE OF YOUR DREAMS
          </p>
          <p className="text-th_green pb-10 text-center xl:text-start">
            More than simply a residence, Vivere is a nurturing space for
            families and an oasis where each moment is treasured. connecting
            residents with the joy and essence of the present in a
            well-established, integrated community.
          </p>
          <div className="flex justify-center xl:justify-start">
            <button
              className="w-fit bg-transparent border border-th_brown
       text-th_brown hover:bg-th_lightbrown py-3 lg:py-3 px-9 
       lg:px-10 mt-3 text-sm lg:text-base font-sub cursor-pointer text-center"
            >
              EXPLORE INTERIORS
            </button>
          </div>
        </div>
      </div>
      <div class="home-section-three-right flex-1 basis-2/3 w-full"></div>
    </div>
  );
};

export default HomeSectionThree;
