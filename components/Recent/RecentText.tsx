import React from "react";

const RecentText = ({ title, CreateAt }:{ title:string, CreateAt:string }) => {
  return (
    <div>
      <h4 className="font-semibold leading-5">
        <a className="hover:text-gray-700" href="/blog/logo-linux">
          {title}
        </a>
      </h4>
      <time className="text-sm text-gray-600">{CreateAt}</time>
    </div>
  );
};

export default RecentText;
