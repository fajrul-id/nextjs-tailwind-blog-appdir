
import { categories } from "@/data/dummy";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="lg:sticky top-28 flex flex-wrap gap-4 bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="w-full uppercase text-sm">Categories</h3>
      <div className="flex flex-wrap gap-2">
      {categories.map((e,i)=>(
        <Link href={"/categories/"+e.slug} key={i} className="cursor-pointer p-1 px-2 text-white bg-blue-500 rounded-full hover:bg-blue-900">
            {e.name || ""}
        </Link>
      ))}
      </div>
    </div>
  );
};

export default Categories;
