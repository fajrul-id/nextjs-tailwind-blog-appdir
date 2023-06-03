import React from "react";
import { FiInstagram, FiFacebook, FiGithub, FiTwitter } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

const Socials = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <a href="https://www.facebook.com">
        <FiFacebook />
      </a>
      <BsDot />
      <a href="https://www.facebook.com">
        <FiTwitter />
      </a>
      <BsDot />
      <a href="https://www.facebook.com">
        <FiGithub />
      </a>
      <BsDot />
      <a href="https://www.facebook.com">
        <FiInstagram />
      </a>
    </div>
  );
};

export default Socials;
