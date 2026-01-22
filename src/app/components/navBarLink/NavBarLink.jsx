import Link from "next/link"

const NavBarLink = ({ navPath }) => {
  const { path, name } = navPath

  return (
    <li>
      <Link className="px-3 py-1 bg-amber-400 rounded-full text-black font-bold hover:bg-amber-500" href={path}>{name}</Link>
    </li>
  )
}

export default NavBarLink
