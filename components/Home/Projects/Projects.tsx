import Image from "next/image";
import React from "react";
import Link from "next/link";

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
          <Link href="https://social-media-dashboard-dark-light-t.vercel.app/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/Social_media_dashboard.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg cursor-pointer"
          /></Link>
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
        ><Link href="https://movies-search-engine-tau.vercel.app/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/MovieFinder.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg cursor-pointer"
          /></Link>
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Movie Finder
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Apps, UI/UX</h1>
        </div>
        {/* fourth project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        ><Link href="https://book-finder-gray-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/bookfinder.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg cursor-pointer"
          /></Link>
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Library
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Apps, UI/UX, Searching</h1>
        </div>
      </div>
    </div>
  );
};
