import Link from "next/link";

export default function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <Link className="text-base font-semibold" href="">
        {children}
      </Link>
    </li>
  );
}
