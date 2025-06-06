import Image from "next/image";
import banner from "@/images/bannerImg.jpg";

const Hero = () => {
  return (
    <div className="w-full max-h-screen relative">
      <Image
        src={banner}
        alt="banner image"
        className="w-full max-h-screen object-contain"
      />
      <div className="absolute top-0 w-full h-full bg-black/30 text-white flex flex-col items-center justify-center">
        <h2 className="text-5xl lg:text-[120px] font-bold">Ismail Ahmed Shah</h2>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold">
          A Solo Traveler, 
        </p>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold mt-11 text-yellow-200">
          A Thinker ⟶ Builder ⟶ Explorer,
        </p>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold text-yellow-500">
           Agentic AI Developer  •  Polyglot Coder
        </p>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold text-yellow-700">
           Turning Algorithms into Action 
        </p>
      </div>
    </div>
  );
};

export default Hero;