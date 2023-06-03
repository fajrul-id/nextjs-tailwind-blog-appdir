import Image from "next/image";
import React from "react";

const CardMedia = ({
  postImage,
  alt,
  className,
}: {
  postImage: string;
  alt: string;
  className: string;
}) => {
  return (
    <div className="w-full flex justify-center">
      <Image
        width={1000}
        height={1000}
        src={postImage}
        alt={alt || ""}
        className={className}
      />
    </div>
  );
};

export default CardMedia;
