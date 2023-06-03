import React from "react";
import  Link  from "next/link"

const CardText = ({ className, title }:{ className : string, title:string }) => {
  const names = title.replace(/ /g, "-").toLowerCase();
  return (
    <h2 className="font-bold group-hover:text-gray-800 text-lg relative">
      <Link className={className} href={`/blog/${names}`}>
        {title}
      </Link>
    </h2>
  );
};

export default CardText;
