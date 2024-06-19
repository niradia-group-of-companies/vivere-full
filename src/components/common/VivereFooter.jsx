export const VivereFooter = () => {
return(
    <div className="bg-th_green bg-vivere bg-no-repeat bg-right-top md:bg-right-bottom bg-[length:auto_30%] md:bg-[length:auto_90%] w-full h-fit lg:h-[340px] pb-8 md:pb-0">
      <div className="w-11/12 py-4 h-full mx-auto flex flex-col-reverse md:flex-row items-start md:items-center justify-start gap-2 md:gap-8 2xl:gap-16">
      <div className="">
        <img src="/img/map.png" alt="" className="w-auto h-[220px] md:h-[200px] lg:h-[250px] 2xl:h-[280px] object-contain" />
      </div>
      <div className="mt-52 md:mt-0 text-th_ivory h-full w-auto flex flex-col justify-end items-start pb-0 lg:pb-5">
        <p className="leading-tight lg:leading-tight font-sub text-base lg:text-xl pt-2 lg:pt-8 whitespace-pre-wrap md:whitespace-nowrap">
          Nestled in the heart of North Guildford,<br/>this lively
          community is set to transform <br/>the way you think about <span className="italic inline-block">home</span>.
        </p>
        <a className="pb-3 md:pb-0 pt-6 lg:pt-12 block text-th_ivory font-sub text-lg lg:text-xl">COMING SOON</a>
      </div>
      </div>
    </div>
  )
}
