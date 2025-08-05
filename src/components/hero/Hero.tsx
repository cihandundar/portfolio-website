import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <img
        className="w-40 sm:w-48 md:w-52 rounded-full border-4 border-white shadow-xl max-w-full"
        src="/profile.jpg"
        alt="profile"
      />
      <div className="py-2 text-3xl">Cihan Dündar</div>
      <div className="text-2xl">Junior Frontend Developer</div>
      <div className="pt-2 text-sm">
        I'm a self-taught Frontend Developer who builds interfaces for users to
        <br />
        have great experiences, trying to improve myself on the web since <br />
        December 2021 and enjoying it!
      </div>
    </div>
  );
};

export default Hero;
