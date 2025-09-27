"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
// import ClientReview from "./ClientReview/ClientReview";
// import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";

export default function Home() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
      AOS.refresh();
    };

    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="works">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      {/* <section id="clientReview">
        <ClientReview />
      </section>  */}
      {/* <Blog /> */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
