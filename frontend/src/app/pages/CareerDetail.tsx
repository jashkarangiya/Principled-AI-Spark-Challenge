import { Link, useParams } from 'react-router';
import { careers } from '../data/careers';
import { Sparkles } from 'lucide-react';
import svgPaths from '../../imports/svg-xsbaq11fpv';
import svgPathsCard from "../../imports/svg-0poidvn20z";
import svgPathsExperiences from "../../imports/svg-2f58vant4f";
import imgImageAsuAnalyticsInternshipProgram from "../../assets/28ad8738a7c34abe846a457acd0e47c176e373f8.png";
import imgImageDataScienceClub from "../../assets/543c06e83342b4e46744bec27a24bf72648f41e5.png";
import imgImageTableauStudentCertification from "../../assets/0d1d4c445429bd62c2ecc1c64433ae2e292654e8.png";
import imgExperiencesHero from "../../assets/cfc8f873b14b01fec8391ecc6f3d56b991ce4011.png";
import imgSectionProgramCourses from "../../assets/246706e29030f783e2d25b7656d4d29484ca9389.png";
import { useState } from "react";

const API_BASE_URL = 'http://localhost:8000';

export function CareerDetail() {
  const { slug } = useParams();
  const career = careers.find((c) => c.slug === slug);
  const [showAllDegrees, setShowAllDegrees] = useState(false);
  const [aiRiskData, setAiRiskData] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculationError, setCalculationError] = useState<string | null>(null);
  const [dayInLifeData, setDayInLifeData] = useState<any>(null);
  const [isGeneratingDayInLife, setIsGeneratingDayInLife] = useState(false);
  const [ethicalDilemmasData, setEthicalDilemmasData] = useState<any>(null);
  const [isGeneratingEthicalDilemmas, setIsGeneratingEthicalDilemmas] = useState(false);
  const [skillsData, setSkillsData] = useState<any>(null);
  const [isResearchingSkills, setIsResearchingSkills] = useState(false);

  if (!career) {
    return (
      <div className="max-w-[1200px] mx-auto px-[16px] lg:px-[60px] py-[64px] text-center">
        <h1 className="font-['Arial'] font-bold text-[32px] text-[#191919] mb-[16px]">
          Career not found
        </h1>
        <Link to="/" className="text-[#8C1D40] underline">
           Back to all careers
        </Link>
      </div>
    );
  }

  // Degree visibility logic
  const initialDegreesToShow = 2;
  const degreesToDisplay = showAllDegrees ? career.degrees : career.degrees.slice(0, initialDegreesToShow);
  const remainingDegreeCount = career.degrees.length - initialDegreesToShow;

  return (
    <div className="bg-[#f1f1f1]">
      {/* Hero Section */}
      <section className="relative h-[585.6px]">
        {/* Hero Image - 512px height */}
        <div className="h-[512px] relative w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt={career.career_title}
              className="absolute h-full left-0 max-w-none top-0 w-full object-cover"
              src={career.image_url}
            />
          </div>
        </div>

        {/* White Title Box - Overlaps image by 48px */}
        <div className="absolute left-0 right-0 top-[464px]">
          <div className="px-[60px]">
            <div className="max-w-[1200px] mx-auto">
              <div className="bg-white px-[47px] py-[32px]">
                {/* Back to Career Search */}
                <Link 
                  to="/" 
                  className="font-['Arial:Regular',sans-serif] text-[14px] text-[#8c1d40] hover:underline mb-[12px] inline-block"
                >
                  ← Back to career search
                </Link>
                <h1 className="font-['Arial:Bold',sans-serif] text-[48px] text-[#191919] leading-[57.6px] tracking-[-1.68px]">
                  {career.career_title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer after hero - 64px gap */}
      <div className="h-[64px]" />

      {/* What you may do in this career + Stats Box */}
      <section className="px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white flex flex-col lg:flex-row">
            {/* Left: What you may do */}
            <div className="flex-1 px-[47px] py-[32px]">
              <div className="flex items-center justify-between mb-[36px]">
                <h2 className="font-['Arial:Bold',sans-serif] text-[32px] text-[#191919] leading-[28.8px] tracking-[-0.6px]">
                  What you may do in this career
                </h2>
                <button
                  onClick={async () => {
                    setIsGeneratingDayInLife(true);
                    try {
                      const response = await fetch(`${API_BASE_URL}/api/generate-day-in-life`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ job_title: career.career_title })
                      });
                      if (response.ok) {
                        const data = await response.json();
                        setDayInLifeData(data);
                      }
                    } catch (error) {
                      console.error('Failed to generate day in life');
                    } finally {
                      setIsGeneratingDayInLife(false);
                    }
                  }}
                  disabled={isGeneratingDayInLife}
                  className="bg-[#8c1d40] hover:bg-[#6d1730] disabled:bg-[#999] text-white rounded-[804px] px-[12px] py-[6px] transition-colors flex items-center gap-[6px] text-[12px] font-['Arial:Bold',sans-serif]"
                >
                  <Sparkles className="size-[12px]" />
                  {isGeneratingDayInLife ? 'Researching...' : 'Generate Real Day'}
                </button>
              </div>
              
              {/* Show AI-generated day if available */}
              {dayInLifeData ? (
                <div className="space-y-[24px]">
                  {/* Morning Tasks */}
                  <div>
                    <div className="bg-[#ffc627] px-[12px] py-[4px] inline-block mb-[12px]">
                      <p className="font-['Arial:Bold',sans-serif] text-[14px] text-[#191919]">
                        Morning
                      </p>
                    </div>
                    <div className="space-y-[12px]">
                      {dayInLifeData.morning_tasks.map((task: any, index: number) => (
                        <div key={index} className="flex gap-[12px] items-start bg-[#f9f9f9] p-[16px] border-l-4 border-[#ffc627]">
                          <div className="shrink-0">
                            <p className="font-['Arial:Bold',sans-serif] text-[14px] text-[#8c1d40]">
                              {task.time}
                            </p>
                          </div>
                          <div className="flex-1">
                            <p className="font-['Arial:Bold',sans-serif] text-[16px] text-[#191919] mb-[4px]">
                              {task.task}
                            </p>
                            <p className="font-['Arial:Regular',sans-serif] text-[14px] text-[#555]">
                              {task.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Afternoon Tasks */}
                  <div>
                    <div className="bg-[#8c1d40] px-[12px] py-[4px] inline-block mb-[12px]">
                      <p className="font-['Arial:Bold',sans-serif] text-[14px] text-white">
                        Afternoon
                      </p>
                    </div>
                    <div className="space-y-[12px]">
                      {dayInLifeData.afternoon_tasks.map((task: any, index: number) => (
                        <div key={index} className="flex gap-[12px] items-start bg-[#f9f9f9] p-[16px] border-l-4 border-[#8c1d40]">
                          <div className="shrink-0">
                            <p className="font-['Arial:Bold',sans-serif] text-[14px] text-[#8c1d40]">
                              {task.time}
                            </p>
                          </div>
                          <div className="flex-1">
                            <p className="font-['Arial:Bold',sans-serif] text-[16px] text-[#191919] mb-[4px]">
                              {task.task}
                            </p>
                            <p className="font-['Arial:Regular',sans-serif] text-[14px] text-[#555]">
                              {task.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Real Problems */}
                  <div>
                    <div className="bg-[#191919] px-[12px] py-[4px] inline-block mb-[12px]">
                      <p className="font-['Arial:Bold',sans-serif] text-[14px] text-white">
                        Real Problems You'll Solve
                      </p>
                    </div>
                    <div className="space-y-[12px]">
                      {dayInLifeData.real_problems.map((problem: any, index: number) => (
                        <div key={index} className="bg-[#fff5e6] p-[16px] border-l-4 border-[#ff9800]">
                          <div className="flex items-start justify-between mb-[8px]">
                            <p className="font-['Arial:Bold',sans-serif] text-[16px] text-[#191919]">
                              {problem.problem}
                            </p>
                            <span className="bg-[#ff9800] text-white text-[11px] px-[8px] py-[2px] rounded-full font-['Arial:Bold',sans-serif]">
                              {problem.frequency}
                            </span>
                          </div>
                          <p className="font-['Arial:Regular',sans-serif] text-[14px] text-[#555]">
                            {problem.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Research Sources */}
                  <div className="bg-[#f0f0f0] p-[16px] border border-[#d0d0d0]">
                    <p className="font-['Arial:Bold',sans-serif] text-[12px] text-[#191919] mb-[8px]">
                      🔍 Real Research Sources
                    </p>
                    <div className="grid grid-cols-3 gap-[8px] mb-[8px]">
                      <div className="bg-white p-[8px] text-center">
                        <p className="font-['Arial:Bold',sans-serif] text-[18px] text-[#8c1d40]">
                          {dayInLifeData.research_sources.articles_found}
                        </p>
                        <p className="font-['Arial:Regular',sans-serif] text-[10px] text-[#555]">
                          Articles
                        </p>
                      </div>
                      <div className="bg-white p-[8px] text-center">
                        <p className="font-['Arial:Bold',sans-serif] text-[18px] text-[#8c1d40]">
                          {dayInLifeData.research_sources.reddit_discussions}
                        </p>
                        <p className="font-['Arial:Regular',sans-serif] text-[10px] text-[#555]">
                          Reddit Posts
                        </p>
                      </div>
                      <div className="bg-white p-[8px] text-center">
                        <p className="font-['Arial:Bold',sans-serif] text-[18px] text-[#8c1d40]">
                          {dayInLifeData.research_sources.career_sites}
                        </p>
                        <p className="font-['Arial:Regular',sans-serif] text-[10px] text-[#555]">
                          Career Sites
                        </p>
                      </div>
                    </div>
                    <p className="font-['Arial:Regular',sans-serif] text-[11px] text-[#555]">
                      Generated from {dayInLifeData.research_sources.total_sources} real web sources using {dayInLifeData.research_sources.search_queries_used} search queries
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-[16px] px-[24px]">
                  {career.day_in_life.map((item, index) => (
                    <div key={index} className="flex gap-[12px] items-start">
                      <div className="bg-[#ffc627] rounded-full size-[24px] flex items-center justify-center shrink-0">
                        <p className="font-['Arial:Bold',sans-serif] text-[14px] text-[#191919] leading-[21px]">
                          {index + 1}
                        </p>
                      </div>
                      <p className="font-['Arial:Regular',sans-serif] text-[16px] text-[#191919] leading-[24px] flex-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Stats Box */}
            <div className="flex-1 p-[32px]">
              <div className="bg-[#f1f1f1] border-l-8 border-[#ffc627] p-[24px]">
                {/* Header */}
                <div className="bg-[#191919] px-[8px] py-[4px] inline-block mb-[24px]">
                  <p className="font-['Arial:Bold',sans-serif] text-[14px] text-white leading-[19.6px]">
                    Growth and salary
                  </p>
                </div>

                {/* Three Stats */}
                <div className="border border-[#d0d0d0] flex mb-[24px]">
                  <div className="flex-1 bg-white px-[24px] py-[16px]">
                    <p className="font-['Arial:Bold',sans-serif] text-[18px] text-[#191919] leading-[40px]">
                      {career.growth_rate}
                    </p>
                    <p className="font-['Arial:Regular',sans-serif] text-[12px] text-[#191919] leading-[20px]">
                      10-year growth
                    </p>
                  </div>
                  <div className="w-px bg-[#d0d0d0]" />
                  <div className="flex-1 bg-white px-[16px] py-[16px]">
                    <p className="font-['Arial:Bold',sans-serif] text-[18px] text-[#191919] leading-[40px]">
                      {career.annual_openings}
                    </p>
                    <p className="font-['Arial:Regular',sans-serif] text-[12px] text-[#191919] leading-[20px] whitespace-nowrap">
                      Annual openings
                    </p>
                  </div>
                  <div className="w-px bg-[#d0d0d0]" />
                  <div className="flex-1 bg-white px-[24px] py-[16px]">
                    <p className="font-['Arial:Bold',sans-serif] text-[18px] text-[#191919] leading-[40px]">
                      {career.automation_risk_pct}%
                    </p>
                    <p className="font-['Arial:Regular',sans-serif] text-[12px] text-[#191919] leading-[20px]">
                      AI risk
                    </p>
                  </div>
                </div>

                {/* Salary Details */}
                <div className="space-y-[8px]">
                  <div className="h-px bg-[#d0d0d0]" />
                  
                  {/* Entry Level */}
                  <div className="flex items-center justify-between py-[8px]">
                    <div className="flex items-center gap-[8px]">
                      <div className="flex gap-0">
                        <svg className="size-[15px]" fill="none" viewBox="0 0 15 12">
                          <path d={svgPaths.p284c8f00} fill="#191919" />
                        </svg>
                        <svg className="size-[15px] -ml-[7.5px]" fill="none" viewBox="0 0 15 12">
                          <path d={svgPaths.p284c8f00} fill="#191919" />
                        </svg>
                      </div>
                      <p className="font-['Arial:Regular',sans-serif] text-[16px] text-[#191919] leading-[24px]">
                        Entry level salary
                      </p>
                    </div>
                    <p className="font-['Arial:Bold',sans-serif] text-[16px] text-[#191919] leading-[24px]">
                      {career.salary_entry}
                    </p>
                  </div>

                  <div className="h-px bg-[#d0d0d0]" />

                  {/* Median Salary - Maroon */}
                  <div className="flex items-center justify-between py-[8px]">
                    <div className="flex items-center gap-[8px]">
                      <div className="flex gap-0">
                        <svg className="size-[15px]" fill="none" viewBox="0 0 15 12">
                          <path d={svgPaths.p284c8f00} fill="#191919" />
                        </svg>
                        <svg className="size-[15px] -ml-[7.5px]" fill="none" viewBox="0 0 15 12">
                          <path d={svgPaths.p284c8f00} fill="#191919" />
                        </svg>
                      </div>
                      <p className="font-['Arial:Regular',sans-serif] text-[16px] text-[#191919] leading-[24px]">
                        Median salary
                      </p>
                    </div>
                    <p className="font-['Arial:Bold',sans-serif] text-[20px] text-[#8c1d40] leading-[28px]">
                      {career.salary_median}
                    </p>
                  </div>

                  <div className="h-px bg-[#d0d0d0]" />

                  {/* Top Earner */}
                  <div className="flex items-center justify-between py-[8px]">
                    <div className="flex items-center gap-[8px]">
                      <div className="flex gap-0">
                        <svg className="size-[15px]" fill="none" viewBox="0 0 15 12">
                          <path d={svgPaths.p284c8f00} fill="#191919" />
                        </svg>
                        <svg className="size-[15px] -ml-[7.5px]" fill="none" viewBox="0 0 15 12">
                          <path d={svgPaths.p284c8f00} fill="#191919" />
                        </svg>
                      </div>
                      <p className="font-['Arial:Regular',sans-serif] text-[16px] text-[#191919] leading-[24px]">
                        Top earner salary
                      </p>
                    </div>
                    <p className="font-['Arial:Bold',sans-serif] text-[16px] text-[#191919] leading-[24px]">
                      {career.salary_top}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-[96px]" />

      {/* ASU Degrees Section */}
      <section className="px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-['Arial:Bold',sans-serif] text-[36px] text-[#191919] leading-[43.2px] tracking-[-1.26px] mb-[16px]">
            ASU degrees that lead to this career
          </h2>
          <p className="font-['Arial:Regular',sans-serif] text-[16px] text-[#555] leading-[24px] mb-[32px]">
            {career.asu_degree_count} programs available
          </p>

          <div className="space-y-[32px]">
            {degreesToDisplay.map((degree, index) => (
              <div key={index} className="flex bg-white border border-[#f1f1f1] relative">
                {/* Left: Image */}
                <div className="w-[292px] shrink-0 relative">
                  <div className="h-full absolute inset-0 overflow-hidden">
                    <img 
                      alt={degree.name}
                      className="absolute h-full left-0 max-w-none top-0 w-[167.53%] object-cover"
                      src={degree.image_url}
                    />
                  </div>
                </div>

                {/* Yellow Divider - Full Height */}
                <div className="w-[7px] bg-[#ffc627] shrink-0" />

                {/* Right: Degree Content */}
                <div className="flex-1 px-[32px] py-[33px] flex flex-col gap-[24px]">
                  {/* Title and School */}
                  <div className="flex items-start justify-between h-[65.8px]">
                    <div className="flex-1">
                      <h3 className="font-['Arial:Bold',sans-serif] text-[24px] text-[#191919] leading-[28.8px] tracking-[-0.6px] mb-[8px]">
                        {degree.name}
                      </h3>
                      <p className="font-['Arial:Regular',sans-serif] text-[14px] text-[#555] leading-[21px]">
                        {degree.school}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-['Arial:Regular',sans-serif] text-[16px] text-[#191919] leading-[24px]">
                    {degree.why}
                  </p>

                  {/* Courses */}
                  <div className="border-t border-[#d0d0d0] pt-[24.8px] flex flex-col gap-[12px]">
                    <p className="font-['Arial:Bold',sans-serif] text-[14px] text-[#191919] leading-[21px]">
                      Courses that build key skills:
                    </p>
                    <div className="flex flex-wrap gap-[8px]">
                      {degree.courses.slice(0, 3).map((course, idx) => (
                        <div key={idx} className="bg-[#f5f5f5] rounded-[4px] px-[12px] pt-[6px] h-[31.5px]">
                          <p className="font-['Arial:Regular',sans-serif] text-[13px] text-[#191919] leading-[19.5px]">
                            {course.code} — {course.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="border-t border-[#d0d0d0] pt-[24px]">
                    <a 
                      href={degree.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#ffc627] border border-[#ffc627] rounded-[804px] px-[17px] py-[9px] hover:bg-[#ffb600] transition-colors"
                    >
                      <p className="font-['Arial:Bold',sans-serif] text-[14px] text-black leading-[19.6px] text-center">
                        Learn more
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {remainingDegreeCount > 0 && (
              <div className="text-center">
                <button
                  onClick={() => setShowAllDegrees(!showAllDegrees)}
                  className="font-['Arial:Regular',sans-serif] text-[16px] text-[#8c1d40] leading-[24px] underline hover:text-[#6d1730] transition-colors"
                >
                  {showAllDegrees 
                    ? 'Show Less' 
                    : `View ${remainingDegreeCount} more degree${remainingDegreeCount === 1 ? '' : 's'}`
                  }
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-[96px]" />

      {/* Skills Needed Section */}
      <section className="px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-[32px]">
            <h2 className="font-['Arial:Bold',sans-serif] text-[36px] text-[#191919] leading-[43.2px] tracking-[-1.26px]">
              Skills needed for this career
            </h2>
            <button
              onClick={async () => {
                setIsResearchingSkills(true);
                try {
                  const response = await fetch(`${API_BASE_URL}/api/research-skills`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ job_title: career.career_title })
                  });
                  if (response.ok) {
                    const data = await response.json();
                    setSkillsData(data);
                  }
                } catch (error) {
                  console.error('Failed to research skills');
                } finally {
                  setIsResearchingSkills(false);
                }
              }}
              disabled={isResearchingSkills}
              className="bg-[#8c1d40] hover:bg-[#6d1730] disabled:bg-[#999] text-white rounded-[804px] px-[12px] py-[6px] transition-colors flex items-center gap-[6px] text-[12px] font-['Arial:Bold',sans-serif]"
            >
              <Sparkles className="size-[12px]" />
              {isResearchingSkills ? 'Researching...' : 'Research Skills'}
            </button>
          </div>

          {isResearchingSkills ? (
            <div className="bg-white border border-[#d0d0d0] px-[24px] py-[48px] text-center">
              <Sparkles className="size-[24px] text-[#8c1d40] animate-pulse mx-auto mb-[12px]" />
              <p className="font-['Arial:Bold',sans-serif] text-[18px] text-[#8c1d40] mb-[8px]">Researching Skills...</p>
              <p className="font-['Arial:Regular',sans-serif] text-[14px] text-[#555]">Searching job postings, skill databases, and career guides</p>
            </div>
          ) : skillsData ? (
            <div className="space-y-[32px]">
              <div className="bg-white p-[32px] border-l-4 border-[#8c1d40]">
                <h3 className="font-['Arial:Bold',sans-serif] text-[24px] text-[#191919] mb-[24px]">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                  {skillsData.skills.technical_skills.map((skill: any, index: number) => (
                    <div key={index} className="bg-[#f9f9f9] p-[16px]">
                      <div className="flex items-center justify-between mb-[8px]">
                        <p className="font-['Arial:Bold',sans-serif] text-[16px] text-[#191919]">{skill.skill}</p>
                        <span className={`text-[11px] px-[8px] py-[2px] rounded-full font-['Arial:Bold',sans-serif] ${skill.importance === 'Critical' ? 'bg-[#8c1d40] text-white' : skill.importance === 'High' ? 'bg-[#ffc627] text-black' : 'bg-[#d0d0d0] text-[#555]'}`}>{skill.importance}</span>
                      </div>
                      <p className="font-['Arial:Regular',sans-serif] text-[14px] text-[#555]">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-[32px] border-l-4 border-[#ffc627]">
                <h3 className="font-['Arial:Bold',sans-serif] text-[24px] text-[#191919] mb-[24px]">Soft Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                  {skillsData.skills.soft_skills.map((skill: any, index: number) => (
                    <div key={index} className="bg-[#f9f9f9] p-[16px]">
                      <div className="flex items-center justify-between mb-[8px]">
                        <p className="font-['Arial:Bold',sans-serif] text-[16px] text-[#191919]">{skill.skill}</p>
                        <span className={`text-[11px] px-[8px] py-[2px] rounded-full font-['Arial:Bold',sans-serif] ${skill.importance === 'Critical' ? 'bg-[#8c1d40] text-white' : skill.importance === 'High' ? 'bg-[#ffc627] text-black' : 'bg-[#d0d0d0] text-[#555]'}`}>{skill.importance}</span>
                      </div>
                      <p className="font-['Arial:Regular',sans-serif] text-[14px] text-[#555]">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-[32px]">
                <h3 className="font-['Arial:Bold',sans-serif] text-[24px] text-[#191919] mb-[24px]">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-[12px]">
                  {skillsData.skills.tools_technologies.map((tool: any, index: number) => (
                    <div key={index} className="bg-[#f1f1f1] px-[16px] py-[12px] border-l-2 border-[#8c1d40]">
                      <p className="font-['Arial:Bold',sans-serif] text-[14px] text-[#191919] mb-[4px]">{tool.name}</p>
                      <p className="font-['Arial:Regular',sans-serif] text-[12px] text-[#555]">{tool.category} • {tool.proficiency}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-[32px] border border-[#d0d0d0]">
                <h3 className="font-['Arial:Bold',sans-serif] text-[24px] text-[#191919] mb-[24px]">Recommended Certifications</h3>
                <div className="space-y-[12px]">
                  {skillsData.skills.certifications.map((cert: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-[16px] bg-[#f9f9f9]">
                      <div>
                        <p className="font-['Arial:Bold',sans-serif] text-[16px] text-[#191919]">{cert.name}</p>
                        <p className="font-['Arial:Regular',sans-serif] text-[14px] text-[#555]">{cert.provider}</p>
                      </div>
                      <span className={`text-[11px] px-[8px] py-[2px] rounded-full font-['Arial:Bold',sans-serif] ${cert.value === 'High' ? 'bg-[#8c1d40] text-white' : cert.value === 'Medium' ? 'bg-[#ffc627] text-black' : 'bg-[#d0d0d0] text-[#555]'}`}>{cert.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              {skillsData.research_sources && (
                <div className="bg-[#f0f0f0] p-[16px] border border-[#d0d0d0]">
                  <p className="font-['Arial:Bold',sans-serif] text-[12px] text-[#191919] mb-[8px]">🔍 Real Research Sources</p>
                  <div className="grid grid-cols-3 gap-[8px]">
                    <div className="bg-white p-[8px] text-center">
                      <p className="font-['Arial:Bold',sans-serif] text-[18px] text-[#8c1d40]">{skillsData.research_sources.job_postings}</p>
                      <p className="font-['Arial:Regular',sans-serif] text-[10px] text-[#555]">Job Postings</p>
                    </div>
                    <div className="bg-white p-[8px] text-center">
                      <p className="font-['Arial:Bold',sans-serif] text-[18px] text-[#8c1d40]">{skillsData.research_sources.skill_databases}</p>
                      <p className="font-['Arial:Regular',sans-serif] text-[10px] text-[#555]">Skill Databases</p>
                    </div>
                    <div className="bg-white p-[8px] text-center">
                      <p className="font-['Arial:Bold',sans-serif] text-[18px] text-[#8c1d40]">{skillsData.research_sources.career_guides}</p>
                      <p className="font-['Arial:Regular',sans-serif] text-[10px] text-[#555]">Career Guides</p>
                    </div>
                  </div>
                  <p className="font-['Arial:Regular',sans-serif] text-[11px] text-[#555] mt-[8px]">Generated from {skillsData.research_sources.total_sources} real sources</p>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white border border-[#d0d0d0] px-[24px] py-[48px] text-center">
              <p className="font-['Arial:Regular',sans-serif] text-[16px] text-[#555] leading-[24px]">Click "Research Skills" to discover the technical skills, soft skills, tools, and certifications needed for this career</p>
            </div>
          )}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-[96px]" />

      {/* Related ASU Experiences - White Background Section */}
      <section className="bg-white py-[64px]">
        {/* Hero Image with Fade - Wider than content (1200px + 64px + 64px = 1328px) */}
        <div className="max-w-[1328px] mx-auto mb-[48px]">
          <div className="relative h-[550px] -mt-[64px] overflow-hidden">
            {/* Hero Image */}
            <div className="absolute inset-0">
              <img 
                alt="ASU students collaborating"
                className="absolute h-[131.82%] left-0 max-w-none top-0 w-full object-cover"
                src={imgExperiencesHero}
              />
            </div>
            {/* White Fade Overlay - Seamless blend to white */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[80%] via-white/63 to-white pointer-events-none" />
          </div>
        </div>

        {/* Content - Standard 1200px width matching ASU degrees section */}
        <div className="px-[60px]">
          <div className="max-w-[1200px] mx-auto">
            {/* Content - Starts after fade ends */}
            <h2 className="font-['Arial:Bold',sans-serif] text-[36px] text-[#191919] leading-[43.2px] tracking-[-1.26px] mb-[16px]">
              Related ASU experiences to get you ahead
            </h2>
            <p className="font-['Arial:Regular',sans-serif] text-[16px] text-[#191919] leading-[24px] mb-[24px]">
              ASU offers many resources and experiential opportunities to help you reach your career goals beyond just the degree.
            </p>
            
            {/* View more career resources link */}
            <div className="mb-[32px]">
              <p className="font-['Arial:Regular',sans-serif] text-[16px] text-[#8c1d40] leading-[24px]">
                View more career resources
              </p>
            </div>

            {/* Border Divider */}
            <div className="border-t border-[#d0d0d0] mb-[32px]" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {career.experiences.slice(0, 4).map((experience, index) => {
                const getBadgeLabel = (icon: string) => {
                  const badgeMap: Record<string, string> = {
                    briefcase: "Internship",
                    users: "Club",
                    award: "Partnership",
                    laptop: "Program",
                    code: "Competition",
                    trophy: "Competition",
                    heart: "Volunteer",
                    book: "Program",
                    megaphone: "Organization",
                    shield: "Club",
                    globe: "Internship",
                    newspaper: "Program",
                    stethoscope: "Experience"
                  };
                  return badgeMap[icon] || "Program";
                };

                // Map experiences to unique photo types
                const getExperienceImageUrl = (title: string, icon: string) => {
                  const titleLower = title.toLowerCase();
                  
                  // Match by keywords in title
                  if (titleLower.includes('internship') || titleLower.includes('student externship')) {
                    return 'https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBkaXNjdXNzaW9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTgyODE5OXww&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (titleLower.includes('club') || titleLower.includes('association') || titleLower.includes('society') || titleLower.includes('chapter')) {
                    return 'https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtJTIwcHJvamVjdHxlbnwxfHx8fDE3NzE4MjgxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (titleLower.includes('certification') || titleLower.includes('certificate')) {
                    return 'https://images.unsplash.com/photo-1760420940953-3958ad9f6287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc2hvcCUyMHRyYWluaW5nJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NzE4MTcyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (titleLower.includes('lab') || titleLower.includes('research')) {
                    return 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwc2NpZW5jZSUyMGV4cGVyaW1lbnQlMjBzdHVkZW50fGVufDF8fHx8MTc3MTgyODE5OXww&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (titleLower.includes('hackathon') || titleLower.includes('competition') || titleLower.includes('challenge')) {
                    return 'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzJTIwY29kaW5nfGVufDF8fHx8MTc3MTgyODE5OHww&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (titleLower.includes('volunteer') || titleLower.includes('community') || titleLower.includes('outreach')) {
                    return 'https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjb21tdW5pdHklMjBzZXJ2aWNlJTIwaGVscGluZ3xlbnwxfHx8fDE3NzE4MTE3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (titleLower.includes('clinic') || titleLower.includes('health') || titleLower.includes('medical') || titleLower.includes('nursing')) {
                    return 'https://images.unsplash.com/photo-1710074213379-2a9c2653046a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwaG9zcGl0YWwlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc3MTgyODIwMXww&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (titleLower.includes('classroom') || titleLower.includes('field experience') || titleLower.includes('teaching') || titleLower.includes('literacy')) {
                    return 'https://images.unsplash.com/photo-1758270704925-fa59d93119c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjB0ZWFjaGluZyUyMGVkdWNhdGlvbiUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MTgyODIwMXww&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (titleLower.includes('design') || titleLower.includes('ux') || titleLower.includes('aiga')) {
                    return 'https://images.unsplash.com/photo-1758627506826-0658170e5cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjBjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzE4MjgyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (titleLower.includes('news') || titleLower.includes('journalism') || titleLower.includes('cronkite') || titleLower.includes('reporter')) {
                    return 'https://images.unsplash.com/photo-1761319114926-ef932912fa37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwc3R1ZHklMjByZXNlYXJjaCUyMGJvb2tzfGVufDF8fHx8MTc3MTgyODE5OXww&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (titleLower.includes('workshop') || titleLower.includes('seminar') || titleLower.includes('training')) {
                    return 'https://images.unsplash.com/photo-1769798643237-8642a3fbe5bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwbmV0d29ya2luZyUyMHBlb3BsZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzE4MjgyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (titleLower.includes('software factory') || titleLower.includes('open source') || titleLower.includes('github')) {
                    return 'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzJTIwY29kaW5nfGVufDF8fHx8MTc3MTgyODE5OHww&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (titleLower.includes('marketing') || titleLower.includes('digital')) {
                    return 'https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBkaXNjdXNzaW9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTgyODE5OXww&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (titleLower.includes('sustainability') || titleLower.includes('environmental') || titleLower.includes('epa')) {
                    return 'https://images.unsplash.com/photo-1763890763377-abd05301034d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBvdXRkb29yJTIwYWN0aXZpdGllcyUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MTgyODIwMHww&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (titleLower.includes('practicum') || titleLower.includes('placement')) {
                    return 'https://images.unsplash.com/photo-1758270704925-fa59d93119c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjB0ZWFjaGluZyUyMGVkdWNhdGlvbiUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MTgyODIwMXww&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  
                  // Default fallback based on icon type
                  if (icon === 'users' || icon === 'shield') {
                    return 'https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtJTIwcHJvamVjdHxlbnwxfHx8fDE3NzE4MjgxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (icon === 'award') {
                    return 'https://images.unsplash.com/photo-1760420940953-3958ad9f6287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc2hvcCUyMHRyYWluaW5nJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NzE4MTcyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  if (icon === 'briefcase' || icon === 'globe') {
                    return 'https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBkaXNjdXNzaW9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTgyODE5OXww&ixlib=rb-4.1.0&q=80&w=1080';
                  }
                  
                  // Final fallback
                  return 'https://images.unsplash.com/photo-1769798643237-8642a3fbe5bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwbmV0d29ya2luZyUyMHBlb3BsZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzE4MjgyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080';
                };

                const badgeLabel = getBadgeLabel(experience.icon);
                const imageUrl = getExperienceImageUrl(experience.title, experience.icon);

                return (
                  <div key={index} className="bg-white border border-[#d0d0d0] flex flex-col h-full">
                    {/* Image with Badge - NO fade overlay on cards */}
                    <div className="relative h-[186px] overflow-hidden shrink-0">
                      {/* Base Image */}
                      <img 
                        alt={experience.title}
                        className="absolute inset-0 size-full object-cover"
                        src={imageUrl}
                      />
                      
                      {/* Badge - Rectangular (no border-radius) */}
                      <div className="absolute top-[11px] right-[11px] bg-black px-[12px] pt-[8px] pb-[8px] z-10">
                        <p className="font-['Arial:Bold',sans-serif] text-[12px] text-white tracking-[-0.45px] leading-[21.6px] whitespace-nowrap">
                          {badgeLabel}
                        </p>
                      </div>
                    </div>

                    {/* Content - Fixed height for 2-line title + 3-line description */}
                    <div className="px-[16px] pt-[16px] pb-[16px] flex flex-col gap-[12px] h-[140px]">
                      <h3 className="font-['Arial:Bold',sans-serif] text-[18px] text-[#191919] tracking-[-0.45px] leading-[21.6px] min-h-[43.2px]">
                        {experience.title}
                      </h3>
                      <p className="font-['Arial:Regular',sans-serif] text-[12px] text-[#191919] leading-[16.8px] min-h-[50.4px]">
                        {experience.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-[#d0d0d0] px-[20px] pt-[12px] pb-[12px] flex items-center justify-between mt-auto">
                      <p className="font-['Arial:Regular',sans-serif] text-[16px] text-[#8c1d40] leading-[24px] underline decoration-solid">
                        Learn more
                      </p>
                      <div className="bg-[#fafafa] border border-[#e8e8e8] rounded-[12px] flex items-center justify-center shrink-0 size-[24px]">
                        <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                          <path d={svgPathsExperiences.p114b700} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.14248" />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How AI is affecting this career - Dark Section */}
      <section className="bg-[#191919] py-[96px]">
        <div className="px-[60px]">
          <div className="max-w-[1200px] mx-auto">
            {/* Title with Sparkle Icon */}
            <div className="flex items-center gap-[12px] mb-[24px]">
              <div className="relative shrink-0 size-[32px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g>
                    <path d={svgPaths.p1536ae00} stroke="#FFC627" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d="M26.6667 4V9.33333" stroke="#FFC627" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d="M29.3333 6.66667H24" stroke="#FFC627" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d="M5.33333 22.6667V25.3333" stroke="#FFC627" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d="M6.66667 24H4" stroke="#FFC627" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  </g>
                </svg>
              </div>
              <h2 className="font-['Arial:Bold',sans-serif] text-[36px] text-white leading-[43.2px] tracking-[-1.26px]">
                How AI is affecting this career
              </h2>
            </div>

            {/* Automation Risk */}
            <div className="flex items-center gap-[16px] mb-[16px]">
              <p className="font-['Arial:Regular',sans-serif] text-[18px] text-[#e8e8e8] leading-[25.2px]">
                Automation Risk: <span className="font-['Arial:Bold',sans-serif] text-[#ffc627]">{aiRiskData?.risk_percentage ?? career.automation_risk_pct}%</span>
              </p>
              <button
                onClick={async () => {
                  setIsCalculating(true);
                  setCalculationError(null);
                  try {
                    const response = await fetch(`${API_BASE_URL}/api/calculate-automation-risk`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        job_title: career.career_title,
                        job_description: career.day_in_life.map(d => d.description).join(' ')
                      })
                    });
                    if (!response.ok) throw new Error('Failed to calculate');
                    const data = await response.json();
                    setAiRiskData(data);
                  } catch (error) {
                    setCalculationError('Failed to calculate. Make sure backend is running.');
                  } finally {
                    setIsCalculating(false);
                  }
                }}
                disabled={isCalculating}
                className="bg-[#ffc627] hover:bg-[#ffb600] disabled:bg-[#666] rounded-[804px] px-[16px] py-[6px] transition-colors flex items-center gap-[6px]"
              >
                <Sparkles className="size-[14px]" />
                <span className="font-['Arial:Bold',sans-serif] text-[12px] text-black leading-[18px]">
                  {isCalculating ? 'Calculating...' : 'Calculate AI Risk'}
                </span>
              </button>
            </div>
            {calculationError && (
              <p className="font-['Arial:Regular',sans-serif] text-[14px] text-[#ff6b6b] leading-[21px] mb-[8px]">
                {calculationError}
              </p>
            )}

            {/* Automation Explanation */}
            <p className="font-['Arial:Regular',sans-serif] text-[16px] text-[#e8e8e8] leading-[24px] mb-[24px] max-w-[1024px]">
              {aiRiskData?.explanation ?? career.automation_explanation}
            </p>

            {/* Calculation Transparency - Only show if AI data available */}
            {aiRiskData?.calculation_breakdown && (
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,198,39,0.3)] p-[24px] mb-[48px] max-w-[1024px]">
                <h4 className="font-['Arial:Bold',sans-serif] text-[16px] text-[#ffc627] leading-[24px] mb-[16px] flex items-center gap-[8px]">
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                    <path d="M8 1v14M1 8h14" stroke="#ffc627" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  How we calculated this score
                </h4>
                <div className="space-y-[12px]">
                  {/* Research Papers */}
                  <div className="flex items-start gap-[12px]">
                    <div className="bg-[#ffc627] rounded-full size-[6px] mt-[8px] shrink-0" />
                    <div className="flex-1">
                      <p className="font-['Arial:Bold',sans-serif] text-[14px] text-[#e8e8e8] leading-[21px]">
                        {aiRiskData.calculation_breakdown.research_papers.description}
                      </p>
                      <p className="font-['Arial:Regular',sans-serif] text-[13px] text-[#b0b0b0] leading-[19.5px]">
                        {aiRiskData.calculation_breakdown.research_papers.count} papers found • +{aiRiskData.calculation_breakdown.research_papers.contribution} points
                      </p>
                    </div>
                  </div>
                  
                  {/* AI Tools */}
                  <div className="flex items-start gap-[12px]">
                    <div className="bg-[#ffc627] rounded-full size-[6px] mt-[8px] shrink-0" />
                    <div className="flex-1">
                      <p className="font-['Arial:Bold',sans-serif] text-[14px] text-[#e8e8e8] leading-[21px]">
                        {aiRiskData.calculation_breakdown.ai_tools.description}
                      </p>
                      <p className="font-['Arial:Regular',sans-serif] text-[13px] text-[#b0b0b0] leading-[19.5px]">
                        {aiRiskData.calculation_breakdown.ai_tools.count} tools identified
                        {aiRiskData.calculation_breakdown.ai_tools.tools.length > 0 && (
                          <span> ({aiRiskData.calculation_breakdown.ai_tools.tools.join(', ')})</span>
                        )} • +{aiRiskData.calculation_breakdown.ai_tools.contribution} points
                      </p>
                    </div>
                  </div>
                  
                  {/* AI Analysis */}
                  <div className="flex items-start gap-[12px]">
                    <div className="bg-[#ffc627] rounded-full size-[6px] mt-[8px] shrink-0" />
                    <div className="flex-1">
                      <p className="font-['Arial:Bold',sans-serif] text-[14px] text-[#e8e8e8] leading-[21px]">
                        {aiRiskData.calculation_breakdown.ai_analysis.description}
                      </p>
                      <p className="font-['Arial:Regular',sans-serif] text-[13px] text-[#b0b0b0] leading-[19.5px]">
                        Model: {aiRiskData.calculation_breakdown.ai_analysis.model} • +{aiRiskData.calculation_breakdown.ai_analysis.contribution} points
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* How AI is used in this field today */}
            <div className="mb-[48px]">
              <h3 className="font-['Arial:Bold',sans-serif] text-[24px] text-white leading-[36px] tracking-[-0.6px] mb-[24px]">
                How AI is used in this field today
              </h3>
              
              {/* 2x2 Grid with numbered items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                {career.ai_uses_today.map((use, index) => (
                  <div key={index} className="bg-[#303030] flex gap-[12px] items-center px-[16px] py-[16px]">
                    <div className="bg-[#ffc627] rounded-full size-[24px] flex items-center justify-center shrink-0">
                      <p className="font-['Arial:Bold',sans-serif] text-[14px] text-[#191919] leading-[21px]">
                        {index + 1}
                      </p>
                    </div>
                    <p className="font-['Arial:Regular',sans-serif] text-[14px] text-[#e8e8e8] leading-[24px] flex-1">
                      {use}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ethical questions that AI has presented in this field */}
            <div>
              <div className="flex items-center justify-between mb-[24px]">
                <h3 className="font-['Arial:Bold',sans-serif] text-[24px] text-white leading-[36px] tracking-[-0.6px]">
                  Ethical questions that AI has presented in this field
                </h3>
                <button
                  onClick={async () => {
                    setIsGeneratingEthicalDilemmas(true);
                    try {
                      const response = await fetch(`${API_BASE_URL}/api/generate-ethical-dilemmas`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ job_title: career.career_title })
                      });
                      if (response.ok) {
                        const data = await response.json();
                        setEthicalDilemmasData(data);
                      }
                    } catch (error) {
                      console.error('Failed to generate ethical dilemmas');
                    } finally {
                      setIsGeneratingEthicalDilemmas(false);
                    }
                  }}
                  disabled={isGeneratingEthicalDilemmas}
                  className="bg-[#ffc627] hover:bg-[#ffb600] disabled:bg-[#666] text-black rounded-[804px] px-[12px] py-[6px] transition-colors flex items-center gap-[6px] text-[12px] font-['Arial:Bold',sans-serif]"
                >
                  <Sparkles className="size-[12px]" />
                  {isGeneratingEthicalDilemmas ? 'Researching...' : 'Generate Real Dilemmas'}
                </button>
              </div>
              
              {isGeneratingEthicalDilemmas ? (
                <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,198,39,0.3)] px-[24px] py-[48px] text-center">
                  <div className="flex items-center justify-center gap-[12px] mb-[12px]">
                    <Sparkles className="size-[24px] text-[#ffc627] animate-pulse" />
                  </div>
                  <p className="font-['Arial:Bold',sans-serif] text-[18px] text-[#ffc627] leading-[24px] mb-[8px]">
                    Researching AI Ethics...
                  </p>
                  <p className="font-['Arial:Regular',sans-serif] text-[14px] text-[#b0b0b0] leading-[21px]">
                    Searching ethics articles, academic papers, and news sources
                  </p>
                </div>
              ) : ethicalDilemmasData ? (
                <>
                  {/* Three boxes - no rounding */}
                  <div className="flex flex-col gap-[24px]">
                    {ethicalDilemmasData.ethical_dilemmas.map((dilemma: any, index: number) => (
                      <div key={index} className="bg-[rgba(255,255,255,0.1)] px-[24px] pt-[24px] pb-[24px]">
                        <h4 className="font-['Arial:Bold',sans-serif] text-[18px] text-white leading-[27px] tracking-[-0.45px] mb-[12px]">
                          {dilemma.title}
                        </h4>
                        <p className="font-['Arial:Regular',sans-serif] text-[16px] text-[#e8e8e8] leading-[24px]">
                          {dilemma.question}
                        </p>
                        {dilemma.context && (
                          <p className="font-['Arial:Regular',sans-serif] text-[13px] text-[#b0b0b0] leading-[19.5px] mt-[8px] italic">
                            {dilemma.context}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Research Sources */}
                  {ethicalDilemmasData.research_sources && (
                    <div className="bg-[rgba(255,198,39,0.1)] border border-[rgba(255,198,39,0.3)] p-[16px] mt-[24px]">
                      <p className="font-['Arial:Bold',sans-serif] text-[12px] text-[#ffc627] mb-[8px]">
                        🔍 Real Research Sources
                      </p>
                      <div className="grid grid-cols-3 gap-[8px]">
                        <div className="bg-[rgba(255,255,255,0.05)] p-[8px] text-center">
                          <p className="font-['Arial:Bold',sans-serif] text-[18px] text-[#ffc627]">
                            {ethicalDilemmasData.research_sources.ethics_articles}
                          </p>
                          <p className="font-['Arial:Regular',sans-serif] text-[10px] text-[#e8e8e8]">
                            Ethics Articles
                          </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.05)] p-[8px] text-center">
                          <p className="font-['Arial:Bold',sans-serif] text-[18px] text-[#ffc627]">
                            {ethicalDilemmasData.research_sources.academic_papers}
                          </p>
                          <p className="font-['Arial:Regular',sans-serif] text-[10px] text-[#e8e8e8]">
                            Academic Papers
                          </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.05)] p-[8px] text-center">
                          <p className="font-['Arial:Bold',sans-serif] text-[18px] text-[#ffc627]">
                            {ethicalDilemmasData.research_sources.news_articles}
                          </p>
                          <p className="font-['Arial:Regular',sans-serif] text-[10px] text-[#e8e8e8]">
                            News Articles
                          </p>
                        </div>
                      </div>
                      <p className="font-['Arial:Regular',sans-serif] text-[11px] text-[#b0b0b0] mt-[8px]">
                        Generated from {ethicalDilemmasData.research_sources.total_sources} real sources
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,198,39,0.3)] px-[24px] py-[48px] text-center">
                  <p className="font-['Arial:Regular',sans-serif] text-[16px] text-[#e8e8e8] leading-[24px]">
                    Click "Generate Real Dilemmas" to research and display AI ethics questions specific to this career
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-[96px]" />

      {/* You might also be interested in */}
      <section className="px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-['Arial:Bold',sans-serif] text-[36px] text-[#191919] leading-[43.2px] tracking-[-1.26px] mb-[48px]">
            You might also be interested in
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] mb-[48px]">
            {career.related_careers.map((related, index) => {
              const relatedCareer = careers.find(c => c.slug === related.slug);
              if (!relatedCareer) return null;

              return (
                <Link
                  key={index}
                  to={`/career/${related.slug}`}
                  className="bg-white flex flex-col hover:shadow-lg transition-shadow border border-[#f1f1f1]"
                >
                  {/* Image */}
                  <div className="h-[180px] relative">
                    <img 
                      alt={related.title}
                      className="absolute inset-0 size-full object-cover" 
                      src={relatedCareer.image_url}
                    />
                  </div>

                  {/* Card Body */}
                  <div className="min-h-[135px] p-[24px]">
                    <div className="space-y-[16px]">
                      {/* Title */}
                      <h3 className="font-['Arial:Bold',sans-serif] text-[18px] text-[#191919] tracking-[-0.4px] leading-[19.2px]">
                        {related.title}
                      </h3>
                      
                      {/* Yellow underline */}
                      <div className="bg-[#ffc627] h-[2px] w-[34.56px]" />
                      
                      {/* Growth and Salary */}
                      <div className="pt-[7px] space-y-[4px]">
                        {/* Growth */}
                        <div className="flex items-start gap-[8px]">
                          <svg className="size-[12px] mt-[2px]" fill="none" viewBox="0 0 12 12">
                            <path d={svgPathsCard.p1049ec00} fill="#191919" />
                          </svg>
                          <p className="font-['Arial:Regular',sans-serif] text-[12px] text-[#191919] leading-[16.8px]">
                            <span className="font-['Arial:Bold',sans-serif]">Growth: </span>
                            {relatedCareer.growth_rate}
                          </p>
                        </div>
                        
                        {/* Salary */}
                        <div className="flex items-start gap-[8px]">
                          <div className="flex gap-0 mt-[2px]">
                            <svg className="size-[12px]" fill="none" viewBox="0 0 7.5 12">
                              <path d={svgPathsCard.p2befb900} fill="#191919" />
                            </svg>
                            <svg className="size-[12px] -ml-[4px]" fill="none" viewBox="0 0 7.5 12">
                              <path d={svgPathsCard.p2befb900} fill="#191919" />
                            </svg>
                          </div>
                          <p className="font-['Arial:Regular',sans-serif] text-[12px] text-[#191919] leading-[16.8px]">
                            <span className="font-['Arial:Bold',sans-serif]">Salary: </span>
                            {relatedCareer.salary_median}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-[#f1f1f1] px-[16px] py-[13px] flex items-center justify-between mt-auto">
                    <p className="font-['Arial:Regular',sans-serif] text-[16px] text-[#8c1d40] leading-[22.4px] underline">
                      Learn more
                    </p>
                    <div className="bg-[#fafafa] border border-[#e8e8e8] rounded-[12px] p-px flex items-center justify-center size-[24px]">
                      <svg className="size-[12px]" fill="none" viewBox="0 0 6 10.5">
                        <path d={svgPathsCard.p12982e00} fill="#191919" />
                      </svg>
                    </div>
                  </div>

                  {/* Yellow bottom border */}
                  <div className="bg-[#ffc627] h-[6px] w-full" />
                </Link>
              );
            })}
          </div>

          {/* See other careers button */}
          <div className="flex justify-center">
            <Link
              to="/"
              className="bg-[#ffc627] border border-[#ffc627] rounded-[804px] px-[17px] py-[9px] inline-block hover:bg-[#ffb600] transition-colors"
            >
              <p className="font-['Arial:Bold',sans-serif] text-[16px] text-black leading-[24px] text-center whitespace-nowrap">
                See other careers
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-[96px]" />

      {/* CTA Section - Light background with pattern */}
      <section className="relative bg-white h-[296px] overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 bg-repeat-x bg-[length:450px_451px] bg-[top_left]" 
          style={{ backgroundImage: `url('${imgSectionProgramCourses}')` }}
        />
        
        {/* Content - Centered */}
        <div className="relative px-[60px] h-full flex flex-col items-center justify-center">
          <div className="max-w-[1080px] w-full text-center">
            {/* Heading */}
            <h2 className="font-['Arial:Bold',sans-serif] text-[36px] text-[#191919] leading-[43.2px] tracking-[-1.26px] mb-[16px]">
              Ready to start your journey?
            </h2>
            
            {/* Paragraph */}
            <p className="font-['Arial:Regular',sans-serif] text-[18px] text-[#191919] leading-[25.2px] mb-[32px]">
              Explore {career.asu_degree_count} ASU Online degree{career.asu_degree_count !== 1 ? 's' : ''} that can prepare you for a career as a {career.career_title}.
            </p>
            
            {/* Buttons */}
            <div className="flex items-center justify-center gap-[16px]">
              <button className="bg-[#ffc627] rounded-[26843500px] px-[32px] h-[52px] hover:bg-[#ffb600] transition-colors">
                <p className="font-['Arial:Bold',sans-serif] text-[16px] text-black leading-[24px]">
                  View Degrees
                </p>
              </button>
              <button className="bg-[#191919] rounded-[26843500px] px-[32px] h-[52px] hover:bg-[#303030] transition-colors">
                <p className="font-['Arial:Bold',sans-serif] text-[16px] text-white leading-[24px]">
                  Request Info
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}