import { iPropsCategories } from "@/data/dummy";
import CardDate from "./CardDate";
import CardMedia from "./CardMedia";
import CardText from "./CardText";

const Card = ({
  className,
  postImage,
  title,
  category,
  date,
}: {
  className: string;
  postImage: any;
  title: string;
  category: iPropsCategories;
  date: string;
}) => {
  return (
    <div className={className || ""}>
      <CardMedia
        alt={title || ""}
        postImage={postImage || ""}
        className="border rounded-t-lg object-fill w-full max-h-[200px]"
      />
      <div className="p-5">
        <CardDate category={Object(category)} date={date || ""} />
        <CardText title={title || ""} className="transition duration-700 hover:text-pink-600"/>
      </div>
    </div>
  );
};

export default Card;
