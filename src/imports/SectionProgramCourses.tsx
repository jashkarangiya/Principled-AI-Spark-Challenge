import svgPaths from "./svg-rwcsmp95du";
import imgSectionProgramCourses from "figma:asset/246706e29030f783e2d25b7656d4d29484ca9389.png";

function H2MbSpaceSm() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.mb-space-sm">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[36px] tracking-[-1.26px] w-full">
        <p className="leading-[43.2px] whitespace-pre-wrap">Related ASU experiences to get you ahead</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Description about how ASU has many resources and stuff and they help you get towards your career goals beyond just the degree I don’t know.</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] w-full" href="https://degrees.apps.asu.edu/checksheet/2025/CBA/BAACCBS/null">
        <p className="cursor-pointer whitespace-pre-wrap">
          <span className="leading-[24px]">View m</span>
          <span className="leading-[24px]">ore career resources</span>
        </p>
      </a>
    </div>
  );
}

function DivMbSpaceMd() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.mb-space-md">
      <P />
      <Div />
    </div>
  );
}

function DivCol() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="div.col">
      <H2MbSpaceSm />
      <DivMbSpaceMd />
    </div>
  );
}

function DivRow() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center min-h-[187.19000244140625px] relative shrink-0 w-full" data-name="div.row">
      <DivCol />
    </div>
  );
}

function HrTextDark() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="hr.text-dark-3">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function DivCol1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <HrTextDark />
      </div>
    </div>
  );
}

function DivRow1() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center min-h-[33px] relative shrink-0 w-[1342px]" data-name="div.row">
      <DivCol1 />
    </div>
  );
}

function DivPxSpaceXs() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.px-space-xs">
      <DivRow />
      <DivRow1 />
    </div>
  );
}

function H3H3Medium() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">Skill</p>
      </div>
    </div>
  );
}

function HrTitleUnderline() {
  return <div className="bg-[#ffc627] h-[4px] shrink-0 w-[30px]" data-name="hr.title-underline" />;
}

function DivPbSpaceXxs() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.pb-space-xxs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[31px] pt-[14.795px] px-[16px] relative size-full">
        <H3H3Medium />
        <HrTitleUnderline />
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
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] whitespace-nowrap">
            <p>
              <span className="decoration-solid leading-[24px] underline">CIS 350</span>
              <span className="leading-[24px] text-[#191919]">{` , `}</span>
              <span className="decoration-solid leading-[24px] underline">MAT 390</span>
            </p>
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

function DivBorder() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px p-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs />
      <DivBorderLight />
    </div>
  );
}

function DivColMargin() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_1006.5px_209.19px_0] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder />
    </div>
  );
}

function H3H3Medium1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">Skill</p>
      </div>
    </div>
  );
}

function HrTitleUnderline1() {
  return <div className="bg-[#ffc627] h-[4px] shrink-0 w-[30px]" data-name="hr.title-underline" />;
}

function DivPbSpaceXxs1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.pb-space-xxs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[31px] pt-[14.795px] px-[16px] relative size-full">
        <H3H3Medium1 />
        <HrTitleUnderline1 />
      </div>
    </div>
  );
}

function Frame1() {
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

function DivCtaIconBlock1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame1 />
    </div>
  );
}

function DivIconWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[24px] relative shrink-0" data-name="div.icon-wrapper">
      <DivCtaIconBlock1 />
    </div>
  );
}

function ViewCourseDetails1() {
  return (
    <div className="relative shrink-0 w-full" data-name="View course details">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] whitespace-nowrap">
            <p className="decoration-solid leading-[24px] underline">View course details</p>
          </div>
          <DivIconWrapper1 />
        </div>
      </div>
    </div>
  );
}

function DivBorderLight1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails1 />
      </div>
    </div>
  );
}

function DivBorder1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px p-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs1 />
      <DivBorderLight1 />
    </div>
  );
}

function DivColMargin1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_671px_209.19px_335.5px] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder1 />
    </div>
  );
}

function H3H3Medium2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">Skill</p>
      </div>
    </div>
  );
}

function HrTitleUnderline2() {
  return <div className="bg-[#ffc627] h-[4px] shrink-0 w-[30px]" data-name="hr.title-underline" />;
}

function DivPbSpaceXxs2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.pb-space-xxs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[31px] pt-[14.795px] px-[16px] relative size-full">
        <H3H3Medium2 />
        <HrTitleUnderline2 />
      </div>
    </div>
  );
}

function Frame2() {
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

function DivCtaIconBlock2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame2 />
    </div>
  );
}

function DivIconWrapper2() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[24px] relative shrink-0" data-name="div.icon-wrapper">
      <DivCtaIconBlock2 />
    </div>
  );
}

function ViewCourseDetails2() {
  return (
    <div className="relative shrink-0 w-full" data-name="View course details">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] whitespace-nowrap">
            <p className="decoration-solid leading-[24px] underline">View course details</p>
          </div>
          <DivIconWrapper2 />
        </div>
      </div>
    </div>
  );
}

function DivBorderLight2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails2 />
      </div>
    </div>
  );
}

function DivBorder2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px p-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs2 />
      <DivBorderLight2 />
    </div>
  );
}

function DivColMargin2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_335.5px_209.19px_671px] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder2 />
    </div>
  );
}

function H3H3Medium3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">Skill</p>
      </div>
    </div>
  );
}

function HrTitleUnderline3() {
  return <div className="bg-[#ffc627] h-[4px] shrink-0 w-[30px]" data-name="hr.title-underline" />;
}

function DivPbSpaceXxs3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.pb-space-xxs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[31px] pt-[14.795px] px-[16px] relative size-full">
        <H3H3Medium3 />
        <HrTitleUnderline3 />
      </div>
    </div>
  );
}

function Frame3() {
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

function DivCtaIconBlock3() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame3 />
    </div>
  );
}

function DivIconWrapper3() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[24px] relative shrink-0" data-name="div.icon-wrapper">
      <DivCtaIconBlock3 />
    </div>
  );
}

function ViewCourseDetails3() {
  return (
    <div className="relative shrink-0 w-full" data-name="View course details">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] whitespace-nowrap">
            <p className="decoration-solid leading-[24px] underline">View course details</p>
          </div>
          <DivIconWrapper3 />
        </div>
      </div>
    </div>
  );
}

function DivBorderLight3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails3 />
      </div>
    </div>
  );
}

function DivBorder3() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px p-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs3 />
      <DivBorderLight3 />
    </div>
  );
}

function DivColMargin3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_209.19px_1006.5px] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder3 />
    </div>
  );
}

function H3H3Medium4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">Skill</p>
      </div>
    </div>
  );
}

function HrTitleUnderline4() {
  return <div className="bg-[#ffc627] h-[4px] shrink-0 w-[30px]" data-name="hr.title-underline" />;
}

function DivPbSpaceXxs4() {
  return (
    <div className="flex-[1_0_0] mb-[-0.01px] min-h-px min-w-px relative w-full" data-name="div.pb-space-xxs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.99px] items-start pb-[31.01px] pt-[14.795px] px-[16px] relative size-full">
        <H3H3Medium4 />
        <HrTitleUnderline4 />
      </div>
    </div>
  );
}

function Frame4() {
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

function DivCtaIconBlock4() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame4 />
    </div>
  );
}

function DivIconWrapper4() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[24px] relative shrink-0" data-name="div.icon-wrapper">
      <DivCtaIconBlock4 />
    </div>
  );
}

function ViewCourseDetails4() {
  return (
    <div className="relative shrink-0 w-full" data-name="View course details">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] whitespace-nowrap">
            <p className="decoration-solid leading-[24px] underline">View course details</p>
          </div>
          <DivIconWrapper4 />
        </div>
      </div>
    </div>
  );
}

function DivBorderLight4() {
  return (
    <div className="mb-[-0.01px] relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails4 />
      </div>
    </div>
  );
}

function DivBorder4() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px pb-[1.01px] pt-px px-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs4 />
      <DivBorderLight4 />
    </div>
  );
}

function DivColMargin4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[209.19px_1006.5px_0_0] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder4 />
    </div>
  );
}

function H3H3Medium5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">Skill</p>
      </div>
    </div>
  );
}

function HrTitleUnderline5() {
  return <div className="bg-[#ffc627] h-[4px] shrink-0 w-[30px]" data-name="hr.title-underline" />;
}

function DivPbSpaceXxs5() {
  return (
    <div className="flex-[1_0_0] mb-[-0.01px] min-h-px min-w-px relative w-full" data-name="div.pb-space-xxs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.99px] items-start pb-[31.01px] pt-[14.795px] px-[16px] relative size-full">
        <H3H3Medium5 />
        <HrTitleUnderline5 />
      </div>
    </div>
  );
}

function Frame5() {
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

function DivCtaIconBlock5() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame5 />
    </div>
  );
}

function DivIconWrapper5() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[24px] relative shrink-0" data-name="div.icon-wrapper">
      <DivCtaIconBlock5 />
    </div>
  );
}

function ViewCourseDetails5() {
  return (
    <div className="relative shrink-0 w-full" data-name="View course details">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] whitespace-nowrap">
            <p className="decoration-solid leading-[24px] underline">View course details</p>
          </div>
          <DivIconWrapper5 />
        </div>
      </div>
    </div>
  );
}

function DivBorderLight5() {
  return (
    <div className="mb-[-0.01px] relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails5 />
      </div>
    </div>
  );
}

function DivBorder5() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px pb-[1.01px] pt-px px-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs5 />
      <DivBorderLight5 />
    </div>
  );
}

function DivColMargin5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[209.19px_671px_0_335.5px] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder5 />
    </div>
  );
}

function H3H3Medium6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">Skill</p>
      </div>
    </div>
  );
}

function HrTitleUnderline6() {
  return <div className="bg-[#ffc627] h-[4px] shrink-0 w-[30px]" data-name="hr.title-underline" />;
}

function DivPbSpaceXxs6() {
  return (
    <div className="flex-[1_0_0] mb-[-0.01px] min-h-px min-w-px relative w-full" data-name="div.pb-space-xxs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.99px] items-start pb-[31.01px] pt-[14.795px] px-[16px] relative size-full">
        <H3H3Medium6 />
        <HrTitleUnderline6 />
      </div>
    </div>
  );
}

function Frame6() {
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

function DivCtaIconBlock6() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame6 />
    </div>
  );
}

function DivIconWrapper6() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[24px] relative shrink-0" data-name="div.icon-wrapper">
      <DivCtaIconBlock6 />
    </div>
  );
}

function ViewCourseDetails6() {
  return (
    <div className="relative shrink-0 w-full" data-name="View course details">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] whitespace-nowrap">
            <p className="decoration-solid leading-[24px] underline">View course details</p>
          </div>
          <DivIconWrapper6 />
        </div>
      </div>
    </div>
  );
}

function DivBorderLight6() {
  return (
    <div className="mb-[-0.01px] relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails6 />
      </div>
    </div>
  );
}

function DivBorder6() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px pb-[1.01px] pt-px px-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs6 />
      <DivBorderLight6 />
    </div>
  );
}

function DivColMargin6() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[209.19px_335.5px_0_671px] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder6 />
    </div>
  );
}

function H3H3Medium7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">Skill</p>
      </div>
    </div>
  );
}

function HrTitleUnderline7() {
  return <div className="bg-[#ffc627] h-[4px] shrink-0 w-[30px]" data-name="hr.title-underline" />;
}

function DivPbSpaceXxs7() {
  return (
    <div className="flex-[1_0_0] mb-[-0.01px] min-h-px min-w-px relative w-full" data-name="div.pb-space-xxs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.99px] items-start pb-[31.01px] pt-[14.795px] px-[16px] relative size-full">
        <H3H3Medium7 />
        <HrTitleUnderline7 />
      </div>
    </div>
  );
}

function Frame7() {
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

function DivCtaIconBlock7() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame7 />
    </div>
  );
}

function DivIconWrapper7() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[24px] relative shrink-0" data-name="div.icon-wrapper">
      <DivCtaIconBlock7 />
    </div>
  );
}

function ViewCourseDetails7() {
  return (
    <div className="relative shrink-0 w-full" data-name="View course details">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] whitespace-nowrap">
            <p className="decoration-solid leading-[24px] underline">View course details</p>
          </div>
          <DivIconWrapper7 />
        </div>
      </div>
    </div>
  );
}

function DivBorderLight7() {
  return (
    <div className="mb-[-0.01px] relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails7 />
      </div>
    </div>
  );
}

function DivBorder7() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px pb-[1.01px] pt-px px-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs7 />
      <DivBorderLight7 />
    </div>
  );
}

function DivColMargin7() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[209.19px_0_0_1006.5px] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder7 />
    </div>
  );
}

function DivRow2() {
  return (
    <div className="h-[418.38px] relative shrink-0 w-[1342px]" data-name="div.row">
      <DivColMargin />
      <DivColMargin1 />
      <DivColMargin2 />
      <DivColMargin3 />
      <DivColMargin4 />
      <DivColMargin5 />
      <DivColMargin6 />
      <DivColMargin7 />
    </div>
  );
}

function ButtonBtn() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[9.39px] pt-[8px] px-[17px] relative rounded-[804px] shrink-0" data-name="button.btn">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[804px]" />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] text-center whitespace-nowrap">
        <p className="decoration-solid leading-[22.4px] underline">Show more</p>
      </div>
    </div>
  );
}

function DivTextCenter() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.text-center">
      <ButtonBtn />
    </div>
  );
}

function DivCol2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <DivTextCenter />
      </div>
    </div>
  );
}

function DivRow3() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center pt-[15.99px] relative shrink-0 w-[1342px]" data-name="div.row">
      <DivCol2 />
    </div>
  );
}

function DivContainer() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1320px] pb-[96px] relative shrink-0 w-full" data-name="div.container">
      <DivPxSpaceXs />
      <DivRow2 />
      <DivRow3 />
    </div>
  );
}

export default function SectionProgramCourses() {
  return (
    <div className="bg-size-[450px_451px] bg-top-left content-stretch flex flex-col items-start pt-[96px] px-[64px] relative size-full" data-name="section#program-courses" style={{ backgroundImage: `url('${imgSectionProgramCourses}')` }}>
      <DivContainer />
    </div>
  );
}