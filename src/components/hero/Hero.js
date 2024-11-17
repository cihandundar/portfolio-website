import React from "react";

const Hero = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <img
        className="w-[300px] rounded-full border-4 border-white"
        src="/profile.jpg"
        alt="profile"
      />
      <div className="py-5 text-3xl">Cihan Dündar</div>
      <div className="text-3xl">Junior Frontend Developer</div>
      <div className="pt-5 text-xl">
        I'm a self-taught Frontend Developer who builds interfaces for users to
        <br />
        have great experiences, trying to improve myself on the web since <br />
        December 2021 and enjoying it!
      </div>
    </div>
  );
};

export default Hero;
