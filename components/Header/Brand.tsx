import Image from "next/image";

const Brand = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <Image
        src="/logo.png"
        className="max-w-[3rem] sm:max-w-[3.5rem] lg:max-w-[4.5rem]"
        alt="fajrul.id"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Brand;
