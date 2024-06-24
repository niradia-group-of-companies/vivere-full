export const Nav = () => {
  return (
    <>
      <nav className="w-11/12 lg:w-10/12 mx-auto pt-8 pb-5 relative z-30">
        <div
          className="w-full h-full 
      xl:flex xl:items-center xl:justify-between"
        >
          <a className="block" href="/">
            <img
              src="/logos/Vivere Primary - Green.png"
              className="w-36 lg:w-52 object-contain"
              alt=""
            />
          </a>
          <ul
            class="text-xl font-semibold gap-16 flex-row text-th_green hidden
         xl:flex"
          >
            <li>LOCATION</li>
            <li>INTERIORS</li>
            <li>EXTERIORS</li>
            <li>FLOORPLANS</li>
            <li>AMENITIES</li>
            <li>DEVELOPER</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

{
  /* <div className="w-full h-full flex justify-end items-center pt-10">
<a
  className="inline-block bg-th_brown text-th_ivory hover:bg-th_gray -skew-x-[20deg] py-2.5 lg:py-4 px-6 lg:px-12 text-sm lg:text-base font-sub cursor-pointer"
  href="#register"
>
  <span className="block tracking-widest font-sub skew-x-[20deg]">
    REGISTER
  </span>
</a>
</div> */
}
