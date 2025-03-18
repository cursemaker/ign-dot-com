"use client";
import * as React from "react";
import { RxCross1 } from "react-icons/rx";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { VscPreview } from "react-icons/vsc";
import { BsBookmark, BsHandbag, BsStackOverflow } from "react-icons/bs";
import { TbCompass, TbDeviceGamepad3 } from "react-icons/tb";
import { FaRegMap } from "react-icons/fa";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { LuCirclePlay } from "react-icons/lu";
import { CgMoreO } from "react-icons/cg";
import IGN_Logo from "./IGN_Logo.component";
import Link from "next/link";

type TSidebarContextType = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<TSidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 480) {
        // md breakpoint
        setIsSidebarOpen(true);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>{children}</SidebarContext.Provider>;
};

export const useSidebar = () => {
  const context = React.useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  if (!isSidebarOpen) {
    return null;
  }

  return (
    <div className="relative z-[6000] sm:min-w-[300px] max-sm:max-w-[85vw] md:max-w-[300px] h-screen shrink-0 bg-[#283044] flex flex-col">
      {/* X Button */}
      <button
        name="sidebar-closer"
        className="sm:hidden h-[35px] w-[35px] bg-[#202634]/60 absolute left-full -translate-x-1/2 top-0 translate-y-1/2 flex items-center justify-center rounded-md border-2 border-[#6A6F77] hover:bg-slate-600 hover:border-white"
        onClick={toggleSidebar}>
        <RxCross1 />
      </button>
      {/* Header */}
      <div className="p-[14px_24px_0px] h-16">
        <Link href="/" aria-label="Home" className="w-fit h-full flex justify-start items-center">
          <IGN_Logo />
        </Link>
      </div>
      {/* Menu */}
      <div className="overflow-y-auto">
        <div className="p-[18px_24px] flex flex-col gap-y-4 scroll-smooth">
          {/* upgrade to plus */}
          <div id="top-sidebar" className="p-6 mb-6 border-2 rounded-lg border-white *:text-center flex flex-col justify-center leading-[1.5]">
            <div className="text-[15px] leading-[1.5] max-h-[2rem] font-bold text-ellipsis overflow-hidden flex items-center justify-center">
              {"Upgrade to "}
              <svg
                className="ml-0.5 h-[1em] shrink-0 aspect-[269/44] w-[6.11364em] bg-[100%] text-[0.75rem] inline-block"
                viewBox="0 0 269 44"
                style={{ width: "auto" }}>
                <path
                  d="M44.1431 22.983C44.2091 22.6647 44.2563 22.337 44.2563 22C44.2563 19.4817 42.1902 17.4221 39.6524 17.4221H31.303C30.0766 17.4221 28.9162 17.8996 28.0482 18.7608C27.1802 19.6221 26.7085 20.7736 26.7085 21.9906C26.7085 24.4996 24.6519 26.5498 22.1235 26.5498C19.5856 26.5498 17.5195 28.6094 17.5195 31.1277V39.4315C17.5195 41.9498 19.5856 44.0094 22.1235 44.0094C22.7839 44.0094 23.4065 43.8689 23.9726 43.6162C25.3311 43.0638 26.3406 41.8562 26.6236 40.3957C26.6897 40.0868 26.7274 39.7591 26.7274 39.4315V31.1277C26.7274 30.8374 26.7651 30.5566 26.8123 30.2757C27.1425 28.7685 28.1803 27.5234 29.5766 26.9149C30.1143 26.6996 30.6992 26.5685 31.3125 26.5685H39.6618C40.3222 26.5685 40.9543 26.4187 41.5204 26.1753C42.86 25.623 43.8695 24.434 44.1525 22.983H44.1431Z"
                  fill="currentColor"></path>
                <path
                  d="M22.1234 17.4502C24.6518 17.4502 26.7274 15.4 26.7274 12.8723V4.57787C26.7274 2.05957 24.6612 0 22.1234 0C19.5856 0 17.5195 2.05021 17.5195 4.57787V12.8723C17.5195 15.3813 15.4628 17.4315 12.9344 17.4315H4.60394C2.06611 17.4315 0 19.4817 0 22.0094C0 24.537 2.06611 26.5872 4.60394 26.5872H12.9439C15.4817 26.5872 17.5478 24.537 17.5478 22.0094C17.5478 19.4817 19.6045 17.4502 22.1329 17.4502H22.1234Z"
                  fill="currentColor"></path>
                <path
                  d="M267.264 5.22377V10.7753C267.264 11.2902 266.839 11.7114 266.321 11.7114H262.707C253.056 11.7114 243.405 11.7114 233.744 11.7114C231.3 11.7114 228.64 11.7114 228.715 15.0348C228.791 18.3021 231.508 18.2646 233.904 18.274C241.622 18.2927 249.348 18.2365 257.075 18.2927C264.198 18.3489 269.132 22.908 268.99 29.1523C268.84 35.2936 264 39.6561 257.122 39.6842C246.122 39.731 235.131 39.7029 223.819 39.7029C223.3 39.7029 222.876 39.2816 222.876 38.7668V33.2059C222.876 32.691 223.3 32.2697 223.819 32.2697H243.131C247.82 32.2697 252.528 32.5038 257.188 32.1106C258.622 31.9889 260.802 30.3131 261.066 29.0399C261.603 26.4187 259.339 25.7165 257.037 25.7165C249.037 25.7165 241.037 25.7446 233.036 25.6978C225.753 25.6604 221.055 21.4102 221.083 14.9693C221.111 8.6876 225.706 4.36249 232.706 4.31569C243.81 4.24079 254.915 4.2876 266.33 4.29696C266.849 4.29696 267.273 4.71824 267.273 5.23313L267.264 5.22377Z"
                  fill="currentColor"></path>
                <path
                  d="M68.5682 39.4876H63.3794C62.4926 39.4876 61.7661 38.7668 61.7661 37.8868V6.06637C61.7661 5.11148 62.5586 4.32509 63.5209 4.32509H66.9927C78.0214 4.32509 89.0406 4.28765 100.06 4.34382C106.551 4.3719 110.004 7.76084 110.173 14.1642C110.23 16.2145 110.287 18.2834 110.136 20.3242C109.806 24.7523 106.711 28.6749 102.56 28.8247C94.3333 29.1149 86.0877 28.9464 77.6629 28.9276C76.7478 28.9276 76.0119 28.1881 76.0119 27.2893V23.2825C76.0119 22.3745 76.7572 21.6349 77.6723 21.6349C84.2386 21.6349 90.6728 21.6442 97.107 21.6349C102.135 21.6255 104.343 18.5174 102.296 13.9208C101.834 12.8911 100.041 11.8519 98.8429 11.8332C89.4841 11.6647 80.1252 11.7396 70.1721 11.7396V37.8962C70.1721 38.7762 69.4456 39.497 68.5588 39.497L68.5682 39.4876Z"
                  fill="currentColor"></path>
                <path
                  d="M165.166 4.52169H171.761C172.28 4.52169 172.704 4.94297 172.704 5.46722V14.6885C172.704 18.7983 172.714 22.9174 172.714 27.0272C172.714 30.6221 174.421 32.4289 178.252 32.3166C185.818 32.1013 193.375 32.1294 200.941 32.3166C204.969 32.4196 206.602 30.5847 206.545 26.7276C206.432 19.7813 206.507 12.8255 206.507 5.58892C206.507 5.07403 206.932 4.65275 207.451 4.65275H213.96C214.394 4.65275 214.762 4.94297 214.875 5.36424C215.017 5.93531 215.168 6.54382 215.177 7.16169C215.215 14.0145 215.309 20.8766 215.177 27.7294C215.026 35.5557 210.819 39.6468 203.054 39.6842C194.092 39.7311 185.129 39.7404 176.157 39.6842C168.61 39.6374 164.317 35.434 164.251 28.0102C164.185 20.6425 164.232 13.2655 164.232 5.4485C164.232 4.93361 164.657 4.51233 165.176 4.51233L165.166 4.52169Z"
                  fill="currentColor"></path>
                <path
                  d="M115.938 4.50293H123.419C123.655 4.50293 123.844 4.69016 123.844 4.92421V14.5761C123.844 18.0025 123.844 21.4289 123.844 24.8459C123.862 31.4459 124.655 32.2604 131.127 32.2697C138.844 32.2791 146.552 32.2697 154.269 32.2697H157.618C158.147 32.2697 158.581 32.7004 158.581 33.2246V38.6263C158.581 39.1506 158.147 39.5719 157.618 39.5812C146.505 39.5906 135.684 39.7591 124.862 39.497C120.023 39.3753 115.834 35.3591 115.626 30.491C115.249 22.0561 115.513 13.5931 115.522 4.94293C115.522 4.70889 115.711 4.52165 115.947 4.52165L115.938 4.50293Z"
                  fill="currentColor"></path>
              </svg>
            </div>
            <div className="leading-6 m-[6px_0px_18px] text-sm">
              No ads, unilimited game maps, free games, discount and...
            </div>
            <button className="btn btn-outline p-[6px_12px]">See all the benefits</button>
          </div>
          {/* scroll menu */}
          <div className="flex flex-col *:text-[#D3DDD9] *:text-[15px] *:p-2 *:flex *:gap-x-3 *:items-center *:h-12 [&>a>*]:text-[32px] md:[&>a>*]:text-[20px]">
            <Link href="/" className="font-bold bg-[#414959]">
              <GoHomeFill />
              Home
            </Link>
            <Link href="/about-us">
              <IoIosSearch />
              About Us
            </Link>
            <a href="">
              <VscPreview />
              Reviews
            </a>
            <a href="">
              <BsBookmark />
              News
            </a>
            <a href="">
              <TbCompass />
              Guides
            </a>
            <a href="">
              <FaRegMap />
              Interactive Maps
            </a>
            <a href="">
              <BsStackOverflow />
              Playlist
            </a>
            <a href="">
              <HiMiniRectangleStack />
              Discover
            </a>
            <a href="">
              <BsHandbag />
              Store
            </a>
            <a href="">
              <TbDeviceGamepad3 />
              Rewards
            </a>
            <a href="">
              <LuCirclePlay />
              Videos
            </a>
            <a href="">
              <CgMoreO />
              More
            </a>
          </div>
          {/* back to top */}
          <Link href="#top-sidebar">
            <button className="btn btn-outline w-full p-[6px_12px]">Back To Top</button>
          </Link>
        </div>
      </div>
      {/* Join or Sign Button */}
      <div className="p-[18px_24px] border-t-2 border-white flex justify-center">
        <button className="btn w-full py-[6px] h-fit bg-white text-black border-[#e5e5e5]">
          Join For Free or Log In
        </button>
      </div>
    </div>
  );
}
