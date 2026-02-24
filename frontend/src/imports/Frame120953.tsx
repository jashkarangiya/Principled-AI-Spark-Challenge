import svgPaths from "./svg-a3z0lp5gea";

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

export default function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <DivCardDegreeText />
    </div>
  );
}