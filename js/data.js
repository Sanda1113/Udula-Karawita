const timelineData = [
    {
        position: "left",
        title: "Early Life",
        content: "I grew up obsessed with the arts. Stage lights, scripts, the thrill of telling stories, and I'm still chasing the dream of becoming an award-winning actor. I got into school theatre early and later took on leadership roles, from English Drama Society secretary to Gavel Club president. My entrepreneurial started surfacing when I was 16. My passion for arts made me want to start an Artist Management company. At 18 I launched PlantedIce, an independent label to back youth artists who wanted to make unconventional work. At the time, we managed three artists, produced 6 projects, including the Bradby-anthem for the Prestigious Royal College, Colombo. We also did projects that touched the topics of Men's Mental Health and Social Issues related to politics."
    },
    {
        position: "right",
        title: "What's Happening Now",
        content: "I'm now an undergraduate in BCom (International Business), building the commercial toolkit to match my creative instincts. I'm a second-year student, balancing study with hands-on projects and production work. Professionally, I help run Digital Novelty as operations manager, where I lead productions for major clients (SLTMOBITEL, Dialog, Hemas, DFCC, Shangri-La, and more), owning timelines, teams, budgets, and creative execution. Earlier, I served as Project Manager at The Web Sushi, coordinating delivery across design and marketing, and as a Business Development Intern at N-able, supporting communications and exploring opportunities across technical units and product lines."
    },
    {
        position: "left",
        title: "AI & Automation",
        content: "My curiosity for AI and automation started at home. My father works in cybersecurity at Sri Lanka Telecom, and he's heavily involved in the field of IT and his colleagues were heavily involved in Automation. Hence, I tinkered early with ChatGPT, n8n, and Power Apps. Formal exposure (including AI for Everyone by deeplearning.ai) and my time at N-able deepened that interest and pushed me to thread automation into real workflows."
    },
    {
        position: "right",
        title: "Creative Pursuits",
        content: "On the creative side, I'm active on Sri Lanka's stages (Stages Youth Ensemble, Mind Adventures, Somalatha Subasinghe Playhouse, Blok & Dino), teach theatre to young actors at Royal College, and keep a foot in media through modeling and compering. I am also signed with Goya Models Sri Lanka. These experiences sharpen how I lead teams, communicate with stakeholders, and deliver culture-forward work at a professional standard."
    },
    {
        position: "left",
        title: "My Values",
        content: "Creative freedom, cultural impact, and the courage to keep reinventing. Currently, I'm in the process of building a platform focusing on Youth Empowerment, where we help young adults by talking about issues they face and touch on topics such as modern-day profitable skills and employment, Increasing quality of life etc."
    }
];

// Career Orientation Data
const careerData = {
    philosophy: `
        <p>My career orientation is firmly contemporary. A blend of protean and boundaryless models that gives me the freedom to define success on my own terms. The protean aspect reflects my values-driven approach: I choose projects and paths that align with my personal principles, whether that's creative freedom, youth empowerment, or using AI and automation to solve real problems.</p>
        <p>The boundaryless side comes from my refusal to stay confined to one role...</p>
    `,
    references: [
        "Hall, D. T. (2004). The protean career: A quarter-century journey. Journal of Vocational Behavior, 65(1), 1–13.",
        "Arthur, M. B., & Rousseau, D. M. (1996). The Boundaryless Career: A New Employment Principle for a New Organizational Era. Oxford University Press."
    ],
    assessment: `
        <p>From the 80,000 Hours test, my strongest motivators are creative freedom, cultural impact, global reach, and legacy building. My ranked career shortlist placed Social Services first, followed by the arts, both paths aligning with my drive for social impact and innovation.</p>
    `,
    plans: [
        "Plan A: Social entrepreneurship in AI, automation, and youth empowerment",
        "Plan B: Teaching",
        "Plan Z: Using my passion for fitness to create stability during setbacks"
    ],
    tests: [
        {
            name: "Claremont Purpose Test",
            description: "The Claremont Purpose Test measured my purpose score at 44/70, indicating a meaningful but still-developing sense of purpose. This suggests a strong alignment between my personal values and my work, but also highlights opportunities to deepen my vision and connect more with purpose-driven communities."
        },
        {
            name: "Career Aptitude Test",
            description: "Reinforced suitability for creative, people-oriented, and entrepreneurial roles - areas where I've already gained real-world experience."
        }
    ]
};

// Values data
const valuesData = [
    {
        icon: "fas fa-brain",
        title: "Creative Freedom",
        description: "I believe in the power of unrestricted creativity to solve problems and create meaningful impact. Innovation thrives when minds are free to explore."
    },
    {
        icon: "fas fa-globe",
        title: "Cultural Impact",
        description: "My work aims to leave a lasting impression on culture, whether through artistic expression or innovative solutions to social challenges."
    },
    {
        icon: "fas fa-robot",
        title: "Technological Advancement",
        description: "Embracing AI and automation to create efficient systems that empower people and businesses to achieve more with less effort."
    },
    {
        icon: "fas fa-users",
        title: "Youth Empowerment",
        description: "Committed to providing young people with the skills, knowledge, and opportunities they need to succeed in an ever-changing world."
    },
    {
        icon: "fas fa-graduation-cap",
        title: "Continuous Learning",
        description: "I embrace a growth mindset, constantly seeking new knowledge and skills to stay at the forefront of my fields of interest."
    },
    {
        icon: "fas fa-handshake",
        title: "Collaborative Excellence",
        description: "Great things are achieved through teamwork. I value diverse perspectives and believe the best results come from collaborative effort."
    }
];

// Projects data
const projectsData = [
    {
        image: "pics/nebula.png",
        title: "Nebula Institute of Technology - Corporate video",
        description: "Honored to have directed and produced the corporate video for Nebula Institute of Technology.",
        link: "https://www.linkedin.com/posts/udula-karawita-b54789293_honored-to-have-directed-and-produced-the-activity-7296029076174123008-z3bW"
    },
    {
        image: "pics/Happyman.jpg",
        title: "Happy man - A project for Men's mental health",
        description: "A project which follows a story of a young man's journey for his pursuit of purpose.",
        link: "https://www.linkedin.com/posts/udula-karawita-b54789293_its-mens-mental-health-month-lads-activity-7340999521688002560-AdIw"
    },
    {
        image: "pics/slt.png",
        title: "SLTMOBITEL - Rising FibreOn at the Headoffice",
        description: "A Mixed Reality Campaign for SLTMOBITEL's Rising FibreOn at their headquarters.",
        link: "https://www.linkedin.com/posts/udula-karawita-b54789293_remember-the-mixed-reality-campaigns-that-activity-7296022872160931841-x47h"
    },
    {
        image: "pics/pizza.png",
        title: "Dominos pizza - Jetpack delivery",
        description: "Creative advertisement concept for Dominos Pizza featuring jetpack delivery.",
        link: "https://www.linkedin.com/posts/udula-karawita-b54789293_heres-another-video-we-had-made-for-dominos-activity-7296022857006948352-FMay"
    },
    {
        image: "pics/dialog.png",
        title: "Dialog Axiata - Independence day celebrations",
        description: "A Mixed Reality Campaign for Dialog Axiata's Independence day celebrations.",
        link: "https://www.linkedin.com/posts/udula-karawita-b54789293_digital-noveltyflew-in-the-largestdialog-activity-7167757469472026624-eSAF"
    },
    {
        image: "pics/Bradby.jpg",
        title: "2023 Bradby Anthem for Royal College",
        description: "The official 2023 Bradby Anthem for the prestigious Royal College, Colombo 07.",
        link: "https://youtu.be/YWjCJSzNTqg?si=W-Howsv1J0hlxDpT"
    },
    {
        image: "pics/Waterforkings.jpg",
        title: "Mind Adventures - Water for Kings (Actor)",
        description: "Performed in Mind Adventures' production 'Water for Kings' marking their 25th anniversary, contributing to Sri Lanka's contemporary theatre scene.",
        link: "https://www.themorning.lk/articles/8UbL94U09o3j1ZMHhcmC"
    },
    {
        image: "pics/f.png",
        title: "Fairytales Suck by Angelo Pereira (Actor)",
        description: "Acted in Angelo Pereira's production 'Fairytales Suck', a contemporary take on traditional fairytales, featured in Daily Mirror.",
        link: "https://www.dailymirror.lk/life/Fairytales-Suck/243-306780"
    }
];