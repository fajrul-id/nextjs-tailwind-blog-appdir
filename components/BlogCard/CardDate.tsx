import { iPropsCategories } from "@/data/dummy";
import Link from "next/link";
import React from "react";

const CardDate = ({
  category,
  date,
}: {
  category: iPropsCategories[];
  date: string;
}) => {
  return (
    <div className="mb-1 text-gray-600 text-sm flex justify-between">
      {category && (
        <div className="flex items-center">
          {category.map((e, i) => (
            <Link
              key={i}
              className="border p-1 text-xs uppercase text-blue-500 transition duration-700 hover:text-pink-600 mr-1 font-semibold"
              href={`/category/${e.slug}`}
            >
              {e.name}
            </Link>
          ))}
        </div>
      )}
      <span className="text-sm">
        <h4>{date}</h4>
      </span>
    </div>
  );
};

export default CardDate;
