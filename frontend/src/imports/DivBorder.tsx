import svgPaths from "./svg-5zem4nocgj";
import imgImage from "figma:asset/5c3df7bc056cf0a7a2c145a06887a3a068f28c54.png";

function Frame1() {
  return (
    <div className="absolute bg-black content-stretch flex items-center justify-center left-[209px] px-[12px] py-[8px] rounded-[32px] top-[11px]">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[21.6px]">Partnership</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 w-full" data-name="Image">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[103.87%] left-0 max-w-none top-0 w-full" src={imgImage} />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[10px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function H3H3Medium() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">Analytics Virtual Internship</p>
      </div>
    </div>
  );
}

function DivPbSpaceXxs() {
  return (
    <div className="h-[121px] relative shrink-0 w-full" data-name="div.pb-space-xxs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <H3H3Medium />
        <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] w-full">
          <p className="leading-[16.8px] whitespace-pre-wrap">Text description about the experience but it’s like two lines long. Sometimes three.</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[6.24%_32.96%_6.24%_39.76%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00117 10.5035">
            <path d={svgPaths.p12982e00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DivCtaIconBlock() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame />
    </div>
  );
}

function DivIconWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[24px] relative shrink-0" data-name="div.icon-wrapper">
      <DivCtaIconBlock />
    </div>
  );
}

function ViewCourseDetails() {
  return (
    <div className="relative shrink-0 w-full" data-name="View course details">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] whitespace-nowrap">
            <p className="decoration-solid leading-[24px] underline">Learn more</p>
          </div>
          <DivIconWrapper />
        </div>
      </div>
    </div>
  );
}

function DivBorderLight() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails />
      </div>
    </div>
  );
}

export default function DivBorder() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-px relative size-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <Image />
      <DivPbSpaceXxs />
      <DivBorderLight />
    </div>
  );
}