export default function AmenitiesSectionEight() {
  return (
    <div
      className="w-full h-screen max-h-[100vh] min-h-[950px] relative amenities-section-two flex justify-center py-10 flex-col
      xl:flex-row xl:py-20"
    >
      <div className="amenities-section-eight-left flex-1 basis-1/2 w-full"></div>
      <div className="amenities-section-eight-right flex-1 basis-1/2 flex flex-col justify-center items-center xl:items-start py-20 text-th_green xl:pl-10 gap-5">
        <div className="pl-0 xl:pl-5">
          <img src="/img/amenities-section-3-icon-1.png" />
        </div>
        <div className="pl-0 xl:pl-5 w-2/3">
          <p
            className="font-semibold mb-2 text-center text-sm uppercase
      md:text-base
      xl:text-start"
          >
            Leisure
          </p>
          <h3
            className="text-3xl font-semibold font-main tracking-wider text-center mb-5
      xl:text-5xl xl:text-start"
          >
            Peaked Wellness
          </h3>
          <p
            className="pb-2 text-center text-xs
        md:text-sm
      xl:text-start"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupi datat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <div className="flex justify-center xl:justify-start">
            <button
              className="w-fit bg-transparent border border-th_brown
   text-th_brown py-3 lg:py-3 px-9 
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
