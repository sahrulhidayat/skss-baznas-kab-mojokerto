import Link from "next/link";

export default function NavItem({ children }: React.PropsWithChildren<{}>) {
  return (
    <li>
      <Link className="text-base font-semibold" href="">
        {children}
      </Link>
    </li>
  );
}
