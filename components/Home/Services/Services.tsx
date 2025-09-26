import React from "react";
import { Service } from "@/constant/ServicesConstants";
import { ServiceCard } from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="flex items-center justify-center text-white text-center text-2xl md:text-4xl  xl:text-5xl font-bold">
        Collaborate with brand <br /> and agencies to create <br />
        impactful results
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-col-1 md: grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        {Service.map((service, index) => (
          <div
            key={service.id}
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay={index * 100}
          >
            <ServiceCard
              icon={service.icon}
              name={service.name}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
