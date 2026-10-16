export interface ServiceTemplate {
  name: string;
  description: string;
  bestFor: string;
  imageSrc: string;
  features: string[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  badge: string;
  heroImage: string;
  overview: string;
  whenAptToMake: {
    title: string;
    description: string;
    scenarios: {
      heading: string;
      detail: string;
      icon: string;
    }[];
  };
  benefits: {
    metric: string;
    title: string;
    description: string;
  }[];
  templates: ServiceTemplate[];
  includedFeatures: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "professional-resume": {
    slug: "professional-resume",
    title: "Professional Resume Crafting",
    tagline: "High-impact, executive-level resume engineering tailored to win competitive job offers.",
    badge: "Flagship Service",
    heroImage: "/Services graphics/Professional resume Services Graphic 1.jpg",
    overview:
      "A professionally crafted resume goes beyond listing daily job duties—it translates your entire career into an irresistible investment pitch. Leveraging 20+ years of corporate hiring expertise, we structure your accomplishments using Google's XYZ formula to immediately command recruiter respect.",
    whenAptToMake: {
      title: "When Is This Service Apt for You?",
      description:
        "This service is specifically tailored for career inflection points where standard resumes fall flat.",
      scenarios: [
        {
          heading: "Transitioning to Management or Senior Executive Roles",
          detail:
            "When moving from an individual contributor to team lead, director, VP, or C-suite, your CV must communicate strategic vision, revenue impact, and leadership rather than hands-on tasks.",
          icon: "👔",
        },
        {
          heading: "Stalled Applications Despite Strong Qualifications",
          detail:
            "If you have the experience but are getting ghosted or auto-rejected, your resume likely lacks the 6-second hook structure that busy talent acquisition leads look for.",
          icon: "📈",
        },
        {
          heading: "Pivoting Industries or Functional Domains",
          detail:
            "When transitioning into tech, finance, consulting, or general management, we re-frame your transferable skills and accomplishments into the target industry's language.",
          icon: "🔄",
        },
        {
          heading: "Condensing 10–20+ Years of Dense Experience",
          detail:
            "Long careers often end up as 4–5 page disjointed chronicles. We synthesize your journey into a laser-focused 1-to-2 page executive document that highlights peak impact.",
          icon: "⏱️",
        },
      ],
    },
    benefits: [
      {
        metric: "3x",
        title: "Higher Interview Callbacks",
        description: "Candidates routinely report doubling or tripling their recruiter response rate within 30 days.",
      },
      {
        metric: "6s",
        title: "Optimized for the 6-Second Scan",
        description: "Information hierarchy designed specifically for how recruiters read: immediate visual hook at the top.",
      },
      {
        metric: "XYZ",
        title: "Google Accomplishment Formula",
        description: "Every bullet is restructured: 'Accomplished [X] as measured by [Y] by doing [Z]'.",
      },
      {
        metric: "100%",
        title: "Bespoke & Handcrafted",
        description: "Zero generic AI bots or templates. Partner directly with a 20+ year corporate executive.",
      },
    ],
    templates: [
      {
        name: "Executive Leadership Layout",
        description: "Designed for VPs, Directors, and senior managers focusing on P&L ownership, headcount, and organizational change.",
        bestFor: "10+ years experience, leadership & strategy roles",
        imageSrc: "/hero-cards/card-1.png",
        features: ["Prominent Career Highlights Matrix", "Quantified Business Metrics", "Clean Typography & Spacing"],
      },
      {
        name: "Modern Specialist Layout",
        description: "Optimized for high-impact technical leads, engineers, product managers, and modern knowledge professionals.",
        bestFor: "Mid-to-senior specialized & tech careers",
        imageSrc: "/hero-cards/card-3.png",
        features: ["Core Skills & Tech Stack Matrix", "Project & Deliverable Spotlight", "High-Density Scannability"],
      },
      {
        name: "Classic Chronological Standard",
        description: "Timeless corporate standard favored by traditional industries such as finance, healthcare, legal, and enterprise consulting.",
        bestFor: "Banking, legal, enterprise & institutional roles",
        imageSrc: "/hero-cards/card-5.png",
        features: ["Strict Reverse-Chronology", "Institution-Grade Formatting", "Zero Gimmicks, Pure Authority"],
      },
    ],
    includedFeatures: [
      "Direct 1-on-1 strategic intake with Mohammed Aeraf",
      "Comprehensive overhaul of all bullet points and summary",
      "Executive branding and core competency matrix",
      "Delivery in editable Word (.docx) and print-ready PDF",
      "Unlimited revisions for 14 days after initial delivery",
      "Rapid 48–72 hour standard turnaround",
    ],
  },

  "ats-friendly-resume": {
    slug: "ats-friendly-resume",
    title: "ATS-Friendly Optimization",
    tagline: "Algorithm-compliant parsing and strategic keyword mapping that sails past robotic screeners.",
    badge: "Most Essential",
    heroImage: "/Services graphics/ATS Friendly Resume Graphic Services Graphic 2.jpg",
    overview:
      "Over 75% of resumes submitted online are filtered out by automated Applicant Tracking Systems (ATS) like Workday, Greenhouse, Lever, and Taleo before any human reviewer sees them. Our ATS-Friendly Optimization ensures your CV parses with 99%+ accuracy and scores high for role-specific recruiter searches.",
    whenAptToMake: {
      title: "When Is This Service Apt for You?",
      description:
        "Crucial for candidates applying directly through corporate career portals and job boards.",
      scenarios: [
        {
          heading: "Applying Through Enterprise Career Portals",
          detail:
            "If you apply via Workday, Greenhouse, Taleo, iCIMS, or Lever, your resume will be parsed into an automated database. Any unparseable layout will result in an instant auto-rejection.",
          icon: "🤖",
        },
        {
          heading: "Current CV Has Tables, Text Boxes, or Multi-Columns",
          detail:
            "Fancy graphics from Canva, Photoshop, or multi-column builders scramble in ATS parsers, turning your contact info and work history into unreadable gibberish.",
          icon: "⚠️",
        },
        {
          heading: "Low Keyword Match for Target Job Postings",
          detail:
            "Recruiters filter candidate databases by specific keywords. If your resume doesn't mirror modern industry taxonomy, you rank on page 10 and remain unseen.",
          icon: "🔍",
        },
        {
          heading: "High-Volume Job Hunting",
          detail:
            "When submitting to 20+ roles online, having an ATS-cleared foundation ensures maximum efficiency with zero wasted applications.",
          icon: "🚀",
        },
      ],
    },
    benefits: [
      {
        metric: "99%",
        title: "ATS Compatibility Rate",
        description: "Tested and guaranteed to parse cleanly into major enterprise ATS systems.",
      },
      {
        metric: "100%",
        title: "Keyword & Taxonomy Alignment",
        description: "Mapped against live job requisitions in your industry to maximize candidate score.",
      },
      {
        metric: "0",
        title: "Unparseable Glitches",
        description: "No corrupt text boxes, confusing tables, or incompatible fonts that trigger bot errors.",
      },
      {
        metric: "2x",
        title: "Human Pass-Through",
        description: "Once parsed, it provides human recruiters with a crystal-clear, scannable reading experience.",
      },
    ],
    templates: [
      {
        name: "Universal ATS Standard",
        description: "Pure single-column layout engineered specifically for maximum parsing fidelity in older and newer ATS platforms.",
        bestFor: "Enterprise applications & high-volume portal submissions",
        imageSrc: "/hero-cards/card-2.png",
        features: ["100% Text-Based Hierarchy", "Standard Heading Tags", "Zero Graphic Noise"],
      },
      {
        name: "Hybrid ATS-Executive Format",
        description: "Balances strict algorithmic compliance with an aesthetically refined look for human screeners.",
        bestFor: "Mid-to-senior enterprise candidates",
        imageSrc: "/hero-cards/card-4.png",
        features: ["Clean Header Hierarchy", "Skill Taxonomy Matrix", "Scannable Bullet Alignment"],
      },
      {
        name: "Keyword-Dense Specialist Format",
        description: "Structured for roles requiring extensive toolsets, technologies, compliance certifications, and methodology badges.",
        bestFor: "IT, Engineering, Healthcare, Compliance & Finance",
        imageSrc: "/hero-cards/card-1.png",
        features: ["Dedicated Competency Section", "High-Volume Keyword Indexing", "Universal Font Compatibility"],
      },
    ],
    includedFeatures: [
      "Target job description keyword audit and gap analysis",
      "Full restructuring into ATS-standard hierarchy and typography",
      "Elimination of unparseable tables, columns, and graphic symbols",
      "Factual testing against simulated ATS parser environments",
      "Delivery in clean Word (.docx) and ATS-validated PDF",
      "Guidance on optimizing file names and job application fields",
    ],
  },

  "cover-letter": {
    slug: "cover-letter",
    title: "Cover Letter & Strategy",
    tagline: "Compelling career storytelling and outreach strategy that hooks decision-makers from the opening sentence.",
    badge: "High Conversion",
    heroImage: "/Services graphics/Cover Letter Graphic Services Graphic 3.jpg",
    overview:
      "A generic cover letter is an instant turnoff. A targeted, strategic cover letter is your secret weapon. We craft customized, high-converting cover letters that establish emotional resonance, explain non-linear career paths, and position your unique value proposition before the interview even starts.",
    whenAptToMake: {
      title: "When Is This Service Apt for You?",
      description:
        "The decisive edge for competitive applications and complex career narratives.",
      scenarios: [
        {
          heading: "Applying for High-Stakes 'Dream Roles'",
          detail:
            "When competing against 300+ candidates for a coveted position, a tailored cover letter explaining why you are passionate about this specific company makes you unforgettable.",
          icon: "🎯",
        },
        {
          heading: "Explaining Career Gaps, Relocation, or Pivots",
          detail:
            "A resume shows what happened, but a cover letter explains the 'why'. It controls the narrative around parental leave, sabbaticals, or switching industries on your own terms.",
          icon: "💡",
        },
        {
          heading: "Senior & Executive Positions",
          detail:
            "Search firms and executive committees expect candidates to articulate leadership philosophy, cultural alignment, and strategic vision in writing.",
          icon: "🏆",
        },
        {
          heading: "Direct Outreach to Hiring Managers on LinkedIn",
          detail:
            "Includes tailored snippets you can use in direct messaging and email pitches to skip HR gatekeepers and reach decision-makers directly.",
          icon: "✉️",
        },
      ],
    },
    benefits: [
      {
        metric: "5x",
        title: "Stronger First Impression",
        description: "Ditches robotic clichés like 'I am writing to apply for...' in favor of a compelling hook.",
      },
      {
        metric: "100%",
        title: "Role & Company Customized",
        description: "Tailored to align directly with the company's mission, pain points, and current challenges.",
      },
      {
        metric: "1 Page",
        title: "Punchy, 3-Paragraph Structure",
        description: "Respects the recruiter's time with a 250-word format designed to trigger an immediate call.",
      },
      {
        metric: "Bonus",
        title: "LinkedIn Outreach Templates",
        description: "Includes copy-paste direct message pitch templates for LinkedIn networking.",
      },
    ],
    templates: [
      {
        name: "The Problem-Solver Narrative",
        description: "Focuses immediately on the employer's current industry pain point and positions your past wins as the proven solution.",
        bestFor: "Product, Sales, Marketing, and Operations leaders",
        imageSrc: "/hero-cards/card-3.png",
        features: ["The 3-Second Opening Hook", "Trophy Achievement Highlight", "Call-to-Action Closing"],
      },
      {
        name: "The Career Pivot / Reframe",
        description: "Seamlessly connects past non-linear experiences to the new target role, highlighting core transferable strengths.",
        bestFor: "Career switchers, returning parents & entrepreneurs re-entering corporate",
        imageSrc: "/hero-cards/card-5.png",
        features: ["Transferable Value Narrative", "Clear Career Motivation", "Confident Positioning"],
      },
      {
        name: "Executive Vision Letter",
        description: "Articulates leadership principles, organizational scaling, and cultural elevation for board-level review.",
        bestFor: "Director, VP, General Manager & C-Suite candidates",
        imageSrc: "/hero-cards/card-1.png",
        features: ["Leadership Philosophy Statement", "P&L & Scale Proof Points", "Executive Tone & Cadence"],
      },
    ],
    includedFeatures: [
      "Tailored 1-page cover letter matching target industry & company tone",
      "Modular framework so you can easily adapt it for future applications",
      "3 custom LinkedIn DM outreach templates for direct networking",
      "Delivery in editable Word (.docx) and finalized PDF",
      "Direct revision feedback with Mohammed Aeraf",
      "48-hour rapid turnaround",
    ],
  },
};
