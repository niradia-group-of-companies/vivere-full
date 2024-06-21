export const Nav = () => {
  return (
    // <nav className=" w-11/12 lg:w-10/12 mx-auto static lg:relative flex justify-between lg:justify-end items-center pt-8 pb-5 lg:py-14">
    //      <a className="block static lg:absolute left-0 lg:left-1/2 translate-x-0 lg:-translate-x-1/2" href="/"><img src="/logos/Vivere Primary - Green.png" className="w-40 lg:w-52 object-contain" alt="" /></a>
    //      <a className="bg-th_brown text-th_ivory hover:bg-th_gray py-3 lg:py-4 px-8 lg:px-12 text-sm lg:text-base font-sub inline-block cursor-pointer" href="#register">Register</a>
    // </nav>
    <nav className="w-11/12 lg:w-10/12 mx-auto pt-8 pb-5 relative z-30">
      <div className="w-full h-full flex items-center justify-between">
        <a className="block" href="/">
          <img
            src="/logos/Vivere Primary - Green.png"
            className="w-36 lg:w-52 object-contain"
            alt=""
          />
        </a>
        <ul class="text-th_green flex text-xl font-semibold gap-16">
          <li>LOCATION</li>
          <li>INTERIORS</li>
          <li>EXTERIORS</li>
          <li>FLOORPLANS</li>
          <li>AMENITIES</li>
          <li>DEVELOPER</li>
        </ul>
      </div>
    </nav>
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
