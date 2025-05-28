import Image from "next/image";
import portfolio from "@/images/portfolio.png";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center py-8 px-6">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="mt-2 text-lg">
            A passionate front-end developer with a drive to master full-stack development.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-6">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Hello, I&apos;m Ismail Ahmed Shah!</h2>
            <p className="mt-2 text-gray-600 leading-relaxed">
              With a diverse career spanning multiple industries and a profound passion for coding, 
              I bring a unique perspective to web development. I specialize in creating intuitive, 
              user-friendly interfaces that deliver engaging experiences. Currently, I&apos;m on a journey 
              to become a full-stack developer, and Agentic AI expert exploring the vast possibilities of modern cutting edge technology.
            </p>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Skills & Technologies</h3>
            <ul className="mt-4 grid grid-cols-2 gap-4">
              <li className="flex items-center text-gray-700">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                React & Next.js
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                HTML & CSS
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                TypeScript (JavaScript)
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Tailwind CSS
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Python
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Agentic AI
              </li>
            </ul>
          </div>

          {/* Career Journey */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Career Journey</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              From pharmaceuticals to maritime logistics, my career has been a rich tapestry of 
              experiences. These diverse roles have shaped my problem-solving abilities and creative 
              thinking, which I now channel into developing innovative web solutions.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-100 text-center py-4">
          <p className="text-gray-600 text-sm">
            Let&apos;s connect and create something amazing together! 🚀
          </p>
        </div>
      </div>

{/* Portfolio Section */}
<div className="mt-10 max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
  <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-center py-8 px-6">
  <h1 className="text-4xl pb-6 font-bold">My  Portfolio</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Portfolio Card */}
      <div className="bg-gray-50 shadow rounded-lg overflow-hidden flex flex-col">
        <Image
          src={portfolio}
          width={800}
            height={650}
          alt="Portfolio Screenshot"
          className="w-full h-40 object-cover"
        />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <h3 className="text-xl font-semibold text-gray-800">Portfolio Website</h3>
          <p className="text-gray-600 mt-2">
            A fully responsive and dynamic portfolio showcasing my projects, skills, and contact information.
          </p>
          <Link
            href="https://portfolio-ismail-ahmed-shah.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 self-start"
          >
            View Live
          </Link>
        </div>
      </div>

    </div>
  </div>
</div>

    </div>
  );
};

export default AboutPage;
