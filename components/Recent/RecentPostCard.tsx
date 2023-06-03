import RecentMedia from "./RecentMedia";
import RecentText from "./RecentText";

const RecentPostCard = ({
  className,
  postImage,
  title,
  CreateAt,
}: {
  className: string;
  postImage: string;
  title: string;
  CreateAt: string;
}) => {
  return (
    <div className={className || ""}>
      <div className="gap-4 flex w-full items-center relative cursor-pointer">
        <div className="w-20">
          <RecentMedia postImage={postImage || ""} />
        </div>
        <RecentText title={title || ""} CreateAt={CreateAt || ""} />
      </div>
    </div>
  );
};

export default RecentPostCard;
