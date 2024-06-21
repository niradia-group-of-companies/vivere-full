import Authentically from "./Authentically";

export const HomeSectionThree = () => {
  return (
    <div className="w-full h-screen max-h-[100vh] min-h-[950px] relative home-section-three flex justify-center py-20">
      <div class="section-three-left py-48 flex-1  basis-1/3 flex flex-col justify-center items-center">
        <div>
          <h3 className="text-th_green text-6xl font-semibold font-main tracking-wider mb-20">
            Savour the <br /> Joy of Living
          </h3>
          <p className="text-th_green text-xl font-semibold mb-5">
            BEGIN THE LIFE OF YOUR DREAMS
          </p>
          <p className="text-th_green pb-10">
            More than simply a residence, Vivere is a nurturing space <br />
            for families and an oasis where each moment is treasured. <br />
            connecting residents with the joy and essence of the present <br />
            in a well-established, integrated community.
          </p>

          <button
            className="w-fit bg-transparent border border-th_brown
       text-th_brown hover:bg-th_lightbrown py-3 lg:py-3 px-9 
       lg:px-10 mt-3 text-sm lg:text-base font-sub cursor-pointer"
          >
            EXPLORE INTERIORS
          </button>
        </div>
      </div>
      <div class="home-section-three-right flex-1 basis-2/3 w-full"></div>
    </div>
  );
};

export default HomeSectionThree;
