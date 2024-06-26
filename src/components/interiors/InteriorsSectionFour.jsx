export default function InteriorsSectionFour() {
  return (
    <div
      className="w-full h-screen max-h-[100vh] min-h-[950px] relative interiors-section-one flex justify-center flex-col 
        xl:flex-row"
    >
      <div className="interiors-section-one-left flex-1 w-full relative">
        <div className="urban-collection-start w-1/4 h-[2px] bg-th_ivory absolute -right-[2%] top-[13%]"></div>
        <div className="urban-collection-end w-1/4 h-[2px] bg-th_ivory absolute -right-[2%] top-[33%]"></div>
      </div>
      <div
        className="interiors-section-one-right flex-1 flex flex-col justify-center items-start bg-th_darkgray
          xl:pt-80"
      >
        <div className="p-5 xl:ml-20">
          <h3
            className="text-th_ivory text-5xl font-semibold font-main tracking-wider text-center mb-5
              xl:text-5xl xl:text-start"
          >
            Private <br /> Collection
          </h3>
          <div className="xl:w-[500px]">
            <p className="text-th_ivory text-center xl:text-start font-semibold mb-2 uppercase">
              Levels 19 and 20 emcompass the sub-penthouse and penthouse
              residences that pair spectacular views iwht luxurious finishes
            </p>
            <p className="text-th_ivory pb-2 text-center xl:text-start text-sm">
              The Vivere Private Collection is a tribute to the core elements of
              life-Flora and Fauna-enriching these seven residences with the
              essence of the natural world.
            </p>
            <p className="text-th_ivory pb-2 text-center xl:text-start text-sm">
              The Flora colour scheme embraces the dynamic and rich diversity of
              animal life, featuring deep, earthy tones and intricate patterns
              that reflect the intricate beauty and complexity of wildlife. In
              contrast, Fauna draws from the lush, verdant vitality of plant
              life, incorporating wood textures and green tones that echo the
              forest's serene and nourishing environment.
            </p>
            <p className="text-th_ivory pb-5 text-center xl:text-start text-sm">
              Togeter, these exclusive colour schemes to the Private Collection
              offer a sophisticated home designed to harmonize urban living with
              the timeless beauty of nature.
            </p>
          </div>
          <div className="flex justify-center xl:justify-start">
            <button
              className="w-fit bg-transparent border border-th_ivory
           text-th_ivory py-3 lg:py-3 px-9 
           lg:px-10 mt-3 text-sm lg:text-base font-sub cursor-pointer text-center"
            >
              DOWNLOAD FEATURES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
