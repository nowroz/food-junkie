"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavBarLink = ({ navPath }) => {
  const { path, name } = navPath

  const pathName = usePathname()

  return (
    <li>
      <Link className={`px-3 py-1 ${pathName === path ? "" : "bg-amber-400 text-black"} rounded-full font-bold hover:bg-amber-500 hover:text-black`} href={path}>{name}</Link>
    </li>
  )
}

export default NavBarLink
