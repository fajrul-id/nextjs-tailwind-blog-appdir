import Image from "next/image";
import React from "react";

const RecentMedia = ({ postImage }:{ postImage :string}) => {
  return (
    <div className="w-16 flex-none">
      <Image height={60} width={60} src={postImage || ""} alt="" className="align-middle rounded-full"/>
    </div>
  );
};

export default RecentMedia;
