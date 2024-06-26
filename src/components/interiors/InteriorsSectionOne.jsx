export default function InteriorsSectionOne() {
  return (
    <div
      className="w-full relative interiors-section-one flex justify-center flex-col bg-th_green
      xl:flex-row xl:h-screen xl:max-h-[100vh] xl:min-h-[950px]"
    >
      <div className="interiors-section-one-left flex-1 w-full relative hidden xl:block">
        <div className="urban-collection-start w-1/5 h-[2px] bg-th_ivory absolute -right-[15%] top-[33%]"></div>
        <div className="urban-collection-end  w-1/5 h-[2px] bg-th_ivory absolute -right-[15%] bottom-[3%]"></div>
      </div>
      <div
        className="interiors-section-one-right flex-1 flex flex-col justify-center items-center py-20
        xl:pt-80 xl:pb-0 xl:items-start"
      >
        <div className="pl-0 xl:pl-20 w-2/3">
          <h3
            className="text-th_ivory text-3xl font-semibold font-main tracking-wider text-center mb-5
            xl:text-5xl xl:text-start"
          >
            Urban <br /> Collection
          </h3>
          <div>
            <p
              className="text-th_ivory font-semibold mb-2 text-center text-sm
            md:text-base
            xl:text-start"
            >
              FROM LEVELS 1 THROUGH 18, REVEL IN THE TIMELESS BEAUTY AND NATURAL
              BALANCE OF THE URBAN COLLECTION
            </p>
            <p
              className="text-th_ivory pb-2 text-center text-xs
              md:text-sm
            xl:text-start"
            >
              Drawing inspiration from the fundamental elements of nature, the
              Urban Collection features the serenity and purity of water and
              air.
            </p>
            <p
              className="text-th_ivory pb-2 text-center text-xs
              md:text-sm
            xl:text-start"
            >
              This mordern collection offers two distinct colour schemes: Acqua,
              which captures the tranquil and refreshing essence of water, and
              Aria, representing the crispness and clarity of air. Each palette
              is thoughtfully curated to bring a sense of calmness and
              tranquility to your living space. promoting a lifestyle that is
              both harmonious and uplifting.
            </p>
            <p className="text-th_ivory pb-5 text-center xl:text-start text-sm">
              The Urban Collection is where every detail is designed to enhance
              your home's ambiance and enrich your daily living.
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
