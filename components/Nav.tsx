"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();

  const linkClass = (route: string) =>
    path === route ? "text-blue-400 font-bold" : "hover:text-blue-300";

  return (
    <nav className="flex gap-4 mt-2">
      <Link href="/" className={linkClass("/")}>Home</Link>
      <Link href="/curriculos/visualizar" className={linkClass("/curriculos/visualizar")}>
        Currículos
      </Link>
      <Link href="/curriculos/cadastrar" className={linkClass("/curriculos/cadastrar")}>
        Cadastrar
      </Link>
    </nav>
  );
}