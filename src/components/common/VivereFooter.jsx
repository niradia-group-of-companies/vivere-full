import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export const VivereFooter = () => {
  return (
    <div
      className="bg-th_green text-th_ivory 
    xl:p-8"
    >
      <div></div>
      <div
        className="flex flex-col 
      xl:flex-row"
      >
        <div
          className="basis-1/5 px-20 hidden 
        xl:block"
        >
          <img
            src="/logos/Vivere Secondary - White.png"
            alt="leaf_background_image"
            className="h-[220px] object-contain"
          />
        </div>
        <div
          className="basis-4/5 flex justify-center flex-col 
        xl:flex-row xl:justify-around"
        >
          <ul
            className="flex flex-col gap-2 text-xl p-8
          xl:p-12"
          >
            <li
              className="border-b-2 pb-1 border-th_ivory w-11/12
            xl:w-64"
            >
              LOCATION
            </li>
            <li
              className="border-b-2 pb-1 border-th_ivory w-11/12
            xl:w-64"
            >
              INTERIORS
            </li>
            <li
              className="border-b-2 pb-1 border-th_ivory w-11/12
            xl:w-64"
            >
              EXTERIORS
            </li>
            <li
              className="border-b-2 pb-1 border-th_ivory w-11/12
            xl:w-64"
            >
              FLOORPLANS
            </li>
            <li
              className="border-b-2 pb-1 border-th_ivory w-11/12
            xl:w-64"
            >
              AMENITIES
            </li>
            <li
              className="border-b-2 pb-1 border-th_ivory w-11/12
            xl:w-64"
            >
              DEVELOPER
            </li>
          </ul>
          <div
            className="flex flex-col gap-2 text-xl px-8 py-4
          xl:p-12"
          >
            <div className="pb-5">
              <h4 className="pb-5">Presentation Center</h4>
              <p>
                1545 Johnston Road, <br />
                White Rock, BC Canada
                <br /> V4B 3Z6
              </p>
            </div>
            <div className="pb-10">
              <p>
                Open Daily, 12-5pm <br />
                <i>Except Fridays</i>
              </p>
            </div>
            <div>
              <p>604.531.8238</p>
              <p>info@viverebysolterra.ca</p>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 text-xl px-8 py-4 justify-between 
          xl:p-12"
          >
            <div
              className="relative mb-10
            xl:right-10"
            >
              <h4 className="pb-5">Vivere Location</h4>
              <p>
                15202 Guildford Drive, <br />
                Surrey, BC Canada
                <br /> V3R 0H9
              </p>
            </div>
            <div>
              <div
                className="flex text-th_brown text-4xl items-center pb-4 gap-10 justify-start
              xl:justify-around"
              >
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
              <img
                className=""
                src="/logos/solterra_footer_logo.svg"
                alt="solterra_logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
