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
            className="text-xl font-semibold gap-16 flex-row text-th_green hidden
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
