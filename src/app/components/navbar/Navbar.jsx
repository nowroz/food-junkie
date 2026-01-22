import navBarPaths from "@/app/utils/navBarPaths"
import Link from "next/link"
import NavBarLink from "../navBarLink/NavBarLink"

const Navbar = () => {
  return (
    <nav className="custom-container py-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1">
          <img src="/logo.png" alt="" className="w-12 h-12" />
          <h3 className="text-3xl font-black">Food Junkie</h3>
        </Link>

        <ul className="flex items-center gap-4">
          {
            navBarPaths.map(navPath => (
              <NavBarLink key={navPath.id} navPath={navPath}></NavBarLink>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
