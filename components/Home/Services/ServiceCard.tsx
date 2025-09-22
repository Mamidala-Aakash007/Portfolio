import React from "react";
import Image from "next/image";

type Props = {
  icon: string;
  name: string;
  description: string;
};

export const ServiceCard = ({ icon, description, name }: Props) => {
  return (
    <div>
      <Image src={icon} width={60} alt="img" height={60} />
      <h1 className="mt-6 text-xl md:text-2xl font-bold text-gray-200">{name}</h1>
      <p className="mt-6 text-gray-200">{description}</p>
    </div>
  );
};
