import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="left-0 right-0 -top-14 absolute flex justify-center">
        <Image
          src="https://media.graphassets.com/Ji2Cqd4TR7eJSslxDHtz?_gl=1*y3jdsm*_ga*MTgzODc2MDUwMS4xNjYzNjkxNjQ5*_ga_G6FYGSYGZ4*MTY2Njc4MTk1My4yMS4xLjE2NjY3ODI4MjAuMTEuMC4w"
          alt="fajrul.id"
          unoptimized
          height={100}
          width={100}
          className="align-middle rounded-full"
        />
      </div>

      <h3 className="text-white my-4 text-xl font-bold">Farjul.id</h3>
      <p className="text-white text-lg">
        This is a blog project, created using React, Next JS,Tailwind CSS and more. Nextjs is Awesome!
      </p>
      <a
        href="https://fajrul.id/"
        target="_blank"
        rel="noreferrer"
        className="text-lg font-bold text-white my-5 underline hover:text-blue-300"
      >
        Click to check out My Portfolio
      </a>
      <p className="text-white text-lg">fajrul@fajrul.id</p>
    </div>
  );
};

export default Footer;
