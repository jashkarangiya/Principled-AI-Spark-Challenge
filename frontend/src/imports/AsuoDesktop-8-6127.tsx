import svgPaths from "./svg-771ck16r8o";
import imgArizonaStateUniversity from "figma:asset/3be6e3ff51aea25610418a0776cc98d56609b97a.png";
import imgTwoOnlineAccountingDegreeStudentsCollaborateWhileWorkingTogetherOnALaptop from "figma:asset/ed0ce36e138797efb99a7df1929414f74932f5ee.png";
import imgDivColLg5 from "figma:asset/6e533155487084327ffaec14ba37da6dc9ec2309.png";
import imgCardImage from "figma:asset/2c9cdd172a089dae4196d2e41e306c8d547f3e5b.png";
import imgSectionProgramCourses from "figma:asset/246706e29030f783e2d25b7656d4d29484ca9389.png";
import imgDivCol from "figma:asset/e8c95aaa5e52c5a9011ad05b48d1af985269e230.png";
import imgDivCol12 from "figma:asset/34ecfad1eef9f726519a4dab92f60e5a71329bca.png";
import imgDivCol13 from "figma:asset/26ee336cf97aa604864caef249eb20e906ae8b80.png";
import imgDivCol1 from "figma:asset/d9993b194d5d83eef702d4a2cb7fd0a10a248597.png";
import imgDivCol14 from "figma:asset/728fce211c26b78799b819870a0bf5980e20b723.png";
import imgBusinessAccountingAndBusinessDecisionsBa from "figma:asset/c918ea812d425535ac293c390dc6857f81a3dea7.png";
import imgBusinessBusinessAdministrationBa from "figma:asset/5c3df7bc056cf0a7a2c145a06887a3a068f28c54.png";
import imgEconomicsBsBusiness from "figma:asset/b9319d6707cb6f5e7a6302f22f8addf64cbeb131.png";
import imgBusinessFinancialPlanningBa from "figma:asset/9c16b99ff363e9465f82b5694c63d6a5f9619f71.png";
import imgAsuOnline from "figma:asset/cd09da2a96204938270dfd11e4f75ca7a2a9fb47.png";
import imgRepeatedlyRanked1On30ListsInTheLast3Years from "figma:asset/904126d9185baab1838c2812e90445690e55a6fe.png";

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

function DivCol12() {
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
      <DivCol12 />
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
      <a className="cursor-pointer flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-rfi">
        <p className="leading-[19.6px]">Request info</p>
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

function DivCol13() {
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
        <DivCol13 />
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

function H1H1Medium() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[31.295px] right-0 top-0" data-name="h1.h1-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[57.6px] not-italic relative shrink-0 text-[#191919] text-[48px] tracking-[-1.68px] whitespace-nowrap">
        <p className="mb-0">Online Bachelor of Science in</p>
        <p>Accountancy</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[171.18px]" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p className="mb-0">Arizona State University’s Bachelor of Science in accountancy is ranked among the best programs in the</p>
        <p className="mb-0">{`nation by U.S. News & World Report and Public Accounting Report. As the highest-rated undergraduate`}</p>
        <p className="mb-0">accounting program offered online, you’ll benefit from ASU’s state-of-the-art curriculum and real-world</p>
        <p>environment.</p>
      </div>
    </div>
  );
}

function DivMxSpaceSm() {
  return (
    <div className="h-[307.19px] relative shrink-0 w-full" data-name="div.mx-space-sm">
      <H1H1Medium />
      <P />
      <a className="-translate-y-1/2 absolute cursor-pointer flex flex-col font-['Arial:Regular',sans-serif] h-[23px] justify-center leading-[0] left-0 not-italic text-[#8c1d40] text-[16px] text-left top-[294.68px] w-[82.156px]" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-detail">
        <p className="decoration-solid leading-[22.4px] underline whitespace-pre-wrap">Learn more</p>
      </a>
    </div>
  );
}

function DivCol14() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1304px] px-[47px] relative self-stretch shrink-0 w-[869.33px]" data-name="div.col-12">
      <DivMxSpaceSm />
    </div>
  );
}

function PFsSmall() {
  return (
    <div className="absolute bg-[#191919] content-stretch flex items-start left-[32px] px-[8px] py-[4px] top-[48px]" data-name="p.fs-small">
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

function DivDFlex7() {
  return (
    <div className="absolute content-stretch flex items-start left-[32px] right-[32px] top-[99.59px]" data-name="div.d-flex">
      <NextStartDateMargin />
      <PTextDark />
    </div>
  );
}

function HrTextDark() {
  return <div className="absolute border-[#d0d0d0] border-solid border-t h-px left-[32px] right-[32px] top-[139.59px]" data-name="hr.text-dark-3" />;
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

function DivDFlex8() {
  return (
    <div className="absolute content-stretch flex items-start left-[32px] right-[32px] top-[156.59px]" data-name="div.d-flex">
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

function DivDFlex9() {
  return (
    <div className="absolute content-stretch flex items-start left-[32px] right-[32px] top-[188.59px]" data-name="div.d-flex">
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

function DivDFlex10() {
  return (
    <div className="absolute content-stretch flex items-start left-[32px] right-[32px] top-[220.59px]" data-name="div.d-flex">
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
        <DivDFlex7 />
        <HrTextDark />
        <DivDFlex8 />
        <DivDFlex9 />
        <DivDFlex10 />
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

function DivCol15() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1304px] pl-[39px] pr-[75.66px] py-[32px] relative self-stretch shrink-0 w-[434.66px]" data-name="div.col-12">
      <DivBgLight />
    </div>
  );
}

function DivBgWhite() {
  return (
    <div className="bg-white content-stretch flex flex-wrap gap-0 items-start mb-[-96px] relative shrink-0 w-[1304px]" data-name="div.bg-white">
      <DivCol14 />
      <DivCol15 />
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

function BellIcon() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Bell icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Bell icon">
          <rect fill="var(--fill-0, #FFC627)" height="27" rx="13.5" width="27" />
          <path d={svgPaths.p2d3e2a00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Arial:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#191919] text-[16.579px]">
        <span className="font-['Arial:Bold',sans-serif] leading-[normal]">{`Looking to attend in person? `}</span>
        <span className="leading-[normal]">This program is also available for campus students.</span>
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <BellIcon />
      <Frame41 />
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

function Frame42() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[48px] items-center left-[calc(50%+0.22px)] top-[34px]">
      <Frame43 />
      <Btn />
    </div>
  );
}

function FeedbackComponentCtaCallOutCalloutPastel1NaaXd() {
  return (
    <div className="absolute bg-white border border-[#d0d0d0] border-solid h-[115px] left-[67px] overflow-clip top-[16.61px] w-[1306px]" data-name="Feedback component , cta, call-out, callout, pastel 1 - naa - xd">
      <Frame42 />
      <div className="absolute inset-[-1px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Notifcation() {
  return (
    <div className="bg-[#f1f1f1] h-[149px] overflow-clip relative shrink-0 w-full" data-name="Notifcation">
      <FeedbackComponentCtaCallOutCalloutPastel1NaaXd />
    </div>
  );
}

function H2H2Medium() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.h2-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[36px] tracking-[-1.26px] w-full">
        <p className="leading-[43.2px] whitespace-pre-wrap">Degree questions, answered</p>
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
          <span className="leading-[22.4px]">? Fill out this form and we’ll get</span>
        </p>
        <p className="leading-[22.4px]">in touch!</p>
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
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[494.39px]" data-name="p.fs-xs">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">
        <p className="leading-[16.8px] mb-0">By submitting my information, I consent to ASU contacting me about educational services using</p>
        <p className="leading-[16.8px] mb-0">automated calls, prerecorded voice messages, SMS/text messages or email at the information provided</p>
        <p className="leading-[16.8px] mb-0">above. Message and data rates may apply. Consent is not required to receive services, and I may call</p>
        <p className="mb-0">
          <span className="leading-[16.8px]">{`ASU directly at `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16.8px] text-[#8c1d40] underline">866-277-6589</span>
          <span className="leading-[16.8px]">{`. I consent to ASU’s `}</span>
          <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16.8px] text-[#8c1d40] underline" href="https://asuonline.asu.edu/text-terms/">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16.8px]" href="https://asuonline.asu.edu/text-terms/">
              mobile terms and conditions
            </span>
          </a>
          <span className="leading-[16.8px]">{`, and `}</span>
          <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[16.8px] text-[#8c1d40] underline" href="https://asuonline.asu.edu/web-analytics-privacy-2/">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16.8px]" href="https://asuonline.asu.edu/web-analytics-privacy-2/">
              Privacy Statements
            </span>
          </a>
          <span className="leading-[16.8px]">,</span>
        </p>
        <p className="leading-[16.8px]">including the European Supplement.</p>
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

function DivPlaceholder1() {
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
    <div className="bg-white relative shrink-0 w-[557.33px]" data-name="input#program-rfi_first-name">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[16px] py-[11px] relative rounded-[inherit] w-full">
        <DivPlaceholder1 />
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

function DivPlaceholder2() {
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
        <DivPlaceholder2 />
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

function DivPlaceholder3() {
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
        <DivPlaceholder3 />
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

function Div1() {
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
          <Div1 />
        </div>
      </div>
    </div>
  );
}

function SpanMInputLabel() {
  return (
    <div className="absolute h-[19.2px] left-[12px] overflow-clip top-[2.68px] w-[103.04px]" data-name="span.m-input-label">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[20px] justify-center leading-[0] left-0 not-italic text-[12.8px] text-[rgba(0,0,0,0.54)] top-[9.2px] w-[76.447px]">
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
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[144px]" data-name="div.m-select">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.m-country-selector">
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
    <div className="absolute content-stretch flex flex-col items-start left-[12px] overflow-clip pr-[12px] top-[11px] w-[403.33px]" data-name="span.m-input-label">
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
    <div className="absolute content-stretch flex flex-col h-[48px] items-start justify-center left-[-2px] min-w-[208px] right-0 top-0" data-name="div.m-input">
      <DivMInputWrapper1 />
    </div>
  );
}

function DivMInputMargin() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-[206px] relative" data-name="div.m-input:margin">
      <DivMInput1 />
    </div>
  );
}

function DivMPhoneNumberInput() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="div.m-phone-number-input">
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
    <div className="absolute content-stretch flex flex-col inset-[-1px_0_66px_0] items-start" data-name="label.fw-bold">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">* Have you served in the U.S. military or are you a military dependent?</p>
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
    <div className="absolute bottom-[24px] content-stretch flex flex-col items-start justify-center left-0 min-h-[26px] pb-[2px] top-[38.39px]" data-name="div.form-check:margin">
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
    <div className="absolute bottom-[24px] left-[66.11px] top-[38.39px] w-[44.45px]" data-name="div.form-check:margin">
      <DivFormCheck1 />
    </div>
  );
}

function DivMilitaryGroup() {
  return (
    <div className="absolute h-[88.39px] left-0 right-0 top-[406px]" data-name="div#military-group">
      <LabelFwBold1 />
      <DivFormCheckMargin />
      <DivFormCheckMargin1 />
    </div>
  );
}

function DivProgramRfiFormFields() {
  return (
    <div className="h-[579.18px] relative shrink-0 w-full" data-name="div#program-rfi_form-fields">
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
        <div className="content-stretch flex flex-col items-center justify-center px-[25px] py-[17px] relative w-full">
          <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap">
            <p className="leading-[33.6px]">Submit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivCol17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <ButtonBtn />
    </div>
  );
}

function DivRow3() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center pt-[8.8px] relative shrink-0 w-full" data-name="div.row">
      <DivCol17 />
    </div>
  );
}

function DivPySpaceMd() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.py-space-md">
      <div className="content-stretch flex flex-col gap-[23.2px] items-start px-[96px] py-[64px] relative w-full">
        <H2H2Medium />
        <PMbSpaceSm />
        <PMbSpaceSm1 />
        <DivProgramRfiFormFields />
        <DivRow3 />
      </div>
    </div>
  );
}

function DivCol16() {
  return (
    <div className="bg-white h-[986.955px] max-w-[1290px] relative shrink-0 w-[751.33px]" data-name="div.col-12">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <DivPySpaceMd />
      </div>
    </div>
  );
}

function DivRow2() {
  return (
    <div className="bg-white content-start flex flex-wrap gap-0 items-start p-px relative shrink-0 w-full" data-name="div.row">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <div className="h-[986.955px] max-w-[1290px] min-h-[884px] relative shrink-0 w-[536.66px]" data-name="div.col-lg-5">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.4%] max-w-none top-0 w-[100.81%]" src={imgDivColLg5} />
        </div>
      </div>
      <DivCol16 />
    </div>
  );
}

function SectionProgramRfi() {
  return (
    <div className="bg-[#f1f1f1] relative shrink-0 w-full" data-name="section#program-rfi">
      <div className="content-stretch flex flex-col items-start pb-[64px] pt-[48px] px-[75px] relative w-full">
        <DivRow2 />
      </div>
    </div>
  );
}

function H2DegreeDetail() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] right-[15px] top-0" data-name="h2#degree-detail">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[36px] tracking-[-1.26px] whitespace-nowrap">
        <p className="leading-[43.2px]">Earn an accredited accounting degree online</p>
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Accredited by the Association to Advance Collegiate Schools of Business (AACSB), this program delivers the critical thinking, team-</p>
        <p className="mb-0">building, communication and information technology skills needed to thrive in your career. All of that, plus close ties with major local,</p>
        <p className="mb-0">national and international accounting firms, provide a competitive edge in the job market. Upon graduating from this program, you’ll be</p>
        <p>prepared for careers in public, corporate and governmental accounting or personal financial planning and portfolio analysis.</p>
      </div>
    </div>
  );
}

function P2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[24px]">{`Additionally, this bachelor’s degree can be completed as part of an `}</span>
          <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[24px] text-[#8c1d40] underline" href="https://asuonline.asu.edu/newsroom/asu-online-news/accelerated-masters-programs/">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[24px]" href="https://asuonline.asu.edu/newsroom/asu-online-news/accelerated-masters-programs/">
              Accelerated Master’s
            </span>
          </a>
          <span className="leading-[24px]">{` program. When accepted, you can earn a`}</span>
        </p>
        <p className="leading-[24px] mb-0">master’s degree in as little as one year after completing your undergraduate degree. This opportunity saves you time and money while</p>
        <p className="leading-[24px]">{`giving you advanced knowledge in your field. Applicable master's degrees include:`}</p>
      </div>
    </div>
  );
}

function Li() {
  return (
    <div className="content-stretch flex flex-col font-['Arial:Regular',sans-serif] isolate items-start leading-[0] not-italic pb-[23.5px] relative shrink-0 text-[16px] w-[924.66px] whitespace-nowrap" data-name="li">
      <a className="flex flex-col justify-center mb-[-23.5px] relative shrink-0 text-[#8c1d40] z-[2]" href="https://asuonline.asu.edu/online-degree-programs/graduate/accountancy-data-analytics/">
        <p className="cursor-pointer decoration-solid leading-[24px] underline">Master of Accountancy and Data Analytics (MACC)</p>
      </a>
      <div className="flex flex-col justify-center mb-[-23.5px] relative shrink-0 text-[#191919] z-[1]">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[24px] whitespace-pre-wrap">
            <span className="leading-[24px]">&nbsp;</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function P3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Please note, this program is not available to students with BA, BS or MS degrees in accountancy, and the courses are not available to</p>
        <p>non-degree students.</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-end left-[15px] right-[15px] top-[67.19px]" data-name="div">
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
    <div className="absolute content-stretch flex flex-col items-center left-[15px] right-[15px] top-[371.19px]" data-name="div.text-center">
      <ButtonBtn1 />
    </div>
  );
}

function DivCol() {
  return (
    <div className="flex-[1_0_0] h-[396.22px] max-w-[1184px] min-h-px min-w-px relative" data-name="div.col">
      <H2DegreeDetail />
      <Div2 />
      <DivTextCenter />
    </div>
  );
}

function DivRow4() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.row">
      <div className="content-start flex flex-wrap items-start pl-[98.66px] pr-[98.68px] relative w-full">
        <DivCol />
      </div>
    </div>
  );
}

function SectionProgramDetail() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section#program-detail">
      <div className="content-stretch flex flex-col items-start px-[128px] py-[96px] relative w-full">
        <DivRow4 />
      </div>
    </div>
  );
}

function CardImage() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="cardImage">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[111.08%] left-0 max-w-none top-0 w-full" src={imgCardImage} />
      </div>
    </div>
  );
}

function DivCol19() {
  return (
    <div className="content-stretch flex flex-col h-[325px] items-start justify-center max-w-[1068px] relative shrink-0 w-[445px]" data-name="div.col-12">
      <CardImage />
    </div>
  );
}

function H3MbSpaceSm() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="h3.mb-space-sm">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">Will my diploma say ‘online’?</p>
      </div>
    </div>
  );
}

function P4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">No, Arizona State University’s diplomas don’t specify whether you earn your</p>
        <p className="mb-0">degree online or in person. All diplomas and transcripts simply say “Arizona</p>
        <p>State University.”</p>
      </div>
    </div>
  );
}

function DivCardBody() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[64px] pt-[31px] px-[32px] relative w-full">
        <H3MbSpaceSm />
        <P4 />
      </div>
    </div>
  );
}

function DivCol20() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1068px] pl-[5px] relative self-stretch shrink-0 w-[623px]" data-name="div.col-12">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-l-5 border-solid inset-0 pointer-events-none" />
      <DivCardBody />
    </div>
  );
}

function DivImageSideLeft() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.image-side-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-0 items-start relative w-full">
        <DivCol19 />
        <DivCol20 />
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

function DivCol18() {
  return (
    <div className="flex-[1_0_0] h-full max-w-[1320px] min-h-px min-w-px relative" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pt-[32px] px-[15px] relative size-full">
        <DivBorder />
      </div>
    </div>
  );
}

function DivRow5() {
  return (
    <div className="content-stretch flex flex-wrap h-[359px] items-start px-[110px] relative shrink-0 w-[1320px]" data-name="div.row">
      <DivCol18 />
    </div>
  );
}

function H2MbSpaceSm() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.mb-space-sm">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[36px] tracking-[-1.26px] w-full">
        <p className="leading-[43.2px] whitespace-pre-wrap">Online accounting courses</p>
      </div>
    </div>
  );
}

function P5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">This program includes courses in computer information systems that have been designed specifically for accounting majors at ASU. You’ll use current e-business software to gain hands-</p>
        <p>on exposure to real-world business processes and strategies with an emphasis on team projects supervised by faculty.</p>
      </div>
    </div>
  );
}

function Div3() {
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
      <Div3 />
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
    <div className="content-stretch flex flex-wrap items-start justify-center min-h-[187.19000244140625px] relative shrink-0 w-full" data-name="div.row">
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
    <div className="content-stretch flex flex-wrap items-start justify-center min-h-[33px] relative shrink-0 w-[1342px]" data-name="div.row">
      <DivCol2 />
    </div>
  );
}

function DivPxSpaceXs() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.px-space-xs">
      <DivRow6 />
      <DivRow7 />
    </div>
  );
}

function H3H3Medium() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full whitespace-pre-wrap">
        <p className="mb-0">WPC 148: First-Year Introduction</p>
        <p>to Career Development</p>
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

function DivCtaIconBlock() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame1 />
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
    <div className="relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails />
      </div>
    </div>
  );
}

function DivBorder1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px p-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs />
      <DivBorderLight2 />
    </div>
  );
}

function DivColMargin() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_1006.5px_209.19px_0] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder1 />
    </div>
  );
}

function H3H3Medium1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full whitespace-pre-wrap">
        <p className="mb-0">WPC 248: Sophomore Career</p>
        <p>Narrative Design</p>
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

function DivCtaIconBlock1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame2 />
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
    <div className="absolute content-stretch flex flex-col inset-[0_671px_209.19px_335.5px] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder2 />
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[31px] pt-[14.795px] px-[16px] relative size-full">
        <H3H3Medium2 />
        <HrTitleUnderline2 />
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

function DivCtaIconBlock2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame3 />
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
    <div className="absolute content-stretch flex flex-col inset-[0_335.5px_209.19px_671px] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder3 />
    </div>
  );
}

function H3H3Medium3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full whitespace-pre-wrap">
        <p className="mb-0">WPC 448: Senior Career</p>
        <p>Transition Management</p>
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

function DivCtaIconBlock3() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame4 />
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
    <div className="absolute content-stretch flex flex-col inset-[0_0_209.19px_1006.5px] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder4 />
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

function DivCtaIconBlock4() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame5 />
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
    <div className="absolute content-stretch flex flex-col inset-[209.19px_1006.5px_0_0] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder5 />
    </div>
  );
}

function H3H3Medium5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full whitespace-pre-wrap">
        <p className="mb-0">WPC 480: W. P. Carey Capstone</p>
        <p>Course</p>
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

function DivCtaIconBlock5() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame6 />
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
    <div className="mb-[-0.01px] relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails5 />
      </div>
    </div>
  );
}

function DivBorder6() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px pb-[1.01px] pt-px px-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs5 />
      <DivBorderLight7 />
    </div>
  );
}

function DivColMargin5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[209.19px_671px_0_335.5px] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder6 />
    </div>
  );
}

function H3H3Medium6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full whitespace-pre-wrap">
        <p className="mb-0">FIN 300: Fundamentals of</p>
        <p>Finance</p>
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

function DivCtaIconBlock6() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame7 />
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
    <div className="mb-[-0.01px] relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails6 />
      </div>
    </div>
  );
}

function DivBorder7() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px pb-[1.01px] pt-px px-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs6 />
      <DivBorderLight8 />
    </div>
  );
}

function DivColMargin6() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[209.19px_335.5px_0_671px] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder7 />
    </div>
  );
}

function H3H3Medium7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.45px] w-full whitespace-pre-wrap">
        <p className="mb-0">LES 305: Business Law and</p>
        <p>Ethics for Managers</p>
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

function DivCtaIconBlock7() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]" data-name="div.cta-icon-block">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame8 />
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
    <div className="mb-[-0.01px] relative shrink-0 w-full" data-name="div.border-light-4">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative w-full">
        <ViewCourseDetails7 />
      </div>
    </div>
  );
}

function DivBorder8() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-[68px] min-w-px pb-[1.01px] pt-px px-px relative w-full" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none" />
      <DivPbSpaceXxs7 />
      <DivBorderLight9 />
    </div>
  );
}

function DivColMargin7() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[209.19px_0_0_1006.5px] items-start justify-center max-w-[1342px] pb-[24px] px-[15px]" data-name="div.col:margin">
      <DivBorder8 />
    </div>
  );
}

function DivRow8() {
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
    <div className="content-stretch flex flex-wrap items-start justify-center pt-[15.99px] relative shrink-0 w-[1342px]" data-name="div.row">
      <DivCol3 />
    </div>
  );
}

function DivContainer() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1320px] pb-[96px] relative shrink-0 w-full" data-name="div.container">
      <DivPxSpaceXs />
      <DivRow8 />
      <DivRow9 />
    </div>
  );
}

function SectionProgramCourses() {
  return (
    <div className="bg-size-[450px_451px] bg-top-left relative shrink-0 w-full" data-name="section#program-courses" style={{ backgroundImage: `url('${imgSectionProgramCourses}')` }}>
      <div className="content-stretch flex flex-col items-start pt-[96px] px-[64px] relative w-full">
        <DivContainer />
      </div>
    </div>
  );
}

function DivRow10() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start justify-center mb-[-40px] relative shrink-0 w-full" data-name="div.row">
      <div className="flex-[1_0_0] h-[550px] min-h-px min-w-px relative" data-name="div.col">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[131.82%] left-0 max-w-none top-0 w-full" src={imgDivCol} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[550px] left-[-128px] to-white top-0 via-[80%] via-[rgba(255,255,255,0.63)] w-[1440px]" data-name="div.w-100" />
    </div>
  );
}

function H2PositionRelative() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="h2.position-relative">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[36px] tracking-[-1.26px] w-full">
        <p className="leading-[43.2px] whitespace-pre-wrap">The jobs you could get with an accounting degree</p>
      </div>
    </div>
  );
}

function DivCol21() {
  return (
    <div className="flex-[1_0_0] max-w-[1184px] min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[15px] relative size-full">
        <H2PositionRelative />
      </div>
    </div>
  );
}

function DivRow11() {
  return (
    <div className="mb-[-40px] relative shrink-0 w-full" data-name="div.row">
      <div className="content-stretch flex flex-wrap items-start pl-[98.66px] pr-[98.68px] relative w-full">
        <DivCol21 />
      </div>
    </div>
  );
}

function P6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[22.4px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Accounting is a dynamic field that offers you diverse opportunities in the private sector and  government agencies worldwide.`}</p>
        <p className="mb-0">Graduates with a bachelor’s in accounting can expect to find professional careers in public, corporate and governmental accounting or</p>
        <p className="mb-0">personal financial planning and portfolio analysis. They may also pursue bookkeeping and tax preparation, consulting or</p>
        <p>entrepreneurial endeavors. Career examples include, but aren’t limited to:</p>
      </div>
    </div>
  );
}

function DivCol22() {
  return (
    <div className="flex-[1_0_0] max-w-[1184px] min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[15px] relative size-full">
        <P6 />
      </div>
    </div>
  );
}

function DivRow12() {
  return (
    <div className="mb-[-40px] min-h-[177.55999755859375px] relative shrink-0 w-full" data-name="div.row">
      <div className="content-stretch flex flex-wrap items-start min-h-[inherit] pl-[98.66px] pr-[98.68px] pt-[39.085px] relative w-full">
        <DivCol22 />
      </div>
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
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[34.56px]" data-name="hr.card-degree-text-underline" />;
}

function Frame9() {
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
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[80.333px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">4.6 %</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame9 />
      <DivFsXsMargin />
    </div>
  );
}

function Frame10() {
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

function DivDFlex12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame10 />
      <Frame11 />
      <DivFsXsMargin1 />
    </div>
  );
}

function DivMbSpaceXxs() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex11 />
      <DivDFlex12 />
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
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[31px] pt-[25px] px-[25px] relative size-full">
        <DivCardDegreeTextBody />
      </div>
    </div>
  );
}

function DivCol12Margin() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_657.78px_407.56px_0] items-start justify-center max-w-[986.6599731445312px] pb-[32px] px-[16px]" data-name="div.col-12:margin">
      <DivCardDegreeText />
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
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[34.56px]" data-name="hr.card-degree-text-underline" />;
}

function Frame12() {
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

function DivDFlex13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame12 />
      <DivFsXsMargin2 />
    </div>
  );
}

function Frame13() {
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

function DivDFlex14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame13 />
      <Frame14 />
      <DivFsXsMargin3 />
    </div>
  );
}

function DivMbSpaceXxs1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex13 />
      <DivDFlex14 />
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
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[31px] pt-[25px] px-[25px] relative size-full">
        <DivCardDegreeTextBody1 />
      </div>
    </div>
  );
}

function DivCol12Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_328.91px_407.56px_328.87px] items-start justify-center max-w-[986.6599731445312px] pb-[32px] px-[16px]" data-name="div.col-12:margin">
      <DivCardDegreeText1 />
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
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[34.56px]" data-name="hr.card-degree-text-underline" />;
}

function Frame15() {
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
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[80.333px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">1.0 %</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame15 />
      <DivFsXsMargin4 />
    </div>
  );
}

function Frame16() {
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

function DivDFlex16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame16 />
      <Frame17 />
      <DivFsXsMargin5 />
    </div>
  );
}

function DivMbSpaceXxs2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex15 />
      <DivDFlex16 />
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
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[31px] pt-[25px] px-[25px] relative size-full">
        <DivCardDegreeTextBody2 />
      </div>
    </div>
  );
}

function DivCol12Margin2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0.03px_407.56px_657.75px] items-start justify-center max-w-[986.6599731445312px] pb-[32px] px-[16px]" data-name="div.col-12:margin">
      <DivCardDegreeText2 />
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
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[34.56px]" data-name="hr.card-degree-text-underline" />;
}

function Frame18() {
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
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[80.333px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">9.6 %</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame18 />
      <DivFsXsMargin6 />
    </div>
  );
}

function Frame19() {
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

function DivDFlex18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame19 />
      <Frame20 />
      <DivFsXsMargin7 />
    </div>
  );
}

function DivMbSpaceXxs3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex17 />
      <DivDFlex18 />
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
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[31px] pt-[25px] px-[25px] relative size-full">
        <DivCardDegreeTextBody3 />
      </div>
    </div>
  );
}

function DivCol12Margin3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[203.79px_657.78px_203.77px_0] items-start justify-center max-w-[986.6599731445312px] pb-[32px] px-[16px]" data-name="div.col-12:margin">
      <DivCardDegreeText3 />
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
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[34.56px]" data-name="hr.card-degree-text-underline" />;
}

function Frame21() {
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

function DivDFlex19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame21 />
      <DivFsXsMargin8 />
    </div>
  );
}

function Frame22() {
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

function DivDFlex20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame22 />
      <Frame23 />
      <DivFsXsMargin9 />
    </div>
  );
}

function DivMbSpaceXxs4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex19 />
      <DivDFlex20 />
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
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[31px] pt-[25px] px-[25px] relative size-full">
        <DivCardDegreeTextBody4 />
      </div>
    </div>
  );
}

function DivCol12Margin4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[203.79px_328.91px_203.77px_328.87px] items-start justify-center max-w-[986.6599731445312px] pb-[32px] px-[16px]" data-name="div.col-12:margin">
      <DivCardDegreeText4 />
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
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[34.56px]" data-name="hr.card-degree-text-underline" />;
}

function Frame24() {
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
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[80.333px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">5.7 %</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame24 />
      <DivFsXsMargin10 />
    </div>
  );
}

function Frame25() {
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

function DivDFlex22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame25 />
      <Frame26 />
      <DivFsXsMargin11 />
    </div>
  );
}

function DivMbSpaceXxs5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex21 />
      <DivDFlex22 />
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
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[31px] pt-[25px] px-[25px] relative size-full">
        <DivCardDegreeTextBody5 />
      </div>
    </div>
  );
}

function DivCol12Margin5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[203.79px_0.03px_203.77px_657.75px] items-start justify-center max-w-[986.6599731445312px] pb-[32px] px-[16px]" data-name="div.col-12:margin">
      <DivCardDegreeText5 />
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
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[34.56px]" data-name="hr.card-degree-text-underline" />;
}

function Frame27() {
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
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Bold',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#191919] text-[12px] top-[7.4px] w-[87.014px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic">14.8 %</span>
        </p>
      </div>
    </div>
  );
}

function DivDFlex23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame27 />
      <DivFsXsMargin12 />
    </div>
  );
}

function Frame28() {
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

function DivDFlex24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame28 />
      <Frame29 />
      <DivFsXsMargin13 />
    </div>
  );
}

function DivMbSpaceXxs6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex23 />
      <DivDFlex24 />
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
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[31px] pt-[25px] px-[25px] relative size-full">
        <DivCardDegreeTextBody6 />
      </div>
    </div>
  );
}

function DivCol12Margin6() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[407.57px_657.78px_-0.01px_0] items-start justify-center max-w-[986.6599731445312px] pb-[32px] px-[16px]" data-name="div.col-12:margin">
      <DivCardDegreeText6 />
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
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[34.56px]" data-name="hr.card-degree-text-underline" />;
}

function Frame30() {
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

function DivDFlex25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame30 />
      <DivFsXsMargin14 />
    </div>
  );
}

function Frame31() {
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

function DivDFlex26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.d-flex">
      <Frame31 />
      <Frame32 />
      <DivFsXsMargin15 />
    </div>
  );
}

function DivMbSpaceXxs7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full" data-name="div.mb-space-xxs">
      <DivDFlex25 />
      <DivDFlex26 />
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
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[31px] pt-[25px] px-[25px] relative size-full">
        <DivCardDegreeTextBody7 />
      </div>
    </div>
  );
}

function DivCol12Margin7() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[407.57px_328.91px_-0.01px_328.87px] items-start justify-center max-w-[986.6599731445312px] pb-[32px] px-[16px]" data-name="div.col-12:margin">
      <DivCardDegreeText7 />
    </div>
  );
}

function DivRow14() {
  return (
    <div className="h-[611.34px] relative shrink-0 w-full" data-name="div.row">
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

function DivCol23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[1184px] min-h-px min-w-px relative self-stretch" data-name="div.col-12">
      <DivRow14 />
    </div>
  );
}

function DivRow13() {
  return (
    <div className="mb-[-40px] relative shrink-0 w-full" data-name="div.row">
      <div className="content-stretch flex flex-wrap items-start pl-[98.66px] pr-[98.68px] pt-[40px] relative w-full">
        <DivCol23 />
      </div>
    </div>
  );
}

function DivContainerLg() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1320px] pb-[40px] relative shrink-0 w-full" data-name="div.container-lg">
      <DivRow10 />
      <DivRow11 />
      <DivRow12 />
      <DivRow13 />
    </div>
  );
}

function SectionProgramCareers() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section#program-careers">
      <div className="content-stretch flex flex-col items-start px-[128px] py-[96px] relative w-full">
        <DivContainerLg />
      </div>
    </div>
  );
}

function H2H2Medium1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.h2-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[36px] tracking-[-1.26px] w-full">
        <p className="leading-[43.2px] whitespace-pre-wrap">How to apply</p>
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
    <div className="content-stretch flex flex-wrap items-start justify-center min-h-[91.19000244140625px] relative shrink-0 w-full" data-name="div.row">
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

function Div4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivCollapseTitle />
    </div>
  );
}

function Frame33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0029 36.5625">
        <g id="Frame">
          <path d={svgPaths.p4a3c100} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivTextDark() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[32px]" data-name="div.text-dark-3">
      <Frame33 />
    </div>
  );
}

function DivTextDark3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0 w-[64px]" data-name="div.text-dark-3:margin">
      <DivTextDark />
    </div>
  );
}

function DivCollapseLabelContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.collapse-label-container">
      <Div4 />
      <DivTextDark3Margin />
    </div>
  );
}

function ButtonAccordion0AdmissionRequirements() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="button#accordion0admission-requirements-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[32px] py-[24px] relative w-full">
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

function Div5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivCollapseTitle1 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0029 36.5625">
        <g id="Frame">
          <path d={svgPaths.p4a3c100} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivTextDark1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[32px]" data-name="div.text-dark-3">
      <Frame34 />
    </div>
  );
}

function DivTextDark3Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0 w-[64px]" data-name="div.text-dark-3:margin">
      <DivTextDark1 />
    </div>
  );
}

function DivCollapseLabelContainer1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.collapse-label-container">
      <Div5 />
      <DivTextDark3Margin1 />
    </div>
  );
}

function ButtonAccordion0AdmissionRequirements1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="button#accordion0admission-requirements-1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[32px] py-[24px] relative w-full">
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

function Div6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivCollapseTitle2 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0029 36.5625">
        <g id="Frame">
          <path d={svgPaths.p4a3c100} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivTextDark2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[32px]" data-name="div.text-dark-3">
      <Frame35 />
    </div>
  );
}

function DivTextDark3Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0 w-[64px]" data-name="div.text-dark-3:margin">
      <DivTextDark2 />
    </div>
  );
}

function DivCollapseLabelContainer2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.collapse-label-container">
      <Div6 />
      <DivTextDark3Margin2 />
    </div>
  );
}

function ButtonAccordion0AdmissionRequirements2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="button#accordion0admission-requirements-2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[32px] py-[24px] relative w-full">
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

function Div7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivCollapseTitle3 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0029 36.5625">
        <g id="Frame">
          <path d={svgPaths.p4a3c100} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivTextDark3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[32px]" data-name="div.text-dark-3">
      <Frame36 />
    </div>
  );
}

function DivTextDark3Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0 w-[64px]" data-name="div.text-dark-3:margin">
      <DivTextDark3 />
    </div>
  );
}

function DivCollapseLabelContainer3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.collapse-label-container">
      <Div7 />
      <DivTextDark3Margin3 />
    </div>
  );
}

function ButtonAccordion0AdmissionRequirements3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="button#accordion0admission-requirements-3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[32px] py-[24px] relative w-full">
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
    <div className="content-stretch flex flex-wrap items-start justify-center min-h-[410.25px] relative shrink-0 w-full" data-name="div.row">
      <DivCol5 />
    </div>
  );
}

function DivContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1320px] relative shrink-0 w-full" data-name="div.container">
      <DivRow15 />
      <DivRow16 />
    </div>
  );
}

function DivPtSpaceMd() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="div.pt-space-md">
      <div className="content-stretch flex flex-col items-start px-[60px] py-[96px] relative w-full">
        <DivContainer1 />
      </div>
    </div>
  );
}

function DivParallaxBgMaskGroup() {
  return <div className="absolute h-[492px] left-[-3.84px] right-[3.84px] top-[103.82px]" data-name="div.parallax-bg:mask-group" />;
}

function H3MbSpaceSm1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="h3.mb-space-sm">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">Study with professional accountants</p>
      </div>
    </div>
  );
}

function P7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">The W. P. Carey School of Business faculty is passionate about</p>
        <p className="mb-0">innovative research and impact. Our school fosters an environment</p>
        <p className="mb-0">of global thinking, with a cohort of award-winning faculty from six</p>
        <p className="mb-0">continents around the globe and a student body that represents</p>
        <p>more than 100 countries. Faculty accolades include:</p>
      </div>
    </div>
  );
}

function Li1() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[23.5px] relative shrink-0 w-full" data-name="li">
      <div className="flex flex-col justify-center mb-[-23.5px] relative shrink-0 z-[2]">
        <p className="leading-[24px]">National Academy of Sciences members</p>
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

function Li2() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[23.5px] relative shrink-0 w-full" data-name="li">
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
    <div className="content-stretch flex flex-col isolate items-start pb-[23.5px] relative shrink-0 w-full" data-name="li">
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
      <div className="content-stretch flex flex-col font-['Arial:Regular',sans-serif] items-start leading-[0] not-italic pl-[32px] relative text-[#191919] text-[16px] w-full whitespace-nowrap">
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[64px] pt-[31px] px-[32px] relative w-full">
        <H3MbSpaceSm1 />
        <DivMbSpaceSm />
      </div>
    </div>
  );
}

function DivCol24() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[958px] pl-[5px] relative self-stretch shrink-0 w-[558.83px] z-[1]" data-name="div.col-12">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-l-5 border-solid inset-0 pointer-events-none" />
      <DivCardBody1 />
    </div>
  );
}

function DivImageSideLeft1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.image-side-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-wrap gap-0 isolate items-start relative w-full">
        <div className="max-w-[958px] relative self-stretch shrink-0 w-[399.16px] z-[2]" data-name="div.col-12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[116.78%] left-0 max-w-none top-0 w-full" src={imgDivCol12} />
          </div>
        </div>
        <DivCol24 />
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

function DivOffsetLg() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16.4%] max-w-[1440px] pb-[92px] right-[16.93%] top-[11.82px]" data-name="div.offset-lg-2">
      <DivBorder9 />
    </div>
  );
}

function DivSpaLazy() {
  return (
    <div className="bg-[rgba(0,0,0,0.6)] h-[492px] relative shrink-0 w-full" data-name="div.spa-lazy">
      <DivParallaxBgMaskGroup />
      <DivOffsetLg />
    </div>
  );
}

function DivParallaxBgMaskGroup1() {
  return <div className="absolute h-[492px] left-[-3.84px] right-[3.84px] top-[103.82px]" data-name="div.parallax-bg:mask-group" />;
}

function H2MbSpaceSm1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.695px] relative shrink-0 w-full" data-name="h2.mb-space-sm">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[28.8px] not-italic relative shrink-0 text-[#191919] text-[24px] tracking-[-0.84px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Don't meet admission`}</p>
        <p>requirements?</p>
      </div>
    </div>
  );
}

function P8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">You can still gain general admission to most</p>
        <p className="mb-0">online programs at ASU through Earned</p>
        <p className="mb-0">Admission. Through this pathway, you can</p>
        <p className="mb-0">demonstrate your ability to succeed at ASU by</p>
        <p className="mb-0">completing online courses with a 2.75 GPA or</p>
        <p>higher.</p>
      </div>
    </div>
  );
}

function P9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">To begin, submit an application to ASU. An</p>
        <p className="mb-0">enrollment coach will reach out with more</p>
        <p>information if Earned Admission is right for you.</p>
      </div>
    </div>
  );
}

function P10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">*Some programs may have higher admission</p>
        <p className="mb-0">requirements. You must meet all program</p>
        <p>requirements to be admitted.</p>
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[64px] pt-[30.895px] px-[32px] relative w-full">
        <H2MbSpaceSm1 />
        <DivMbSpaceSm1 />
      </div>
    </div>
  );
}

function DivCol25() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[718px] pl-[8px] relative self-stretch shrink-0 w-[418.83px] z-[1]" data-name="div.col-12">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-l-8 border-solid inset-0 pointer-events-none" />
      <DivCardBody2 />
    </div>
  );
}

function DivImageSideLeft2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.image-side-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-wrap gap-0 isolate items-start relative w-full">
        <div className="max-w-[718px] relative self-stretch shrink-0 w-[299.16px] z-[2]" data-name="div.col-12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-82.91%] max-w-none top-0 w-[265.82%]" src={imgDivCol13} />
          </div>
        </div>
        <DivCol25 />
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

function DivOffsetLg1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24.73%] pb-[92px] right-[25.27%] top-[11.82px]" data-name="div.offset-lg-3">
      <DivBorder10 />
    </div>
  );
}

function DivSpaLazy1() {
  return (
    <div className="bg-[rgba(0,0,0,0.6)] h-[492px] relative shrink-0 w-full" data-name="div.spa-lazy">
      <DivParallaxBgMaskGroup1 />
      <DivOffsetLg1 />
    </div>
  );
}

function DivRow17() {
  return (
    <div className="content-start flex flex-wrap gap-0 items-start justify-center mb-[-40px] relative shrink-0 w-full" data-name="div.row">
      <div className="flex-[1_0_0] h-[550px] min-h-px min-w-px relative" data-name="div.col">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[131.47%] left-0 max-w-none top-0 w-full" src={imgDivCol1} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[550px] left-0 to-white top-[0.15px] via-[80%] via-[rgba(255,255,255,0.63)] w-[1440px]" data-name="div.w-100" />
    </div>
  );
}

function H2PositionRelative1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="h2.position-relative">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[43.2px] not-italic relative shrink-0 text-[#191919] text-[36px] tracking-[-1.26px] w-full whitespace-pre-wrap">
        <p className="mb-0">Become a part of one of the best business schools in</p>
        <p>the nation</p>
      </div>
    </div>
  );
}

function DivCol26() {
  return (
    <div className="content-stretch flex flex-col h-[111px] items-start max-w-[1184px] px-[47px] relative shrink-0 w-[986.66px]" data-name="div.col-12">
      <H2PositionRelative1 />
    </div>
  );
}

function DivRow18() {
  return (
    <div className="content-start flex flex-wrap items-start mb-[-40px] relative shrink-0 w-full" data-name="div.row">
      <DivCol26 />
    </div>
  );
}

function P11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">The W. P. Carey School of Business is one of the top business schools in the country. Our AACSB-accredited business school is committed to delivering</p>
        <p className="mb-0">{`excellent quality and value. Our U.S. News & World Report rankings reflect our commitment to academics, groundbreaking research and positive student`}</p>
        <p>outcomes.</p>
      </div>
    </div>
  );
}

function DivCol27() {
  return (
    <div className="flex-[1_0_0] h-[72px] min-h-px min-w-px relative" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[47px] relative size-full">
        <P11 />
      </div>
    </div>
  );
}

function DivRow19() {
  return (
    <div className="content-start flex flex-wrap items-start justify-center mb-[-40px] min-h-[159.99000549316406px] pt-[39.99px] relative shrink-0 w-full" data-name="div.row">
      <DivCol27 />
    </div>
  );
}

function H3H2Medium() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="h3.h2-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[36px] tracking-[-0.9px] w-full">
        <p className="leading-[43.2px] whitespace-pre-wrap">#2</p>
      </div>
    </div>
  );
}

function HrBgSecondary() {
  return <div className="bg-[#ffc627] h-[3px] shrink-0 w-[39.83px]" data-name="hr.bg-secondary" />;
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
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[40px] px-[32px] relative w-full">
        <H3H2Medium />
        <HrBgSecondary />
        <P12 />
      </div>
    </div>
  );
}

function DivCol28() {
  return (
    <div className="absolute bottom-[187.19px] content-stretch flex flex-col items-start left-0 max-w-[1184px] px-[15px] right-1/2 top-0" data-name="div.col-12">
      <DivPxSpaceXs1 />
    </div>
  );
}

function H3H2Medium1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="h3.h2-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[36px] tracking-[-0.9px] w-full">
        <p className="leading-[43.2px] whitespace-pre-wrap">#4</p>
      </div>
    </div>
  );
}

function HrBgSecondary1() {
  return <div className="bg-[#ffc627] h-[3px] shrink-0 w-[39.83px]" data-name="hr.bg-secondary" />;
}

function P13() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">{`best online master's in business programs (excluding MBA)`}</p>
      </div>
    </div>
  );
}

function DivPxSpaceXs2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.px-space-xs">
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[40px] px-[32px] relative w-full">
        <H3H2Medium1 />
        <HrBgSecondary1 />
        <P13 />
      </div>
    </div>
  );
}

function DivCol29() {
  return (
    <div className="absolute bottom-[187.19px] content-stretch flex flex-col items-start left-1/2 max-w-[1184px] px-[15px] right-0 top-0" data-name="div.col-12">
      <DivPxSpaceXs2 />
    </div>
  );
}

function H3H2Medium2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="h3.h2-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[36px] tracking-[-0.9px] w-full">
        <p className="leading-[43.2px] whitespace-pre-wrap">#4</p>
      </div>
    </div>
  );
}

function HrBgSecondary2() {
  return <div className="bg-[#ffc627] h-[3px] shrink-0 w-[39.83px]" data-name="hr.bg-secondary" />;
}

function P14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">best online general management MBA programs</p>
      </div>
    </div>
  );
}

function DivPxSpaceXs3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.px-space-xs">
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[40px] px-[32px] relative w-full">
        <H3H2Medium2 />
        <HrBgSecondary2 />
        <P14 />
      </div>
    </div>
  );
}

function DivCol30() {
  return (
    <div className="absolute bottom-[48px] content-stretch flex flex-col items-start left-0 max-w-[1184px] px-[15px] right-1/2 top-[139.19px]" data-name="div.col-12">
      <DivPxSpaceXs3 />
    </div>
  );
}

function H3H2Medium3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="h3.h2-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[36px] tracking-[-0.9px] w-full">
        <p className="leading-[43.2px] whitespace-pre-wrap">#4</p>
      </div>
    </div>
  );
}

function HrBgSecondary3() {
  return <div className="bg-[#ffc627] h-[3px] shrink-0 w-[39.83px]" data-name="hr.bg-secondary" />;
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
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[40px] px-[32px] relative w-full">
        <H3H2Medium3 />
        <HrBgSecondary3 />
        <P15 />
      </div>
    </div>
  );
}

function DivCol31() {
  return (
    <div className="absolute bottom-[48px] content-stretch flex flex-col items-start left-1/2 max-w-[1184px] px-[15px] right-0 top-[139.19px]" data-name="div.col-12">
      <DivPxSpaceXs4 />
    </div>
  );
}

function DivRow20() {
  return (
    <div className="h-[326.38px] mb-[-40px] relative shrink-0 w-full" data-name="div.row">
      <DivCol28 />
      <DivCol29 />
      <DivCol30 />
      <DivCol31 />
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

function DivCol32() {
  return (
    <div className="flex-[1_0_0] h-[90px] min-h-px min-w-px relative" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <DivTextCenter2 />
      </div>
    </div>
  );
}

function DivRow21() {
  return (
    <div className="content-start flex flex-wrap items-start justify-center mb-[-40px] pt-[40px] relative shrink-0 w-full" data-name="div.row">
      <DivCol32 />
    </div>
  );
}

function DivContainerLg1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1320px] pb-[40px] relative shrink-0 w-[1184px]" data-name="div.container-lg">
      <DivRow17 />
      <DivRow18 />
      <DivRow19 />
      <DivRow20 />
      <DivRow21 />
    </div>
  );
}

function DivParallaxBgMaskGroup2() {
  return <div className="absolute h-[309px] left-[-3.84px] right-[3.84px] top-[103.82px]" data-name="div.parallax-bg:mask-group" />;
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
        <p className="leading-[24px] mb-0">Use our calculator to estimate your full-time or part-time tuition fees</p>
        <p className="leading-[24px] mb-0">for this program prior to any financial aid. Keep in mind that most of</p>
        <p className="leading-[24px] mb-0">our students receive financial aid, which can reduce out-of-pocket</p>
        <p>
          <span className="leading-[24px]">{`costs. `}</span>
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

function DivCol34() {
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
    <div className="content-stretch flex flex-wrap items-start justify-center pt-[8px] relative shrink-0 w-[519.83px]" data-name="div.row">
      <DivCol34 />
    </div>
  );
}

function DivCardBody3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-body">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-center p-[32px] relative w-full">
          <H3MbSpaceSm2 />
          <P16 />
          <DivRow22 />
        </div>
      </div>
    </div>
  );
}

function DivCol33() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[958px] pl-[5px] relative self-stretch shrink-0 w-[558.83px] z-[1]" data-name="div.col-12">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-l-5 border-solid inset-0 pointer-events-none" />
      <DivCardBody3 />
    </div>
  );
}

function DivImageSideLeft3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.image-side-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-wrap gap-0 isolate items-start relative w-full">
        <div className="max-w-[958px] relative self-stretch shrink-0 w-[399.16px] z-[2]" data-name="div.col-12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-11.34%] max-w-none top-0 w-[122.69%]" src={imgDivCol14} />
          </div>
        </div>
        <DivCol33 />
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

function DivOffsetLg2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16.4%] pb-[92px] right-[16.93%] top-[11.82px]" data-name="div.offset-lg-2">
      <DivBorder11 />
    </div>
  );
}

function DivSpaLazy2() {
  return (
    <div className="bg-[rgba(0,0,0,0.6)] h-[309px] relative shrink-0 w-full" data-name="div.spa-lazy">
      <DivParallaxBgMaskGroup2 />
      <DivOffsetLg2 />
    </div>
  );
}

function H2H2Medium2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.h2-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[36px] tracking-[-1.26px] w-full">
        <p className="leading-[43.2px] whitespace-pre-wrap">You might also be interested in</p>
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
    <div className="content-stretch flex flex-wrap items-start justify-center min-h-[91.19000244140625px] relative shrink-0 w-full" data-name="div.row">
      <DivCol6 />
    </div>
  );
}

function BusinessAccountingAndBusinessDecisionsBa() {
  return (
    <div className="absolute h-[180px] left-px right-px top-px" data-name="Business – Accounting and Business Decisions (BA)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.83%] left-0 max-w-none top-0 w-full" src={imgBusinessAccountingAndBusinessDecisionsBa} />
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="content-stretch flex flex-col font-['Arial:Regular',sans-serif] gap-[8.59px] items-start leading-[0] not-italic pb-px relative shrink-0 whitespace-nowrap" data-name="div">
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

function Div9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <BusinessAccountingAndBusinessDecisionsBaLearnMore />
    </div>
  );
}

function DivDFlex27() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.d-flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Div8 />
        <Div9 />
      </div>
    </div>
  );
}

function DivBgWhite1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-px px-[16px] py-[8px] right-px top-[305.19px]" data-name="div.bg-white">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
      <DivDFlex27 />
    </div>
  );
}

function H4H3Medium() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h4.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">Business – Accounting and</p>
        <p>Business Decisions (BA)</p>
      </div>
    </div>
  );
}

function HrTitleUnderline8() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[36.66px]" data-name="hr.title-underline" />;
}

function DivMtSpaceXs() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.mt-space-xs">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[23px] px-[16px] relative w-full">
        <H4H3Medium />
        <HrTitleUnderline8 />
      </div>
    </div>
  );
}

function PFsXs1() {
  return (
    <div className="absolute bg-[#191919] content-stretch flex flex-col items-start left-[16px] p-[4px] top-[-14px]" data-name="p.fs-xs">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16.8px]">Undergraduate</p>
      </div>
    </div>
  );
}

function DivDegreeSearchCardBody() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[181px_1px_75.59px_1px] items-start pb-[24px] pt-[22.8px]" data-name="div.degree-search-card-body">
      <DivMtSpaceXs />
      <PFsXs1 />
    </div>
  );
}

function DivDegreeSearchCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[190px] min-w-px relative w-full" data-name="div.degree-search-card">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <BusinessAccountingAndBusinessDecisionsBa />
      <DivBgWhite1 />
      <DivDegreeSearchCardBody />
    </div>
  );
}

function DivColMargin8() {
  return (
    <div className="flex-[1_0_0] max-w-[1350px] min-h-px min-w-px relative self-stretch" data-name="div.col:margin">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pb-[32px] px-[15px] relative size-full">
          <DivDegreeSearchCard />
        </div>
      </div>
    </div>
  );
}

function BusinessBusinessAdministrationBa() {
  return (
    <div className="absolute h-[180px] left-px right-px top-px" data-name="Business – Business Administration (BA)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[103.87%] left-0 max-w-none top-0 w-full" src={imgBusinessBusinessAdministrationBa} />
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div className="content-stretch flex flex-col font-['Arial:Regular',sans-serif] gap-[8.59px] items-start leading-[0] not-italic pb-px relative shrink-0 whitespace-nowrap" data-name="div">
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

function Div11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <BusinessBusinessAdministrationBaLearnMore />
    </div>
  );
}

function DivDFlex28() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.d-flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Div10 />
        <Div11 />
      </div>
    </div>
  );
}

function DivBgWhite2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-px px-[16px] py-[8px] right-px top-[305.19px]" data-name="div.bg-white">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
      <DivDFlex28 />
    </div>
  );
}

function H4H3Medium1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h4.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">Business – Business</p>
        <p>Administration (BA)</p>
      </div>
    </div>
  );
}

function HrTitleUnderline9() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[36.66px]" data-name="hr.title-underline" />;
}

function DivMtSpaceXs1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.mt-space-xs">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[23px] px-[16px] relative w-full">
        <H4H3Medium1 />
        <HrTitleUnderline9 />
      </div>
    </div>
  );
}

function PFsXs2() {
  return (
    <div className="absolute bg-[#191919] content-stretch flex flex-col items-start left-[16px] p-[4px] top-[-14px]" data-name="p.fs-xs">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16.8px]">Undergraduate</p>
      </div>
    </div>
  );
}

function DivDegreeSearchCardBody1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[181px_1px_75.59px_1px] items-start pb-[24px] pt-[22.8px]" data-name="div.degree-search-card-body">
      <DivMtSpaceXs1 />
      <PFsXs2 />
    </div>
  );
}

function DivDegreeSearchCard1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[190px] min-w-px relative w-full" data-name="div.degree-search-card">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <BusinessBusinessAdministrationBa />
      <DivBgWhite2 />
      <DivDegreeSearchCardBody1 />
    </div>
  );
}

function DivColMargin9() {
  return (
    <div className="flex-[1_0_0] max-w-[1350px] min-h-px min-w-px relative self-stretch" data-name="div.col:margin">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pb-[32px] px-[15px] relative size-full">
          <DivDegreeSearchCard1 />
        </div>
      </div>
    </div>
  );
}

function EconomicsBsBusiness() {
  return (
    <div className="absolute h-[180px] left-px right-px top-px" data-name="Economics (BS) – Business">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[113.11%] left-0 max-w-none top-0 w-full" src={imgEconomicsBsBusiness} />
      </div>
    </div>
  );
}

function Div12() {
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

function Div13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <EconomicsBsBusinessLearnMore />
    </div>
  );
}

function DivDFlex29() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.d-flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Div12 />
        <Div13 />
      </div>
    </div>
  );
}

function DivBgWhite3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-px px-[16px] py-[8px] right-px top-[305.19px]" data-name="div.bg-white">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
      <DivDFlex29 />
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
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[36.66px]" data-name="hr.title-underline" />;
}

function DivMtSpaceXs2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.mt-space-xs">
      <div className="content-stretch flex flex-col gap-[8.01px] items-start pb-[22.99px] px-[16px] relative w-full">
        <H4H3Medium2 />
        <HrTitleUnderline10 />
      </div>
    </div>
  );
}

function PFsXs3() {
  return (
    <div className="absolute bg-[#191919] content-stretch flex flex-col items-start left-[16px] p-[4px] top-[-14px]" data-name="p.fs-xs">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16.8px]">Undergraduate</p>
      </div>
    </div>
  );
}

function DivDegreeSearchCardBody2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[181px_1px_75.59px_1px] items-start pb-[45.6px] pt-[23px]" data-name="div.degree-search-card-body">
      <DivMtSpaceXs2 />
      <PFsXs3 />
    </div>
  );
}

function DivDegreeSearchCard2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[190px] min-w-px relative w-full" data-name="div.degree-search-card">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <EconomicsBsBusiness />
      <DivBgWhite3 />
      <DivDegreeSearchCardBody2 />
    </div>
  );
}

function DivColMargin10() {
  return (
    <div className="flex-[1_0_0] max-w-[1350px] min-h-px min-w-px relative self-stretch" data-name="div.col:margin">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pb-[32px] px-[15px] relative size-full">
          <DivDegreeSearchCard2 />
        </div>
      </div>
    </div>
  );
}

function BusinessFinancialPlanningBa() {
  return (
    <div className="absolute h-[180px] left-px right-px top-px" data-name="Business – Financial Planning (BA)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.14%] left-0 max-w-none top-0 w-full" src={imgBusinessFinancialPlanningBa} />
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div className="content-stretch flex flex-col font-['Arial:Regular',sans-serif] gap-[8.59px] items-start leading-[0] not-italic pb-px relative shrink-0 whitespace-nowrap" data-name="div">
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

function Div15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <BusinessFinancialPlanningBaLearnMore />
    </div>
  );
}

function DivDFlex30() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.d-flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Div14 />
        <Div15 />
      </div>
    </div>
  );
}

function DivBgWhite4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-px px-[16px] py-[8px] right-px top-[305.19px]" data-name="div.bg-white">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
      <DivDFlex30 />
    </div>
  );
}

function H4H3Medium3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h4.h3-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[21.6px] not-italic relative shrink-0 text-[#191919] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">Business – Financial Planning</p>
        <p>(BA)</p>
      </div>
    </div>
  );
}

function HrTitleUnderline11() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[36.66px]" data-name="hr.title-underline" />;
}

function DivMtSpaceXs3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.mt-space-xs">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[23px] px-[16px] relative w-full">
        <H4H3Medium3 />
        <HrTitleUnderline11 />
      </div>
    </div>
  );
}

function PFsXs4() {
  return (
    <div className="absolute bg-[#191919] content-stretch flex flex-col items-start left-[16px] p-[4px] top-[-14px]" data-name="p.fs-xs">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16.8px]">Undergraduate</p>
      </div>
    </div>
  );
}

function DivDegreeSearchCardBody3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[181px_1px_75.59px_1px] items-start pb-[24px] pt-[22.8px]" data-name="div.degree-search-card-body">
      <DivMtSpaceXs3 />
      <PFsXs4 />
    </div>
  );
}

function DivDegreeSearchCard3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[190px] min-w-px relative w-full" data-name="div.degree-search-card">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <BusinessFinancialPlanningBa />
      <DivBgWhite4 />
      <DivDegreeSearchCardBody3 />
    </div>
  );
}

function DivColMargin11() {
  return (
    <div className="flex-[1_0_0] max-w-[1350px] min-h-px min-w-px relative self-stretch" data-name="div.col:margin">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pb-[32px] px-[15px] relative size-full">
          <DivDegreeSearchCard3 />
        </div>
      </div>
    </div>
  );
}

function DivRow24() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start justify-center relative shrink-0 w-[1350px]" data-name="div.row">
      <DivColMargin8 />
      <DivColMargin9 />
      <DivColMargin10 />
      <DivColMargin11 />
    </div>
  );
}

function ABtn2() {
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

function DivCol35() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1350px] px-[15px] relative shrink-0 w-[450px]" data-name="div.col-12">
      <ABtn2 />
    </div>
  );
}

function DivRow25() {
  return (
    <div className="content-center flex flex-wrap items-center justify-center relative shrink-0 w-[1350px]" data-name="div.row">
      <DivCol35 />
    </div>
  );
}

function DivContainer2() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1320px] relative shrink-0 w-full" data-name="div.container">
      <DivRow23 />
      <DivRow24 />
      <DivRow25 />
    </div>
  );
}

function SectionPySpaceMd() {
  return (
    <div className="bg-[#f1f1f1] relative shrink-0 w-full" data-name="section.py-space-md">
      <div className="content-stretch flex flex-col items-start px-[60px] py-[96px] relative w-full">
        <DivContainer2 />
      </div>
    </div>
  );
}

function LinkToOverview() {
  return (
    <a className="content-stretch cursor-pointer flex items-start pb-[16.39px] pt-[15px] px-[8px] relative shrink-0" data-name="link to Overview" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-intro">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] text-left whitespace-nowrap" role="link" tabIndex="0">
        <p className="leading-[22.4px]">Overview</p>
      </div>
      <div className="absolute bg-[#ffc627] bottom-0 h-[8px] left-0 right-0" data-name="::after" />
    </a>
  );
}

function LiNavItem11() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="li.nav-item">
      <LinkToOverview />
    </div>
  );
}

function LiNavItem12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.39px] pt-[15px] px-[8px] relative self-stretch shrink-0" data-name="li.nav-item">
      <a className="cursor-pointer flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-detail">
        <p className="leading-[22.4px]">Details</p>
      </a>
    </div>
  );
}

function LiNavItem13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.39px] pt-[15px] px-[8px] relative self-stretch shrink-0" data-name="li.nav-item">
      <a className="cursor-pointer flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-courses">
        <p className="leading-[22.4px]">Courses</p>
      </a>
    </div>
  );
}

function LiNavItem14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.39px] pt-[15px] px-[8px] relative self-stretch shrink-0" data-name="li.nav-item">
      <a className="cursor-pointer flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-careers">
        <p className="leading-[22.4px]">Careers</p>
      </a>
    </div>
  );
}

function LiNavItem15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.39px] pt-[15px] px-[8px] relative self-stretch shrink-0" data-name="li.nav-item">
      <a className="cursor-pointer flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-admissions">
        <p className="leading-[22.4px]">Admissions</p>
      </a>
    </div>
  );
}

function LiNavItem16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.39px] pt-[15px] px-[8px] relative self-stretch shrink-0" data-name="li.nav-item">
      <a className="cursor-pointer flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-accolades">
        <p className="leading-[22.4px]">Accolades</p>
      </a>
    </div>
  );
}

function LiNavItem17() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.39px] pt-[15px] px-[8px] relative self-stretch shrink-0" data-name="li.nav-item">
      <a className="cursor-pointer flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-cost">
        <p className="leading-[22.4px]">Tuition</p>
      </a>
    </div>
  );
}

function UlNavbarNav1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ul.navbar-nav">
      <LiNavItem11 />
      <LiNavItem12 />
      <LiNavItem13 />
      <LiNavItem14 />
      <LiNavItem15 />
      <LiNavItem16 />
      <LiNavItem17 />
    </div>
  );
}

function ABtn3() {
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
      <ABtn3 />
    </div>
  );
}

function ABtn4() {
  return (
    <div className="bg-[#ffc627] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px pb-[9.39px] pt-[8px] px-[17px] relative rounded-[804px]" data-name="a.btn">
      <div aria-hidden="true" className="absolute border border-[#ffc627] border-solid inset-0 pointer-events-none rounded-[804px]" />
      <a className="cursor-pointer flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" href="https://asuonline.asu.edu/online-degree-programs/undergraduate/accounting-degree/#program-rfi">
        <p className="leading-[22.4px]">Request Info</p>
      </a>
    </div>
  );
}

function ABtnMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[24px] relative self-stretch shrink-0" data-name="a.btn:margin">
      <ABtn4 />
    </div>
  );
}

function DivDFlex31() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="div.d-flex">
      <DivFsMedium />
      <ABtnMargin1 />
    </div>
  );
}

function DivSideMenu() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.side-menu">
      <DivDFlex31 />
    </div>
  );
}

function SecondaryNavigation() {
  return (
    <div className="content-stretch flex items-center pt-[8px] relative shrink-0 w-full" data-name="secondary navigation">
      <UlNavbarNav1 />
      <DivSideMenu />
    </div>
  );
}

function DivCol36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[62.39px] items-start min-h-px min-w-px relative" data-name="div.col-12">
      <SecondaryNavigation />
    </div>
  );
}

function DivRow26() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap items-start justify-center relative w-full">
        <DivCol36 />
      </div>
    </div>
  );
}

function SectionBgWhite() {
  return (
    <div className="bg-white shrink-0 sticky top-0 w-full" data-name="section.bg-white">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px px-[75px] relative w-full">
        <DivRow26 />
      </div>
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

function DivCol37() {
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

function DivDFlex32() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="div.d-flex">
      <AsuOnlineFacebookMargin />
      <AsuOnlineLinkedinMargin />
      <AsuOnlineInstagramMargin />
      <AsuOnlineYoutube />
    </div>
  );
}

function DivCol38() {
  return (
    <div className="flex-[1_0_0] max-w-[1320px] min-h-px min-w-px relative w-full" data-name="div.col-12">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[15px] relative size-full">
        <DivDFlex32 />
      </div>
    </div>
  );
}

function DivCol12Margin8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center max-w-[1320px] min-h-px min-w-px py-[10.5px] relative self-stretch" data-name="div.col-12:margin">
      <DivCol38 />
    </div>
  );
}

function DivRow27() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start relative shrink-0 w-[1320px]" data-name="div.row">
      <DivCol37 />
      <DivCol12Margin8 />
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

function DivContainer3() {
  return (
    <div className="max-w-[1320px] relative shrink-0 w-full" data-name="div.container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[inherit] px-[15px] relative w-full">
          <DivRow27 />
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
        <DivContainer3 />
      </div>
    </div>
  );
}

function P17() {
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

function Frame37() {
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

function DivFsMediumMargin1() {
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
      <Frame37 />
      <DivFsMediumMargin1 />
    </div>
  );
}

function Frame38() {
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
      <Frame38 />
      <APsSpaceXs />
    </div>
  );
}

function Frame39() {
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
      <Frame39 />
      <APsSpaceXs1 />
    </div>
  );
}

function Frame40() {
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
      <Frame40 />
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

function DivCol39() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-start max-w-[1320px] px-[15px] relative shrink-0 w-[330px]" data-name="div.col-12">
      <P17 />
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

function DivCol7() {
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

function DivCol8() {
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

function DivCol9() {
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

function DivCol10() {
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

function DivRow29() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start pb-[48px] relative shrink-0 w-full" data-name="div.row">
      <DivCol7 />
      <DivCol8 />
      <DivCol9 />
      <DivCol10 />
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

function DivCol11() {
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

function DivCol40() {
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

function DivRow30() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start relative shrink-0 w-full" data-name="div.row">
      <DivCol11 />
      <DivCol40 />
    </div>
  );
}

function DivDNone2() {
  return (
    <div className="content-stretch flex flex-col gap-[0.01px] h-[628.78px] items-start max-w-[1320px] relative shrink-0 w-[990px]" data-name="div.d-none">
      <DivRow29 />
      <DivRow30 />
    </div>
  );
}

function DivRow28() {
  return (
    <div className="content-end flex flex-wrap gap-0 items-end relative shrink-0 w-full" data-name="div.row">
      <div className="flex flex-row items-end self-stretch">
        <DivCol39 />
      </div>
      <DivDNone2 />
    </div>
  );
}

function SectionBgDark() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="section.bg-dark-3">
      <div className="content-stretch flex flex-col items-start pb-[48px] pt-[47.375px] px-[60px] relative w-full">
        <DivRow28 />
      </div>
    </div>
  );
}

function Div16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div">
      <DivBgDark />
      <SectionBgDark />
    </div>
  );
}

function ANavLink2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/about/locations-maps">
        <p className="cursor-pointer leading-[24px]">Maps and Locations</p>
      </a>
    </div>
  );
}

function ANavLink3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/asujobs">
        <p className="cursor-pointer leading-[24px]">Jobs</p>
      </a>
    </div>
  );
}

function ANavLink4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://isearch.asu.edu/asu-people/">
        <p className="cursor-pointer leading-[24px]">Directory</p>
      </a>
    </div>
  );
}

function ANavLink5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/about/contact">
        <p className="cursor-pointer leading-[24px]">Contact ASU</p>
      </a>
    </div>
  );
}

function ANavLink6() {
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
      <ANavLink2 />
      <ANavLink3 />
      <ANavLink4 />
      <ANavLink5 />
      <ANavLink6 />
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

function DivDFlex33() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="div.d-flex">
      <NavNav />
      <RepeatedlyRanked1On30ListsInTheLast3Years />
    </div>
  );
}

function DivCol41() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <DivDFlex33 />
      </div>
    </div>
  );
}

function DivRow31() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center relative shrink-0 w-full" data-name="div.row">
      <DivCol41 />
    </div>
  );
}

function SectionBgSecondary() {
  return (
    <div className="bg-[#ffc627] relative shrink-0 w-full" data-name="section.bg-secondary">
      <div className="content-stretch flex flex-col items-start px-[60px] relative w-full">
        <DivRow31 />
      </div>
    </div>
  );
}

function ANavLink7() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/about/copyright-trademark">
        <p className="cursor-pointer leading-[24px]">Copyright and Trademark</p>
      </a>
    </div>
  );
}

function ANavLink8() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://accessibility.asu.edu/report">
        <p className="cursor-pointer leading-[24px]">Accessibility</p>
      </a>
    </div>
  );
}

function ANavLink9() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/privacy/">
        <p className="cursor-pointer leading-[24px]">Privacy</p>
      </a>
    </div>
  );
}

function ANavLink10() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative self-stretch shrink-0" data-name="a.nav-link">
      <a className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap" href="https://www.asu.edu/tou/">
        <p className="cursor-pointer leading-[24px]">Terms of Use</p>
      </a>
    </div>
  );
}

function ANavLink11() {
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
      <ANavLink7 />
      <ANavLink8 />
      <ANavLink9 />
      <ANavLink10 />
      <ANavLink11 />
      <ButtonManualConsentoptout />
    </div>
  );
}

function DivCol42() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.col">
      <div className="content-stretch flex flex-col items-start px-[15px] relative size-full">
        <UniversityLegalAndCompliance />
      </div>
    </div>
  );
}

function DivRow32() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center relative shrink-0 w-full" data-name="div.row">
      <DivCol42 />
    </div>
  );
}

function SectionPbSpaceXl() {
  return (
    <div className="bg-[#f1f1f1] relative shrink-0 w-full" data-name="section.pb-space-xl">
      <div className="content-stretch flex flex-col items-start px-[60px] py-[16px] relative w-full">
        <DivRow32 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="footer">
      <Div16 />
      <SectionBgSecondary />
      <SectionPbSpaceXl />
    </div>
  );
}

export default function AsuoDesktop() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="ASUO Desktop">
      <HeaderBgWhite />
      <SectionProgramIntro />
      <Notifcation />
      <SectionProgramRfi />
      <SectionProgramDetail />
      <DivRow5 />
      <SectionProgramCourses />
      <SectionProgramCareers />
      <DivPtSpaceMd />
      <DivSpaLazy />
      <DivSpaLazy1 />
      <DivContainerLg1 />
      <DivSpaLazy2 />
      <SectionPySpaceMd />
      <SectionBgWhite />
      <Footer />
    </div>
  );
}