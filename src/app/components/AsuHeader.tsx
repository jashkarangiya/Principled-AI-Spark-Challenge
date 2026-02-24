import HeaderBgWhite from "../../imports/HeaderBgWhite";
import { Menu } from "lucide-react";
import imgArizonaStateUniversityLogo from "../../assets/cea00762e57b70f2f5f371a696a3b497fab2acc1.png";

function MobileHeader() {
  return (
    <div className="bg-white lg:hidden border-b border-[#d0d0d0]" data-name="header.bg-white">
      <div className="flex items-center justify-between pt-[24px] px-[16px] pb-[16px]">
        <a href="https://www.asu.edu/" className="shrink-0">
          <div className="h-[32px] w-[177.77px]">
            <img alt="Arizona State University" className="size-full" src={imgArizonaStateUniversityLogo} />
          </div>
        </a>
        <button className="p-px">
          <Menu className="size-[32px] text-[#191919]" />
        </button>
      </div>
      <div className="px-[16px] pb-[16px]">
        <a href="/" className="font-['Arial'] font-bold text-[18px] leading-[25.2px] text-[#191919]">
          ASU Online
        </a>
      </div>
    </div>
  );
}

export function AsuHeader() {
  return (
    <>
      <MobileHeader />
      <div className="hidden lg:block">
        <HeaderBgWhite />
      </div>
    </>
  );
}