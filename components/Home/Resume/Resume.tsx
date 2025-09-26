import React from "react";
import { ResumeCard } from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";


export const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* work part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-cold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            className="mt-10"
          >
            <ResumeCard
              Icon={FaCodepen}
              role="Full-Stack Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            />
            <ResumeCard
              Icon={FaReact}
              role="Front-End Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Back-End Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            />
          </div>
        </div>
        {/* education part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-cold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ResumeCard
              Icon={BiBadge}
              role="Sree Chaitanya College of Engineering"
              date="August 2021 - August 2025"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            />
            <ResumeCard
              Icon={FaReact}
              role="Bachelor in Computer Science and Engineering"
              date="August 2021 - August 2025"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Certificate in Front-End Developer"
              date="Feb 2023 - April 2023"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
