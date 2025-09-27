"use client";

import { FormEvent } from "react";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Contact() {
  const [sent, setSent] = React.useState(false);

  const Sent = () => {
    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 6000);
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    if (!form.checkValidity()) {
      form.reportValidity();
      return; // stop submission if fields are invalid
    }

    const formData = new FormData(form);
    // const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "729b82a0-01cf-49c1-bd13-1c5f32c69d3c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setSent(true);
      setTimeout(() => setSent(false), 6000);
      form.reset();
    }
  }

  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* text content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with me to see if i can help
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me today and lets discuss how i can help you achieve
            your goals.
          </p>
          {/* info */}
          <div className="mt-7 ">
            <div className=" flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">+91 7569941367</p>
            </div>
          </div>
          <div className="mt-7 ">
            <div className=" flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                luckyaakashavi1@gmail.com
              </p>
            </div>
          </div>
          <div className="mt-7 ">
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>
          {/* social icon */}
          <div className="flex items-center mt-8 space-x-3">
            <Link
              href="https://www.linkedin.com/in/mamidala-aakash-411a01264/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
                <FaLinkedin className="text-white w-6 h-6" />
              </div>
            </Link>
            <Link
              href="https://x.com/Aakashmamidala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-black transition-all duration-300">
                <FaXTwitter className="text-white w-6 h-6" />
              </div>
            </Link>
            <Link
              href="https://github.com/Mamidala-Aakash007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-[#181717] transition-all duration-300">
                <FaGithub className="text-white w-6 h-6" />
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/mamidala_aakash?igsh=MW82cjlodTZ6YmY4bA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] transition-all duration-300">
                <FaInstagram className="text-white w-6 h-6" />
              </div>
            </Link>
          </div>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit}>
          <div
            data-aos="zoom-in"
            // data-aos-anchor-placement="top-center"
            className="md:p-10 p-5 bg-[#131332] rounded-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
              required
            ></textarea>
            <button
              type="submit"
              className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full"
            >
              Send Message
            </button>{" "}
            {sent && (
              <span className="text-green-500/73 text-lg text-center p-2">
                Sent!
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
