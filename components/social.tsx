import React from "react";
import { LiaLinkedinIn } from "react-icons/lia";
import { SiGithub } from "react-icons/si";

const social = () => {
  return (
    <div className="flex gap-3 text-2xl">
      <a href="https:www.linkedin.com/in/edison-protus">
        <LiaLinkedinIn />
      </a>
      <a href="https://github.com/muhdrehan?tab=repositories">
        <SiGithub />
      </a>
    </div>
  );
};

export default social;
