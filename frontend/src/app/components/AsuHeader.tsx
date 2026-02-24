import { useEffect } from "react";
import imgStackedLogo from "figma:asset/3be6e3ff51aea25610418a0776cc98d56609b97a.png";

export function AsuHeader() {
  useEffect(() => {
    const dropdowns = Array.from(document.querySelectorAll(".asu-nav__dropdown"));

    const closeAll = (except: Element | null = null) => {
      dropdowns.forEach((dd) => {
        if (dd === except) return;
        (dd as HTMLElement).dataset.open = "false";
        const btn = dd.querySelector(".asu-nav__toggle");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as Element;
      const clickedInsideAny = dropdowns.some((dd) => dd.contains(target));
      if (!clickedInsideAny) closeAll();
    };

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as Element;
      const focusedInsideAny = dropdowns.some((dd) => dd.contains(target));
      if (!focusedInsideAny) closeAll();
    };

    const handleDropdownClick = (e: Event, dd: HTMLElement, btn: Element) => {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = dd.dataset.open === "true";
      closeAll(dd);
      dd.dataset.open = (!isOpen).toString();
      btn.setAttribute("aria-expanded", (!isOpen).toString());
    };

    const handleKeyDown = (e: KeyboardEvent, dd: HTMLElement, btn: Element) => {
      if (e.key === "Escape") {
        dd.dataset.open = "false";
        btn.setAttribute("aria-expanded", "false");
        (btn as HTMLElement).focus();
      }
    };

    dropdowns.forEach((dd) => {
      const btn = dd.querySelector(".asu-nav__toggle");
      const menu = dd.querySelector(".asu-dropdown");
      if (!btn || !menu) return;

      const htmlBtn = btn as HTMLElement;
      const htmlDd = dd as HTMLElement;

      const clickListener = (e: MouseEvent) => handleDropdownClick(e, htmlDd, btn);
      const keydownListener = (e: KeyboardEvent) => handleKeyDown(e, htmlDd, btn);

      htmlBtn.addEventListener("click", clickListener);
      htmlDd.addEventListener("keydown", keydownListener);

      (htmlBtn as any)._cleanupClick = () => htmlBtn.removeEventListener("click", clickListener);
      (htmlDd as any)._cleanupKeydown = () => htmlDd.removeEventListener("keydown", keydownListener);
    });

    document.addEventListener("click", handleClick);
    document.addEventListener("focusin", handleFocusIn);

    return () => {
      dropdowns.forEach((dd) => {
        const btn = dd.querySelector(".asu-nav__toggle");
        if (btn && (btn as any)._cleanupClick) (btn as any)._cleanupClick();
        if ((dd as any)._cleanupKeydown) (dd as any)._cleanupKeydown();
      });
      document.removeEventListener("click", handleClick);
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, []);

  return (
    <>
      {/* ====== ASU Utility Top Bar ====== */}
      <div className="asu-utilbar">
        <div className="asu-utilbar__inner">
          <div className="asu-utilbar__links">
            <a href="https://www.asu.edu/" className="asu-utilbar__link">
              ASU Home
            </a>
            <a href="https://my.asu.edu/" className="asu-utilbar__link">
              My ASU
            </a>
            <a href="https://www.asu.edu/academics/colleges-schools" className="asu-utilbar__link">
              Colleges and Schools
            </a>
            <a href="https://weblogin.asu.edu/cgi-bin/login" className="asu-utilbar__link">
              Sign in
            </a>
          </div>

          <a className="asu-utilbar__search" href="https://search.asu.edu/" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M10 18a8 8 0 1 1 5.293-14.05A8 8 0 0 1 10 18Zm11 3-6.12-6.12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* ====== Main Header ====== */}
      <header className="asu-header">
        <div className="asu-header__inner">
          {/* Logo */}
          <a className="asu-logo-link" href="/">
            <img className="asu-logo-img" src={imgStackedLogo} alt="ASU Arizona State University" />
          </a>

          {/* Center Column: Brand Text & Nav */}
          <div className="asu-header__center">
            <a className="asu-brand__name" href="/">ASU Online</a>

            {/* Nav */}
            <nav className="asu-nav" aria-label="Primary">
              <a className="asu-nav__home" href="/" aria-label="Home">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </a>

              <a className="asu-nav__link asu-nav__link--active" href="/">
                Explore Careers
              </a>

              <div className="asu-nav__dropdown" data-open="false">
                <button className="asu-nav__toggle" type="button" aria-expanded="false">
                  Online Degrees <span className="asu-chevron" aria-hidden="true"></span>
                </button>
                <div className="asu-dropdown">
                  <a href="https://asuonline.asu.edu/online-degree-programs/">All Online Programs</a>
                  <a href="https://asuonline.asu.edu/online-degree-programs/undergraduate/">Undergraduate Degrees</a>
                  <a href="https://asuonline.asu.edu/online-degree-programs/graduate/">Graduate Degrees</a>
                  <a href="https://asuonline.asu.edu/online-degree-programs/certificates/">Graduate Certificates</a>
                  <a href="https://asuonline.asu.edu/online-degree-programs/nondegree/">Nondegree Programs</a>
                  <a href="https://asuonline.asu.edu/online-degree-programs/find-your-degree/">Browse Interest Areas</a>
                </div>
              </div>

              <div className="asu-nav__dropdown" data-open="false">
                <button className="asu-nav__toggle" type="button" aria-expanded="false">
                  Tuition <span className="asu-chevron" aria-hidden="true"></span>
                </button>
                <div className="asu-dropdown">
                  <a href="https://asuonline.asu.edu/what-it-costs/">Tuition Calculator</a>
                  <a href="https://asuonline.asu.edu/what-it-costs/financial-aid/">Financial Aid</a>
                  <a href="https://asuonline.asu.edu/what-it-costs/scholarships/">Scholarships</a>
                </div>
              </div>

              <a className="asu-nav__link" href="https://asuonline.asu.edu/admission/">
                Admission
              </a>

              <div className="asu-nav__dropdown" data-open="false">
                <button className="asu-nav__toggle" type="button" aria-expanded="false">
                  Student Experience <span className="asu-chevron" aria-hidden="true"></span>
                </button>
                <div className="asu-dropdown">
                  <a href="https://asuonline.asu.edu/student-experience/online-learning/">Online Learning</a>
                  <a href="https://asuonline.asu.edu/student-experience/success-labs/">Success Labs</a>
                  <a href="https://asuonline.asu.edu/student-experience/reviews/">Reviews</a>
                  <a href="https://asuonline.asu.edu/student-experience/support-services/">Student Services</a>
                  <a href="https://asuonline.asu.edu/student-experience/community/">Student Community</a>
                  <a href="https://asuonline.asu.edu/student-experience/tutoring/">Tutoring</a>
                  <a href="https://asuonline.asu.edu/student-experience/study-abroad/">Study Abroad</a>
                  <a href="https://asuonline.asu.edu/student-experience/career-advising/">Graduation &amp; Career</a>
                </div>
              </div>

              <a className="asu-nav__link" href="https://news.asu.edu/">
                Newsroom
              </a>

              <div className="asu-nav__dropdown" data-open="false">
                <button className="asu-nav__toggle" type="button" aria-expanded="false">
                  About <span className="asu-chevron" aria-hidden="true"></span>
                </button>
                <div className="asu-dropdown">
                  <a href="https://asuonline.asu.edu/about-us/">Why ASU Online</a>
                  <a href="https://www.asu.edu/about">About</a>
                  <a href="https://www.asu.edu/rankings">Rankings</a>
                  <a href="https://asuonline.asu.edu/about-us/faculty/">Faculty</a>
                  <a href="https://asuonline.asu.edu/about-us/accreditation/">Accreditation</a>
                  <a href="https://asuonline.asu.edu/faq/">FAQ</a>
                  <a href="https://asuonline.asu.edu/about-us/contact/">Contact</a>
                </div>
              </div>
            </nav>
          </div>

          {/* CTAs (MUST be outside <nav>) */}
          <div className="asu-cta">
            <a className="asu-btn" href="https://asuonline.asu.edu/apply/">
              Apply now
            </a>
            <a className="asu-btn asu-btn--outline" href="https://asuonline.asu.edu/request-info/">
              Request info
            </a>
          </div>
        </div>
      </header>
    </>
  );
}