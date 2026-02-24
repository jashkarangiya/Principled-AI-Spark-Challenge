import svgPaths from "./svg-2pbttkhte1";
import imgImage from "figma:asset/3be6e3ff51aea25610418a0776cc98d56609b97a.png";
import imgImageDataAnalyst from "figma:asset/10c423e1aa51277da4683217b21abb006a4e7d7f.png";
import imgCardImage from "figma:asset/2c9cdd172a089dae4196d2e41e306c8d547f3e5b.png";
import imgImageAsuAnalyticsInternshipProgram from "figma:asset/28ad8738a7c34abe846a457acd0e47c176e373f8.png";
import imgImageDataScienceClub from "figma:asset/543c06e83342b4e46744bec27a24bf72648f41e5.png";
import imgImageTableauStudentCertification from "figma:asset/0d1d4c445429bd62c2ecc1c64433ae2e292654e8.png";
import imgImageFinancialAnalyst from "figma:asset/af60d058b7b3508ce30c4eaeee41d761716dadce.png";
import imgSectionProgramCourses from "figma:asset/246706e29030f783e2d25b7656d4d29484ca9389.png";
import imgAsuOnline from "figma:asset/cd09da2a96204938270dfd11e4f75ca7a2a9fb47.png";
import imgRepeatedlyRanked1On30ListsInTheLast3Years from "figma:asset/904126d9185baab1838c2812e90445690e55a6fe.png";

function Paragraph() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[60.025px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.8px] left-0 not-italic text-[#191919] text-[12px] top-[-0.4px]">ASU Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[16px] top-[7.5px] w-[60.025px]" data-name="Link">
      <Paragraph />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[32.6px] left-0 top-0 w-[84.025px]" data-name="Container">
      <Link />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[43.35px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.8px] left-0 not-italic text-[#191919] text-[12px] top-[-0.4px]">My ASU</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[16px] top-[7.5px] w-[43.35px]" data-name="Link">
      <Paragraph1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[32.6px] left-[84.03px] top-0 w-[67.35px]" data-name="Container">
      <Link1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[116.075px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.8px] left-0 not-italic text-[#191919] text-[12px] top-[-0.4px]">Colleges and Schools</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[16px] top-[7.5px] w-[116.075px]" data-name="Link">
      <Paragraph2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[32.6px] left-[151.38px] top-0 w-[140.075px]" data-name="Container">
      <Link2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[36.7px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.8px] left-0 not-italic text-[#191919] text-[12px] top-[-0.4px]">Sign in</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[16px] top-[7.5px] w-[36.7px]" data-name="Link">
      <Paragraph3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[32.6px] left-[291.45px] top-0 w-[60.7px]" data-name="Container">
      <Link3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[32.6px] left-[1159.85px] top-[3px] w-[352.15px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function OpenSearch() {
  return (
    <div className="absolute contents inset-0" data-name="open search">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9993 14">
        <path d={svgPaths.p2ddc5300} fill="var(--fill-0, black)" id="Vector" />
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <OpenSearch />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[6px] size-[14px] top-[3.75px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute left-[7px] size-[20px] top-[3px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute left-[1512px] overflow-clip size-[30px] top-[4.3px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[38.6px] left-[15px] top-0 w-[1542px]" data-name="Container">
      <Container5 />
      <Container10 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[38.6px] left-0 top-0 w-[1572px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[38.6px] left-[60px] top-0 w-[1572px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#f1f1f1] h-[38.6px] left-0 top-0 w-[1692px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container14() {
  return <div className="absolute border-[#d0d0d0] border-b-[0.8px] border-solid h-[109px] left-0 top-0 w-[1692px]" data-name="Container" />;
}

function Image() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[72px] items-start left-0 overflow-clip top-[16px] w-[93.213px]" data-name="Container">
      <Image />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[108px] left-0 top-0 w-[109.213px]" data-name="Link">
      <Container19 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[1432.787px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#191919] text-[36px] top-[0.6px] tracking-[-0.56px]">ASU Online</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36px] items-start justify-center left-0 top-0 w-[1432.787px]" data-name="Link">
      <Paragraph4 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[1432.787px]" data-name="Container">
      <Link5 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[1432.787px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[40px] left-0 top-[24px] w-[1432.787px]" data-name="Container">
      <Container22 />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute contents inset-[0_0.01%_0_0.02%]" data-name="Home">
      <div className="absolute inset-[0_0.01%_0_0.02%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9954 16">
          <path d={svgPaths.p12ef2400} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Home />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16px] items-start left-[12px] top-[11px] w-[18px]" data-name="Link">
      <Icon1 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[36px] left-[-8px] top-0 w-[44px]" data-name="Container">
      <Link6 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[115.613px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[58px] not-italic text-[#191919] text-[16px] text-center top-[0.2px]">Explore Careers</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-[8px] top-[8px] w-[115.613px]" data-name="Link">
      <Paragraph5 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[36px] left-[4px] top-0 w-[131.613px]" data-name="Container">
      <Link7 />
    </div>
  );
}

function Container31() {
  return <div className="absolute bg-[#ffc627] h-[8px] left-[4px] top-[28px] w-[139.163px]" data-name="Container" />;
}

function Container29() {
  return (
    <div className="absolute h-[36px] left-[36px] top-0 w-[139.613px]" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[111.175px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">Online Degrees</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-0 top-0 w-[111.175px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[24px] left-[4px] top-0 w-[119.175px]" data-name="Container">
      <Container37 />
    </div>
  );
}

function OpenDropdown() {
  return (
    <div className="absolute contents inset-[31.24%_6.24%_18.75%_6.24%]" data-name="Open dropdown">
      <div className="absolute inset-[31.24%_6.24%_18.75%_6.24%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5035 6.00117">
          <path d={svgPaths.p27c7fe00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <OpenDropdown />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[123.17px] size-[12px] top-[6px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[139.175px]" data-name="Container">
      <Container36 />
      <Container38 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[24px] left-0 top-[8px] w-[139.175px]" data-name="Container">
      <Container35 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[36px] left-[4px] top-0 w-[139.175px]" data-name="Container">
      <Container34 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[36px] left-[175.61px] top-0 w-[147.175px]" data-name="Container">
      <Container33 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.438px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">Tuition</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-0 top-0 w-[47.438px]" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[24px] left-[4px] top-0 w-[55.438px]" data-name="Container">
      <Container44 />
    </div>
  );
}

function OpenDropdown1() {
  return (
    <div className="absolute contents inset-[31.24%_6.24%_18.75%_6.24%]" data-name="Open dropdown">
      <div className="absolute inset-[31.24%_6.24%_18.75%_6.24%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5035 6.00117">
          <path d={svgPaths.p27c7fe00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <OpenDropdown1 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[59.44px] size-[12px] top-[6px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[75.438px]" data-name="Container">
      <Container43 />
      <Container45 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[24px] left-0 top-[8px] w-[75.438px]" data-name="Container">
      <Container42 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[36px] left-[4px] top-0 w-[75.438px]" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[36px] left-[322.79px] top-0 w-[83.438px]" data-name="Container">
      <Container40 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[73.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[37px] not-italic text-[#191919] text-[16px] text-center top-[0.2px]">Admission</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-[8px] top-[8px] w-[73.813px]" data-name="Link">
      <Paragraph8 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[36px] left-[4px] top-0 w-[89.813px]" data-name="Container">
      <Link8 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[36px] left-[406.22px] top-0 w-[97.813px]" data-name="Container">
      <Container47 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[139.65px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">Student Experience</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-0 top-0 w-[139.65px]" data-name="Container">
      <Paragraph9 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[24px] left-[4px] top-0 w-[147.65px]" data-name="Container">
      <Container53 />
    </div>
  );
}

function OpenDropdown2() {
  return (
    <div className="absolute contents inset-[31.24%_6.24%_18.75%_6.24%]" data-name="Open dropdown">
      <div className="absolute inset-[31.24%_6.24%_18.75%_6.24%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5035 6.00117">
          <path d={svgPaths.p27c7fe00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <OpenDropdown2 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[151.65px] size-[12px] top-[6px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[167.65px]" data-name="Container">
      <Container52 />
      <Container54 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[24px] left-0 top-[8px] w-[167.65px]" data-name="Container">
      <Container51 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[36px] left-[4px] top-0 w-[167.65px]" data-name="Container">
      <Container50 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[36px] left-[504.04px] top-0 w-[175.65px]" data-name="Container">
      <Container49 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[76.463px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[38.5px] not-italic text-[#191919] text-[16px] text-center top-[0.2px]">Newsroom</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-[8px] top-[8px] w-[76.463px]" data-name="Link">
      <Paragraph10 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[36px] left-[4px] top-0 w-[92.463px]" data-name="Container">
      <Link9 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[36px] left-[679.69px] top-0 w-[100.463px]" data-name="Container">
      <Container56 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[41.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">About</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-0 top-0 w-[41.813px]" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[24px] left-[4px] top-0 w-[49.813px]" data-name="Container">
      <Container62 />
    </div>
  );
}

function OpenDropdown3() {
  return (
    <div className="absolute contents inset-[31.24%_6.24%_18.75%_6.24%]" data-name="Open dropdown">
      <div className="absolute inset-[31.24%_6.24%_18.75%_6.24%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5035 6.00117">
          <path d={svgPaths.p27c7fe00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <OpenDropdown3 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[53.81px] size-[12px] top-[6px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[69.813px]" data-name="Container">
      <Container61 />
      <Container63 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[24px] left-0 top-[8px] w-[69.813px]" data-name="Container">
      <Container60 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[36px] left-[4px] top-0 w-[69.813px]" data-name="Container">
      <Container59 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[36px] left-[780.15px] top-0 w-[77.813px]" data-name="Container">
      <Container58 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[857.963px]" data-name="Container">
      <Container28 />
      <Container29 />
      <Container32 />
      <Container39 />
      <Container46 />
      <Container48 />
      <Container55 />
      <Container57 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white h-[36px] left-0 top-0 w-[857.963px]" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[36px] left-0 top-[8px] w-[857.963px]" data-name="Container">
      <Container26 />
    </div>
  );
}

function Container67() {
  return <div className="absolute border-[#ffc627] border-[0.8px] border-solid h-[37.6px] left-0 rounded-[804px] top-0 w-[104.775px]" data-name="Container" />;
}

function Paragraph12() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-[70.775px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[19.6px] left-[35.5px] not-italic text-[14px] text-black text-center top-[-0.4px]">Apply now</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.6px] items-start justify-center left-[17px] top-[9px] w-[70.775px]" data-name="Link">
      <Paragraph12 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute bg-[#ffc627] h-[37.6px] left-[16px] rounded-[804px] top-0 w-[104.775px]" data-name="Container">
      <Container67 />
      <Link10 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[37.6px] left-0 top-0 w-[120.775px]" data-name="Container">
      <Container66 />
    </div>
  );
}

function Container70() {
  return <div className="absolute border-[#ffc627] border-[0.8px] border-solid h-[37.6px] left-0 rounded-[804px] top-0 w-[118.787px]" data-name="Container" />;
}

function Paragraph13() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-[84.787px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[19.6px] left-[42.5px] not-italic text-[14px] text-black text-center top-[-0.4px]">Request info</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.6px] items-start justify-center left-[17px] top-[9px] w-[84.787px]" data-name="Link">
      <Paragraph13 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute bg-[#ffc627] h-[37.6px] left-[16px] rounded-[804px] top-0 w-[118.787px]" data-name="Container">
      <Container70 />
      <Link11 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[37.6px] left-[120.77px] top-0 w-[134.788px]" data-name="Container">
      <Container69 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[37.6px] left-[1177.24px] top-[-1.59px] w-[255.563px]" data-name="Container">
      <Container65 />
      <Container68 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[44px] left-0 top-[64px] w-[1432.787px]" data-name="Container">
      <Container25 />
      <Container64 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[108px] left-[109.21px] top-0 w-[1432.787px]" data-name="Container">
      <Container21 />
      <Container24 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[108px] left-[15px] top-0 w-[1542px]" data-name="Container">
      <Link4 />
      <Container20 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[108px] left-0 top-0 w-[1572px]" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[108px] left-[60px] top-0 w-[1572px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[109px] left-0 top-0 w-[1692px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[109px] left-0 top-[38.6px] w-[1692px]" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-[147.6px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container13 />
    </div>
  );
}

function Container71() {
  return <div className="absolute h-[144px] left-0 top-[585.6px] w-[1692px]" data-name="Container" />;
}

function ImageDataAnalyst() {
  return (
    <div className="h-[512px] relative shrink-0 w-full" data-name="Image (Data Analyst)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageDataAnalyst} />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col h-[512px] items-start left-0 overflow-clip top-0 w-[1692px]" data-name="Container">
      <ImageDataAnalyst />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[57.6px] relative shrink-0 w-[268.825px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[57.6px] left-0 not-italic text-[#191919] text-[48px] top-[0.6px] tracking-[-1.68px]">Data Analyst</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex flex-col h-[57.6px] items-start justify-center left-[47px] top-[32px] w-[268.825px]" data-name="Container">
      <Paragraph14 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute bg-white h-[121px] left-[246px] top-[464.4px] w-[1200px]" data-name="Container">
      <Container74 />
    </div>
  );
}

function Section() {
  return (
    <div className="h-[649px] relative shrink-0 w-full" data-name="Section">
      <Container71 />
      <Container72 />
      <Container73 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[28.8px] relative shrink-0 w-[521px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[28.8px] left-0 not-italic text-[#191919] text-[32px] top-[1.8px] tracking-[-0.6px]">What you may do in this career</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28.8px] items-start justify-center left-[47px] top-[32px] w-[521px]" data-name="Container">
      <Paragraph15 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[21px] left-[8.1px] top-[1.5px] w-[7.787px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">1</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute bg-[#ffc627] left-0 rounded-[26843500px] size-[24px] top-[24px]" data-name="Container">
      <Paragraph16 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[72px] left-[36px] top-0 w-[437px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px] w-[414px] whitespace-pre-wrap">Review overnight dashboard alerts and prepare executive summary for stakeholder meeting on customer retention trends.</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[72px] left-[24px] top-0 w-[473px]" data-name="Container">
      <Container82 />
      <Paragraph17 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[21px] left-[8.1px] top-[1.5px] w-[7.787px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">2</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute bg-[#ffc627] left-0 rounded-[26843500px] size-[24px] top-[12px]" data-name="Container">
      <Paragraph18 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[48px] left-[36px] top-0 w-[437px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px] w-[427px] whitespace-pre-wrap">Clean and merge three datasets from marketing, sales, and customer support to identify cross-channel patterns.</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[88px] w-[473px]" data-name="Container">
      <Container84 />
      <Paragraph19 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[21px] left-[8.1px] top-[1.5px] w-[7.787px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">3</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute bg-[#ffc627] left-0 rounded-[26843500px] size-[24px] top-[24px]" data-name="Container">
      <Paragraph20 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[72px] left-[36px] top-0 w-[437px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px] w-[427px] whitespace-pre-wrap">Build interactive Tableau dashboard to visualize product performance across regions and present findings to product team.</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute h-[72px] left-[24px] top-[152px] w-[473px]" data-name="Container">
      <Container86 />
      <Paragraph21 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[21px] left-[8.1px] top-[1.5px] w-[7.787px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">4</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute bg-[#ffc627] left-0 rounded-[26843500px] size-[24px] top-[12px]" data-name="Container">
      <Paragraph22 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[48px] left-[36px] top-0 w-[437px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px] w-[413px] whitespace-pre-wrap">Collaborate with engineering to refine data pipeline and document analysis methodology for future team members.</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[240px] w-[473px]" data-name="Container">
      <Container88 />
      <Paragraph23 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[21px] left-[8.1px] top-[1.5px] w-[7.787px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">5</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute bg-[#ffc627] left-0 rounded-[26843500px] size-[24px] top-[12px]" data-name="Container">
      <Paragraph24 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[48px] left-[36px] top-0 w-[437px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px] w-[421px] whitespace-pre-wrap">Participate in data team standup to share insights and plan upcoming A/B test analysis for new product features.</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[304px] w-[473px]" data-name="Container">
      <Container90 />
      <Paragraph25 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[352px] left-0 top-[12px] w-[521px]" data-name="Container">
      <Container81 />
      <Container83 />
      <Container85 />
      <Container87 />
      <Container89 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[364px] left-[47px] top-[84.8px] w-[521px]" data-name="Container">
      <Container80 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[480.8px] left-0 top-[24px] w-[600px]" data-name="Container">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Container93() {
  return <div className="absolute border-[#ffc627] border-l-8 border-solid h-[401px] left-[-8px] top-0 w-[544px]" data-name="Container" />;
}

function Paragraph26() {
  return (
    <div className="h-[19.6px] relative shrink-0 w-[122.15px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.6px] left-0 not-italic text-[14px] text-white top-[-0.4px]">Growth and salary</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.6px] items-start justify-center left-[8px] top-[4px] w-[122.15px]" data-name="Container">
      <Paragraph26 />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute bg-[#191919] h-[27.6px] left-[24px] top-[24px] w-[138.15px]" data-name="Container">
      <Container96 />
    </div>
  );
}

function Container98() {
  return <div className="absolute bg-[#d0d0d0] h-[104px] left-[162px] top-0 w-px" data-name="Container" />;
}

function Container99() {
  return <div className="absolute bg-[#d0d0d0] h-[104px] left-[325px] top-0 w-px" data-name="Container" />;
}

function Container100() {
  return <div className="absolute border-[#d0d0d0] border-[0.8px] border-solid h-[104px] left-0 top-0 w-[488px]" data-name="Container" />;
}

function Paragraph27() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[16px] w-[46.55px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[40px] left-0 not-italic text-[#191919] text-[18px] top-[0.6px]">+23%</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[68px] w-[80.05px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#191919] text-[12px] top-[0.2px]">10-year growth</p>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute bg-white h-[104px] left-0 top-0 w-[162px]" data-name="Container">
      <Paragraph27 />
      <Paragraph28 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[40px] left-[16px] top-[16px] w-[55.063px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[40px] left-0 not-italic text-[#191919] text-[18px] top-[0.6px]">13,500</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[68px] w-[89.412px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#191919] text-[12px] top-[0.2px]">Annual openings</p>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute bg-white h-[104px] left-[163px] top-0 w-[162px]" data-name="Container">
      <Paragraph29 />
      <Paragraph30 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[16px] w-[36.038px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[40px] left-0 not-italic text-[#191919] text-[18px] top-[0.6px]">35%</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[68px] w-[33.338px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#191919] text-[12px] top-[0.2px]">AI risk</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute bg-white h-[104px] left-[326px] top-0 w-[162px]" data-name="Container">
      <Paragraph31 />
      <Paragraph32 />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute h-[104px] left-[24px] top-[75.6px] w-[488px]" data-name="Container">
      <Container98 />
      <Container99 />
      <Container100 />
      <Container101 />
      <Container102 />
      <Container103 />
    </div>
  );
}

function Container105() {
  return <div className="bg-[#d0d0d0] h-px shrink-0 w-[488px]" data-name="Container" />;
}

function Icon6() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_5.02%_0_4.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.78579 12">
          <path d={svgPaths.p3c712f00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-0 top-0 w-[7.5px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_5.02%_0_4.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.78579 12">
          <path d={svgPaths.p3c712f00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[7.5px] top-0 w-[7.5px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute h-[12px] left-0 top-[6px] w-[15px]" data-name="Container">
      <Container110 />
      <Container111 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[24px] relative shrink-0 w-[121.825px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">Entry level salary</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-[23px] top-0 w-[121.825px]" data-name="Container">
      <Paragraph33 />
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute h-[24px] left-0 top-[8.4px] w-[252px]" data-name="Container">
      <Container109 />
      <Container112 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[24px] left-[430.16px] top-[8.4px] w-[57.838px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">$52,000</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute h-[40.8px] left-0 top-0 w-[488px]" data-name="Container">
      <Container108 />
      <Paragraph34 />
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[40.8px] relative shrink-0 w-[488px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container107 />
      </div>
    </div>
  );
}

function Container113() {
  return <div className="bg-[#d0d0d0] h-px shrink-0 w-[488px]" data-name="Container" />;
}

function Icon8() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_5.02%_0_4.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.78579 12">
          <path d={svgPaths.p3c712f00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-0 top-0 w-[7.5px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_5.02%_0_4.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.78579 12">
          <path d={svgPaths.p3c712f00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[7.5px] top-0 w-[7.5px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute h-[12px] left-0 top-[6px] w-[15px]" data-name="Container">
      <Container118 />
      <Container119 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[24px] relative shrink-0 w-[99.613px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">Median salary</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-[23px] top-0 w-[99.613px]" data-name="Container">
      <Paragraph35 />
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute h-[24px] left-0 top-[10.4px] w-[252px]" data-name="Container">
      <Container117 />
      <Container120 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[28px] left-[415.7px] top-[8.4px] w-[72.3px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#8c1d40] text-[20px] top-[-0.6px]">$76,000</p>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute h-[44.8px] left-0 top-0 w-[488px]" data-name="Container">
      <Container116 />
      <Paragraph36 />
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[44.8px] relative shrink-0 w-[488px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container115 />
      </div>
    </div>
  );
}

function Container121() {
  return <div className="bg-[#d0d0d0] h-px shrink-0 w-[488px]" data-name="Container" />;
}

function Icon10() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_5.02%_0_4.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.78579 12">
          <path d={svgPaths.p3c712f00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-0 top-0 w-[7.5px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_5.02%_0_4.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.78579 12">
          <path d={svgPaths.p3c712f00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[7.5px] top-0 w-[7.5px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute h-[12px] left-0 top-[6px] w-[15px]" data-name="Container">
      <Container126 />
      <Container127 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[24px] relative shrink-0 w-[123.625px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">Top earner salary</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-[23px] top-0 w-[123.625px]" data-name="Container">
      <Paragraph37 />
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute h-[24px] left-0 top-[10.4px] w-[252px]" data-name="Container">
      <Container125 />
      <Container128 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute h-[24px] left-[422.14px] top-[10.4px] w-[65.863px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">$118,000</p>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute h-[44.8px] left-0 top-0 w-[488px]" data-name="Container">
      <Container124 />
      <Paragraph38 />
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[44.8px] relative shrink-0 w-[488px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container123 />
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[173.4px] items-start left-[24px] top-[203.6px] w-[488px]" data-name="Container">
      <Container105 />
      <Container106 />
      <Container113 />
      <Container114 />
      <Container121 />
      <Container122 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute h-[401px] left-0 top-0 w-[536px]" data-name="Container">
      <Container95 />
      <Container97 />
      <Container104 />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute bg-[#f1f1f1] h-[401px] left-[32px] top-[32px] w-[536px]" data-name="Container">
      <Container93 />
      <Container94 />
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute h-[465px] left-[600px] top-[24px] w-[600px]" data-name="Container">
      <Container92 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute bg-white h-[528.8px] left-[246px] top-0 w-[1200px]" data-name="Container">
      <Container77 />
      <Container91 />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[560.8px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container76 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[43px] left-[246px] top-[31.6px] w-[1140px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[43.2px] left-0 not-italic text-[#191919] text-[36px] top-0 tracking-[-1.26px] w-[575px] whitespace-pre-wrap">ASU degrees that lead to this career</p>
    </div>
  );
}

function Paragraph39() {
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

function DivCol8() {
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

function Paragraph40() {
  return (
    <div className="absolute h-[21px] left-0 top-[36.8px] w-[1014.4px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#555] text-[14px] top-[0.4px]">W. P. Carey School of Business</p>
    </div>
  );
}

function Container132() {
  return (
    <div className="flex-[1_0_0] h-[89.8px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading1 />
        <Paragraph40 />
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex h-[65.8px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container132 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">Courses that build key skills:</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#191919] text-[13px] top-[0.4px]">CIS 235 — Intro to Programming</p>
    </div>
  );
}

function Container135() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[31.5px] items-start pt-[6px] px-[12px] relative rounded-[4px] shrink-0 w-[213.313px]" data-name="Container">
      <Paragraph42 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#191919] text-[13px] top-[0.4px]">SCM 300 — Data Analytics</p>
    </div>
  );
}

function Container136() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[31.5px] items-start pt-[6px] px-[12px] relative rounded-[4px] shrink-0 w-[180.8px]" data-name="Container">
      <Paragraph43 />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#191919] text-[13px] top-[0.4px]">CIS 450 — Database Management</p>
    </div>
  );
}

function Container137() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[31.5px] items-start pt-[6px] px-[12px] relative rounded-[4px] shrink-0 w-[226.35px]" data-name="Container">
      <Paragraph44 />
    </div>
  );
}

function Container134() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container135 />
      <Container136 />
      <Container137 />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[89.3px] items-start pt-[24.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Paragraph41 />
      <Container134 />
    </div>
  );
}

function Container140() {
  return (
    <div className="absolute h-[38px] left-[0.2px] rounded-[804px] top-[0.1px] w-[164px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[804px]" />
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Link">
      <p className="font-['Arial:Bold',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-black text-center">Explore this degree</p>
    </div>
  );
}

function Container139() {
  return (
    <div className="bg-[#ffc627] content-stretch flex gap-[10px] items-start px-[17px] py-[9px] relative rounded-[804px] shrink-0 w-[164px]" data-name="Container">
      <Container140 />
      <Link12 />
    </div>
  );
}

function Container138() {
  return (
    <div className="h-[49.6px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pr-[830.175px] pt-[24px] relative size-full">
        <Container139 />
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start px-[32px] py-[33px] relative shrink-0 w-[906px]" data-name="Container">
      <Container131 />
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">{`This degree combines statistical rigor with business context — you'll learn SQL, Python, and Tableau while understanding how data drives real business decisions.`}</p>
      <Container133 />
      <Container138 />
    </div>
  );
}

function DivImageSideLeft() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="div.image-side-left">
      <DivCol8 />
      <Container130 />
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

function DivCol9() {
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

function Paragraph45() {
  return (
    <div className="absolute h-[21px] left-0 top-[36.8px] w-[1014.4px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#555] text-[14px] top-[0.4px]">College of Liberal Arts and Sciences</p>
    </div>
  );
}

function Container143() {
  return (
    <div className="flex-[1_0_0] h-[89.8px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading2 />
        <Paragraph45 />
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex h-[65.8px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container143 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">Courses that build key skills:</p>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#191919] text-[13px] top-[0.4px]">MAT 343 — Applied Linear Algebra</p>
    </div>
  );
}

function Container146() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[31.5px] items-start pt-[6px] px-[12px] relative rounded-[4px] shrink-0 w-[225.887px]" data-name="Container">
      <Paragraph47 />
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#191919] text-[13px] top-[0.4px]">STP 420 — Probability</p>
    </div>
  );
}

function Container147() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[31.5px] items-start pt-[6px] px-[12px] relative rounded-[4px] shrink-0 w-[155.275px]" data-name="Container">
      <Paragraph48 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#191919] text-[13px] top-[0.4px]">CSE 310 — Data Structures</p>
    </div>
  );
}

function Container148() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[31.5px] items-start pt-[6px] px-[12px] relative rounded-[4px] shrink-0 w-[186.588px]" data-name="Container">
      <Paragraph49 />
    </div>
  );
}

function Container145() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container146 />
      <Container147 />
      <Container148 />
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[89.3px] items-start pt-[24.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Paragraph46 />
      <Container145 />
    </div>
  );
}

function Container151() {
  return (
    <div className="absolute h-[38px] left-[0.2px] rounded-[804px] top-[0.1px] w-[164px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[804px]" />
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Link">
      <p className="font-['Arial:Bold',sans-serif] leading-[19.6px] not-italic relative shrink-0 text-[14px] text-black text-center">Explore this degree</p>
    </div>
  );
}

function Container150() {
  return (
    <div className="bg-[#ffc627] content-stretch flex gap-[10px] items-start px-[17px] py-[9px] relative rounded-[804px] shrink-0 w-[164px]" data-name="Container">
      <Container151 />
      <Link13 />
    </div>
  );
}

function Container149() {
  return (
    <div className="h-[49.6px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pr-[830.175px] pt-[24px] relative size-full">
        <Container150 />
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start px-[32px] py-[33px] relative shrink-0 w-[906px]" data-name="Container">
      <Container142 />
      <div className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#191919] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Ideal for students who want deep mathematical foundations in machine learning and statistical modeling.</p>
        <p>&nbsp;</p>
      </div>
      <Container144 />
      <Container149 />
    </div>
  );
}

function DivImageSideLeft1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.image-side-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <DivCol9 />
        <Container141 />
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

function Container129() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[813px] items-start left-[246px] top-[146.6px] w-[1200px]" data-name="Container">
      <DivImageSideLeft />
      <DivBorder />
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[1027px] relative shrink-0 w-full" data-name="Section">
      <Heading />
      <Paragraph39 />
      <Container129 />
    </div>
  );
}

function DivRow() {
  return <div className="h-[609px] mb-[-40px] shrink-0 w-[1200px]" data-name="div.row" />;
}

function Heading3() {
  return (
    <div className="absolute h-[43px] left-0 top-[0.15px] w-[1200px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[43.2px] left-[340.5px] not-italic text-[#191919] text-[36px] text-center top-[-0.2px] tracking-[-1.26px]">Related ASU experiences to get you ahead</p>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="absolute h-[24px] left-0 top-[59.15px] w-[1200px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[418.5px] not-italic text-[#191919] text-[16px] text-center top-[0.2px]">ASU offers many resources and experiential opportunities to help you reach your career goals beyond just the degree.</p>
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute h-[24px] left-0 top-[100.15px] w-[222px]" data-name="Link">
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[100px] not-italic text-[#8c1d40] text-[16px] text-center top-[0.2px]">View more career resources</p>
    </div>
  );
}

function Container153() {
  return <div className="absolute border-[#d0d0d0] border-solid border-t-[0.8px] h-px left-0 top-[156.15px] w-[1200px]" data-name="Container" />;
}

function ImageAsuAnalyticsInternshipProgram() {
  return (
    <div className="h-[186px] relative shrink-0 w-full" data-name="Image (ASU Analytics Internship Program)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[100.72%]" src={imgImageAsuAnalyticsInternshipProgram} />
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="absolute content-stretch flex flex-col h-[186px] items-start left-[-2px] overflow-clip top-[-0.15px] w-[282px]" data-name="Container">
      <ImageAsuAnalyticsInternshipProgram />
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[21.6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21.6px] left-0 not-italic text-[12px] text-white top-0 tracking-[-0.45px]">Internship</p>
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col h-[37.6px] items-start left-[189.89px] pt-[8px] px-[12px] top-[11px] w-[77.513px]" data-name="Container">
      <Paragraph51 />
    </div>
  );
}

function Container158() {
  return (
    <div className="absolute h-[186px] left-0 overflow-clip top-[-0.15px] w-[278px]" data-name="Container">
      <Container159 />
    </div>
  );
}

function Container156() {
  return (
    <div className="h-[186.3px] relative shrink-0 w-full" data-name="Container">
      <Container157 />
      <Container158 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[43.2px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21.6px] left-0 not-italic text-[#191919] text-[18px] top-[0.55px] tracking-[-0.45px] w-[246px] whitespace-pre-wrap">ASU Analytics Internship Program</p>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[33.6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.8px] left-0 not-italic text-[#191919] text-[12px] top-[-0.65px] w-[246px] whitespace-pre-wrap">{`Work with ASU's institutional research team to analyze student success data.`}</p>
    </div>
  );
}

function Container160() {
  return (
    <div className="h-[124.8px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative size-full">
        <Heading4 />
        <Paragraph52 />
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.15px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.2px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p114b700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14248" />
        </g>
      </svg>
    </div>
  );
}

function Container162() {
  return (
    <div className="bg-[#fafafa] relative rounded-[12px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.8px] px-[20px] relative size-full">
          <Paragraph53 />
          <Container162 />
        </div>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[2px] py-px relative w-full">
        <Container156 />
        <Container160 />
        <Container161 />
      </div>
    </div>
  );
}

function ImageDataScienceClub() {
  return (
    <div className="h-[186.3px] relative shrink-0 w-full" data-name="Image (Data Science Club)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageDataScienceClub} />
    </div>
  );
}

function Container165() {
  return (
    <div className="absolute content-stretch flex flex-col h-[186px] items-start left-[-2px] overflow-clip top-[-0.15px] w-[282px]" data-name="Container">
      <ImageDataScienceClub />
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Arial:Bold',sans-serif] leading-[21.6px] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.45px]">Club</p>
    </div>
  );
}

function Container167() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col h-[37.6px] items-start left-[216px] pt-[8px] px-[12px] top-[10px]" data-name="Container">
      <Paragraph54 />
    </div>
  );
}

function Container166() {
  return (
    <div className="absolute h-[186px] left-0 overflow-clip top-[-0.15px] w-[278px]" data-name="Container">
      <Container167 />
    </div>
  );
}

function Container164() {
  return (
    <div className="h-[186.3px] relative shrink-0 w-full" data-name="Container">
      <Container165 />
      <Container166 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[23px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21.6px] left-0 not-italic text-[#191919] text-[18px] top-[0.8px] tracking-[-0.45px] w-[204px] whitespace-pre-wrap">Data Science Club</p>
    </div>
  );
}

function Paragraph55() {
  return <div className="h-[33.6px] shrink-0 w-full" data-name="Paragraph" />;
}

function Container168() {
  return (
    <div className="h-[124.8px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative size-full">
        <Heading5 />
        <p className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[#191919] text-[12px] w-full whitespace-pre-wrap">{`Work with ASU's institutional research team to analyze student success data.`}</p>
        <Paragraph55 />
      </div>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.15px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.2px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p114b700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14248" />
        </g>
      </svg>
    </div>
  );
}

function Container170() {
  return (
    <div className="bg-[#fafafa] relative rounded-[12px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.8px] px-[20px] relative size-full">
          <Paragraph56 />
          <Container170 />
        </div>
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[2px] py-px relative w-full">
        <Container164 />
        <Container168 />
        <Container169 />
      </div>
    </div>
  );
}

function ImageTableauStudentCertification() {
  return (
    <div className="h-[186.3px] relative shrink-0 w-full" data-name="Image (Tableau Student Certification)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTableauStudentCertification} />
    </div>
  );
}

function Container173() {
  return (
    <div className="absolute content-stretch flex flex-col h-[186px] items-start left-[-2px] overflow-clip top-[-0.15px] w-[282px]" data-name="Container">
      <ImageTableauStudentCertification />
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Arial:Bold',sans-serif] leading-[21.6px] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.45px]">Partnership</p>
    </div>
  );
}

function Container175() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col h-[37.6px] items-start left-[181px] pt-[8px] px-[12px] top-[11px]" data-name="Container">
      <Paragraph57 />
    </div>
  );
}

function Container174() {
  return (
    <div className="absolute h-[186px] left-0 overflow-clip top-[-0.15px] w-[278px]" data-name="Container">
      <Container175 />
    </div>
  );
}

function Container172() {
  return (
    <div className="h-[186.3px] relative shrink-0 w-full" data-name="Container">
      <Container173 />
      <Container174 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[23px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21.6px] left-0 not-italic text-[#191919] text-[18px] top-[0.55px] tracking-[-0.45px] w-[246px] whitespace-pre-wrap">Tableau Student Certification</p>
    </div>
  );
}

function Paragraph58() {
  return <div className="h-[33.6px] shrink-0 w-full" data-name="Paragraph" />;
}

function Container176() {
  return (
    <div className="h-[124.8px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative size-full">
        <Heading6 />
        <p className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[#191919] text-[12px] w-full whitespace-pre-wrap">Free certification program for ASU students through university partnership.</p>
        <Paragraph58 />
      </div>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.15px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.2px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p114b700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14248" />
        </g>
      </svg>
    </div>
  );
}

function Container178() {
  return (
    <div className="bg-[#fafafa] relative rounded-[12px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.8px] px-[20px] relative size-full">
          <Paragraph59 />
          <Container178 />
        </div>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[2px] py-px relative w-full">
        <Container172 />
        <Container176 />
        <Container177 />
      </div>
    </div>
  );
}

function ImageTableauStudentCertification1() {
  return (
    <div className="h-[186.3px] relative shrink-0 w-full" data-name="Image (Tableau Student Certification)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTableauStudentCertification} />
    </div>
  );
}

function Container181() {
  return (
    <div className="absolute content-stretch flex flex-col h-[186px] items-start left-[-2px] overflow-clip top-[-0.15px] w-[282px]" data-name="Container">
      <ImageTableauStudentCertification1 />
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Arial:Bold',sans-serif] leading-[21.6px] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.45px]">Partnership</p>
    </div>
  );
}

function Container183() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col h-[37.6px] items-start left-[181px] pt-[8px] px-[12px] top-[11px]" data-name="Container">
      <Paragraph60 />
    </div>
  );
}

function Container182() {
  return (
    <div className="absolute h-[186px] left-0 overflow-clip top-[-0.15px] w-[278px]" data-name="Container">
      <Container183 />
    </div>
  );
}

function Container180() {
  return (
    <div className="h-[186.3px] relative shrink-0 w-full" data-name="Container">
      <Container181 />
      <Container182 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[23px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21.6px] left-0 not-italic text-[#191919] text-[18px] top-[0.55px] tracking-[-0.45px] w-[246px] whitespace-pre-wrap">Tableau Student Certification</p>
    </div>
  );
}

function Paragraph61() {
  return <div className="h-[33.6px] shrink-0 w-full" data-name="Paragraph" />;
}

function Container184() {
  return (
    <div className="h-[124.8px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[16px] relative size-full">
        <Heading7 />
        <p className="font-['Arial:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[#191919] text-[12px] w-full whitespace-pre-wrap">Free certification program for ASU students through university partnership.</p>
        <Paragraph61 />
      </div>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.15px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.2px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p114b700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14248" />
        </g>
      </svg>
    </div>
  );
}

function Container186() {
  return (
    <div className="bg-[#fafafa] relative rounded-[12px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Container185() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.8px] px-[20px] relative size-full">
          <Paragraph62 />
          <Container186 />
        </div>
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="bg-white col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[2px] py-px relative w-full">
        <Container180 />
        <Container184 />
        <Container185 />
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="absolute gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[363px] left-0 top-[189.15px] w-[1200px]" data-name="Container">
      <Container155 />
      <Container163 />
      <Container171 />
      <Container179 />
    </div>
  );
}

function Container152() {
  return (
    <div className="h-[552px] mb-[-40px] relative shrink-0 w-[1200px]" data-name="Container">
      <Heading3 />
      <Paragraph50 />
      <Link14 />
      <Container153 />
      <Container154 />
    </div>
  );
}

function DivContainerLg() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1320px] pb-[40px] relative shrink-0 w-[1198px]" data-name="div.container-lg">
      <DivRow />
      <Container152 />
    </div>
  );
}

function RelatedExperiences() {
  return (
    <div className="bg-white h-[1249px] relative shrink-0 w-full" data-name="related experiences">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[128px] py-[64px] relative size-full">
          <DivContainerLg />
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1536ae00} id="Vector" stroke="var(--stroke-0, #FFC627)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M26.6667 4V9.33333" id="Vector_2" stroke="var(--stroke-0, #FFC627)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M29.3333 6.66667H24" id="Vector_3" stroke="var(--stroke-0, #FFC627)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M5.33333 22.6667V25.3333" id="Vector_4" stroke="var(--stroke-0, #FFC627)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M6.66667 24H4" id="Vector_5" stroke="var(--stroke-0, #FFC627)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[43.2px] relative shrink-0 w-[241.188px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[43.2px] left-0 not-italic text-[36px] text-white top-[-0.2px] tracking-[-1.26px]">How is AI effecting this career?</p>
      </div>
    </div>
  );
}

function Container187() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-center left-[246px] top-[63.7px] w-[1200px]" data-name="Container">
      <Icon16 />
      <Heading8 />
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="absolute h-[25px] left-[246px] top-[131.7px] w-[1200px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[0] left-0 not-italic text-[#e8e8e8] text-[0px] text-[18px] top-[0.4px]">
        <span className="leading-[25.2px]">{`Automation Risk: `}</span>
        <span className="font-['Arial:Bold',sans-serif] leading-[25.2px] text-[#ffc627]">35%</span>
      </p>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="absolute h-[48px] left-[246px] top-[172.7px] w-[1200px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#e8e8e8] text-[16px] top-[0.2px] w-[1024px] whitespace-pre-wrap">Routine data cleaning and basic reporting are increasingly automated, but strategic analysis, storytelling, and stakeholder communication remain essential human skills.</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[36px] relative shrink-0 w-[1200px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[36px] left-0 not-italic text-[24px] text-white top-[0.8px] tracking-[-0.6px]">How AI is used in this field today</p>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="absolute h-[21px] left-[8.1px] top-[1.5px] w-[7.787px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">1</p>
    </div>
  );
}

function Container191() {
  return (
    <div className="bg-[#ffc627] relative rounded-[26843500px] shrink-0 size-[24px]" data-name="Container">
      <Paragraph65 />
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="content-stretch flex h-[72px] items-center relative shrink-0 w-[523px]" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e8e8e8] text-[14px] w-[523px] whitespace-pre-wrap">Review overnight dashboard alerts and prepare executive summary for stakeholder meeting on customer retention trends.</p>
    </div>
  );
}

function Container190() {
  return (
    <div className="bg-[#303030] content-stretch flex gap-[12px] items-center px-[16px] relative shrink-0" data-name="Container">
      <Container191 />
      <Paragraph66 />
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="absolute h-[21px] left-[8.1px] top-[1.5px] w-[7.787px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">2</p>
    </div>
  );
}

function Container193() {
  return (
    <div className="bg-[#ffc627] relative rounded-[26843500px] shrink-0 size-[24px]" data-name="Container">
      <Paragraph67 />
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="content-stretch flex h-[72px] items-center relative shrink-0 w-[523px]" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e8e8e8] text-[14px] w-[523px] whitespace-pre-wrap">Review overnight dashboard alerts and prepare executive summary for stakeholder meeting on customer retention trends.</p>
    </div>
  );
}

function Container192() {
  return (
    <div className="bg-[#303030] content-stretch flex gap-[12px] items-center px-[16px] relative shrink-0" data-name="Container">
      <Container193 />
      <Paragraph68 />
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="absolute h-[21px] left-[8.1px] top-[1.5px] w-[7.787px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">3</p>
    </div>
  );
}

function Container195() {
  return (
    <div className="bg-[#ffc627] relative rounded-[26843500px] shrink-0 size-[24px]" data-name="Container">
      <Paragraph69 />
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="content-stretch flex h-[72px] items-center relative shrink-0 w-[523px]" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e8e8e8] text-[14px] w-[523px] whitespace-pre-wrap">Review overnight dashboard alerts and prepare executive summary for stakeholder meeting on customer retention trends.</p>
    </div>
  );
}

function Container194() {
  return (
    <div className="bg-[#303030] content-stretch flex gap-[12px] items-center px-[16px] relative shrink-0" data-name="Container">
      <Container195 />
      <Paragraph70 />
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="absolute h-[21px] left-[8.1px] top-[1.5px] w-[7.787px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">4</p>
    </div>
  );
}

function Container197() {
  return (
    <div className="bg-[#ffc627] relative rounded-[26843500px] shrink-0 size-[24px]" data-name="Container">
      <Paragraph71 />
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="content-stretch flex h-[72px] items-center relative shrink-0 w-[523px]" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e8e8e8] text-[14px] w-[523px] whitespace-pre-wrap">Review overnight dashboard alerts and prepare executive summary for stakeholder meeting on customer retention trends.</p>
    </div>
  );
}

function Container196() {
  return (
    <div className="bg-[#303030] content-stretch flex gap-[12px] items-center px-[16px] relative shrink-0" data-name="Container">
      <Container197 />
      <Paragraph72 />
    </div>
  );
}

function Container189() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] h-[159px] items-start relative shrink-0 w-full" data-name="Container">
      <Container190 />
      <Container192 />
      <Container194 />
      <Container196 />
    </div>
  );
}

function Container188() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[219px] items-start left-[246px] top-[268.6px] w-[1200px]" data-name="Container">
      <Heading9 />
      <Container189 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[36px] left-0 not-italic text-[24px] text-white top-[0.8px] tracking-[-0.6px]">Ethical questions that AI has presented in this field</p>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[18px] text-white top-[0.2px] tracking-[-0.45px]">The Biased Dataset</p>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#e8e8e8] text-[16px] top-[0.2px] w-[978px] whitespace-pre-wrap">Your model shows certain ZIP codes have higher loan default rates, which correlates with racial demographics. Do you include this feature knowing it could perpetuate discriminatory lending practices, or omit it and reduce model accuracy?</p>
    </div>
  );
}

function Container200() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[135px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[24px] relative size-full">
        <Heading11 />
        <Paragraph73 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[18px] text-white top-[0.2px] tracking-[-0.45px]">Selective Reporting</p>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#e8e8e8] text-[16px] top-[0.2px] w-[1021px] whitespace-pre-wrap">Your analysis shows a company initiative is failing, but leadership wants a positive narrative for investors. How do you balance data integrity with organizational pressure?</p>
    </div>
  );
}

function Container201() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[135px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[24px] relative size-full">
        <Heading12 />
        <Paragraph74 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[18px] text-white top-[0.2px] tracking-[-0.45px]">Privacy vs. Insight</p>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#e8e8e8] text-[16px] top-[0.2px] w-[1013px] whitespace-pre-wrap">Combining employee badge swipe data with productivity metrics could optimize office space, but also enables surveillance. Where do you draw the line on workplace analytics?</p>
    </div>
  );
}

function Container202() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[135px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[24px] relative size-full">
        <Heading13 />
        <Paragraph75 />
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[453px] items-start relative shrink-0 w-full" data-name="Container">
      <Container200 />
      <Container201 />
      <Container202 />
    </div>
  );
}

function Container198() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[513px] items-start left-[246px] top-[535.7px] w-[1200px]" data-name="Container">
      <Heading10 />
      <Container199 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#191919] h-[1112.4px] relative shrink-0 w-full" data-name="Section">
      <Container187 />
      <Paragraph63 />
      <Paragraph64 />
      <Container188 />
      <Container198 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[43.2px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[43.2px] left-0 not-italic text-[#191919] text-[36px] top-[-0.2px] tracking-[-1.26px]">You might also be interested in</p>
    </div>
  );
}

function Container203() {
  return (
    <div className="h-[386px] relative shrink-0 w-[276px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
    </div>
  );
}

function Container205() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container206() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container204() {
  return (
    <div className="bg-[#ffc627] h-[6px] relative shrink-0 w-[276px]" data-name="Container">
      <Container205 />
      <Container206 />
    </div>
  );
}

function Container208() {
  return <div className="absolute h-[180px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImageFinancialAnalyst() {
  return (
    <div className="h-[180px] relative shrink-0 w-full" data-name="Image (Financial Analyst)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFinancialAnalyst} />
    </div>
  );
}

function Container209() {
  return (
    <div className="absolute content-stretch flex flex-col h-[180px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImageFinancialAnalyst />
    </div>
  );
}

function Container207() {
  return (
    <div className="absolute h-[180px] left-px top-px w-[274px]" data-name="Container">
      <Container208 />
      <Container209 />
    </div>
  );
}

function Container212() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph76() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">Financial Analyst</p>
      </div>
    </div>
  );
}

function Container214() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph76 />
    </div>
  );
}

function Container213() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container214 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[6.25%_0]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10.5">
          <path d={svgPaths.p2d70aa00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container217() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[12px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Container218() {
  return (
    <div className="content-stretch flex flex-col h-[16.8px] items-start justify-center relative shrink-0 w-[73.688px]" data-name="Container">
      <p className="font-['Arial:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#191919] text-[0px] text-[12px]">
        <span className="leading-[16.8px]">{`Growth: `}</span>
        <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">+8%</span>
      </p>
    </div>
  );
}

function Container216() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-[7px] w-[226px]" data-name="Container">
      <Container217 />
      <Container218 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_5.01%_0_4.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.78578 12">
          <path d={svgPaths.p25d8b00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container220() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start relative shrink-0 w-[7.5px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_5.01%_0_4.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.78578 12">
          <path d={svgPaths.p25d8b00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container221() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start relative shrink-0 w-[7.5px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Container220 />
      <Container221 />
    </div>
  );
}

function Container222() {
  return (
    <div className="content-stretch flex flex-col h-[16.8px] items-start justify-center relative shrink-0 w-[86.75px]" data-name="Container">
      <p className="font-['Arial:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#191919] text-[0px] text-[12px]">
        <span className="leading-[16.8px]">{`Salary: `}</span>
        <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$74,000</span>
      </p>
    </div>
  );
}

function Container219() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-[30.8px] w-[226px]" data-name="Container">
      <Frame4 />
      <Container222 />
    </div>
  );
}

function Container215() {
  return (
    <div className="absolute h-[54.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container216 />
      <Container219 />
    </div>
  );
}

function Container211() {
  return (
    <div className="absolute h-[107.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container212 />
      <Container213 />
      <Container215 />
    </div>
  );
}

function Container210() {
  return (
    <div className="absolute bg-white h-[155.8px] left-px top-[181px] w-[274px]" data-name="Container">
      <Container211 />
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[53.362px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">Business</p>
      </div>
    </div>
  );
}

function Container224() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[53.362px]" data-name="Container">
      <Paragraph77 />
    </div>
  );
}

function Container223() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[168px] w-[61.362px]" data-name="Container">
      <Container224 />
    </div>
  );
}

function Container226() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph78() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Paragraph">
      <p className="decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#8c1d40] text-[16px] underline">Learn more</p>
    </div>
  );
}

function Container229() {
  return (
    <div className="absolute h-[23.4px] left-0 top-[0.3px] w-[81.825px]" data-name="Container">
      <Paragraph78 />
    </div>
  );
}

function Container232() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon20() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container234() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon20 />
    </div>
  );
}

function Container233() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.738px] pr-[7.25px] pt-[0.738px] top-[6px] w-[22px]" data-name="Container">
      <Container234 />
    </div>
  );
}

function Container231() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container232 />
      <Container233 />
    </div>
  );
}

function Container230() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container231 />
    </div>
  );
}

function Container228() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container229 />
      <Container230 />
    </div>
  );
}

function Container227() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container228 />
    </div>
  );
}

function Container225() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[336.8px] w-[274px]" data-name="Container">
      <Container226 />
      <Container227 />
    </div>
  );
}

function CareerCard() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Career Card">
      <Container203 />
      <Container204 />
      <Container207 />
      <Container210 />
      <Container223 />
      <Container225 />
    </div>
  );
}

function Container235() {
  return (
    <div className="h-[386px] relative shrink-0 w-[276px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
    </div>
  );
}

function Container237() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container238() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container236() {
  return (
    <div className="bg-[#ffc627] h-[6px] relative shrink-0 w-[276px]" data-name="Container">
      <Container237 />
      <Container238 />
    </div>
  );
}

function Container240() {
  return <div className="absolute h-[180px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImageFinancialAnalyst1() {
  return (
    <div className="h-[180px] relative shrink-0 w-full" data-name="Image (Financial Analyst)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFinancialAnalyst} />
    </div>
  );
}

function Container241() {
  return (
    <div className="absolute content-stretch flex flex-col h-[180px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImageFinancialAnalyst1 />
    </div>
  );
}

function Container239() {
  return (
    <div className="absolute h-[180px] left-px top-px w-[274px]" data-name="Container">
      <Container240 />
      <Container241 />
    </div>
  );
}

function Container244() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph79() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">Financial Analyst</p>
      </div>
    </div>
  );
}

function Container246() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph79 />
    </div>
  );
}

function Container245() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container246 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[6.25%_0]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10.5">
          <path d={svgPaths.p2d70aa00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container249() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[12px]" data-name="Container">
      <Icon21 />
    </div>
  );
}

function Container250() {
  return (
    <div className="content-stretch flex flex-col h-[16.8px] items-start justify-center relative shrink-0 w-[73.688px]" data-name="Container">
      <p className="font-['Arial:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#191919] text-[0px] text-[12px]">
        <span className="leading-[16.8px]">{`Growth: `}</span>
        <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">+8%</span>
      </p>
    </div>
  );
}

function Container248() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-[7px] w-[226px]" data-name="Container">
      <Container249 />
      <Container250 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_5.01%_0_4.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.78578 12">
          <path d={svgPaths.p25d8b00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container252() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start relative shrink-0 w-[7.5px]" data-name="Container">
      <Icon22 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_5.01%_0_4.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.78578 12">
          <path d={svgPaths.p25d8b00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container253() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start relative shrink-0 w-[7.5px]" data-name="Container">
      <Icon23 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Container252 />
      <Container253 />
    </div>
  );
}

function Container254() {
  return (
    <div className="content-stretch flex flex-col h-[16.8px] items-start justify-center relative shrink-0 w-[86.75px]" data-name="Container">
      <p className="font-['Arial:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#191919] text-[0px] text-[12px]">
        <span className="leading-[16.8px]">{`Salary: `}</span>
        <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$74,000</span>
      </p>
    </div>
  );
}

function Container251() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-[30.8px] w-[226px]" data-name="Container">
      <Frame6 />
      <Container254 />
    </div>
  );
}

function Container247() {
  return (
    <div className="absolute h-[54.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container248 />
      <Container251 />
    </div>
  );
}

function Container243() {
  return (
    <div className="absolute h-[107.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container244 />
      <Container245 />
      <Container247 />
    </div>
  );
}

function Container242() {
  return (
    <div className="absolute bg-white h-[155.8px] left-px top-[181px] w-[274px]" data-name="Container">
      <Container243 />
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[53.362px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">Business</p>
      </div>
    </div>
  );
}

function Container256() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[53.362px]" data-name="Container">
      <Paragraph80 />
    </div>
  );
}

function Container255() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[168px] w-[61.362px]" data-name="Container">
      <Container256 />
    </div>
  );
}

function Container258() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph81() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Paragraph">
      <p className="decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#8c1d40] text-[16px] underline">Learn more</p>
    </div>
  );
}

function Container261() {
  return (
    <div className="absolute h-[23.4px] left-0 top-[0.3px] w-[81.825px]" data-name="Container">
      <Paragraph81 />
    </div>
  );
}

function Container264() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon24() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container266() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon24 />
    </div>
  );
}

function Container265() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.738px] pr-[7.25px] pt-[0.738px] top-[6px] w-[22px]" data-name="Container">
      <Container266 />
    </div>
  );
}

function Container263() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container264 />
      <Container265 />
    </div>
  );
}

function Container262() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container263 />
    </div>
  );
}

function Container260() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container261 />
      <Container262 />
    </div>
  );
}

function Container259() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container260 />
    </div>
  );
}

function Container257() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[336.8px] w-[274px]" data-name="Container">
      <Container258 />
      <Container259 />
    </div>
  );
}

function CareerCard1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Career Card">
      <Container235 />
      <Container236 />
      <Container239 />
      <Container242 />
      <Container255 />
      <Container257 />
    </div>
  );
}

function Container267() {
  return (
    <div className="h-[386px] relative shrink-0 w-[276px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
    </div>
  );
}

function Container269() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container270() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container268() {
  return (
    <div className="bg-[#ffc627] h-[6px] relative shrink-0 w-[276px]" data-name="Container">
      <Container269 />
      <Container270 />
    </div>
  );
}

function Container272() {
  return <div className="absolute h-[180px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImageFinancialAnalyst2() {
  return (
    <div className="h-[180px] relative shrink-0 w-full" data-name="Image (Financial Analyst)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFinancialAnalyst} />
    </div>
  );
}

function Container273() {
  return (
    <div className="absolute content-stretch flex flex-col h-[180px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImageFinancialAnalyst2 />
    </div>
  );
}

function Container271() {
  return (
    <div className="absolute h-[180px] left-px top-px w-[274px]" data-name="Container">
      <Container272 />
      <Container273 />
    </div>
  );
}

function Container276() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph82() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">Financial Analyst</p>
      </div>
    </div>
  );
}

function Container278() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph82 />
    </div>
  );
}

function Container277() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container278 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[6.25%_0]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10.5">
          <path d={svgPaths.p2d70aa00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container281() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[12px]" data-name="Container">
      <Icon25 />
    </div>
  );
}

function Container282() {
  return (
    <div className="content-stretch flex flex-col h-[16.8px] items-start justify-center relative shrink-0 w-[73.688px]" data-name="Container">
      <p className="font-['Arial:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#191919] text-[0px] text-[12px]">
        <span className="leading-[16.8px]">{`Growth: `}</span>
        <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">+8%</span>
      </p>
    </div>
  );
}

function Container280() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-[7px] w-[226px]" data-name="Container">
      <Container281 />
      <Container282 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_5.01%_0_4.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.78578 12">
          <path d={svgPaths.p25d8b00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container284() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start relative shrink-0 w-[7.5px]" data-name="Container">
      <Icon26 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_5.01%_0_4.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.78578 12">
          <path d={svgPaths.p25d8b00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container285() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start relative shrink-0 w-[7.5px]" data-name="Container">
      <Icon27 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Container284 />
      <Container285 />
    </div>
  );
}

function Container286() {
  return (
    <div className="content-stretch flex flex-col h-[16.8px] items-start justify-center relative shrink-0 w-[86.75px]" data-name="Container">
      <p className="font-['Arial:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#191919] text-[0px] text-[12px]">
        <span className="leading-[16.8px]">{`Salary: `}</span>
        <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$74,000</span>
      </p>
    </div>
  );
}

function Container283() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-[30.8px] w-[226px]" data-name="Container">
      <Frame8 />
      <Container286 />
    </div>
  );
}

function Container279() {
  return (
    <div className="absolute h-[54.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container280 />
      <Container283 />
    </div>
  );
}

function Container275() {
  return (
    <div className="absolute h-[107.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container276 />
      <Container277 />
      <Container279 />
    </div>
  );
}

function Container274() {
  return (
    <div className="absolute bg-white h-[155.8px] left-px top-[181px] w-[274px]" data-name="Container">
      <Container275 />
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[53.362px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">Business</p>
      </div>
    </div>
  );
}

function Container288() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[53.362px]" data-name="Container">
      <Paragraph83 />
    </div>
  );
}

function Container287() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[168px] w-[61.362px]" data-name="Container">
      <Container288 />
    </div>
  );
}

function Container290() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph84() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Paragraph">
      <p className="decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#8c1d40] text-[16px] underline">Learn more</p>
    </div>
  );
}

function Container293() {
  return (
    <div className="absolute h-[23.4px] left-0 top-[0.3px] w-[81.825px]" data-name="Container">
      <Paragraph84 />
    </div>
  );
}

function Container296() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon28() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container298() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon28 />
    </div>
  );
}

function Container297() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.738px] pr-[7.25px] pt-[0.738px] top-[6px] w-[22px]" data-name="Container">
      <Container298 />
    </div>
  );
}

function Container295() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container296 />
      <Container297 />
    </div>
  );
}

function Container294() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container295 />
    </div>
  );
}

function Container292() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container293 />
      <Container294 />
    </div>
  );
}

function Container291() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container292 />
    </div>
  );
}

function Container289() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[336.8px] w-[274px]" data-name="Container">
      <Container290 />
      <Container291 />
    </div>
  );
}

function CareerCard2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Career Card">
      <Container267 />
      <Container268 />
      <Container271 />
      <Container274 />
      <Container287 />
      <Container289 />
    </div>
  );
}

function Container299() {
  return (
    <div className="h-[386px] relative shrink-0 w-[276px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
    </div>
  );
}

function Container301() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container302() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container300() {
  return (
    <div className="bg-[#ffc627] h-[6px] relative shrink-0 w-[276px]" data-name="Container">
      <Container301 />
      <Container302 />
    </div>
  );
}

function Container304() {
  return <div className="absolute h-[180px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImageFinancialAnalyst3() {
  return (
    <div className="h-[180px] relative shrink-0 w-full" data-name="Image (Financial Analyst)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFinancialAnalyst} />
    </div>
  );
}

function Container305() {
  return (
    <div className="absolute content-stretch flex flex-col h-[180px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImageFinancialAnalyst3 />
    </div>
  );
}

function Container303() {
  return (
    <div className="absolute h-[180px] left-px top-px w-[274px]" data-name="Container">
      <Container304 />
      <Container305 />
    </div>
  );
}

function Container308() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph85() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">Financial Analyst</p>
      </div>
    </div>
  );
}

function Container310() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph85 />
    </div>
  );
}

function Container309() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container310 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[6.25%_0]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10.5">
          <path d={svgPaths.p2d70aa00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container313() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[12px]" data-name="Container">
      <Icon29 />
    </div>
  );
}

function Container314() {
  return (
    <div className="content-stretch flex flex-col h-[16.8px] items-start justify-center relative shrink-0 w-[73.688px]" data-name="Container">
      <p className="font-['Arial:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#191919] text-[0px] text-[12px]">
        <span className="leading-[16.8px]">{`Growth: `}</span>
        <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">+8%</span>
      </p>
    </div>
  );
}

function Container312() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-[7px] w-[226px]" data-name="Container">
      <Container313 />
      <Container314 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_5.01%_0_4.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.78578 12">
          <path d={svgPaths.p25d8b00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container316() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start relative shrink-0 w-[7.5px]" data-name="Container">
      <Icon30 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_5.01%_0_4.51%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.78578 12">
          <path d={svgPaths.p25d8b00} fill="var(--fill-0, #191919)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container317() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start relative shrink-0 w-[7.5px]" data-name="Container">
      <Icon31 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Container316 />
      <Container317 />
    </div>
  );
}

function Container318() {
  return (
    <div className="content-stretch flex flex-col h-[16.8px] items-start justify-center relative shrink-0 w-[86.75px]" data-name="Container">
      <p className="font-['Arial:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#191919] text-[0px] text-[12px]">
        <span className="leading-[16.8px]">{`Salary: `}</span>
        <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$74,000</span>
      </p>
    </div>
  );
}

function Container315() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-[30.8px] w-[226px]" data-name="Container">
      <Frame9 />
      <Container318 />
    </div>
  );
}

function Container311() {
  return (
    <div className="absolute h-[54.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container312 />
      <Container315 />
    </div>
  );
}

function Container307() {
  return (
    <div className="absolute h-[107.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container308 />
      <Container309 />
      <Container311 />
    </div>
  );
}

function Container306() {
  return (
    <div className="absolute bg-white h-[155.8px] left-px top-[181px] w-[274px]" data-name="Container">
      <Container307 />
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[53.362px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">Business</p>
      </div>
    </div>
  );
}

function Container320() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[53.362px]" data-name="Container">
      <Paragraph86 />
    </div>
  );
}

function Container319() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[168px] w-[61.362px]" data-name="Container">
      <Container320 />
    </div>
  );
}

function Container322() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph87() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Paragraph">
      <p className="decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#8c1d40] text-[16px] underline">Learn more</p>
    </div>
  );
}

function Container325() {
  return (
    <div className="absolute h-[23.4px] left-0 top-[0.3px] w-[81.825px]" data-name="Container">
      <Paragraph87 />
    </div>
  );
}

function Container328() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon32() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container330() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon32 />
    </div>
  );
}

function Container329() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.738px] pr-[7.25px] pt-[0.738px] top-[6px] w-[22px]" data-name="Container">
      <Container330 />
    </div>
  );
}

function Container327() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container328 />
      <Container329 />
    </div>
  );
}

function Container326() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container327 />
    </div>
  );
}

function Container324() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container325 />
      <Container326 />
    </div>
  );
}

function Container323() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container324 />
    </div>
  );
}

function Container321() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[336.8px] w-[274px]" data-name="Container">
      <Container322 />
      <Container323 />
    </div>
  );
}

function CareerCard3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Career Card">
      <Container299 />
      <Container300 />
      <Container303 />
      <Container306 />
      <Container319 />
      <Container321 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <CareerCard />
      <CareerCard1 />
      <CareerCard2 />
      <CareerCard3 />
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[24px] left-[67.5px] not-italic text-[16px] text-black text-center top-[0.2px]">See other careers</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="bg-[#ffc627] h-[43.6px] relative rounded-[804px] shrink-0 w-[169.913px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#ffc627] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[804px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] pt-[9.8px] px-[17.8px] relative size-full">
        <Paragraph88 />
      </div>
    </div>
  );
}

function Container331() {
  return (
    <div className="h-[43.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pr-[0.012px] relative size-full">
          <Link15 />
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#f1f1f1] h-[702.8px] relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[48px] items-start px-[246px] py-[64px] relative size-full">
        <Heading14 />
        <Frame5 />
        <Container331 />
      </div>
    </div>
  );
}

function SectionProgramCourses() {
  return <div className="absolute bg-size-[450px_451px] bg-top-left h-[296px] left-0 top-0 w-[1692px]" data-name="section#program-courses" style={{ backgroundImage: `url('${imgSectionProgramCourses}')` }} />;
}

function Heading15() {
  return (
    <div className="absolute h-[43.2px] left-[306px] top-[64px] w-[1080px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[43.2px] left-[540.09px] not-italic text-[#191919] text-[36px] text-center top-[-0.2px] tracking-[-1.26px]">Ready to start your journey?</p>
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="absolute h-[25.2px] left-[306px] top-[123.2px] w-[1080px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[25.2px] left-[540.29px] not-italic text-[#191919] text-[18px] text-center top-[0.4px]">Explore 8 ASU Online degrees that can prepare you for a career as a Data Analyst.</p>
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute bg-[#ffc627] h-[52px] left-[367.66px] rounded-[26843500px] top-0 w-[167.775px]" data-name="Link">
      <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[24px] left-[84px] not-italic text-[16px] text-black text-center top-[14.2px]">View Degrees</p>
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute bg-[#191919] h-[52px] left-[551.44px] rounded-[26843500px] top-0 w-[160.9px]" data-name="Link">
      <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[24px] left-[80.5px] not-italic text-[16px] text-center text-white top-[14.2px]">Request Info</p>
    </div>
  );
}

function Container332() {
  return (
    <div className="absolute h-[52px] left-[306px] top-[180.4px] w-[1080px]" data-name="Container">
      <Link16 />
      <Link17 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[296px] relative shrink-0 w-full">
      <SectionProgramCourses />
      <Heading15 />
      <Paragraph89 />
      <Container332 />
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

function DivCol10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[62.39px] items-start min-h-px min-w-px relative" data-name="div.col-12">
      <SecondaryNavigation />
    </div>
  );
}

function DivRow1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap items-start justify-center relative w-full">
        <DivCol10 />
      </div>
    </div>
  );
}

function SectionBgWhite() {
  return (
    <div className="bg-white h-[63.39px] shrink-0 sticky top-0 w-full" data-name="section.bg-white">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px px-[75px] relative size-full">
        <DivRow1 />
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

function DivCol11() {
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

function DivCol12() {
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
      <DivCol12 />
    </div>
  );
}

function DivRow2() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start relative shrink-0 w-[1320px]" data-name="div.row">
      <DivCol11 />
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
          <DivRow2 />
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

function DivCol13() {
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

function DivRow4() {
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

function DivRow5() {
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
      <DivRow4 />
      <DivRow5 />
    </div>
  );
}

function DivRow3() {
  return (
    <div className="content-end flex flex-wrap gap-0 items-end relative shrink-0 w-full" data-name="div.row">
      <div className="flex flex-row items-end self-stretch">
        <DivCol13 />
      </div>
      <DivDNone />
    </div>
  );
}

function SectionBgDark() {
  return (
    <div className="bg-[#191919] relative shrink-0 w-full" data-name="section.bg-dark-3">
      <div className="content-stretch flex flex-col items-start pb-[48px] pt-[47.375px] px-[60px] relative w-full">
        <DivRow3 />
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

function DivRow6() {
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
        <DivRow6 />
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

function DivRow7() {
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
        <DivRow7 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col h-[1001.655px] items-start relative shrink-0 w-full" data-name="footer">
      <Div />
      <SectionBgSecondary />
      <SectionPbSpaceXl />
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex flex-col items-start relative size-full">
      <Container />
      <Section />
      <Container75 />
      <Section1 />
      <RelatedExperiences />
      <Section2 />
      <Section3 />
      <Frame10 />
      <SectionBgWhite />
      <Footer />
    </div>
  );
}