import Link from "next/link";

const Menu = ({
  className,
  onClick,
  border,
}: {
  className: string;
  onClick?: VoidFunction;
  border?: string;
}) => {
  return (
    <div className={className} onClick={onClick}>
      <Link href="/" className={border}>
        home
      </Link>
      <Link href="/login" className={border}>
        portfolio
      </Link>
      <Link href="/aboutus" className={border}>
        about us
      </Link>
      <Link href="/author" className={border}>
        author
      </Link>
      <Link href="/contact" className={border}>
        contact
      </Link>
    </div>
  );
};

export default Menu;
