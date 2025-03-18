"use client";
import * as React from "react";
import { IoIosArrowForward } from "react-icons/io";

import { useSidebar } from "./sidebar.component";
import IGN_Logo from "./IGN_Logo.component";
import Link from "next/link";

export default function HeaderBar() {
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const { toggleSidebar } = useSidebar();

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (window.innerWidth <= 480) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      }

      // Hide regardless of screen size
      setPrevScrollPos(currentScrollPos);
    };

    const handleResize = () => {
      // Hide when screen width > 480px
      if (window.innerWidth > 480) {
        setVisible(false);
      } else {
        handleScroll();
      }
    };

    // Initial setup
    handleResize(); // Call handleResize to set initial visibility based on screen size
    handleScroll(); // Call handleScroll to set initial visibility based on scroll position

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed min-w-screen top-0 z-[5000] bg-[#283044] h-16 transition-transform duration-300 px-3 flex items-center ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-x-4 items-center">
          <button
            name="toggle-sidebar"
            className="h-[35px] w-[35px] flex items-center justify-center rounded-md border-2 border-[#6A6F77] hover:bg-slate-600 hover:border-white"
            onClick={toggleSidebar}>
            <IoIosArrowForward />
          </button>
          <button name="join-for-free" className="h-[35px] bg-white text-black w-fit px-3 flex items-center font-bold text-sm rounded-md">
            Join for Free
          </button>
        </div>
        <Link aria-label="home" href="/" className="flex items-center">
          <IGN_Logo />
        </Link>
      </div>
    </div>
  );
}
