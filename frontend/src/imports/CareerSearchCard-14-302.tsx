import svgPaths from "./svg-jyswhic5yw";
import imgImage from "figma:asset/5c3df7bc056cf0a7a2c145a06887a3a068f28c54.png";

function Image() {
  return (
    <div className="h-[169px] relative shrink-0 w-full" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[103.87%] left-0 max-w-none top-0 w-full" src={imgImage} />
      </div>
      <div className="size-full" />
    </div>
  );
}

function H3H3Small() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-small">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.4px] w-full">
        <p className="leading-[19.2px] whitespace-pre-wrap">Intelligence Officer</p>
      </div>
    </div>
  );
}

function HrCardDegreeTextUnderline() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[34.56px]" data-name="hr.card-degree-text-underline" />;
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p1049ec00} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivFsXsMargin() {
  return (
    <div className="h-[23.8px] relative shrink-0 w-[92.02px]" data-name="div.fs-xs:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[84.35px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">-0.7 %</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame />
      <DivFsXsMargin />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.5px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12">
        <g id="Frame">
          <path d={svgPaths.p2befb900} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.5px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12">
        <g id="Frame">
          <path d={svgPaths.p2befb900} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivFsXsMargin1() {
  return (
    <div className="h-[23.8px] relative shrink-0 w-[94.75px]" data-name="div.fs-xs:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[87.084px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">$93,580</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame1 />
      <Frame2 />
      <DivFsXsMargin1 />
    </div>
  );
}

function DivMbSpaceXxs() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex />
      <DivDFlex1 />
    </div>
  );
}

function DivCardDegreeTextBody() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-degree-text-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <H3H3Small />
        <HrCardDegreeTextUnderline />
        <DivMbSpaceXxs />
      </div>
    </div>
  );
}

function DivCardDegreeText() {
  return (
    <div className="bg-white min-h-[135px] relative shrink-0 w-full" data-name="div.card-degree-text">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] p-[24px] relative w-full">
        <DivCardDegreeTextBody />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DivCardDegreeText />
    </div>
  );
}

function PFsXs() {
  return (
    <div className="absolute bg-[#191919] content-stretch flex flex-col items-start left-[26px] p-[4px] top-[156px]" data-name="p.fs-xs">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16.8px]">Business</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="div">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-arts-business-concentration-business/">
        <p className="cursor-pointer decoration-solid leading-[22.4px] underline">Learn more</p>
      </a>
    </div>
  );
}

function BusinessBusinessAdministrationBaLearnMore1() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Business – Business Administration (BA)-Learn more">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute inset-[6.24%_32.96%_6.24%_39.76%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00117 10.5035">
            <path d={svgPaths.p12982e00} fill="var(--fill-0, #191919)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BusinessBusinessAdministrationBaLearnMore() {
  return (
    <a className="bg-[#fafafa] content-stretch cursor-pointer flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="Business – Business Administration (BA)-Learn more" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-arts-business-concentration-business/">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <BusinessBusinessAdministrationBaLearnMore1 />
    </a>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <BusinessBusinessAdministrationBaLearnMore />
    </div>
  );
}

function DivDFlex2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.d-flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Div />
        <Div1 />
      </div>
    </div>
  );
}

function DivBgWhite() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="div.bg-white">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[13px] px-[16px] relative w-full">
        <DivDFlex2 />
      </div>
    </div>
  );
}

function Yellowblock() {
  return (
    <div className="bg-[#ffc627] h-[6px] relative shrink-0 w-full" data-name="Yellowblock">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
      <div className="size-full" />
    </div>
  );
}

export default function CareerSearchCard() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-px px-px relative size-full" data-name="Career Search Card">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <Image />
      <Frame3 />
      <PFsXs />
      <DivBgWhite />
      <Yellowblock />
    </div>
  );
}