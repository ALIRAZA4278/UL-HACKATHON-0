import Link from "next/link";
import Menu from "./Menu";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div>
      <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-transparent sticky top-0 z-50">
        <div className="h-full flex items-center justify-between md:hidden">
          {/* {Mobile} */}
          <Menu />
          <NavIcons />
        </div>

        {/* BIGGER SCREEN */}
        <div className="hidden md:flex h-full justify-center items-center">
          {/* Left */}
          <div className="flex items-center gap-12">
            <Link href="/">Home</Link>
            <Link href="/list?cat=all-products">Shop</Link>
            <Link href="/Blog">Blog</Link>
            <Link href="/Contact">Contact</Link>
          </div>

          {/* Right */}
          <div className="absolute right-28 flex items-center justify-between gap-8">
            {/* Placeholder for SearchBar */}
            <NavIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
