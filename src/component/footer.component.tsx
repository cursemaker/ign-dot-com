import Link from "next/link";
import * as React from "react";
import IGN_Logo from "./IGN_Logo.component";

export default function Footer() {
  const footerLinks = [
    "Reviews",
    "Editor Columns",
    "News",
    "Guides",
    "how to Watch Guides",
    "Elden Ring DLC Interactive Map",
    "GTA 5 Cheats",
    "IGN Store",
    "HowLongToBeat",
    "Deals",
    "Contact Us",
    "IGN YouTube",
    "IGN TikTok",
    "IGN Twitter",
    "Map Genie",
  ];

  return (
    <div className="flex flex-col max-sm:gap-y-[55px] gap-y-4 max-w-full sm:mx-[120px]">
      <div className="max-sm:p-[12px_24px_24px] m-[0_auto] h-full w-full shrink-0">
        <div className="border-t border-[#343A47] pt-[18px] max-sm:flex max-sm:flex-col grid grid-cols-[auto_auto] items-center gap-3">
          <IGN_Logo />
          <div className="text-[#f6f8f7] leading-[1.5] tracking-[0.005em] min-w-full box-border flex flex-wrap">
            {footerLinks.map((link: string, index: number) => (
              <React.Fragment key={index}>
                {index !== 0 && <span className="mx-1.5 text-[16px]">•</span>}
                <Link href="" className="text-[13px] hover:underline">
                  {link}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div title="bottom-ribbon" className="sticky bottom-0 z-[calc(19999)+1]"></div>
    </div>
  );
}
