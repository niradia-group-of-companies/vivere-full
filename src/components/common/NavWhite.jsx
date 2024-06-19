export const NavWhite = () => {
  return (
    <nav className="w-11/12 lg:w-10/12 mx-auto pt-8 pb-5 lg:py-10 relative z-30">
         <div className="w-full h-full flex justify-center items-center">
         <a className="block" href="/"><img src="/logos/Vivere Primary - White.png" className="w-36 lg:w-52 object-contain" alt="" /></a>
         </div>
         <div className="w-full h-full flex justify-end items-center pt-10">
         <a className="inline-block bg-th_brown text-th_ivory hover:bg-th_gray -skew-x-[20deg] py-2.5 lg:py-4 px-6 lg:px-12 text-sm lg:text-base font-sub cursor-pointer" href={`/`}><span className="block tracking-widest font-sub skew-x-[20deg]">BACK</span></a>        
         </div>
    </nav>
  )
}
