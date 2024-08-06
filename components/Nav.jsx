"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "services",
    link: "/services",
  },
  {
    name: "resume",
    link: "/resume",
  },
  {
    name: "work",
    link: "/work",
  },
  {
    name: "contact",
    link: "/contact",
  },
];

const Nav = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.link}
          className={`${
            pathName === link.link && "text-accent border-b-2 border-accent"
          } capitalize transition-all font-medium hover:text-accent`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
