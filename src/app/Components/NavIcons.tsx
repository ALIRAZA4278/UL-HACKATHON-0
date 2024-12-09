"use client";

import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";

const NavIcons = () => {
  // const [isProfileOpen, setIsProfileOpen] = useState(false); // Placeholder if required in the future.
  // const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Link href="/Account">
        <Image
          src="/NavProfileShopping.png"
          alt="Profile Icon"
          width={22}
          height={22}
          className="cursor-pointer"
        />
         
      </Link>
      <Image
        src="/Searchicon.png" 
        alt="Search Icon"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <Image
        src="/NavHeartShopping.png"
        alt="Favorites Icon"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        // onClick={() => 
          // setIsCartOpen((prev) => !prev)
        // }
      >
        <Image src="/NavCardShopping.png" alt="Cart Icon" width={22} height={22} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center bg-black">
          {/* Counter Placeholder */}
        </div>
      </div>
    </div>
  );
};

export default NavIcons;
