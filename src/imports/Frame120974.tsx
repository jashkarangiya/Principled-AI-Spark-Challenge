import imgDivCol from "figma:asset/e8c95aaa5e52c5a9011ad05b48d1af985269e230.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute aspect-[1200/550] left-[142.02px] right-[126.02px] top-0" data-name="div.col">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[131.82%] left-0 max-w-none top-0 w-full" src={imgDivCol} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[609.601px] left-0 to-white top-0 via-[80%] via-[rgba(255,255,255,0.63)] w-[1596.045px]" data-name="div.w-100" />
    </div>
  );
}