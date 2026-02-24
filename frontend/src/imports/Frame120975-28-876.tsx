import svgPaths from "./svg-k1rmsjhavu";
import imgSectionProgramCourses from "figma:asset/246706e29030f783e2d25b7656d4d29484ca9389.png";
import imgAsuOnline from "figma:asset/cd09da2a96204938270dfd11e4f75ca7a2a9fb47.png";
import imgRepeatedlyRanked1On30ListsInTheLast3Years from "figma:asset/904126d9185baab1838c2812e90445690e55a6fe.png";

function SectionProgramCourses() {
  return <div className="absolute bg-size-[450px_451px] bg-top-left h-[296px] left-0 top-0 w-[1692px]" data-name="section#program-courses" style={{ backgroundImage: `url('${imgSectionProgramCourses}')` }} />;
}

function Heading() {
  return (
    <div className="absolute h-[43.2px] left-[306px] top-[64px] w-[1080px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[43.2px] left-[540.09px] not-italic text-[#191919] text-[36px] text-center top-[-0.2px] tracking-[-1.26px]">Ready to start your journey?</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[25.2px] left-[306px] top-[123.2px] w-[1080px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[25.2px] left-[540.29px] not-italic text-[#191919] text-[18px] text-center top-[0.4px]">Explore 8 ASU Online degrees that can prepare you for a career as a Data Analyst.</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-[#ffc627] h-[52px] left-[367.66px] rounded-[26843500px] top-0 w-[167.775px]" data-name="Link">
      <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[24px] left-[84px] not-italic text-[16px] text-black text-center top-[14.2px]">View Degrees</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-[#191919] h-[52px] left-[551.44px] rounded-[26843500px] top-0 w-[160.9px]" data-name="Link">
      <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[24px] left-[80.5px] not-italic text-[16px] text-center text-white top-[14.2px]">Request Info</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[52px] left-[306px] top-[180.4px] w-[1080px]" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[296px] left-0 top-0 w-[1692px]">
      <SectionProgramCourses />
      <Heading />
      <Paragraph />
      <Container />
    </div>
  );
}

function LinkToOverview() {
  return (
    <a className="content-stretch cursor-pointer flex items-start pb-[16.39px] pt-[15px] px-[8px] relative shrink-0" data-name="link to Overview" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-intro">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] text-left whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[22.4px]">Overview</p>
      </div>
      <div className="absolute bg-[#ffc627] bottom-0 h-[8px] left-0 right-0" data-name="::after" />
    </a>
  );
}

function LiNavItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="li.nav-item">
      <LinkToOverview />
    </div>
  );
}

function LiNavItem1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.39px] pt-[15px] px-[8px] relative self-stretch shrink-0" data-name="li.nav-item">
      <a className="cursor-pointer flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-detail">
        <p className="leading-[22.4px]">Details</p>
      </a>
    </div>
  );
}

function LiNavItem2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.39px] pt-[15px] px-[8px] relative self-stretch shrink-0" data-name="li.nav-item">
      <a className="cursor-pointer flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-courses">
        <p className="leading-[22.4px]">Courses</p>
      </a>
    </div>
  );
}

function LiNavItem3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.39px] pt-[15px] px-[8px] relative self-stretch shrink-0" data-name="li.nav-item">
      <a className="cursor-pointer flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-careers">
        <p className="leading-[22.4px]">Careers</p>
      </a>
    </div>
  );
}

function LiNavItem4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.39px] pt-[15px] px-[8px] relative self-stretch shrink-0" data-name="li.nav-item">
      <a className="cursor-pointer flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-admissions">
        <p className="leading-[22.4px]">Admissions</p>
      </a>
    </div>
  );
}

function LiNavItem5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.39px] pt-[15px] px-[8px] relative self-stretch shrink-0" data-name="li.nav-item">
      <a className="cursor-pointer flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-accolades">
        <p className="leading-[22.4px]">Accolades</p>
      </a>
    </div>
  );
}

function LiNavItem6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.39px] pt-[15px] px-[8px] relative self-stretch shrink-0" data-name="li.nav-item">
      <a className="cursor-pointer flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-cost">
        <p className="leading-[22.4px]">Tuition</p>
      </a>
    </div>
  );
}

function UlNavbarNav() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ul.navbar-nav">
      <LiNavItem />
      <LiNavItem1 />
      <LiNavItem2 />
      <LiNavItem3 />
      <LiNavItem4 />
      <LiNavItem5 />
      <LiNavItem6 />
    </div>
  );
}

function ABtn() {
  return (
    <div className="bg-[#ffc627] content-stretch flex items-start justify-center pb-[9.39px] pt-[8px] px-[17px] relative rounded-[804px] shrink-0" data-name="a.btn">
      <div aria-hidden="true" className="absolute border border-[#ffc627] border-solid inset-0 pointer-events-none rounded-[804px]" />
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" href="https://webapp4.asu.edu/uga_admissionsapp/">
        <p className="cursor-pointer leading-[22.4px]">Apply now</p>
      </a>
    </div>
  );
}

function DivFsMedium() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="div.fs-medium">
      <ABtn />
    </div>
  );
}

function ABtn1() {
  return (
    <div className="bg-[#ffc627] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px pb-[9.39px] pt-[8px] px-[17px] relative rounded-[804px]" data-name="a.btn">
      <div aria-hidden="true" className="absolute border border-[#ffc627] border-solid inset-0 pointer-events-none rounded-[804px]" />
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-rfi">
        <p className="cursor-pointer leading-[22.4px]">Request Info</p>
      </a>
    </div>
  );
}

function ABtnMargin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[24px] relative self-stretch shrink-0" data-name="a.btn:margin">
      <ABtn1 />
    </div>
  );
}

function DivDFlex() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="div.d-flex">
      <DivFsMedium />
      <ABtnMargin />
    </div>
  );
}

function DivSideMenu() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.side-menu">
      <DivDFlex />
    </div>
  );
}

function SecondaryNavigation() {
  return (
    <div className="content-stretch flex items-center pt-[8px] relative shrink-0 w-full" data-name="secondary navigation">
      <UlNavbarNav />
      <DivSideMenu />
    </div>
  );
}

function DivCol8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[62.39px] items-start min-h-px min-w-px relative" data-name="div.col-12">
      <SecondaryNavigation />
    </div>
  );
}

function DivRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap items-start justify-center relative w-full">
        <DivCol8 />
      </div>
    </div>
  );
}

function SectionBgWhite() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[63.39px] items-start pb-px pointer-events-auto px-[75px] sticky top-0 w-[1692px]" data-name="section.bg-white">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b border-solid inset-0 pointer-events-none" />
      <DivRow />
    </div>
  );
}

function AsuOnline() {
  return (
    <div className="h-[56px] max-w-[660px] relative shrink-0 w-[200px]" data-name="ASU Online">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAsuOnline} />
      </div>
    </div>
  );
}

function DivCol9() {
  return (
    <div className="flex-[1_0_0] max-w-[1320px] min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[15px] relative size-full">
        <AsuOnline />
      </div>
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

function DivDFlex1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="div.d-flex">
      <AsuOnlineFacebookMargin />
      <AsuOnlineLinkedinMargin />
      <AsuOnlineInstagramMargin />
      <AsuOnlineYoutube />
    </div>
  );
}

function DivCol10() {
  return (
    <div className="flex-[1_0_0] max-w-[1320px] min-h-px min-w-px relative w-full" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[15px] relative size-full">
        <DivDFlex1 />
      </div>
    </div>
  );
}

function DivCol12Margin() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center max-w-[1320px] min-h-px min-w-px py-[10.5px] relative self-stretch" data-name="div.col-12:margin">
      <DivCol10 />
    </div>
  );
}

function DivRow1() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start relative shrink-0 w-[1320px]" data-name="div.row">
      <DivCol9 />
      <DivCol12Margin />
    </div>
  );
}

function HrMxSpaceXs() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="hr.mx-space-xs">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function DivContainer() {
  return (
    <div className="max-w-[1320px] relative shrink-0 w-full" data-name="div.container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[inherit] px-[15px] relative w-full">
          <DivRow1 />
          <HrMxSpaceXs />
        </div>
      </div>
    </div>
  );
}

function DivBgDark() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="div.bg-dark-3">
      <div className="content-stretch flex flex-col items-start pt-[32px] px-[60px] relative w-full">
        <DivContainer />
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.565px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[25.2px] not-italic relative shrink-0 text-[18px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">ASU Online is dedicated to</p>
        <p className="mb-0">providing innovative, high-quality</p>
        <p className="mb-0">online education to students from</p>
        <p className="mb-0">across the country and around the</p>
        <p>world.</p>
      </div>
    </div>
  );
}

function Frame() {
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
      <Frame />
      <DivFsMediumMargin />
    </div>
  );
}

function Frame1() {
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
      <Frame1 />
      <APsSpaceXs />
    </div>
  );
}

function Frame2() {
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
      <Frame2 />
      <APsSpaceXs1 />
    </div>
  );
}

function Frame3() {
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
      <Frame3 />
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

function DivCol11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-start max-w-[1320px] px-[15px] relative shrink-0 w-[330px]" data-name="div.col-12">
      <P />
      <UlMbSpaceMd />
    </div>
  );
}

function PFsMedium() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] right-[15px] top-[-1px]" data-name="p.fs-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Online Degrees</p>
      </div>
    </div>
  );
}

function PMbSpaceXxs() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[46.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/">
        <p className="cursor-pointer leading-[19.6px]">All Online Programs</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[78.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/">
        <p className="cursor-pointer leading-[19.6px]">Undergraduate Degrees</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[110.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/graduate/">
        <p className="cursor-pointer leading-[19.6px]">Graduate Degrees</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[142.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/certificates/">
        <p className="cursor-pointer leading-[19.6px]">Graduate Certificates</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[174.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/admission/nondegree/">
        <p className="cursor-pointer leading-[19.6px]">Nondegree Programs</p>
      </a>
    </div>
  );
}

function PMb() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[206.4px]" data-name="p.mb-0">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/study/">
        <p className="cursor-pointer leading-[19.6px]">Browse Interest Areas</p>
      </a>
    </div>
  );
}

function DivCol2() {
  return (
    <div className="flex-[1_0_0] max-w-[990px] min-h-px min-w-px relative self-stretch" data-name="div.col-3">
      <PFsMedium />
      <PMbSpaceXxs />
      <PMbSpaceXxs1 />
      <PMbSpaceXxs2 />
      <PMbSpaceXxs3 />
      <PMbSpaceXxs4 />
      <PMb />
    </div>
  );
}

function PFsMedium1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] right-[15px] top-[-1px]" data-name="p.fs-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Tuition</p>
      </div>
    </div>
  );
}

function PMbSpaceXxs5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[46.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/what-it-costs/">
        <p className="cursor-pointer leading-[19.6px]">Tuition Calculator</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[78.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/what-it-costs/financial-aid/">
        <p className="cursor-pointer leading-[19.6px]">Financial Aid</p>
      </a>
    </div>
  );
}

function PMb1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[110.4px]" data-name="p.mb-0">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/what-it-costs/scholarship-opportunities/">
        <p className="cursor-pointer leading-[19.6px]">Scholarships</p>
      </a>
    </div>
  );
}

function DivCol3() {
  return (
    <div className="flex-[1_0_0] max-w-[990px] min-h-px min-w-px relative self-stretch" data-name="div.col-3">
      <PFsMedium1 />
      <PMbSpaceXxs5 />
      <PMbSpaceXxs6 />
      <PMb1 />
    </div>
  );
}

function PFsMedium2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] right-[15px] top-[-1px]" data-name="p.fs-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Admission</p>
      </div>
    </div>
  );
}

function PMbSpaceXxs7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[46.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/admission/first-year/">
        <p className="cursor-pointer leading-[19.6px]">First year</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[78.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/admission/transfer/">
        <p className="cursor-pointer leading-[19.6px]">Transfer</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[110.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://starbucks.asu.edu/">
        <p className="cursor-pointer leading-[19.6px]">Starbucks</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[142.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/admission/home-school/">
        <p className="cursor-pointer leading-[19.6px]">Home School</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[174.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/admission/international/">
        <p className="cursor-pointer leading-[19.6px]">International</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[206.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/admission/graduate/">
        <p className="cursor-pointer leading-[19.6px]">Graduate</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[238.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/admission/military/">
        <p className="cursor-pointer leading-[19.6px]">Military</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[270.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/admission/nondegree/">
        <p className="cursor-pointer leading-[19.6px]">Nondegree</p>
      </a>
    </div>
  );
}

function PMb2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[302.4px]" data-name="p.mb-0">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/admission/undecided/">
        <p className="cursor-pointer leading-[19.6px]">Undecided</p>
      </a>
    </div>
  );
}

function DivCol4() {
  return (
    <div className="flex-[1_0_0] max-w-[990px] min-h-px min-w-px relative self-stretch" data-name="div.col-3">
      <PFsMedium2 />
      <PMbSpaceXxs7 />
      <PMbSpaceXxs8 />
      <PMbSpaceXxs9 />
      <PMbSpaceXxs10 />
      <PMbSpaceXxs11 />
      <PMbSpaceXxs12 />
      <PMbSpaceXxs13 />
      <PMbSpaceXxs14 />
      <PMb2 />
    </div>
  );
}

function PFsMedium3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] right-[15px] top-[-1px]" data-name="p.fs-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Student Experience</p>
      </div>
    </div>
  );
}

function PMbSpaceXxs15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[46.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/students/courses/">
        <p className="cursor-pointer leading-[19.6px]">Online Learning</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[78.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/students/online-labs/">
        <p className="cursor-pointer leading-[19.6px]">Science Labs</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[110.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/students/reviews/">
        <p className="cursor-pointer leading-[19.6px]">Reviews</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[142.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/students/services/">
        <p className="cursor-pointer leading-[19.6px]">Student Services</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[174.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/students/community/">
        <p className="cursor-pointer leading-[19.6px]">Student Community</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[206.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/students/tutoring/">
        <p className="cursor-pointer leading-[19.6px]">Tutoring</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[238.4px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/students/study-abroad/">
        <p className="cursor-pointer leading-[19.6px]">Study Abroad</p>
      </a>
    </div>
  );
}

function PMb3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[270.4px]" data-name="p.mb-0">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/students/graduation-beyond/">
        <p className="cursor-pointer leading-[19.6px]">{`Graduation & Careers`}</p>
      </a>
    </div>
  );
}

function DivCol5() {
  return (
    <div className="flex-[1_0_0] max-w-[990px] min-h-px min-w-px relative self-stretch" data-name="div.col-3">
      <PFsMedium3 />
      <PMbSpaceXxs15 />
      <PMbSpaceXxs16 />
      <PMbSpaceXxs17 />
      <PMbSpaceXxs18 />
      <PMbSpaceXxs19 />
      <PMbSpaceXxs20 />
      <PMbSpaceXxs21 />
      <PMb3 />
    </div>
  );
}

function DivRow3() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start pb-[48px] relative shrink-0 w-full" data-name="div.row">
      <DivCol2 />
      <DivCol3 />
      <DivCol4 />
      <DivCol5 />
    </div>
  );
}

function PFsMedium4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] right-[15px] top-[-1px]" data-name="p.fs-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">About</p>
      </div>
    </div>
  );
}

function PMbSpaceXxs22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[38.39px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/about-us/why-asu-online/">
        <p className="cursor-pointer leading-[19.6px]">Why ASU Online</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[70.39px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/about-us/">
        <p className="cursor-pointer leading-[19.6px]">About</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[102.39px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/about-us/rankings/">
        <p className="cursor-pointer leading-[19.6px]">Rankings</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[134.39px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/about-us/faculty/">
        <p className="cursor-pointer leading-[19.6px]">Faculty</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[166.39px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/about-us/accreditation/">
        <p className="cursor-pointer leading-[19.6px]">Accreditation</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[198.39px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/about-us/faq/">
        <p className="cursor-pointer leading-[19.6px]">FAQ</p>
      </a>
    </div>
  );
}

function PMb4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[230.39px]" data-name="p.mb-0">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/about-us/contact-us/">
        <p className="cursor-pointer leading-[19.6px]">Contact</p>
      </a>
    </div>
  );
}

function DivCol6() {
  return (
    <div className="max-w-[990px] relative self-stretch shrink-0 w-[247.5px]" data-name="div.col-3">
      <PFsMedium4 />
      <PMbSpaceXxs22 />
      <PMbSpaceXxs23 />
      <PMbSpaceXxs24 />
      <PMbSpaceXxs25 />
      <PMbSpaceXxs26 />
      <PMbSpaceXxs27 />
      <PMb4 />
    </div>
  );
}

function PFsMedium5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] right-[15px] top-[-1px]" data-name="p.fs-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Newsroom</p>
      </div>
    </div>
  );
}

function PMbSpaceXxs28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[38.39px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/newsroom/asu-online-news/">
        <p className="cursor-pointer leading-[19.6px]">ASU Online News</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[70.39px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/newsroom/leading-educators/">
        <p className="cursor-pointer leading-[19.6px]">Leading Educators</p>
      </a>
    </div>
  );
}

function PMbSpaceXxs30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[102.39px]" data-name="p.mb-space-xxs">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/newsroom/online-learning-tips/">
        <p className="cursor-pointer leading-[19.6px]">Online Learning Tips</p>
      </a>
    </div>
  );
}

function PMb5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] py-[2px] right-[15px] top-[134.39px]" data-name="p.mb-0">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" href="https://asuonline.asu.edu/newsroom/sun-devil-life/">
        <p className="cursor-pointer leading-[19.6px]">Sun Devil Life</p>
      </a>
    </div>
  );
}

function DivCol7() {
  return (
    <div className="max-w-[990px] relative self-stretch shrink-0 w-[247.5px]" data-name="div.col-3">
      <PFsMedium5 />
      <PMbSpaceXxs28 />
      <PMbSpaceXxs29 />
      <PMbSpaceXxs30 />
      <PMb5 />
    </div>
  );
}

function DivRow4() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start relative shrink-0 w-full" data-name="div.row">
      <DivCol6 />
      <DivCol7 />
    </div>
  );
}

function DivDNone() {
  return (
    <div className="content-stretch flex flex-col gap-[0.01px] h-[628.78px] items-start max-w-[1320px] relative shrink-0 w-[990px]" data-name="div.d-none">
      <DivRow3 />
      <DivRow4 />
    </div>
  );
}

function DivRow2() {
  return (
    <div className="content-end flex flex-wrap gap-0 items-end relative shrink-0 w-full" data-name="div.row">
      <div className="flex flex-row items-end self-stretch">
        <DivCol11 />
      </div>
      <DivDNone />
    </div>
  );
}

function SectionBgDark() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="section.bg-dark-3">
      <div className="content-stretch flex flex-col items-start pb-[48px] pt-[47.375px] px-[60px] relative w-full">
        <DivRow2 />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div">
      <DivBgDark />
      <SectionBgDark />
    </div>
  );
}

function ANavLink() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/about/locations-maps">
        <p className="cursor-pointer leading-[24px]">Maps and Locations</p>
      </a>
    </div>
  );
}

function ANavLink1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/asujobs">
        <p className="cursor-pointer leading-[24px]">Jobs</p>
      </a>
    </div>
  );
}

function ANavLink2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://isearch.asu.edu/asu-people/">
        <p className="cursor-pointer leading-[24px]">Directory</p>
      </a>
    </div>
  );
}

function ANavLink3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/about/contact">
        <p className="cursor-pointer leading-[24px]">Contact ASU</p>
      </a>
    </div>
  );
}

function ANavLink4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://my.asu.edu/">
        <p className="cursor-pointer leading-[24px]">My ASU</p>
      </a>
    </div>
  );
}

function NavNav() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-wrap gap-0 items-start min-h-px min-w-px relative" data-name="nav.nav">
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
    <div className="h-[100.5px] max-w-[320px] relative shrink-0 w-[320px]" data-name="Repeatedly ranked #1 on 30+ lists in the last 3 years">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[52.24%] left-0 max-w-none top-[23.88%] w-full" src={imgRepeatedlyRanked1On30ListsInTheLast3Years} />
      </div>
    </div>
  );
}

function DivDFlex2() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="div.d-flex">
      <NavNav />
      <RepeatedlyRanked1On30ListsInTheLast3Years />
    </div>
  );
}

function DivCol() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <DivDFlex2 />
      </div>
    </div>
  );
}

function DivRow5() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center relative shrink-0 w-full" data-name="div.row">
      <DivCol />
    </div>
  );
}

function SectionBgSecondary() {
  return (
    <div className="bg-[#ffc627] relative shrink-0 w-full" data-name="section.bg-secondary">
      <div className="content-stretch flex flex-col items-start px-[60px] relative w-full">
        <DivRow5 />
      </div>
    </div>
  );
}

function ANavLink5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/about/copyright-trademark">
        <p className="cursor-pointer leading-[24px]">Copyright and Trademark</p>
      </a>
    </div>
  );
}

function ANavLink6() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://accessibility.asu.edu/report">
        <p className="cursor-pointer leading-[24px]">Accessibility</p>
      </a>
    </div>
  );
}

function ANavLink7() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/privacy/">
        <p className="cursor-pointer leading-[24px]">Privacy</p>
      </a>
    </div>
  );
}

function ANavLink8() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/tou/">
        <p className="cursor-pointer leading-[24px]">Terms of Use</p>
      </a>
    </div>
  );
}

function ANavLink9() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/emergency/">
        <p className="cursor-pointer leading-[24px]">Emergency</p>
      </a>
    </div>
  );
}

function ButtonManualConsentoptout() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="button#manualConsentoptout">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">Manage my privacy settings</p>
      </div>
    </div>
  );
}

function UniversityLegalAndCompliance() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-full" data-name="University Legal and Compliance">
      <ANavLink5 />
      <ANavLink6 />
      <ANavLink7 />
      <ANavLink8 />
      <ANavLink9 />
      <ButtonManualConsentoptout />
    </div>
  );
}

function DivCol1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <UniversityLegalAndCompliance />
      </div>
    </div>
  );
}

function DivRow6() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center relative shrink-0 w-full" data-name="div.row">
      <DivCol1 />
    </div>
  );
}

function SectionPbSpaceXl() {
  return (
    <div className="bg-[#f1f1f1] relative shrink-0 w-full" data-name="section.pb-space-xl">
      <div className="content-stretch flex flex-col items-start px-[60px] py-[16px] relative w-full">
        <DivRow6 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1001.655px] items-start left-0 top-[359.39px] w-[1692px]" data-name="footer">
      <Div />
      <SectionBgSecondary />
      <SectionPbSpaceXl />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="relative size-full">
      <Frame4 />
      <div className="absolute bottom-0 h-[1065.045654296875px] left-0 pointer-events-none top-[296px]">
        <SectionBgWhite />
      </div>
      <Footer />
    </div>
  );
}