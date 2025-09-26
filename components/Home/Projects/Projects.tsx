import Image from "next/image";
import React from "react";

export const Projects = () => {
  return (
    <div className="pt-16 pb-16 ">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />{" "}
        <span className="text-cyan-300">projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* first project */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Image
            src="/images/p1.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg cursor-pointer"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Modern Social DashBoard
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Apps, UI/UX</h1>
        </div>
        {/* second project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <Image
            src="/images/portfolio.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg cursor-pointer"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Portfolio Project
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Branding</h1>
        </div>
        {/* third project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <Image
            src="/images/p3.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg cursor-pointer"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Movie Finder
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Apps, UI/UX</h1>
        </div>
      </div>
    </div>
  );
};
