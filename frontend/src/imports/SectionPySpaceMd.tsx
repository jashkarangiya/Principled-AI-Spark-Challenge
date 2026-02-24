import svgPaths from "./svg-k926a935q5";
import imgBusinessAccountingAndBusinessDecisionsBa from "figma:asset/c918ea812d425535ac293c390dc6857f81a3dea7.png";
import imgBusinessBusinessAdministrationBa from "figma:asset/5c3df7bc056cf0a7a2c145a06887a3a068f28c54.png";
import imgEconomicsBsBusiness from "figma:asset/b9319d6707cb6f5e7a6302f22f8addf64cbeb131.png";
import imgBusinessFinancialPlanningBa from "figma:asset/9c16b99ff363e9465f82b5694c63d6a5f9619f71.png";

function H2H2Medium() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.h2-medium">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[36px] tracking-[-1.26px] w-full">
        <p className="leading-[43.2px] whitespace-pre-wrap">You might also be interested in</p>
      </div>
    </div>
  );
}

function DivCol() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="div.col">
      <H2H2Medium />
    </div>
  );
}

function DivRow() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center min-h-[91.19000244140625px] relative shrink-0 w-full" data-name="div.row">
      <DivCol />
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

function Div() {
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

function Div1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <BusinessAccountingAndBusinessDecisionsBaLearnMore />
    </div>
  );
}

function DivDFlex() {
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
    <div className="absolute bg-white content-stretch flex flex-col items-start left-px px-[16px] py-[8px] right-px top-[305.19px]" data-name="div.bg-white">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
      <DivDFlex />
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

function HrTitleUnderline() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[36.66px]" data-name="hr.title-underline" />;
}

function DivMtSpaceXs() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.mt-space-xs">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[23px] px-[16px] relative w-full">
        <H4H3Medium />
        <HrTitleUnderline />
      </div>
    </div>
  );
}

function PFsXs() {
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
      <PFsXs />
    </div>
  );
}

function DivDegreeSearchCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[190px] min-w-px relative w-full" data-name="div.degree-search-card">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <BusinessAccountingAndBusinessDecisionsBa />
      <DivBgWhite />
      <DivDegreeSearchCardBody />
    </div>
  );
}

function DivColMargin() {
  return (
    <div className="flex-[1_0_0] h-full max-w-[1350px] min-h-px min-w-px relative" data-name="div.col:margin">
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

function Div2() {
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

function Div3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <BusinessBusinessAdministrationBaLearnMore />
    </div>
  );
}

function DivDFlex1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.d-flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Div2 />
        <Div3 />
      </div>
    </div>
  );
}

function DivBgWhite1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-px px-[16px] py-[8px] right-px top-[305.19px]" data-name="div.bg-white">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
      <DivDFlex1 />
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

function HrTitleUnderline1() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[36.66px]" data-name="hr.title-underline" />;
}

function DivMtSpaceXs1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.mt-space-xs">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[23px] px-[16px] relative w-full">
        <H4H3Medium1 />
        <HrTitleUnderline1 />
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

function DivDegreeSearchCardBody1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[181px_1px_75.59px_1px] items-start pb-[24px] pt-[22.8px]" data-name="div.degree-search-card-body">
      <DivMtSpaceXs1 />
      <PFsXs1 />
    </div>
  );
}

function DivDegreeSearchCard1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[190px] min-w-px relative w-full" data-name="div.degree-search-card">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <BusinessBusinessAdministrationBa />
      <DivBgWhite1 />
      <DivDegreeSearchCardBody1 />
    </div>
  );
}

function DivColMargin1() {
  return (
    <div className="flex-[1_0_0] h-full max-w-[1350px] min-h-px min-w-px relative" data-name="div.col:margin">
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

function Div4() {
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

function Div5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <EconomicsBsBusinessLearnMore />
    </div>
  );
}

function DivDFlex2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.d-flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Div4 />
        <Div5 />
      </div>
    </div>
  );
}

function DivBgWhite2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-px px-[16px] py-[8px] right-px top-[305.19px]" data-name="div.bg-white">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
      <DivDFlex2 />
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

function HrTitleUnderline2() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[36.66px]" data-name="hr.title-underline" />;
}

function DivMtSpaceXs2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.mt-space-xs">
      <div className="content-stretch flex flex-col gap-[8.01px] items-start pb-[22.99px] px-[16px] relative w-full">
        <H4H3Medium2 />
        <HrTitleUnderline2 />
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

function DivDegreeSearchCardBody2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[181px_1px_75.59px_1px] items-start pb-[45.6px] pt-[23px]" data-name="div.degree-search-card-body">
      <DivMtSpaceXs2 />
      <PFsXs2 />
    </div>
  );
}

function DivDegreeSearchCard2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[190px] min-w-px relative w-full" data-name="div.degree-search-card">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <EconomicsBsBusiness />
      <DivBgWhite2 />
      <DivDegreeSearchCardBody2 />
    </div>
  );
}

function DivColMargin2() {
  return (
    <div className="flex-[1_0_0] h-full max-w-[1350px] min-h-px min-w-px relative" data-name="div.col:margin">
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

function Div6() {
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

function Div7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <BusinessFinancialPlanningBaLearnMore />
    </div>
  );
}

function DivDFlex3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.d-flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Div6 />
        <Div7 />
      </div>
    </div>
  );
}

function DivBgWhite3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-px px-[16px] py-[8px] right-px top-[305.19px]" data-name="div.bg-white">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
      <DivDFlex3 />
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

function HrTitleUnderline3() {
  return <div className="bg-[#ffc627] h-[2px] shrink-0 w-[36.66px]" data-name="hr.title-underline" />;
}

function DivMtSpaceXs3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.mt-space-xs">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[23px] px-[16px] relative w-full">
        <H4H3Medium3 />
        <HrTitleUnderline3 />
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

function DivDegreeSearchCardBody3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[181px_1px_75.59px_1px] items-start pb-[24px] pt-[22.8px]" data-name="div.degree-search-card-body">
      <DivMtSpaceXs3 />
      <PFsXs3 />
    </div>
  );
}

function DivDegreeSearchCard3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[190px] min-w-px relative w-full" data-name="div.degree-search-card">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-b-7 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <BusinessFinancialPlanningBa />
      <DivBgWhite3 />
      <DivDegreeSearchCardBody3 />
    </div>
  );
}

function DivColMargin3() {
  return (
    <div className="flex-[1_0_0] h-full max-w-[1350px] min-h-px min-w-px relative" data-name="div.col:margin">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pb-[32px] px-[15px] relative size-full">
          <DivDegreeSearchCard3 />
        </div>
      </div>
    </div>
  );
}

function DivRow1() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 h-[412.78px] items-start justify-center relative shrink-0 w-[1350px]" data-name="div.row">
      <DivColMargin />
      <DivColMargin1 />
      <DivColMargin2 />
      <DivColMargin3 />
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
            <p className="cursor-pointer">
              <span className="leading-[24px]">S</span>
              <span className="leading-[24px]">ee other careers</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

function DivCol1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1350px] px-[15px] relative shrink-0 w-[450px]" data-name="div.col-12">
      <ABtn />
    </div>
  );
}

function DivRow2() {
  return (
    <div className="content-center flex flex-wrap items-center justify-center relative shrink-0 w-[1350px]" data-name="div.row">
      <DivCol1 />
    </div>
  );
}

function DivContainer() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1320px] relative shrink-0 w-full" data-name="div.container">
      <DivRow />
      <DivRow1 />
      <DivRow2 />
    </div>
  );
}

export default function SectionPySpaceMd() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex flex-col items-start px-[60px] py-[96px] relative size-full" data-name="section.py-space-md">
      <DivContainer />
    </div>
  );
}