import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiReadCvLogoDuotone } from "react-icons/pi";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mt-5 py-5">
      <a
        className="w-[250px] py-5 bg-red-600 text-center flex justify-center hover:bg-red-500 transition-all duration-300"
        href="https://drive.google.com/file/d/1z9gXOAULGTkAIsSW26IRgpTyce7hj2us/view?usp=drive_contact__box"
        target="_blank"
      >
        <button className="flex items-center gap-2 text-xl">
          <PiReadCvLogoDuotone />
          CV
        </button>
      </a>

      <a
        className="w-[250px] py-5 bg-red-600 text-center flex justify-center hover:bg-red-500 transition-all duration-300"
        href="mailto:dundarcihan97@hotmail.com"
      >
        <button className="flex items-center gap-2 text-xl">
          <IoMail />
          Email
        </button>
      </a>

      <a
        className="w-[250px] py-5 bg-red-600 text-center flex justify-center hover:bg-red-500 transition-all duration-300"
        href="https://github.com/cihandundar"
        target="_blank"
      >
        <button className="flex items-center gap-2 text-xl">
          <FaGithub />
          Github
        </button>
      </a>

      <a
        className="w-[250px] py-5 bg-red-600 text-center flex justify-center hover:bg-red-500 transition-all duration-300"
        href="https://www.linkedin.com/in/cihandundar/"
        target="_blank"
      >
        <button className="flex items-center gap-2 text-xl">
          <FaLinkedin />
          Linkedin
        </button>
      </a>
    </div>
  );
};

export default Contact;
