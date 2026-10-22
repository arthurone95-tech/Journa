// ========================================
// JOURNA - Frontend Configuration
// ========================================

export const CAREER_LISTS = {
    // 🎓 PROFESSIONAL CAREERS (University-based)
    PRO: [
        { 
            id: 1, name: "Doctor", description: "Diagnose and treat medical conditions, provide healthcare to patients.", 
            subjects: ["Biology", "Chemistry", "Mathematics", "Social Studies"], 
            skills: ["Critical Thinking", "Empathy", "Problem Solving", "Communication"],
            programs: { primary: ["General Science", "STEM – Biomedical Science"], secondary: ["General Arts", "Business"] }
        },
        { 
            id: 2, name: "Nurse", description: "Provide patient care, support doctors, and promote health education.", 
            subjects: ["Biology", "Chemistry", "English", "Social Studies"], 
            skills: ["Compassion", "Communication", "Attention to Detail", "Teamwork"],
            programs: { primary: ["General Science", "STEM – Biomedical Science"], secondary: ["Home Economics", "General Arts"] }
        },
        { 
            id: 3, name: "Pharmacist", description: "Dispense medications and advise patients on proper drug use.", 
            subjects: ["Biology", "Chemistry", "Mathematics", "Social Studies"], 
            skills: ["Accuracy", "Scientific Knowledge", "Patient Care", "Communication"],
            programs: { primary: ["General Science", "STEM – Biomedical Science"], secondary: ["General Arts", "Business"] }
        },
        { 
            id: 4, name: "Lawyer", description: "Advise clients on legal matters and represent them in court.", 
            subjects: ["English", "Social Studies", "Government"], 
            skills: ["Argumentation", "Research", "Communication", "Analytical Thinking"],
            programs: { primary: ["General Arts"], secondary: ["Business"] }
        },
        { 
            id: 5, name: "Teacher / Lecturer", description: "Educate and inspire students at primary, secondary, or university level.", 
            subjects: ["English", "Mathematics", "Subject-specific (e.g., English, Mathematics, Science, History)"], 
            skills: ["Patience", "Communication", "Organization", "Research", "Adaptability"],
            programs: { primary: ["General Arts", "General Science"], secondary: ["Business", "Home Economics"] }
        },
        { 
            id: 6, name: "Civil Engineer", description: "Design and oversee construction of infrastructure projects.", 
            subjects: ["Mathematics", "Physics", "Technical Drawing", "Geography"], 
            skills: ["Problem Solving", "Project Management", "Technical Skills", "Analytical Thinking"],
            programs: { primary: ["General Science", "STEM – Engineering Science"], secondary: ["Technical/Vocational"] }
        },
        { 
            id: 7, name: "Mechanical Engineer", description: "Design and develop mechanical systems and machines.", 
            subjects: ["Mathematics", "Physics", "Technical Drawing", "ICT"], 
            skills: ["Analytical Thinking", "Creativity", "Technical Knowledge"],
            programs: { primary: ["General Science", "STEM – Engineering Science"], secondary: ["Technical/Vocational"] }
        },
        { 
            id: 8, name: "Electrical Engineer", description: "Design and maintain electrical systems and equipment.", 
            subjects: ["Mathematics", "Physics", "ICT"], 
            skills: ["Problem Solving", "Attention to Detail", "Technical Skills", "Analytical Thinking"],
            programs: { primary: ["General Science", "STEM – Engineering Science"], secondary: ["Technical/Vocational"] }
        },
        { 
            id: 9, name: "Software Developer", description: "Create and maintain computer applications and systems.", 
            subjects: ["ICT", "Mathematics", "English", "Creative Arts"], 
            skills: ["Programming", "Problem Solving", "Creativity", "Collaboration"],
            programs: { primary: ["General Science", "STEM – Computing", "Business"], secondary: ["Visual Arts", "ICT"] }
        },
        { 
            id: 10, name: "Data Analyst / Statistician", description: "Interpret data, analyze trends, and provide insights for decision-making.", 
            subjects: ["Mathematics", "ICT", "Statistics"], 
            skills: ["Analytical Thinking", "Statistical Knowledge", "Communication", "Critical Thinking"],
            programs: { primary: ["General Science", "STEM – Computing", "Business"], secondary: ["General Arts"] }
        },
        { 
            id: 11, name: "Architect", description: "Design buildings and structures.", 
            subjects: ["Mathematics", "Technical Drawing", "Arts", "ICT"], 
            skills: ["Creativity", "Technical Drawing", "Spatial Awareness"],
            programs: { primary: ["General Science", "Visual Arts", "STEM – Engineering Science"], secondary: ["Business"] }
        },
        { 
            id: 12, name: "Accountant", description: "Manage financial records and ensure compliance.", 
            subjects: ["Mathematics", "Business", "Economics", "ICT"], 
            skills: ["Numerical Skills", "Attention to Detail", "Ethics", "Problem Solving"],
            programs: { primary: ["Business"], secondary: ["General Arts", "General Science"] }
        },
        { 
            id: 13, name: "Economist", description: "Analyze economic data and trends.", 
            subjects: ["Mathematics", "Economics", "Social Studies", "Government"], 
            skills: ["Analytical Thinking", "Research", "Critical Thinking", "Communication"],
            programs: { primary: ["Business", "General Arts"], secondary: ["General Science"] }
        },
        { 
            id: 14, name: "Psychologist / Therapist", description: "Study human behavior, provide mental health support and therapy.", 
            subjects: ["Biology", "Social Studies", "English"], 
            skills: ["Empathy", "Communication", "Analytical Skills", "Patience"],
            programs: { primary: ["General Arts"], secondary: ["General Science", "Home Economics"] }
        },
        { 
            id: 15, name: "Counsellor", description: "Provide guidance on personal, academic, and career issues.", 
            subjects: ["Social Studies", "English"], 
            skills: ["Active Listening", "Empathy", "Communication", "Problem Solving", "Confidentiality"],
            programs: { primary: ["General Arts"], secondary: ["Home Economics", "Business"] }
        },
        { 
            id: 16, name: "Journalist", description: "Research and report news stories.", 
            subjects: ["English", "Social Studies", "Arts", "ICT"], 
            skills: ["Writing", "Communication", "Research", "Critical Thinking"],
            programs: { primary: ["General Arts"], secondary: ["Business", "Visual Arts"] }
        },
        { 
            id: 17, name: "Social Worker", description: "Help individuals and families overcome challenges.", 
            subjects: ["Social Studies", "English", "Home Economics"], 
            skills: ["Empathy", "Communication", "Problem Solving", "Advocacy"],
            programs: { primary: ["General Arts", "Home Economics"], secondary: ["Business"] }
        },
        { 
            id: 18, name: "Environmental Scientist", description: "Study and protect the environment.", 
            subjects: ["Biology", "Chemistry", "Geography", "Mathematics"], 
            skills: ["Research", "Analytical Thinking", "Environmental Awareness", "Problem Solving"],
            programs: { primary: ["General Science", "STEM – Agric Science"], secondary: ["Agriculture"] }
        },
        { 
            id: 19, name: "Urban Planner", description: "Plan and develop land use in communities.", 
            subjects: ["Geography", "Social Studies", "Mathematics"], 
            skills: ["Planning", "Analytical Thinking", "Communication", "Project Management"],
            programs: { primary: ["General Arts", "STEM – Engineering Science"], secondary: ["Business"] }
        },
        { 
            id: 20, name: "Nutritionist / Dietitian", description: "Advise on food and nutrition to promote health and manage diseases.", 
            subjects: ["Biology", "Chemistry", "Food & Nutrition"], 
            skills: ["Nutritional Knowledge", "Communication", "Analytical Skills", "Public Health Awareness"],
            programs: { primary: ["General Science", "Home Economics"], secondary: ["Business"] }
        },
        { 
            id: 21, name: "Food Scientist / Technologist", description: "Research and develop food products and safety standards.", 
            subjects: ["Chemistry", "Biology", "Food Science"], 
            skills: ["Scientific Knowledge", "Research", "Quality Control"],
            programs: { primary: ["General Science", "STEM – Manufacturing Engineering"], secondary: ["Home Economics", "Business"] }
        },
        { 
            id: 22, name: "Childcare / Educator", description: "Care for and educate young children in early childhood settings.", 
            subjects: ["Social Studies", "English", "Home Economics"], 
            skills: ["Patience", "Creativity", "Communication", "Observation Skills"],
            programs: { primary: ["Home Economics", "General Arts"], secondary: ["Business"] }
        },
        { 
            id: 23, name: "Security Forces (Police, Soldier, etc.)", description: "Protect citizens, maintain law and order, serve in military operations.", 
            subjects: ["Social Studies", "Physical Education", "English", "Government"], 
            skills: ["Discipline", "Leadership", "Physical Fitness", "Integrity"],
            programs: { primary: ["General Arts"], secondary: ["Business", "Physical Education"] }
        },
        { 
            id: 24, name: "Pilot", description: "Operate aircraft to transport passengers, cargo, or perform aerial operations.", 
            subjects: ["Mathematics", "Physics", "English", "Geography"], 
            skills: ["Attention to Detail", "Decision Making", "Problem Solving", "Technical Skills", "Situational Awareness"],
            programs: { primary: ["General Science", "STEM – Aviation & Aerospace"], secondary: ["General Arts"] }
        },
        { 
            id: 25, name: "Air Host / Flight Attendant", description: "Ensure passenger safety, comfort, and provide excellent customer service on aircraft.", 
            subjects: ["English", "Tourism", "Customer Service"], 
            skills: ["Communication", "Customer Service", "Safety Awareness", "Problem Solving", "Cultural Awareness"],
            programs: { primary: ["General Arts", "Business", "Home Economics"], secondary: ["Visual Arts"] }
        }
    ],

    // 🔧 TECHNICAL/SKILLED CAREERS
    TECH: [
        { 
            id: 26, name: "Electrician", description: "Install and maintain electrical systems.", 
            subjects: ["Electrical Installation", "Mathematics", "Physics"], 
            skills: ["Safety Awareness", "Problem Solving", "Technical Skills", "Diagnostic Skills"],
            programs: { primary: ["Technical/Vocational"], secondary: ["STEM – Engineering Science"] }
        },
        { 
            id: 27, name: "Plumber", description: "Install and repair water and drainage systems.", 
            subjects: ["Plumbing", "Mathematics", "Science"], 
            skills: ["Problem Solving", "Manual Dexterity", "Safety Awareness", "Blueprint Reading"],
            programs: { primary: ["Technical/Vocational"], secondary: ["STEM – Engineering Science"] }
        },
        { 
            id: 28, name: "Welder", description: "Join metal parts using welding equipment.", 
            subjects: ["Welding", "Mathematics", "Physics"], 
            skills: ["Precision", "Safety Awareness", "Technical Skills", "Metal Properties Knowledge"],
            programs: { primary: ["Technical/Vocational"], secondary: ["STEM – Engineering Science"] }
        },
        { 
            id: 29, name: "Carpenter", description: "Build and repair wooden structures and furniture.", 
            subjects: ["Woodwork", "Mathematics", "Arts"], 
            skills: ["Creativity", "Precision", "Manual Skills", "Measurement Skills"],
            programs: { primary: ["Technical/Vocational", "Visual Arts"], secondary: ["Home Economics"] }
        },
        { 
            id: 30, name: "Mason", description: "Build structures with bricks and concrete blocks.", 
            subjects: ["Masonry", "Mathematics", "Physics"], 
            skills: ["Physical Strength", "Precision", "Safety Awareness", "Physical Stamina"],
            programs: { primary: ["Technical/Vocational"], secondary: ["STEM – Engineering Science"] }
        },
        { 
            id: 31, name: "Auto Mechanic", description: "Repair and maintain vehicles.", 
            subjects: ["Automotive Engineering", "Physics", "Mathematics"], 
            skills: ["Problem Solving", "Technical Knowledge", "Manual Skills", "Diagnostic Skills"],
            programs: { primary: ["Technical/Vocational", "STEM – Engineering Science"], secondary: ["Business"] }
        },
        { 
            id: 32, name: "HVAC Technician", description: "Install and repair heating and cooling systems.", 
            subjects: ["Refrigeration", "Physics", "Mathematics"], 
            skills: ["Problem Solving", "Technical Skills", "Safety Awareness", "Troubleshooting"],
            programs: { primary: ["Technical/Vocational", "STEM – Engineering Science"], secondary: [] }
        },
        { 
            id: 33, name: "Solar Technician", description: "Install and maintain solar energy systems.", 
            subjects: ["Solar Energy", "Physics", "ICT"], 
            skills: ["Technical Skills", "Problem Solving", "Environmental Awareness", "Electrical Safety"],
            programs: { primary: ["Technical/Vocational", "STEM – Engineering Science"], secondary: [] }
        },
        { 
            id: 34, name: "Machine Operator", description: "Operate industrial machinery.", 
            subjects: ["Machine Operations", "Mathematics", "Physics"], 
            skills: ["Attention to Detail", "Safety Awareness", "Technical Skills", "Mechanical Aptitude"],
            programs: { primary: ["Technical/Vocational"], secondary: ["STEM – Manufacturing Engineering"] }
        },
        { 
            id: 35, name: "Fabricator", description: "Create metal structures and components.", 
            subjects: ["Metal Fabrication", "Mathematics", "Physics"], 
            skills: ["Precision", "Technical Skills", "Creativity", "Welding Knowledge"],
            programs: { primary: ["Technical/Vocational"], secondary: ["STEM – Engineering Science"] }
        },
        { 
            id: 36, name: "Construction Worker", description: "Perform various tasks on construction sites.", 
            subjects: ["Construction", "Mathematics", "Physics"], 
            skills: ["Physical Strength", "Teamwork", "Safety Awareness", "Safety Compliance"],
            programs: { primary: ["Technical/Vocational"], secondary: [] }
        },
        { 
            id: 37, name: "Heavy Equipment Operator", description: "Operate construction equipment.", 
            subjects: ["Heavy Machinery", "Mathematics", "Physics"], 
            skills: ["Precision", "Safety Awareness", "Technical Skills", "Spatial Awareness"],
            programs: { primary: ["Technical/Vocational"], secondary: ["STEM – Engineering Science"] }
        },
        { 
            id: 38, name: "Refrigeration Technician", description: "Install and repair cooling systems.", 
            subjects: ["Refrigeration", "Physics", "Mathematics"], 
            skills: ["Problem Solving", "Technical Skills", "Safety Awareness", "Troubleshooting"],
            programs: { primary: ["Technical/Vocational"], secondary: ["STEM – Engineering Science"] }
        },
        { 
            id: 39, name: "Industrial Technician", description: "Maintain industrial equipment.", 
            subjects: ["Industrial Maintenance", "Physics", "Mathematics"], 
            skills: ["Problem Solving", "Technical Skills", "Maintenance", "Preventive Maintenance"],
            programs: { primary: ["Technical/Vocational", "STEM – Engineering Science"], secondary: [] }
        },
        { 
            id: 40, name: "Electronics Repair Technician", description: "Repair electronic devices and equipment.", 
            subjects: ["Electronics", "ICT", "Physics"], 
            skills: ["Precision", "Problem Solving", "Technical Skills", "Diagnostic Skills"],
            programs: { primary: ["Technical/Vocational", "ICT"], secondary: ["STEM – Computing"] }
        },
        { 
            id: 41, name: "Hairdresser / Barber", description: "Cut, style, and treat hair; provide grooming services for men and women.", 
            subjects: ["Home Economics", "Business", "Arts"], 
            skills: ["Creativity", "Customer Service", "Attention to Detail", "Client Consultation"],
            programs: { primary: ["Home Economics", "Visual Arts"], secondary: ["Business"] }
        },
        { 
            id: 42, name: "Dressmaker / Tailor", description: "Design, create, and alter clothing and garments.", 
            subjects: ["Home Economics", "Visual Arts", "Textiles"], 
            skills: ["Sewing Skills", "Creativity", "Attention to Detail", "Pattern Making"],
            programs: { primary: ["Home Economics", "Visual Arts"], secondary: ["Business"] }
        },
        { 
            id: 43, name: "Painter / Decorator", description: "Apply paint, wallpaper, and finishes to buildings and structures.", 
            subjects: ["Painting & Decorating", "Arts", "Mathematics"], 
            skills: ["Attention to Detail", "Creativity", "Manual Skills", "Color Theory"],
            programs: { primary: ["Technical/Vocational", "Visual Arts"], secondary: [] }
        },
        { 
            id: 44, name: "Tiler", description: "Install ceramic, marble, and stone tiles on floors and walls.", 
            subjects: ["Tiling", "Mathematics", "Arts"], 
            skills: ["Precision", "Attention to Detail", "Manual Dexterity", "Surface Preparation"],
            programs: { primary: ["Technical/Vocational"], secondary: ["Visual Arts"] }
        },
        { 
            id: 45, name: "Glazier", description: "Install glass in windows, doors, and commercial buildings.", 
            subjects: ["Glass Installation", "Mathematics", "Physics"], 
            skills: ["Precision", "Safety Awareness", "Technical Skills", "Glass Handling Safety"],
            programs: { primary: ["Technical/Vocational"], secondary: [] }
        }
    ],

    // 💼 BUSINESS/ENTREPRENEURSHIP CAREERS
    BUS: [
        { 
            id: 46, name: "Business Owner / Entrepreneur", description: "Start and run your own business venture.", 
            subjects: ["Business", "Economics", "Mathematics", "ICT"], 
            skills: ["Leadership", "Risk Taking", "Creativity", "Management", "Financial Literacy"],
            programs: { primary: ["Business"], secondary: ["General Arts", "Home Economics"] }
        },
        { 
            id: 47, name: "Real Estate Developer", description: "Develop and sell property.", 
            subjects: ["Business", "Economics", "Mathematics", "Technical Drawing"], 
            skills: ["Negotiation", "Project Management", "Market Analysis"],
            programs: { primary: ["Business", "General Arts"], secondary: ["Home Economics"] }
        },
        { 
            id: 48, name: "Event Planner", description: "Organize and coordinate events.", 
            subjects: ["Business", "Arts", "English", "Home Economics"], 
            skills: ["Organization", "Communication", "Creativity", "Budgeting"],
            programs: { primary: ["Home Economics", "General Arts"], secondary: ["Business"] }
        },
        { 
            id: 49, name: "Digital Marketer", description: "Promote products and services online.", 
            subjects: ["Business", "ICT", "English"], 
            skills: ["Creativity", "Analytical Skills", "Communication", "Data Analysis"],
            programs: { primary: ["Business", "ICT"], secondary: ["General Arts"] }
        },
        { 
            id: 50, name: "Sales Executive", description: "Sell products and services to customers.", 
            subjects: ["Business", "English", "Mathematics", "Social Studies"], 
            skills: ["Persuasion", "Communication", "Customer Service", "Resilience"],
            programs: { primary: ["Business"], secondary: ["General Arts"] }
        },
        { 
            id: 51, name: "Retail Trader", description: "Buy and sell goods in retail market.", 
            subjects: ["Business", "Mathematics", "English", "Home Economics"], 
            skills: ["Communication", "Negotiation", "Customer Service", "Inventory Management"],
            programs: { primary: ["Business"], secondary: ["Home Economics"] }
        },
        { 
            id: 52, name: "Business Consultant", description: "Advise businesses on improving performance.", 
            subjects: ["Business", "Economics", "Mathematics", "ICT"], 
            skills: ["Analytical Thinking", "Communication", "Problem Solving", "Strategic Thinking"],
            programs: { primary: ["Business"], secondary: ["General Arts"] }
        },
        { 
            id: 53, name: "Logistics Manager", description: "Manage supply chain and distribution.", 
            subjects: ["Business", "Mathematics", "ICT", "Social Studies"], 
            skills: ["Organization", "Problem Solving", "Leadership", "Supply Chain Knowledge"],
            programs: { primary: ["Business"], secondary: ["General Arts"] }
        },
        { 
            id: 54, name: "Financial Advisor", description: "Advise clients on financial planning.", 
            subjects: ["Business", "Mathematics", "Economics", "Social Studies"], 
            skills: ["Analytical Skills", "Communication", "Trustworthiness", "Empathy"],
            programs: { primary: ["Business"], secondary: ["General Arts"] }
        },
        { 
            id: 55, name: "Marketing Manager", description: "Plan and execute marketing strategies.", 
            subjects: ["Business", "English", "ICT"], 
            skills: ["Creativity", "Strategy", "Communication", "Analytical Skills"],
            programs: { primary: ["Business"], secondary: ["General Arts"] }
        },
        { 
            id: 56, name: "Chef / Catering Services", description: "Prepare meals and provide food services for events and establishments.", 
            subjects: ["Food & Nutrition", "Business", "Home Economics"], 
            skills: ["Culinary Skills", "Customer Service", "Business Management", "Menu Planning"],
            programs: { primary: ["Home Economics", "Business"], secondary: ["General Arts"] }
        },
        { 
            id: 57, name: "Hotel / Hospitality Manager", description: "Manage hotel operations and hospitality services.", 
            subjects: ["Business", "Home Economics", "English"], 
            skills: ["Management", "Customer Service", "Organization", "Leadership"],
            programs: { primary: ["Home Economics", "Business"], secondary: ["General Arts"] }
        },
        { 
            id: 58, name: "Home / Household Manager", description: "Manage household operations and domestic services.", 
            subjects: ["Home Economics", "Business", "Management"], 
            skills: ["Organization", "Budgeting", "Time Management"],
            programs: { primary: ["Home Economics"], secondary: ["Business"] }
        },
        { 
            id: 59, name: "Human Resources Manager", description: "Manage recruitment, employee relations, training, and company culture.", 
            subjects: ["Business", "Social Studies", "English"], 
            skills: ["Communication", "Leadership", "Organization", "Problem Solving", "Conflict Resolution"],
            programs: { primary: ["General Arts", "Business"], secondary: ["Home Economics"] }
        },
        { 
            id: 60, name: "Banker", description: "Handle financial transactions, loans, accounts, and customer banking services.", 
            subjects: ["Business", "Mathematics", "Economics", "ICT"], 
            skills: ["Numerical Skills", "Customer Service", "Attention to Detail", "Integrity"],
            programs: { primary: ["Business"], secondary: ["General Arts"] }
        },
        { 
            id: 61, name: "Farmer (Crops / Livestock)", description: "Cultivate crops, raise livestock, and manage agricultural operations.", 
            subjects: ["Agriculture", "Science", "Business"], 
            skills: ["Agricultural Knowledge", "Business Management", "Planning", "Physical Stamina", "Sustainability Knowledge"],
            programs: { primary: ["Agriculture", "Business"], secondary: ["General Science"] }
        }
    ],

    // 🎨 CREATIVE CAREERS
    CRE: [
        { 
            id: 62, name: "Graphic Designer", description: "Create visual designs for print and digital media.", 
            subjects: ["Arts", "ICT", "English", "Mathematics"], 
            skills: ["Creativity", "Software Skills", "Visual Communication", "Typography"],
            programs: { primary: ["Visual Arts", "ICT"], secondary: ["General Arts", "Business"] }
        },
        { 
            id: 63, name: "Fashion Designer / Boutique Owner", description: "Design clothing and accessories or own a fashion boutique.", 
            subjects: ["Arts", "Home Economics", "Business"], 
            skills: ["Creativity", "Sewing Skills", "Trend Awareness", "Business Management", "Trend Forecasting"],
            programs: { primary: ["Home Economics", "Visual Arts"], secondary: ["Business"] }
        },
        { 
            id: 64, name: "Photo / Videographer", description: "Capture and edit photographs and videos for various purposes.", 
            subjects: ["Arts", "ICT", "English"], 
            skills: ["Creativity", "Technical Skills", "Visual Composition", "Storytelling"],
            programs: { primary: ["Visual Arts", "ICT"], secondary: ["General Arts"] }
        },
        { 
            id: 65, name: "Musician", description: "Create and perform music.", 
            subjects: ["Arts", "Music", "English", "ICT"], 
            skills: ["Musical Talent", "Creativity", "Performance", "Ear Training"],
            programs: { primary: ["Visual Arts", "General Arts"], secondary: ["ICT"] }
        },
        { 
            id: 66, name: "Actor", description: "Perform in theater, film, or television.", 
            subjects: ["Arts", "English", "Drama", "Physical Education"], 
            skills: ["Performance", "Creativity", "Communication", "Emotional Intelligence"],
            programs: { primary: ["General Arts", "Visual Arts"], secondary: ["Business"] }
        },
        { 
            id: 67, name: "Content Creator", description: "Create digital content for online platforms.", 
            subjects: ["Arts", "ICT", "English", "Business"], 
            skills: ["Creativity", "Digital Skills", "Storytelling", "Audience Engagement"],
            programs: { primary: ["Visual Arts", "ICT"], secondary: ["Business"] }
        },
        { 
            id: 68, name: "Animator", description: "Create animated content for various media.", 
            subjects: ["Arts", "ICT", "Mathematics"], 
            skills: ["Creativity", "Software Skills", "Storytelling", "Timing & Motion"],
            programs: { primary: ["Visual Arts", "STEM – Computing"], secondary: ["ICT"] }
        },
        { 
            id: 69, name: "Interior Designer", description: "Design interior spaces.", 
            subjects: ["Arts", "Technical Drawing", "Business", "Mathematics"], 
            skills: ["Creativity", "Spatial Awareness", "Communication", "Color Theory"],
            programs: { primary: ["Visual Arts", "Home Economics"], secondary: ["Business"] }
        },
        { 
            id: 70, name: "UI/UX / App Designer", description: "Design user interfaces and experiences for apps and websites.", 
            subjects: ["Arts", "ICT", "Psychology"], 
            skills: ["Creativity", "User Research", "Technical Skills"],
            programs: { primary: ["Visual Arts", "STEM – Computing"], secondary: ["ICT"] }
        },
        { 
            id: 71, name: "Sound Engineer", description: "Record, mix, edit, and produce audio for music, film, and events.", 
            subjects: ["Arts", "ICT", "Music", "Physics"], 
            skills: ["Technical Skills", "Attention to Detail", "Creativity", "Audio Knowledge", "Acoustics Knowledge"],
            programs: { primary: ["Visual Arts", "ICT"], secondary: ["General Arts"] }
        }
    ],

    // ⚽ SPORTS/PERFORMANCE CAREERS
    SPT: [
        { 
            id: 72, name: "Player (Football, Volleyball, etc.)", description: "Play professional sports in various disciplines.", 
            subjects: ["Physical Education", "English"], 
            skills: ["Athletic Ability", "Teamwork", "Discipline", "Competitiveness", "Dedication"],
            programs: { primary: ["General Arts", "Physical Education"], secondary: ["Business"] }
        },
        { 
            id: 73, name: "Athlete", description: "Compete in track and field or individual sports events.", 
            subjects: ["Physical Education", "Science"], 
            skills: ["Athletic Ability", "Discipline", "Competitiveness", "Focus"],
            programs: { primary: ["General Arts", "Physical Education"], secondary: ["General Science"] }
        },
        { 
            id: 74, name: "Coach / Fitness Trainer", description: "Train athletes or help clients achieve fitness goals.", 
            subjects: ["Physical Education", "Biology", "Psychology"], 
            skills: ["Leadership", "Communication", "Sport Knowledge", "Motivation"],
            programs: { primary: ["General Arts", "Physical Education"], secondary: ["Business"] }
        },
        { 
            id: 75, name: "Referee / Sports Official", description: "Officiate sports matches and enforce rules.", 
            subjects: ["Physical Education", "English"], 
            skills: ["Fairness", "Decision Making", "Communication", "Rule Knowledge"],
            programs: { primary: ["General Arts", "Physical Education"], secondary: ["Business"] }
        },
        { 
            id: 76, name: "Dancer", description: "Perform dance professionally.", 
            subjects: ["Arts", "Physical Education", "Music"], 
            skills: ["Physical Ability", "Creativity", "Performance", "Rhythm"],
            programs: { primary: ["Visual Arts", "Physical Education"], secondary: ["General Arts"] }
        }
    ]
};

// ========================================
// 📋 SECTION 2: ASSESSMENT QUESTIONS (13 Questions)
// ========================================

export const ASSESSMENT_QUESTIONS = [
    {
        id: 1,
        text: "Which subjects do you enjoy most?",
        type: "multi",
        options: [
            { text: "Mathematics" },
            { text: "Science" },
            { text: "ICT / Computer" },
            { text: "Hands-on Skills (e.g., woodwork, metalwork)" },
            { text: "Arts / Creative (e.g., drawing, music)" },
            { text: "Business / Economics" },
            { text: "English / Languages" },
            { text: "Social Studies" },
            { text: "Home Economics (e.g., cooking, sewing)" }
        ],
        maxSelections: 2
    },
    {
        id: 2,
        text: "What type of activities do you enjoy most?",
        type: "multi",
        options: [
            { text: "Figuring out how things work / Solving problems" },
            { text: "Fixing or building things (e.g., repairing gadgets, woodwork)" },
            { text: "Convincing people / Selling things" },
            { text: "Drawing, designing, or making videos" },
            { text: "Playing sports, dancing, or acting" },
            { text: "Helping others (e.g., counselling, social work, healthcare)" },
            { text: "Leading a group / Organizing events" },
            { text: "Cooking or baking" },
            { text: "Taking care of children, elderly, or sick people" },
            { text: "Protecting and serving the community" }
        ],
        maxSelections: 2
    },
    {
        id: 3,
        text: "What kind of work environment do you prefer?",
        type: "single",
        options: [
            { text: "Office / Indoor workspace" },
            { text: "Workshop / Garage / Outdoor work" },
            { text: "Market / Shop / Business place" },
            { text: "Studio / Creative space (e.g., art room)" },
            { text: "Sports field / Stadium / Outdoor" },
            { text: "Kitchen / Restaurant / Food place" },
            { text: "Government / Military / Security setting" },
            { text: "Cockpit / Aviation setting" }
        ]
    },
    {
        id: 4,
        text: "What are you naturally good at?",
        type: "multi",
        options: [
            { text: "Thinking things through / Solving problems step by step" },
            { text: "Working with your hands / Building or fixing things" },
            { text: "Talking to people / Explaining things well" },
            { text: "Coming up with new ideas / Being creative" },
            { text: "Being strong / Good at sports or physical activities" },
            { text: "Cooking / Preparing food" },
            { text: "Sewing / Crafting / Making things by hand" },
            { text: "Listening and giving advice" },
            { text: "Managing money and numbers" }
        ],
        maxSelections: 2
    },
    {
        id: 5,
        text: "How do you prefer to work?",
        type: "single",
        options: [
            { text: "With numbers and thinking" },
            { text: "With tools and machines" },
            { text: "With people and money" },
            { text: "With ideas and creativity" },
            { text: "With physical activity (e.g., moving around)" },
            { text: "With food and materials (e.g., cooking, crafting)" }
        ]
    },
    {
        id: 6,
        text: "What motivates you the most?",
        type: "single",
        options: [
            { text: "Learning new things / Becoming an expert" },
            { text: "Building or fixing things" },
            { text: "Making money / Running a business" },
            { text: "Expressing yourself / Showing your ideas" },
            { text: "Competing / Being the best / Performing on stage" },
            { text: "Serving / Helping others" },
            { text: "Serving and protecting my country" }
        ]
    },
    {
        id: 7,
        text: "Are you willing to study for many years (4-8+)?",
        type: "single",
        options: [
            { text: "Yes, I'm ready for a long journey" },
            { text: "Maybe, depends on what I want to do" },
            { text: "No, I prefer shorter training" }
        ]
    },
    {
        id: 8,
        text: "Do you enjoy working with your hands?",
        type: "single",
        options: [
            { text: "Yes, I love it!" },
            { text: "Sometimes, I enjoy both" },
            { text: "No, I prefer other things" }
        ]
    },
    {
        id: 9,
        text: "Do you like taking risks (e.g., starting something new)?",
        type: "single",
        options: [
            { text: "Yes, I like trying new things" },
            { text: "Sometimes, if I'm sure" },
            { text: "No, I prefer to be safe" }
        ]
    },
    {
        id: 10,
        text: "Which best describes you?",
        type: "single",
        options: [
            { text: "I like to follow rules and have a plan" },
            { text: "I like working with my hands" },
            { text: "I like to be my own boss" },
            { text: "I like to create and design" },
            { text: "I like to move, play, and stay active" },
            { text: "I like to care for and help people" },
            { text: "I like to protect and serve" }
        ]
    },
    {
        id: 11,
        text: "What kind of success do you want?",
        type: "single",
        options: [
            { text: "Getting good grades / Being respected for my knowledge" },
            { text: "Being great at what I do / Perfecting my craft" },
            { text: "Making money / Building something successful" },
            { text: "Being famous / People knowing my name" },
            { text: "Doing what I love every day" },
            { text: "Making a difference in people's lives" }
        ]
    },
    {
        id: 12,
        text: "Which career path sounds most appealing?",
        type: "single",
        options: [
            { text: "University (e.g., Doctor, Lawyer, Engineer)" },
            { text: "Technical / Vocational (e.g., Electrician, Plumber, Hairdresser, Tiler)" },
            { text: "Starting my own business" },
            { text: "Creative / Media (e.g., Graphic Designer, Musician, Photo/Videographer, Sound Engineer)" },
            { text: "Sports / Entertainment (e.g., Footballer, Dancer)" },
            { text: "Culinary / Hospitality (e.g., Chef, Hotel Manager)" },
            { text: "Security / Military / Aviation (e.g., Police, Soldier, Pilot)" },
            { text: "Agriculture / Farming (e.g., Farmer, Agribusiness)" }
        ]
    },
    {
        id: 13,
        text: "What would you enjoy doing daily?",
        type: "single",
        options: [
            { text: "Reading / Researching / Learning new things" },
            { text: "Building / Repairing / Fixing things" },
            { text: "Selling / Managing / Leading people" },
            { text: "Designing / Creating / Making art" },
            { text: "Training / Competing / Performing" },
            { text: "Cooking / Serving others" },
            { text: "Protecting / Serving / Helping the community" },
            { text: "Flying / Traveling / Operating aircraft" }
        ]
    }
];

// ========================================
// 📋 SECTION 3: ROADMAP TEMPLATES (Fallback only)
// ========================================

export const ROADMAP_TEMPLATES = {
    PRO: {
        jhs: "Complete JHS with focus on core subjects (English, Mathematics, Science, Social Studies). Achieve good grades (B3 and above).",
        shs: "Pursue General Science, General Arts, Business, or Home Economics at SHS based on your career choice. Focus on relevant electives.",
        tertiary: "Apply to university for a 4-year degree program. Consider internships during breaks.",
        duration: "3 years JHS + 3 years SHS + 4+ years University = 10+ years total",
        next: "Pass WASSCE with good grades, write university entrance exams, apply to universities."
    },
    TECH: {
        jhs: "Complete JHS with focus on practical subjects and technical skills.",
        shs: "Pursue Technical/Vocational program at SHS, TVET institution, or Home Economics program.",
        tertiary: "Complete technical training (2-3 years) at a technical university or vocational institute.",
        duration: "3 years JHS + 3 years SHS/TVET + 2-3 years Training = 8-9 years total",
        next: "Complete technical training, obtain trade certification, seek apprenticeship or employment."
    },
    BUS: {
        jhs: "Complete JHS with focus on business-related subjects and mathematics.",
        shs: "Pursue Business, General Arts, or Home Economics program at SHS.",
        tertiary: "Consider university (4 years) or polytechnic. Alternatively, start small business while learning.",
        duration: "3 years JHS + 3 years SHS + 3-4 years Training = 9-10 years total",
        next: "Gain business experience, develop business plan, secure capital, launch business."
    },
    CRE: {
        jhs: "Complete JHS while developing creative skills through practice.",
        shs: "Pursue Visual Arts, General Arts, or Home Economics at SHS. Build portfolio of creative work.",
        tertiary: "Consider art school or university (3-4 years) or learn through workshops/online courses.",
        duration: "3 years JHS + 3 years SHS + 3-4 years Training = 9-10 years total",
        next: "Build portfolio, network with industry professionals, seek freelance opportunities."
    },
    SPT: {
        jhs: "Complete JHS while participating in sports and physical activities.",
        shs: "Pursue General Arts with focus on Physical Education. Join school sports teams.",
        tertiary: "Consider sports academy, coaching certification, or university sports program.",
        duration: "3 years JHS + 3 years SHS + 2-4 years Training = 8-10 years total",
        next: "Train consistently, join clubs/teams, seek coaching opportunities, get certified."
    }
};

// ========================================
// 📋 SECTION 4: CAREER WEIGHTS
// ========================================

export const CAREER_WEIGHTS = {
    PRO: 1.0,
    TECH: 1.0,
    BUS: 1.0,
    CRE: 1.0,
    SPT: 1.0
};

// ========================================
// 🛠️ HELPER FUNCTIONS
// ========================================

export const CAREERS = CAREER_LISTS;

export const getCareerById = (id) => {
    for (const category of Object.values(CAREER_LISTS)) {
        const career = category.find(c => c.id === id);
        if (career) return { ...career, category: getCategoryById(id) };
    }
    return null;
};

export const getCategoryById = (id) => {
    if (id >= 1 && id <= 25) return "PRO";
    if (id >= 26 && id <= 45) return "TECH";
    if (id >= 46 && id <= 61) return "BUS";
    if (id >= 62 && id <= 71) return "CRE";
    if (id >= 72 && id <= 76) return "SPT";
    return "BUS";
};

export const getCategoryName = (code) => {
    const names = {
        PRO: "Professional",
        TECH: "Technical/Skilled",
        BUS: "Business/Entrepreneurship",
        CRE: "Creative",
        SPT: "Sports/Performance"
    };
    return names[code] || code;
};

export const getAllCareers = () => {
    return [
        ...CAREER_LISTS.PRO.map(c => ({ ...c, category: "PRO" })),
        ...CAREER_LISTS.TECH.map(c => ({ ...c, category: "TECH" })),
        ...CAREER_LISTS.BUS.map(c => ({ ...c, category: "BUS" })),
        ...CAREER_LISTS.CRE.map(c => ({ ...c, category: "CRE" })),
        ...CAREER_LISTS.SPT.map(c => ({ ...c, category: "SPT" }))
    ];
};

export const QUESTIONS = ASSESSMENT_QUESTIONS;

export default {
    CAREER_LISTS,
    CAREERS,
    ASSESSMENT_QUESTIONS,
    QUESTIONS,
    CAREER_WEIGHTS,
    ROADMAP_TEMPLATES,
    getCareerById,
    getCategoryById,
    getCategoryName,
    getAllCareers
};