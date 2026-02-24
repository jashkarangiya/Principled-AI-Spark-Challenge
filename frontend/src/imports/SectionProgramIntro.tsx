import svgPaths from "./svg-jd4z9poxyr";
import imgTwoOnlineAccountingDegreeStudentsCollaborateWhileWorkingTogetherOnALaptop from "figma:asset/ed0ce36e138797efb99a7df1929414f74932f5ee.png";

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
      <a className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[23px] justify-center leading-[0] left-0 not-italic text-[#8c1d40] text-[16px] top-[407.5px] w-[82.156px]" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-detail">
        <p className="cursor-pointer decoration-solid leading-[22.4px] underline whitespace-pre-wrap">Learn more</p>
      </a>
    </div>
  );
}

function DivCol() {
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

function DivDFlex() {
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

function DivDFlex1() {
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

function DivDFlex2() {
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

function DivDFlex3() {
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
        <DivDFlex />
        <HrTextDark />
        <DivDFlex1 />
        <DivDFlex2 />
        <DivDFlex3 />
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

function DivCol1() {
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
      <DivCol />
      <DivCol1 />
    </div>
  );
}

export default function SectionProgramIntro() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex flex-col items-center pb-[80px] relative size-full" data-name="section#program-intro">
      <div className="h-[256px] mb-[-48px] relative shrink-0 w-full" data-name="Two online accounting degree students collaborate while working together on a laptop.">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[101.65%] left-0 max-w-none top-0 w-full" src={imgTwoOnlineAccountingDegreeStudentsCollaborateWhileWorkingTogetherOnALaptop} />
        </div>
      </div>
      <DivBgWhite />
    </div>
  );
}