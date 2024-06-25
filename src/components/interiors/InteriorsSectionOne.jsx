export default function InteriorsSectionOne() {
  return (
    <div
      className="w-full h-screen max-h-[100vh] min-h-[950px] relative interiors-section-one flex justify-center flex-col 
      xl:flex-row"
    >
      <div class="interiors-section-one-left flex-1 w-full relative">
        <div class="urban-collection-start w-1/4 h-[2px] bg-th_ivory absolute -right-[2%] top-[33%]"></div>
        <div class="urban-collection-end  w-1/4 h-[2px] bg-th_ivory absolute -right-[2%] bottom-[3%]"></div>
      </div>
      <div
        class="interiors-section-one-right flex-1 flex flex-col justify-center items-start bg-th_green
        xl:pt-80"
      >
        <div className="p-5 xl:ml-20">
          <h3
            className="text-th_ivory text-5xl font-semibold font-main tracking-wider text-center mb-5
            xl:text-5xl xl:text-start"
          >
            Urban <br /> Collection
          </h3>
          <div className="w-[500px]">
            <p className="text-th_ivory text-start font-semibold mb-2">
              FROM LEVELS 1 THROUGH 18, REVEL IN THE TIMELESS BEAUTY AND NATURAL
              BALANCE OF THE URBAN COLLECTION
            </p>
            <p className="text-th_ivory pb-2 text-center xl:text-start text-sm">
              Drawing inspiration from the fundamental elements of nature, the
              Urban Collection features the serenity and purity of water and
              air.
            </p>
            <p className="text-th_ivory pb-2 text-center xl:text-start text-sm">
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
