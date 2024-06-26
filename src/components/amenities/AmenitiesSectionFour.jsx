import { IoCheckmarkOutline } from "react-icons/io5";

export default function AmenitiesSectionFour() {
  return (
    <div
      className="w-full relative amenities-section-three flex justify-center flex-col
      xl:flex-row"
    >
      <div
        className="amenities-section-three-left flex-1 flex flex-col justify-center items-center py-20 text-th_green 
      xl:pl-10 xl:flex-row xl:items-start"
      >
        <div className="pb-5">
          <img src="/img/amenities-section-3-icon-1.png" />
        </div>
        <div className="pl-0 xl:pl-5 w-2/3">
          <p
            className="font-semibold mb-2 text-center uppercase
            md:text-base
            xl:text-xl xl:text-start"
          >
            Well Being
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
        </div>
      </div>
      <div className="amenities-section-three-right flex-1 flex-col justify-center items-start py-20 text-th_green hidden xl:flex">
        <div className="pl-0 xl:pl-20 w-2/3">
          <p
            className="font-semibold mb-2 text-center text-sm uppercase
            md:text-base
            xl:text-xl xl:text-start"
          >
            Amenities Spaces Include:
          </p>
          <ul className="text-3xl flex flex-col gap-3">
            <li className="flex flex-col gap-2">
              <div className="flex gap-5 items-center">
                <IoCheckmarkOutline />
                <span className="text-2xl">Concierge</span>
              </div>
              <div className="h-[2px] w-full bg-th_brown"></div>
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex gap-5 items-center">
                <IoCheckmarkOutline />
                <span className="text-2xl">Parcel Room</span>
              </div>
              <div className="h-[2px] w-full bg-th_brown"></div>
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex gap-5 items-center">
                <IoCheckmarkOutline />
                <span className="text-2xl">Cold Storage</span>
              </div>
              <div className="h-[2px] w-full bg-th_brown"></div>
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex gap-5 items-center">
                <IoCheckmarkOutline />
                <span className="text-2xl">Bike Storage</span>
              </div>
              <div className="h-[2px] w-full bg-th_brown"></div>
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex gap-5 items-center">
                <IoCheckmarkOutline />
                <span className="text-2xl">Guest Suite</span>
              </div>
              <div className="h-[2px] w-full bg-th_brown"></div>
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex gap-5 items-center">
                <IoCheckmarkOutline />
                <span className="text-2xl">EV Chargers</span>
              </div>
              <div className="h-[2px] w-full bg-th_brown"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
