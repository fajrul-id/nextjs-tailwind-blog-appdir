import React from "react";
import RecentPostCard from "./RecentPostCard";

const RecentWidget = () => {
  return (
    <>
      <div className="lg:sticky top-28 flex flex-wrap gap-4 bg-white shadow-lg rounded-lg p-8 mb-8">
        <h3 className="w-full uppercase text-sm">Recent</h3>
        <RecentPostCard
          className="grid gap-4 grid-cols-1"
          title="Ada anak cewek metal ni guys coba deh ajak kenalan"
          CreateAt="07 December 2022"
          postImage="/pp.jpeg"
        />
        <RecentPostCard
          className="grid gap-4 grid-cols-1"
          title="Ada anak cewek metal ni guys coba deh ajak kenalan"
          CreateAt="07 December 2022"
          postImage="/sa.jpg"
        />
      </div>
    </>
  );
};

export default RecentWidget;
