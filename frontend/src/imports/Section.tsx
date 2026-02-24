import imgCardImage from "figma:asset/2c9cdd172a089dae4196d2e41e306c8d547f3e5b.png";

function Heading() {
  return (
    <div className="absolute h-[43px] left-[246px] top-[31.6px] w-[1140px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[43.2px] left-0 not-italic text-[#191919] text-[36px] top-0 tracking-[-1.26px] w-[575px] whitespace-pre-wrap">ASU degrees that lead to this career</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-[246px] top-[90.6px] w-[1140px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#555] text-[16px] top-0 w-[149px] whitespace-pre-wrap">8 programs available</p>
    </div>
  );
}

function CardImage() {
  return (
    <div className="h-[391px] pointer-events-none relative shrink-0 w-full" data-name="cardImage">
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[100.28%] left-0 max-w-none top-0 w-[167.53%]" src={imgCardImage} />
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc627] border-r-7 border-solid inset-0" />
    </div>
  );
}

function DivCol() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1068px] relative shrink-0 w-[292px]" data-name="div.col-12">
      <CardImage />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[28.8px] left-0 top-0 w-[1014.4px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[28.8px] left-0 not-italic text-[#191919] text-[24px] top-[-0.2px] tracking-[-0.6px]">BS in Business Data Analytics</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[21px] left-0 top-[36.8px] w-[1014.4px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#555] text-[14px] top-[0.4px]">W. P. Carey School of Business</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[89.8px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[65.8px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">Courses that build key skills:</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#191919] text-[13px] top-[0.4px]">CIS 235 — Intro to Programming</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[31.5px] items-start pt-[6px] px-[12px] relative rounded-[4px] shrink-0 w-[213.313px]" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#191919] text-[13px] top-[0.4px]">SCM 300 — Data Analytics</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[31.5px] items-start pt-[6px] px-[12px] relative rounded-[4px] shrink-0 w-[180.8px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#191919] text-[13px] top-[0.4px]">CIS 450 — Database Management</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[31.5px] items-start pt-[6px] px-[12px] relative rounded-[4px] shrink-0 w-[226.35px]" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[89.3px] items-start pt-[24.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Paragraph2 />
      <Container5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[38px] left-[0.2px] rounded-[804px] top-[0.1px] w-[164px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[804px]" />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Link">
      <p className="font-['Arial:Bold',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-black text-center">Explore this degree</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#ffc627] content-stretch flex gap-[10px] items-start px-[17px] py-[9px] relative rounded-[804px] shrink-0 w-[164px]" data-name="Container">
      <Container11 />
      <Link />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[49.6px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pr-[830.175px] pt-[24px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start px-[32px] py-[33px] relative shrink-0 w-[906px]" data-name="Container">
      <Container2 />
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">{`This degree combines statistical rigor with business context — you'll learn SQL, Python, and Tableau while understanding how data drives real business decisions.`}</p>
      <Container4 />
      <Container9 />
    </div>
  );
}

function DivImageSideLeft() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.image-side-left">
      <DivCol />
      <Container1 />
    </div>
  );
}

function CardImage1() {
  return (
    <div className="h-[391px] pointer-events-none relative shrink-0 w-full" data-name="cardImage">
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[100.28%] left-0 max-w-none top-0 w-[167.53%]" src={imgCardImage} />
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc627] border-r-7 border-solid inset-0" />
    </div>
  );
}

function DivCol1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1068px] relative shrink-0 w-[292px]" data-name="div.col-12">
      <CardImage1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[28.8px] left-0 top-0 w-[1014.4px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[28.8px] left-0 not-italic text-[#191919] text-[24px] top-[-0.2px] tracking-[-0.6px]">BS in Applied Mathematics (Data Science)</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[21px] left-0 top-[36.8px] w-[1014.4px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#555] text-[14px] top-[0.4px]">College of Liberal Arts and Sciences</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] h-[89.8px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading2 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[65.8px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">Courses that build key skills:</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#191919] text-[13px] top-[0.4px]">MAT 343 — Applied Linear Algebra</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[31.5px] items-start pt-[6px] px-[12px] relative rounded-[4px] shrink-0 w-[225.887px]" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#191919] text-[13px] top-[0.4px]">STP 420 — Probability</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[31.5px] items-start pt-[6px] px-[12px] relative rounded-[4px] shrink-0 w-[155.275px]" data-name="Container">
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#191919] text-[13px] top-[0.4px]">CSE 310 — Data Structures</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[31.5px] items-start pt-[6px] px-[12px] relative rounded-[4px] shrink-0 w-[186.588px]" data-name="Container">
      <Paragraph10 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[89.3px] items-start pt-[24.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Paragraph7 />
      <Container16 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[38px] left-[0.2px] rounded-[804px] top-[0.1px] w-[164px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[804px]" />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Link">
      <p className="font-['Arial:Bold',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-black text-center">Explore this degree</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#ffc627] content-stretch flex gap-[10px] items-start px-[17px] py-[9px] relative rounded-[804px] shrink-0 w-[164px]" data-name="Container">
      <Container22 />
      <Link1 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[49.6px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pr-[830.175px] pt-[24px] relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start px-[32px] py-[33px] relative shrink-0 w-[906px]" data-name="Container">
      <Container13 />
      <div className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Ideal for students who want deep mathematical foundations in machine learning and statistical modeling.</p>
        <p>&nbsp;</p>
      </div>
      <Container15 />
      <Container20 />
    </div>
  );
}

function DivImageSideLeft1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.image-side-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <DivCol1 />
        <Container12 />
      </div>
    </div>
  );
}

function DivBorder() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-px relative shrink-0 w-[1200px]" data-name="div.border">
      <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-0 pointer-events-none" />
      <DivImageSideLeft1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[813px] items-start left-[246px] top-[146.6px] w-[1200px]" data-name="Container">
      <DivImageSideLeft />
      <DivBorder />
    </div>
  );
}

export default function Section() {
  return (
    <div className="relative size-full" data-name="Section">
      <Heading />
      <Paragraph />
      <Container />
    </div>
  );
}