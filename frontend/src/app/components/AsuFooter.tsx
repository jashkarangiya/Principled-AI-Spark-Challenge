export function AsuFooter() {
  return (
    <footer className="w-full">
      {/* Main footer - dark section */}
      <div className="bg-[#191919]">
        <div className="max-w-[1320px] mx-auto px-[60px] py-[48px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            {/* Column 1 */}
            <div>
              <h3 className="font-['Arial'] font-bold text-[16px] text-white mb-[16px] tracking-[-0.4px]">
                Admissions
              </h3>
              <ul className="space-y-[8px]">
                <li>
                  <a
                    href="https://admission.asu.edu/apply"
                    className="font-['Arial'] text-[14px] text-[#e8e8e8] hover:text-white leading-[19.6px]"
                  >
                    Apply
                  </a>
                </li>
                <li>
                  <a
                    href="https://admission.asu.edu/"
                    className="font-['Arial'] text-[14px] text-[#e8e8e8] hover:text-white leading-[19.6px]"
                  >
                    Request info
                  </a>
                </li>
                <li>
                  <a
                    href="https://visit.asu.edu/"
                    className="font-['Arial'] text-[14px] text-[#e8e8e8] hover:text-white leading-[19.6px]"
                  >
                    Visit
                  </a>
                </li>
                <li>
                  <a
                    href="https://students.asu.edu/tuition"
                    className="font-['Arial'] text-[14px] text-[#e8e8e8] hover:text-white leading-[19.6px]"
                  >
                    Tuition and aid
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-['Arial'] font-bold text-[16px] text-white mb-[16px] tracking-[-0.4px]">
                Academic units
              </h3>
              <ul className="space-y-[8px]">
                <li>
                  <a
                    href="https://asu.edu/academics/colleges-schools"
                    className="font-['Arial'] text-[14px] text-[#e8e8e8] hover:text-white leading-[19.6px]"
                  >
                    Colleges and schools
                  </a>
                </li>
                <li>
                  <a
                    href="https://catalog.asu.edu/"
                    className="font-['Arial'] text-[14px] text-[#e8e8e8] hover:text-white leading-[19.6px]"
                  >
                    Academic catalogs
                  </a>
                </li>
                <li>
                  <a
                    href="https://degrees.asu.edu/"
                    className="font-['Arial'] text-[14px] text-[#e8e8e8] hover:text-white leading-[19.6px]"
                  >
                    Degrees
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-['Arial'] font-bold text-[16px] text-white mb-[16px] tracking-[-0.4px]">
                Resources
              </h3>
              <ul className="space-y-[8px]">
                <li>
                  <a
                    href="https://lib.asu.edu/"
                    className="font-['Arial'] text-[14px] text-[#e8e8e8] hover:text-white leading-[19.6px]"
                  >
                    Libraries
                  </a>
                </li>
                <li>
                  <a
                    href="https://webapp4.asu.edu/directory/"
                    className="font-['Arial'] text-[14px] text-[#e8e8e8] hover:text-white leading-[19.6px]"
                  >
                    Directory
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.asu.edu/about/locations-maps"
                    className="font-['Arial'] text-[14px] text-[#e8e8e8] hover:text-white leading-[19.6px]"
                  >
                    Maps and locations
                  </a>
                </li>
                <li>
                  <a
                    href="https://cfo.asu.edu/jobs"
                    className="font-['Arial'] text-[14px] text-[#e8e8e8] hover:text-white leading-[19.6px]"
                  >
                    Jobs
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h3 className="font-['Arial'] font-bold text-[16px] text-white mb-[16px] tracking-[-0.4px]">
                Contact ASU
              </h3>
              <ul className="space-y-[8px]">
                <li>
                  <a
                    href="https://www.asu.edu/about/contact"
                    className="font-['Arial'] text-[14px] text-[#e8e8e8] hover:text-white leading-[19.6px]"
                  >
                    Directory
                  </a>
                </li>
                <li>
                  <a
                    href="tel:4809654357"
                    className="font-['Arial'] text-[14px] text-[#e8e8e8] hover:text-white leading-[19.6px]"
                  >
                    (480) 965-4357
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Gold bar with social and rankings */}
      <div className="bg-[#ffc627]">
        <div className="max-w-[1320px] mx-auto px-[60px] py-[16px]">
          <div className="flex flex-wrap items-center justify-between gap-[16px]">
            {/* Social links */}
            <nav className="flex items-center gap-[16px]">
              <a
                href="https://www.facebook.com/ASU"
                className="font-['Arial'] font-bold text-[16px] text-[#191919] hover:underline leading-[24px]"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/asu"
                className="font-['Arial'] font-bold text-[16px] text-[#191919] hover:underline leading-[24px]"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/school/arizona-state-university/"
                className="font-['Arial'] font-bold text-[16px] text-[#191919] hover:underline leading-[24px]"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/arizonastateuniversity/"
                className="font-['Arial'] font-bold text-[16px] text-[#191919] hover:underline leading-[24px]"
              >
                Instagram
              </a>
            </nav>

            {/* Rankings badge */}
            <div className="font-['Arial'] text-[12px] text-[#191919] leading-[16.8px]">
              Repeatedly ranked #1 on 30+ lists in the last 3 years
            </div>
          </div>
        </div>
      </div>

      {/* Bottom legal links */}
      <div className="bg-[#f1f1f1]">
        <div className="max-w-[1320px] mx-auto px-[60px] py-[16px]">
          <nav className="flex flex-wrap items-center gap-[16px]">
            <a
              href="https://www.asu.edu/about/copyright-trademark"
              className="font-['Arial'] text-[16px] text-[#191919] hover:underline leading-[24px]"
            >
              Copyright and Trademark
            </a>
            <a
              href="https://www.asu.edu/accessibility/"
              className="font-['Arial'] text-[16px] text-[#191919] hover:underline leading-[24px]"
            >
              Accessibility
            </a>
            <a
              href="https://www.asu.edu/privacy/"
              className="font-['Arial'] text-[16px] text-[#191919] hover:underline leading-[24px]"
            >
              Privacy
            </a>
            <a
              href="https://www.asu.edu/tou/"
              className="font-['Arial'] text-[16px] text-[#191919] hover:underline leading-[24px]"
            >
              Terms of Use
            </a>
            <a
              href="https://www.asu.edu/emergency/"
              className="font-['Arial'] text-[16px] text-[#191919] hover:underline leading-[24px]"
            >
              Emergency
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
