// Career paths for each career, separated from the main schema for maintainability

export type CareerPathStep = {
  title: string;
  description: string;
  keyResponsibilities: string[];
  typicalAdvancement?: string;
};

export const careerPaths: Record<string, CareerPathStep[]> = {
  "Firefighter": [
    {
      title: "EMT",
      description: "Entry-level emergency medical technician, often the first step toward becoming a firefighter.",
      keyResponsibilities: [
        "Respond to emergency calls",
        "Provide basic medical care",
        "Transport patients to medical facilities"
      ],
      typicalAdvancement: "6-12 months"
    },
    {
      title: "Paramedic",
      description: "Advanced pre-hospital care provider, often required for firefighter positions.",
      keyResponsibilities: [
        "Administer advanced medical care",
        "Operate emergency vehicles",
        "Assist in rescue operations"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "Firefighter",
      description: "Frontline responder to fires, accidents, and emergencies.",
      keyResponsibilities: [
        "Fight fires and perform rescues",
        "Maintain equipment and readiness",
        "Educate the public on fire safety"
      ],
      typicalAdvancement: "2-5 years"
    },
    {
      title: "Fire Engineer / Apparatus Operator",
      description: "Operates fire engines and other apparatus, responsible for equipment maintenance.",
      keyResponsibilities: [
        "Drive and operate fire apparatus",
        "Maintain and inspect equipment",
        "Support firefighting operations"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Fire Captain / Lieutenant",
      description: "Supervises a team of firefighters, leads operations at emergency scenes.",
      keyResponsibilities: [
        "Lead firefighting teams",
        "Coordinate emergency response",
        "Train and mentor junior staff"
      ],
      typicalAdvancement: "3-6 years"
    },
    {
      title: "Battalion Chief / Fire Chief",
      description: "Senior leadership, manages multiple fire stations or an entire department.",
      keyResponsibilities: [
        "Oversee department operations",
        "Develop policies and procedures",
        "Manage budgets and personnel"
      ],
      typicalAdvancement: "Terminal position or further advancement in public safety leadership"
    }
  ],
  "Tech Startup Founder": [
    {
      title: "Student / Intern",
      description: "Gains foundational knowledge and early work experience, often while in school.",
      keyResponsibilities: [
        "Learn core technical and business skills",
        "Participate in internships or side projects",
        "Network with peers and mentors"
      ],
      typicalAdvancement: "1-3 years"
    },
    {
      title: "Junior Developer / Engineer",
      description: "Works in a technical role at a company or on personal projects, building practical skills.",
      keyResponsibilities: [
        "Write and test code",
        "Collaborate on team projects",
        "Learn industry best practices"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "Product Manager or Lead Developer",
      description: "Takes on leadership in product or engineering, often at a startup or small company.",
      keyResponsibilities: [
        "Define product vision and roadmap",
        "Lead development teams",
        "Coordinate with stakeholders"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Startup Co-founder",
      description: "Launches a new business, often with a small founding team.",
      keyResponsibilities: [
        "Develop business model",
        "Build MVP (minimum viable product)",
        "Pitch to investors and customers"
      ],
      typicalAdvancement: "Varies"
    },
    {
      title: "Startup CEO / Founder",
      description: "Leads the company, responsible for vision, growth, and operations.",
      keyResponsibilities: [
        "Set company strategy",
        "Manage team and resources",
        "Drive fundraising and partnerships"
      ],
      typicalAdvancement: "Terminal or serial entrepreneur"
    },
    {
      title: "Serial Entrepreneur / Advisor",
      description: "Starts new ventures or advises other startups, leveraging experience.",
      keyResponsibilities: [
        "Mentor new founders",
        "Invest in or start new companies",
        "Share expertise at events and in media"
      ],
      typicalAdvancement: "Ongoing"
    }
  ],
  "Ethical Hacker": [
    {
      title: "IT Support Specialist",
      description: "Entry-level role providing technical support and troubleshooting.",
      keyResponsibilities: [
        "Resolve user issues",
        "Maintain systems",
        "Document incidents"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "Security Analyst",
      description: "Monitors and analyzes security systems for threats.",
      keyResponsibilities: [
        "Monitor network traffic",
        "Analyze vulnerabilities",
        "Respond to incidents"
      ],
      typicalAdvancement: "2-3 years"
    },
    {
      title: "Penetration Tester",
      description: "Performs authorized simulated attacks to identify security weaknesses.",
      keyResponsibilities: [
        "Conduct penetration tests",
        "Report findings",
        "Recommend improvements"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Ethical Hacker",
      description: "Specialist in testing and improving organizational security.",
      keyResponsibilities: [
        "Lead security assessments",
        "Train staff on security",
        "Develop security protocols"
      ],
      typicalAdvancement: "Ongoing or move to management"
    }
  ],
  "Fashion Designer": [
    {
      title: "Design Intern",
      description: "Assists with basic design tasks and learns industry fundamentals.",
      keyResponsibilities: [
        "Assist senior designers",
        "Prepare materials",
        "Observe fittings"
      ],
      typicalAdvancement: "1 year"
    },
    {
      title: "Assistant Designer",
      description: "Supports design team with sketches, samples, and research.",
      keyResponsibilities: [
        "Create sketches",
        "Source fabrics",
        "Support sample production"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "Fashion Designer",
      description: "Designs clothing and accessories for brands or clients.",
      keyResponsibilities: [
        "Develop collections",
        "Oversee production",
        "Present designs"
      ],
      typicalAdvancement: "2-5 years"
    },
    {
      title: "Senior Designer / Creative Director",
      description: "Leads design teams and sets creative direction.",
      keyResponsibilities: [
        "Lead design vision",
        "Manage teams",
        "Oversee brand image"
      ],
      typicalAdvancement: "Ongoing"
    }
  ],
  "Chief Operating Officer": [
    {
      title: "Operations Analyst",
      description: "Analyzes and improves business processes.",
      keyResponsibilities: [
        "Collect data",
        "Analyze workflows",
        "Recommend improvements"
      ],
      typicalAdvancement: "2 years"
    },
    {
      title: "Operations Manager",
      description: "Manages daily operations and supervises teams.",
      keyResponsibilities: [
        "Oversee operations",
        "Manage staff",
        "Implement policies"
      ],
      typicalAdvancement: "3-5 years"
    },
    {
      title: "Director of Operations",
      description: "Leads multiple departments and strategic initiatives.",
      keyResponsibilities: [
        "Lead cross-functional teams",
        "Drive process improvements",
        "Report to executives"
      ],
      typicalAdvancement: "3-5 years"
    },
    {
      title: "Chief Operating Officer (COO)",
      description: "Oversees all company operations and executes business strategy.",
      keyResponsibilities: [
        "Set operational strategy",
        "Manage executive team",
        "Ensure organizational efficiency"
      ],
      typicalAdvancement: "Terminal or move to CEO"
    }
  ],
  "Resident Services Manager": [
    {
      title: "Resident Services Assistant",
      description: "Supports residents and assists with daily activities.",
      keyResponsibilities: [
        "Assist residents",
        "Coordinate activities",
        "Maintain records"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "Resident Services Coordinator",
      description: "Coordinates programs and services for residents.",
      keyResponsibilities: [
        "Plan events",
        "Connect residents to resources",
        "Support case management"
      ],
      typicalAdvancement: "2-3 years"
    },
    {
      title: "Resident Services Manager",
      description: "Leads resident services team and oversees all programs.",
      keyResponsibilities: [
        "Supervise staff",
        "Develop programs",
        "Manage budgets"
      ],
      typicalAdvancement: "Ongoing or move to director"
    }
  ],
  "Development Director": [
    {
      title: "Development Assistant",
      description: "Provides administrative support for fundraising and donor relations.",
      keyResponsibilities: [
        "Maintain donor database",
        "Prepare materials",
        "Support events"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "Development Coordinator",
      description: "Coordinates fundraising campaigns and donor communications.",
      keyResponsibilities: [
        "Organize campaigns",
        "Communicate with donors",
        "Track gifts"
      ],
      typicalAdvancement: "2-3 years"
    },
    {
      title: "Development Manager",
      description: "Manages fundraising strategies and supervises staff.",
      keyResponsibilities: [
        "Lead fundraising efforts",
        "Supervise team",
        "Cultivate major gifts"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Development Director",
      description: "Leads all development and fundraising for the organization.",
      keyResponsibilities: [
        "Set fundraising strategy",
        "Manage donor relationships",
        "Oversee development team"
      ],
      typicalAdvancement: "Ongoing or move to executive leadership"
    }
  ],
  "Flight Nurse": [
    {
      title: "Nursing Student",
      description: "Completes nursing education and clinical rotations.",
      keyResponsibilities: [
        "Study nursing theory",
        "Complete clinical hours",
        "Pass licensing exams"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Registered Nurse (RN)",
      description: "Provides patient care in hospitals or clinics.",
      keyResponsibilities: [
        "Monitor patient health",
        "Administer medications",
        "Collaborate with healthcare team"
      ],
      typicalAdvancement: "1-3 years"
    },
    {
      title: "Critical Care Nurse",
      description: "Works in ICU or ER, caring for critically ill patients.",
      keyResponsibilities: [
        "Provide advanced life support",
        "Operate critical care equipment",
        "Respond to emergencies"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Flight Nurse",
      description: "Provides emergency care during air transport.",
      keyResponsibilities: [
        "Stabilize patients in flight",
        "Coordinate with flight crew",
        "Deliver advanced trauma care"
      ],
      typicalAdvancement: "Ongoing or move to educator/leadership"
    }
  ],
  "Barista": [
    {
      title: "Trainee Barista",
      description: "Learns basic coffee preparation and customer service.",
      keyResponsibilities: [
        "Prepare espresso drinks",
        "Greet customers",
        "Clean equipment"
      ],
      typicalAdvancement: "3-6 months"
    },
    {
      title: "Barista",
      description: "Prepares coffee and maintains café operations.",
      keyResponsibilities: [
        "Make specialty drinks",
        "Handle cash register",
        "Maintain cleanliness"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "Lead Barista / Trainer",
      description: "Trains new staff and oversees quality.",
      keyResponsibilities: [
        "Train new baristas",
        "Ensure quality standards",
        "Manage inventory"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "Café Manager",
      description: "Manages café operations and staff.",
      keyResponsibilities: [
        "Oversee daily operations",
        "Manage staff schedules",
        "Order supplies"
      ],
      typicalAdvancement: "Ongoing or move to ownership"
    }
  ],
  "Adult Education Administrator": [
    {
      title: "Adult Education Instructor",
      description: "Teaches adult learners in various subjects.",
      keyResponsibilities: [
        "Develop lesson plans",
        "Assess student progress",
        "Facilitate classroom activities"
      ],
      typicalAdvancement: "2-3 years"
    },
    {
      title: "Program Coordinator",
      description: "Coordinates adult education programs and resources.",
      keyResponsibilities: [
        "Schedule classes",
        "Support instructors",
        "Manage student records"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Adult Education Administrator",
      description: "Oversees adult education programs and staff.",
      keyResponsibilities: [
        "Supervise instructors",
        "Develop program policies",
        "Manage budgets"
      ],
      typicalAdvancement: "Ongoing or move to district/state leadership"
    }
  ],
  "Nonprofit Director": [
    {
      title: "Program Assistant",
      description: "Supports nonprofit programs and events.",
      keyResponsibilities: [
        "Assist with logistics",
        "Communicate with clients",
        "Maintain records"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "Program Manager",
      description: "Manages specific nonprofit programs and staff.",
      keyResponsibilities: [
        "Oversee program delivery",
        "Supervise staff",
        "Track outcomes"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Development Manager",
      description: "Leads fundraising and donor relations.",
      keyResponsibilities: [
        "Plan fundraising events",
        "Cultivate donor relationships",
        "Write grant proposals"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Nonprofit Director",
      description: "Leads the organization and sets strategic direction.",
      keyResponsibilities: [
        "Oversee all programs",
        "Manage staff and budget",
        "Represent organization externally"
      ],
      typicalAdvancement: "Ongoing or move to executive leadership"
    }
  ],
  "Media Producer": [
    {
      title: "Production Assistant",
      description: "Supports media production teams with logistics and setup.",
      keyResponsibilities: [
        "Set up equipment",
        "Assist crew",
        "Organize materials"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "Associate Producer",
      description: "Coordinates segments and supports producers.",
      keyResponsibilities: [
        "Coordinate schedules",
        "Research topics",
        "Support editing"
      ],
      typicalAdvancement: "2-3 years"
    },
    {
      title: "Producer",
      description: "Oversees production of media content.",
      keyResponsibilities: [
        "Manage production team",
        "Oversee budgets",
        "Approve final edits"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Senior Producer / Executive Producer",
      description: "Leads large projects and manages multiple productions.",
      keyResponsibilities: [
        "Lead creative vision",
        "Supervise multiple teams",
        "Secure funding and distribution"
      ],
      typicalAdvancement: "Ongoing"
    }
  ],
  "Marine Biologist": [
    {
      title: "Biology Student",
      description: "Studies biology and related sciences at university.",
      keyResponsibilities: [
        "Complete coursework",
        "Participate in lab work",
        "Assist with research"
      ],
      typicalAdvancement: "4 years"
    },
    {
      title: "Research Assistant",
      description: "Supports marine research projects in the field or lab.",
      keyResponsibilities: [
        "Collect samples",
        "Record data",
        "Maintain equipment"
      ],
      typicalAdvancement: "2-3 years"
    },
    {
      title: "Marine Biologist",
      description: "Conducts research and analysis on marine life and ecosystems.",
      keyResponsibilities: [
        "Design experiments",
        "Publish findings",
        "Present at conferences"
      ],
      typicalAdvancement: "Ongoing or move to senior/research lead"
    }
  ],
  "Journalist": [
    {
      title: "Journalism Student",
      description: "Studies journalism, communications, or English.",
      keyResponsibilities: [
        "Write articles",
        "Learn reporting techniques",
        "Intern at media outlets"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Reporter",
      description: "Covers news stories and conducts interviews.",
      keyResponsibilities: [
        "Research topics",
        "Interview sources",
        "Write and edit stories"
      ],
      typicalAdvancement: "2-3 years"
    },
    {
      title: "Editor / Senior Journalist",
      description: "Edits stories and manages reporting teams.",
      keyResponsibilities: [
        "Edit articles",
        "Assign stories",
        "Mentor junior staff"
      ],
      typicalAdvancement: "Ongoing or move to management"
    }
  ],
  "Chef Instructor": [
    {
      title: "Culinary Student",
      description: "Learns culinary techniques and kitchen operations.",
      keyResponsibilities: [
        "Practice cooking skills",
        "Study food safety",
        "Assist in kitchens"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "Line Cook / Sous Chef",
      description: "Prepares food and supports kitchen operations.",
      keyResponsibilities: [
        "Prepare dishes",
        "Maintain cleanliness",
        "Support head chef"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Chef Instructor",
      description: "Teaches culinary students and develops curriculum.",
      keyResponsibilities: [
        "Teach classes",
        "Develop recipes",
        "Mentor students"
      ],
      typicalAdvancement: "Ongoing or move to program director"
    }
  ],
  "Aquarium Interpreter": [
    {
      title: "Education Intern",
      description: "Assists with educational programs at aquariums or museums.",
      keyResponsibilities: [
        "Support tours",
        "Prepare materials",
        "Engage visitors"
      ],
      typicalAdvancement: "1 year"
    },
    {
      title: "Education Specialist",
      description: "Leads tours and educational activities for visitors.",
      keyResponsibilities: [
        "Lead group tours",
        "Present animal facts",
        "Develop activities"
      ],
      typicalAdvancement: "2-3 years"
    },
    {
      title: "Aquarium Interpreter",
      description: "Delivers educational programs and interprets exhibits for the public.",
      keyResponsibilities: [
        "Engage with visitors",
        "Interpret exhibits",
        "Train volunteers"
      ],
      typicalAdvancement: "Ongoing or move to education manager"
    }
  ],
  "Marketing Director": [
    {
      title: "Marketing Assistant",
      description: "Supports marketing campaigns and administrative tasks.",
      keyResponsibilities: [
        "Assist with campaigns",
        "Manage social media",
        "Prepare reports"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "Marketing Coordinator",
      description: "Coordinates marketing projects and communications.",
      keyResponsibilities: [
        "Coordinate events",
        "Write content",
        "Analyze data"
      ],
      typicalAdvancement: "2-3 years"
    },
    {
      title: "Marketing Manager",
      description: "Leads marketing teams and strategy execution.",
      keyResponsibilities: [
        "Manage campaigns",
        "Supervise staff",
        "Oversee budgets"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Marketing Director",
      description: "Sets marketing strategy and oversees all marketing operations.",
      keyResponsibilities: [
        "Develop marketing strategy",
        "Lead marketing team",
        "Represent brand externally"
      ],
      typicalAdvancement: "Ongoing or move to executive leadership"
    }
  ],
  "Artist & Educator": [
    {
      title: "Art Student",
      description: "Studies art techniques and theory at school or university.",
      keyResponsibilities: [
        "Practice various mediums",
        "Study art history",
        "Develop portfolio"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Teaching Artist",
      description: "Leads workshops and teaches art in community settings.",
      keyResponsibilities: [
        "Teach art classes",
        "Plan lessons",
        "Engage with students"
      ],
      typicalAdvancement: "2-3 years"
    },
    {
      title: "Artist & Educator",
      description: "Creates art and teaches in schools or organizations.",
      keyResponsibilities: [
        "Create and exhibit artwork",
        "Teach in schools or colleges",
        "Mentor aspiring artists"
      ],
      typicalAdvancement: "Ongoing or move to program director"
    }
  ],
  "School Principal": [
    {
      title: "Teacher",
      description: "Teaches students in a classroom setting.",
      keyResponsibilities: [
        "Develop lesson plans",
        "Assess student progress",
        "Collaborate with colleagues"
      ],
      typicalAdvancement: "3-5 years"
    },
    {
      title: "Assistant Principal",
      description: "Supports the principal in school administration.",
      keyResponsibilities: [
        "Discipline students",
        "Support teachers",
        "Coordinate activities"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "School Principal",
      description: "Leads the school and manages staff, students, and operations.",
      keyResponsibilities: [
        "Set school vision",
        "Manage staff",
        "Oversee budgets and policies"
      ],
      typicalAdvancement: "Ongoing or move to district leadership"
    }
  ],
  "Career Development Advisor": [
    {
      title: "Career Services Assistant",
      description: "Supports career center operations and student services.",
      keyResponsibilities: [
        "Schedule appointments",
        "Maintain resources",
        "Assist with events"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "Career Counselor",
      description: "Advises students or clients on career options and planning.",
      keyResponsibilities: [
        "Conduct career assessments",
        "Provide job search support",
        "Facilitate workshops"
      ],
      typicalAdvancement: "2-3 years"
    },
    {
      title: "Career Development Advisor",
      description: "Leads career development programs and advises on strategy.",
      keyResponsibilities: [
        "Develop career programs",
        "Advise on career strategy",
        "Build employer partnerships"
      ],
      typicalAdvancement: "Ongoing or move to director"
    }
  ],
  "College Counselor": [
    {
      title: "Academic Advisor",
      description: "Advises students on academic planning and course selection.",
      keyResponsibilities: [
        "Review degree requirements",
        "Support student success",
        "Refer to campus resources"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "College Counselor",
      description: "Guides students through college admissions and career planning.",
      keyResponsibilities: [
        "Advise on college applications",
        "Support financial aid process",
        "Facilitate workshops"
      ],
      typicalAdvancement: "Ongoing or move to lead counselor"
    }
  ],
  "HR Generalist": [
    {
      title: "HR Assistant",
      description: "Supports HR department with administrative tasks.",
      keyResponsibilities: [
        "Maintain employee records",
        "Schedule interviews",
        "Assist with onboarding"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "HR Coordinator",
      description: "Coordinates HR programs and employee relations.",
      keyResponsibilities: [
        "Coordinate benefits",
        "Support employee relations",
        "Assist with compliance"
      ],
      typicalAdvancement: "2-3 years"
    },
    {
      title: "HR Generalist",
      description: "Manages a range of HR functions and supports staff.",
      keyResponsibilities: [
        "Administer HR policies",
        "Advise employees",
        "Support recruitment and retention"
      ],
      typicalAdvancement: "Ongoing or move to HR manager"
    }
  ],
  "Early Childhood Educator": [
    {
      title: "Teaching Assistant",
      description: "Supports lead teachers in early childhood classrooms.",
      keyResponsibilities: [
        "Assist with classroom activities",
        "Supervise children",
        "Prepare materials"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "Preschool Teacher",
      description: "Leads classroom instruction and care for young children.",
      keyResponsibilities: [
        "Plan lessons",
        "Monitor child development",
        "Communicate with parents"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Lead Teacher / Program Coordinator",
      description: "Oversees curriculum and supports other teachers.",
      keyResponsibilities: [
        "Develop curriculum",
        "Mentor staff",
        "Coordinate with administration"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "Early Childhood Educator / Director",
      description: "Leads early childhood programs and manages staff and operations.",
      keyResponsibilities: [
        "Supervise teachers",
        "Set program vision",
        "Manage budgets and compliance"
      ],
      typicalAdvancement: "Ongoing or move to district/state leadership"
    }
  ],
  "State Senator": [
    {
      title: "Community Organizer",
      description: "Leads local initiatives and builds community support.",
      keyResponsibilities: [
        "Organize events",
        "Engage with constituents",
        "Advocate for issues"
      ],
      typicalAdvancement: "2-4 years"
    },
    {
      title: "City Council Member / Local Official",
      description: "Serves in local government, making policy decisions.",
      keyResponsibilities: [
        "Draft ordinances",
        "Attend council meetings",
        "Represent community interests"
      ],
      typicalAdvancement: "2-6 years"
    },
    {
      title: "State Assembly Member",
      description: "Represents a district in the state legislature's lower house.",
      keyResponsibilities: [
        "Propose and vote on legislation",
        "Serve on committees",
        "Work with constituents"
      ],
      typicalAdvancement: "2-6 years"
    },
    {
      title: "State Senator",
      description: "Represents a district in the state senate, shaping state law.",
      keyResponsibilities: [
        "Draft and pass legislation",
        "Lead committees",
        "Advocate for district needs"
      ],
      typicalAdvancement: "Ongoing or move to higher office"
    }
  ],
  "Executive Chef": [
    {
      title: "Dishwasher / Busser",
      description: "Entry point in the restaurant industry, focusing on cleanliness and support.",
      keyResponsibilities: [
        "Clean dishes, utensils and kitchen equipment",
        "Maintain kitchen cleanliness",
        "Clear and clean tables",
        "Support kitchen staff"
      ],
      typicalAdvancement: "6-12 months"
    },
    {
      title: "Prep Cook",
      description: "Responsible for the initial preparation of ingredients before service begins.",
      keyResponsibilities: [
        "Prepare ingredients for line cooks",
        "Follow recipes and portion standards",
        "Maintain proper food storage",
        "Basic knife skills and food preparation"
      ],
      typicalAdvancement: "1-2 years"
    },
    {
      title: "Line Cook",
      description: "Handles specific stations in the kitchen during service hours.",
      keyResponsibilities: [
        "Prepare specific dishes at assigned stations",
        "Handle multiple orders simultaneously",
        "Maintain quality and consistency",
        "Work under pressure during peak hours"
      ],
      typicalAdvancement: "2-3 years"
    },
    {
      title: "Sous Chef",
      description: "The second-in-command in the kitchen hierarchy, supporting the head chef.",
      keyResponsibilities: [
        "Oversee daily kitchen operations",
        "Train and supervise kitchen staff",
        "Help develop menus and recipes",
        "Ensure food quality and safety standards"
      ],
      typicalAdvancement: "3-5 years"
    },
    {
      title: "Head Chef / Chef de Cuisine",
      description: "Leads the kitchen and is responsible for the culinary direction.",
      keyResponsibilities: [
        "Create and implement menus",
        "Manage kitchen budget and costs",
        "Supervise all kitchen personnel",
        "Maintain quality standards and consistency"
      ],
      typicalAdvancement: "5+ years"
    },
    {
      title: "Executive Chef",
      description: "Oversees all culinary operations, often across multiple kitchens or locations.",
      keyResponsibilities: [
        "Develop culinary concepts and brand standards",
        "Manage overall food costs and profitability",
        "Hire and develop culinary leadership team",
        "Set and maintain culinary vision and standards"
      ],
      typicalAdvancement: "Terminal position: Executive Chef"
    },
    {
      title: "Culinary Director / F&B Management",
      description: "Strategic leadership role that extends beyond the kitchen into business operations.",
      keyResponsibilities: [
        "Oversee multiple restaurants or F&B outlets",
        "Develop business strategies and growth plans",
        "Manage large teams across different locations",
        "Build brand reputation and customer loyalty"
      ],
      typicalAdvancement: "Business leadership role"
    }
  ]
}; 