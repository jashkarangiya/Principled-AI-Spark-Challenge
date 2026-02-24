import svgPaths from "./svg-nh7c0bv63w";
import imgImage from "figma:asset/3be6e3ff51aea25610418a0776cc98d56609b97a.png";
import imgImageDataAnalyst from "figma:asset/10c423e1aa51277da4683217b21abb006a4e7d7f.png";
import imgImageUxDesigner from "figma:asset/691da46b3ebe7200feb03f922c1224e27a956e14.png";
import imgImageSoftwareEngineer from "figma:asset/ce1f16d68a7c71d0cb99486846d1c3725e2ef68e.png";
import imgImageRegisteredNurse from "figma:asset/2807b4b0e8f13eadac0785414405252bbfb6fc4f.png";
import imgImageK12Teacher from "figma:asset/1401c4f6f7af08241a531c72a6514b45f8e8bdf8.png";
import imgImageFinancialAnalyst from "figma:asset/af60d058b7b3508ce30c4eaeee41d761716dadce.png";
import imgImageMarketingManager from "figma:asset/b6826a29bb6bce36725045b94eb98012c58e6404.png";
import imgImageSocialWorker from "figma:asset/3676bc436f9ddfc3f3bec2f9084e5c2bc1b27a5d.png";
import imgImageCybersecurityAnalyst from "figma:asset/c1ff0bccc3fe55f02daccc251832fb7343949fbc.png";
import imgImageEnvironmentalScientist from "figma:asset/6c997b5e28ac58e4b5c3a265870f9e5a14159917.png";
import imgImageJournalistReporter from "figma:asset/436fd92a66db044ee459399a3c58de9ce2a1a5bd.png";
import imgImagePhysicianAssistant from "figma:asset/18d9a2730c2f5ca90b536f5117b94c8e96a1b06a.png";

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
    <div className="absolute bg-white h-[147.6px] left-0 top-0 w-[1692px]" data-name="Container">
      <Container1 />
      <Container13 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#ffc627] content-stretch flex h-[62.4px] items-start left-[270.65px] px-[8px] top-[-0.8px] w-[184.175px]" data-name="Text">
      <p className="font-['Arial:Bold',sans-serif] leading-[61.6px] not-italic relative shrink-0 text-[#191919] text-[56px]">career</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[123.2px] left-[84px] top-[64px] w-[1576px]" data-name="Heading 1">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[61.6px] left-0 not-italic text-[#191919] text-[56px] top-[0.2px]">{`Find your `}</p>
      <Text />
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[61.6px] left-[454.83px] not-italic text-[#191919] text-[56px] top-[0.2px]">.</p>
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[61.6px] left-0 not-italic text-[#191919] text-[56px] top-[61.8px]">Then find your degree.</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[72px] left-[84px] top-[211.2px] w-[800px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px] w-[786px] whitespace-pre-wrap">{`Explore what it is you want to do, and we'll help make it a reality. Through ASU Online, there are more than 300 degree programs and certificates that can connect you to high-demand careers like nursing, engineering, management and more. Use the filters below to search by career type, area of interest and more.`}</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-white h-[347.2px] left-0 top-0 w-[1692px]" data-name="Container">
      <Heading />
      <Paragraph14 />
    </div>
  );
}

function Sidebar() {
  return <div className="h-[444px] shrink-0 w-[240px]" data-name="Sidebar" />;
}

function Button() {
  return (
    <div className="h-[21px] relative shrink-0 w-[54.487px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[21px] left-[27.5px] not-italic text-[#8c1d40] text-[14px] text-center top-[0.4px]">Clear all</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white flex-[1_0_0] h-[49.6px] min-h-px min-w-px relative" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#767676] text-[16px]">Search career by title</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-[0.8px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[16px] h-[49.6px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <TextInput />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[21px] relative shrink-0 w-[132.338px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">12 careers available</p>
    </div>
  );
}

function Container77() {
  return <div className="absolute bg-[#8c1d40] h-[40px] left-[8.8px] rounded-[26843500px] top-[4.8px] w-[48px]" data-name="Container" />;
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p21e95d00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p25a2f200} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3b9c6900} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p6b9d580} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p26fc4100} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3f2b2940} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p278685b0} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p9560680} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p2492b000} fill="var(--fill-0, white)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-center left-[4.8px] rounded-[26843500px] top-[4.8px] w-[48px]" data-name="Button">
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M2.5 10H2.50833" id="Vector" stroke="var(--stroke-0, #484848)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 15H2.50833" id="Vector_2" stroke="var(--stroke-0, #484848)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 5H2.50833" id="Vector_3" stroke="var(--stroke-0, #484848)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 10H17.5" id="Vector_4" stroke="var(--stroke-0, #484848)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 15H17.5" id="Vector_5" stroke="var(--stroke-0, #484848)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 5H17.5" id="Vector_6" stroke="var(--stroke-0, #484848)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-center left-[56.8px] rounded-[26843500px] top-[4.8px] w-[48px]" data-name="Button">
      <Icon7 />
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-white h-[49.6px] relative rounded-[26843500px] shrink-0 w-[109.6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <Container77 />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph15 />
      <Container76 />
    </div>
  );
}

function Container79() {
  return <div className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] h-[384.2px] left-0 top-0 w-[276px]" data-name="Container" />;
}

function Container81() {
  return <div className="absolute h-[156px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImageDataAnalyst() {
  return (
    <div className="h-[162.025px] relative shrink-0 w-full" data-name="Image (Data Analyst)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageDataAnalyst} />
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex flex-col h-[156px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImageDataAnalyst />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[156px] left-px top-px w-[274px]" data-name="Container">
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container86() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph16() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">Data Analyst</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph16 />
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container88 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[80.363px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">+23%</span>
        </p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[20px] top-0 w-[80.363px]" data-name="Container">
      <Paragraph17 />
    </div>
  );
}

function Icon8() {
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

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[2.4px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[7px] w-[226px]" data-name="Container">
      <Container91 />
      <Container92 />
    </div>
  );
}

function Icon9() {
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

function Container95() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-0 top-0 w-[7.5px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Icon10() {
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

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[7.5px] top-0 w-[7.5px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container95 />
        <Container96 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$76,000</span>
        </p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16.8px] items-center left-0 top-[23.8px] w-[226px]" data-name="Container">
      <Container94 />
      <Container97 />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute h-[40.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container90 />
      <Container93 />
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute h-[93.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container86 />
      <Container87 />
      <Container89 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute bg-white h-[172.2px] left-0 top-0 w-[274px]" data-name="Container">
      <Container85 />
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute h-[172.2px] left-px top-[157px] w-[274px]" data-name="Container">
      <Container84 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[66.45px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">Technology</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[66.45px]" data-name="Container">
      <Paragraph19 />
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[144px] w-[74.45px]" data-name="Container">
      <Container99 />
    </div>
  );
}

function Container101() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph20() {
  return (
    <div className="h-[22.4px] relative shrink-0 w-[81.825px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.4px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Container">
      <Paragraph20 />
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute h-[22.4px] left-0 top-[0.8px] w-[81.825px]" data-name="Container">
      <Container105 />
    </div>
  );
}

function Container108() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon11() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.737px] pr-[7.25px] pt-[0.737px] top-[6px] w-[22px]" data-name="Container">
      <Container110 />
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container108 />
      <Container109 />
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container107 />
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container104 />
      <Container106 />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container103 />
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[329.2px] w-[274px]" data-name="Container">
      <Container101 />
      <Container102 />
    </div>
  );
}

function Container112() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container113() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container111() {
  return (
    <div className="absolute bg-[#ffc627] h-[6px] left-px top-[378.2px] w-[274px]" data-name="Container">
      <Container112 />
      <Container113 />
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute bg-white h-[384.2px] left-0 top-0 w-[276px]" data-name="Link">
      <Container79 />
      <Container80 />
      <Container83 />
      <Container98 />
      <Container100 />
      <Container111 />
    </div>
  );
}

function Container114() {
  return <div className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] h-[384.2px] left-0 top-0 w-[276px]" data-name="Container" />;
}

function Container116() {
  return <div className="absolute h-[156px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImageUxDesigner() {
  return (
    <div className="h-[162.025px] relative shrink-0 w-full" data-name="Image (UX Designer)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageUxDesigner} />
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute content-stretch flex flex-col h-[156px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImageUxDesigner />
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute h-[156px] left-px top-px w-[274px]" data-name="Container">
      <Container116 />
      <Container117 />
    </div>
  );
}

function Container121() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph21() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">UX Designer</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph21 />
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container123 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[80.363px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">+16%</span>
        </p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[20px] top-0 w-[80.363px]" data-name="Container">
      <Paragraph22 />
    </div>
  );
}

function Icon12() {
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

function Container127() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[2.4px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[7px] w-[226px]" data-name="Container">
      <Container126 />
      <Container127 />
    </div>
  );
}

function Icon13() {
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

function Container130() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-0 top-0 w-[7.5px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function Icon14() {
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

function Container131() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[7.5px] top-0 w-[7.5px]" data-name="Container">
      <Icon14 />
    </div>
  );
}

function Container129() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container130 />
        <Container131 />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$72,000</span>
        </p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph23 />
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16.8px] items-center left-0 top-[23.8px] w-[226px]" data-name="Container">
      <Container129 />
      <Container132 />
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute h-[40.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container125 />
      <Container128 />
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute h-[93.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container121 />
      <Container122 />
      <Container124 />
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute bg-white h-[172.2px] left-0 top-0 w-[274px]" data-name="Container">
      <Container120 />
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute h-[172.2px] left-px top-[157px] w-[274px]" data-name="Container">
      <Container119 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[66.45px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">Technology</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[66.45px]" data-name="Container">
      <Paragraph24 />
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[144px] w-[74.45px]" data-name="Container">
      <Container134 />
    </div>
  );
}

function Container136() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph25() {
  return (
    <div className="h-[22.4px] relative shrink-0 w-[81.825px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.4px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Container">
      <Paragraph25 />
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute h-[22.4px] left-0 top-[0.8px] w-[81.825px]" data-name="Container">
      <Container140 />
    </div>
  );
}

function Container143() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon15() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.737px] pr-[7.25px] pt-[0.737px] top-[6px] w-[22px]" data-name="Container">
      <Container145 />
    </div>
  );
}

function Container142() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container143 />
      <Container144 />
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container142 />
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container139 />
      <Container141 />
    </div>
  );
}

function Container137() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container138 />
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[329.2px] w-[274px]" data-name="Container">
      <Container136 />
      <Container137 />
    </div>
  );
}

function Container147() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container148() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container146() {
  return (
    <div className="absolute bg-[#ffc627] h-[6px] left-px top-[378.2px] w-[274px]" data-name="Container">
      <Container147 />
      <Container148 />
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute bg-white h-[384.2px] left-[329px] top-0 w-[276px]" data-name="Link">
      <Container114 />
      <Container115 />
      <Container118 />
      <Container133 />
      <Container135 />
      <Container146 />
    </div>
  );
}

function Container149() {
  return <div className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] h-[384.2px] left-0 top-0 w-[276px]" data-name="Container" />;
}

function Container151() {
  return <div className="absolute h-[156px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImageSoftwareEngineer() {
  return (
    <div className="h-[162.025px] relative shrink-0 w-full" data-name="Image (Software Engineer)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSoftwareEngineer} />
    </div>
  );
}

function Container152() {
  return (
    <div className="absolute content-stretch flex flex-col h-[156px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImageSoftwareEngineer />
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute h-[156px] left-px top-px w-[274px]" data-name="Container">
      <Container151 />
      <Container152 />
    </div>
  );
}

function Container156() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph26() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">Software Engineer</p>
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph26 />
    </div>
  );
}

function Container157() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container158 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[80.363px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">+22%</span>
        </p>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[20px] top-0 w-[80.363px]" data-name="Container">
      <Paragraph27 />
    </div>
  );
}

function Icon16() {
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

function Container162() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[2.4px]" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[7px] w-[226px]" data-name="Container">
      <Container161 />
      <Container162 />
    </div>
  );
}

function Icon17() {
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

function Container165() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-0 top-0 w-[7.5px]" data-name="Container">
      <Icon17 />
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

function Container166() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[7.5px] top-0 w-[7.5px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Container164() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container165 />
        <Container166 />
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[93.425px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$102,000</span>
        </p>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[93.425px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph28 />
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16.8px] items-center left-0 top-[23.8px] w-[226px]" data-name="Container">
      <Container164 />
      <Container167 />
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute h-[40.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container160 />
      <Container163 />
    </div>
  );
}

function Container155() {
  return (
    <div className="absolute h-[93.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container156 />
      <Container157 />
      <Container159 />
    </div>
  );
}

function Container154() {
  return (
    <div className="absolute bg-white h-[172.2px] left-0 top-0 w-[274px]" data-name="Container">
      <Container155 />
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute h-[172.2px] left-px top-[157px] w-[274px]" data-name="Container">
      <Container154 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[66.45px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">Technology</p>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[66.45px]" data-name="Container">
      <Paragraph29 />
    </div>
  );
}

function Container168() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[144px] w-[74.45px]" data-name="Container">
      <Container169 />
    </div>
  );
}

function Container171() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph30() {
  return (
    <div className="h-[22.4px] relative shrink-0 w-[81.825px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.4px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Container">
      <Paragraph30 />
    </div>
  );
}

function Container174() {
  return (
    <div className="absolute h-[22.4px] left-0 top-[0.8px] w-[81.825px]" data-name="Container">
      <Container175 />
    </div>
  );
}

function Container178() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon19() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Container179() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.738px] pr-[7.25px] pt-[0.737px] top-[6px] w-[22px]" data-name="Container">
      <Container180 />
    </div>
  );
}

function Container177() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container178 />
      <Container179 />
    </div>
  );
}

function Container176() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container177 />
    </div>
  );
}

function Container173() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container174 />
      <Container176 />
    </div>
  );
}

function Container172() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container173 />
    </div>
  );
}

function Container170() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[329.2px] w-[274px]" data-name="Container">
      <Container171 />
      <Container172 />
    </div>
  );
}

function Container182() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container183() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container181() {
  return (
    <div className="absolute bg-[#ffc627] h-[6px] left-px top-[378.2px] w-[274px]" data-name="Container">
      <Container182 />
      <Container183 />
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute bg-white h-[384.2px] left-[658px] top-0 w-[276px]" data-name="Link">
      <Container149 />
      <Container150 />
      <Container153 />
      <Container168 />
      <Container170 />
      <Container181 />
    </div>
  );
}

function Container184() {
  return <div className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] h-[384.2px] left-0 top-0 w-[276px]" data-name="Container" />;
}

function Container186() {
  return <div className="absolute h-[156px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImageRegisteredNurse() {
  return (
    <div className="h-[162.025px] relative shrink-0 w-full" data-name="Image (Registered Nurse)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRegisteredNurse} />
    </div>
  );
}

function Container187() {
  return (
    <div className="absolute content-stretch flex flex-col h-[156px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImageRegisteredNurse />
    </div>
  );
}

function Container185() {
  return (
    <div className="absolute h-[156px] left-px top-px w-[274px]" data-name="Container">
      <Container186 />
      <Container187 />
    </div>
  );
}

function Container191() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph31() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">Registered Nurse</p>
      </div>
    </div>
  );
}

function Container193() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph31 />
    </div>
  );
}

function Container192() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container193 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[73.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">+6%</span>
        </p>
      </div>
    </div>
  );
}

function Container196() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[20px] top-0 w-[73.688px]" data-name="Container">
      <Paragraph32 />
    </div>
  );
}

function Icon20() {
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

function Container197() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[2.4px]" data-name="Container">
      <Icon20 />
    </div>
  );
}

function Container195() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[7px] w-[226px]" data-name="Container">
      <Container196 />
      <Container197 />
    </div>
  );
}

function Icon21() {
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

function Container200() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-0 top-0 w-[7.5px]" data-name="Container">
      <Icon21 />
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

function Container201() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[7.5px] top-0 w-[7.5px]" data-name="Container">
      <Icon22 />
    </div>
  );
}

function Container199() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container200 />
        <Container201 />
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$77,000</span>
        </p>
      </div>
    </div>
  );
}

function Container202() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph33 />
      </div>
    </div>
  );
}

function Container198() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16.8px] items-center left-0 top-[23.8px] w-[226px]" data-name="Container">
      <Container199 />
      <Container202 />
    </div>
  );
}

function Container194() {
  return (
    <div className="absolute h-[40.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container195 />
      <Container198 />
    </div>
  );
}

function Container190() {
  return (
    <div className="absolute h-[93.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container191 />
      <Container192 />
      <Container194 />
    </div>
  );
}

function Container189() {
  return (
    <div className="absolute bg-white h-[172.2px] left-0 top-0 w-[274px]" data-name="Container">
      <Container190 />
    </div>
  );
}

function Container188() {
  return (
    <div className="absolute h-[172.2px] left-px top-[157px] w-[274px]" data-name="Container">
      <Container189 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[97.35px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">{`Health & Nursing`}</p>
      </div>
    </div>
  );
}

function Container204() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[97.35px]" data-name="Container">
      <Paragraph34 />
    </div>
  );
}

function Container203() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[144px] w-[105.35px]" data-name="Container">
      <Container204 />
    </div>
  );
}

function Container206() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph35() {
  return (
    <div className="h-[22.4px] relative shrink-0 w-[81.825px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.4px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Container210() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Container">
      <Paragraph35 />
    </div>
  );
}

function Container209() {
  return (
    <div className="absolute h-[22.4px] left-0 top-[0.8px] w-[81.825px]" data-name="Container">
      <Container210 />
    </div>
  );
}

function Container213() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon23() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container215() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon23 />
    </div>
  );
}

function Container214() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.738px] pr-[7.25px] pt-[0.737px] top-[6px] w-[22px]" data-name="Container">
      <Container215 />
    </div>
  );
}

function Container212() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container213 />
      <Container214 />
    </div>
  );
}

function Container211() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container212 />
    </div>
  );
}

function Container208() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container209 />
      <Container211 />
    </div>
  );
}

function Container207() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container208 />
    </div>
  );
}

function Container205() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[329.2px] w-[274px]" data-name="Container">
      <Container206 />
      <Container207 />
    </div>
  );
}

function Container217() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container218() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container216() {
  return (
    <div className="absolute bg-[#ffc627] h-[6px] left-px top-[378.2px] w-[274px]" data-name="Container">
      <Container217 />
      <Container218 />
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute bg-white h-[384.2px] left-[987px] top-0 w-[276px]" data-name="Link">
      <Container184 />
      <Container185 />
      <Container188 />
      <Container203 />
      <Container205 />
      <Container216 />
    </div>
  );
}

function Container219() {
  return <div className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] h-[384.2px] left-0 top-0 w-[276px]" data-name="Container" />;
}

function Container221() {
  return <div className="absolute h-[156px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImageK12Teacher() {
  return (
    <div className="h-[162.025px] relative shrink-0 w-full" data-name="Image (K-12 Teacher)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageK12Teacher} />
    </div>
  );
}

function Container222() {
  return (
    <div className="absolute content-stretch flex flex-col h-[156px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImageK12Teacher />
    </div>
  );
}

function Container220() {
  return (
    <div className="absolute h-[156px] left-px top-px w-[274px]" data-name="Container">
      <Container221 />
      <Container222 />
    </div>
  );
}

function Container226() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph36() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">K-12 Teacher</p>
      </div>
    </div>
  );
}

function Container228() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph36 />
    </div>
  );
}

function Container227() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container228 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[73.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">+4%</span>
        </p>
      </div>
    </div>
  );
}

function Container231() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[20px] top-0 w-[73.688px]" data-name="Container">
      <Paragraph37 />
    </div>
  );
}

function Icon24() {
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

function Container232() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[2.4px]" data-name="Container">
      <Icon24 />
    </div>
  );
}

function Container230() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[7px] w-[226px]" data-name="Container">
      <Container231 />
      <Container232 />
    </div>
  );
}

function Icon25() {
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

function Container235() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-0 top-0 w-[7.5px]" data-name="Container">
      <Icon25 />
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

function Container236() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[7.5px] top-0 w-[7.5px]" data-name="Container">
      <Icon26 />
    </div>
  );
}

function Container234() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container235 />
        <Container236 />
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$61,000</span>
        </p>
      </div>
    </div>
  );
}

function Container237() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph38 />
      </div>
    </div>
  );
}

function Container233() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16.8px] items-center left-0 top-[23.8px] w-[226px]" data-name="Container">
      <Container234 />
      <Container237 />
    </div>
  );
}

function Container229() {
  return (
    <div className="absolute h-[40.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container230 />
      <Container233 />
    </div>
  );
}

function Container225() {
  return (
    <div className="absolute h-[93.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container226 />
      <Container227 />
      <Container229 />
    </div>
  );
}

function Container224() {
  return (
    <div className="absolute bg-white h-[172.2px] left-0 top-0 w-[274px]" data-name="Container">
      <Container225 />
    </div>
  );
}

function Container223() {
  return (
    <div className="absolute h-[172.2px] left-px top-[157px] w-[274px]" data-name="Container">
      <Container224 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[58.013px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">Education</p>
      </div>
    </div>
  );
}

function Container239() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[58.013px]" data-name="Container">
      <Paragraph39 />
    </div>
  );
}

function Container238() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[144px] w-[66.013px]" data-name="Container">
      <Container239 />
    </div>
  );
}

function Container241() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph40() {
  return (
    <div className="h-[22.4px] relative shrink-0 w-[81.825px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.4px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Container245() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Container">
      <Paragraph40 />
    </div>
  );
}

function Container244() {
  return (
    <div className="absolute h-[22.4px] left-0 top-[0.8px] w-[81.825px]" data-name="Container">
      <Container245 />
    </div>
  );
}

function Container248() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon27() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container250() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon27 />
    </div>
  );
}

function Container249() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.737px] pr-[7.25px] pt-[0.738px] top-[6px] w-[22px]" data-name="Container">
      <Container250 />
    </div>
  );
}

function Container247() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container248 />
      <Container249 />
    </div>
  );
}

function Container246() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container247 />
    </div>
  );
}

function Container243() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container244 />
      <Container246 />
    </div>
  );
}

function Container242() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container243 />
    </div>
  );
}

function Container240() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[329.2px] w-[274px]" data-name="Container">
      <Container241 />
      <Container242 />
    </div>
  );
}

function Container252() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container253() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container251() {
  return (
    <div className="absolute bg-[#ffc627] h-[6px] left-px top-[378.2px] w-[274px]" data-name="Container">
      <Container252 />
      <Container253 />
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute bg-white h-[384.2px] left-0 top-[418.2px] w-[276px]" data-name="Link">
      <Container219 />
      <Container220 />
      <Container223 />
      <Container238 />
      <Container240 />
      <Container251 />
    </div>
  );
}

function Container254() {
  return <div className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] h-[384.2px] left-0 top-0 w-[276px]" data-name="Container" />;
}

function Container256() {
  return <div className="absolute h-[156px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImageFinancialAnalyst() {
  return (
    <div className="h-[162.025px] relative shrink-0 w-full" data-name="Image (Financial Analyst)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFinancialAnalyst} />
    </div>
  );
}

function Container257() {
  return (
    <div className="absolute content-stretch flex flex-col h-[156px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImageFinancialAnalyst />
    </div>
  );
}

function Container255() {
  return (
    <div className="absolute h-[156px] left-px top-px w-[274px]" data-name="Container">
      <Container256 />
      <Container257 />
    </div>
  );
}

function Container261() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph41() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">Financial Analyst</p>
      </div>
    </div>
  );
}

function Container263() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph41 />
    </div>
  );
}

function Container262() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container263 />
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[73.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">+8%</span>
        </p>
      </div>
    </div>
  );
}

function Container266() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[20px] top-0 w-[73.688px]" data-name="Container">
      <Paragraph42 />
    </div>
  );
}

function Icon28() {
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

function Container267() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[2.4px]" data-name="Container">
      <Icon28 />
    </div>
  );
}

function Container265() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[7px] w-[226px]" data-name="Container">
      <Container266 />
      <Container267 />
    </div>
  );
}

function Icon29() {
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

function Container270() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-0 top-0 w-[7.5px]" data-name="Container">
      <Icon29 />
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

function Container271() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[7.5px] top-0 w-[7.5px]" data-name="Container">
      <Icon30 />
    </div>
  );
}

function Container269() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container270 />
        <Container271 />
      </div>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$74,000</span>
        </p>
      </div>
    </div>
  );
}

function Container272() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph43 />
      </div>
    </div>
  );
}

function Container268() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16.8px] items-center left-0 top-[23.8px] w-[226px]" data-name="Container">
      <Container269 />
      <Container272 />
    </div>
  );
}

function Container264() {
  return (
    <div className="absolute h-[40.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container265 />
      <Container268 />
    </div>
  );
}

function Container260() {
  return (
    <div className="absolute h-[93.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container261 />
      <Container262 />
      <Container264 />
    </div>
  );
}

function Container259() {
  return (
    <div className="absolute bg-white h-[172.2px] left-0 top-0 w-[274px]" data-name="Container">
      <Container260 />
    </div>
  );
}

function Container258() {
  return (
    <div className="absolute h-[172.2px] left-px top-[157px] w-[274px]" data-name="Container">
      <Container259 />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[53.362px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">Business</p>
      </div>
    </div>
  );
}

function Container274() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[53.362px]" data-name="Container">
      <Paragraph44 />
    </div>
  );
}

function Container273() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[144px] w-[61.362px]" data-name="Container">
      <Container274 />
    </div>
  );
}

function Container276() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph45() {
  return (
    <div className="h-[22.4px] relative shrink-0 w-[81.825px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.4px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Container280() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Container">
      <Paragraph45 />
    </div>
  );
}

function Container279() {
  return (
    <div className="absolute h-[22.4px] left-0 top-[0.8px] w-[81.825px]" data-name="Container">
      <Container280 />
    </div>
  );
}

function Container283() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon31() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container285() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon31 />
    </div>
  );
}

function Container284() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.737px] pr-[7.25px] pt-[0.738px] top-[6px] w-[22px]" data-name="Container">
      <Container285 />
    </div>
  );
}

function Container282() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container283 />
      <Container284 />
    </div>
  );
}

function Container281() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container282 />
    </div>
  );
}

function Container278() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container279 />
      <Container281 />
    </div>
  );
}

function Container277() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container278 />
    </div>
  );
}

function Container275() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[329.2px] w-[274px]" data-name="Container">
      <Container276 />
      <Container277 />
    </div>
  );
}

function Container287() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container288() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container286() {
  return (
    <div className="absolute bg-[#ffc627] h-[6px] left-px top-[378.2px] w-[274px]" data-name="Container">
      <Container287 />
      <Container288 />
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute bg-white h-[384.2px] left-[329px] top-[418.2px] w-[276px]" data-name="Link">
      <Container254 />
      <Container255 />
      <Container258 />
      <Container273 />
      <Container275 />
      <Container286 />
    </div>
  );
}

function Container289() {
  return <div className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] h-[384.2px] left-0 top-0 w-[276px]" data-name="Container" />;
}

function Container291() {
  return <div className="absolute h-[156px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImageMarketingManager() {
  return (
    <div className="h-[162.025px] relative shrink-0 w-full" data-name="Image (Marketing Manager)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMarketingManager} />
    </div>
  );
}

function Container292() {
  return (
    <div className="absolute content-stretch flex flex-col h-[156px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImageMarketingManager />
    </div>
  );
}

function Container290() {
  return (
    <div className="absolute h-[156px] left-px top-px w-[274px]" data-name="Container">
      <Container291 />
      <Container292 />
    </div>
  );
}

function Container296() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph46() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">Marketing Manager</p>
      </div>
    </div>
  );
}

function Container298() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph46 />
    </div>
  );
}

function Container297() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container298 />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[73.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">+8%</span>
        </p>
      </div>
    </div>
  );
}

function Container301() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[20px] top-0 w-[73.688px]" data-name="Container">
      <Paragraph47 />
    </div>
  );
}

function Icon32() {
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

function Container302() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[2.4px]" data-name="Container">
      <Icon32 />
    </div>
  );
}

function Container300() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[7px] w-[226px]" data-name="Container">
      <Container301 />
      <Container302 />
    </div>
  );
}

function Icon33() {
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

function Container305() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-0 top-0 w-[7.5px]" data-name="Container">
      <Icon33 />
    </div>
  );
}

function Icon34() {
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

function Container306() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[7.5px] top-0 w-[7.5px]" data-name="Container">
      <Icon34 />
    </div>
  );
}

function Container304() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container305 />
        <Container306 />
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$85,000</span>
        </p>
      </div>
    </div>
  );
}

function Container307() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph48 />
      </div>
    </div>
  );
}

function Container303() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16.8px] items-center left-0 top-[23.8px] w-[226px]" data-name="Container">
      <Container304 />
      <Container307 />
    </div>
  );
}

function Container299() {
  return (
    <div className="absolute h-[40.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container300 />
      <Container303 />
    </div>
  );
}

function Container295() {
  return (
    <div className="absolute h-[93.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container296 />
      <Container297 />
      <Container299 />
    </div>
  );
}

function Container294() {
  return (
    <div className="absolute bg-white h-[172.2px] left-0 top-0 w-[274px]" data-name="Container">
      <Container295 />
    </div>
  );
}

function Container293() {
  return (
    <div className="absolute h-[172.2px] left-px top-[157px] w-[274px]" data-name="Container">
      <Container294 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[53.362px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">Business</p>
      </div>
    </div>
  );
}

function Container309() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[53.362px]" data-name="Container">
      <Paragraph49 />
    </div>
  );
}

function Container308() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[144px] w-[61.362px]" data-name="Container">
      <Container309 />
    </div>
  );
}

function Container311() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph50() {
  return (
    <div className="h-[22.4px] relative shrink-0 w-[81.825px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.4px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Container315() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Container">
      <Paragraph50 />
    </div>
  );
}

function Container314() {
  return (
    <div className="absolute h-[22.4px] left-0 top-[0.8px] w-[81.825px]" data-name="Container">
      <Container315 />
    </div>
  );
}

function Container318() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon35() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container320() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon35 />
    </div>
  );
}

function Container319() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.738px] pr-[7.25px] pt-[0.738px] top-[6px] w-[22px]" data-name="Container">
      <Container320 />
    </div>
  );
}

function Container317() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container318 />
      <Container319 />
    </div>
  );
}

function Container316() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container317 />
    </div>
  );
}

function Container313() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container314 />
      <Container316 />
    </div>
  );
}

function Container312() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container313 />
    </div>
  );
}

function Container310() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[329.2px] w-[274px]" data-name="Container">
      <Container311 />
      <Container312 />
    </div>
  );
}

function Container322() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container323() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container321() {
  return (
    <div className="absolute bg-[#ffc627] h-[6px] left-px top-[378.2px] w-[274px]" data-name="Container">
      <Container322 />
      <Container323 />
    </div>
  );
}

function Link18() {
  return (
    <div className="absolute bg-white h-[384.2px] left-[658px] top-[418.2px] w-[276px]" data-name="Link">
      <Container289 />
      <Container290 />
      <Container293 />
      <Container308 />
      <Container310 />
      <Container321 />
    </div>
  );
}

function Container324() {
  return <div className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] h-[384.2px] left-0 top-0 w-[276px]" data-name="Container" />;
}

function Container326() {
  return <div className="absolute h-[156px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImageSocialWorker() {
  return (
    <div className="h-[162.025px] relative shrink-0 w-full" data-name="Image (Social Worker)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSocialWorker} />
    </div>
  );
}

function Container327() {
  return (
    <div className="absolute content-stretch flex flex-col h-[156px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImageSocialWorker />
    </div>
  );
}

function Container325() {
  return (
    <div className="absolute h-[156px] left-px top-px w-[274px]" data-name="Container">
      <Container326 />
      <Container327 />
    </div>
  );
}

function Container331() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph51() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">Social Worker</p>
      </div>
    </div>
  );
}

function Container333() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph51 />
    </div>
  );
}

function Container332() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container333 />
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[73.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">+9%</span>
        </p>
      </div>
    </div>
  );
}

function Container336() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[20px] top-0 w-[73.688px]" data-name="Container">
      <Paragraph52 />
    </div>
  );
}

function Icon36() {
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

function Container337() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[2.4px]" data-name="Container">
      <Icon36 />
    </div>
  );
}

function Container335() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[7px] w-[226px]" data-name="Container">
      <Container336 />
      <Container337 />
    </div>
  );
}

function Icon37() {
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

function Container340() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-0 top-0 w-[7.5px]" data-name="Container">
      <Icon37 />
    </div>
  );
}

function Icon38() {
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

function Container341() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[7.5px] top-0 w-[7.5px]" data-name="Container">
      <Icon38 />
    </div>
  );
}

function Container339() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container340 />
        <Container341 />
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$58,000</span>
        </p>
      </div>
    </div>
  );
}

function Container342() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph53 />
      </div>
    </div>
  );
}

function Container338() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16.8px] items-center left-0 top-[23.8px] w-[226px]" data-name="Container">
      <Container339 />
      <Container342 />
    </div>
  );
}

function Container334() {
  return (
    <div className="absolute h-[40.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container335 />
      <Container338 />
    </div>
  );
}

function Container330() {
  return (
    <div className="absolute h-[93.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container331 />
      <Container332 />
      <Container334 />
    </div>
  );
}

function Container329() {
  return (
    <div className="absolute bg-white h-[172.2px] left-0 top-0 w-[274px]" data-name="Container">
      <Container330 />
    </div>
  );
}

function Container328() {
  return (
    <div className="absolute h-[172.2px] left-px top-[157px] w-[274px]" data-name="Container">
      <Container329 />
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[90.725px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">Social Sciences</p>
      </div>
    </div>
  );
}

function Container344() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[90.725px]" data-name="Container">
      <Paragraph54 />
    </div>
  );
}

function Container343() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[144px] w-[98.725px]" data-name="Container">
      <Container344 />
    </div>
  );
}

function Container346() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph55() {
  return (
    <div className="h-[22.4px] relative shrink-0 w-[81.825px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.4px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Container350() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Container">
      <Paragraph55 />
    </div>
  );
}

function Container349() {
  return (
    <div className="absolute h-[22.4px] left-0 top-[0.8px] w-[81.825px]" data-name="Container">
      <Container350 />
    </div>
  );
}

function Container353() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon39() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container355() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon39 />
    </div>
  );
}

function Container354() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.738px] pr-[7.25px] pt-[0.738px] top-[6px] w-[22px]" data-name="Container">
      <Container355 />
    </div>
  );
}

function Container352() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container353 />
      <Container354 />
    </div>
  );
}

function Container351() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container352 />
    </div>
  );
}

function Container348() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container349 />
      <Container351 />
    </div>
  );
}

function Container347() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container348 />
    </div>
  );
}

function Container345() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[329.2px] w-[274px]" data-name="Container">
      <Container346 />
      <Container347 />
    </div>
  );
}

function Container357() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container358() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container356() {
  return (
    <div className="absolute bg-[#ffc627] h-[6px] left-px top-[378.2px] w-[274px]" data-name="Container">
      <Container357 />
      <Container358 />
    </div>
  );
}

function Link19() {
  return (
    <div className="absolute bg-white h-[384.2px] left-[987px] top-[418.2px] w-[276px]" data-name="Link">
      <Container324 />
      <Container325 />
      <Container328 />
      <Container343 />
      <Container345 />
      <Container356 />
    </div>
  );
}

function Container359() {
  return <div className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] h-[384.2px] left-0 top-0 w-[276px]" data-name="Container" />;
}

function Container361() {
  return <div className="absolute h-[156px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImageCybersecurityAnalyst() {
  return (
    <div className="h-[162.025px] relative shrink-0 w-full" data-name="Image (Cybersecurity Analyst)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCybersecurityAnalyst} />
    </div>
  );
}

function Container362() {
  return (
    <div className="absolute content-stretch flex flex-col h-[156px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImageCybersecurityAnalyst />
    </div>
  );
}

function Container360() {
  return (
    <div className="absolute h-[156px] left-px top-px w-[274px]" data-name="Container">
      <Container361 />
      <Container362 />
    </div>
  );
}

function Container366() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph56() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">Cybersecurity Analyst</p>
      </div>
    </div>
  );
}

function Container368() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph56 />
    </div>
  );
}

function Container367() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container368 />
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[80.363px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">+35%</span>
        </p>
      </div>
    </div>
  );
}

function Container371() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[20px] top-0 w-[80.363px]" data-name="Container">
      <Paragraph57 />
    </div>
  );
}

function Icon40() {
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

function Container372() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[2.4px]" data-name="Container">
      <Icon40 />
    </div>
  );
}

function Container370() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[7px] w-[226px]" data-name="Container">
      <Container371 />
      <Container372 />
    </div>
  );
}

function Icon41() {
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

function Container375() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-0 top-0 w-[7.5px]" data-name="Container">
      <Icon41 />
    </div>
  );
}

function Icon42() {
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

function Container376() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[7.5px] top-0 w-[7.5px]" data-name="Container">
      <Icon42 />
    </div>
  );
}

function Container374() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container375 />
        <Container376 />
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$94,000</span>
        </p>
      </div>
    </div>
  );
}

function Container377() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph58 />
      </div>
    </div>
  );
}

function Container373() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16.8px] items-center left-0 top-[23.8px] w-[226px]" data-name="Container">
      <Container374 />
      <Container377 />
    </div>
  );
}

function Container369() {
  return (
    <div className="absolute h-[40.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container370 />
      <Container373 />
    </div>
  );
}

function Container365() {
  return (
    <div className="absolute h-[93.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container366 />
      <Container367 />
      <Container369 />
    </div>
  );
}

function Container364() {
  return (
    <div className="absolute bg-white h-[172.2px] left-0 top-0 w-[274px]" data-name="Container">
      <Container365 />
    </div>
  );
}

function Container363() {
  return (
    <div className="absolute h-[172.2px] left-px top-[157px] w-[274px]" data-name="Container">
      <Container364 />
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[66.45px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">Technology</p>
      </div>
    </div>
  );
}

function Container379() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[66.45px]" data-name="Container">
      <Paragraph59 />
    </div>
  );
}

function Container378() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[144px] w-[74.45px]" data-name="Container">
      <Container379 />
    </div>
  );
}

function Container381() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph60() {
  return (
    <div className="h-[22.4px] relative shrink-0 w-[81.825px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.4px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Container385() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Container">
      <Paragraph60 />
    </div>
  );
}

function Container384() {
  return (
    <div className="absolute h-[22.4px] left-0 top-[0.8px] w-[81.825px]" data-name="Container">
      <Container385 />
    </div>
  );
}

function Container388() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon43() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container390() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon43 />
    </div>
  );
}

function Container389() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.737px] pr-[7.25px] pt-[0.738px] top-[6px] w-[22px]" data-name="Container">
      <Container390 />
    </div>
  );
}

function Container387() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container388 />
      <Container389 />
    </div>
  );
}

function Container386() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container387 />
    </div>
  );
}

function Container383() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container384 />
      <Container386 />
    </div>
  );
}

function Container382() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container383 />
    </div>
  );
}

function Container380() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[329.2px] w-[274px]" data-name="Container">
      <Container381 />
      <Container382 />
    </div>
  );
}

function Container392() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container393() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container391() {
  return (
    <div className="absolute bg-[#ffc627] h-[6px] left-px top-[378.2px] w-[274px]" data-name="Container">
      <Container392 />
      <Container393 />
    </div>
  );
}

function Link20() {
  return (
    <div className="absolute bg-white h-[384.2px] left-0 top-[836.4px] w-[276px]" data-name="Link">
      <Container359 />
      <Container360 />
      <Container363 />
      <Container378 />
      <Container380 />
      <Container391 />
    </div>
  );
}

function Container394() {
  return <div className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] h-[384.2px] left-0 top-0 w-[276px]" data-name="Container" />;
}

function Container396() {
  return <div className="absolute h-[156px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImageEnvironmentalScientist() {
  return (
    <div className="h-[162.025px] relative shrink-0 w-full" data-name="Image (Environmental Scientist)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEnvironmentalScientist} />
    </div>
  );
}

function Container397() {
  return (
    <div className="absolute content-stretch flex flex-col h-[156px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImageEnvironmentalScientist />
    </div>
  );
}

function Container395() {
  return (
    <div className="absolute h-[156px] left-px top-px w-[274px]" data-name="Container">
      <Container396 />
      <Container397 />
    </div>
  );
}

function Container401() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph61() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">Environmental Scientist</p>
      </div>
    </div>
  );
}

function Container403() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph61 />
    </div>
  );
}

function Container402() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container403 />
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[73.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">+6%</span>
        </p>
      </div>
    </div>
  );
}

function Container406() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[20px] top-0 w-[73.688px]" data-name="Container">
      <Paragraph62 />
    </div>
  );
}

function Icon44() {
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

function Container407() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[2.4px]" data-name="Container">
      <Icon44 />
    </div>
  );
}

function Container405() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[7px] w-[226px]" data-name="Container">
      <Container406 />
      <Container407 />
    </div>
  );
}

function Icon45() {
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

function Container410() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-0 top-0 w-[7.5px]" data-name="Container">
      <Icon45 />
    </div>
  );
}

function Icon46() {
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

function Container411() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[7.5px] top-0 w-[7.5px]" data-name="Container">
      <Icon46 />
    </div>
  );
}

function Container409() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container410 />
        <Container411 />
      </div>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$73,000</span>
        </p>
      </div>
    </div>
  );
}

function Container412() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph63 />
      </div>
    </div>
  );
}

function Container408() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16.8px] items-center left-0 top-[23.8px] w-[226px]" data-name="Container">
      <Container409 />
      <Container412 />
    </div>
  );
}

function Container404() {
  return (
    <div className="absolute h-[40.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container405 />
      <Container408 />
    </div>
  );
}

function Container400() {
  return (
    <div className="absolute h-[93.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container401 />
      <Container402 />
      <Container404 />
    </div>
  );
}

function Container399() {
  return (
    <div className="absolute bg-white h-[172.2px] left-0 top-0 w-[274px]" data-name="Container">
      <Container400 />
    </div>
  );
}

function Container398() {
  return (
    <div className="absolute h-[172.2px] left-px top-[157px] w-[274px]" data-name="Container">
      <Container399 />
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[69.35px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">Engineering</p>
      </div>
    </div>
  );
}

function Container414() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[69.35px]" data-name="Container">
      <Paragraph64 />
    </div>
  );
}

function Container413() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[144px] w-[77.35px]" data-name="Container">
      <Container414 />
    </div>
  );
}

function Container416() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph65() {
  return (
    <div className="h-[22.4px] relative shrink-0 w-[81.825px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.4px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Container420() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Container">
      <Paragraph65 />
    </div>
  );
}

function Container419() {
  return (
    <div className="absolute h-[22.4px] left-0 top-[0.8px] w-[81.825px]" data-name="Container">
      <Container420 />
    </div>
  );
}

function Container423() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon47() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container425() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon47 />
    </div>
  );
}

function Container424() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.737px] pr-[7.25px] pt-[0.738px] top-[6px] w-[22px]" data-name="Container">
      <Container425 />
    </div>
  );
}

function Container422() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container423 />
      <Container424 />
    </div>
  );
}

function Container421() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container422 />
    </div>
  );
}

function Container418() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container419 />
      <Container421 />
    </div>
  );
}

function Container417() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container418 />
    </div>
  );
}

function Container415() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[329.2px] w-[274px]" data-name="Container">
      <Container416 />
      <Container417 />
    </div>
  );
}

function Container427() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container428() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container426() {
  return (
    <div className="absolute bg-[#ffc627] h-[6px] left-px top-[378.2px] w-[274px]" data-name="Container">
      <Container427 />
      <Container428 />
    </div>
  );
}

function Link21() {
  return (
    <div className="absolute bg-white h-[384.2px] left-[329px] top-[836.4px] w-[276px]" data-name="Link">
      <Container394 />
      <Container395 />
      <Container398 />
      <Container413 />
      <Container415 />
      <Container426 />
    </div>
  );
}

function Container429() {
  return <div className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] h-[384.2px] left-0 top-0 w-[276px]" data-name="Container" />;
}

function Container431() {
  return <div className="absolute h-[156px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImageJournalistReporter() {
  return (
    <div className="h-[162.025px] relative shrink-0 w-full" data-name="Image (Journalist/Reporter)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageJournalistReporter} />
    </div>
  );
}

function Container432() {
  return (
    <div className="absolute content-stretch flex flex-col h-[156px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImageJournalistReporter />
    </div>
  );
}

function Container430() {
  return (
    <div className="absolute h-[156px] left-px top-px w-[274px]" data-name="Container">
      <Container431 />
      <Container432 />
    </div>
  );
}

function Container436() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph66() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">Journalist/Reporter</p>
      </div>
    </div>
  );
}

function Container438() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph66 />
    </div>
  );
}

function Container437() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container438 />
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[70.675px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">-3%</span>
        </p>
      </div>
    </div>
  );
}

function Container441() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[20px] top-0 w-[70.675px]" data-name="Container">
      <Paragraph67 />
    </div>
  );
}

function Icon48() {
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

function Container442() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[2.4px]" data-name="Container">
      <Icon48 />
    </div>
  );
}

function Container440() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[7px] w-[226px]" data-name="Container">
      <Container441 />
      <Container442 />
    </div>
  );
}

function Icon49() {
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

function Container445() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-0 top-0 w-[7.5px]" data-name="Container">
      <Icon49 />
    </div>
  );
}

function Icon50() {
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

function Container446() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[7.5px] top-0 w-[7.5px]" data-name="Container">
      <Icon50 />
    </div>
  );
}

function Container444() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container445 />
        <Container446 />
      </div>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$52,000</span>
        </p>
      </div>
    </div>
  );
}

function Container447() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[86.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph68 />
      </div>
    </div>
  );
}

function Container443() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16.8px] items-center left-0 top-[23.8px] w-[226px]" data-name="Container">
      <Container444 />
      <Container447 />
    </div>
  );
}

function Container439() {
  return (
    <div className="absolute h-[40.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container440 />
      <Container443 />
    </div>
  );
}

function Container435() {
  return (
    <div className="absolute h-[93.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container436 />
      <Container437 />
      <Container439 />
    </div>
  );
}

function Container434() {
  return (
    <div className="absolute bg-white h-[172.2px] left-0 top-0 w-[274px]" data-name="Container">
      <Container435 />
    </div>
  );
}

function Container433() {
  return (
    <div className="absolute h-[172.2px] left-px top-[157px] w-[274px]" data-name="Container">
      <Container434 />
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[73.35px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">{`Arts & Media`}</p>
      </div>
    </div>
  );
}

function Container449() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[73.35px]" data-name="Container">
      <Paragraph69 />
    </div>
  );
}

function Container448() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[144px] w-[81.35px]" data-name="Container">
      <Container449 />
    </div>
  );
}

function Container451() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph70() {
  return (
    <div className="h-[22.4px] relative shrink-0 w-[81.825px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.4px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Container455() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Container">
      <Paragraph70 />
    </div>
  );
}

function Container454() {
  return (
    <div className="absolute h-[22.4px] left-0 top-[0.8px] w-[81.825px]" data-name="Container">
      <Container455 />
    </div>
  );
}

function Container458() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon51() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container460() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon51 />
    </div>
  );
}

function Container459() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.738px] pr-[7.25px] pt-[0.738px] top-[6px] w-[22px]" data-name="Container">
      <Container460 />
    </div>
  );
}

function Container457() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container458 />
      <Container459 />
    </div>
  );
}

function Container456() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container457 />
    </div>
  );
}

function Container453() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container454 />
      <Container456 />
    </div>
  );
}

function Container452() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container453 />
    </div>
  );
}

function Container450() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[329.2px] w-[274px]" data-name="Container">
      <Container451 />
      <Container452 />
    </div>
  );
}

function Container462() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container463() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container461() {
  return (
    <div className="absolute bg-[#ffc627] h-[6px] left-px top-[378.2px] w-[274px]" data-name="Container">
      <Container462 />
      <Container463 />
    </div>
  );
}

function Link22() {
  return (
    <div className="absolute bg-white h-[384.2px] left-[658px] top-[836.4px] w-[276px]" data-name="Link">
      <Container429 />
      <Container430 />
      <Container433 />
      <Container448 />
      <Container450 />
      <Container461 />
    </div>
  );
}

function Container464() {
  return <div className="absolute border-[#f1f1f1] border-l-[0.8px] border-r-[0.8px] border-solid border-t-[0.8px] h-[384.2px] left-0 top-0 w-[276px]" data-name="Container" />;
}

function Container466() {
  return <div className="absolute h-[156px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function ImagePhysicianAssistant() {
  return (
    <div className="h-[162.025px] relative shrink-0 w-full" data-name="Image (Physician Assistant)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePhysicianAssistant} />
    </div>
  );
}

function Container467() {
  return (
    <div className="absolute content-stretch flex flex-col h-[156px] items-start left-0 overflow-clip top-0 w-[274px]" data-name="Container">
      <ImagePhysicianAssistant />
    </div>
  );
}

function Container465() {
  return (
    <div className="absolute h-[156px] left-px top-px w-[274px]" data-name="Container">
      <Container466 />
      <Container467 />
    </div>
  );
}

function Container471() {
  return <div className="absolute bg-[#ffc627] h-[2px] left-0 top-[35.2px] w-[34.55px]" data-name="Container" />;
}

function Paragraph71() {
  return (
    <div className="h-[19.2px] relative shrink-0 w-[226px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.2px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px] tracking-[-0.4px]">Physician Assistant</p>
      </div>
    </div>
  );
}

function Container473() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.2px] items-start justify-center left-0 top-0 w-[226px]" data-name="Container">
      <Paragraph71 />
    </div>
  );
}

function Container472() {
  return (
    <div className="absolute h-[19.2px] left-0 top-0 w-[226px]" data-name="Container">
      <Container473 />
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[80.363px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Growth: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">+28%</span>
        </p>
      </div>
    </div>
  );
}

function Container476() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[20px] top-0 w-[80.363px]" data-name="Container">
      <Paragraph72 />
    </div>
  );
}

function Icon52() {
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

function Container477() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[12px] top-[2.4px]" data-name="Container">
      <Icon52 />
    </div>
  );
}

function Container475() {
  return (
    <div className="absolute h-[16.8px] left-0 top-[7px] w-[226px]" data-name="Container">
      <Container476 />
      <Container477 />
    </div>
  );
}

function Icon53() {
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

function Container480() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-0 top-0 w-[7.5px]" data-name="Container">
      <Icon53 />
    </div>
  );
}

function Icon54() {
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

function Container481() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[7.5px] top-0 w-[7.5px]" data-name="Container">
      <Icon54 />
    </div>
  );
}

function Container479() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container480 />
        <Container481 />
      </div>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[93.425px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[0] left-0 not-italic text-[#191919] text-[0px] text-[12px] top-[-0.4px]">
          <span className="leading-[16.8px]">{`Salary: `}</span>
          <span className="font-['Arial:Regular',sans-serif] leading-[16.8px]">$108,000</span>
        </p>
      </div>
    </div>
  );
}

function Container482() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[93.425px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph73 />
      </div>
    </div>
  );
}

function Container478() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16.8px] items-center left-0 top-[23.8px] w-[226px]" data-name="Container">
      <Container479 />
      <Container482 />
    </div>
  );
}

function Container474() {
  return (
    <div className="absolute h-[40.6px] left-0 top-[53.2px] w-[226px]" data-name="Container">
      <Container475 />
      <Container478 />
    </div>
  );
}

function Container470() {
  return (
    <div className="absolute h-[93.8px] left-[24px] top-[24px] w-[226px]" data-name="Container">
      <Container471 />
      <Container472 />
      <Container474 />
    </div>
  );
}

function Container469() {
  return (
    <div className="absolute bg-white h-[172.2px] left-0 top-0 w-[274px]" data-name="Container">
      <Container470 />
    </div>
  );
}

function Container468() {
  return (
    <div className="absolute h-[172.2px] left-px top-[157px] w-[274px]" data-name="Container">
      <Container469 />
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[97.35px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16.8px] left-0 not-italic text-[12px] text-white top-[-0.4px]">{`Health & Nursing`}</p>
      </div>
    </div>
  );
}

function Container484() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.8px] items-start justify-center left-[4px] top-[4px] w-[97.35px]" data-name="Container">
      <Paragraph74 />
    </div>
  );
}

function Container483() {
  return (
    <div className="absolute bg-[#191919] h-[24.8px] left-[26px] top-[144px] w-[105.35px]" data-name="Container">
      <Container484 />
    </div>
  );
}

function Container486() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[49px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Paragraph75() {
  return (
    <div className="h-[22.4px] relative shrink-0 w-[81.825px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[#8c1d40] text-[16px] top-[0.4px] underline">Learn more</p>
      </div>
    </div>
  );
}

function Container490() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.4px] items-start justify-center left-0 top-0 w-[81.825px]" data-name="Container">
      <Paragraph75 />
    </div>
  );
}

function Container489() {
  return (
    <div className="absolute h-[22.4px] left-0 top-[0.8px] w-[81.825px]" data-name="Container">
      <Container490 />
    </div>
  );
}

function Container493() {
  return <div className="absolute border-[#e8e8e8] border-[0.8px] border-solid left-0 rounded-[12px] size-[24px] top-0" data-name="Container" />;
}

function Icon55() {
  return (
    <div className="h-[10.525px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.0125 10.5251">
        <path d={svgPaths.p2508780} fill="var(--fill-0, #191919)" id="Vector" />
      </svg>
    </div>
  );
}

function Container495() {
  return (
    <div className="content-stretch flex flex-col h-[10.525px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon55 />
    </div>
  );
}

function Container494() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-px pl-[8.738px] pr-[7.25px] pt-[0.738px] top-[6px] w-[22px]" data-name="Container">
      <Container495 />
    </div>
  );
}

function Container492() {
  return (
    <div className="absolute bg-[#fafafa] left-0 rounded-[12px] size-[24px] top-0" data-name="Container">
      <Container493 />
      <Container494 />
    </div>
  );
}

function Container491() {
  return (
    <div className="absolute left-[218px] size-[24px] top-0" data-name="Container">
      <Container492 />
    </div>
  );
}

function Container488() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[13px] w-[242px]" data-name="Container">
      <Container489 />
      <Container491 />
    </div>
  );
}

function Container487() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[274px]" data-name="Container">
      <Container488 />
    </div>
  );
}

function Container485() {
  return (
    <div className="absolute bg-white h-[49px] left-px top-[329.2px] w-[274px]" data-name="Container">
      <Container486 />
      <Container487 />
    </div>
  );
}

function Container497() {
  return <div className="absolute h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container498() {
  return <div className="absolute border-[#f1f1f1] border-solid border-t-[0.8px] h-[6px] left-0 top-0 w-[274px]" data-name="Container" />;
}

function Container496() {
  return (
    <div className="absolute bg-[#ffc627] h-[6px] left-px top-[378.2px] w-[274px]" data-name="Container">
      <Container497 />
      <Container498 />
    </div>
  );
}

function Link23() {
  return (
    <div className="absolute bg-white h-[384.2px] left-[987px] top-[836.4px] w-[276px]" data-name="Link">
      <Container464 />
      <Container465 />
      <Container468 />
      <Container483 />
      <Container485 />
      <Container496 />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[1220.6px] relative shrink-0 w-full" data-name="Container">
      <Link12 />
      <Link13 />
      <Link14 />
      <Link15 />
      <Link16 />
      <Link17 />
      <Link18 />
      <Link19 />
      <Link20 />
      <Link21 />
      <Link22 />
      <Link23 />
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 w-[1282px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <Container74 />
        <Container75 />
        <Container78 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex gap-[50px] h-[1367.8px] items-start left-[60px] top-[395.2px] w-[1572px]" data-name="Container">
      <Sidebar />
      <Container73 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[1811px] left-0 top-[147.6px] w-[1692px]" data-name="Main Content">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[0.2px] tracking-[-0.4px]">Admissions</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.6px] left-0 not-italic text-[#e8e8e8] text-[14px] top-[2.6px]">Apply</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.6px] left-0 not-italic text-[#e8e8e8] text-[14px] top-[2.6px]">Request info</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.6px] left-0 not-italic text-[#e8e8e8] text-[14px] top-[2.6px]">Visit</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.6px] left-0 not-italic text-[#e8e8e8] text-[14px] top-[2.6px]">Tuition and aid</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container500() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading2 />
      <List />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[0.2px] tracking-[-0.4px]">Academic units</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.6px] left-0 not-italic text-[#e8e8e8] text-[14px] top-[2.6px]">Colleges and schools</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.6px] left-0 not-italic text-[#e8e8e8] text-[14px] top-[2.6px]">Academic catalogs</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.6px] left-0 not-italic text-[#e8e8e8] text-[14px] top-[2.6px]">Degrees</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
    </div>
  );
}

function Container501() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading3 />
      <List1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[0.2px] tracking-[-0.4px]">Resources</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.6px] left-0 not-italic text-[#e8e8e8] text-[14px] top-[2.6px]">Libraries</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.6px] left-0 not-italic text-[#e8e8e8] text-[14px] top-[2.6px]">Directory</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.6px] left-0 not-italic text-[#e8e8e8] text-[14px] top-[2.6px]">Maps and locations</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.6px] left-0 not-italic text-[#e8e8e8] text-[14px] top-[2.6px]">Jobs</p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
    </div>
  );
}

function Container502() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading4 />
      <List2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[0.2px] tracking-[-0.4px]">Contact ASU</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.6px] left-0 not-italic text-[#e8e8e8] text-[14px] top-[2.6px]">Directory</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.6px] left-0 not-italic text-[#e8e8e8] text-[14px] top-[2.6px]">(480) 965-4357</p>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[56px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem11 />
      <ListItem12 />
    </div>
  );
}

function Container503() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading5 />
      <List3 />
    </div>
  );
}

function Container499() {
  return (
    <div className="bg-[#191919] h-[256px] relative shrink-0 w-full" data-name="Container">
      <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] px-[246px] py-[48px] relative size-full">
        <Container500 />
        <Container501 />
        <Container502 />
        <Container503 />
      </div>
    </div>
  );
}

function Link24() {
  return (
    <div className="h-[24px] relative shrink-0 w-[74.688px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">Facebook</p>
      </div>
    </div>
  );
}

function Link25() {
  return (
    <div className="h-[24px] relative shrink-0 w-[51.263px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">Twitter</p>
      </div>
    </div>
  );
}

function Link26() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.787px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Link27() {
  return (
    <div className="h-[24px] relative shrink-0 w-[76.475px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">Instagram</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[24px] items-center left-[246px] top-[16px] w-[316.212px]" data-name="Navigation">
      <Link24 />
      <Link25 />
      <Link26 />
      <Link27 />
    </div>
  );
}

function Container505() {
  return (
    <div className="absolute h-[16.8px] left-[1166.83px] top-[19.6px] w-[279.175px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.8px] left-0 not-italic text-[#191919] text-[12px] top-[-0.4px]">Repeatedly ranked #1 on 30+ lists in the last 3 years</p>
    </div>
  );
}

function Container504() {
  return (
    <div className="bg-[#ffc627] h-[56px] relative shrink-0 w-full" data-name="Container">
      <Navigation />
      <Container505 />
    </div>
  );
}

function Link28() {
  return (
    <div className="absolute h-[24px] left-[246px] top-[16px] w-[180.538px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">Copyright and Trademark</p>
    </div>
  );
}

function Link29() {
  return (
    <div className="absolute h-[24px] left-[442.54px] top-[16px] w-[87.138px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">Accessibility</p>
    </div>
  );
}

function Link30() {
  return (
    <div className="absolute h-[24px] left-[545.67px] top-[16px] w-[52.463px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">Privacy</p>
    </div>
  );
}

function Link31() {
  return (
    <div className="absolute h-[24px] left-[614.14px] top-[16px] w-[94.25px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">Terms of Use</p>
    </div>
  );
}

function Link32() {
  return (
    <div className="absolute h-[24px] left-[724.39px] top-[16px] w-[80.925px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191919] text-[16px] top-[0.2px]">Emergency</p>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="bg-[#f1f1f1] h-[56px] relative shrink-0 w-full" data-name="Navigation">
      <Link28 />
      <Link29 />
      <Link30 />
      <Link31 />
      <Link32 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[368px] items-start left-0 top-[1958.6px] w-[1692px]" data-name="Footer">
      <Container499 />
      <Container504 />
      <Navigation1 />
    </div>
  );
}

function T() {
  return (
    <div className="absolute bg-white h-[934.4px] left-0 top-0 w-[1692px]" data-name="T0">
      <Container />
      <MainContent />
      <Footer />
    </div>
  );
}

function GrammarlyDesktopIntegration() {
  return <div className="absolute left-0 size-0 top-[934.4px]" data-name="Grammarly-desktop-integration" />;
}

function Heading1() {
  return (
    <div className="h-[27px] relative shrink-0 w-[81.037px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#191919] text-[18px] top-[0.2px]">Filters (0)</p>
      </div>
    </div>
  );
}

function Container507() {
  return (
    <div className="absolute content-stretch flex h-[27px] items-center justify-between left-[24px] pr-[110.963px] top-[24px] w-[192px]" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">Highlighted careers</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[117.513px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#191919] text-[14px] top-[-0.4px]">In-demand careers</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[2.513px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold_Italic',sans-serif] italic leading-[13.5px] left-0 text-[9px] text-white top-[-0.4px]">i</p>
      </div>
    </div>
  );
}

function Container511() {
  return (
    <div className="absolute bg-[#8c1d40] content-stretch flex items-center justify-center left-[123.51px] pr-[0.012px] rounded-[26843500px] size-[14px] top-[3px]" data-name="Container">
      <Text2 />
    </div>
  );
}

function Container510() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[168px]" data-name="Container">
      <Text1 />
      <Container511 />
    </div>
  );
}

function Container512() {
  return <div className="absolute bg-white border-[#d0d0d0] border-[1.6px] border-solid left-0 rounded-[3px] size-[16px] top-[2px]" data-name="Container" />;
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <Container510 />
      <Container512 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[48.263px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#191919] text-[14px] top-[-0.4px]">Popular</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[2.513px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold_Italic',sans-serif] italic leading-[13.5px] left-0 text-[9px] text-white top-[-0.4px]">i</p>
      </div>
    </div>
  );
}

function Container514() {
  return (
    <div className="absolute bg-[#8c1d40] content-stretch flex items-center justify-center left-[54.26px] pr-[0.012px] rounded-[26843500px] size-[14px] top-[3px]" data-name="Container">
      <Text4 />
    </div>
  );
}

function Container513() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[168px]" data-name="Container">
      <Text3 />
      <Container514 />
    </div>
  );
}

function Container515() {
  return <div className="absolute bg-white border-[#d0d0d0] border-[1.6px] border-solid left-0 rounded-[3px] size-[16px] top-[2px]" data-name="Container" />;
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <Container513 />
      <Container515 />
    </div>
  );
}

function Container509() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Label1 />
    </div>
  );
}

function Container508() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[85px] items-start left-[24px] top-[75px] w-[192px]" data-name="Container">
      <Heading6 />
      <Container509 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">Areas of interest</p>
    </div>
  );
}

function Container518() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[70.838px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">Technology</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[21px] items-center relative shrink-0 w-full" data-name="Label">
      <Container518 />
      <Text5 />
    </div>
  );
}

function Container519() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[21px] relative shrink-0 w-[105.838px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">{`Health & Nursing`}</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[21px] items-center relative shrink-0 w-full" data-name="Label">
      <Container519 />
      <Text6 />
    </div>
  );
}

function Container520() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[56.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">Business</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[21px] items-center relative shrink-0 w-full" data-name="Label">
      <Container520 />
      <Text7 />
    </div>
  );
}

function Container521() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[21px] relative shrink-0 w-[62.275px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">Education</p>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[21px] items-center relative shrink-0 w-full" data-name="Label">
      <Container521 />
      <Text8 />
    </div>
  );
}

function Container522() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[21px] relative shrink-0 w-[74.725px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">Engineering</p>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[21px] items-center relative shrink-0 w-full" data-name="Label">
      <Container522 />
      <Text9 />
    </div>
  );
}

function Container523() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[21px] relative shrink-0 w-[80.15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">{`Arts & Media`}</p>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[21px] items-center relative shrink-0 w-full" data-name="Label">
      <Container523 />
      <Text10 />
    </div>
  );
}

function Container524() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0d0d0] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[21px] relative shrink-0 w-[98.838px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#191919] text-[14px] top-[0.4px]">Social Sciences</p>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[21px] items-center relative shrink-0 w-full" data-name="Label">
      <Container524 />
      <Text11 />
    </div>
  );
}

function Container517() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[195px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Label3 />
      <Label4 />
      <Label5 />
      <Label6 />
      <Label7 />
      <Label8 />
    </div>
  );
}

function Container516() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[228px] items-start left-[24px] top-[192px] w-[192px]" data-name="Container">
      <Heading7 />
      <Container517 />
    </div>
  );
}

function Container506() {
  return (
    <div className="absolute h-[444px] left-[60px] top-[542.8px] w-[240px]" data-name="Container">
      <Container507 />
      <Container508 />
      <Container516 />
    </div>
  );
}

export default function BuildPathFinderCareerExplorer() {
  return (
    <div className="bg-white relative size-full" data-name="Build PathFinder Career Explorer">
      <T />
      <GrammarlyDesktopIntegration />
      <Container506 />
    </div>
  );
}