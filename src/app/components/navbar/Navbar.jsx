import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="custom-container py-4">
      <Link href="/" className="flex items-center gap-1">
        <img src="/logo.png" alt="" className="w-12 h-12" />
        <h3 className="text-3xl font-black">Food Junkie</h3>
      </Link>
    </nav>
  )
}

export default Navbar
