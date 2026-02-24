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
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="List Item">
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
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text1 />
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#191919] text-[16px] whitespace-pre-wrap">Develop strategies for reducing environmental impact and improving ESG metrics.</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <List />
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
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text2 />
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#191919] text-[16px] whitespace-pre-wrap">Conduct sustainability audits and carbon footprint assessments for organizations.</p>
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
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="List Item">
      <Text3 />
      <p className="flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#191919] text-[16px] whitespace-pre-wrap">Develop strategies for reducing environmental impact and improving ESG metrics.</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <List1 />
    </div>
  );
}

function Tasks() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Tasks">
      <Container />
      <Container1 />
    </div>
  );
}

function DivCardBody() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.card-body">
      <div className="content-stretch flex flex-col gap-[40px] items-start pl-[47px] pr-[32px] py-[32px] relative w-full">
        <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[32px] tracking-[-0.6px] w-full">
          <p className="leading-[28.8px] whitespace-pre-wrap">What you may do in this career</p>
        </div>
        <Tasks />
      </div>
    </div>
  );
}

export default function DayInLifeSalaryGrowth() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full" data-name="Day in life + Salary/Growth">
      <DivCardBody />
    </div>
  );
}