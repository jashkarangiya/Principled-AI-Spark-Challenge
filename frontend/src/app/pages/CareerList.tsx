import { useState, useMemo } from "react";
import { Link } from "react-router";
import { careers, fields, fieldColors } from "../data/careers";
import { Grid3x3, List } from "lucide-react";
import svgPaths from "../../imports/svg-jyswhic5yw";

export function CareerList() {
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [salaryRange, setSalaryRange] = useState<string[]>([]);
  const [growthRate, setGrowthRate] = useState<string[]>([]);
  const [aiImpact, setAiImpact] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  // Highlighted filters
  const [showHighGrowth, setShowHighGrowth] = useState(false);
  const [showHighSalary, setShowHighSalary] = useState(false);

  const filteredCareers = useMemo(() => {
    let filtered = careers.filter((career) => {
      // Field filter
      if (selectedField && career.field !== selectedField) return false;

      // Search filter
      if (searchQuery && !career.career_title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Highlighted filters
      if (showHighGrowth) {
        const growth = parseInt(career.growth_rate.replace(/[^0-9-]/g, ""));
        if (growth < 15) return false;
      }

      if (showHighSalary) {
        const medianSalary = parseInt(career.salary_median.replace(/[^0-9]/g, ""));
        if (medianSalary < 100000) return false;
      }

      // Salary range filter
      if (salaryRange.length > 0) {
        const medianSalary = parseInt(career.salary_median.replace(/[^0-9]/g, ""));
        const inRange = salaryRange.some((range) => {
          if (range === "under50") return medianSalary < 50000;
          if (range === "50-75") return medianSalary >= 50000 && medianSalary < 75000;
          if (range === "75-100") return medianSalary >= 75000 && medianSalary < 100000;
          if (range === "100plus") return medianSalary >= 100000;
          return false;
        });
        if (!inRange) return false;
      }

      // Growth rate filter
      if (growthRate.length > 0) {
        const growth = parseInt(career.growth_rate.replace(/[^0-9-]/g, ""));
        const inRange = growthRate.some((range) => {
          if (range === "high") return growth >= 15;
          if (range === "medium") return growth >= 5 && growth < 15;
          if (range === "low") return growth < 5;
          return false;
        });
        if (!inRange) return false;
      }

      // AI impact filter
      if (aiImpact.length > 0) {
        const risk = career.automation_risk_pct;
        const inRange = aiImpact.some((range) => {
          if (range === "low") return risk < 25;
          if (range === "medium") return risk >= 25 && risk < 40;
          if (range === "high") return risk >= 40;
          return false;
        });
        if (!inRange) return false;
      }

      return true;
    });

    return filtered;
  }, [selectedField, searchQuery, salaryRange, growthRate, aiImpact, showHighGrowth, showHighSalary]);

  const handleCheckboxChange = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const activeFilterCount = 
    (selectedField ? 1 : 0) +
    salaryRange.length +
    growthRate.length +
    aiImpact.length +
    (showHighGrowth ? 1 : 0) +
    (showHighSalary ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedField(null);
    setSalaryRange([]);
    setGrowthRate([]);
    setAiImpact([]);
    setShowHighGrowth(false);
    setShowHighSalary(false);
    setSearchQuery("");
  };

  return (
    <div className="bg-[#f5f5f5]">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="px-[16px] lg:px-[32px] py-[48px] lg:py-[64px]">
          <div className="ml-[52px]">
            <h1 className="font-['Arial'] font-bold text-[40px] lg:text-[56px] text-[#191919] leading-[1.1] mb-[24px]">
              Find your <span className="bg-[#ffc627] px-[8px]">career</span>.<br />
              Then find your degree.
            </h1>
            <p className="font-['Arial'] text-[16px] text-[#191919] leading-[24px] max-w-[800px]">
              Explore what it is you want to do, and we'll help make it a reality. Through ASU Online, there are more than 300 degree programs and certificates that can connect you to high-demand careers like nursing, engineering, management and more. Use the filters below to search by career type, area of interest and more.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-[16px] lg:px-[60px] py-[32px] lg:py-[48px]">
        <div className="flex flex-col lg:flex-row gap-[34px] lg:gap-[50px] items-start">
          {/* Left Sidebar - Filters */}
          <aside className="w-full lg:w-[240px] shrink-0">
            <div className="bg-transparent p-[24px] lg:sticky lg:top-[32px]">
              {/* Filters Header */}
              <div className="flex items-center justify-between mb-[24px]">
                <h2 className="font-['Arial'] font-bold text-[18px] text-[#191919]">
                  Filters ({activeFilterCount})
                </h2>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="font-['Arial'] text-[14px] text-[#8c1d40] hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Highlighted Careers */}
              <div className="mb-[32px]">
                <h3 className="font-['Arial'] font-bold text-[14px] text-[#191919] mb-[12px]">
                  Highlighted careers
                </h3>
                <div className="space-y-[12px]">
                  <label className="flex items-start gap-[8px] cursor-pointer group">
                    <div className="relative size-[16px] mt-[2px] shrink-0">
                      <input
                        type="checkbox"
                        checked={showHighGrowth}
                        onChange={(e) => setShowHighGrowth(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="size-full border-2 border-[#d0d0d0] bg-white peer-checked:bg-[#ffc627] peer-checked:border-[#ffc627] rounded-[3px] flex items-center justify-center transition-colors">
                        {showHighGrowth && (
                          <svg className="size-[10px]" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-[6px] flex-1">
                      <span className="font-['Arial'] text-[14px] text-[#191919] leading-[20px]">
                        In-demand careers
                      </span>
                      <div className="relative group/tooltip">
                        <div className="size-[14px] rounded-full bg-[#8c1d40] flex items-center justify-center shrink-0 mt-[3px] cursor-help">
                          <span className="font-['Arial'] font-bold text-[9px] text-white italic">i</span>
                        </div>
                        <div className="absolute left-[20px] top-0 w-[200px] bg-[#191919] text-white text-[12px] p-[8px] rounded shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-50 pointer-events-none">
                          Careers with 15%+ projected growth over the next decade
                        </div>
                      </div>
                    </div>
                  </label>
                  <label className="flex items-start gap-[8px] cursor-pointer group">
                    <div className="relative size-[16px] mt-[2px] shrink-0">
                      <input
                        type="checkbox"
                        checked={showHighSalary}
                        onChange={(e) => setShowHighSalary(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="size-full border-2 border-[#d0d0d0] bg-white peer-checked:bg-[#ffc627] peer-checked:border-[#ffc627] rounded-[3px] flex items-center justify-center transition-colors">
                        {showHighSalary && (
                          <svg className="size-[10px]" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-[6px] flex-1">
                      <span className="font-['Arial'] text-[14px] text-[#191919] leading-[20px]">
                        Popular
                      </span>
                      <div className="relative group/tooltip">
                        <div className="size-[14px] rounded-full bg-[#8c1d40] flex items-center justify-center shrink-0 mt-[3px] cursor-help">
                          <span className="font-['Arial'] font-bold text-[9px] text-white italic">i</span>
                        </div>
                        <div className="absolute left-[20px] top-0 w-[200px] bg-[#191919] text-white text-[12px] p-[8px] rounded shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-50 pointer-events-none">
                          Careers with median salaries of $100,000 or more
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Areas of Interest */}
              <div>
                <h3 className="font-['Arial'] font-bold text-[14px] text-[#191919] mb-[12px]">
                  Areas of interest
                </h3>
                <div className="space-y-[8px]">
                  {fields.map((field) => (
                    <label key={field} className="flex items-center gap-[8px] cursor-pointer group">
                      <div className="relative size-[16px] shrink-0">
                        <input
                          type="checkbox"
                          checked={selectedField === field}
                          onChange={() => setSelectedField(field === selectedField ? null : field)}
                          className="sr-only peer"
                        />
                        <div className="size-full border-2 border-[#d0d0d0] bg-white peer-checked:bg-[#ffc627] peer-checked:border-[#ffc627] rounded-[3px] flex items-center justify-center transition-colors">
                          {selectedField === field && (
                            <svg className="size-[10px]" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="font-['Arial'] text-[14px] text-[#191919]">{field}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Content - Career Cards */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="flex items-center gap-[16px] mb-[16px] w-[calc(100%-24px)]">
              <button
                onClick={clearAllFilters}
                className="font-['Arial'] text-[14px] text-[#8c1d40] hover:underline whitespace-nowrap font-bold"
              >
                Clear all
              </button>
              <input
                type="text"
                placeholder="Search career by title"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-[16px] py-[12px] border border-[#d0d0d0] font-['Arial'] text-[16px] text-[#191919] placeholder:text-[#767676] focus:outline-none focus:border-[#8c1d40] bg-white"
              />
            </div>

            {/* Results Count and View Toggle */}
            <div className="flex items-center justify-between mb-[32px] w-[calc(100%-24px)]">
              <p className="font-['Arial'] text-[14px] font-bold text-[#191919]">
                {filteredCareers.length} careers available
              </p>
              
              {/* Toggle Switch */}
              <div className="relative bg-white border border-[#d0d0d0] rounded-full p-[4px] flex items-center gap-[4px]">
                {/* Sliding background */}
                <div
                  className="absolute h-[calc(100%-8px)] bg-[#8c1d40] rounded-full transition-all duration-300 ease-in-out"
                  style={{
                    width: '48px',
                    transform: viewMode === 'grid' ? 'translateX(4px)' : 'translateX(52px)',
                  }}
                />
                
                {/* Grid button */}
                <button
                  onClick={() => setViewMode("grid")}
                  className={`relative z-10 w-[48px] h-[40px] rounded-full flex items-center justify-center transition-colors ${
                    viewMode === "grid" ? "text-white" : "text-[#484848]"
                  }`}
                  aria-label="Card view"
                  type="button"
                >
                  {/* 3x3 Grid Icon */}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="1" width="4" height="4" rx="1" fill="currentColor"/>
                    <rect x="6" y="1" width="4" height="4" rx="1" fill="currentColor"/>
                    <rect x="11" y="1" width="4" height="4" rx="1" fill="currentColor"/>
                    <rect x="1" y="6" width="4" height="4" rx="1" fill="currentColor"/>
                    <rect x="6" y="6" width="4" height="4" rx="1" fill="currentColor"/>
                    <rect x="11" y="6" width="4" height="4" rx="1" fill="currentColor"/>
                    <rect x="1" y="11" width="4" height="4" rx="1" fill="currentColor"/>
                    <rect x="6" y="11" width="4" height="4" rx="1" fill="currentColor"/>
                    <rect x="11" y="11" width="4" height="4" rx="1" fill="currentColor"/>
                  </svg>
                </button>
                
                {/* List button */}
                <button
                  onClick={() => setViewMode("list")}
                  className={`relative z-10 w-[48px] h-[40px] rounded-full flex items-center justify-center transition-colors ${
                    viewMode === "list" ? "text-white" : "text-[#484848]"
                  }`}
                  aria-label="List view"
                  type="button"
                >
                  <List className="size-[20px]" />
                </button>
              </div>
            </div>

            {/* Career Cards Grid */}
            {filteredCareers.length > 0 ? (
              viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[34px]">
                  {filteredCareers.map((career) => {
                    const medianSalary = career.salary_median;

                    return (
                      <Link
                        key={career.slug}
                        to={`/career/${career.slug}`}
                        className="bg-white content-stretch flex flex-col items-start pt-px px-px relative hover:shadow-lg transition-shadow cursor-pointer w-[276px] h-[384.2px]"
                      >
                        <div aria-hidden="true" className="absolute border-[#f1f1f1] border-l border-r border-solid border-t inset-0 pointer-events-none" />
                        
                        {/* Image */}
                        <div className="h-[156px] relative shrink-0 w-full">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt={career.career_title} className="absolute h-[103.87%] left-0 max-w-none top-0 w-full object-cover" src={career.image_url} />
                          </div>
                          <div className="size-full" />
                        </div>

                        {/* Content - grows to fill remaining space */}
                        <div className="content-stretch flex flex-col flex-1 items-start relative shrink-0 w-full">
                          <div className="bg-white h-full relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col items-start min-h-[inherit] p-[24px] relative w-full">
                              <div className="relative shrink-0 w-full">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
                                  {/* Title */}
                                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                    <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] tracking-[-0.4px] w-full">
                                      <p className="leading-[19.2px] whitespace-pre-wrap">{career.career_title}</p>
                                    </div>
                                  </div>

                                  {/* Yellow underline */}
                                  <div className="bg-[#ffc627] h-[2px] shrink-0 w-[34.56px]" />

                                  {/* Stats */}
                                  <div className="content-stretch flex flex-col items-start pt-[7px] relative shrink-0 w-full">
                                    {/* Growth */}
                                    <div className="content-stretch flex items-center gap-[8px] relative shrink-0 w-full">
                                      <div className="relative shrink-0 size-[12px]">
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                          <path d={svgPaths.p1049ec00} fill="#191919" />
                                        </svg>
                                      </div>
                                      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic text-[#191919] text-[12px]">
                                        <p className="leading-[16.8px] whitespace-nowrap">
                                          <span>Growth: </span>
                                          <span className="font-['Arial:Regular',sans-serif] not-italic">{career.growth_rate}</span>
                                        </p>
                                      </div>
                                    </div>

                                    {/* Salary */}
                                    <div className="content-stretch flex items-center gap-[8px] relative shrink-0 w-full">
                                      <div className="flex gap-0 shrink-0">
                                        <div className="h-[12px] relative shrink-0 w-[7.5px]">
                                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12">
                                            <path d={svgPaths.p2befb900} fill="#191919" />
                                          </svg>
                                        </div>
                                        <div className="h-[12px] relative shrink-0 w-[7.5px]">
                                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12">
                                            <path d={svgPaths.p2befb900} fill="#191919" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic text-[#191919] text-[12px]">
                                        <p className="leading-[16.8px] whitespace-nowrap">
                                          <span>Salary: </span>
                                          <span className="font-['Arial:Regular',sans-serif] not-italic">{medianSalary}</span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Field Tag (absolutely positioned over image) */}
                        <div className="absolute bg-[#191919] content-stretch flex flex-col items-start left-[26px] p-[4px] top-[144px]">
                          <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                            <p className="leading-[16.8px]">{career.field}</p>
                          </div>
                        </div>

                        {/* Learn More Footer */}
                        <div className="bg-white relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
                          <div className="content-stretch flex flex-col items-start pb-[12px] pt-[13px] px-[16px] relative w-full">
                            <div className="relative shrink-0 w-full">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
                                <div className="content-stretch flex flex-col items-start relative shrink-0">
                                  <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c1d40] text-[16px] whitespace-nowrap">
                                    <p className="cursor-pointer decoration-solid leading-[22.4px] underline">Learn more</p>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0">
                                  <div className="bg-[#fafafa] content-stretch cursor-pointer flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[24px]">
                                    <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
                                    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                        <div className="absolute inset-[6.24%_32.96%_6.24%_39.76%]">
                                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00117 10.5035">
                                            <path d={svgPaths.p12982e00} fill="#191919" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Yellow block at bottom */}
                        <div className="bg-[#ffc627] h-[6px] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#f1f1f1] border-solid border-t inset-0 pointer-events-none" />
                          <div className="size-full" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                /* List View */
                <div className="flex flex-col gap-[16px]">
                  {filteredCareers.map((career) => {
                    const medianSalary = career.salary_median;

                    return (
                      <Link
                        key={career.slug}
                        to={`/career/${career.slug}`}
                        className="bg-white border border-[#e8e8e8] hover:shadow-md transition-shadow block"
                      >
                        <div className="p-[24px]">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[16px]">
                            {/* Left Section - Title and Tag */}
                            <div className="flex-1">
                              {/* Field Tag */}
                              <div className="mb-[12px]">
                                <span className="inline-block bg-[#191919] px-[8px] py-[4px] font-['Arial'] font-bold text-[11px] text-white uppercase tracking-wide">
                                  {career.field}
                                </span>
                              </div>

                              {/* Title */}
                              <h3 className="font-['Arial'] font-bold text-[20px] text-[#191919] mb-[8px] leading-[1.2]">
                                {career.career_title}
                              </h3>

                              {/* Yellow underline */}
                              <div className="bg-[#ffc627] h-[3px] w-[40px] mb-[16px]" />

                              {/* Learn More Link */}
                              <div className="inline-flex items-center gap-[8px] font-['Arial'] text-[16px] text-[#8c1d40] hover:underline">
                                <span>Learn more</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path
                                    d="M6 4L10 8L6 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>

                            {/* Right Section - Stats */}
                            <div className="lg:text-right">
                              <div className="inline-block bg-[#f7f7f7] border border-[#e8e8e8] px-[20px] py-[16px] rounded-[4px]">
                                <div className="flex flex-col gap-[8px]">
                                  {/* Growth */}
                                  <div className="flex items-center gap-[8px]">
                                    <div className="relative shrink-0 size-[14px]">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                        <path d={svgPaths.p1049ec00} fill="#191919" />
                                      </svg>
                                    </div>
                                    <p className="font-['Arial'] text-[14px] text-[#191919]">
                                      <span className="font-bold">Growth:</span> <span>{career.growth_rate}</span>
                                    </p>
                                  </div>

                                  {/* Salary */}
                                  <div className="flex items-center gap-[8px]">
                                    <div className="flex gap-0 shrink-0">
                                      <div className="h-[14px] relative shrink-0 w-[8.75px]">
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12">
                                          <path d={svgPaths.p2befb900} fill="#191919" />
                                        </svg>
                                      </div>
                                      <div className="h-[14px] relative shrink-0 w-[8.75px]">
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12">
                                          <path d={svgPaths.p2befb900} fill="#191919" />
                                        </svg>
                                      </div>
                                    </div>
                                    <p className="font-['Arial'] text-[14px] text-[#191919]">
                                      <span className="font-bold">Salary:</span> <span>{medianSalary}</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )
            ) : (
              <div className="bg-white p-[48px] text-center">
                <p className="font-['Arial'] text-[16px] text-[#767676] mb-[8px]">
                  No careers found matching your criteria.
                </p>
                <p className="font-['Arial'] text-[14px] text-[#767676]">
                  Try adjusting your filters or search terms.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}