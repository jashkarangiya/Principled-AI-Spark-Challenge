import svgPaths from "./svg-0xbavvj8od";
import imgArizonaStateUniversity from "figma:asset/3be6e3ff51aea25610418a0776cc98d56609b97a.png";
import imgTwoOnlineAccountingDegreeStudentsCollaborateWhileWorkingTogetherOnALaptop from "figma:asset/ed0ce36e138797efb99a7df1929414f74932f5ee.png";

function LiNavItem() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8.3px] pl-[16px] pr-[8px] pt-[7.5px] relative shrink-0" data-name="li.nav-item">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap" href="https://asu.edu/">
        <p className="cursor-pointer leading-[16.8px]">ASU Home</p>
      </a>
    </div>
  );
}

function LiNavItem1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8.3px] pl-[16px] pr-[8px] pt-[7.5px] relative shrink-0" data-name="li.nav-item">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap" href="https://my.asu.edu/">
        <p className="cursor-pointer leading-[16.8px]">My ASU</p>
      </a>
    </div>
  );
}

function LiNavItem2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8.3px] pl-[16px] pr-[8px] pt-[7.5px] relative shrink-0" data-name="li.nav-item">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap" href="https://asu.edu/about/colleges-and-schools/">
        <p className="cursor-pointer leading-[16.8px]">Colleges and Schools</p>
      </a>
    </div>
  );
}

function LiNavItem3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8.3px] pl-[16px] pr-[8px] pt-[7.5px] relative shrink-0" data-name="li.nav-item">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap" href="https://weblogin.asu.edu/cgi-bin/login">
        <p className="cursor-pointer leading-[16.8px]">Sign in</p>
      </a>
    </div>
  );
}

function UlNav() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0" data-name="ul.nav">
      <LiNavItem />
      <LiNavItem1 />
      <LiNavItem2 />
      <LiNavItem3 />
    </div>
  );
}

function OpenSearch() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="open search">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14.0021">
        <g id="open search">
          <path d={svgPaths.pf6c2180} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function OpenAsuSearch() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2.25px] pt-[3.75px] px-[6px] relative shrink-0 size-[20px]" data-name="open ASU search">
      <OpenSearch />
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2px] overflow-clip right-[2px] top-[6.5px]" data-name="div#placeholder">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Search ASU</p>
      </div>
    </div>
  );
}

function DivEditingViewPort() {
  return <div className="flex-[1_0_0] h-[27px] min-h-px min-w-px" data-name="div#editing-view-port" />;
}

function DivTextFieldContainer() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[2px] right-[2px] top-[1.5px]" data-name="div#text-field-container">
      <DivEditingViewPort />
    </div>
  );
}

function SearchAsu() {
  return (
    <div className="absolute bg-white bottom-0 left-0 opacity-0 overflow-clip top-0 w-[160px]" data-name="search ASU">
      <DivPlaceholder />
      <DivTextFieldContainer />
    </div>
  );
}

function DivSearchBar() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip p-[3px] relative shrink-0 size-[30px]" data-name="div.search-bar">
      <OpenAsuSearch />
      <SearchAsu />
    </div>
  );
}

function DivNavSearch() {
  return (
    <div className="content-stretch flex items-center justify-end py-[3px] relative shrink-0 w-full" data-name="div.nav-search">
      <UlNav />
      <DivSearchBar />
    </div>
  );
}

function DivCol() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <DivNavSearch />
      </div>
    </div>
  );
}

function DivRow() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center relative shrink-0 w-full" data-name="div.row">
      <DivCol />
    </div>
  );
}

function DivDNone() {
  return (
    <div className="bg-[#f1f1f1] relative shrink-0 w-full" data-name="div.d-none">
      <div className="content-stretch flex flex-col items-start px-[60px] relative w-full">
        <DivRow />
      </div>
    </div>
  );
}

function ArizonaStateUniversity() {
  return (
    <div className="h-[72px] relative shrink-0 w-[93.22px]" data-name="Arizona State University">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.01%] max-w-none top-0 w-[100.01%]" src={imgArizonaStateUniversity} />
      </div>
    </div>
  );
}

function APbSpaceXs() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-start pr-[16px] py-[16px] relative self-stretch shrink-0" data-name="a.pb-space-xs" href="https://www.asu.edu/">
      <ArizonaStateUniversity />
    </a>
  );
}

function AUnitLink() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="a.unit-link">
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[36px] tracking-[-0.56px] w-full" href="https://asuonline.asu.edu/">
        <p className="cursor-pointer leading-[36px] whitespace-pre-wrap">ASU Online</p>
      </a>
    </div>
  );
}

function PMbSpaceXxxs() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="p.mb-space-xxxs">
      <AUnitLink />
    </div>
  );
}

function PMbSpaceXxxsMargin() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center pb-[4px] relative shrink-0 w-full" data-name="p.mb-space-xxxs:margin">
      <PMbSpaceXxxs />
    </div>
  );
}

function Home() {
  return (
    <a className="block cursor-pointer h-[16px] relative shrink-0 w-[18px]" data-name="Home" href="https://asuonline.asu.edu/">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16.0031">
        <g id="Home">
          <path d={svgPaths.p269ef870} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </a>
  );
}

function LiNavItem4() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[-8px] pb-[17px] pl-[12px] pr-[14px] pt-[11px] top-0" data-name="li.nav-item">
      <Home />
    </div>
  );
}

function LiNavItemMargin() {
  return (
    <div className="relative self-stretch shrink-0 w-[36px]" data-name="li.nav-item:margin">
      <LiNavItem4 />
    </div>
  );
}

function SpanPeSpaceXxs() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0" data-name="span.pe-space-xxs">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Online Degrees</p>
      </div>
    </div>
  );
}

function OpenDropdown() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Open dropdown">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Open dropdown">
          <path d={svgPaths.p3d0f1180} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivDFlex2() {
  return (
    <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="div.d-flex">
      <SpanPeSpaceXxs />
      <OpenDropdown />
    </div>
  );
}

function ButtonMenuOnlineDegrees() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="button menu#online-degrees-0">
      <DivDFlex2 />
    </div>
  );
}

function DivDropdownNavItem() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[4px] pt-[8px] relative shrink-0" data-name="div.dropdown-nav-item">
      <ButtonMenuOnlineDegrees />
    </div>
  );
}

function LiNavItem5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[4px] relative self-stretch shrink-0" data-name="li.nav-item">
      <DivDropdownNavItem />
      <div className="absolute bg-[#ffc627] bottom-0 h-[8px] left-[4px] w-[139.17px]" data-name="::after" />
    </div>
  );
}

function SpanPeSpaceXxs1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0" data-name="span.pe-space-xxs">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Tuition</p>
      </div>
    </div>
  );
}

function OpenDropdown1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Open dropdown">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Open dropdown">
          <path d={svgPaths.p3d0f1180} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivDFlex3() {
  return (
    <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="div.d-flex">
      <SpanPeSpaceXxs1 />
      <OpenDropdown1 />
    </div>
  );
}

function ButtonMenuTuition() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="button menu#tuition-1">
      <DivDFlex3 />
    </div>
  );
}

function DivDropdownNavItem1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[4px] pt-[8px] relative shrink-0" data-name="div.dropdown-nav-item">
      <ButtonMenuTuition />
    </div>
  );
}

function LiNavItem6() {
  return (
    <div className="content-stretch flex flex-col items-start px-[4px] relative self-stretch shrink-0" data-name="li.nav-item">
      <DivDropdownNavItem1 />
    </div>
  );
}

function ANavLink() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[4px] pt-[8px] px-[8px] relative shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] text-center whitespace-nowrap" href="https://asuonline.asu.edu/admission/">
        <p className="cursor-pointer leading-[24px]">Admission</p>
      </a>
    </div>
  );
}

function LiNavItem7() {
  return (
    <div className="content-stretch flex flex-col items-start px-[4px] relative self-stretch shrink-0" data-name="li.nav-item">
      <ANavLink />
    </div>
  );
}

function SpanPeSpaceXxs2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0" data-name="span.pe-space-xxs">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Student Experience</p>
      </div>
    </div>
  );
}

function OpenDropdown2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Open dropdown">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Open dropdown">
          <path d={svgPaths.p3d0f1180} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivDFlex4() {
  return (
    <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="div.d-flex">
      <SpanPeSpaceXxs2 />
      <OpenDropdown2 />
    </div>
  );
}

function ButtonMenuStudentExperience() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="button menu#student-experience-3">
      <DivDFlex4 />
    </div>
  );
}

function DivDropdownNavItem2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[4px] pt-[8px] relative shrink-0" data-name="div.dropdown-nav-item">
      <ButtonMenuStudentExperience />
    </div>
  );
}

function LiNavItem8() {
  return (
    <div className="content-stretch flex flex-col items-start px-[4px] relative self-stretch shrink-0" data-name="li.nav-item">
      <DivDropdownNavItem2 />
    </div>
  );
}

function ANavLink1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[4px] pt-[8px] px-[8px] relative shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] text-center whitespace-nowrap" href="https://asuonline.asu.edu/newsroom/">
        <p className="cursor-pointer leading-[24px]">Newsroom</p>
      </a>
    </div>
  );
}

function LiNavItem9() {
  return (
    <div className="content-stretch flex flex-col items-start px-[4px] relative self-stretch shrink-0" data-name="li.nav-item">
      <ANavLink1 />
    </div>
  );
}

function SpanPeSpaceXxs3() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0" data-name="span.pe-space-xxs">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">About</p>
      </div>
    </div>
  );
}

function OpenDropdown3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Open dropdown">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Open dropdown">
          <path d={svgPaths.p3d0f1180} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivDFlex5() {
  return (
    <div className="content-stretch flex items-center px-[4px] relative shrink-0" data-name="div.d-flex">
      <SpanPeSpaceXxs3 />
      <OpenDropdown3 />
    </div>
  );
}

function ButtonMenuAbout() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="button menu#about-5">
      <DivDFlex5 />
    </div>
  );
}

function DivDropdownNavItem3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[4px] pt-[8px] relative shrink-0" data-name="div.dropdown-nav-item">
      <ButtonMenuAbout />
    </div>
  );
}

function LiNavItem10() {
  return (
    <div className="content-stretch flex flex-col items-start px-[4px] relative self-stretch shrink-0" data-name="li.nav-item">
      <DivDropdownNavItem3 />
    </div>
  );
}

function UlNavbarNav() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="ul.navbar-nav">
      <LiNavItemMargin />
      <LiNavItem5 />
      <LiNavItem6 />
      <LiNavItem7 />
      <LiNavItem8 />
      <LiNavItem9 />
      <LiNavItem10 />
    </div>
  );
}

function PrimaryNavigation() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0" data-name="primary navigation">
      <UlNavbarNav />
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <PrimaryNavigation />
    </div>
  );
}

function ABtn() {
  return (
    <div className="bg-[#ffc627] content-stretch flex items-start justify-center px-[17px] py-[9px] relative rounded-[804px] shrink-0" data-name="a.btn">
      <div aria-hidden="true" className="absolute border border-[#ffc627] border-solid inset-0 pointer-events-none rounded-[804px]" />
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap" href="https://webapp4.asu.edu/uga_admissionsapp/">
        <p className="cursor-pointer leading-[19.6px]">Apply now</p>
      </a>
    </div>
  );
}

function DivFsMediumMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="div.fs-medium:margin">
      <ABtn />
    </div>
  );
}

function ABtn1() {
  return (
    <div className="bg-[#ffc627] content-stretch flex flex-col items-center px-[17px] py-[9px] relative rounded-[804px] shrink-0" data-name="a.btn">
      <div aria-hidden="true" className="absolute border border-[#ffc627] border-solid inset-0 pointer-events-none rounded-[804px]" />
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-rfi">
        <p className="cursor-pointer leading-[19.6px]">Request info</p>
      </a>
    </div>
  );
}

function ABtnMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="a.btn:margin">
      <ABtn1 />
    </div>
  );
}

function DivDFlex6() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-0 top-[-16px]" data-name="div.d-flex">
      <DivFsMediumMargin />
      <ABtnMargin />
    </div>
  );
}

function DivDFlexMargin() {
  return (
    <div className="h-[29.59px] relative shrink-0 w-[255.56px]" data-name="div.d-flex:margin">
      <DivDFlex6 />
    </div>
  );
}

function DivDFlex1() {
  return (
    <div className="content-stretch flex h-[44px] items-end justify-between relative shrink-0 w-full" data-name="div.d-flex">
      <Div />
      <DivDFlexMargin />
    </div>
  );
}

function DivPtSpaceSm() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pt-[24px] relative self-stretch" data-name="div.pt-space-sm">
      <PMbSpaceXxxsMargin />
      <DivDFlex1 />
    </div>
  );
}

function DivDFlex() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <APbSpaceXs />
      <DivPtSpaceSm />
    </div>
  );
}

function DivCol1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <DivDFlex />
      </div>
    </div>
  );
}

function DivRow1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-wrap items-start justify-center relative w-full">
        <DivCol1 />
      </div>
    </div>
  );
}

function DivDNone1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.d-none">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px px-[60px] relative w-full">
        <DivRow1 />
      </div>
    </div>
  );
}

function HeaderBgWhite() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header.bg-white">
      <DivDNone />
      <DivDNone1 />
    </div>
  );
}

function DivCol2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[47px] py-[32px] relative w-full">
        <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[48px] tracking-[-1.68px] whitespace-nowrap">
          <p className="leading-[57.6px]">Career Title</p>
        </div>
      </div>
    </div>
  );
}

function DivBgWhite() {
  return (
    <div className="bg-white content-start flex flex-wrap items-start mb-[-96px] relative shrink-0 w-[1304px]" data-name="div.bg-white">
      <DivCol2 />
    </div>
  );
}

function SectionProgramIntro() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex flex-col items-center pb-[144px] relative shrink-0 w-full" data-name="section#program-intro">
      <div className="h-[512px] mb-[-96px] relative shrink-0 w-full" data-name="Two online accounting degree students collaborate while working together on a laptop.">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[187.67%] left-0 max-w-none top-0 w-full" src={imgTwoOnlineAccountingDegreeStudentsCollaborateWhileWorkingTogetherOnALaptop} />
        </div>
      </div>
      <DivBgWhite />
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#ffc627] relative rounded-[26843500px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#191919] text-[14px]">1</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text />
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#191919] text-[16px] whitespace-pre-wrap">Conduct sustainability audits and carbon footprint assessments for organizations.</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#ffc627] relative rounded-[26843500px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#191919] text-[14px]">2</p>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text1 />
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#191919] text-[16px] whitespace-pre-wrap">Develop strategies for reducing environmental impact and improving ESG metrics.</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#ffc627] relative rounded-[26843500px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#191919] text-[14px]">3</p>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text2 />
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#191919] text-[16px] whitespace-pre-wrap">Analyze energy usage data and recommend efficiency improvements.</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#ffc627] relative rounded-[26843500px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#191919] text-[14px]">4</p>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text3 />
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#191919] text-[16px] whitespace-pre-wrap">Prepare sustainability reports and communicate findings to stakeholders.</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#ffc627] relative rounded-[26843500px] shrink-0 size-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#191919] text-[14px]">5</p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text4 />
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#191919] text-[16px] whitespace-pre-wrap">Prepare sustainability reports and communicate findings to stakeholders.</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <List />
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="p">
      <Container />
    </div>
  );
}

function DivCardBody() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.card-body">
      <div className="content-stretch flex flex-col gap-[24px] items-start pl-[47px] pr-[32px] py-[32px] relative w-full">
        <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[32px] tracking-[-0.6px] w-full">
          <p className="leading-[28.8px] whitespace-pre-wrap">What you may do in this career</p>
        </div>
        <P />
      </div>
    </div>
  );
}

function PFsSmall() {
  return (
    <div className="bg-[#191919] content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="p.fs-small">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[19.6px]">Growth and salary</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start not-italic px-[24px] py-[16px] relative text-[#191919] w-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[40px] relative shrink-0 text-[18px]">+8%</p>
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] relative shrink-0 text-[12px]">10-year growth</p>
      </div>
    </div>
  );
}

function Frame3() {
  return <div className="bg-[#d0d0d0] self-stretch shrink-0 w-px" />;
}

function Container3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start not-italic px-[24px] py-[16px] relative text-[#191919] w-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[40px] relative shrink-0 text-[18px]">2,100</p>
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] relative shrink-0 text-[12px]">Annual job openings</p>
      </div>
    </div>
  );
}

function Frame4() {
  return <div className="bg-[#d0d0d0] self-stretch shrink-0 w-px" />;
}

function Container4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start not-italic px-[24px] py-[16px] relative text-[#191919] w-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[40px] relative shrink-0 text-[18px]">42%</p>
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] relative shrink-0 text-[12px]">AI risk</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <Container2 />
      <Frame3 />
      <Container3 />
      <Frame4 />
      <Container4 />
    </div>
  );
}

function Divider() {
  return <div className="bg-[#d0d0d0] h-px shrink-0 w-full" data-name="Divider" />;
}

function Component() {
  return (
    <div className="absolute h-[12px] left-0 top-0 w-[7.5px]" data-name="$">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12">
        <g id="$">
          <path d={svgPaths.p284c8f00} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[12px] left-[7.5px] top-0 w-[7.5px]" data-name="$">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12">
        <g id="$">
          <path d={svgPaths.p284c8f00} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="$$ Icon">
      <Component />
      <Component1 />
    </div>
  );
}

function ListEntry() {
  return (
    <div className="relative shrink-0 w-[252px]" data-name="List Entry">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Icon />
        <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Entry level salary</p>
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[57.838px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">$48,000</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[40.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <ListEntry />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return <div className="bg-[#d0d0d0] h-px shrink-0 w-full" data-name="Divider" />;
}

function Component2() {
  return (
    <div className="absolute h-[12px] left-0 top-0 w-[7.5px]" data-name="$">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12">
        <g id="$">
          <path d={svgPaths.p284c8f00} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute h-[12px] left-[7.5px] top-0 w-[7.5px]" data-name="$">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12">
        <g id="$">
          <path d={svgPaths.p284c8f00} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="$$ Icon">
      <Component2 />
      <Component3 />
    </div>
  );
}

function ListEntry1() {
  return (
    <div className="relative shrink-0 w-[252px]" data-name="List Entry">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Icon1 />
        <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Median salary</p>
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[72.3px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#8c1d40] text-[20px] top-[-0.6px]">$76,530</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[44.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <ListEntry1 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Divider2() {
  return <div className="bg-[#d0d0d0] h-px shrink-0 w-full" data-name="Divider" />;
}

function Component4() {
  return (
    <div className="absolute h-[12px] left-0 top-0 w-[7.5px]" data-name="$">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12">
        <g id="$">
          <path d={svgPaths.p284c8f00} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute h-[12px] left-[7.5px] top-0 w-[7.5px]" data-name="$">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12">
        <g id="$">
          <path d={svgPaths.p284c8f00} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="$$ Icon">
      <Component4 />
      <Component5 />
    </div>
  );
}

function ListEntry2() {
  return (
    <div className="relative shrink-0 w-[252px]" data-name="List Entry">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Icon2 />
        <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Top earner salary</p>
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[24px] left-0 top-[-0.6px] w-[66.738px]" data-name="Text">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">$129,550</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[28px] relative shrink-0 w-[72.3px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text8 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[44.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <ListEntry2 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Divider />
      <Container6 />
      <Divider1 />
      <Container7 />
      <Divider2 />
      <Container8 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f1f1f1] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-l-8 border-solid inset-[0_0_0_-8px] pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <PFsSmall />
        <Frame2 />
        <Container5 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
        <Container1 />
      </div>
    </div>
  );
}

function DayInLifeSalaryGrowth() {
  return (
    <div className="bg-white content-stretch flex items-start py-[24px] relative shrink-0 w-[1318px]" data-name="Day in life + Salary/Growth">
      <DivCardBody />
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex flex-col items-center overflow-clip px-[60px] relative shrink-0">
      <DayInLifeSalaryGrowth />
    </div>
  );
}

export default function AsuoDesktop() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="ASUO Desktop">
      <HeaderBgWhite />
      <SectionProgramIntro />
      <Frame />
    </div>
  );
}