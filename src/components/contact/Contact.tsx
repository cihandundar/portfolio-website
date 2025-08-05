import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiReadCvLogoDuotone } from "react-icons/pi";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="w-full grid grid-cols-12 gap-3 py-5">
      <a
        className="w-full md:col-span-6 col-span-12 py-5 bg-blue-600 text-center flex justify-center hover:bg-blue-500 transition-all duration-300 rounded-lg shadow-xl"
        href="https://drive.google.com/file/d/1z9gXOAULGTkAIsSW26IRgpTyce7hj2us/view?usp=drive_contact__box"
        target="_blank"
      >
        <button className="flex items-center gap-2">
          <PiReadCvLogoDuotone />
          CV
        </button>
      </a>

      <a
        className="w-full md:col-span-6 col-span-12 py-5 bg-blue-600 text-center flex justify-center hover:bg-blue-500 transition-all duration-300 rounded-lg shadow-xl"
        href="mailto:dundarcihan97@hotmail.com"
      >
        <button className="flex items-center gap-2">
          <IoMail />
          Email
        </button>
      </a>

      <a
        className="w-full md:col-span-6 col-span-12 py-5 bg-blue-600 text-center flex justify-center hover:bg-blue-500 transition-all duration-300 rounded-lg shadow-xl"
        href="https://github.com/cihandundar"
        target="_blank"
      >
        <button className="flex items-center gap-2">
          <FaGithub />
          Github
        </button>
      </a>

      <a
        className="w-full md:col-span-6 col-span-12 py-5 bg-blue-600 text-center flex justify-center hover:bg-blue-500 transition-all duration-300 rounded-lg shadow-xl"
        href="https://www.linkedin.com/in/cihandundar/"
        target="_blank"
      >
        <button className="flex items-center gap-2">
          <FaLinkedin />
          Linkedin
        </button>
      </a>
    </div>
  );
};

export default Contact;
