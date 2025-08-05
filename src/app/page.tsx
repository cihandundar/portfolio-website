
import React from "react";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import Project from "../components/project/Project";
import Skill from "../components/skill/Skill";

const Home: React.FC = () => {
  return (
    <section className="w-full">
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-12 gap-8">
          <div className="lg:col-span-3 md:col-span-6 col-span-12 flex flex-col items-center">
            <Hero />
            <Contact />
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12 ">
            <div className=" grid grid-cols-2 gap-5">
              <Skill />
            </div>
          </div>
          <div className="lg:col-span-5 md:col-span-6 col-span-12 flex flex-col items-center gap-5">
            <Project />
          </div>
        </div>
      </div>
    </section>

  );
};

export default Home;
