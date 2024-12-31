import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { BsFacebook, BsYoutube, BsInstagram, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <Container className="w-full p-10 bg-black text-gray-100 flex items-center justify-between">
      <Logo title="Orbit'Blogs" className="text-white" />
      <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
        <Link
          href={"https://www.linkedin.com/in/ismail-ahmed-shah-2455b01ba/"}
          target="blank"
        >
          <BsLinkedin className="text-2xl hover:text-blue-500 duration-200" />
        </Link>
        <Link href={"https://github.com/ISMAIL-AHMED-SHAH"} target="blank">
          <BsGithub className="text-2xl hover:text-gray-400 duration-200 cursor-pointer" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/ismail-ahmed-shah-2455b01ba/"}
          target="blank"
        >
          <BsFacebook className="text-2xl hover:text-blue-500 duration-200 cursor-pointer" />
        </Link>
        <Link
          href={"https://www.instagram.com/ahmedshahismail?igsh=YzljYTk1ODg3Zg=="}
          target="blank"
        >
          <BsInstagram className="text-2xl hover:text-pink-600 duration-200 cursor-pointer" />
        </Link>
        <Link
          href={"https://wa.me/+923322241405"}
          target="blank"
        >
          <BsWhatsapp className="text-2xl hover:text-green-500 duration-200 cursor-pointer" />
        </Link>
      </div>
      <p className="text-sm text-gray-300">
        © All rights reserved{"  "}
        <Link
          href={"https://www.linkedin.com/in/ismail-ahmed-shah-2455b01ba/"}
          target="blank"
          className="hover:text-white font-bold duration-200"
        >
          IsmailAhmedShah
        </Link>
      </p>
    </Container>
  );
};

export default Footer;