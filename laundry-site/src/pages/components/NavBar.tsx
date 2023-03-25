import Link from "next/link";
import { useState } from "react";

function NavBar() {
    const [navbar, setNavbar] = useState(false)


  return (
    <div>
      <nav className="flex justify-around bg-green-300 p-5">
        <div>
          <span className="font-bold text-2xl">Big Wash Laundromat</span>
        </div>
        <div>
          <ul className="flex gap-5">
            <Link href="/">
              <li className="hover:text-orange-500">Home</li>
            </Link>
            <Link href="/services">
              <li className="hover:text-orange-500">Services</li>
            </Link>
            <Link href="/locations">
              <li className="hover:text-orange-500">Locations</li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-orange-500">Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
