import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

export const VivereFooter = () => {
  return (
    <div
      className="bg-th_green text-th_ivory 
    xl:p-8 relative"
    >
      <div className="absolute right-0 bottom-0">
        <svg
          width="428"
          height="393"
          viewBox="0 0 428 393"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M428 0L421.369 0L277.471 339.145L187.086 113.247C154.61 36.1112 161.702 14.6687 189.005 12.8083L206.713 12.0212V0.214664L0 0.214664L0 11.9973L25.0679 12.7844C55.3582 16.7915 66.2647 33.1298 101.705 116.205L217.5 393H240H263.5L428 0Z"
            fill="#305029"
          />
        </svg>
      </div>
      <div
        className="flex flex-col
      xl:flex-row"
      >
        <div
          className="basis-2/5 px-20 hidden 
        xl:block"
        >
          <img
            src="/logos/Vivere Secondary - White.png"
            alt="leaf_background_image"
            className="h-[220px] object-contain"
          />
        </div>
        <div className="z-20">
          <div
            className="basis-3/5 flex justify-center flex-col 
        xl:flex-row xl:justify-between"
          >
            <div>
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
                  <NavLink className={"hover:text-th_brown"} to="/interiors">
                    INTERIORS
                  </NavLink>
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
                  <NavLink className={"hover:text-th_brown"} to="/amenities">
                    Amenities
                  </NavLink>
                </li>
                <li
                  className="border-b-2 pb-1 border-th_ivory w-11/12
            xl:w-64"
                >
                  DEVELOPER
                </li>
              </ul>
              <Link
                to="/register"
                className="w-fit z-[200] bg-th_brown border border-th_brown relative top-[3%]
       text-th_ivory hover:bg-th_lightbrown py-3 mx-8
       xl:mx-12 lg:py-3 px-20 pl-30
       lg:px-20 text-sm lg:text-2xl font-sub cursor-pointer text-center"
              >
                REGISTER
              </Link>
            </div>
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
          <div
            className="pt-20 pb-5 text-sm px-8
          xl:p-12"
          >
            <p>
              All renderings and photography used in marketing material are
              conceptual illustrations and/or artistic impressions. The
              developer reserves the right to make modifications, changes or
              substitutes to building design, specifications, finishes,
              features, dimensions and floorplans should they be necessary to
              maintain the high standards of this community. Square footages are
              approximate and may vary. E.&O.E. Sales by Solterra (Vivere) Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
