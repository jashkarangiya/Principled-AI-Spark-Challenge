function Frame() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4.5px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
          <g id="Ellipse 1">
            <circle cx="2.25" cy="2.25" fill="var(--fill-0, white)" r="2.25" />
            <circle cx="2.25" cy="2.25" fill="var(--fill-1, white)" r="2.25" />
          </g>
        </svg>
      </div>
      <div className="relative shrink-0 size-[4.5px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
          <g id="Ellipse 1">
            <circle cx="2.25" cy="2.25" fill="var(--fill-0, white)" r="2.25" />
            <circle cx="2.25" cy="2.25" fill="var(--fill-1, white)" r="2.25" />
          </g>
        </svg>
      </div>
      <div className="relative shrink-0 size-[4.5px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
          <g id="Ellipse 3">
            <circle cx="2.25" cy="2.25" fill="var(--fill-0, white)" r="2.25" />
            <circle cx="2.25" cy="2.25" fill="var(--fill-1, white)" r="2.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4.5px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
          <g id="Ellipse 1">
            <circle cx="2.25" cy="2.25" fill="var(--fill-0, white)" r="2.25" />
            <circle cx="2.25" cy="2.25" fill="var(--fill-1, white)" r="2.25" />
          </g>
        </svg>
      </div>
      <div className="relative shrink-0 size-[4.5px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
          <g id="Ellipse 1">
            <circle cx="2.25" cy="2.25" fill="var(--fill-0, white)" r="2.25" />
            <circle cx="2.25" cy="2.25" fill="var(--fill-1, white)" r="2.25" />
          </g>
        </svg>
      </div>
      <div className="relative shrink-0 size-[4.5px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
          <g id="Ellipse 3">
            <circle cx="2.25" cy="2.25" fill="var(--fill-0, white)" r="2.25" />
            <circle cx="2.25" cy="2.25" fill="var(--fill-1, white)" r="2.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4.5px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
          <g id="Ellipse 1">
            <circle cx="2.25" cy="2.25" fill="var(--fill-0, white)" r="2.25" />
            <circle cx="2.25" cy="2.25" fill="var(--fill-1, white)" r="2.25" />
          </g>
        </svg>
      </div>
      <div className="relative shrink-0 size-[4.5px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
          <g id="Ellipse 1">
            <circle cx="2.25" cy="2.25" fill="var(--fill-0, white)" r="2.25" />
            <circle cx="2.25" cy="2.25" fill="var(--fill-1, white)" r="2.25" />
          </g>
        </svg>
      </div>
      <div className="relative shrink-0 size-[4.5px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
          <g id="Ellipse 3">
            <circle cx="2.25" cy="2.25" fill="var(--fill-0, white)" r="2.25" />
            <circle cx="2.25" cy="2.25" fill="var(--fill-1, white)" r="2.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0">
      <Frame />
      <Frame1 />
      <Frame5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#862442] content-stretch flex flex-col h-[34px] items-center justify-center px-[15px] py-[9px] relative rounded-[32px] shrink-0 w-[48px]">
      <Frame2 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[5px] relative rounded-[32px] size-full">
      <div aria-hidden="true" className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Frame3 />
    </div>
  );
}