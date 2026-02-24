import svgPaths from "./svg-n8ysz918uj";
import imgArizonaStateUniversityLogo from "figma:asset/cea00762e57b70f2f5f371a696a3b497fab2acc1.png";
import imgTwoOnlineAccountingDegreeStudentsCollaborateWhileWorkingTogetherOnALaptop from "figma:asset/ed0ce36e138797efb99a7df1929414f74932f5ee.png";
import imgDivColLg5 from "figma:asset/93e3da80ba7c54d1aedaf79761da9e1ecb1270d9.png";
import imgCardImage from "figma:asset/2c9cdd172a089dae4196d2e41e306c8d547f3e5b.png";
import imgSectionProgramCourses from "figma:asset/246706e29030f783e2d25b7656d4d29484ca9389.png";
import imgDivCol from "figma:asset/e8c95aaa5e52c5a9011ad05b48d1af985269e230.png";
import imgDivCol12 from "figma:asset/34ecfad1eef9f726519a4dab92f60e5a71329bca.png";
import imgDivCol13 from "figma:asset/26ee336cf97aa604864caef249eb20e906ae8b80.png";
import imgDivCol1 from "figma:asset/d9993b194d5d83eef702d4a2cb7fd0a10a248597.png";
import imgDivCol14 from "figma:asset/728fce211c26b78799b819870a0bf5980e20b723.png";
import imgAsuOnline from "figma:asset/cd09da2a96204938270dfd11e4f75ca7a2a9fb47.png";
import imgRepeatedlyRanked1On30ListsInTheLast3Years from "figma:asset/904126d9185baab1838c2812e90445690e55a6fe.png";

function ArizonaStateUniversityLogo() {
  return (
    <div className="h-[32px] relative shrink-0 w-[177.77px]" data-name="Arizona State University logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgArizonaStateUniversityLogo} />
      </div>
    </div>
  );
}

function A() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" data-name="a" href="https://www.asu.edu/">
      <ArizonaStateUniversityLogo />
    </a>
  );
}

function OpenIcon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="open icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="open icon">
          <path d={svgPaths.pbf49100} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ExpandSiteNavigation() {
  return (
    <div className="content-stretch flex flex-col items-start p-px relative shrink-0" data-name="expand site navigation">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <OpenIcon />
    </div>
  );
}

function DivDFlex() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.d-flex">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[24px] px-[16px] relative w-full">
          <A />
          <ExpandSiteNavigation />
        </div>
      </div>
    </div>
  );
}

function PPxSpaceXs() {
  return (
    <a className="cursor-pointer relative shrink-0 w-full" data-name="p.px-space-xs" href="https://asuonline.asu.edu/">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] text-left w-full" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[25.2px] whitespace-pre-wrap">ASU Online</p>
        </div>
      </div>
    </a>
  );
}

function DivCol9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <DivDFlex />
      <PPxSpaceXs />
    </div>
  );
}

function DivRow() {
  return (
    <div className="min-h-[115.19000244140625px] relative shrink-0 w-full" data-name="div.row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-wrap items-start justify-center min-h-[inherit] relative w-full">
        <DivCol9 />
      </div>
    </div>
  );
}

function DivDBlock() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="div.d-block">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b border-solid inset-0 pointer-events-none" />
      <DivRow />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <DivDBlock />
    </div>
  );
}

function HeaderBgWhite() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header.bg-white">
      <Frame54 />
    </div>
  );
}

function H1H1Medium() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[24px] right-0 top-0" data-name="h1.h1-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[36px] not-italic relative shrink-0 text-[#191919] text-[30px] tracking-[-1.05px] whitespace-nowrap">
        <p className="mb-0">Online Bachelor of</p>
        <p className="mb-0">Science in</p>
        <p>Accountancy</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[164px]" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p className="mb-0">Arizona State University’s Bachelor of</p>
        <p className="mb-0">Science in accountancy is ranked among</p>
        <p className="mb-0">the best programs in the nation by U.S.</p>
        <p className="mb-0">{`News & World Report and Public`}</p>
        <p className="mb-0">Accounting Report. As the highest-rated</p>
        <p className="mb-0">undergraduate accounting program</p>
        <p className="mb-0">offered online, you’ll benefit from ASU’s</p>
        <p className="mb-0">state-of-the-art curriculum and real-world</p>
        <p>environment.</p>
      </div>
    </div>
  );
}

function DivMxSpaceSm() {
  return (
    <div className="h-[420px] relative shrink-0 w-full" data-name="div.mx-space-sm">
      <H1H1Medium />
      <P />
      <a className="-translate-y-1/2 absolute cursor-pointer flex flex-col font-['Arial:Regular',sans-serif] h-[23px] justify-center leading-[0] left-0 not-italic text-[#8c1d40] text-[16px] text-left top-[407.5px] w-[82.156px]" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-detail">
        <p className="decoration-solid leading-[22.4px] underline whitespace-pre-wrap">Learn more</p>
      </a>
    </div>
  );
}

function DivCol10() {
  return (
    <div className="h-[444px] relative shrink-0 w-full" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[39px] relative size-full">
        <DivMxSpaceSm />
      </div>
    </div>
  );
}

function PFsSmall() {
  return (
    <div className="absolute bg-[#191919] content-stretch flex items-start left-[24px] px-[8px] py-[4px] top-[48px]" data-name="p.fs-small">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[19.6px]">Quick facts</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="image">
          <path d={svgPaths.p26a47d00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="image fill">
      <Image />
    </div>
  );
}

function NextStartDate() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[16px]" data-name="Next start date:">
      <ImageFill />
    </div>
  );
}

function NextStartDateMargin() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] pt-[4px] relative shrink-0 w-[24px]" data-name="Next start date: :margin">
      <NextStartDate />
    </div>
  );
}

function PTextDark() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="p.text-dark-3">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p>
          <span className="leading-[24px]">{`Next start date: `}</span>
          <span className="font-['Arial:Bold',sans-serif] leading-[24px] not-italic">03/16/2026</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex1() {
  return (
    <div className="absolute content-stretch flex items-start left-[24px] right-[24px] top-[99.59px]" data-name="div.d-flex">
      <NextStartDateMargin />
      <PTextDark />
    </div>
  );
}

function HrTextDark() {
  return <div className="absolute border-[#d0d0d0] border-solid border-t h-px left-[24px] right-[24px] top-[139.59px]" data-name="hr.text-dark-3" />;
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_1129)" id="image">
          <path d={svgPaths.p2422ef80} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_7_1129">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="image fill">
      <Image1 />
    </div>
  );
}

function TotalClasses() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[16px]" data-name="Total classes:">
      <ImageFill1 />
    </div>
  );
}

function TotalClassesMargin() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] pt-[4px] relative shrink-0 w-[24px]" data-name="Total classes: :margin">
      <TotalClasses />
    </div>
  );
}

function PTextDark1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="p.text-dark-3">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p>
          <span className="leading-[24px]">{`Total classes: `}</span>
          <span className="font-['Arial:Bold',sans-serif] leading-[24px] not-italic">40</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex2() {
  return (
    <div className="absolute content-stretch flex items-start left-[24px] right-[24px] top-[156.59px]" data-name="div.d-flex">
      <TotalClassesMargin />
      <PTextDark1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_1129)" id="image">
          <path d={svgPaths.p2422ef80} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_7_1129">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageFill2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="image fill">
      <Image2 />
    </div>
  );
}

function WeeksPerClass() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[16px]" data-name="Weeks per class:">
      <ImageFill2 />
    </div>
  );
}

function WeeksPerClassMargin() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] pt-[4px] relative shrink-0 w-[24px]" data-name="Weeks per class: :margin">
      <WeeksPerClass />
    </div>
  );
}

function PTextDark2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="p.text-dark-3">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p>
          <span className="leading-[24px]">{`Weeks per class: `}</span>
          <span className="font-['Arial:Bold',sans-serif] leading-[24px] not-italic">7.5</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex3() {
  return (
    <div className="absolute content-stretch flex items-start left-[24px] right-[24px] top-[188.59px]" data-name="div.d-flex">
      <WeeksPerClassMargin />
      <PTextDark2 />
    </div>
  );
}

function Image3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_1129)" id="image">
          <path d={svgPaths.p2422ef80} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_7_1129">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageFill3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="image fill">
      <Image3 />
    </div>
  );
}

function TotalCreditHours() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[16px]" data-name="Total credit hours:">
      <ImageFill3 />
    </div>
  );
}

function TotalCreditHoursMargin() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] pt-[4px] relative shrink-0 w-[24px]" data-name="Total credit hours: :margin">
      <TotalCreditHours />
    </div>
  );
}

function PTextDark3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="p.text-dark-3">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p>
          <span className="leading-[24px]">{`Total credit hours: `}</span>
          <span className="font-['Arial:Bold',sans-serif] leading-[24px] not-italic">120</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex4() {
  return (
    <div className="absolute content-stretch flex items-start left-[24px] right-[24px] top-[220.59px]" data-name="div.d-flex">
      <TotalCreditHoursMargin />
      <PTextDark3 />
    </div>
  );
}

function DivPtSpaceLg() {
  return (
    <div className="h-[300.59px] relative shrink-0 w-full" data-name="div.pt-space-lg">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PFsSmall />
        <DivDFlex1 />
        <HrTextDark />
        <DivDFlex2 />
        <DivDFlex3 />
        <DivDFlex4 />
      </div>
    </div>
  );
}

function DivBgLight() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex flex-col items-start max-w-[320px] min-h-[295px] pl-[4px] relative rounded-[3px] shrink-0 w-full" data-name="div.bg-light-2">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-l-4 border-solid inset-0 pointer-events-none rounded-[3px]" />
      <DivPtSpaceLg />
    </div>
  );
}

function DivCol11() {
  return (
    <div className="h-[332.59px] relative shrink-0 w-full" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[39px] relative size-full">
        <DivBgLight />
      </div>
    </div>
  );
}

function DivBgWhite() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center mb-[-48px] relative shrink-0 w-[374px]" data-name="div.bg-white">
      <DivCol10 />
      <DivCol11 />
    </div>
  );
}

function SectionProgramIntro() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex flex-col items-center pb-[80px] relative shrink-0 w-full" data-name="section#program-intro">
      <div className="h-[256px] mb-[-48px] relative shrink-0 w-full" data-name="Two online accounting degree students collaborate while working together on a laptop.">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[101.65%] left-0 max-w-none top-0 w-full" src={imgTwoOnlineAccountingDegreeStudentsCollaborateWhileWorkingTogetherOnALaptop} />
        </div>
      </div>
      <DivBgWhite />
    </div>
  );
}

function H2H2Medium() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="h2.h2-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[24px] tracking-[-0.84px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">Degree questions, answered</p>
      </div>
    </div>
  );
}

function PMbSpaceSm() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.585px] relative shrink-0 w-full" data-name="p.mb-space-sm">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[22.4px]">{`Have questions about the `}</span>
          <span className="font-['Arial:Bold',sans-serif] leading-[22.4px] not-italic">Accountancy (BS)</span>
          <span className="leading-[22.4px]">?</span>
        </p>
        <p className="leading-[22.4px]">Fill out this form and we’ll get in touch!</p>
      </div>
    </div>
  );
}

function PMbSpaceSm1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="p.mb-space-sm">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] w-full">
        <p className="leading-[19.6px] whitespace-pre-wrap">* Indicates a required field</p>
      </div>
    </div>
  );
}

function PFsXs() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[562.17px]" data-name="p.fs-xs">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">
        <p className="leading-[16.8px] mb-0">By submitting my information, I consent to ASU contacting me</p>
        <p className="leading-[16.8px] mb-0">about educational services using automated calls, prerecorded</p>
        <p className="leading-[16.8px] mb-0">voice messages, SMS/text messages or email at the information</p>
        <p className="leading-[16.8px] mb-0">provided above. Message and data rates may apply. Consent is</p>
        <p className="leading-[16.8px] mb-0">not required to receive services, and I may call ASU directly at</p>
        <p className="mb-0">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16.8px] text-[#8c1d40] underline">866-277-6589</span>
          <span className="leading-[16.8px]">{`. I consent to ASU’s `}</span>
          <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16.8px] text-[#8c1d40] underline" href="https://asuonline.asu.edu/text-terms/">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16.8px]" href="https://asuonline.asu.edu/text-terms/">
              mobile terms and conditions
            </span>
          </a>
          <span className="leading-[16.8px]">,</span>
        </p>
        <p>
          <span className="leading-[16.8px]">{`and `}</span>
          <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16.8px] text-[#8c1d40] underline" href="https://asuonline.asu.edu/web-analytics-privacy-2/">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16.8px]" href="https://asuonline.asu.edu/web-analytics-privacy-2/">
              Privacy Statements
            </span>
          </a>
          <span className="leading-[16.8px]">, including the European Supplement.</span>
        </p>
      </div>
    </div>
  );
}

function LabelFwBold() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label.fw-bold">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">* First name</p>
      </div>
    </div>
  );
}

function LabelFwBoldMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="label.fw-bold:margin">
      <LabelFwBold />
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-px relative shrink-0 w-full" data-name="div#placeholder">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(25,25,25,0.75)] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Enter your first name</p>
      </div>
    </div>
  );
}

function InputProgramRfiFirstName() {
  return (
    <div className="bg-white relative shrink-0 w-[354px]" data-name="input#program-rfi_first-name">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[16px] py-[11px] relative rounded-[inherit] w-full">
        <DivPlaceholder />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function DivProgramRfiFirstNameGroup() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-center left-0 pb-[25px] right-0 top-0" data-name="div#program-rfi_first-name-group">
      <LabelFwBoldMargin />
      <InputProgramRfiFirstName />
    </div>
  );
}

function DivPlaceholder1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-px relative shrink-0 w-full" data-name="div#placeholder">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(25,25,25,0.75)] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Enter your last name</p>
      </div>
    </div>
  );
}

function InputProgramRfiLastName() {
  return (
    <div className="absolute bg-white left-px right-px top-[33px]" data-name="input#program-rfi_last-name">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[16px] py-[11px] relative rounded-[inherit] w-full">
        <DivPlaceholder1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function DivProgramRfiLastNameGroup() {
  return (
    <div className="absolute h-[98px] left-0 right-0 top-[98px]" data-name="div#program-rfi_last-name-group">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#191919] text-[16px] top-[12px] w-[90.149px]">
        <p className="leading-[24px] whitespace-pre-wrap">* Last name</p>
      </div>
      <InputProgramRfiLastName />
    </div>
  );
}

function DivPlaceholder2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-px relative shrink-0 w-full" data-name="div#placeholder">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(25,25,25,0.75)] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Enter your email address</p>
      </div>
    </div>
  );
}

function InputProgramRfiEmail() {
  return (
    <div className="absolute bg-white left-px right-px top-[33px]" data-name="input#program-rfi_email">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[16px] py-[11px] relative rounded-[inherit] w-full">
        <DivPlaceholder2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function DivProgramRfiEmailGroup() {
  return (
    <div className="absolute h-[98px] left-0 right-0 top-[196px]" data-name="div#program-rfi_email-group">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#191919] text-[16px] top-[12px] w-[53.724px]">
        <p className="leading-[24px] whitespace-pre-wrap">* Email</p>
      </div>
      <InputProgramRfiEmail />
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto pb-px relative shrink-0 w-full" data-name="div">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212427] text-[16px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">+1</p>
      </div>
    </div>
  );
}

function CountryCode() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Country code">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[6px] pl-[40px] pt-[22px] relative size-full">
          <Div />
        </div>
      </div>
    </div>
  );
}

function SpanMInputLabel() {
  return (
    <div className="absolute h-[19.2px] left-[12px] overflow-clip top-[2.68px] w-[272.64px]" data-name="span.m-input-label">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[20px] justify-center leading-[0] left-0 not-italic text-[12.8px] text-[rgba(0,0,0,0.54)] top-[9.2px] w-[76.457px]">
        <p className="leading-[19.2px] whitespace-pre-wrap">Country code</p>
      </div>
    </div>
  );
}

function VIf() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="v-if">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <CountryCode />
        <SpanMInputLabel />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2894d000} id="Vector" stroke="var(--stroke-0, #212427)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function ExpandListOfOptions() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pr-[6px] py-px relative shrink-0" data-name="expand list of options">
      <Frame />
    </div>
  );
}

function DivMInputWrapperRight() {
  return (
    <div className="h-full relative shrink-0" data-name="div.m-input-wrapper-right">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center pr-[8px] py-[4px] relative">
        <ExpandListOfOptions />
      </div>
    </div>
  );
}

function DivMInputWrapper() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.m-input-wrapper">
      <div className="content-stretch flex items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <VIf />
        <DivMInputWrapperRight />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.54)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivMInput() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px relative" data-name="div.m-input">
      <DivMInputWrapper />
    </div>
  );
}

function DivMSelect() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[356px]" data-name="div.m-select">
      <DivMInput />
    </div>
  );
}

function ButtonCountrySelectorFlagButtonProgramRfiAsuonlinePhoneNumber() {
  return (
    <div className="absolute bottom-[2px] content-stretch flex flex-col items-center justify-center left-[13px] pl-[6px] w-[24px]" data-name="button#country-selector-flag-button-program-rfi_asuonline_phone_number">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">
        <p className="leading-[28px]">🇺🇸</p>
      </div>
    </div>
  );
}

function DivMCountrySelector() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[356px] relative shrink-0" data-name="div.m-country-selector">
      <DivMSelect />
      <ButtonCountrySelectorFlagButtonProgramRfiAsuonlinePhoneNumber />
    </div>
  );
}

function Example() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Example: (201) 555-0123" />;
}

function SpanMInputLabel1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] overflow-clip pr-[12px] top-[11px] w-[342px]" data-name="span.m-input-label">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.54)] whitespace-nowrap">
        <p className="leading-[24px]">Example: (201) 555-0123</p>
      </div>
    </div>
  );
}

function VIf1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="v-if">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Example />
        <SpanMInputLabel1 />
      </div>
    </div>
  );
}

function DivMInputWrapper1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.m-input-wrapper">
      <div className="content-stretch flex items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <VIf1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.54)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DivMInput1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[48px] items-start justify-center left-0 min-w-[208px] right-0 top-[-2px]" data-name="div.m-input">
      <DivMInputWrapper1 />
    </div>
  );
}

function DivMInputMargin() {
  return (
    <div className="h-[46px] min-w-[208px] relative shrink-0 w-full" data-name="div.m-input:margin">
      <DivMInput1 />
    </div>
  );
}

function DivMPhoneNumberInput() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.m-phone-number-input">
      <DivMCountrySelector />
      <DivMInputMargin />
    </div>
  );
}

function DivProgramRfiPhoneNumberGroup() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 pb-[32px] right-0 top-[294px]" data-name="div#program-rfi_phone-number-group">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">* Phone number</p>
      </div>
      <DivMPhoneNumberInput />
    </div>
  );
}

function LabelFwBold1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.81px_0_66px_0] items-start" data-name="label.fw-bold">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[22.4px] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p className="mb-0">* Have you served in the U.S. military or are</p>
        <p>you a military dependent?</p>
      </div>
    </div>
  );
}

function DivFormCheck() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[24px] min-w-px relative" data-name="div.form-check">
      <div className="bg-white relative rounded-[8px] shrink-0 size-[16px]" data-name="input.form-check-input">
        <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Yes</p>
      </div>
    </div>
  );
}

function DivFormCheckMargin() {
  return (
    <div className="absolute bottom-[24px] content-stretch flex flex-col items-start justify-center left-0 min-h-[26px] pb-[2px] top-[60.78px]" data-name="div.form-check:margin">
      <DivFormCheck />
    </div>
  );
}

function Image4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="image">
          <path d="M4.2 7L6.3 9.1L10.5 4.9" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="image fill">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Image4 />
      </div>
    </div>
  );
}

function InputFormCheckInput() {
  return (
    <div className="bg-[#ffc627] content-stretch flex flex-col items-start p-px relative rounded-[8px] shrink-0 size-[18px]" data-name="input.form-check-input">
      <div aria-hidden="true" className="absolute border border-[#ffc627] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ImageFill4 />
    </div>
  );
}

function DivFormCheck1() {
  return (
    <div className="absolute bottom-[2px] content-stretch flex gap-[7px] items-center left-[-1px] min-h-[24px] top-0" data-name="div.form-check">
      <InputFormCheckInput />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">No</p>
      </div>
    </div>
  );
}

function DivFormCheckMargin1() {
  return (
    <div className="absolute bottom-[24px] left-[66.11px] top-[60.78px] w-[44.45px]" data-name="div.form-check:margin">
      <DivFormCheck1 />
    </div>
  );
}

function DivMilitaryGroup() {
  return (
    <div className="absolute h-[110.78px] left-0 right-0 top-[452px]" data-name="div#military-group">
      <LabelFwBold1 />
      <DivFormCheckMargin />
      <DivFormCheckMargin1 />
    </div>
  );
}

function DivProgramRfiFormFields() {
  return (
    <div className="h-[681.16px] relative shrink-0 w-full" data-name="div#program-rfi_form-fields">
      <PFsXs />
      <DivProgramRfiFirstNameGroup />
      <DivProgramRfiLastNameGroup />
      <DivProgramRfiEmailGroup />
      <DivProgramRfiPhoneNumberGroup />
      <DivMilitaryGroup />
    </div>
  );
}

function ButtonBtn() {
  return (
    <div className="bg-[#ffc627] opacity-65 relative rounded-[804px] shrink-0 w-full" data-name="button.btn">
      <div aria-hidden="true" className="absolute border border-[#ffc627] border-solid inset-0 pointer-events-none rounded-[804px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[17.19px] pt-[16px] px-[25px] relative w-full">
          <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[21.6px] text-black text-center whitespace-nowrap">
            <p className="leading-[30.2px]">Submit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivCol13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <ButtonBtn />
    </div>
  );
}

function DivRow2() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center pt-[0.8px] relative shrink-0 w-full" data-name="div.row">
      <DivCol13 />
    </div>
  );
}

function DivPySpaceMd() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.py-space-md">
      <div className="content-stretch flex flex-col gap-[23.2px] items-start pb-[32px] pt-[31px] px-[16px] relative w-full">
        <H2H2Medium />
        <PMbSpaceSm />
        <PMbSpaceSm1 />
        <DivProgramRfiFormFields />
        <DivRow2 />
      </div>
    </div>
  );
}

function DivCol12() {
  return (
    <div className="bg-white h-[997.72px] relative shrink-0 w-full" data-name="div.col-12">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DivPySpaceMd />
      </div>
    </div>
  );
}

function DivRow1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center p-px relative shrink-0 w-full" data-name="div.row">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <div className="h-[200px] min-h-[200px] relative shrink-0 w-full" data-name="div.col-lg-5">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[118.53%] left-0 max-w-none top-0 w-full" src={imgDivColLg5} />
        </div>
      </div>
      <DivCol12 />
    </div>
  );
}

function BellIcon() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Bell icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Bell icon">
          <rect fill="var(--fill-0, #FFC627)" height="27" rx="13.5" width="27" />
          <path d={svgPaths.pdecfe00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic relative shrink-0 text-[#191919] w-full whitespace-pre-wrap">
      <p className="font-['Arial:Bold',sans-serif] min-w-full relative shrink-0 text-[18px] w-[min-content]">{`Looking to attend in person? `}</p>
      <p className="font-['Arial:Regular',sans-serif] relative shrink-0 text-[16.579px] w-[244px]">This program is also available for campus students.</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <BellIcon />
      <Frame50 />
    </div>
  );
}

function Btn() {
  return (
    <div className="bg-[#8c1d40] content-stretch flex flex-col gap-[11.842px] items-start relative rounded-[47.368px] shrink-0 w-[221.447px]" data-name="Btn">
      <div className="h-[45px] rounded-[100px] shrink-0 w-[221.447px]" data-name="Shinny primary button" />
      <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[normal] left-[calc(50%+0.07px)] not-italic text-[14.211px] text-center text-white top-[calc(50%-8.29px)]">Explore campus options</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame52 />
      <Btn />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame53 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-white content-center flex flex-wrap gap-y-[12px] items-center p-[32px] relative shrink-0 w-[351px]">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <Frame51 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-center py-[48px] relative shrink-0 w-[389px]">
      <Frame49 />
    </div>
  );
}

function SectionProgramRfi() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex flex-col h-[1514px] items-start pb-[32px] relative shrink-0 w-full" data-name="section#program-rfi">
      <DivRow1 />
      <Frame48 />
    </div>
  );
}

function PTextDark4() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[16.39px] pt-[15px] relative shrink-0" data-name="p.text-dark-3">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[22.4px]">Overview</p>
      </div>
    </div>
  );
}

function PTextDark3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="p.text-dark-3:margin">
      <PTextDark4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p17e0da80} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCollapsed() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="button.collapsed">
      <PTextDark3Margin />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function SecondaryNavigation() {
  return (
    <div className="relative shrink-0 w-full" data-name="secondary navigation">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative w-full">
          <ButtonCollapsed />
        </div>
      </div>
    </div>
  );
}

function DivCol14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[8px] relative self-stretch" data-name="div.col-12">
      <SecondaryNavigation />
    </div>
  );
}

function DivRow3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-wrap items-start justify-center relative w-full">
        <DivCol14 />
      </div>
    </div>
  );
}

function SectionBgWhite() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-px shrink-0 sticky top-0 w-full" data-name="section.bg-white">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b border-solid inset-0 pointer-events-none" />
      <DivRow3 />
    </div>
  );
}

function H2DegreeDetail() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] pb-[0.69px] right-[15px] top-[-1.1px]" data-name="h2#degree-detail">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[28.8px] not-italic relative shrink-0 text-[#191919] text-[24px] tracking-[-0.84px] whitespace-nowrap">
        <p className="mb-0">Earn an accredited</p>
        <p>accounting degree online</p>
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-nowrap">
        <p className="mb-0">Accredited by the Association to Advance</p>
        <p className="mb-0">Collegiate Schools of Business (AACSB),</p>
        <p className="mb-0">this program delivers the critical thinking,</p>
        <p className="mb-0">team-building, communication and</p>
        <p className="mb-0">information technology skills needed to</p>
        <p className="mb-0">thrive in your career. All of that, plus close</p>
        <p className="mb-0">ties with major local, national and</p>
        <p className="mb-0">international accounting firms, provide a</p>
        <p className="mb-0">competitive edge in the job market. Upon</p>
        <p className="mb-0">graduating from this program, you’ll be</p>
        <p className="mb-0">prepared for careers in public, corporate</p>
        <p className="mb-0">and governmental accounting or personal</p>
        <p>financial planning and portfolio analysis.</p>
      </div>
    </div>
  );
}

function P2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">Additionally, this bachelor’s degree can</p>
        <p className="mb-0">
          <span className="leading-[24px]">{`be completed as part of an `}</span>
          <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[24px] text-[#8c1d40] underline" href="https://asuonline.asu.edu/newsroom/asu-online-news/accelerated-masters-programs/">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[24px]" href="https://asuonline.asu.edu/newsroom/asu-online-news/accelerated-masters-programs/">
              Accelerated
            </span>
          </a>
        </p>
        <p className="leading-[24px] mb-0">
          <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid text-[#8c1d40] underline" href="https://asuonline.asu.edu/newsroom/asu-online-news/accelerated-masters-programs/">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[24px]" href="https://asuonline.asu.edu/newsroom/asu-online-news/accelerated-masters-programs/">
              Master’s
            </span>
          </a>
          {` program. When accepted, you`}
        </p>
        <p className="leading-[24px] mb-0">can earn a master’s degree in as little as</p>
        <p className="leading-[24px] mb-0">one year after completing your</p>
        <p className="leading-[24px] mb-0">undergraduate degree. This opportunity</p>
        <p className="leading-[24px] mb-0">saves you time and money while giving</p>
        <p className="leading-[24px] mb-0">you advanced knowledge in your field.</p>
        <p className="leading-[24px]">{`Applicable master's degrees include:`}</p>
      </div>
    </div>
  );
}

function Li() {
  return (
    <div className="font-['Arial:Regular',sans-serif] h-[48px] not-italic relative shrink-0 text-[16px] w-[264px]" data-name="li">
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center leading-[0] left-0 text-[#191919] top-[12px] w-[7.35px]">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[24px] whitespace-pre-wrap">
            <span className="leading-[24px]">{` `}</span>
          </li>
        </ul>
      </div>
      <a className="-translate-y-1/2 absolute cursor-pointer flex flex-col h-[48px] justify-center leading-[24px] left-0 text-[#8c1d40] top-[23.5px] underline w-[231.45px] whitespace-pre-wrap" href="https://asuonline.asu.edu/online-degree-programs/graduate/accountancy-data-analytics/">
        <p className="decoration-solid mb-0">Master of Accountancy and Data</p>
        <p className="decoration-solid">Analytics (MACC)</p>
      </a>
    </div>
  );
}

function P3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Please note, this program is not available</p>
        <p className="mb-0">to students with BA, BS or MS degrees in</p>
        <p className="mb-0">accountancy, and the courses are not</p>
        <p>available to non-degree students.</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-end left-[15px] right-[15px] top-[81.59px]" data-name="div">
      <P1 />
      <P2 />
      <Li />
      <P3 />
    </div>
  );
}

function ButtonBtn1() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[804px] shrink-0" data-name="button.btn">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[804px]" />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] text-center whitespace-nowrap">
        <p className="decoration-solid leading-[22.4px] underline">Read more</p>
      </div>
    </div>
  );
}

function DivTextCenter() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[15px] right-[15px] top-[817.59px]" data-name="div.text-center">
      <ButtonBtn1 />
    </div>
  );
}

function DivCol() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col">
      <H2DegreeDetail />
      <Div1 />
      <DivTextCenter />
    </div>
  );
}

function DivRow4() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center relative shrink-0 w-full" data-name="div.row">
      <DivCol />
    </div>
  );
}

function SectionProgramDetail() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section#program-detail">
      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
        <DivRow4 />
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <SectionBgWhite />
      <SectionProgramDetail />
    </div>
  );
}

function CardImage() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="cardImage">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-11.98%] max-w-none top-0 w-[123.96%]" src={imgCardImage} />
      </div>
    </div>
  );
}

function DivCol16() {
  return (
    <div className="content-stretch flex flex-col h-[360px] items-start justify-center relative shrink-0 w-full" data-name="div.col-12">
      <CardImage />
    </div>
  );
}

function H3MbSpaceSm() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="h3.mb-space-sm">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">Will my diploma say ‘online’?</p>
      </div>
    </div>
  );
}

function P4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">No, Arizona State University’s diplomas</p>
        <p className="mb-0">don’t specify whether you earn your</p>
        <p className="mb-0">degree online or in person. All diplomas</p>
        <p className="mb-0">and transcripts simply say “Arizona State</p>
        <p>University.”</p>
      </div>
    </div>
  );
}

function DivCardBody() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[48px] pt-[23px] px-[24px] relative w-full">
        <H3MbSpaceSm />
        <P4 />
      </div>
    </div>
  );
}

function DivCol17() {
  return (
    <div className="content-stretch flex flex-col h-[237.59px] items-start pl-[5px] relative shrink-0 w-full" data-name="div.col-12">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-l-5 border-solid inset-0 pointer-events-none" />
      <DivCardBody />
    </div>
  );
}

function DivImageSideLeft() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.image-side-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <DivCol16 />
        <DivCol17 />
      </div>
    </div>
  );
}

function DivBorder() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-px relative shrink-0 w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-0 pointer-events-none" />
      <DivImageSideLeft />
    </div>
  );
}

function DivCol15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start pt-[32px] px-[15px] relative size-full">
        <DivBorder />
      </div>
    </div>
  );
}

function DivRow5() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center relative shrink-0 w-full" data-name="div.row">
      <DivCol15 />
    </div>
  );
}

function H2MbSpaceSm() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="h2.mb-space-sm">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[24px] tracking-[-0.84px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">Online accounting courses</p>
      </div>
    </div>
  );
}

function P5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">This program includes courses in computer</p>
        <p className="mb-0">information systems that have been designed</p>
        <p className="mb-0">specifically for accounting majors at ASU.</p>
        <p className="mb-0">You’ll use current e-business software to gain</p>
        <p className="mb-0">hands-on exposure to real-world business</p>
        <p className="mb-0">processes and strategies with an emphasis</p>
        <p>on team projects supervised by faculty.</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] w-full" href="https://degrees.apps.asu.edu/checksheet/2025/CBA/BAACCBS/null">
        <p className="cursor-pointer leading-[24px] whitespace-pre-wrap">View course curriculum</p>
      </a>
    </div>
  );
}

function DivMbSpaceMd() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.mb-space-md">
      <P5 />
      <Div2 />
    </div>
  );
}

function DivCol1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="div.col">
      <H2MbSpaceSm />
      <DivMbSpaceMd />
    </div>
  );
}

function DivRow6() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center min-h-[293.79998779296875px] relative shrink-0 w-full" data-name="div.row">
      <DivCol1 />
    </div>
  );
}

function HrTextDark1() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="hr.text-dark-3">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function DivCol2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <HrTextDark1 />
      </div>
    </div>
  );
}

function DivRow7() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center min-h-[33px] relative shrink-0 w-[356px]" data-name="div.row">
      <DivCol2 />
    </div>
  );
}

function DivPxSpaceXs() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.px-space-xs">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <DivRow6 />
          <DivRow7 />
        </div>
      </div>
    </div>
  );
}

function H3H3Medium() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full whitespace-pre-wrap">
        <p className="mb-0">WPC 148: First-Year Introduction to</p>
        <p>Career Development</p>
      </div>
    </div>
  );
}

function HrTitleUnderline() {
  return <div className="bg-[#ffc627] h-[4px] shrink-0 w-[30px]" data-name="hr.title-underline" />;
}

function DivPbSpaceXxs() {
  return (
    <div className="flex-[1_0_0] mb-[-0.01px] min-h-px min-w-px relative w-full" data-name="div.pb-space-xxs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.99px] items-start pb-[31.01px] pt-[14.795px] px-[16px] relative size-full">
        <H3H3Medium />
        <HrTitleUnderline />
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

function DivCtaIconBlock() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame2 />
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
            <p className="decoration-solid leading-[24px] underline">View course details</p>
          </div>
          <DivIconWrapper />
        </div>
      </div>
    </div>
  );
}

function DivBorderLight2() {
  return (
    <div className="mb-[-0.01px] relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails />
      </div>
    </div>
  );
}

function DivBorder1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px pb-[1.01px] pt-px px-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs />
      <DivBorderLight2 />
    </div>
  );
}

function DivColMargin() {
  return (
    <div className="h-[201.19px] relative shrink-0 w-full" data-name="div.col:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] px-[15px] relative size-full">
          <DivBorder1 />
        </div>
      </div>
    </div>
  );
}

function H3H3Medium1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full whitespace-pre-wrap">
        <p className="mb-0">WPC 248: Sophomore Career Narrative</p>
        <p>Design</p>
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[31px] pt-[14.8px] px-[16px] relative size-full">
        <H3H3Medium1 />
        <HrTitleUnderline1 />
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

function DivCtaIconBlock1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame3 />
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

function DivBorderLight3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails1 />
      </div>
    </div>
  );
}

function DivBorder2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px p-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs1 />
      <DivBorderLight3 />
    </div>
  );
}

function DivColMargin1() {
  return (
    <div className="h-[201.19px] relative shrink-0 w-full" data-name="div.col:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] px-[15px] relative size-full">
          <DivBorder2 />
        </div>
      </div>
    </div>
  );
}

function H3H3Medium2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full whitespace-pre-wrap">
        <p className="mb-0">WPC 348: Junior Networking</p>
        <p>Foundations</p>
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[31px] pt-[14.8px] px-[16px] relative size-full">
        <H3H3Medium2 />
        <HrTitleUnderline2 />
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

function DivCtaIconBlock2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame4 />
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

function DivBorderLight4() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails2 />
      </div>
    </div>
  );
}

function DivBorder3() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px p-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs2 />
      <DivBorderLight4 />
    </div>
  );
}

function DivColMargin2() {
  return (
    <div className="h-[201.19px] relative shrink-0 w-full" data-name="div.col:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] px-[15px] relative size-full">
          <DivBorder3 />
        </div>
      </div>
    </div>
  );
}

function H3H3Medium3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full whitespace-pre-wrap">
        <p className="mb-0">WPC 448: Senior Career Transition</p>
        <p>Management</p>
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

function DivCtaIconBlock3() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame5 />
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

function DivBorderLight5() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails3 />
      </div>
    </div>
  );
}

function DivBorder4() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px p-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs3 />
      <DivBorderLight5 />
    </div>
  );
}

function DivColMargin3() {
  return (
    <div className="h-[201.19px] relative shrink-0 w-full" data-name="div.col:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] px-[15px] relative size-full">
          <DivBorder4 />
        </div>
      </div>
    </div>
  );
}

function H3H3Medium4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full whitespace-pre-wrap">
        <p className="mb-0">WPC 300: Problem Solving and</p>
        <p>Actionable Analytics</p>
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

function DivCtaIconBlock4() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame6 />
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

function DivBorderLight6() {
  return (
    <div className="mb-[-0.01px] relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails4 />
      </div>
    </div>
  );
}

function DivBorder5() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px pb-[1.01px] pt-px px-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs4 />
      <DivBorderLight6 />
    </div>
  );
}

function DivColMargin4() {
  return (
    <div className="h-[201.19px] relative shrink-0 w-full" data-name="div.col:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] px-[15px] relative size-full">
          <DivBorder5 />
        </div>
      </div>
    </div>
  );
}

function H3H3Medium5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">WPC 480: W. P. Carey Capstone Course</p>
      </div>
    </div>
  );
}

function HrTitleUnderline5() {
  return <div className="bg-[#ffc627] h-[4px] shrink-0 w-[30px]" data-name="hr.title-underline" />;
}

function DivPbSpaceXxs5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.pb-space-xxs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16.01px] items-start pb-[30.99px] pt-[15px] px-[16px] relative size-full">
        <H3H3Medium5 />
        <HrTitleUnderline5 />
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

function DivCtaIconBlock5() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame7 />
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

function DivBorderLight7() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails5 />
      </div>
    </div>
  );
}

function DivBorder6() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start min-h-[68px] min-w-px p-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs5 />
      <DivBorderLight7 />
    </div>
  );
}

function DivColMargin5() {
  return (
    <div className="h-[179.59px] relative shrink-0 w-full" data-name="div.col:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] px-[15px] relative size-full">
          <DivBorder6 />
        </div>
      </div>
    </div>
  );
}

function H3H3Medium6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">FIN 300: Fundamentals of Finance</p>
      </div>
    </div>
  );
}

function HrTitleUnderline6() {
  return <div className="bg-[#ffc627] h-[4px] shrink-0 w-[30px]" data-name="hr.title-underline" />;
}

function DivPbSpaceXxs6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.pb-space-xxs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[31px] pt-[15px] px-[16px] relative size-full">
        <H3H3Medium6 />
        <HrTitleUnderline6 />
      </div>
    </div>
  );
}

function Frame8() {
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
      <Frame8 />
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

function DivBorderLight8() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails6 />
      </div>
    </div>
  );
}

function DivBorder7() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px p-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs6 />
      <DivBorderLight8 />
    </div>
  );
}

function DivColMargin6() {
  return (
    <div className="h-[179.59px] relative shrink-0 w-full" data-name="div.col:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] px-[15px] relative size-full">
          <DivBorder7 />
        </div>
      </div>
    </div>
  );
}

function H3H3Medium7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full whitespace-pre-wrap">
        <p className="mb-0">LES 305: Business Law and Ethics for</p>
        <p>Managers</p>
      </div>
    </div>
  );
}

function HrTitleUnderline7() {
  return <div className="bg-[#ffc627] h-[4px] shrink-0 w-[30px]" data-name="hr.title-underline" />;
}

function DivPbSpaceXxs7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.pb-space-xxs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[31px] pt-[14.8px] px-[16px] relative size-full">
        <H3H3Medium7 />
        <HrTitleUnderline7 />
      </div>
    </div>
  );
}

function Frame9() {
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
      <Frame9 />
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

function DivBorderLight9() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails7 />
      </div>
    </div>
  );
}

function DivBorder8() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px p-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs7 />
      <DivBorderLight9 />
    </div>
  );
}

function DivColMargin7() {
  return (
    <div className="h-[201.19px] relative shrink-0 w-full" data-name="div.col:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] px-[15px] relative size-full">
          <DivBorder8 />
        </div>
      </div>
    </div>
  );
}

function DivRow8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[388px]" data-name="div.row">
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

function ButtonBtn2() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[9.39px] pt-[8px] px-[17px] relative rounded-[804px] shrink-0" data-name="button.btn">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[804px]" />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] text-center whitespace-nowrap">
        <p className="decoration-solid leading-[22.4px] underline">Show more</p>
      </div>
    </div>
  );
}

function DivTextCenter1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.text-center">
      <ButtonBtn2 />
    </div>
  );
}

function DivCol3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <DivTextCenter1 />
      </div>
    </div>
  );
}

function DivRow9() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center pt-[16px] relative shrink-0 w-[388px]" data-name="div.row">
      <DivCol3 />
    </div>
  );
}

function DivContainer() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.container">
      <DivPxSpaceXs />
      <DivRow8 />
      <DivRow9 />
    </div>
  );
}

function SectionProgramCourses() {
  return (
    <div className="bg-size-[450px_451px] bg-top-left relative shrink-0 w-full" data-name="section#program-courses" style={{ backgroundImage: `url('${imgSectionProgramCourses}')` }}>
      <div className="content-stretch flex flex-col items-start pb-[32px] pt-[31px] px-[16px] relative w-full">
        <DivContainer />
      </div>
    </div>
  );
}

function DivRow10() {
  return (
    <div className="absolute content-start flex flex-wrap gap-0 items-start justify-center left-0 right-0 top-0" data-name="div.row">
      <div className="flex-[1_0_0] h-[245px] min-h-px min-w-px relative" data-name="div.col">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-1.3%] max-w-none top-0 w-[102.59%]" src={imgDivCol} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[245px] left-0 to-white top-0 via-[80%] via-[rgba(255,255,255,0.63)] w-[390px]" data-name="div.w-100" />
    </div>
  );
}

function H2PositionRelative() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] pt-[32px] relative shrink-0 w-full" data-name="h2.position-relative">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[28.8px] not-italic relative shrink-0 text-[#191919] text-[24px] tracking-[-0.84px] w-full whitespace-pre-wrap">
        <p className="mb-0">The jobs you could get with an</p>
        <p>accounting degree</p>
      </div>
    </div>
  );
}

function DivCol18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <H2PositionRelative />
      </div>
    </div>
  );
}

function DivRow11() {
  return (
    <div className="absolute content-stretch flex flex-wrap items-start justify-center left-0 right-0 top-[245px]" data-name="div.row">
      <DivCol18 />
    </div>
  );
}

function P6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.65px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[22.4px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Accounting is a dynamic field that offers you</p>
        <p className="mb-0">diverse opportunities in the private sector and</p>
        <p className="mb-0">{` government agencies worldwide. Graduates with`}</p>
        <p className="mb-0">a bachelor’s in accounting can expect to find</p>
        <p className="mb-0">professional careers in public, corporate and</p>
        <p className="mb-0">governmental accounting or personal financial</p>
        <p className="mb-0">planning and portfolio analysis. They may also</p>
        <p className="mb-0">pursue bookkeeping and tax preparation,</p>
        <p className="mb-0">consulting or entrepreneurial endeavors. Career</p>
        <p>examples include, but aren’t limited to:</p>
      </div>
    </div>
  );
}

function DivCol19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <P6 />
      </div>
    </div>
  );
}

function DivRow12() {
  return (
    <div className="absolute content-stretch flex flex-wrap items-start justify-center left-0 min-h-[272.6499938964844px] right-0 top-[357.85px]" data-name="div.row">
      <DivCol19 />
    </div>
  );
}

function H3H3Small() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-small">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] tracking-[-0.4px] w-full">
        <p className="leading-[19.2px] whitespace-pre-wrap">Accountant/Auditor</p>
      </div>
    </div>
  );
}

function HrCardDegreeTextUnderline() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[45.36px]" data-name="hr.card-degree-text-underline" />;
}

function Frame10() {
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
    <div className="h-[23.8px] relative shrink-0 w-[88.02px]" data-name="div.fs-xs:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[80.343px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">4.6 %</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex5() {
  return (
    <div className="content-stretch flex items-start mb-[-0.01px] relative shrink-0 w-full" data-name="div.d-flex">
      <Frame10 />
      <DivFsXsMargin />
    </div>
  );
}

function Frame11() {
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

function Frame12() {
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
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">$81,680</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex6() {
  return (
    <div className="content-stretch flex items-start mb-[-0.01px] relative shrink-0 w-full" data-name="div.d-flex">
      <Frame11 />
      <Frame12 />
      <DivFsXsMargin1 />
    </div>
  );
}

function DivMbSpaceXxs() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.01px] pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex5 />
      <DivDFlex6 />
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
    <div className="bg-white flex-[1_0_0] min-h-[135px] min-w-px relative w-full" data-name="div.card-degree-text">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[23px] pt-[17px] px-[17px] relative size-full">
        <DivCardDegreeTextBody />
      </div>
    </div>
  );
}

function DivCol12Margin() {
  return (
    <div className="h-[179.78px] relative shrink-0 w-full" data-name="div.col-12:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] px-[16px] relative size-full">
          <DivCardDegreeText />
        </div>
      </div>
    </div>
  );
}

function H3H3Small1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-small">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] tracking-[-0.4px] w-full">
        <p className="leading-[19.2px] whitespace-pre-wrap">Banking Examiner</p>
      </div>
    </div>
  );
}

function HrCardDegreeTextUnderline1() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[45.36px]" data-name="hr.card-degree-text-underline" />;
}

function Frame13() {
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

function DivFsXsMargin2() {
  return (
    <div className="h-[23.8px] relative shrink-0 w-[94.69px]" data-name="div.fs-xs:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[87.024px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">18.5 %</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame13 />
      <DivFsXsMargin2 />
    </div>
  );
}

function Frame14() {
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

function Frame15() {
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

function DivFsXsMargin3() {
  return (
    <div className="h-[23.8px] relative shrink-0 w-[94.75px]" data-name="div.fs-xs:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[87.084px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">$90,400</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame14 />
      <Frame15 />
      <DivFsXsMargin3 />
    </div>
  );
}

function DivMbSpaceXxs1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex7 />
      <DivDFlex8 />
    </div>
  );
}

function DivCardDegreeTextBody1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-degree-text-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <H3H3Small1 />
        <HrCardDegreeTextUnderline1 />
        <DivMbSpaceXxs1 />
      </div>
    </div>
  );
}

function DivCardDegreeText1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[135px] min-w-px relative w-full" data-name="div.card-degree-text">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[23px] pt-[17px] px-[17px] relative size-full">
        <DivCardDegreeTextBody1 />
      </div>
    </div>
  );
}

function DivCol12Margin1() {
  return (
    <div className="h-[179.78px] relative shrink-0 w-full" data-name="div.col-12:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] px-[16px] relative size-full">
          <DivCardDegreeText1 />
        </div>
      </div>
    </div>
  );
}

function H3H3Small2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-small">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] tracking-[-0.4px] w-full">
        <p className="leading-[19.2px] whitespace-pre-wrap">Budget Analyst</p>
      </div>
    </div>
  );
}

function HrCardDegreeTextUnderline2() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[45.36px]" data-name="hr.card-degree-text-underline" />;
}

function Frame16() {
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

function DivFsXsMargin4() {
  return (
    <div className="h-[23.8px] relative shrink-0 w-[88.02px]" data-name="div.fs-xs:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[80.343px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">1.0 %</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame16 />
      <DivFsXsMargin4 />
    </div>
  );
}

function Frame17() {
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

function Frame18() {
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

function DivFsXsMargin5() {
  return (
    <div className="h-[23.8px] relative shrink-0 w-[94.75px]" data-name="div.fs-xs:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[87.084px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">$87,930</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame17 />
      <Frame18 />
      <DivFsXsMargin5 />
    </div>
  );
}

function DivMbSpaceXxs2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex9 />
      <DivDFlex10 />
    </div>
  );
}

function DivCardDegreeTextBody2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-degree-text-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <H3H3Small2 />
        <HrCardDegreeTextUnderline2 />
        <DivMbSpaceXxs2 />
      </div>
    </div>
  );
}

function DivCardDegreeText2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[135px] min-w-px relative w-full" data-name="div.card-degree-text">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[23px] pt-[17px] px-[17px] relative size-full">
        <DivCardDegreeTextBody2 />
      </div>
    </div>
  );
}

function DivCol12Margin2() {
  return (
    <div className="h-[179.78px] relative shrink-0 w-full" data-name="div.col-12:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] px-[16px] relative size-full">
          <DivCardDegreeText2 />
        </div>
      </div>
    </div>
  );
}

function H3H3Small3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-small">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] tracking-[-0.4px] w-full">
        <p className="leading-[19.2px] whitespace-pre-wrap">Certified Financial Planner (CFP)</p>
      </div>
    </div>
  );
}

function HrCardDegreeTextUnderline3() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[45.36px]" data-name="hr.card-degree-text-underline" />;
}

function Frame19() {
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

function DivFsXsMargin6() {
  return (
    <div className="h-[23.8px] relative shrink-0 w-[88.02px]" data-name="div.fs-xs:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[80.343px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">9.6 %</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame19 />
      <DivFsXsMargin6 />
    </div>
  );
}

function Frame20() {
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

function Frame21() {
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

function DivFsXsMargin7() {
  return (
    <div className="h-[23.8px] relative shrink-0 w-[101.42px]" data-name="div.fs-xs:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[93.764px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">$102,140</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame20 />
      <Frame21 />
      <DivFsXsMargin7 />
    </div>
  );
}

function DivMbSpaceXxs3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex11 />
      <DivDFlex12 />
    </div>
  );
}

function DivCardDegreeTextBody3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-degree-text-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <H3H3Small3 />
        <HrCardDegreeTextUnderline3 />
        <DivMbSpaceXxs3 />
      </div>
    </div>
  );
}

function DivCardDegreeText3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[135px] min-w-px relative w-full" data-name="div.card-degree-text">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[23px] pt-[17px] px-[17px] relative size-full">
        <DivCardDegreeTextBody3 />
      </div>
    </div>
  );
}

function DivCol12Margin3() {
  return (
    <div className="h-[179.78px] relative shrink-0 w-full" data-name="div.col-12:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] px-[16px] relative size-full">
          <DivCardDegreeText3 />
        </div>
      </div>
    </div>
  );
}

function H3H3Small4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-small">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] tracking-[-0.4px] w-full">
        <p className="leading-[19.2px] whitespace-pre-wrap">Cost Estimator</p>
      </div>
    </div>
  );
}

function HrCardDegreeTextUnderline4() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[45.36px]" data-name="hr.card-degree-text-underline" />;
}

function Frame22() {
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

function DivFsXsMargin8() {
  return (
    <div className="h-[23.8px] relative shrink-0 w-[92.02px]" data-name="div.fs-xs:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[84.35px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">-4.2 %</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame22 />
      <DivFsXsMargin8 />
    </div>
  );
}

function Frame23() {
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

function Frame24() {
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

function DivFsXsMargin9() {
  return (
    <div className="h-[23.8px] relative shrink-0 w-[94.75px]" data-name="div.fs-xs:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[87.084px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">$77,070</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame23 />
      <Frame24 />
      <DivFsXsMargin9 />
    </div>
  );
}

function DivMbSpaceXxs4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex13 />
      <DivDFlex14 />
    </div>
  );
}

function DivCardDegreeTextBody4() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-degree-text-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <H3H3Small4 />
        <HrCardDegreeTextUnderline4 />
        <DivMbSpaceXxs4 />
      </div>
    </div>
  );
}

function DivCardDegreeText4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[135px] min-w-px relative w-full" data-name="div.card-degree-text">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[23px] pt-[17px] px-[17px] relative size-full">
        <DivCardDegreeTextBody4 />
      </div>
    </div>
  );
}

function DivCol12Margin4() {
  return (
    <div className="h-[179.78px] relative shrink-0 w-full" data-name="div.col-12:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] px-[16px] relative size-full">
          <DivCardDegreeText4 />
        </div>
      </div>
    </div>
  );
}

function H3H3Small5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-small">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] tracking-[-0.4px] w-full">
        <p className="leading-[19.2px] whitespace-pre-wrap">Financial Analyst</p>
      </div>
    </div>
  );
}

function HrCardDegreeTextUnderline5() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[45.36px]" data-name="hr.card-degree-text-underline" />;
}

function Frame25() {
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

function DivFsXsMargin10() {
  return (
    <div className="h-[23.8px] relative shrink-0 w-[88.02px]" data-name="div.fs-xs:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[80.343px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">5.7 %</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame25 />
      <DivFsXsMargin10 />
    </div>
  );
}

function Frame26() {
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

function Frame27() {
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

function DivFsXsMargin11() {
  return (
    <div className="h-[23.8px] relative shrink-0 w-[101.42px]" data-name="div.fs-xs:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[93.764px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">$101,350</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame26 />
      <Frame27 />
      <DivFsXsMargin11 />
    </div>
  );
}

function DivMbSpaceXxs5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex15 />
      <DivDFlex16 />
    </div>
  );
}

function DivCardDegreeTextBody5() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-degree-text-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <H3H3Small5 />
        <HrCardDegreeTextUnderline5 />
        <DivMbSpaceXxs5 />
      </div>
    </div>
  );
}

function DivCardDegreeText5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[135px] min-w-px relative w-full" data-name="div.card-degree-text">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[23px] pt-[17px] px-[17px] relative size-full">
        <DivCardDegreeTextBody5 />
      </div>
    </div>
  );
}

function DivCol12Margin5() {
  return (
    <div className="h-[179.78px] relative shrink-0 w-full" data-name="div.col-12:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] px-[16px] relative size-full">
          <DivCardDegreeText5 />
        </div>
      </div>
    </div>
  );
}

function H3H3Small6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-small">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] tracking-[-0.4px] w-full">
        <p className="leading-[19.2px] whitespace-pre-wrap">Financial Manager</p>
      </div>
    </div>
  );
}

function HrCardDegreeTextUnderline6() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[45.36px]" data-name="hr.card-degree-text-underline" />;
}

function Frame28() {
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

function DivFsXsMargin12() {
  return (
    <div className="h-[23.8px] relative shrink-0 w-[94.69px]" data-name="div.fs-xs:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[87.024px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">14.8 %</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame28 />
      <DivFsXsMargin12 />
    </div>
  );
}

function Frame29() {
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

function Frame30() {
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

function DivFsXsMargin13() {
  return (
    <div className="h-[23.8px] relative shrink-0 w-[101.42px]" data-name="div.fs-xs:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[93.764px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">$161,700</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame29 />
      <Frame30 />
      <DivFsXsMargin13 />
    </div>
  );
}

function DivMbSpaceXxs6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex17 />
      <DivDFlex18 />
    </div>
  );
}

function DivCardDegreeTextBody6() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-degree-text-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <H3H3Small6 />
        <HrCardDegreeTextUnderline6 />
        <DivMbSpaceXxs6 />
      </div>
    </div>
  );
}

function DivCardDegreeText6() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[135px] min-w-px relative w-full" data-name="div.card-degree-text">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[23px] pt-[17px] px-[17px] relative size-full">
        <DivCardDegreeTextBody6 />
      </div>
    </div>
  );
}

function DivCol12Margin6() {
  return (
    <div className="h-[179.78px] relative shrink-0 w-full" data-name="div.col-12:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] px-[16px] relative size-full">
          <DivCardDegreeText6 />
        </div>
      </div>
    </div>
  );
}

function H3H3Small7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-small">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] tracking-[-0.4px] w-full">
        <p className="leading-[19.2px] whitespace-pre-wrap">Intelligence Officer</p>
      </div>
    </div>
  );
}

function HrCardDegreeTextUnderline7() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[45.36px]" data-name="hr.card-degree-text-underline" />;
}

function Frame31() {
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

function DivFsXsMargin14() {
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

function DivDFlex19() {
  return (
    <div className="content-stretch flex items-start mb-[-0.01px] relative shrink-0 w-full" data-name="div.d-flex">
      <Frame31 />
      <DivFsXsMargin14 />
    </div>
  );
}

function Frame32() {
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

function Frame33() {
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

function DivFsXsMargin15() {
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

function DivDFlex20() {
  return (
    <div className="content-stretch flex items-start mb-[-0.01px] relative shrink-0 w-full" data-name="div.d-flex">
      <Frame32 />
      <Frame33 />
      <DivFsXsMargin15 />
    </div>
  );
}

function DivMbSpaceXxs7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.01px] pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex19 />
      <DivDFlex20 />
    </div>
  );
}

function DivCardDegreeTextBody7() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-degree-text-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <H3H3Small7 />
        <HrCardDegreeTextUnderline7 />
        <DivMbSpaceXxs7 />
      </div>
    </div>
  );
}

function DivCardDegreeText7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[135px] min-w-px relative w-full" data-name="div.card-degree-text">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[23px] pt-[17px] px-[17px] relative size-full">
        <DivCardDegreeTextBody7 />
      </div>
    </div>
  );
}

function DivCol12Margin7() {
  return (
    <div className="h-[179.78px] relative shrink-0 w-full" data-name="div.col-12:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] px-[16px] relative size-full">
          <DivCardDegreeText7 />
        </div>
      </div>
    </div>
  );
}

function DivRow14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="div.row">
      <DivCol12Margin />
      <DivCol12Margin1 />
      <DivCol12Margin2 />
      <DivCol12Margin3 />
      <DivCol12Margin4 />
      <DivCol12Margin5 />
      <DivCol12Margin6 />
      <DivCol12Margin7 />
    </div>
  );
}

function DivCol20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <DivRow14 />
    </div>
  );
}

function DivRow13() {
  return (
    <div className="absolute content-stretch flex flex-wrap items-start justify-center left-0 right-0 top-[630.5px]" data-name="div.row">
      <DivCol20 />
    </div>
  );
}

function DivContainerLg() {
  return (
    <div className="h-[2068.75px] relative shrink-0 w-full" data-name="div.container-lg">
      <DivRow10 />
      <DivRow11 />
      <DivRow12 />
      <DivRow13 />
    </div>
  );
}

function SectionProgramCareers() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="section#program-careers">
      <DivContainerLg />
    </div>
  );
}

function H3MbSpaceSm1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="h3.mb-space-sm">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">Study with professional accountants</p>
      </div>
    </div>
  );
}

function P7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">The W. P. Carey School of Business</p>
        <p className="mb-0">faculty is passionate about innovative</p>
        <p className="mb-0">research and impact. Our school fosters</p>
        <p className="mb-0">an environment of global thinking, with a</p>
        <p className="mb-0">cohort of award-winning faculty from six</p>
        <p className="mb-0">continents around the globe and a student</p>
        <p className="mb-0">body that represents more than 100</p>
        <p>countries. Faculty accolades include:</p>
      </div>
    </div>
  );
}

function Li1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="li">
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center leading-[0] left-0 top-[12px] w-[7.35px]">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[24px] whitespace-pre-wrap">
            <span className="leading-[24px]">{` `}</span>
          </li>
        </ul>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[48px] justify-center leading-[24px] left-0 top-[23.5px] w-[216.33px] whitespace-pre-wrap">
        <p className="mb-0">National Academy of Sciences</p>
        <p>members</p>
      </div>
    </div>
  );
}

function Li2() {
  return (
    <div className="content-stretch flex flex-col isolate items-start leading-[0] pb-[23.5px] relative shrink-0 w-full whitespace-nowrap" data-name="li">
      <div className="flex flex-col justify-center mb-[-23.5px] relative shrink-0 z-[2]">
        <p className="leading-[24px]">Renowned journal publications</p>
      </div>
      <div className="flex flex-col justify-center mb-[-23.5px] relative shrink-0 z-[1]">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[24px] whitespace-pre-wrap">
            <span className="leading-[24px]">&nbsp;</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Li3() {
  return (
    <div className="content-stretch flex flex-col isolate items-start leading-[0] pb-[23.5px] relative shrink-0 w-full whitespace-nowrap" data-name="li">
      <div className="flex flex-col justify-center mb-[-23.5px] relative shrink-0 z-[2]">
        <p className="leading-[24px]">Speakers at national conferences</p>
      </div>
      <div className="flex flex-col justify-center mb-[-23.5px] relative shrink-0 z-[1]">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[24px] whitespace-pre-wrap">
            <span className="leading-[24px]">&nbsp;</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Ul() {
  return (
    <div className="relative shrink-0 w-full" data-name="ul">
      <div className="content-stretch flex flex-col font-['Arial:Regular',sans-serif] items-start not-italic pl-[32px] relative text-[#191919] text-[16px] w-full">
        <Li1 />
        <Li2 />
        <Li3 />
      </div>
    </div>
  );
}

function DivMbSpaceSm() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.mb-space-sm">
      <P7 />
      <Ul />
    </div>
  );
}

function DivCardBody1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[48px] pt-[23px] px-[24px] relative w-full">
        <H3MbSpaceSm1 />
        <DivMbSpaceSm />
      </div>
    </div>
  );
}

function DivCol21() {
  return (
    <div className="content-stretch flex flex-col h-[421.59px] items-start pl-[5px] relative shrink-0 w-full z-[1]" data-name="div.col-12">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-l-5 border-solid inset-0 pointer-events-none" />
      <DivCardBody1 />
    </div>
  );
}

function DivImageSideLeft1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.image-side-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col isolate items-start relative w-full">
        <div className="h-[360px] relative shrink-0 w-full z-[2]" data-name="div.col-12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[103.22%] left-0 max-w-none top-0 w-full" src={imgDivCol12} />
          </div>
        </div>
        <DivCol21 />
      </div>
    </div>
  );
}

function DivBorder9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-px relative shrink-0 w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivImageSideLeft1 />
    </div>
  );
}

function H2H2Medium1() {
  return (
    <div className="relative shrink-0 w-full" data-name="h2.h2-medium">
      <div className="content-stretch flex flex-col items-start pb-[0.8px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[24px] tracking-[-0.84px] w-full">
          <p className="leading-[28.8px] whitespace-pre-wrap">How to apply</p>
        </div>
      </div>
    </div>
  );
}

function DivCol4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <H2H2Medium1 />
      </div>
    </div>
  );
}

function DivRow15() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center min-h-[61.79999923706055px] relative shrink-0 w-full" data-name="div.row">
      <DivCol4 />
    </div>
  );
}

function H3H3Small8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="h3.h3-small">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[19.2px]">General admission requirements</p>
      </div>
    </div>
  );
}

function DivCollapseTitle() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="div.collapse-title">
      <H3H3Small8 />
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivCollapseTitle />
    </div>
  );
}

function Frame34() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0014 18.2812">
        <g id="Frame">
          <path d={svgPaths.p38bcf200} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivTextDark() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[16px]" data-name="div.text-dark-3">
      <Frame34 />
    </div>
  );
}

function DivTextDark3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0 w-[32px]" data-name="div.text-dark-3:margin">
      <DivTextDark />
    </div>
  );
}

function DivCollapseLabelContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.collapse-label-container">
      <Div3 />
      <DivTextDark3Margin />
    </div>
  );
}

function ButtonAccordion0AdmissionRequirements() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="button#accordion0admission-requirements-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative w-full">
        <DivCollapseLabelContainer />
      </div>
    </div>
  );
}

function DivBorderLight() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="div.border-light-2">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-px py-px relative w-full">
        <ButtonAccordion0AdmissionRequirements />
      </div>
    </div>
  );
}

function DivCollapseWrapper() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pl-[8px] relative shrink-0 w-full" data-name="div.collapse-wrapper">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-l-8 border-solid inset-0 pointer-events-none" />
      <DivBorderLight />
    </div>
  );
}

function H3H3Small9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="h3.h3-small">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[19.2px]">First year additional requirements</p>
      </div>
    </div>
  );
}

function DivCollapseTitle1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="div.collapse-title">
      <H3H3Small9 />
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivCollapseTitle1 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0014 18.2812">
        <g id="Frame">
          <path d={svgPaths.p38bcf200} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivTextDark1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[16px]" data-name="div.text-dark-3">
      <Frame35 />
    </div>
  );
}

function DivTextDark3Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0 w-[32px]" data-name="div.text-dark-3:margin">
      <DivTextDark1 />
    </div>
  );
}

function DivCollapseLabelContainer1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.collapse-label-container">
      <Div4 />
      <DivTextDark3Margin1 />
    </div>
  );
}

function ButtonAccordion0AdmissionRequirements1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="button#accordion0admission-requirements-1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative w-full">
        <DivCollapseLabelContainer1 />
      </div>
    </div>
  );
}

function DivBorderLight1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="div.border-light-2">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-px py-px relative w-full">
        <ButtonAccordion0AdmissionRequirements1 />
      </div>
    </div>
  );
}

function DivCollapseWrapper1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pl-[8px] relative shrink-0 w-full" data-name="div.collapse-wrapper">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-l-8 border-solid inset-0 pointer-events-none" />
      <DivBorderLight1 />
    </div>
  );
}

function H3H3Small10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="h3.h3-small">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[19.2px]">Transfer additional requirements</p>
      </div>
    </div>
  );
}

function DivCollapseTitle2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="div.collapse-title">
      <H3H3Small10 />
    </div>
  );
}

function Div5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivCollapseTitle2 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0014 18.2812">
        <g id="Frame">
          <path d={svgPaths.p38bcf200} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivTextDark2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[16px]" data-name="div.text-dark-3">
      <Frame36 />
    </div>
  );
}

function DivTextDark3Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0 w-[32px]" data-name="div.text-dark-3:margin">
      <DivTextDark2 />
    </div>
  );
}

function DivCollapseLabelContainer2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.collapse-label-container">
      <Div5 />
      <DivTextDark3Margin2 />
    </div>
  );
}

function ButtonAccordion0AdmissionRequirements2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="button#accordion0admission-requirements-2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative w-full">
        <DivCollapseLabelContainer2 />
      </div>
    </div>
  );
}

function DivBorderLight10() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="div.border-light-2">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-px py-px relative w-full">
        <ButtonAccordion0AdmissionRequirements2 />
      </div>
    </div>
  );
}

function DivCollapseWrapper2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pl-[8px] relative shrink-0 w-full" data-name="div.collapse-wrapper">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-l-8 border-solid inset-0 pointer-events-none" />
      <DivBorderLight10 />
    </div>
  );
}

function H3H3Small11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="h3.h3-small">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[19.2px]">Considering honors?</p>
      </div>
    </div>
  );
}

function DivCollapseTitle3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="div.collapse-title">
      <H3H3Small11 />
    </div>
  );
}

function Div6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivCollapseTitle3 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0014 18.2812">
        <g id="Frame">
          <path d={svgPaths.p38bcf200} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivTextDark3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[16px]" data-name="div.text-dark-3">
      <Frame37 />
    </div>
  );
}

function DivTextDark3Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0 w-[32px]" data-name="div.text-dark-3:margin">
      <DivTextDark3 />
    </div>
  );
}

function DivCollapseLabelContainer3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.collapse-label-container">
      <Div6 />
      <DivTextDark3Margin3 />
    </div>
  );
}

function ButtonAccordion0AdmissionRequirements3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="button#accordion0admission-requirements-3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative w-full">
        <DivCollapseLabelContainer3 />
      </div>
    </div>
  );
}

function DivBorderLight11() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="div.border-light-2">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-px py-px relative w-full">
        <ButtonAccordion0AdmissionRequirements3 />
      </div>
    </div>
  );
}

function DivCollapseWrapper3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pl-[8px] relative shrink-0 w-full" data-name="div.collapse-wrapper">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-l-8 border-solid inset-0 pointer-events-none" />
      <DivBorderLight11 />
    </div>
  );
}

function DivCol5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[15px] relative size-full">
        <DivCollapseWrapper />
        <DivCollapseWrapper1 />
        <DivCollapseWrapper2 />
        <DivCollapseWrapper3 />
      </div>
    </div>
  );
}

function DivRow16() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center min-h-[276.75px] relative shrink-0 w-full" data-name="div.row">
      <DivCol5 />
    </div>
  );
}

function DivContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.container">
      <DivRow15 />
      <DivRow16 />
    </div>
  );
}

function DivPtSpaceMd() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[24px] pt-[31px] relative shrink-0 w-full" data-name="div.pt-space-md">
      <DivContainer1 />
    </div>
  );
}

function H2MbSpaceSm1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="h2.mb-space-sm">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.63px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">{`Don't meet admission requirements?`}</p>
      </div>
    </div>
  );
}

function P8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">You can still gain general admission to</p>
        <p className="mb-0">most online programs at ASU through</p>
        <p className="mb-0">Earned Admission. Through this pathway,</p>
        <p className="mb-0">you can demonstrate your ability to</p>
        <p className="mb-0">succeed at ASU by completing online</p>
        <p>courses with a 2.75 GPA or higher.</p>
      </div>
    </div>
  );
}

function P9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">To begin, submit an application to ASU.</p>
        <p className="mb-0">An enrollment coach will reach out with</p>
        <p className="mb-0">more information if Earned Admission is</p>
        <p>right for you.</p>
      </div>
    </div>
  );
}

function P10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">*Some programs may have higher</p>
        <p className="mb-0">admission requirements. You must meet</p>
        <p>all program requirements to be admitted.</p>
      </div>
    </div>
  );
}

function DivMbSpaceSm1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.mb-space-sm">
      <P8 />
      <P9 />
      <P10 />
    </div>
  );
}

function DivCardBody2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[48px] pt-[23px] px-[24px] relative w-full">
        <H2MbSpaceSm1 />
        <DivMbSpaceSm1 />
      </div>
    </div>
  );
}

function DivCol22() {
  return (
    <div className="content-stretch flex flex-col h-[461.59px] items-start pl-[8px] relative shrink-0 w-full z-[1]" data-name="div.col-12">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-l-8 border-solid inset-0 pointer-events-none" />
      <DivCardBody2 />
    </div>
  );
}

function DivImageSideLeft2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.image-side-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col isolate items-start relative w-full">
        <div className="h-[360px] relative shrink-0 w-full z-[2]" data-name="div.col-12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-30.81%] max-w-none top-0 w-[161.61%]" src={imgDivCol13} />
          </div>
        </div>
        <DivCol22 />
      </div>
    </div>
  );
}

function DivBorder10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-px relative shrink-0 w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivImageSideLeft2 />
    </div>
  );
}

function DivRow17() {
  return (
    <div className="absolute content-start flex flex-wrap gap-0 items-start justify-center left-0 right-0 top-0" data-name="div.row">
      <div className="flex-[1_0_0] h-[245px] min-h-px min-w-px relative" data-name="div.col">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-1.43%] max-w-none top-0 w-[102.86%]" src={imgDivCol1} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[245px] left-0 to-white top-0 via-[80%] via-[rgba(255,255,255,0.63)] w-[390px]" data-name="div.w-100" />
    </div>
  );
}

function H2PositionRelative1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24.59px] pt-[30.8px] relative shrink-0 w-full" data-name="h2.position-relative">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[28.8px] not-italic relative shrink-0 text-[#191919] text-[24px] tracking-[-0.84px] w-full whitespace-pre-wrap">
        <p className="mb-0">Become a part of one of the</p>
        <p className="mb-0">best business schools in the</p>
        <p>nation</p>
      </div>
    </div>
  );
}

function DivCol23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[31px] relative size-full">
        <H2PositionRelative1 />
      </div>
    </div>
  );
}

function DivRow18() {
  return (
    <div className="absolute content-stretch flex flex-wrap items-start justify-center left-0 right-0 top-[245px]" data-name="div.row">
      <DivCol23 />
    </div>
  );
}

function P11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">The W. P. Carey School of Business is one of</p>
        <p className="mb-0">the top business schools in the country. Our</p>
        <p className="mb-0">AACSB-accredited business school is</p>
        <p className="mb-0">committed to delivering excellent quality and</p>
        <p className="mb-0">{`value. Our U.S. News & World Report`}</p>
        <p className="mb-0">rankings reflect our commitment to</p>
        <p className="mb-0">academics, groundbreaking research and</p>
        <p>positive student outcomes.</p>
      </div>
    </div>
  );
}

function DivCol24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[31px] relative size-full">
        <P11 />
      </div>
    </div>
  );
}

function DivRow19() {
  return (
    <div className="absolute content-stretch flex flex-wrap items-start justify-center left-0 min-h-[224px] right-0 top-[387.39px]" data-name="div.row">
      <DivCol24 />
    </div>
  );
}

function H3H2Medium() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8.8px] relative shrink-0 w-full" data-name="h3.h2-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">#2</p>
      </div>
    </div>
  );
}

function HrBgSecondary() {
  return <div className="bg-[#ffc627] h-[3px] shrink-0 w-[39.36px]" data-name="hr.bg-secondary" />;
}

function P12() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">{`best online bachelor's in business programs`}</p>
      </div>
    </div>
  );
}

function DivPxSpaceXs1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.px-space-xs">
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[40px] px-[16px] relative w-full">
        <H3H2Medium />
        <HrBgSecondary />
        <P12 />
      </div>
    </div>
  );
}

function DivCol25() {
  return (
    <div className="h-[125.8px] mb-[-1px] relative shrink-0 w-full" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <DivPxSpaceXs1 />
      </div>
    </div>
  );
}

function H3H2Medium1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8.8px] relative shrink-0 w-full" data-name="h3.h2-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">#4</p>
      </div>
    </div>
  );
}

function HrBgSecondary1() {
  return <div className="bg-[#ffc627] h-[3px] shrink-0 w-[39.36px]" data-name="hr.bg-secondary" />;
}

function P13() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`best online master's in business programs`}</p>
        <p>(excluding MBA)</p>
      </div>
    </div>
  );
}

function DivPxSpaceXs2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.px-space-xs">
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[40px] px-[16px] relative w-full">
        <H3H2Medium1 />
        <HrBgSecondary1 />
        <P13 />
      </div>
    </div>
  );
}

function DivCol26() {
  return (
    <div className="h-[149.8px] mb-[-1px] relative shrink-0 w-full" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <DivPxSpaceXs2 />
      </div>
    </div>
  );
}

function H3H2Medium2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8.8px] relative shrink-0 w-full" data-name="h3.h2-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">#4</p>
      </div>
    </div>
  );
}

function HrBgSecondary2() {
  return <div className="bg-[#ffc627] h-[3px] shrink-0 w-[39.36px]" data-name="hr.bg-secondary" />;
}

function P14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">best online general management MBA</p>
        <p>programs</p>
      </div>
    </div>
  );
}

function DivPxSpaceXs3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.px-space-xs">
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[40px] px-[16px] relative w-full">
        <H3H2Medium2 />
        <HrBgSecondary2 />
        <P14 />
      </div>
    </div>
  );
}

function DivCol27() {
  return (
    <div className="h-[149.8px] mb-[-1px] relative shrink-0 w-full" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <DivPxSpaceXs3 />
      </div>
    </div>
  );
}

function H3H2Medium3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8.8px] relative shrink-0 w-full" data-name="h3.h2-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">#4</p>
      </div>
    </div>
  );
}

function HrBgSecondary3() {
  return <div className="bg-[#ffc627] h-[3px] shrink-0 w-[39.36px]" data-name="hr.bg-secondary" />;
}

function P15() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">best online business analytics MBA programs</p>
      </div>
    </div>
  );
}

function DivPxSpaceXs4() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.px-space-xs">
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[40.01px] px-[16px] relative w-full">
        <H3H2Medium3 />
        <HrBgSecondary3 />
        <P15 />
      </div>
    </div>
  );
}

function DivCol28() {
  return (
    <div className="h-[125.8px] mb-[-1px] relative shrink-0 w-full" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <DivPxSpaceXs4 />
      </div>
    </div>
  );
}

function DivRow20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 pb-px right-0 top-[610.39px]" data-name="div.row">
      <DivCol25 />
      <DivCol26 />
      <DivCol27 />
      <DivCol28 />
    </div>
  );
}

function ButtonBtn3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[17px] py-[9px] relative rounded-[804px] shrink-0" data-name="button.btn">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[804px]" />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] text-center whitespace-nowrap">
        <p className="decoration-solid leading-[24px] underline">Show more</p>
      </div>
    </div>
  );
}

function DivTextCenter2() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[48px] relative shrink-0 w-full" data-name="div.text-center">
      <ButtonBtn3 />
    </div>
  );
}

function DivCol29() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <DivTextCenter2 />
      </div>
    </div>
  );
}

function DivRow21() {
  return (
    <div className="absolute content-stretch flex flex-wrap items-start justify-center left-0 right-0 top-[1158.58px]" data-name="div.row">
      <DivCol29 />
    </div>
  );
}

function DivContainerLg1() {
  return (
    <div className="h-[1248.58px] relative shrink-0 w-full" data-name="div.container-lg">
      <DivRow17 />
      <DivRow18 />
      <DivRow19 />
      <DivRow20 />
      <DivRow21 />
    </div>
  );
}

function H3MbSpaceSm2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.mb-space-sm">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] tracking-[-0.4px] w-full">
        <p className="leading-[19.2px] whitespace-pre-wrap">Tuition calculator</p>
      </div>
    </div>
  );
}

function P16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">Use our calculator to estimate your full-</p>
        <p className="leading-[24px] mb-0">time or part-time tuition fees for this</p>
        <p className="leading-[24px] mb-0">program prior to any financial aid. Keep in</p>
        <p className="leading-[24px] mb-0">mind that most of our students receive</p>
        <p className="leading-[24px] mb-0">financial aid, which can reduce out-of-</p>
        <p>
          <span className="leading-[24px]">{`pocket costs. `}</span>
          <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[24px] text-[#8c1d40] underline" href="https://asuonline.asu.edu/what-it-costs/financial-aid/">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[24px]" href="https://asuonline.asu.edu/what-it-costs/financial-aid/">
              Learn more.
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

function EstimateTuitionAndFees() {
  return (
    <div className="bg-[#ffc627] content-stretch flex items-start justify-center px-[17px] py-[9px] relative rounded-[804px] shrink-0" data-name="Estimate tuition and fees">
      <div aria-hidden="true" className="absolute border border-[#ffc627] border-solid inset-0 pointer-events-none rounded-[804px]" />
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] text-center whitespace-nowrap" href="https://asuonline.asu.edu/">
        <p className="cursor-pointer leading-[19.6px]">Estimate tuition and fees</p>
      </a>
    </div>
  );
}

function DivCol31() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <EstimateTuitionAndFees />
      </div>
    </div>
  );
}

function DivRow22() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center relative shrink-0 w-[333px]" data-name="div.row">
      <DivCol31 />
    </div>
  );
}

function DivCardBody3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-body">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-center p-[24px] relative w-full">
          <H3MbSpaceSm2 />
          <P16 />
          <DivRow22 />
        </div>
      </div>
    </div>
  );
}

function DivCol30() {
  return (
    <div className="content-stretch flex flex-col h-[296.78px] items-start pl-[5px] relative shrink-0 w-full z-[1]" data-name="div.col-12">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-l-5 border-solid inset-0 pointer-events-none" />
      <DivCardBody3 />
    </div>
  );
}

function DivImageSideLeft3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.image-side-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col isolate items-start relative w-full">
        <div className="h-[360px] relative shrink-0 w-full z-[2]" data-name="div.col-12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-40.77%] max-w-none top-0 w-[181.55%]" src={imgDivCol14} />
          </div>
        </div>
        <DivCol30 />
      </div>
    </div>
  );
}

function DivBorder11() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-px relative shrink-0 w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivImageSideLeft3 />
    </div>
  );
}

function H2H2Medium2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="h2.h2-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[24px] tracking-[-0.84px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">You might also be interested in</p>
      </div>
    </div>
  );
}

function DivCol6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="div.col">
      <H2H2Medium2 />
    </div>
  );
}

function DivRow23() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center min-h-[61.79999923706055px] relative shrink-0 w-full" data-name="div.row">
      <DivCol6 />
    </div>
  );
}

function PFsXs1() {
  return (
    <div className="absolute bg-[#191919] content-stretch flex items-start left-[16px] p-[4px] top-[16px]" data-name="p.fs-xs">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16.8px]">Undergraduate</p>
      </div>
    </div>
  );
}

function H4H3Medium() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h4.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">Business – Accounting and Business</p>
        <p>Decisions (BA)</p>
      </div>
    </div>
  );
}

function HrTitleUnderline8() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[42.95px]" data-name="hr.title-underline" />;
}

function DivMtSpaceXs() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.99px] items-start left-0 pb-[31.01px] px-[16px] right-0 top-[55.6px]" data-name="div.mt-space-xs">
      <H4H3Medium />
      <HrTitleUnderline8 />
    </div>
  );
}

function DivDegreeSearchCardBody() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-[2]" data-name="div.degree-search-card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PFsXs1 />
        <DivMtSpaceXs />
      </div>
    </div>
  );
}

function Div7() {
  return (
    <div className="content-stretch flex flex-col font-['Arial:Regular',sans-serif] gap-[8.6px] items-start leading-[0] not-italic pb-[0.99px] relative shrink-0 whitespace-nowrap" data-name="div">
      <div className="flex flex-col justify-center relative shrink-0 text-[#191919] text-[14px]">
        <p className="leading-[19.6px]">Starts 03/16/2026</p>
      </div>
      <a className="flex flex-col justify-center relative shrink-0 text-[#8c1d40] text-[16px]" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-arts-business-accounting-business-decisions/">
        <p className="cursor-pointer decoration-solid leading-[22.4px] underline">Learn more</p>
      </a>
    </div>
  );
}

function BusinessAccountingAndBusinessDecisionsBaLearnMore1() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Business – Accounting and Business Decisions (BA)-Learn more">
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

function BusinessAccountingAndBusinessDecisionsBaLearnMore() {
  return (
    <a className="bg-[#fafafa] content-stretch cursor-pointer flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="Business – Accounting and Business Decisions (BA)-Learn more" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-arts-business-accounting-business-decisions/">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <BusinessAccountingAndBusinessDecisionsBaLearnMore1 />
    </a>
  );
}

function Div8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <BusinessAccountingAndBusinessDecisionsBaLearnMore />
    </div>
  );
}

function DivDFlex21() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.d-flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Div7 />
        <Div8 />
      </div>
    </div>
  );
}

function DivBgWhite1() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[1]" data-name="div.bg-white">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
        <DivDFlex21 />
      </div>
    </div>
  );
}

function DivDegreeSearchCard() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-[190px] min-w-px pb-[7px] pt-px px-px relative w-full" data-name="div.degree-search-card">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <DivDegreeSearchCardBody />
      <DivBgWhite1 />
    </div>
  );
}

function DivColMargin8() {
  return (
    <div className="h-[233.58px] relative shrink-0 w-full" data-name="div.col:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] px-[15px] relative size-full">
          <DivDegreeSearchCard />
        </div>
      </div>
    </div>
  );
}

function PFsXs2() {
  return (
    <div className="absolute bg-[#191919] content-stretch flex items-start left-[16px] p-[4px] top-[16px]" data-name="p.fs-xs">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16.8px]">Undergraduate</p>
      </div>
    </div>
  );
}

function H4H3Medium1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h4.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">Business – Business Administration</p>
        <p>(BA)</p>
      </div>
    </div>
  );
}

function HrTitleUnderline9() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[42.95px]" data-name="hr.title-underline" />;
}

function DivMtSpaceXs1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.99px] items-start left-0 pb-[31.01px] px-[16px] right-0 top-[55.6px]" data-name="div.mt-space-xs">
      <H4H3Medium1 />
      <HrTitleUnderline9 />
    </div>
  );
}

function DivDegreeSearchCardBody1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-[2]" data-name="div.degree-search-card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PFsXs2 />
        <DivMtSpaceXs1 />
      </div>
    </div>
  );
}

function Div9() {
  return (
    <div className="content-stretch flex flex-col font-['Arial:Regular',sans-serif] gap-[8.6px] items-start leading-[0] not-italic pb-[0.99px] relative shrink-0 whitespace-nowrap" data-name="div">
      <div className="flex flex-col justify-center relative shrink-0 text-[#191919] text-[14px]">
        <p className="leading-[19.6px]">Starts 03/16/2026</p>
      </div>
      <a className="flex flex-col justify-center relative shrink-0 text-[#8c1d40] text-[16px]" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-arts-business-concentration-business/">
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

function Div10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <BusinessBusinessAdministrationBaLearnMore />
    </div>
  );
}

function DivDFlex22() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.d-flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Div9 />
        <Div10 />
      </div>
    </div>
  );
}

function DivBgWhite2() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[1]" data-name="div.bg-white">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
        <DivDFlex22 />
      </div>
    </div>
  );
}

function DivDegreeSearchCard1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-[190px] min-w-px pb-[7px] pt-px px-px relative w-full" data-name="div.degree-search-card">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <DivDegreeSearchCardBody1 />
      <DivBgWhite2 />
    </div>
  );
}

function DivColMargin9() {
  return (
    <div className="h-[233.58px] relative shrink-0 w-full" data-name="div.col:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] px-[15px] relative size-full">
          <DivDegreeSearchCard1 />
        </div>
      </div>
    </div>
  );
}

function PFsXs3() {
  return (
    <div className="absolute bg-[#191919] content-stretch flex items-start left-[16px] p-[4px] top-[16px]" data-name="p.fs-xs">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16.8px]">Undergraduate</p>
      </div>
    </div>
  );
}

function H4H3Medium2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="h4.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">Economics (BS) – Business</p>
      </div>
    </div>
  );
}

function HrTitleUnderline10() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[42.95px]" data-name="hr.title-underline" />;
}

function DivMtSpaceXs2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8.01px] items-start left-0 pb-[30.99px] px-[16px] right-0 top-[55.79px]" data-name="div.mt-space-xs">
      <H4H3Medium2 />
      <HrTitleUnderline10 />
    </div>
  );
}

function DivDegreeSearchCardBody2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-[2]" data-name="div.degree-search-card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PFsXs3 />
        <DivMtSpaceXs2 />
      </div>
    </div>
  );
}

function Div11() {
  return (
    <div className="content-stretch flex flex-col font-['Arial:Regular',sans-serif] gap-[8.59px] items-start leading-[0] not-italic pb-px relative shrink-0 whitespace-nowrap" data-name="div">
      <div className="flex flex-col justify-center relative shrink-0 text-[#191919] text-[14px]">
        <p className="leading-[19.6px]">Starts 03/16/2026</p>
      </div>
      <a className="flex flex-col justify-center relative shrink-0 text-[#8c1d40] text-[16px]" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/economics-bs-wpc/">
        <p className="cursor-pointer decoration-solid leading-[22.4px] underline">Learn more</p>
      </a>
    </div>
  );
}

function EconomicsBsBusinessLearnMore1() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Economics (BS) – Business-Learn more">
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

function EconomicsBsBusinessLearnMore() {
  return (
    <a className="bg-[#fafafa] content-stretch cursor-pointer flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="Economics (BS) – Business-Learn more" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/economics-bs-wpc/">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <EconomicsBsBusinessLearnMore1 />
    </a>
  );
}

function Div12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <EconomicsBsBusinessLearnMore />
    </div>
  );
}

function DivDFlex23() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.d-flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Div11 />
        <Div12 />
      </div>
    </div>
  );
}

function DivBgWhite3() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[1]" data-name="div.bg-white">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
        <DivDFlex23 />
      </div>
    </div>
  );
}

function DivDegreeSearchCard2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-[190px] min-w-px pb-[7px] pt-px px-px relative w-full" data-name="div.degree-search-card">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <DivDegreeSearchCardBody2 />
      <DivBgWhite3 />
    </div>
  );
}

function DivColMargin10() {
  return (
    <div className="h-[211.98px] relative shrink-0 w-full" data-name="div.col:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] px-[15px] relative size-full">
          <DivDegreeSearchCard2 />
        </div>
      </div>
    </div>
  );
}

function PFsXs4() {
  return (
    <div className="absolute bg-[#191919] content-stretch flex items-start left-[16px] p-[4px] top-[16px]" data-name="p.fs-xs">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16.8px]">Undergraduate</p>
      </div>
    </div>
  );
}

function H4H3Medium3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="h4.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] w-full">
        <p className="leading-[21.6px] whitespace-pre-wrap">Business – Financial Planning (BA)</p>
      </div>
    </div>
  );
}

function HrTitleUnderline11() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[42.95px]" data-name="hr.title-underline" />;
}

function DivMtSpaceXs3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 pb-[31px] px-[16px] right-0 top-[55.8px]" data-name="div.mt-space-xs">
      <H4H3Medium3 />
      <HrTitleUnderline11 />
    </div>
  );
}

function DivDegreeSearchCardBody3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-[2]" data-name="div.degree-search-card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PFsXs4 />
        <DivMtSpaceXs3 />
      </div>
    </div>
  );
}

function Div13() {
  return (
    <div className="content-stretch flex flex-col font-['Arial:Regular',sans-serif] gap-[8.6px] items-start leading-[0] not-italic pb-[0.99px] relative shrink-0 whitespace-nowrap" data-name="div">
      <div className="flex flex-col justify-center relative shrink-0 text-[#191919] text-[14px]">
        <p className="leading-[19.6px]">Starts 03/16/2026</p>
      </div>
      <a className="flex flex-col justify-center relative shrink-0 text-[#8c1d40] text-[16px]" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/financial-planning-business/">
        <p className="cursor-pointer decoration-solid leading-[22.4px] underline">Learn more</p>
      </a>
    </div>
  );
}

function BusinessFinancialPlanningBaLearnMore1() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Business – Financial Planning (BA)-Learn more">
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

function BusinessFinancialPlanningBaLearnMore() {
  return (
    <a className="bg-[#fafafa] content-stretch cursor-pointer flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="Business – Financial Planning (BA)-Learn more" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/financial-planning-business/">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <BusinessFinancialPlanningBaLearnMore1 />
    </a>
  );
}

function Div14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <BusinessFinancialPlanningBaLearnMore />
    </div>
  );
}

function DivDFlex24() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.d-flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Div13 />
        <Div14 />
      </div>
    </div>
  );
}

function DivBgWhite4() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[1]" data-name="div.bg-white">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
        <DivDFlex24 />
      </div>
    </div>
  );
}

function DivDegreeSearchCard3() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-[190px] min-w-px pb-[7px] pt-px px-px relative w-full" data-name="div.degree-search-card">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <DivDegreeSearchCardBody3 />
      <DivBgWhite4 />
    </div>
  );
}

function DivColMargin11() {
  return (
    <div className="h-[211.98px] relative shrink-0 w-full" data-name="div.col:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] px-[15px] relative size-full">
          <DivDegreeSearchCard3 />
        </div>
      </div>
    </div>
  );
}

function DivRow24() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[390px]" data-name="div.row">
      <DivColMargin8 />
      <DivColMargin9 />
      <DivColMargin10 />
      <DivColMargin11 />
    </div>
  );
}

function ABtn() {
  return (
    <div className="bg-[#ffc627] relative rounded-[804px] shrink-0 w-full" data-name="a.btn">
      <div aria-hidden="true" className="absolute border border-[#ffc627] border-solid inset-0 pointer-events-none rounded-[804px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[9px] relative w-full">
          <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/">
            <p className="cursor-pointer leading-[24px]">See all degrees</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function DivCol32() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[15px] relative w-full">
        <ABtn />
      </div>
    </div>
  );
}

function DivRow25() {
  return (
    <div className="content-center flex flex-wrap items-center justify-center relative shrink-0 w-[390px]" data-name="div.row">
      <DivCol32 />
    </div>
  );
}

function DivContainer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[15px] relative w-full">
          <DivRow23 />
          <DivRow24 />
          <DivRow25 />
        </div>
      </div>
    </div>
  );
}

function SectionPySpaceMd() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex flex-col items-start pb-[32px] pt-[31px] relative shrink-0 w-full" data-name="section.py-space-md">
      <DivContainer2 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-center relative shrink-0 w-[390px]">
      <SectionProgramIntro />
      <SectionProgramRfi />
      <Frame56 />
      <DivRow5 />
      <SectionProgramCourses />
      <SectionProgramCareers />
      <DivBorder9 />
      <DivPtSpaceMd />
      <DivBorder10 />
      <DivContainerLg1 />
      <DivBorder11 />
      <SectionPySpaceMd />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="main#content">
      <Frame55 />
    </div>
  );
}

function AsuOnline() {
  return (
    <div className="h-[56px] max-w-[358px] relative shrink-0 w-[200px]" data-name="ASU Online">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAsuOnline} />
      </div>
    </div>
  );
}

function DivCol33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <AsuOnline />
      </div>
    </div>
  );
}

function DivCol12Margin8() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center pb-[16px] relative shrink-0 w-full" data-name="div.col-12:margin">
      <DivCol33 />
    </div>
  );
}

function AsuOnlineFacebookAsuOnlineFacebook() {
  return (
    <a className="block cursor-pointer h-[32px] relative shrink-0 w-[28px]" data-name="ASU Online Facebook → ASU Online Facebook" href="https://www.facebook.com/ASUonline/">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 32">
        <g id="ASU Online Facebook â ASU Online Facebook">
          <path d={svgPaths.p2d2c8f80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </a>
  );
}

function AsuOnlineFacebookMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] pr-[24px] relative shrink-0" data-name="ASU Online Facebook:margin">
      <AsuOnlineFacebookAsuOnlineFacebook />
    </div>
  );
}

function AsuOnlineLinkedinAsuOnlineLinkedin() {
  return (
    <a className="block cursor-pointer h-[32px] relative shrink-0 w-[28px]" data-name="ASU Online Linkedin → ASU Online Linkedin" href="https://www.linkedin.com/showcase/3693076/">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 32">
        <g id="ASU Online Linkedin â ASU Online Linkedin">
          <path d={svgPaths.p2ed63500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </a>
  );
}

function AsuOnlineLinkedinMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] pr-[24px] relative shrink-0" data-name="ASU Online Linkedin:margin">
      <AsuOnlineLinkedinAsuOnlineLinkedin />
    </div>
  );
}

function AsuOnlineInstagramAsuOnlineInstagram() {
  return (
    <a className="block cursor-pointer h-[32px] relative shrink-0 w-[28px]" data-name="ASU Online Instagram → ASU Online Instagram" href="https://www.instagram.com/asuonline">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 32">
        <g id="ASU Online Instagram â ASU Online Instagram">
          <path d={svgPaths.p257a9a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </a>
  );
}

function AsuOnlineInstagramMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] pr-[24px] relative shrink-0" data-name="ASU Online Instagram:margin">
      <AsuOnlineInstagramAsuOnlineInstagram />
    </div>
  );
}

function AsuOnlineYoutube1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[28px]" data-name="ASU Online Youtube">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 32">
        <g id="ASU Online Youtube">
          <path d={svgPaths.p11dafa00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AsuOnlineYoutube() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-start pb-[3px] relative shrink-0" data-name="ASU Online Youtube" href="https://www.youtube.com/channel/UCI3_ODpxjUq4IIvcrNe6WYw">
      <AsuOnlineYoutube1 />
    </a>
  );
}

function DivDFlex25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="div.d-flex">
      <AsuOnlineFacebookMargin />
      <AsuOnlineLinkedinMargin />
      <AsuOnlineInstagramMargin />
      <AsuOnlineYoutube />
    </div>
  );
}

function DivCol34() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <DivDFlex25 />
      </div>
    </div>
  );
}

function DivRow26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative shrink-0 w-[390px]" data-name="div.row">
      <DivCol12Margin8 />
      <DivCol34 />
    </div>
  );
}

function HrMxSpaceXs() {
  return (
    <div className="h-px relative shrink-0 w-[328px]" data-name="hr.mx-space-xs">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function DivContainer3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[15px] relative w-full">
          <DivRow26 />
          <HrMxSpaceXs />
        </div>
      </div>
    </div>
  );
}

function DivBgDark() {
  return (
    <div className="bg-[#191919] content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="div.bg-dark-3">
      <DivContainer3 />
    </div>
  );
}

function P17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[25.2px] not-italic relative shrink-0 text-[18px] text-white w-full whitespace-nowrap">
        <p className="mb-0">ASU Online is dedicated to providing</p>
        <p className="mb-0">innovative, high-quality online</p>
        <p className="mb-0">education to students from across the</p>
        <p>country and around the world.</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Frame">
          <path d={svgPaths.p1866e950} fill="var(--fill-0, #FFC627)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivFsMediumMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.39px] pl-[16px] pt-px relative shrink-0" data-name="div.fs-medium:margin">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffc627] text-[14px] whitespace-nowrap">
        <p className="leading-[19.6px]">Apply now</p>
      </div>
    </div>
  );
}

function LiDFlex() {
  return (
    <div className="content-stretch flex items-center mb-[-1px] pb-[8px] relative shrink-0 w-full" data-name="li.d-flex">
      <Frame38 />
      <DivFsMediumMargin />
    </div>
  );
}

function Frame39() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Frame">
          <path d={svgPaths.p2ca45f00} fill="var(--fill-0, #FFC627)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function APsSpaceXs() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] pl-[16px] relative shrink-0" data-name="a.ps-space-xs">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffc627] text-[14px] whitespace-nowrap">
        <p className="leading-[19.6px]">Help Desk 855.278.5080</p>
      </div>
    </div>
  );
}

function LiPbSpaceXxs() {
  return (
    <div className="content-stretch flex items-center mb-[-1px] pb-[8px] relative shrink-0 w-full" data-name="li.pb-space-xxs">
      <Frame39 />
      <APsSpaceXs />
    </div>
  );
}

function Frame40() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16.0007">
        <g id="Frame">
          <path d={svgPaths.p2556c1f0} fill="var(--fill-0, #FFC627)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function APsSpaceXs1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] pl-[16px] relative shrink-0" data-name="a.ps-space-xs">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffc627] text-[14px] whitespace-nowrap">
        <p className="leading-[19.6px]">Enrollment 866.277.6589</p>
      </div>
    </div>
  );
}

function LiPbSpaceXxs1() {
  return (
    <div className="content-stretch flex items-center mb-[-1px] pb-[8px] relative shrink-0 w-full" data-name="li.pb-space-xxs">
      <Frame40 />
      <APsSpaceXs1 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Frame">
          <path d={svgPaths.p217aa280} fill="var(--fill-0, #FFC627)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function APsSpaceXs2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] pl-[16px] relative shrink-0" data-name="a.ps-space-xs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffc627] text-[14px] whitespace-nowrap" href="mailto:enrollmentonline@asu.edu">
        <p className="cursor-pointer leading-[19.6px]">enrollmentonline@asu.edu</p>
      </a>
    </div>
  );
}

function LiDFlex1() {
  return (
    <div className="content-stretch flex items-center mb-[-1px] relative shrink-0 w-full" data-name="li.d-flex">
      <Frame41 />
      <APsSpaceXs2 />
    </div>
  );
}

function UlMbSpaceMd() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="ul.mb-space-md">
      <LiDFlex />
      <LiPbSpaceXxs />
      <LiPbSpaceXxs1 />
      <LiDFlex1 />
    </div>
  );
}

function H3H3Large() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0" data-name="h3.h3-large">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[21.6px]">Online Degrees</p>
      </div>
    </div>
  );
}

function DivCollapseTitle4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="div.collapse-title">
      <H3H3Large />
    </div>
  );
}

function Div16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivCollapseTitle4 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0014 18.2812">
        <g id="Frame">
          <path d={svgPaths.p38bcf200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivTextWhite() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[16px]" data-name="div.text-white">
      <Frame42 />
    </div>
  );
}

function DivTextWhiteMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0 w-[32px]" data-name="div.text-white:margin">
      <DivTextWhite />
    </div>
  );
}

function DivCollapseLabelContainer4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.collapse-label-container">
      <Div16 />
      <DivTextWhiteMargin />
    </div>
  );
}

function ButtonAccordion0PrimaryFooterCollapse() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="button#accordion0primary-footer-collapse-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[23px] relative w-full">
        <DivCollapseLabelContainer4 />
      </div>
    </div>
  );
}

function DivBorderDark() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="div.border-dark-3">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative w-full">
        <ButtonAccordion0PrimaryFooterCollapse />
      </div>
    </div>
  );
}

function DivCollapseWrapper4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="div.collapse-wrapper">
      <div aria-hidden="true" className="absolute border-solid border-t border-white inset-0 pointer-events-none" />
      <DivBorderDark />
    </div>
  );
}

function H3H3Large1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0" data-name="h3.h3-large">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[21.6px]">Tuition</p>
      </div>
    </div>
  );
}

function DivCollapseTitle5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="div.collapse-title">
      <H3H3Large1 />
    </div>
  );
}

function Div17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivCollapseTitle5 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0014 18.2812">
        <g id="Frame">
          <path d={svgPaths.p38bcf200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivTextWhite1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[16px]" data-name="div.text-white">
      <Frame43 />
    </div>
  );
}

function DivTextWhiteMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0 w-[32px]" data-name="div.text-white:margin">
      <DivTextWhite1 />
    </div>
  );
}

function DivCollapseLabelContainer5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.collapse-label-container">
      <Div17 />
      <DivTextWhiteMargin1 />
    </div>
  );
}

function ButtonAccordion1PrimaryFooterCollapse() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="button#accordion1primary-footer-collapse-1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[23px] relative w-full">
        <DivCollapseLabelContainer5 />
      </div>
    </div>
  );
}

function DivBorderDark1() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="div.border-dark-3">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative w-full">
        <ButtonAccordion1PrimaryFooterCollapse />
      </div>
    </div>
  );
}

function DivCollapseWrapper5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="div.collapse-wrapper">
      <div aria-hidden="true" className="absolute border-solid border-t border-white inset-0 pointer-events-none" />
      <DivBorderDark1 />
    </div>
  );
}

function H3H3Large2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0" data-name="h3.h3-large">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[21.6px]">Admission</p>
      </div>
    </div>
  );
}

function DivCollapseTitle6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="div.collapse-title">
      <H3H3Large2 />
    </div>
  );
}

function Div18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivCollapseTitle6 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0014 18.2812">
        <g id="Frame">
          <path d={svgPaths.p38bcf200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivTextWhite2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[16px]" data-name="div.text-white">
      <Frame44 />
    </div>
  );
}

function DivTextWhiteMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0 w-[32px]" data-name="div.text-white:margin">
      <DivTextWhite2 />
    </div>
  );
}

function DivCollapseLabelContainer6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.collapse-label-container">
      <Div18 />
      <DivTextWhiteMargin2 />
    </div>
  );
}

function ButtonAccordion2PrimaryFooterCollapse() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="button#accordion2primary-footer-collapse-2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[23px] relative w-full">
        <DivCollapseLabelContainer6 />
      </div>
    </div>
  );
}

function DivBorderDark2() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="div.border-dark-3">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative w-full">
        <ButtonAccordion2PrimaryFooterCollapse />
      </div>
    </div>
  );
}

function DivCollapseWrapper6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="div.collapse-wrapper">
      <div aria-hidden="true" className="absolute border-solid border-t border-white inset-0 pointer-events-none" />
      <DivBorderDark2 />
    </div>
  );
}

function H3H3Large3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0" data-name="h3.h3-large">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[21.6px]">Student Experience</p>
      </div>
    </div>
  );
}

function DivCollapseTitle7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="div.collapse-title">
      <H3H3Large3 />
    </div>
  );
}

function Div19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivCollapseTitle7 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0014 18.2812">
        <g id="Frame">
          <path d={svgPaths.p38bcf200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivTextWhite3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[16px]" data-name="div.text-white">
      <Frame45 />
    </div>
  );
}

function DivTextWhiteMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0 w-[32px]" data-name="div.text-white:margin">
      <DivTextWhite3 />
    </div>
  );
}

function DivCollapseLabelContainer7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.collapse-label-container">
      <Div19 />
      <DivTextWhiteMargin3 />
    </div>
  );
}

function ButtonAccordion3PrimaryFooterCollapse() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="button#accordion3primary-footer-collapse-3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[23px] relative w-full">
        <DivCollapseLabelContainer7 />
      </div>
    </div>
  );
}

function DivBorderDark3() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="div.border-dark-3">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative w-full">
        <ButtonAccordion3PrimaryFooterCollapse />
      </div>
    </div>
  );
}

function DivCollapseWrapper7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="div.collapse-wrapper">
      <div aria-hidden="true" className="absolute border-solid border-t border-white inset-0 pointer-events-none" />
      <DivBorderDark3 />
    </div>
  );
}

function H3H3Large4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0" data-name="h3.h3-large">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[21.6px]">About</p>
      </div>
    </div>
  );
}

function DivCollapseTitle8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="div.collapse-title">
      <H3H3Large4 />
    </div>
  );
}

function Div20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivCollapseTitle8 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0014 18.2812">
        <g id="Frame">
          <path d={svgPaths.p38bcf200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivTextWhite4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[16px]" data-name="div.text-white">
      <Frame46 />
    </div>
  );
}

function DivTextWhiteMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0 w-[32px]" data-name="div.text-white:margin">
      <DivTextWhite4 />
    </div>
  );
}

function DivCollapseLabelContainer8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.collapse-label-container">
      <Div20 />
      <DivTextWhiteMargin4 />
    </div>
  );
}

function ButtonAccordion4PrimaryFooterCollapse() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="button#accordion4primary-footer-collapse-4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[23px] relative w-full">
        <DivCollapseLabelContainer8 />
      </div>
    </div>
  );
}

function DivBorderDark4() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="div.border-dark-3">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative w-full">
        <ButtonAccordion4PrimaryFooterCollapse />
      </div>
    </div>
  );
}

function DivCollapseWrapper8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="div.collapse-wrapper">
      <div aria-hidden="true" className="absolute border-solid border-t border-white inset-0 pointer-events-none" />
      <DivBorderDark4 />
    </div>
  );
}

function H3H3Large5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0" data-name="h3.h3-large">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[21.6px]">Newsroom</p>
      </div>
    </div>
  );
}

function DivCollapseTitle9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="div.collapse-title">
      <H3H3Large5 />
    </div>
  );
}

function Div21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivCollapseTitle9 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0014 18.2812">
        <g id="Frame">
          <path d={svgPaths.p38bcf200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivTextWhite5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[16px]" data-name="div.text-white">
      <Frame47 />
    </div>
  );
}

function DivTextWhiteMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0 w-[32px]" data-name="div.text-white:margin">
      <DivTextWhite5 />
    </div>
  );
}

function DivCollapseLabelContainer9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.collapse-label-container">
      <Div21 />
      <DivTextWhiteMargin5 />
    </div>
  );
}

function ButtonAccordion5PrimaryFooterCollapse() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="button#accordion5primary-footer-collapse-5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[23px] relative w-full">
        <DivCollapseLabelContainer9 />
      </div>
    </div>
  );
}

function DivBorderDark5() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="div.border-dark-3">
      <div aria-hidden="true" className="absolute border border-[#191919] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative w-full">
        <ButtonAccordion5PrimaryFooterCollapse />
      </div>
    </div>
  );
}

function DivCollapseWrapper9() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0 w-full" data-name="div.collapse-wrapper">
      <div aria-hidden="true" className="absolute border-b border-solid border-t border-white inset-0 pointer-events-none" />
      <DivBorderDark5 />
    </div>
  );
}

function DivAccordionContainer() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="div.accordion-container">
      <DivCollapseWrapper4 />
      <DivCollapseWrapper5 />
      <DivCollapseWrapper6 />
      <DivCollapseWrapper7 />
      <DivCollapseWrapper8 />
      <DivCollapseWrapper9 />
    </div>
  );
}

function DivCol35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[15px] relative size-full">
        <P17 />
        <UlMbSpaceMd />
        <DivAccordionContainer />
      </div>
    </div>
  );
}

function DivRow27() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.row">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex flex-wrap items-start justify-center px-[16px] relative w-full">
          <DivCol35 />
        </div>
      </div>
    </div>
  );
}

function SectionBgDark() {
  return (
    <div className="bg-[#191919] content-stretch flex flex-col items-start pb-[32px] pt-[31.28px] relative shrink-0 w-full" data-name="section.bg-dark-3">
      <DivRow27 />
    </div>
  );
}

function Div15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div">
      <DivBgDark />
      <SectionBgDark />
    </div>
  );
}

function ANavLink() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pl-[16px] pr-[88.44px] py-[8px] top-0" data-name="a.nav-link">
      <a className="cursor-pointer flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/about/locations-maps">
        <p className="mb-0">Maps and</p>
        <p>Locations</p>
      </a>
    </div>
  );
}

function ANavLink1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[32.5px] pt-[7.5px] px-[16px] top-[64px]" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/asujobs">
        <p className="cursor-pointer leading-[24px]">Jobs</p>
      </a>
    </div>
  );
}

function ANavLink2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[32.5px] pt-[7.5px] px-[16px] top-[128px]" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://isearch.asu.edu/asu-people/">
        <p className="cursor-pointer leading-[24px]">Directory</p>
      </a>
    </div>
  );
}

function ANavLink3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[180px] pb-[32.5px] pt-[7.5px] px-[16px] top-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/about/contact">
        <p className="cursor-pointer leading-[24px]">Contact ASU</p>
      </a>
    </div>
  );
}

function ANavLink4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[180px] pb-[32.5px] pt-[7.5px] px-[16px] top-[64px]" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://my.asu.edu/">
        <p className="cursor-pointer leading-[24px]">My ASU</p>
      </a>
    </div>
  );
}

function NavNav() {
  return (
    <div className="h-[192px] relative shrink-0 w-full" data-name="nav.nav">
      <ANavLink />
      <ANavLink1 />
      <ANavLink2 />
      <ANavLink3 />
      <ANavLink4 />
    </div>
  );
}

function RepeatedlyRanked1On30ListsInTheLast3Years() {
  return (
    <div className="aspect-[360/107.05999755859375] relative shrink-0 w-full" data-name="Repeatedly ranked #1 on 30+ lists in the last 3 years">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[55.17%] left-0 max-w-none top-[22.42%] w-full" src={imgRepeatedlyRanked1On30ListsInTheLast3Years} />
      </div>
    </div>
  );
}

function DivDFlex26() {
  return (
    <div className="content-stretch flex flex-col items-center py-[8px] relative shrink-0 w-full" data-name="div.d-flex">
      <NavNav />
      <RepeatedlyRanked1On30ListsInTheLast3Years />
    </div>
  );
}

function DivCol7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <DivDFlex26 />
      </div>
    </div>
  );
}

function DivRow28() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center relative shrink-0 w-full" data-name="div.row">
      <DivCol7 />
    </div>
  );
}

function SectionBgSecondary() {
  return (
    <div className="bg-[#ffc627] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="section.bg-secondary">
      <DivRow28 />
    </div>
  );
}

function ANavLink5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[16px] py-[8px] right-[180px] top-0" data-name="a.nav-link">
      <a className="cursor-pointer flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/about/copyright-trademark">
        <p className="mb-0">Copyright and</p>
        <p>Trademark</p>
      </a>
    </div>
  );
}

function ANavLink6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[16px] py-[8px] right-[180px] top-[64px]" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://accessibility.asu.edu/report">
        <p className="cursor-pointer leading-[24px]">Accessibility</p>
      </a>
    </div>
  );
}

function ANavLink7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[32.5px] pt-[7.5px] px-[16px] right-[180px] top-[104px]" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/privacy/">
        <p className="cursor-pointer leading-[24px]">Privacy</p>
      </a>
    </div>
  );
}

function ANavLink8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[180px] pb-[32.5px] pt-[7.5px] px-[16px] right-0 top-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/tou/">
        <p className="cursor-pointer leading-[24px]">Terms of Use</p>
      </a>
    </div>
  );
}

function ANavLink9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[180px] px-[16px] py-[8px] right-0 top-[64px]" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/emergency/">
        <p className="cursor-pointer leading-[24px]">Emergency</p>
      </a>
    </div>
  );
}

function ButtonManualConsentoptout() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[180px] pl-[16px] pr-[25.28px] py-[8px] top-[104px]" data-name="button#manualConsentoptout">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p className="mb-0">Manage my privacy</p>
        <p>settings</p>
      </div>
    </div>
  );
}

function UniversityLegalAndCompliance() {
  return (
    <div className="h-[168px] relative shrink-0 w-full" data-name="University Legal and Compliance">
      <ANavLink5 />
      <ANavLink6 />
      <ANavLink7 />
      <ANavLink8 />
      <ANavLink9 />
      <ButtonManualConsentoptout />
    </div>
  );
}

function DivCol8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <UniversityLegalAndCompliance />
      </div>
    </div>
  );
}

function DivRow29() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center relative shrink-0 w-full" data-name="div.row">
      <DivCol8 />
    </div>
  );
}

function SectionPbSpaceXl() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex flex-col items-start pb-[64px] pt-[16px] relative shrink-0 w-full" data-name="section.pb-space-xl">
      <DivRow29 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Div15 />
      <SectionBgSecondary />
      <SectionPbSpaceXl />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-name="footer">
      <Frame57 />
    </div>
  );
}

export default function AsuoMobile() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex flex-col items-start relative size-full" data-name="ASUO Mobile">
      <HeaderBgWhite />
      <MainContent />
      <Footer />
    </div>
  );
}