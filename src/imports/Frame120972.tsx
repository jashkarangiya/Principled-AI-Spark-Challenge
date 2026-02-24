import imgSectionProgramCourses from "figma:asset/246706e29030f783e2d25b7656d4d29484ca9389.png";

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

export default function Frame() {
  return (
    <div className="relative size-full">
      <SectionProgramCourses />
      <Heading />
      <Paragraph />
      <Container />
    </div>
  );
}