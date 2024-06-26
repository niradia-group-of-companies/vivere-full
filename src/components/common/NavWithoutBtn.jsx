import { Link } from "react-router-dom";

export const NavWithoutBtn = () => {
  return (
    <nav className="w-11/12 lg:w-10/12 mx-auto pt-8 pb-5 lg:py-10 relative z-30">
      <div className="w-full h-full flex justify-center items-center">
        <Link to="/">
          <img
            src="/logos/Vivere Primary - White.png"
            className="w-36 lg:w-52 object-contain"
            alt=""
          />
        </Link>
      </div>
      <div className="w-full h-full flex justify-end items-center pt-10"></div>
    </nav>
  );
};
