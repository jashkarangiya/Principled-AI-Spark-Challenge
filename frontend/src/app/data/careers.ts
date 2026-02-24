export interface Career {
  career_title: string;
  slug: string;
  field: string;
  soc_code: string;
  salary_entry: string;
  salary_median: string;
  salary_top: string;
  growth_rate: string;
  annual_openings: string;
  asu_degree_count: number;
  automation_risk_pct: number;
  automation_explanation: string;
  image_url: string;
  day_in_life: Array<{
    time: string;
    description: string;
    highlight: boolean;
  }>;
  ai_uses_today: string[];
  ethical_dilemmas: Array<{
    title: string;
    question: string;
  }>;
  degrees: Array<{
    name: string;
    school: string;
    why: string;
    url: string;
    image_url: string;
    courses: Array<{
      code: string;
      name: string;
    }>;
  }>;
  skills: Array<{
    name: string;
    importance: number;
    how_to_build: string;
    is_ai_skill: boolean;
  }>;
  experiences: Array<{
    icon: string;
    title: string;
    description: string;
    link_text: string;
    link_url: string;
  }>;
  related_careers: Array<{
    title: string;
    median_salary: string;
    slug: string;
  }>;
  at_a_glance: {
    education: string;
    years_to_entry: string;
    work_environment: string;
    az_openings: string;
    data_source: string;
  };
}

export const careers: Career[] = [
  {
    career_title: "Data Analyst",
    slug: "data-analyst",
    field: "Technology",
    soc_code: "15-2051.00",
    salary_entry: "$52,000",
    salary_median: "$76,000",
    salary_top: "$118,000",
    growth_rate: "+23%",
    annual_openings: "13,500",
    asu_degree_count: 2,
    automation_risk_pct: 35,
    automation_explanation: "Routine data cleaning and basic reporting are increasingly automated, but strategic analysis, storytelling, and stakeholder communication remain essential human skills.",
    image_url: "https://images.unsplash.com/photo-1657727534685-36b09f84e193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzdCUyMHdvcmtpbmclMjBjb21wdXRlciUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzE3MDA3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    day_in_life: [
      { time: "Morning", description: "Review overnight dashboard alerts and prepare executive summary for stakeholder meeting on customer retention trends.", highlight: true },
      { time: "Mid-AM", description: "Clean and merge three datasets from marketing, sales, and customer support to identify cross-channel patterns.", highlight: false },
      { time: "Afternoon", description: "Build interactive Tableau dashboard to visualize product performance across regions and present findings to product team.", highlight: true },
      { time: "Late PM", description: "Collaborate with engineering to refine data pipeline and document analysis methodology for future team members.", highlight: false },
      { time: "Evening", description: "Participate in data team standup to share insights and plan upcoming A/B test analysis for new product features.", highlight: false }
    ],
    ai_uses_today: [
      "Use ChatGPT to draft SQL queries and debug code errors",
      "Apply automated anomaly detection algorithms to flag unusual patterns in sales data",
      "Leverage Tableau's AI-powered analytics to surface unexpected insights",
      "Use Python libraries like Prophet for time series forecasting"
    ],
    ethical_dilemmas: [
      { title: "The Biased Dataset", question: "Your model shows certain ZIP codes have higher loan default rates, which correlates with racial demographics. Do you include this feature knowing it could perpetuate discriminatory lending practices, or omit it and reduce model accuracy?" },
      { title: "Selective Reporting", question: "Your analysis shows a company initiative is failing, but leadership wants a positive narrative for investors. How do you balance data integrity with organizational pressure?" },
      { title: "Privacy vs. Insight", question: "Combining employee badge swipe data with productivity metrics could optimize office space, but also enables surveillance. Where do you draw the line on workplace analytics?" }
    ],
    degrees: [
      {
        name: "BS in Business Data Analytics",
        school: "W. P. Carey School of Business",
        why: "This degree combines statistical rigor with business context — you'll learn SQL, Python, and Tableau while understanding how data drives real business decisions.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-business-data-analytics/",
        image_url: "https://images.unsplash.com/photo-1608600712992-03e5325d94c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGNsYXNzcm9vbSUyMHN0dWRlbnRzJTIwbGFwdG9wfGVufDF8fHx8MTc3MTgyNTQ5OXww&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "CIS 235", name: "Intro to Programming" },
          { code: "SCM 300", name: "Data Analytics" },
          { code: "CIS 450", name: "Database Management" },
          { code: "SCM 421", name: "Predictive Analytics" }
        ]
      },
      {
        name: "BS in Applied Mathematics (Data Science)",
        school: "College of Liberal Arts and Sciences",
        why: "Ideal for students who want deep mathematical foundations in machine learning and statistical modeling.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-applied-mathematics/",
        image_url: "https://images.unsplash.com/photo-1614492898637-435e0f87cef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMHN0YXRpc3RpY3MlMjBzdHVkZW50JTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzcxODI1NDk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "MAT 343", name: "Applied Linear Algebra" },
          { code: "STP 420", name: "Probability" },
          { code: "CSE 310", name: "Data Structures" },
          { code: "STP 529", name: "Statistical Learning" }
        ]
      }
    ],
    skills: [
      { name: "Prompt Engineering for Data Analysis", importance: 4, how_to_build: "CIS 235, self-directed AI tool experimentation", is_ai_skill: true },
      { name: "Critical Evaluation of AI Outputs", importance: 5, how_to_build: "STP 420, SCM 421 case studies", is_ai_skill: true },
      { name: "SQL & Database Querying", importance: 5, how_to_build: "CIS 450", is_ai_skill: false },
      { name: "Python (Pandas, NumPy)", importance: 5, how_to_build: "CIS 235, MAT 343", is_ai_skill: false },
      { name: "Data Visualization (Tableau, Power BI)", importance: 4, how_to_build: "SCM 300, online certifications", is_ai_skill: false },
      { name: "Statistical Thinking", importance: 5, how_to_build: "STP 420, SCM 421", is_ai_skill: false },
      { name: "Business Communication", importance: 4, how_to_build: "W. P. Carey core courses, presentation projects", is_ai_skill: false },
      { name: "Stakeholder Interviewing", importance: 3, how_to_build: "Capstone projects, internships", is_ai_skill: false }
    ],
    experiences: [
      { icon: "briefcase", title: "ASU Analytics Internship Program", description: "Work with ASU's institutional research team to analyze student success data.", link_text: "Apply through Handshake", link_url: "#" },
      { icon: "users", title: "Data Science Club", description: "Join weekly Kaggle competitions and build portfolio projects with peers.", link_text: "Find on SunDevilSync", link_url: "#" },
      { icon: "award", title: "Tableau Student Certification", description: "Free certification program for ASU students through university partnership.", link_text: "Access via MyASU", link_url: "#" },
      { icon: "laptop", title: "ASU Data Analytics Lab", description: "Gain hands-on experience with real business datasets through faculty-led research projects.", link_text: "Inquire via W. P. Carey", link_url: "#" }
    ],
    related_careers: [
      { title: "Financial Analyst", median_salary: "$74,000", slug: "financial-analyst" },
      { title: "Marketing Manager", median_salary: "$88,000", slug: "marketing-manager" },
      { title: "Software Engineer", median_salary: "$102,000", slug: "software-engineer" },
      { title: "Cybersecurity Analyst", median_salary: "$94,000", slug: "cybersecurity-analyst" }
    ],
    at_a_glance: {
      education: "Bachelor's degree (Data Analytics, Statistics, CS, or related)",
      years_to_entry: "0-1 years (entry-level roles available)",
      work_environment: "Office, remote-friendly, hybrid common",
      az_openings: "~850/year",
      data_source: "Bureau of Labor Statistics OEWS & Employment Projections (2024)"
    }
  },
  {
    career_title: "UX Designer",
    slug: "ux-designer",
    field: "Technology",
    soc_code: "27-1021.00",
    salary_entry: "$48,000",
    salary_median: "$72,000",
    salary_top: "$115,000",
    growth_rate: "+16%",
    annual_openings: "7,800",
    asu_degree_count: 2,
    automation_risk_pct: 28,
    automation_explanation: "AI can generate wireframes and test variations, but understanding user needs, facilitating research, and advocating for human-centered design requires empathy and nuanced judgment.",
    image_url: "https://images.unsplash.com/photo-1612171742424-c31e0b4fe5db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbmVyJTIwc2tldGNoaW5nJTIwd2lyZWZyYW1lc3xlbnwxfHx8fDE3NzE3MDA3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    day_in_life: [
      { time: "Morning", description: "Review user testing recordings from yesterday's session, noting pain points where users struggled with the checkout flow.", highlight: false },
      { time: "Mid-AM", description: "Facilitate whiteboard session with product and engineering to ideate solutions for mobile navigation issues raised in research.", highlight: true },
      { time: "Afternoon", description: "Create high-fidelity mockups in Figma for the redesigned dashboard, incorporating accessibility guidelines and design system components.", highlight: true },
      { time: "Late PM", description: "Present design rationale to stakeholders, defending user-first approach against business pressure to add more promotional content.", highlight: false },
      { time: "Evening", description: "Update design system documentation with new component patterns and conduct heuristic evaluation of competitor apps for inspiration.", highlight: false }
    ],
    ai_uses_today: [
      "Use Figma AI to auto-generate layout variations from wireframes",
      "Leverage AI-powered tools like Maze or UserTesting for automated insight extraction",
      "Apply sentiment analysis to open-ended survey responses",
      "Use AI image generators to create placeholder content for mockups"
    ],
    ethical_dilemmas: [
      { title: "Dark Patterns", question: "Marketing wants you to make the 'cancel subscription' button hard to find to reduce churn. Do you comply to meet business goals or prioritize user trust?" },
      { title: "Accessibility vs. Speed", question: "Your manager says there's no time to implement screen reader support before launch. Do you ship an inaccessible product or delay and risk missing the market window?" },
      { title: "Addictive Design", question: "Data shows infinite scroll and notification nudges increase engagement. Should you design features that keep users hooked, even if it harms their wellbeing?" }
    ],
    degrees: [
      {
        name: "BA in Design Studies (Digital Design)",
        school: "Herberger Institute for Design and the Arts",
        why: "Studio-based learning with industry mentors, focusing on user research, prototyping, and portfolio development.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-arts-design-studies/",
        image_url: "https://images.unsplash.com/photo-1764737740462-2a310c7b2c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjBzdHVkZW50cyUyMGNyZWF0aXZlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MTgyNTQ5OXww&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "GRA 322", name: "UX Design Fundamentals" },
          { code: "GRA 494", name: "User Research Methods" },
          { code: "GRA 425", name: "Interaction Design" },
          { code: "GRA 484", name: "Portfolio Capstone" }
        ]
      },
      {
        name: "BS in Human Systems Engineering",
        school: "Ira A. Fulton Schools of Engineering",
        why: "Engineering approach to UX with strong emphasis on human factors, usability testing, and data-driven design.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-human-systems-engineering/",
        image_url: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMHN5c3RlbXMlMjBlbmdpbmVlcmluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxODI1NTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "HSE 210", name: "Intro to Human Systems" },
          { code: "HSE 420", name: "Usability Evaluation" },
          { code: "HSE 430", name: "Interface Design" },
          { code: "CSE 205", name: "Programming Concepts" }
        ]
      }
    ],
    skills: [
      { name: "Evaluating AI-Generated Designs", importance: 4, how_to_build: "GRA 322 critiques, design reviews", is_ai_skill: true },
      { name: "Prompt Engineering for Design Tools", importance: 3, how_to_build: "Self-directed exploration with Figma AI, Midjourney", is_ai_skill: true },
      { name: "User Research & Interviewing", importance: 5, how_to_build: "GRA 494, HSE 420", is_ai_skill: false },
      { name: "Wireframing & Prototyping (Figma)", importance: 5, how_to_build: "GRA 322, GRA 425", is_ai_skill: false },
      { name: "Visual Design & Typography", importance: 4, how_to_build: "Herberger studio courses", is_ai_skill: false },
      { name: "Accessibility (WCAG)", importance: 4, how_to_build: "HSE 430, online W3C resources", is_ai_skill: false },
      { name: "Design Systems Thinking", importance: 4, how_to_build: "GRA 425, industry case studies", is_ai_skill: false },
      { name: "Cross-Functional Collaboration", importance: 5, how_to_build: "Capstone projects, internships", is_ai_skill: false }
    ],
    experiences: [
      { icon: "laptop", title: "ASU Design Team", description: "Contribute to ASU's digital product redesigns through student-led design team.", link_text: "Apply via Herberger", link_url: "#" },
      { icon: "users", title: "AIGA Student Chapter", description: "Network with professional designers and attend portfolio reviews.", link_text: "Join on SunDevilSync", link_url: "#" },
      { icon: "award", title: "Google UX Certificate", description: "Earn industry-recognized credential through Coursera (free for ASU students).", link_text: "Access via Career Services", link_url: "#" },
      { icon: "briefcase", title: "UX Research Assistant Position", description: "Support faculty research on accessibility and inclusive design at Herberger Institute.", link_text: "Check Herberger job board", link_url: "#" }
    ],
    related_careers: [
      { title: "Software Engineer", median_salary: "$102,000", slug: "software-engineer" },
      { title: "Marketing Manager", median_salary: "$88,000", slug: "marketing-manager" },
      { title: "Data Analyst", median_salary: "$76,000", slug: "data-analyst" },
      { title: "Journalist/Reporter", median_salary: "$52,000", slug: "journalist-reporter" }
    ],
    at_a_glance: {
      education: "Bachelor's degree (Design, HCI, Psychology, or related)",
      years_to_entry: "0-2 years (portfolio more important than experience)",
      work_environment: "Office or remote, collaborative team settings",
      az_openings: "~420/year",
      data_source: "Bureau of Labor Statistics OEWS & Employment Projections (2024)"
    }
  },
  {
    career_title: "Software Engineer",
    slug: "software-engineer",
    field: "Technology",
    soc_code: "15-1252.00",
    salary_entry: "$68,000",
    salary_median: "$102,000",
    salary_top: "$162,000",
    growth_rate: "+22%",
    annual_openings: "19,400",
    asu_degree_count: 2,
    automation_risk_pct: 32,
    automation_explanation: "AI accelerates routine coding tasks and boilerplate generation, but architectural decisions, debugging complex systems, and understanding business context remain deeply human.",
    image_url: "https://images.unsplash.com/photo-1581091872370-1c203d690c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwY29kaW5nJTIwbGFwdG9wfGVufDF8fHx8MTc3MTY5NjIwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    day_in_life: [
      { time: "Morning", description: "Debug production issue where API timeouts spike during peak traffic — trace through logs and microservice dependencies to identify bottleneck.", highlight: true },
      { time: "Mid-AM", description: "Code review teammate's pull request, suggesting performance optimizations and catching potential edge case bugs.", highlight: false },
      { time: "Afternoon", description: "Implement new feature for user notification system using React and Node.js, writing unit tests and updating API documentation.", highlight: true },
      { time: "Late PM", description: "Pair programming session with senior engineer to refactor authentication module for better security and maintainability.", highlight: false },
      { time: "Evening", description: "Participate in sprint retrospective to discuss team velocity and technical debt, then research new database optimization strategies.", highlight: false }
    ],
    ai_uses_today: [
      "Use GitHub Copilot to autocomplete code and generate test cases",
      "Leverage ChatGPT to explain unfamiliar codebases and debug error messages",
      "Apply AI-powered code review tools to catch security vulnerabilities",
      "Use automated testing frameworks with ML-based failure prediction"
    ],
    ethical_dilemmas: [
      { title: "Security vs. Speed", question: "Your manager pressures you to skip security testing to meet a product deadline. Do you ship potentially vulnerable code or push back and risk being seen as 'not a team player'?" },
      { title: "Algorithmic Bias", question: "You discover your team's hiring algorithm penalizes resumes with 'women's college' names. Do you speak up knowing it could delay the product and frustrate stakeholders?" },
      { title: "Surveillance Features", question: "You're asked to build employee monitoring software that tracks keystrokes and screenshots. Is this ethical workplace software or invasive surveillance?" }
    ],
    degrees: [
      {
        name: "BS in Software Engineering",
        school: "Ira A. Fulton Schools of Engineering",
        why: "ABET-accredited program covering full software development lifecycle from requirements to deployment.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/software-engineering/",
        image_url: "https://images.unsplash.com/photo-1763568258752-fe55f4ab7267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29tcHV0ZXIlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NzE4MjU1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "CSE 205", name: "Object-Oriented Programming" },
          { code: "CSE 310", name: "Data Structures & Algorithms" },
          { code: "SER 315", name: "Software Design" },
          { code: "CSE 445", name: "Distributed Systems" }
        ]
      },
      {
        name: "BS in Computer Science",
        school: "Ira A. Fulton Schools of Engineering",
        why: "Strong theoretical foundations with flexibility to specialize in AI, cybersecurity, or systems programming.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-computer-science/",
        image_url: "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBjb2RpbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzcxODI1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "CSE 230", name: "Computer Organization" },
          { code: "CSE 340", name: "Programming Languages" },
          { code: "CSE 412", name: "Database Management" },
          { code: "CSE 465", name: "Software Verification" }
        ]
      }
    ],
    skills: [
      { name: "Prompt Engineering for Code Generation", importance: 4, how_to_build: "CSE 205, hands-on AI tool usage", is_ai_skill: true },
      { name: "Evaluating AI-Generated Code Quality", importance: 5, how_to_build: "SER 315, CSE 465 testing labs", is_ai_skill: true },
      { name: "Data Structures & Algorithms", importance: 5, how_to_build: "CSE 310", is_ai_skill: false },
      { name: "Full-Stack Development (React, Node, Python)", importance: 5, how_to_build: "CSE 205, SER 315, personal projects", is_ai_skill: false },
      { name: "Version Control (Git)", importance: 5, how_to_build: "All CSE courses, open source contributions", is_ai_skill: false },
      { name: "System Design & Architecture", importance: 4, how_to_build: "CSE 445, capstone project", is_ai_skill: false },
      { name: "Testing & Debugging", importance: 5, how_to_build: "CSE 465, internships", is_ai_skill: false },
      { name: "Agile/Scrum Methodology", importance: 4, how_to_build: "SER 315, industry internships", is_ai_skill: false }
    ],
    experiences: [
      { icon: "code", title: "Open Source Contribution", description: "Contribute to ASU-affiliated or public open source projects to build portfolio.", link_text: "Explore GitHub repos", link_url: "#" },
      { icon: "trophy", title: "Hackathons (SunHacks)", description: "Annual ASU hackathon where students build projects in 24 hours with industry mentors.", link_text: "Register at sunhacks.io", link_url: "#" },
      { icon: "briefcase", title: "ASU Software Factory", description: "Work on real client projects while earning academic credit.", link_text: "Apply via Fulton Advising", link_url: "#" },
      { icon: "users", title: "Software Developers Association", description: "Attend tech talks from industry leaders and participate in coding workshops.", link_text: "Join on SunDevilSync", link_url: "#" }
    ],
    related_careers: [
      { title: "Cybersecurity Analyst", median_salary: "$94,000", slug: "cybersecurity-analyst" },
      { title: "Data Analyst", median_salary: "$76,000", slug: "data-analyst" },
      { title: "UX Designer", median_salary: "$72,000", slug: "ux-designer" },
      { title: "Environmental Scientist", median_salary: "$73,000", slug: "environmental-scientist" }
    ],
    at_a_glance: {
      education: "Bachelor's degree (CS, Software Engineering, or related)",
      years_to_entry: "0-1 years (internships highly valued)",
      work_environment: "Office, remote, or hybrid; collaborative and fast-paced",
      az_openings: "~1,250/year",
      data_source: "Bureau of Labor Statistics OEWS & Employment Projections (2024)"
    }
  },
  {
    career_title: "Registered Nurse",
    slug: "registered-nurse",
    field: "Health & Nursing",
    soc_code: "29-1141.00",
    salary_entry: "$58,000",
    salary_median: "$77,000",
    salary_top: "$106,000",
    growth_rate: "+6%",
    annual_openings: "34,500",
    asu_degree_count: 2,
    automation_risk_pct: 18,
    automation_explanation: "AI supports diagnostic decision-making and automates charting, but hands-on patient care, empathetic communication, and crisis response require human presence and judgment.",
    image_url: "https://images.unsplash.com/photo-1633488781325-d36e6818d0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWdpc3RlcmVkJTIwbnVyc2UlMjBob3NwaXRhbCUyMHBhdGllbnQlMjBjYXJlfGVufDF8fHx8MTc3MTcwMDcyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    day_in_life: [
      { time: "Morning", description: "Receive shift handoff for six patients, review overnight vitals and medication schedules, prioritize care based on acuity levels.", highlight: true },
      { time: "Mid-AM", description: "Administer medications, start IV for dehydrated patient, educate post-surgery patient on wound care and pain management expectations.", highlight: false },
      { time: "Afternoon", description: "Respond to rapid deterioration alert — patient's oxygen saturation dropping — assess situation, notify physician, coordinate respiratory therapy.", highlight: true },
      { time: "Late PM", description: "Document patient assessments in EHR, communicate care plan updates to incoming night shift, comfort anxious family members.", highlight: false },
      { time: "Evening", description: "Attend continuing education webinar on sepsis recognition protocols and update personal nursing certifications for license renewal.", highlight: false }
    ],
    ai_uses_today: [
      "Use AI-powered early warning systems to predict patient deterioration (e.g., sepsis risk scores)",
      "Leverage ambient AI scribes to auto-document patient interactions",
      "Apply clinical decision support tools that flag drug interactions and suggest evidence-based protocols",
      "Use predictive analytics to optimize nurse staffing and patient flow"
    ],
    ethical_dilemmas: [
      { title: "Resource Rationing", question: "During a COVID surge, you have one ICU bed left and two critical patients. How do you decide who gets life-saving care when protocols conflict with your moral intuition?" },
      { title: "AI vs. Clinical Judgment", question: "An AI alert says a patient is low-risk, but your gut says something's wrong. Do you trust the algorithm or escalate based on experience, risking being wrong?" },
      { title: "End-of-Life Wishes", question: "A patient's family demands aggressive treatment against the patient's documented DNR wishes. How do you advocate for patient autonomy while supporting a grieving family?" }
    ],
    degrees: [
      {
        name: "BSN - Bachelor of Science in Nursing",
        school: "Edson College of Nursing and Health Innovation",
        why: "Hands-on clinical training, simulation labs, and direct path to RN licensure with leadership preparation.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-nursing/",
        image_url: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudHMlMjBoZWFsdGhjYXJlJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzcxODI1NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "NUR 301", name: "Health Assessment" },
          { code: "NUR 324", name: "Pathophysiology" },
          { code: "NUR 345", name: "Pharmacology" },
          { code: "NUR 415", name: "Critical Care Nursing" }
        ]
      },
      {
        name: "RN to BSN (Accelerated)",
        school: "Edson College of Nursing and Health Innovation",
        why: "For students who already hold an RN license from a community college or diploma program.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-nursing-rn-bsn/",
        image_url: "https://images.unsplash.com/photo-1770922807970-e0515cd0f7c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwZWR1Y2F0aW9uJTIwbWVkaWNhbCUyMHNjaG9vbHxlbnwxfHx8fDE3NzE4MjU1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "NUR 355", name: "Nursing Leadership" },
          { code: "NUR 445", name: "Evidence-Based Practice" },
          { code: "NUR 465", name: "Population Health" },
          { code: "NUR 480", name: "Nursing Informatics" }
        ]
      }
    ],
    skills: [
      { name: "Interpreting AI Clinical Alerts", importance: 4, how_to_build: "NUR 415, NUR 480 case simulations", is_ai_skill: true },
      { name: "Evaluating AI Diagnostic Suggestions", importance: 4, how_to_build: "NUR 324, clinical rotations", is_ai_skill: true },
      { name: "Patient Assessment & Vitals", importance: 5, how_to_build: "NUR 301, simulation lab practice", is_ai_skill: false },
      { name: "Medication Administration", importance: 5, how_to_build: "NUR 345, clinical rotations", is_ai_skill: false },
      { name: "IV Therapy & Wound Care", importance: 5, how_to_build: "Clinical rotations, skills lab", is_ai_skill: false },
      { name: "Electronic Health Records (EPIC)", importance: 4, how_to_build: "NUR 480, hospital internships", is_ai_skill: false },
      { name: "Empathetic Communication", importance: 5, how_to_build: "All nursing courses, patient interactions", is_ai_skill: false },
      { name: "Crisis Response & Triage", importance: 5, how_to_build: "NUR 415, emergency department rotations", is_ai_skill: false }
    ],
    experiences: [
      { icon: "heart", title: "ASU Health Clinic Volunteer", description: "Shadow nurses and gain patient interaction experience at campus health services.", link_text: "Apply via Edson Advising", link_url: "#" },
      { icon: "users", title: "Student Nurses' Association", description: "Network with nursing professionals and attend continuing education events.", link_text: "Join on SunDevilSync", link_url: "#" },
      { icon: "award", title: "Clinical Rotations", description: "500+ hours of supervised practice in hospitals, clinics, and community health settings.", link_text: "Included in BSN curriculum", link_url: "#" },
      { icon: "briefcase", title: "Banner Health Student Externship", description: "Summer externship program offering hands-on clinical experience with preceptor mentorship.", link_text: "Apply via Career Services", link_url: "#" }
    ],
    related_careers: [
      { title: "Physician Assistant", median_salary: "$108,000", slug: "physician-assistant" },
      { title: "Social Worker", median_salary: "$58,000", slug: "social-worker" },
      { title: "K-12 Teacher", median_salary: "$61,000", slug: "k12-teacher" },
      { title: "Environmental Scientist", median_salary: "$73,000", slug: "environmental-scientist" }
    ],
    at_a_glance: {
      education: "Bachelor of Science in Nursing (BSN) + RN license",
      years_to_entry: "0 years (immediate upon licensure)",
      work_environment: "Hospitals, clinics, schools, home health (rotating shifts common)",
      az_openings: "~2,100/year",
      data_source: "Bureau of Labor Statistics OEWS & Employment Projections (2024)"
    }
  },
  {
    career_title: "K-12 Teacher",
    slug: "k12-teacher",
    field: "Education",
    soc_code: "25-2021.00",
    salary_entry: "$42,000",
    salary_median: "$61,000",
    salary_top: "$88,000",
    growth_rate: "+4%",
    annual_openings: "15,200",
    asu_degree_count: 2,
    automation_risk_pct: 22,
    automation_explanation: "AI can personalize lesson content and automate grading, but building relationships, managing classrooms, and inspiring curiosity require human connection and adaptability.",
    image_url: "https://images.unsplash.com/photo-1758270704925-fa59d93119c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tJTIwc3R1ZGVudHMlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzE1OTEwNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    day_in_life: [
      { time: "Morning", description: "Welcome 28 third-graders, take attendance, facilitate morning meeting where students share emotions and set daily goals.", highlight: false },
      { time: "Mid-AM", description: "Teach guided math lesson on fractions using manipulatives, circulate to check understanding, provide one-on-one support to struggling learners.", highlight: true },
      { time: "Afternoon", description: "Mediate conflict between two students during recess, help them practice communication skills and problem-solving strategies.", highlight: true },
      { time: "Late PM", description: "Review student work samples, update lesson plans based on formative assessment data, respond to parent emails about upcoming field trip.", highlight: false },
      { time: "Evening", description: "Attend IEP meeting with parents and special education team to develop individualized learning plan for student with reading challenges.", highlight: false }
    ],
    ai_uses_today: [
      "Use AI-powered platforms like Khan Academy for personalized math practice",
      "Leverage ChatGPT to generate differentiated reading comprehension questions",
      "Apply Grammarly and other AI writing assistants to provide faster feedback on essays",
      "Use automated attendance and behavior tracking tools to identify patterns"
    ],
    ethical_dilemmas: [
      { title: "AI Cheating Detection", question: "You suspect a student used ChatGPT to write their essay, but you can't prove it. Do you confront them and risk damaging trust, or ignore it and enable academic dishonesty?" },
      { title: "Data Privacy vs. Innovation", question: "An AI platform promises to boost student outcomes but requires uploading sensitive student data to a third-party server. Do you adopt the tool or protect privacy?" },
      { title: "Teaching to the Algorithm", question: "Your school uses AI to evaluate teacher effectiveness based on standardized test scores. Do you teach to the test to protect your job, or prioritize holistic student development?" }
    ],
    degrees: [
      {
        name: "BS in Elementary Education",
        school: "Mary Lou Fulton Teachers College",
        why: "State-approved program leading directly to Arizona teaching certification with extensive classroom field experience.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-elementary-education/",
        image_url: "https://images.unsplash.com/photo-1740635341299-3b8e3490f546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVtZW50YXJ5JTIwZWR1Y2F0aW9uJTIwdGVhY2hlciUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzE4MjU1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "EED 301", name: "Learning Environments" },
          { code: "EED 411", name: "Literacy Instruction" },
          { code: "EED 433", name: "Math Methods K-8" },
          { code: "EED 480", name: "Student Teaching" }
        ]
      },
      {
        name: "BS in Secondary Education (Math, Science, English, History)",
        school: "Mary Lou Fulton Teachers College",
        why: "Combine subject-area expertise with pedagogical training for grades 6-12 teaching.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-secondary-education/",
        image_url: "https://images.unsplash.com/photo-1566827886031-7d0f288f76ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWNvbmRhcnklMjBlZHVjYXRpb24lMjB0ZWFjaGluZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MTgyNTUwNXww&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "SED 301", name: "Adolescent Development" },
          { code: "SED 425", name: "Curriculum Design" },
          { code: "SED 443", name: "Assessment Strategies" },
          { code: "SED 484", name: "Clinical Teaching" }
        ]
      }
    ],
    skills: [
      { name: "Evaluating AI-Generated Lesson Content", importance: 4, how_to_build: "EED 411, SED 425 assignments", is_ai_skill: true },
      { name: "Teaching Students to Use AI Ethically", importance: 4, how_to_build: "MLFTC workshops, digital literacy courses", is_ai_skill: true },
      { name: "Classroom Management", importance: 5, how_to_build: "EED 301, student teaching placements", is_ai_skill: false },
      { name: "Differentiated Instruction", importance: 5, how_to_build: "EED 411, SED 425", is_ai_skill: false },
      { name: "Culturally Responsive Teaching", importance: 5, how_to_build: "MLFTC core courses, field experience in diverse schools", is_ai_skill: false },
      { name: "Formative Assessment", importance: 5, how_to_build: "SED 443, practicum observations", is_ai_skill: false },
      { name: "Parent/Guardian Communication", importance: 4, how_to_build: "Student teaching, professional development", is_ai_skill: false },
      { name: "Social-Emotional Learning Facilitation", importance: 4, how_to_build: "EED 301, trauma-informed teaching workshops", is_ai_skill: false }
    ],
    experiences: [
      { icon: "book", title: "Classroom Field Experience (300+ hours)", description: "Observe and assist veteran teachers in diverse K-12 settings before student teaching.", link_text: "Required in degree program", link_url: "#" },
      { icon: "users", title: "Kappa Delta Pi Honor Society", description: "Education honor society offering networking and professional development.", link_text: "Join via MLFTC", link_url: "#" },
      { icon: "globe", title: "Teach for America Partnership", description: "ASU partners with TFA for accelerated certification pathways and leadership development.", link_text: "Learn more at Career Services", link_url: "#" },
      { icon: "heart", title: "ASU Summer Literacy Program", description: "Tutor K-3 students in reading and writing during summer enrichment programs.", link_text: "Apply via MLFTC", link_url: "#" }
    ],
    related_careers: [
      { title: "Social Worker", median_salary: "$58,000", slug: "social-worker" },
      { title: "Registered Nurse", median_salary: "$77,000", slug: "registered-nurse" },
      { title: "Marketing Manager", median_salary: "$88,000", slug: "marketing-manager" },
      { title: "Journalist/Reporter", median_salary: "$52,000", slug: "journalist-reporter" }
    ],
    at_a_glance: {
      education: "Bachelor's degree in Education + state teaching certification",
      years_to_entry: "0 years (certification allows immediate employment)",
      work_environment: "K-12 schools, standard school hours with planning time outside class",
      az_openings: "~1,400/year (chronic shortage in AZ)",
      data_source: "Bureau of Labor Statistics OEWS & Employment Projections (2024)"
    }
  },
  {
    career_title: "Financial Analyst",
    slug: "financial-analyst",
    field: "Business",
    soc_code: "13-2051.00",
    salary_entry: "$54,000",
    salary_median: "$74,000",
    salary_top: "$112,000",
    growth_rate: "+8%",
    annual_openings: "10,500",
    asu_degree_count: 2,
    automation_risk_pct: 38,
    automation_explanation: "AI automates financial modeling and trend detection, but interpreting market context, advising stakeholders, and strategic forecasting require human expertise.",
    image_url: "https://images.unsplash.com/photo-1618044733300-9472054094ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhbmFseXN0JTIwYnVzaW5lc3MlMjBjaGFydHN8ZW58MXx8fHwxNzcxNjA1Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    day_in_life: [
      { time: "Morning", description: "Review quarterly earnings reports from competitors and macroeconomic indicators to update financial models for strategic planning meeting.", highlight: true },
      { time: "Mid-AM", description: "Build Excel models to forecast next year's revenue based on sales pipeline, market trends, and historical seasonality patterns.", highlight: false },
      { time: "Afternoon", description: "Present investment recommendation to CFO and board — defend valuation assumptions and risk assessment under questioning.", highlight: true },
      { time: "Late PM", description: "Collaborate with accounting to reconcile budget variances and investigate why marketing spend exceeded projections by 12%.", highlight: false },
      { time: "Evening", description: "Attend industry conference session on emerging ESG investing trends and network with peer financial analysts from other firms.", highlight: false }
    ],
    ai_uses_today: [
      "Use Bloomberg Terminal's AI-powered analytics for real-time market insights",
      "Leverage Excel Copilot to generate pivot tables and forecast models",
      "Apply machine learning algorithms for credit risk scoring and fraud detection",
      "Use ChatGPT to draft financial summary reports and investor memos"
    ],
    ethical_dilemmas: [
      { title: "Optimistic Projections", question: "Your CEO wants aggressive growth forecasts to attract investors, but your analysis shows conservative numbers are realistic. Do you inflate projections to appease leadership?" },
      { title: "Insider Information", question: "You overhear news about an upcoming merger at a client dinner. Trading on this would be profitable but illegal. How do you navigate the gray zone of market information?" },
      { title: "ESG vs. Profit", question: "A high-return investment involves a company with poor environmental practices. Do you recommend it based purely on financials, or factor in sustainability concerns?" }
    ],
    degrees: [
      {
        name: "BS in Finance",
        school: "W. P. Carey School of Business",
        why: "CFA Institute-aligned curriculum with Bloomberg Terminal training and corporate finance focus.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-finance/",
        image_url: "https://images.unsplash.com/photo-1758518726609-c551f858cd5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzcxODE4ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "FIN 300", name: "Fundamentals of Finance" },
          { code: "FIN 421", name: "Investment Analysis" },
          { code: "FIN 425", name: "Financial Modeling" },
          { code: "FIN 461", name: "Corporate Finance" }
        ]
      },
      {
        name: "BS in Economics (Finance Track)",
        school: "W. P. Carey School of Business",
        why: "Strong quantitative and theoretical foundation for students interested in econometrics and policy analysis.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-economics/",
        image_url: "https://images.unsplash.com/photo-1736751035793-353baaa416cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29ub21pY3MlMjBjaGFydHMlMjBncmFwaHMlMjBhbmFseXNpc3xlbnwxfHx8fDE3NzE4MjU1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "ECN 306", name: "Microeconomics" },
          { code: "ECN 410", name: "Econometrics" },
          { code: "FIN 300", name: "Finance Fundamentals" },
          { code: "ECN 460", name: "Financial Economics" }
        ]
      }
    ],
    skills: [
      { name: "Prompt Engineering for Financial Analysis", importance: 4, how_to_build: "FIN 425, self-directed AI tool practice", is_ai_skill: true },
      { name: "Validating AI-Generated Forecasts", importance: 5, how_to_build: "ECN 410, FIN 421 case studies", is_ai_skill: true },
      { name: "Financial Modeling (Excel, Python)", importance: 5, how_to_build: "FIN 425, ECN 410", is_ai_skill: false },
      { name: "Valuation & Investment Analysis", importance: 5, how_to_build: "FIN 421, CFA prep courses", is_ai_skill: false },
      { name: "Accounting Fundamentals", importance: 4, how_to_build: "ACC 231, ACC 241", is_ai_skill: false },
      { name: "Data Visualization (Tableau)", importance: 4, how_to_build: "W. P. Carey analytics courses", is_ai_skill: false },
      { name: "Written & Verbal Communication", importance: 5, how_to_build: "Business core courses, presentations", is_ai_skill: false },
      { name: "Critical Thinking & Scenario Analysis", importance: 5, how_to_build: "FIN 461, case competitions", is_ai_skill: false }
    ],
    experiences: [
      { icon: "briefcase", title: "ASU Financial Planning Club", description: "Compete in case competitions and network with finance professionals.", link_text: "Join on SunDevilSync", link_url: "#" },
      { icon: "award", title: "Bloomberg Market Concepts Certification", description: "Free certification for W. P. Carey students via Bloomberg Terminal access.", link_text: "Schedule via McCord Hall", link_url: "#" },
      { icon: "trophy", title: "CFA Institute Research Challenge", description: "Team-based stock pitch competition with real companies and investor judging.", link_text: "Apply via FIN faculty", link_url: "#" },
      { icon: "laptop", title: "Investment Banking Workshop Series", description: "Learn financial modeling, valuation, and M&A analysis from industry practitioners.", link_text: "Register via W. P. Carey", link_url: "#" }
    ],
    related_careers: [
      { title: "Data Analyst", median_salary: "$76,000", slug: "data-analyst" },
      { title: "Marketing Manager", median_salary: "$88,000", slug: "marketing-manager" },
      { title: "Software Engineer", median_salary: "$102,000", slug: "software-engineer" },
      { title: "Cybersecurity Analyst", median_salary: "$94,000", slug: "cybersecurity-analyst" }
    ],
    at_a_glance: {
      education: "Bachelor's degree in Finance, Economics, or related field",
      years_to_entry: "0-2 years (internships critical for entry)",
      work_environment: "Office, hybrid common, fast-paced and deadline-driven",
      az_openings: "~680/year",
      data_source: "Bureau of Labor Statistics OEWS & Employment Projections (2024)"
    }
  },
  {
    career_title: "Marketing Manager",
    slug: "marketing-manager",
    field: "Business",
    soc_code: "11-2021.00",
    salary_entry: "$52,000",
    salary_median: "$85,000",
    salary_top: "$142,000",
    growth_rate: "+8%",
    annual_openings: "8,900",
    asu_degree_count: 2,
    automation_risk_pct: 42,
    automation_explanation: "AI automates content generation, ad targeting, and performance tracking, but brand strategy, creative direction, and stakeholder influence require human intuition and persuasion.",
    image_url: "https://images.unsplash.com/photo-1630673582795-9781bc41b1a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBtYW5hZ2VyJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcxNzAwNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    day_in_life: [
      { time: "Morning", description: "Review campaign performance dashboards — email open rates up 12%, but social engagement declining. Brainstorm pivot strategies with creative team.", highlight: true },
      { time: "Mid-AM", description: "Lead brand positioning workshop with product and sales teams to align messaging for Q2 product launch.", highlight: false },
      { time: "Afternoon", description: "Present marketing budget proposal to VP, defending $120k influencer partnership investment with ROI projections and competitor analysis.", highlight: true },
      { time: "Late PM", description: "Review AI-generated ad copy variations, select final creative assets, and coordinate with media buyer on channel strategy.", highlight: false },
      { time: "Evening", description: "Monitor product launch campaign metrics in real-time and conduct A/B testing on landing page variations to optimize conversion rates.", highlight: false }
    ],
    ai_uses_today: [
      "Use ChatGPT and Jasper to draft blog posts, social media captions, and email campaigns",
      "Leverage Persado and Phrasee for AI-optimized subject lines and CTAs",
      "Apply predictive analytics tools to forecast campaign performance and customer lifetime value",
      "Use Canva's AI design tools and Midjourney for rapid visual prototyping"
    ],
    ethical_dilemmas: [
      { title: "Manipulative Targeting", question: "Your AI tool identifies that anxious, low-income users are most likely to impulse-buy your product. Do you target them aggressively, or is this exploitative?" },
      { title: "Greenwashing", question: "Your company wants to market a product as 'eco-friendly' based on minimal changes. Do you create the campaign, or push back on misleading sustainability claims?" },
      { title: "User Data Privacy", question: "A third-party data broker offers detailed consumer profiles that would boost conversions. Do you use it, even if users didn't consent to this level of tracking?" }
    ],
    degrees: [
      {
        name: "BS in Marketing",
        school: "W. P. Carey School of Business",
        why: "Blend strategic marketing theory with hands-on campaign experience and industry certifications.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-marketing/",
        image_url: "https://images.unsplash.com/photo-1661286178389-e067299f907e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBkaWdpdGFsJTIwc3RyYXRlZ3klMjBidXNpbmVzc3xlbnwxfHx8fDE3NzE4MjU1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "MKT 300", name: "Marketing Principles" },
          { code: "MKT 425", name: "Digital Marketing" },
          { code: "MKT 440", name: "Consumer Behavior" },
          { code: "MKT 461", name: "Brand Management" }
        ]
      },
      {
        name: "BA in Communication (Strategic Communication)",
        school: "Hugh Downs School of Human Communication",
        why: "Emphasis on storytelling, media strategy, and persuasive communication for PR and content roles.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-arts-communication/",
        image_url: "https://images.unsplash.com/photo-1760895653496-b28ed02f3705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pY2F0aW9uJTIwbWVkaWElMjBicm9hZGNhc3QlMjBzdHVkaW98ZW58MXx8fHwxNzcxODI1NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "COM 316", name: "Persuasive Communication" },
          { code: "COM 408", name: "Social Media Strategy" },
          { code: "COM 425", name: "Public Relations Campaigns" },
          { code: "COM 484", name: "Crisis Communication" }
        ]
      }
    ],
    skills: [
      { name: "Prompt Engineering for Marketing Copy", importance: 4, how_to_build: "MKT 425, hands-on AI writing tools", is_ai_skill: true },
      { name: "Evaluating AI-Generated Content", importance: 5, how_to_build: "MKT 461, COM 316 critical analysis", is_ai_skill: true },
      { name: "Marketing Strategy & Positioning", importance: 5, how_to_build: "MKT 300, MKT 461", is_ai_skill: false },
      { name: "Digital Marketing (SEO, SEM, Social)", importance: 5, how_to_build: "MKT 425, Google Ads certifications", is_ai_skill: false },
      { name: "Data Analytics (Google Analytics, Tableau)", importance: 4, how_to_build: "MKT 425, W. P. Carey analytics courses", is_ai_skill: false },
      { name: "Content Creation & Copywriting", importance: 5, how_to_build: "COM 408, personal blog/portfolio", is_ai_skill: false },
      { name: "Project Management", importance: 4, how_to_build: "Capstone projects, internships", is_ai_skill: false },
      { name: "Cross-Functional Collaboration", importance: 5, how_to_build: "MKT 461 group projects, industry experience", is_ai_skill: false }
    ],
    experiences: [
      { icon: "megaphone", title: "ASU Marketing Association", description: "Network with CMOs and compete in AMA case competitions.", link_text: "Join on SunDevilSync", link_url: "#" },
      { icon: "award", title: "Google Analytics & Ads Certifications", description: "Free industry credentials through Google Skillshop.", link_text: "Self-paced via Google", link_url: "#" },
      { icon: "briefcase", title: "ASU Local Marketing Internships", description: "Gain experience with Phoenix-area startups and agencies through Career Services.", link_text: "Browse Handshake", link_url: "#" },
      { icon: "users", title: "Digital Marketing Lab", description: "Run real social media campaigns for local nonprofits and analyze performance metrics.", link_text: "Apply via MKT department", link_url: "#" }
    ],
    related_careers: [
      { title: "Data Analyst", median_salary: "$76,000", slug: "data-analyst" },
      { title: "Financial Analyst", median_salary: "$74,000", slug: "financial-analyst" },
      { title: "UX Designer", median_salary: "$72,000", slug: "ux-designer" },
      { title: "Journalist/Reporter", median_salary: "$52,000", slug: "journalist-reporter" }
    ],
    at_a_glance: {
      education: "Bachelor's degree in Marketing, Communications, or related field",
      years_to_entry: "2-5 years (entry-level roles: coordinator, specialist)",
      work_environment: "Office or remote, creative and collaborative, deadline-driven",
      az_openings: "~580/year",
      data_source: "Bureau of Labor Statistics OEWS & Employment Projections (2024)"
    }
  },
  {
    career_title: "Social Worker",
    slug: "social-worker",
    field: "Social Sciences",
    soc_code: "21-1021.00",
    salary_entry: "$42,000",
    salary_median: "$58,000",
    salary_top: "$82,000",
    growth_rate: "+9%",
    annual_openings: "9,200",
    asu_degree_count: 2,
    automation_risk_pct: 12,
    automation_explanation: "AI can assist with case documentation and risk screening, but trauma-informed care, crisis intervention, and advocacy fundamentally require human empathy and relational trust.",
    image_url: "https://images.unsplash.com/photo-1678940807631-19344efc1349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjB3b3JrZXIlMjBjb3Vuc2VsaW5nJTIwaGVscGluZ3xlbnwxfHx8fDE3NzE3MDA3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    day_in_life: [
      { time: "Morning", description: "Meet with 16-year-old in foster care to develop independent living skills plan — discuss budgeting, job search, and housing options after aging out.", highlight: true },
      { time: "Mid-AM", description: "Conduct home visit to assess safety for child welfare case, interview parents, observe home environment, coordinate with caseworker and therapist.", highlight: false },
      { time: "Afternoon", description: "Testify in family court about reunification recommendation, present evidence and advocate for child's best interests under cross-examination.", highlight: true },
      { time: "Late PM", description: "Update case notes in state database, connect client with emergency housing resources, debrief with supervisor about secondary trauma self-care.", highlight: false },
      { time: "Evening", description: "Attend community coalition meeting to advocate for policy changes addressing affordable housing shortage and mental health service gaps.", highlight: false }
    ],
    ai_uses_today: [
      "Use predictive risk assessment tools to identify families at high risk of child maltreatment",
      "Leverage AI-powered transcription for session notes and case documentation",
      "Apply sentiment analysis to flag concerning language in client communications",
      "Use resource-matching platforms that AI-recommend services based on client needs"
    ],
    ethical_dilemmas: [
      { title: "Predictive Algorithms & Bias", question: "An AI tool flags a family as 'high-risk' for child abuse, but you see no concrete evidence and the algorithm may reflect racial bias. Do you investigate aggressively or trust your judgment?" },
      { title: "Mandated Reporting vs. Client Trust", question: "A client discloses minor marijuana use while working hard on recovery. You're legally required to report, but doing so could derail their progress and damage therapeutic relationship. What do you do?" },
      { title: "Systemic Harm vs. Individual Help", question: "You work in a system you believe perpetuates harm (e.g., over-policing, family separation). Do you stay and try to help individuals, or leave and advocate for broader reform?" }
    ],
    degrees: [
      {
        name: "BSW - Bachelor of Social Work",
        school: "Watts College of Public Service and Community Solutions",
        why: "Accredited program leading to social work licensure with 450+ hours of field placement.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-social-work/",
        image_url: "https://images.unsplash.com/photo-1690192435053-387a893ba6fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjB3b3JrJTIwY291bnNlbGluZyUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzE4MjU1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "SWG 310", name: "Human Behavior & Social Environment" },
          { code: "SWG 411", name: "Social Work Practice with Individuals" },
          { code: "SWG 430", name: "Social Welfare Policy" },
          { code: "SWG 484", name: "Field Practicum (400+ hours)" }
        ]
      },
      {
        name: "BA in Psychology (Human Services Track)",
        school: "College of Liberal Arts and Sciences",
        why: "Foundation for MSW programs or direct service roles in community mental health.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-arts-psychology/",
        image_url: "https://images.unsplash.com/photo-1741945119955-2e15bf594882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaG9sb2d5JTIwaHVtYW4lMjBzZXJ2aWNlcyUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MTgyNTUxMHww&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "PSY 341", name: "Developmental Psychology" },
          { code: "PSY 366", name: "Abnormal Psychology" },
          { code: "PSY 408", name: "Community Psychology" },
          { code: "PSY 484", name: "Internship in Human Services" }
        ]
      }
    ],
    skills: [
      { name: "Evaluating AI Risk Assessment Tools", importance: 4, how_to_build: "SWG 430 policy analysis, critical thinking seminars", is_ai_skill: true },
      { name: "Using AI Documentation Ethically", importance: 3, how_to_build: "SWG 411, HIPAA training", is_ai_skill: true },
      { name: "Trauma-Informed Care", importance: 5, how_to_build: "SWG 310, SWG 411, field practicum", is_ai_skill: false },
      { name: "Crisis Intervention", importance: 5, how_to_build: "SWG 411, simulation training", is_ai_skill: false },
      { name: "Case Management & Documentation", importance: 5, how_to_build: "SWG 484 field placement", is_ai_skill: false },
      { name: "Cultural Competency", importance: 5, how_to_build: "Watts College diversity courses, community partnerships", is_ai_skill: false },
      { name: "Advocacy & Policy Analysis", importance: 4, how_to_build: "SWG 430, legislative internships", is_ai_skill: false },
      { name: "Active Listening & Empathy", importance: 5, how_to_build: "All social work practice courses, supervision", is_ai_skill: false }
    ],
    experiences: [
      { icon: "heart", title: "Field Practicum (400+ hours)", description: "Supervised practice in child welfare, mental health, schools, or community agencies.", link_text: "Required in BSW program", link_url: "#" },
      { icon: "users", title: "NASW Student Chapter", description: "Join National Association of Social Workers for professional development and networking.", link_text: "Via Watts College", link_url: "#" },
      { icon: "award", title: "Crisis Text Line Volunteer", description: "Train as crisis counselor and gain real-world experience supporting people in distress.", link_text: "Apply at crisistextline.org", link_url: "#" },
      { icon: "globe", title: "Community Outreach Programs", description: "Partner with Phoenix community centers to provide resources and support services.", link_text: "Coordinate via Watts College", link_url: "#" }
    ],
    related_careers: [
      { title: "Registered Nurse", median_salary: "$77,000", slug: "registered-nurse" },
      { title: "K-12 Teacher", median_salary: "$61,000", slug: "k12-teacher" },
      { title: "Physician Assistant", median_salary: "$108,000", slug: "physician-assistant" },
      { title: "Environmental Scientist", median_salary: "$73,000", slug: "environmental-scientist" }
    ],
    at_a_glance: {
      education: "BSW required for licensure (MSW for clinical roles)",
      years_to_entry: "0 years (BSW allows immediate licensure eligibility)",
      work_environment: "Offices, schools, hospitals, clients' homes, courts (emotionally demanding)",
      az_openings: "~720/year (high demand, high turnover)",
      data_source: "Bureau of Labor Statistics OEWS & Employment Projections (2024)"
    }
  },
  {
    career_title: "Cybersecurity Analyst",
    slug: "cybersecurity-analyst",
    field: "Technology",
    soc_code: "15-1212.00",
    salary_entry: "$62,000",
    salary_median: "$94,000",
    salary_top: "$142,000",
    growth_rate: "+35%",
    annual_openings: "6,200",
    asu_degree_count: 2,
    automation_risk_pct: 30,
    automation_explanation: "AI automates threat detection and response, but investigating sophisticated attacks, understanding adversary tactics, and making security policy decisions require human expertise.",
    image_url: "https://images.unsplash.com/photo-1662638600476-d563fffbb072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwYW5hbHlzdCUyMHNlY3VyaXR5JTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NzE3MDA3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    day_in_life: [
      { time: "Morning", description: "Review overnight security alerts from SIEM — investigate suspicious login attempts from Eastern Europe, determine if incident or false positive.", highlight: true },
      { time: "Mid-AM", description: "Conduct vulnerability scan of new web application before production deployment, identify SQL injection risk, brief development team on remediation.", highlight: false },
      { time: "Afternoon", description: "Respond to ransomware attack simulation (tabletop exercise) with IT leadership — practice incident response protocols and communication strategies.", highlight: true },
      { time: "Late PM", description: "Update firewall rules to block newly identified malicious IP ranges, document threat intelligence findings, share IOCs with industry peers.", highlight: false },
      { time: "Evening", description: "Complete CISSP continuing education modules on zero-trust architecture and review latest NIST cybersecurity framework updates.", highlight: false }
    ],
    ai_uses_today: [
      "Use AI-powered SIEM tools (Splunk, Darktrace) for anomaly detection and automated threat hunting",
      "Leverage machine learning models to identify phishing emails and malware signatures",
      "Apply AI-driven vulnerability scanners to prioritize patching based on exploit likelihood",
      "Use ChatGPT to draft incident response reports and security awareness training content"
    ],
    ethical_dilemmas: [
      { title: "Offensive vs. Defensive Security", question: "Your employer wants you to develop offensive capabilities to 'hack back' against attackers. Is this ethical self-defense or illegal vigilantism that escalates cyber conflict?" },
      { title: "Zero-Day Disclosure", question: "You discover a critical vulnerability in widely-used software. Do you disclose publicly to protect users, tell the vendor privately (risking slow patching), or sell to a government buyer?" },
      { title: "Surveillance Tech", question: "You're asked to implement employee monitoring tools that track keystrokes and emails. Is this reasonable security or invasive surveillance?" }
    ],
    degrees: [
      {
        name: "BS in Cybersecurity",
        school: "Ira A. Fulton Schools of Engineering",
        why: "Technical program covering networking, cryptography, penetration testing, and security operations.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-cybersecurity/",
        image_url: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE4MjU1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "CSE 365", name: "Information Assurance" },
          { code: "CSE 466", name: "Computer Systems Security" },
          { code: "CSE 469", name: "Secure Coding" },
          { code: "CSE 543", name: "Applied Cryptography" }
        ]
      },
      {
        name: "BS in Information Technology (Security Concentration)",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-information-technology/",
        image_url: "https://images.unsplash.com/photo-1595134334453-46c042d486f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZvcm1hdGlvbiUyMHRlY2hub2xvZ3klMjBzZXJ2ZXIlMjByb29tfGVufDF8fHx8MTc3MTgyNTUxMXww&ixlib=rb-4.1.0&q=80&w=1080",
        school: "Ira A. Fulton Schools of Engineering",
        why: "Applied focus on security administration, compliance, and incident response for enterprise environments.",
        courses: [
          { code: "IFT 201", name: "Intro to IT Security" },
          { code: "IFT 410", name: "Network Security" },
          { code: "IFT 450", name: "Cybersecurity Operations" },
          { code: "IFT 484", name: "Security Capstone" }
        ]
      }
    ],
    skills: [
      { name: "Interpreting AI Threat Detection Alerts", importance: 5, how_to_build: "CSE 466, IFT 450 labs", is_ai_skill: true },
      { name: "Evaluating AI-Generated Security Code", importance: 4, how_to_build: "CSE 469, code review practice", is_ai_skill: true },
      { name: "Network Security & Firewalls", importance: 5, how_to_build: "IFT 410, hands-on lab environments", is_ai_skill: false },
      { name: "Penetration Testing & Ethical Hacking", importance: 4, how_to_build: "CSE 365, Capture the Flag competitions", is_ai_skill: false },
      { name: "Incident Response & Forensics", importance: 5, how_to_build: "IFT 450, simulated breach scenarios", is_ai_skill: false },
      { name: "Security Compliance (NIST, ISO)", importance: 4, how_to_build: "IFT 201, industry certifications", is_ai_skill: false },
      { name: "Linux/Windows System Administration", importance: 4, how_to_build: "CSE courses, personal homelab", is_ai_skill: false },
      { name: "Threat Intelligence Analysis", importance: 4, how_to_build: "IFT 450, open-source intelligence practice", is_ai_skill: false }
    ],
    experiences: [
      { icon: "shield", title: "ASU Cybersecurity Club", description: "Compete in National Cyber League and collaborate on security research projects.", link_text: "Join on SunDevilSync", link_url: "#" },
      { icon: "award", title: "Security Certifications (Security+, CEH)", description: "Industry-recognized credentials — ASU offers exam prep courses and vouchers.", link_text: "Via Fulton Career Services", link_url: "#" },
      { icon: "trophy", title: "Capture the Flag (CTF) Competitions", description: "Practice offensive and defensive skills in competitive hacking challenges.", link_text: "ASU hosts annual CTF", link_url: "#" },
      { icon: "briefcase", title: "Security Operations Center Internship", description: "Monitor threats and respond to incidents with ASU's IT security team.", link_text: "Apply via UTO", link_url: "#" }
    ],
    related_careers: [
      { title: "Software Engineer", median_salary: "$102,000", slug: "software-engineer" },
      { title: "Data Analyst", median_salary: "$76,000", slug: "data-analyst" },
      { title: "Environmental Scientist", median_salary: "$73,000", slug: "environmental-scientist" },
      { title: "Financial Analyst", median_salary: "$74,000", slug: "financial-analyst" }
    ],
    at_a_glance: {
      education: "Bachelor's degree in Cybersecurity, IT, CS, or related field",
      years_to_entry: "0-2 years (certifications accelerate entry)",
      work_environment: "Office, remote-friendly, SOCs (Security Operations Centers), on-call rotations",
      az_openings: "~420/year (severe talent shortage)",
      data_source: "Bureau of Labor Statistics OEWS & Employment Projections (2024)"
    }
  },
  {
    career_title: "Environmental Scientist",
    slug: "environmental-scientist",
    field: "Engineering",
    soc_code: "19-2041.00",
    salary_entry: "$48,000",
    salary_median: "$73,000",
    salary_top: "$118,000",
    growth_rate: "+6%",
    annual_openings: "3,100",
    asu_degree_count: 2,
    automation_risk_pct: 25,
    automation_explanation: "AI accelerates data analysis and environmental modeling, but field research, policy advocacy, and stakeholder negotiation require on-the-ground expertise and scientific judgment.",
    image_url: "https://images.unsplash.com/photo-1639486649969-61296ce0a5ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwc2NpZW50aXN0JTIwZmllbGQlMjByZXNlYXJjaHxlbnwxfHx8fDE3NzE3MDA3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    day_in_life: [
      { time: "Morning", description: "Collect water samples from Phoenix metro watersheds to test for PFAS contamination, log GPS coordinates and field observations.", highlight: true },
      { time: "Mid-AM", description: "Analyze lab results using statistical software to identify pollution trends, compare against EPA thresholds, flag exceedances for regulatory reporting.", highlight: false },
      { time: "Afternoon", description: "Present environmental impact assessment findings to city council — explain how proposed development affects endangered species habitat and groundwater recharge.", highlight: true },
      { time: "Late PM", description: "Review and comment on draft state air quality regulations, collaborate with legal team to ensure scientific accuracy in compliance framework.", highlight: false },
      { time: "Evening", description: "Prepare grant proposal for wetland restoration project and mentor undergraduate research assistant on soil sampling protocols.", highlight: false }
    ],
    ai_uses_today: [
      "Use machine learning models to predict wildfire risk and spread patterns",
      "Leverage AI-powered satellite imagery analysis to detect deforestation and land use changes",
      "Apply predictive analytics to optimize water resource management and drought forecasting",
      "Use ChatGPT to draft technical reports and summarize scientific literature"
    ],
    ethical_dilemmas: [
      { title: "Economic Growth vs. Environmental Protection", question: "Your impact assessment shows a mining project will contaminate local water supplies, but it would create 500 jobs in a struggling community. How do you weigh these tradeoffs in your recommendation?" },
      { title: "Corporate Influence", question: "A consultant pressures you to soften environmental risk language in a report to help their client get project approval. Do you maintain scientific integrity or compromise to preserve the consulting relationship?" },
      { title: "Climate Migration", question: "Your modeling shows certain AZ regions will become uninhabitable due to extreme heat within 30 years. Do you publish findings that could trigger property value collapse and panic, or withhold to avoid social disruption?" }
    ],
    degrees: [
      {
        name: "BS in Environmental Science",
        school: "College of Liberal Arts and Sciences",
        why: "Interdisciplinary program combining ecology, chemistry, policy, and GIS for careers in consulting and government.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-environmental-science/",
        image_url: "https://images.unsplash.com/photo-1752937285396-df7c206f47f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwc2NpZW5jZSUyMHN1c3RhaW5hYmlsaXR5JTIwbmF0dXJlfGVufDF8fHx8MTc3MTgxODgyNnww&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "SOS 211", name: "Intro to Sustainability" },
          { code: "SOS 334", name: "Water Resources" },
          { code: "SOS 432", name: "Environmental Impact Assessment" },
          { code: "GPH 314", name: "GIS for Environmental Analysis" }
        ]
      },
      {
        name: "BS in Sustainability (Science Track)",
        school: "College of Global Futures",
        why: "Systems-thinking approach to environmental challenges with emphasis on climate adaptation and resilience.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-sustainability/",
        image_url: "https://images.unsplash.com/photo-1719825523711-eda3221c111c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMGVjb2xvZ3klMjBjbGltYXRlJTIwcmVzZWFyY2h8ZW58MXx8fHwxNzcxODI1NTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "SOS 211", name: "Intro to Sustainability" },
          { code: "SOS 322", name: "Climate Change Science" },
          { code: "SOS 421", name: "Ecosystem Ecology" },
          { code: "SOS 484", name: "Sustainability Capstone" }
        ]
      }
    ],
    skills: [
      { name: "Using AI for Environmental Modeling", importance: 4, how_to_build: "SOS 432, GPH 314, self-directed tools", is_ai_skill: true },
      { name: "Validating AI-Generated Environmental Predictions", importance: 5, how_to_build: "SOS 322, SOS 421 field methods", is_ai_skill: true },
      { name: "Field Sampling & Lab Analysis", importance: 5, how_to_build: "SOS 334, hands-on lab courses", is_ai_skill: false },
      { name: "GIS & Remote Sensing", importance: 4, how_to_build: "GPH 314, ArcGIS certification", is_ai_skill: false },
      { name: "Statistical Analysis (R, Python)", importance: 4, how_to_build: "SOS courses, online tutorials", is_ai_skill: false },
      { name: "Environmental Policy & Regulation", importance: 4, how_to_build: "SOS 432, internships with EPA/ADEQ", is_ai_skill: false },
      { name: "Technical Writing & Communication", importance: 5, how_to_build: "All SOS courses, report writing practice", is_ai_skill: false },
      { name: "Project Management", importance: 4, how_to_build: "SOS 484 capstone, consulting projects", is_ai_skill: false }
    ],
    experiences: [
      { icon: "globe", title: "Sustainability Internship (EPA, ADEQ)", description: "Work with government agencies on environmental monitoring and compliance.", link_text: "Apply via ASU Career Services", link_url: "#" },
      { icon: "users", title: "Students for Sustainability", description: "Lead campus sustainability initiatives and community education projects.", link_text: "Join on SunDevilSync", link_url: "#" },
      { icon: "award", title: "GIS Certification", description: "Earn ESRI ArcGIS certification through ASU's Geography program.", link_text: "Via GPH department", link_url: "#" },
      { icon: "briefcase", title: "Environmental Research Assistant", description: "Support faculty research on climate adaptation and water resource management.", link_text: "Check SOS job board", link_url: "#" }
    ],
    related_careers: [
      { title: "Data Analyst", median_salary: "$76,000", slug: "data-analyst" },
      { title: "Software Engineer", median_salary: "$102,000", slug: "software-engineer" },
      { title: "Cybersecurity Analyst", median_salary: "$94,000", slug: "cybersecurity-analyst" },
      { title: "Social Worker", median_salary: "$58,000", slug: "social-worker" }
    ],
    at_a_glance: {
      education: "Bachelor's degree in Environmental Science, Sustainability, or related field",
      years_to_entry: "0-2 years (field experience highly valued)",
      work_environment: "Office and field work (outdoor conditions), labs, some travel",
      az_openings: "~210/year",
      data_source: "Bureau of Labor Statistics OEWS & Employment Projections (2024)"
    }
  },
  {
    career_title: "Journalist/Reporter",
    slug: "journalist-reporter",
    field: "Arts & Media",
    soc_code: "27-3022.00",
    salary_entry: "$35,000",
    salary_median: "$52,000",
    salary_top: "$82,000",
    growth_rate: "-3%",
    annual_openings: "4,100",
    asu_degree_count: 1,
    automation_risk_pct: 45,
    automation_explanation: "AI can generate routine news summaries and transcribe interviews, but investigative reporting, cultivating sources, and asking accountability questions require human skepticism and courage.",
    image_url: "https://images.unsplash.com/photo-1759659334772-c3a05b8178e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsaXN0JTIwcmVwb3J0ZXIlMjBpbnRlcnZpZXdpbmclMjBuZXdzfGVufDF8fHx8MTc3MTcwMDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    day_in_life: [
      { time: "Morning", description: "Attend city council meeting, take notes on housing policy debate, identify potential follow-up stories and sources to interview.", highlight: true },
      { time: "Mid-AM", description: "Interview affordable housing advocate via phone, ask probing questions about developer donations to council members, verify claims against public records.", highlight: false },
      { time: "Afternoon", description: "Write 800-word investigative feature connecting donation records to zoning votes, craft compelling lede, fact-check every assertion with editor.", highlight: true },
      { time: "Late PM", description: "Monitor social media for breaking news, update digital story with new information, respond to reader comments and source outreach.", highlight: false },
      { time: "Evening", description: "File public records requests for campaign finance documents and coordinate with photographer on visual storytelling approach for upcoming feature.", highlight: false }
    ],
    ai_uses_today: [
      "Use AI transcription tools (Otter.ai) to quickly turn interview recordings into text",
      "Leverage ChatGPT to draft initial story outlines and headline variations (with heavy human editing)",
      "Apply automated data journalism tools to analyze public records and surface newsworthy patterns",
      "Use AI content management systems to optimize headlines for SEO and engagement"
    ],
    ethical_dilemmas: [
      { title: "Source Protection", question: "A confidential source gives you evidence of government corruption, but a judge orders you to reveal their identity. Do you protect the source and risk jail for contempt of court?" },
      { title: "AI-Generated Content", question: "Your editor pressures you to use AI to write routine stories faster to cut costs. Do you comply, risking accuracy and credibility, or resist automation of journalism?" },
      { title: "Clickbait vs. Public Interest", question: "Your most important investigative story gets low traffic, while sensational celebrity content drives revenue. How do you balance journalistic mission with financial survival?" }
    ],
    degrees: [
      {
        name: "BA in Journalism",
        school: "Walter Cronkite School of Journalism and Mass Communication",
        why: "Top-ranked program with professional newsroom experience, industry mentorship, and specialization tracks in investigative, sports, or data journalism.",
        url: "https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-arts-journalism/",
        image_url: "https://images.unsplash.com/photo-1663025292954-dd09983bd945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsaXNtJTIwbmV3c3Jvb20lMjByZXBvcnRlciUyMHdyaXRpbmd8ZW58MXx8fHwxNzcxODI1NTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "JMC 300", name: "Reporting & Writing" },
          { code: "JMC 402", name: "Digital News Production" },
          { code: "JMC 425", name: "Investigative Reporting" },
          { code: "JMC 484", name: "Cronkite News Bureau" }
        ]
      }
    ],
    skills: [
      { name: "Evaluating AI-Generated News Content", importance: 5, how_to_build: "JMC 300, JMC 415 ethics discussions", is_ai_skill: true },
      { name: "Using AI Transcription & Research Tools", importance: 4, how_to_build: "JMC 402, newsroom internships", is_ai_skill: true },
      { name: "Interviewing & Source Cultivation", importance: 5, how_to_build: "JMC 300, JMC 425", is_ai_skill: false },
      { name: "Investigative Research & FOIA Requests", importance: 5, how_to_build: "JMC 425, IRE training", is_ai_skill: false },
      { name: "News Writing & Editing", importance: 5, how_to_build: "All JMC courses, Cronkite News", is_ai_skill: false },
      { name: "Multimedia Production (Video, Audio, Photo)", importance: 4, how_to_build: "JMC 310, JMC 430", is_ai_skill: false },
      { name: "Media Law & Ethics", importance: 5, how_to_build: "JMC 415, case studies", is_ai_skill: false },
      { name: "Social Media & Audience Engagement", importance: 4, how_to_build: "JMC 402, digital internships", is_ai_skill: false }
    ],
    experiences: [
      { icon: "newspaper", title: "Cronkite News Bureau", description: "Report for professional newsrooms (Arizona PBS, local affiliates) as part of curriculum.", link_text: "Required in JMC major", link_url: "#" },
      { icon: "users", title: "Society of Professional Journalists", description: "Network with working journalists and attend ethics workshops.", link_text: "Cronkite chapter on SunDevilSync", link_url: "#" },
      { icon: "award", title: "IRE Investigative Reporting Workshop", description: "Learn data journalism and FOIA skills from Investigative Reporters & Editors.", link_text: "Via Cronkite School", link_url: "#" },
      { icon: "briefcase", title: "Arizona Republic Internship Program", description: "Gain bylines and mentorship through partnerships with local news organizations.", link_text: "Apply via Cronkite Career Services", link_url: "#" }
    ],
    related_careers: [
      { title: "Marketing Manager", median_salary: "$88,000", slug: "marketing-manager" },
      { title: "UX Designer", median_salary: "$72,000", slug: "ux-designer" },
      { title: "Data Analyst", median_salary: "$76,000", slug: "data-analyst" },
      { title: "Social Worker", median_salary: "$58,000", slug: "social-worker" }
    ],
    at_a_glance: {
      education: "Bachelor's degree in Journalism, Communications, or related field",
      years_to_entry: "0 years (entry-level newsroom roles available)",
      work_environment: "Newsrooms, remote, field reporting (irregular hours, deadline pressure)",
      az_openings: "~280/year (industry contraction, but digital growth)",
      data_source: "Bureau of Labor Statistics OEWS & Employment Projections (2024)"
    }
  },
  {
    career_title: "Physician Assistant",
    slug: "physician-assistant",
    field: "Health & Nursing",
    soc_code: "29-1071.00",
    salary_entry: "$88,000",
    salary_median: "$108,000",
    salary_top: "$142,000",
    growth_rate: "+28%",
    annual_openings: "3,800",
    asu_degree_count: 1,
    automation_risk_pct: 20,
    automation_explanation: "AI assists with differential diagnosis and treatment planning, but physical examinations, procedural skills, and patient counseling require hands-on clinical expertise.",
    image_url: "https://images.unsplash.com/photo-1753487050317-919a2b26a6ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNpYW4lMjBhc3Npc3RhbnQlMjBtZWRpY2FsJTIwY2xpbmljfGVufDF8fHx8MTc3MTcwMDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    day_in_life: [
      { time: "Morning", description: "See 12 patients in family medicine clinic — diagnose strep throat, manage diabetes medication adjustments, counsel patient on smoking cessation.", highlight: true },
      { time: "Mid-AM", description: "Perform minor surgical procedure (abscess incision and drainage), suture laceration from kitchen accident, provide wound care instructions.", highlight: false },
      { time: "Afternoon", description: "Consult with supervising physician on complex case — elderly patient with multiple comorbidities and unclear chest pain etiology, order cardiac workup.", highlight: true },
      { time: "Late PM", description: "Review lab results and imaging studies, call patients with test results and next steps, complete EHR documentation and billing codes.", highlight: false },
      { time: "Evening", description: "Attend case conference with medical team to discuss quality improvement initiatives and review latest clinical practice guidelines.", highlight: false }
    ],
    ai_uses_today: [
      "Use clinical decision support tools that suggest diagnoses based on symptoms and patient history",
      "Leverage AI-powered radiology assistants to flag abnormalities in X-rays and CT scans",
      "Apply predictive algorithms to identify patients at high risk for hospital readmission",
      "Use ambient AI scribes to auto-document patient encounters in real-time"
    ],
    ethical_dilemmas: [
      { title: "AI Diagnostic Override", question: "An AI system recommends further testing, but based on your clinical exam, you believe it's unnecessary and would burden the patient financially. Do you follow the algorithm or trust your judgment?" },
      { title: "Scope of Practice Pressure", question: "Your supervising physician is rarely available, and you're pressured to make decisions beyond your training to keep the clinic running. Do you refuse and risk patient access, or practice beyond your scope?" },
      { title: "Profit vs. Patient Care", question: "Your employer incentivizes high patient volume and expensive procedures. Do you prioritize throughput and revenue, or spend time providing thorough, conservative care?" }
    ],
    degrees: [
      {
        name: "Master of Medical Sciences (Physician Assistant)",
        school: "Edson College of Nursing and Health Innovation",
        why: "Intensive 27-month program with clinical rotations in family medicine, surgery, emergency medicine, and specialty care.",
        url: "https://asuonline.asu.edu/online-degree-programs/graduate/master-medical-sciences-physician-assistant/",
        image_url: "https://images.unsplash.com/photo-1753487050317-919a2b26a6ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNpYW4lMjBhc3Npc3RhbnQlMjBtZWRpY2FsJTIwY2xpbmljfGVufDF8fHx8MTc3MTgyNTUxNXww&ixlib=rb-4.1.0&q=80&w=1080",
        courses: [
          { code: "MMS 550", name: "Clinical Medicine I" },
          { code: "MMS 560", name: "Physical Diagnosis" },
          { code: "MMS 570", name: "Pharmacology" },
          { code: "MMS 600", name: "Clinical Rotations (1200+ hours)" }
        ]
      }
    ],
    skills: [
      { name: "Interpreting AI Diagnostic Suggestions", importance: 5, how_to_build: "MMS 550, clinical rotations", is_ai_skill: true },
      { name: "Validating AI Clinical Decision Support", importance: 4, how_to_build: "MMS 560, evidence-based medicine training", is_ai_skill: true },
      { name: "Physical Examination & Diagnosis", importance: 5, how_to_build: "MMS 560, supervised patient care", is_ai_skill: false },
      { name: "Procedural Skills (Suturing, Casting, Minor Surgery)", importance: 5, how_to_build: "MMS 600 clinical rotations", is_ai_skill: false },
      { name: "Pharmacology & Prescribing", importance: 5, how_to_build: "MMS 570, clinical preceptorship", is_ai_skill: false },
      { name: "Medical Documentation (EHR)", importance: 4, how_to_build: "All clinical rotations", is_ai_skill: false },
      { name: "Patient Counseling & Education", importance: 5, how_to_build: "Communication courses, patient interactions", is_ai_skill: false },
      { name: "Team-Based Care", importance: 5, how_to_build: "Interdisciplinary clinical settings", is_ai_skill: false }
    ],
    experiences: [
      { icon: "stethoscope", title: "Patient Care Experience (Required)", description: "Most PA programs require 1000+ hours as EMT, medical assistant, or similar role before admission.", link_text: "Gain via healthcare jobs", link_url: "#" },
      { icon: "users", title: "Pre-PA Club", description: "Connect with PA students and professionals, learn about application process and school selection.", link_text: "Join on SunDevilSync", link_url: "#" },
      { icon: "award", title: "Clinical Rotations (1200+ hours)", description: "Hands-on supervised practice in diverse medical settings during PA school.", link_text: "Part of MMS program", link_url: "#" },
      { icon: "heart", title: "Emergency Medical Technician Training", description: "Earn EMT certification through ASU's Fire Service Training Academy for patient care hours.", link_text: "Register via ASU Professional Programs", link_url: "#" }
    ],
    related_careers: [
      { title: "Registered Nurse", median_salary: "$77,000", slug: "registered-nurse" },
      { title: "Social Worker", median_salary: "$58,000", slug: "social-worker" },
      { title: "Environmental Scientist", median_salary: "$73,000", slug: "environmental-scientist" },
      { title: "K-12 Teacher", median_salary: "$61,000", slug: "k12-teacher" }
    ],
    at_a_glance: {
      education: "Master's degree (PA program) + bachelor's + healthcare experience",
      years_to_entry: "0 years after PA-C certification",
      work_environment: "Clinics, hospitals, urgent care, surgery centers (flexible specialties)",
      az_openings: "~260/year (high demand, excellent job outlook)",
      data_source: "Bureau of Labor Statistics OEWS & Employment Projections (2024)"
    }
  }
];

export const fields = [
  "Technology",
  "Health & Nursing",
  "Business",
  "Education",
  "Engineering",
  "Arts & Media",
  "Social Sciences"
];

export const fieldColors: Record<string, string> = {
  "Technology": "#8C1D40",
  "Health & Nursing": "#00A3E0",
  "Business": "#FFC627",
  "Education": "#78BE20",
  "Engineering": "#FF7F32",
  "Arts & Media": "#9B26B6",
  "Social Sciences": "#E84A27"
};
