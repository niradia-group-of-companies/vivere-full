import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export const SolterraFooter = () => {
  return (
    <div className="bg-th_darkgray bg-solterra bg-contain bg-no-repeat h-fit md:h-[260px] lg:h-[260px] w-full py-10 md:py-5">
      <div className="w-11/12 xl:w-10/12 h-full mx-auto pb-0 md:pb-4 2xl:pb-4 flex items-start md:items-end justify-between flex-col md:flex-row gap-6 md:gap-8 lg:gap-20">
        <a
          href="https://solterradev.com"
          className="block -ml-0 lg:-ml-10 xl:-ml-20"
          target="_blank"
        >
          <img
            src="/logos/solterra_footer_logo.svg"
            alt="solterra_logo"
            className="w-3/4 md:w-full"
          />
        </a>
        <div className=" w-full flex justify-center lg:justify-between items-start md:items-end flex-col md:flex-row gap-4 lg:gap-0">
          <div className="text-white font-sub max-w-max md:max-w-[300px] lg:max-w-[680px] w-full h-auto inline-block">
            <h3 className="pb-2 lg:pb-3 text-base md:text-lg lg:text-xl font-pluto">
              A QUALITY <br />DEVELOPMENT
            </h3>
            <p className="hidden md:block text-sm md:text-base font-sub leading-none lg:leading-none">
              Solterra understands the importance of home and prides
              <br />
              themselves on creating residences that feature exceptional design,
              <br />
              solid construction, and quality finishes.
            </p>
            <p className="block md:hidden text-sm md:text-base whitespace-break-spaces font-sub leading-none lg:leading-none">
              Solterra understands the importance of home and prides
              themselves on creating residences that feature exceptional design,
              solid construction, and quality finishes.
            </p>
          </div>
          <div className=" self-end md:self-auto pt-10 md:pt-0">
            <div className="flex text-white text-2xl justify-end items-center pb-1 lg:pb-2 gap-3">
              <a
                href="https://facebook.com/solterradev"
                className=""
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/solterradev/"
                className=""
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/company/solterradevelopmentcorp/"
                className=""
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://youtube.com/solterradevelopmentcorp"
                className=""
                target="_blank"
              >
                <FaYoutube />
              </a>
            </div>
            <a
              href="https://solterradev.com"
              className=" text-th_brown font-sub font-bold tracking-wider text-base lg:text-xl"
            >
              SOLTERRADEV.COM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
