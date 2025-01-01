import Link from "next/link";
import { IoReturnDownBack } from "react-icons/io5";
import Logo from "./Logo";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="p-5 bg-black text-gray-100 flex items-center justify-between gap-4">
        <Link
          href={"/"}
          className="flex items-center gap-2 font-semibold hover:text-blue-600 duration-200"
        >
          <IoReturnDownBack className="text-2xl" />
          Go to Website
        </Link>
        <div className="flex items-center gap-4">
          <Logo
            title="Orbit'Blog Studio"
            className="text-2xl md:inline-flex"
          />
          <p className="text-sm">Studio for Blog Content</p>
        </div>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default StudioNavbar;
