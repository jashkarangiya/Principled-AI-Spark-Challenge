function Container1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.18px]">Courses that build key skills:</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[31.5px] left-0 rounded-[4px] top-0 w-[235.659px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-[12px] not-italic text-[#191919] text-[13px] top-[6.18px]">HSE 210 — Intro to Human Systems</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[31.5px] left-[243.66px] rounded-[4px] top-0 w-[209.67px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-[12px] not-italic text-[#191919] text-[13px] top-[6.18px]">HSE 420 — Usability Evaluation</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[31.5px] left-0 rounded-[4px] top-[39.5px] w-[190.886px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-[12px] not-italic text-[#191919] text-[13px] top-[6.18px]">HSE 430 — Interface Design</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[31.5px] left-[198.89px] rounded-[4px] top-[39.5px] w-[232.773px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-[12px] not-italic text-[#191919] text-[13px] top-[6.18px]">CSE 205 — Programming Concepts</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[71px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}