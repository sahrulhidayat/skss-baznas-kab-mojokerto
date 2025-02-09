import Link from "next/link";

export default function NavItem({ children }: any) {
  return (
    <li>
      <Link className="text-base font-semibold" href="">
        {children}
      </Link>
    </li>
  );
}
