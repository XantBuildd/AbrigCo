"use client";

import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

function Navbar() {
  return (
    <nav>
      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </nav>
  );
}

export default Navbar;
