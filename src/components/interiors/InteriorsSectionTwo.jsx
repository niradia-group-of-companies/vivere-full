import InteriorsSlideshow from "./InteriorSlideshow";

export default function InteriorsSectionTwo() {
  return (
    <div className="w-full relative interiors-section-one flex justify-center flex-col">
      <div className="interiors-section-one-right bg-transparent">
        <div className="ubran-collection-description p-5 flex flex-col justify-center items-center">
          <h3 className="text-th_green text-6xl font-semibold font-main tracking-wider text-center my-10">
            Urban Collection <br /> Colour Schemes
          </h3>
          <div
            className="flex flex-col justify-center items-center text-th_green text-center pb-10
          xl:w-[600px]"
          >
            <p className="pb-5 text-center text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae
              id perferendis qui assumenda iste dolore voluptatibus, earum optio
              vero? Minima eaque nesciunt pariatur cumque odio id rerum, vitae
              aut!
            </p>
            <p className="text-center text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              tempora, tenetur est exercitationem nulla a quibusdam? Ex qui,
              veniam harum quasi sit quod, totam molestiae libero unde adipisci
              sequi fugit.
            </p>
          </div>
        </div>
        <div className="urban-collection-image-carousal">
          <div className="flex flex-col justify-center items-center text-th_green text-center">
            <div className="pb-5 text-center text-xl flex flex-row gap-6 justify-center items-center">
              <span>ARIA</span>
              <span className="w-[2px] h-[22px] bg-th_green"></span>
              <span>ACQUA</span>
            </div>
          </div>
          <div className="py-10 xl:px-80">
            <InteriorsSlideshow />
          </div>
        </div>
      </div>
    </div>
  );
}
