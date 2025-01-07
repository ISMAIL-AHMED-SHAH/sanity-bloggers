import Link from "next/link";
import { IoReturnDownBack } from "react-icons/io5";
import Logo from "./Logo";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="p-5 bg-black text-gray-100 flex items-center relative lg:justify-center lg:gap-10 gap-4">
        {/* Go to Website Link */}
        <Link
          href={"/"}
          className="flex items-center gap-2 font-semibold hover:text-blue-600 duration-200 lg:absolute lg:left-5"
        >
          <IoReturnDownBack className="text-2xl" />
          Go to Website
        </Link>

        {/* Centered Logo */}
        <Logo
          title="Orbit'Blog Studio"
          className="text-2xl hidden md:inline-flex"
        />

        {/* Right-aligned Text */}
        <p className="text-sm lg:absolute lg:right-5">Studio for Blog Content</p>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default StudioNavbar;
