"use client";

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { BsArrowRight } from "react-icons/bs";
import ParticlesHero from "./ParticleBackground";

export default function Her() {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-8 border-[#0c0c48aa]">
          <Image
            src="/images/Ai.png"
            alt="heroimage"
            width={150}
            height={150}
            className="w-full h-full object-cover"
            data-aos="fade-up"
          />
        </div>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide"
        >
          Creating web products, <br />
          <span className="text-cyan-200"> brands, and experience.</span>{" "}
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center"
        >
          Hi!, I&apos;m Aakash - A Passionate
          <span className="text-cyan-200 font-bold pl-2">
            <Typewriter
              words={[
                "Frontend Developer",
                "Backend Developer",
                "Web Developer",
              ]}
              loop={true}
              delaySpeed={75}
              deleteSpeed={50}
              cursor={true}
              cursorStyle="|"
            />
          </span>
        </h2>
        <button
          onClick={() => handleNavClick("works")}
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor pointer rounded-full text-lg text-medium"
        >
          <span>See my work</span>
          <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
}
