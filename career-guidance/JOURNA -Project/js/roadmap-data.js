// ========================================
// JOURNA - Individual Career Roadmaps
// ========================================
// 📝 HOW TO EDIT:
// Each career has its own roadmap. Find the career by name and edit its pathways.
// Some careers have multiple pathways (Pathway 1, Pathway 2, etc.)
// ========================================

export const CAREER_ROADMAPS = {
    // ========================================
    // 🎓 PROFESSIONAL CAREERS
    // ========================================

    Doctor: {
        pathways: [
            {
                title: "Medical School Pathway",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on core subjects. Achieve good grades (B3 and above)." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or STEM program. Focus on Biology, Chemistry, Physics, and Mathematics." },
                    { stage: "University (Medical School)", duration: "6 years", description: "Complete MBChB or equivalent medical degree. Includes clinical rotations and practical training." },
                    { stage: "Housemanship / Internship", duration: "2 years", description: "Complete mandatory supervised clinical practice in various departments." },
                    { stage: "Specialist Training (Optional)", duration: "3-5 years", description: "Pursue specialization in a specific field of medicine." }
                ],
                totalDuration: "3 + 3 + 6 + 2 = 14+ years",
                nextSteps: "Pass medical licensing exams, apply for housemanship positions, consider specialization."
            },
            {
                title: "Graduate Entry Medicine",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on core subjects." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or STEM program." },
                    { stage: "University (First Degree)", duration: "4 years", description: "Complete a degree in any science or health-related field." },
                    { stage: "Graduate Entry Medical School", duration: "4 years", description: "Complete accelerated MBChB program for graduates." },
                    { stage: "Housemanship / Internship", duration: "2 years", description: "Complete mandatory supervised clinical practice." }
                ],
                totalDuration: "3 + 3 + 4 + 4 + 2 = 16 years (including first degree)",
                nextSteps: "Pass medical licensing exams, apply for housemanship positions, consider specialization."
            }
        ]
    },

    Nurse: {
        pathways: [
            {
                title: "University Nursing",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Science and Mathematics." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or STEM program." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Nursing degree." },
                    { stage: "Licensure", duration: "6 months", description: "Pass Nursing and Midwifery Council licensing exam." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Apply for nursing positions, join professional associations, consider specialization."
            },
            {
                title: "Nursing Training College",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Science." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or Home Economics." },
                    { stage: "Nursing Training College", duration: "3 years", description: "Complete Diploma in Nursing." },
                    { stage: "Licensure", duration: "6 months", description: "Pass Nursing and Midwifery Council licensing exam." }
                ],
                totalDuration: "3 + 3 + 3 = 9 years",
                nextSteps: "Apply for nursing positions, consider upgrading to degree while working."
            }
        ]
    },

    Pharmacist: {
        pathways: [
            {
                title: "University Pharmacy",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Science." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or STEM program." },
                    { stage: "University", duration: "6 years", description: "Complete Doctor of Pharmacy (PharmD) or BPharm degree." },
                    { stage: "Internship", duration: "1 year", description: "Complete supervised pharmacy practice." }
                ],
                totalDuration: "3 + 3 + 6 + 1 = 13 years",
                nextSteps: "Pass Pharmacy Council licensing exam, apply for pharmacy positions."
            },
            {
                title: "Diploma + Top-up",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Science." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or STEM." },
                    { stage: "Diploma in Pharmacy", duration: "3 years", description: "Complete diploma at a College of Health Sciences." },
                    { stage: "Top-up to BPharm", duration: "2 years", description: "Complete Bachelor of Pharmacy through top-up program." },
                    { stage: "Internship", duration: "1 year", description: "Complete supervised pharmacy practice." }
                ],
                totalDuration: "3 + 3 + 3 + 2 + 1 = 12 years",
                nextSteps: "Pass Pharmacy Council licensing exam, apply for pharmacy positions."
            }
        ]
    },

    Lawyer: {
        pathways: [
            {
                title: "Legal Profession",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on English, Social Studies, and Government." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts program." },
                    { stage: "University", duration: "4 years", description: "Complete LLB degree." },
                    { stage: "Ghana School of Law", duration: "2 years", description: "Complete Professional Law Course." },
                    { stage: "Call to Bar", duration: "1 year", description: "Complete pupillage and get called to the Bar." }
                ],
                totalDuration: "3 + 3 + 4 + 2 + 1 = 13 years",
                nextSteps: "Apply to law firms, join Ghana Bar Association, practice as a lawyer."
            }
        ]
    },

    "Teacher / Lecturer": {
        pathways: [
            {
                title: "University Education (Teaching)",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on core subjects." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts, General Science, Business, or Home Economics based on teaching subject." },
                    { stage: "University", duration: "4 years", description: "Complete B.Ed degree in chosen subject area." },
                    { stage: "Licensure", duration: "6 months", description: "Pass National Teaching Council licensing exam." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Apply to schools, join Ghana National Association of Teachers."
            },
            {
                title: "College of Education",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on core subjects." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts, General Science, Business, or Home Economics." },
                    { stage: "College of Education", duration: "3 years", description: "Complete Diploma in Basic Education." },
                    { stage: "Licensure", duration: "6 months", description: "Pass National Teaching Council licensing exam." }
                ],
                totalDuration: "3 + 3 + 3 = 9 years",
                nextSteps: "Apply to schools, consider upgrading to degree while teaching."
            },
            {
                title: "Lecturer (University)",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on core subjects." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts or General Science." },
                    { stage: "University (Bachelor's)", duration: "4 years", description: "Complete undergraduate degree in chosen field." },
                    { stage: "Master's Degree", duration: "2 years", description: "Complete postgraduate studies." },
                    { stage: "PhD (Optional)", duration: "3-5 years", description: "Pursue doctorate for university lecturer positions." }
                ],
                totalDuration: "3 + 3 + 4 + 2 = 12 years minimum",
                nextSteps: "Apply for teaching positions at universities, pursue research."
            }
        ]
    },

    "Civil Engineer": {
        pathways: [
            {
                title: "University Engineering",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics and Science." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or STEM program." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Civil Engineering." },
                    { stage: "Professional Certification", duration: "2 years", description: "Work under supervision, pass professional exams." }
                ],
                totalDuration: "3 + 3 + 4 + 2 = 12 years",
                nextSteps: "Apply to engineering firms, pursue master's degree, become chartered engineer."
            },
            {
                title: "HND + Top-up",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics and Science." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or STEM." },
                    { stage: "HND in Civil Engineering", duration: "3 years", description: "Complete HND at a polytechnic or technical university." },
                    { stage: "Top-up to BSc", duration: "2 years", description: "Complete top-up degree at a university." },
                    { stage: "Professional Certification", duration: "2 years", description: "Work under supervision, pass professional exams." }
                ],
                totalDuration: "3 + 3 + 3 + 2 + 2 = 13 years",
                nextSteps: "Apply to engineering firms, pursue master's degree, become chartered engineer."
            }
        ]
    },

    "Mechanical Engineer": {
        pathways: [
            {
                title: "University Engineering",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics and Science." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or STEM program." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Mechanical Engineering." },
                    { stage: "Professional Certification", duration: "2 years", description: "Work under supervision, pass professional exams." }
                ],
                totalDuration: "3 + 3 + 4 + 2 = 12 years",
                nextSteps: "Apply to engineering firms, manufacturing companies, pursue specialization."
            },
            {
                title: "HND + Top-up",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics and Science." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or STEM." },
                    { stage: "HND in Mechanical Engineering", duration: "3 years", description: "Complete HND at a polytechnic or technical university." },
                    { stage: "Top-up to BSc", duration: "2 years", description: "Complete top-up degree at a university." },
                    { stage: "Professional Certification", duration: "2 years", description: "Work under supervision, pass professional exams." }
                ],
                totalDuration: "3 + 3 + 3 + 2 + 2 = 13 years",
                nextSteps: "Apply to engineering firms, manufacturing companies, pursue specialization."
            }
        ]
    },

    "Electrical Engineer": {
        pathways: [
            {
                title: "University Engineering",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics and Science." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or STEM program." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Electrical Engineering." },
                    { stage: "Professional Certification", duration: "2 years", description: "Work under supervision, pass professional exams." }
                ],
                totalDuration: "3 + 3 + 4 + 2 = 12 years",
                nextSteps: "Apply to power companies, engineering firms, pursue specialization in electronics or power systems."
            },
            {
                title: "HND + Top-up",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics and Science." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or STEM." },
                    { stage: "HND in Electrical Engineering", duration: "3 years", description: "Complete HND at a polytechnic or technical university." },
                    { stage: "Top-up to BSc", duration: "2 years", description: "Complete top-up degree at a university." },
                    { stage: "Professional Certification", duration: "2 years", description: "Work under supervision, pass professional exams." }
                ],
                totalDuration: "3 + 3 + 3 + 2 + 2 = 13 years",
                nextSteps: "Apply to power companies, engineering firms, pursue specialization."
            }
        ]
    },

    "Software Developer": {
        pathways: [
            {
                title: "University Education",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics and ICT." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science, STEM, or Business program." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Computer Science or Software Engineering." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Build portfolio, apply to tech companies, freelance, pursue certifications."
            },
            {
                title: "Bootcamp / Self-taught",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with basic computer skills." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Any program. Develop coding skills in free time." },
                    { stage: "Coding Bootcamp", duration: "6-12 months", description: "Complete intensive programming course." },
                    { stage: "Portfolio Development", duration: "Ongoing", description: "Build projects to showcase skills." }
                ],
                totalDuration: "3 + 3 + 1 = 7+ years",
                nextSteps: "Apply for junior developer positions, freelance, contribute to open source."
            }
        ]
    },

    "Data Analyst / Statistician": {
        pathways: [
            {
                title: "University Education",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science, STEM, or Business." },
                    { stage: "University", duration: "4 years", description: "Complete degree in Statistics, Mathematics, Computer Science, or Data Science." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Build data portfolio, apply for analyst positions, pursue certifications."
            },
            {
                title: "Online Certifications",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Any program with mathematics focus." },
                    { stage: "Online Courses", duration: "1-2 years", description: "Complete certifications in SQL, Python, Excel, Tableau." }
                ],
                totalDuration: "3 + 3 + 1-2 = 7-8 years",
                nextSteps: "Build portfolio, apply for entry-level data roles."
            }
        ]
    },

    Architect: {
        pathways: [
            {
                title: "University Architecture",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics and Arts." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science, Visual Arts, or STEM." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Architecture." },
                    { stage: "Internship", duration: "2 years", description: "Work under registered architect." },
                    { stage: "Professional Exam", duration: "1 year", description: "Pass Ghana Institute of Architects exam." }
                ],
                totalDuration: "3 + 3 + 4 + 2 + 1 = 13 years",
                nextSteps: "Apply to architecture firms, register with professional body, start own practice."
            },
            {
                title: "HND + Top-up",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics and Arts." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Visual Arts or STEM." },
                    { stage: "HND in Architectural Technology", duration: "3 years", description: "Complete HND at a polytechnic or technical university." },
                    { stage: "Top-up to BSc Architecture", duration: "2 years", description: "Complete top-up degree at a university." },
                    { stage: "Internship", duration: "2 years", description: "Work under registered architect." },
                    { stage: "Professional Exam", duration: "1 year", description: "Pass Ghana Institute of Architects exam." }
                ],
                totalDuration: "3 + 3 + 3 + 2 + 2 + 1 = 14 years",
                nextSteps: "Apply to architecture firms, register with professional body, start own practice."
            }
        ]
    },

    Accountant: {
        pathways: [
            {
                title: "University + Professional Certification",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business or General Arts." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Accounting." },
                    { stage: "Professional Certification", duration: "2-3 years", description: "Complete ICAG or ACCA certification." }
                ],
                totalDuration: "3 + 3 + 4 + 2-3 = 12-13 years",
                nextSteps: "Apply to accounting firms, work as auditor, start accounting practice."
            },
            {
                title: "Direct Professional Certification",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business program." },
                    { stage: "Professional Certification", duration: "3-5 years", description: "Complete ICAG or ACCA certification directly." }
                ],
                totalDuration: "3 + 3 + 3-5 = 9-11 years",
                nextSteps: "Apply to accounting firms, work in finance departments, start own practice."
            }
        ]
    },

    Economist: {
        pathways: [
            {
                title: "University Economics",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts, Business, or General Science." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Economics." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Pursue master's degree, work in banks, government, or research institutions."
            },
            {
                title: "Diploma + Top-up",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts or Business." },
                    { stage: "Diploma in Economics", duration: "2 years", description: "Complete diploma at a polytechnic." },
                    { stage: "Top-up to BSc", duration: "2 years", description: "Complete top-up degree at a university." }
                ],
                totalDuration: "3 + 3 + 2 + 2 = 10 years",
                nextSteps: "Pursue master's degree, work in banks, government, or research institutions."
            }
        ]
    },

    "Psychologist / Therapist": {
        pathways: [
            {
                title: "University Psychology",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Social Studies." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts or General Science." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Psychology." },
                    { stage: "Master's Degree", duration: "2 years", description: "Specialize in clinical, organizational, or educational psychology." }
                ],
                totalDuration: "3 + 3 + 4 + 2 = 12 years",
                nextSteps: "Apply for psychology positions, register with Ghana Psychological Council, open practice."
            },
            {
                title: "Diploma + Top-up",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Social Studies." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts." },
                    { stage: "Diploma in Psychology", duration: "2 years", description: "Complete diploma at a polytechnic or college." },
                    { stage: "Top-up to BSc", duration: "2 years", description: "Complete top-up degree at a university." },
                    { stage: "Master's Degree", duration: "2 years", description: "Specialize in clinical, organizational, or educational psychology." }
                ],
                totalDuration: "3 + 3 + 2 + 2 + 2 = 12 years",
                nextSteps: "Apply for psychology positions, register with Ghana Psychological Council, open practice."
            }
        ]
    },

    Counsellor: {
        pathways: [
            {
                title: "University Counselling",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Social Studies and English." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts with Psychology, Sociology, and English." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Guidance and Counselling or Psychology." },
                    { stage: "Professional Certification", duration: "1 year", description: "Obtain professional counselling certification." }
                ],
                totalDuration: "3 + 3 + 4 + 1 = 11 years",
                nextSteps: "Work in schools, universities, or open private practice."
            },
            {
                title: "Diploma + Top-up",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Social Studies and English." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts." },
                    { stage: "Diploma in Counselling", duration: "2 years", description: "Complete diploma at a polytechnic or college." },
                    { stage: "Top-up to BSc", duration: "2 years", description: "Complete top-up degree at a university." },
                    { stage: "Professional Certification", duration: "1 year", description: "Obtain professional counselling certification." }
                ],
                totalDuration: "3 + 3 + 2 + 2 + 1 = 11 years",
                nextSteps: "Work in schools, universities, or open private practice."
            }
        ]
    },

    Journalist: {
        pathways: [
            {
                title: "University Journalism",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on English." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts program." },
                    { stage: "University", duration: "4 years", description: "Complete BA Journalism or Communication Studies." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Apply to media houses, freelance, build portfolio."
            },
            {
                title: "Journalism Training Institute",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts." },
                    { stage: "Journalism Institute", duration: "2-3 years", description: "Complete diploma in journalism." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Apply to media houses, start as reporter, build experience."
            }
        ]
    },

    "Social Worker": {
        pathways: [
            {
                title: "University Social Work",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts or Home Economics." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Social Work." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Apply to social welfare department, NGOs, community organizations."
            },
            {
                title: "Diploma + Top-up",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts or Home Economics." },
                    { stage: "Diploma in Social Work", duration: "2 years", description: "Complete diploma at a polytechnic." },
                    { stage: "Top-up to BSc", duration: "2 years", description: "Complete top-up degree at a university." }
                ],
                totalDuration: "3 + 3 + 2 + 2 = 10 years",
                nextSteps: "Apply to social welfare department, NGOs, community organizations."
            }
        ]
    },

    "Environmental Scientist": {
        pathways: [
            {
                title: "University Environmental Science",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Science." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or STEM." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Environmental Science." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Work in environmental agencies, research institutions, or NGOs."
            },
            {
                title: "HND + Top-up",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Science." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or STEM." },
                    { stage: "HND in Environmental Science", duration: "3 years", description: "Complete HND at a polytechnic." },
                    { stage: "Top-up to BSc", duration: "2 years", description: "Complete top-up degree at a university." }
                ],
                totalDuration: "3 + 3 + 3 + 2 = 11 years",
                nextSteps: "Work in environmental agencies, research institutions, or NGOs."
            }
        ]
    },

    "Urban Planner": {
        pathways: [
            {
                title: "University Urban Planning",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Geography and Mathematics." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts or General Science." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Urban Planning or Geography." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Work with metropolitan assemblies, urban development agencies."
            },
            {
                title: "HND + Top-up",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Geography and Mathematics." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts." },
                    { stage: "HND in Urban Planning", duration: "3 years", description: "Complete HND at a polytechnic." },
                    { stage: "Top-up to BSc", duration: "2 years", description: "Complete top-up degree at a university." }
                ],
                totalDuration: "3 + 3 + 3 + 2 = 11 years",
                nextSteps: "Work with metropolitan assemblies, urban development agencies."
            }
        ]
    },

    "Nutritionist / Dietitian": {
        pathways: [
            {
                title: "University Nutrition",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Science." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or Home Economics." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Nutrition and Dietetics." },
                    { stage: "Internship", duration: "1 year", description: "Complete supervised practice." }
                ],
                totalDuration: "3 + 3 + 4 + 1 = 11 years",
                nextSteps: "Work in hospitals, clinics, public health, or private practice."
            },
            {
                title: "Diploma + Top-up",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Science." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Home Economics or General Science." },
                    { stage: "Diploma in Nutrition", duration: "2 years", description: "Complete diploma at a polytechnic." },
                    { stage: "Top-up to BSc", duration: "2 years", description: "Complete top-up degree at a university." },
                    { stage: "Internship", duration: "1 year", description: "Complete supervised practice." }
                ],
                totalDuration: "3 + 3 + 2 + 2 + 1 = 11 years",
                nextSteps: "Work in hospitals, clinics, public health, or private practice."
            }
        ]
    },

    "Food Scientist / Technologist": {
        pathways: [
            {
                title: "University Food Science",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Science." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or Home Economics." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Food Science and Technology." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Work in food manufacturing companies, research institutions, quality control."
            },
            {
                title: "HND + Top-up",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Science." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science or Home Economics." },
                    { stage: "HND in Food Science", duration: "3 years", description: "Complete HND at a polytechnic." },
                    { stage: "Top-up to BSc", duration: "2 years", description: "Complete top-up degree at a university." }
                ],
                totalDuration: "3 + 3 + 3 + 2 = 11 years",
                nextSteps: "Work in food manufacturing companies, research institutions, quality control."
            }
        ]
    },

    "Childcare / Educator": {
        pathways: [
            {
                title: "Early Childhood Education (College)",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts or Home Economics." },
                    { stage: "College of Education", duration: "3 years", description: "Complete Diploma in Early Childhood Education." }
                ],
                totalDuration: "3 + 3 + 3 = 9 years",
                nextSteps: "Work in daycares, preschools, start own childcare center."
            },
            {
                title: "University Early Childhood Education",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Home Economics or General Arts." },
                    { stage: "University", duration: "4 years", description: "Complete B.Ed Early Childhood Education." },
                    { stage: "Licensure", duration: "6 months", description: "Pass National Teaching Council licensing exam." }
                ],
                totalDuration: "3 + 3 + 4 + 0.5 = 10.5 years",
                nextSteps: "Work in daycares, preschools, start own childcare center."
            }
        ]
    },

    "Security Forces (Police, Soldier, etc.)": {
        pathways: [
            {
                title: "Police Service",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on all core subjects. Maintain physical fitness." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts. Join cadet corps or sports teams. Maintain good discipline." },
                    { stage: "Police Academy", duration: "2 years", description: "Complete recruit training at the Police Academy." },
                    { stage: "On-the-job Training", duration: "1 year", description: "Serve as a probationer officer, gain practical experience." }
                ],
                totalDuration: "3 + 3 + 2 + 1 = 9 years",
                nextSteps: "Serve in police, pursue specialization (CID, SWAT, etc.)."
            },
            {
                title: "Military Service",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on all core subjects. Maintain physical fitness." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts or General Science. Join cadet corps." },
                    { stage: "Military Academy", duration: "4 years", description: "Complete officer training at the Military Academy." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years (Officer)",
                nextSteps: "Serve in military, pursue specialization, progress through ranks."
            },
            {
                title: "Other Security Agencies (Immigration, Fire Service, etc.)",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on all core subjects. Maintain physical fitness." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts. Join cadet corps or sports teams." },
                    { stage: "Agency Training", duration: "2-3 years", description: "Complete training at the respective agency's training academy." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Serve in the agency, pursue specialization, progress through ranks."
            }
        ]
    },

    Pilot: {
        pathways: [
            {
                title: "Flight School",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics, Science, and English." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science with Physics, Mathematics, and Geography." },
                    { stage: "Flight School", duration: "2-4 years", description: "Attend flight school or aviation academy. Obtain commercial pilot license." }
                ],
                totalDuration: "3 + 3 + 2-4 = 8-10 years",
                nextSteps: "Pass WASSCE with good grades, obtain medical clearance, earn pilot license, apply to airlines."
            },
            {
                title: "Military Aviation",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics, Science, and English." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Science with Physics, Mathematics, and Geography." },
                    { stage: "Military Academy", duration: "4 years", description: "Complete officer training with flight training at the Military Academy." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Serve as military pilot, gain experience, transition to commercial aviation if desired."
            }
        ]
    },

    "Air Host / Flight Attendant": {
        pathways: [
            {
                title: "Aviation Academy Pathway",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on English, Mathematics, and Social Studies." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts, Business, or Home Economics. Focus on English and customer service skills." },
                    { stage: "Aviation Training", duration: "6-12 months", description: "Complete cabin crew training at an aviation academy or airline training school." },
                    { stage: "Certification", duration: "1-3 months", description: "Obtain required certifications (Safety, First Aid, Emergency Procedures)." },
                    { stage: "Career Entry", duration: "Ongoing", description: "Apply to airlines, complete on-the-job training, start flying." }
                ],
                totalDuration: "3 + 3 + 1 = 7+ years",
                nextSteps: "Complete aviation training, obtain certifications, apply to airlines, prepare for interviews."
            },
            {
                title: "University Hospitality Pathway",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on English and Social Studies." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts, Business, or Home Economics." },
                    { stage: "University", duration: "3-4 years", description: "Study Hospitality Management, Tourism, or Aviation Management." },
                    { stage: "Cabin Crew Training", duration: "3-6 months", description: "Complete specialized cabin crew training program." }
                ],
                totalDuration: "3 + 3 + 3-4 = 9-10 years",
                nextSteps: "Complete degree, apply to airlines, attend cabin crew training."
            }
        ]
    },

    // ========================================
    // 🔧 TECHNICAL / SKILLED CAREERS
    // ========================================

    Electrician: {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Apprenticeship", duration: "3-4 years", description: "Train under a master electrician." }
                ],
                totalDuration: "3 + 3 + 3-4 = 9-10 years",
                nextSteps: "Obtain electrical certification, start own business, work with contractors."
            },
            {
                title: "Technical Institute",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Technical Institute", duration: "2 years", description: "Complete full-time electrical training with certification." },
                    { stage: "Apprenticeship", duration: "1-2 years", description: "Gain practical experience under supervision." }
                ],
                totalDuration: "3 + 3 + 2 + 1-2 = 9-10 years",
                nextSteps: "Obtain electrical certification, start own business, work with contractors."
            }
        ]
    },

    Plumber: {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Apprenticeship", duration: "3-4 years", description: "Train under a master plumber." }
                ],
                totalDuration: "3 + 3 + 3-4 = 9-10 years",
                nextSteps: "Obtain plumbing certification, start own business."
            },
            {
                title: "Technical Institute",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Technical Institute", duration: "2 years", description: "Complete full-time plumbing training with certification." },
                    { stage: "Apprenticeship", duration: "1-2 years", description: "Gain practical experience under supervision." }
                ],
                totalDuration: "3 + 3 + 2 + 1-2 = 9-10 years",
                nextSteps: "Obtain plumbing certification, start own business."
            }
        ]
    },

    Welder: {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Apprenticeship", duration: "3-4 years", description: "Train under a master welder." }
                ],
                totalDuration: "3 + 3 + 3-4 = 9-10 years",
                nextSteps: "Obtain welding certification, work in construction or manufacturing, start own workshop."
            },
            {
                title: "Technical Institute",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Technical Institute", duration: "2 years", description: "Complete full-time welding training with certification." },
                    { stage: "Apprenticeship", duration: "1-2 years", description: "Gain practical experience under supervision." }
                ],
                totalDuration: "3 + 3 + 2 + 1-2 = 9-10 years",
                nextSteps: "Obtain welding certification, work in construction or manufacturing, start own workshop."
            }
        ]
    },

    Carpenter: {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational or Visual Arts." },
                    { stage: "Apprenticeship", duration: "3-4 years", description: "Train under a master carpenter." }
                ],
                totalDuration: "3 + 3 + 3-4 = 9-10 years",
                nextSteps: "Start furniture workshop, work with construction companies."
            },
            {
                title: "Technical Institute",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational or Visual Arts." },
                    { stage: "Technical Institute", duration: "2 years", description: "Complete full-time carpentry training with certification." },
                    { stage: "Apprenticeship", duration: "1-2 years", description: "Gain practical experience under supervision." }
                ],
                totalDuration: "3 + 3 + 2 + 1-2 = 9-10 years",
                nextSteps: "Start furniture workshop, work with construction companies."
            }
        ]
    },

    Mason: {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Apprenticeship", duration: "3-4 years", description: "Train under a master mason." }
                ],
                totalDuration: "3 + 3 + 3-4 = 9-10 years",
                nextSteps: "Work with construction companies, start own building business."
            },
            {
                title: "Technical Institute",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Technical Institute", duration: "2 years", description: "Complete full-time masonry training with certification." },
                    { stage: "Apprenticeship", duration: "1-2 years", description: "Gain practical experience under supervision." }
                ],
                totalDuration: "3 + 3 + 2 + 1-2 = 9-10 years",
                nextSteps: "Work with construction companies, start own building business."
            }
        ]
    },

    "Auto Mechanic": {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Apprenticeship", duration: "3-4 years", description: "Train in a garage under experienced mechanic." }
                ],
                totalDuration: "3 + 3 + 3-4 = 9-10 years",
                nextSteps: "Start own garage, work with dealerships, specialize in specific vehicle brands."
            },
            {
                title: "Technical Institute",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Technical Institute", duration: "2 years", description: "Complete full-time automotive training with certification." },
                    { stage: "Apprenticeship", duration: "1-2 years", description: "Gain practical experience in a garage." }
                ],
                totalDuration: "3 + 3 + 2 + 1-2 = 9-10 years",
                nextSteps: "Start own garage, work with dealerships, specialize in specific vehicle brands."
            }
        ]
    },

    "HVAC Technician": {
        pathways: [
            {
                title: "Technical Training",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Technical Training", duration: "2-3 years", description: "Complete HVAC certification." },
                    { stage: "Apprenticeship", duration: "1-2 years", description: "Gain practical experience." }
                ],
                totalDuration: "3 + 3 + 2-3 + 1-2 = 9-11 years",
                nextSteps: "Work with HVAC companies, start own business."
            }
        ]
    },

    "Solar Technician": {
        pathways: [
            {
                title: "Technical Training",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational or STEM." },
                    { stage: "Solar Training", duration: "1-2 years", description: "Complete solar installation certification." }
                ],
                totalDuration: "3 + 3 + 1-2 = 7-8 years",
                nextSteps: "Work with solar companies, start own installation business."
            },
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational or STEM." },
                    { stage: "Apprenticeship", duration: "2-3 years", description: "Train under experienced solar technician." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Work with solar companies, start own installation business."
            }
        ]
    },

    "Machine Operator": {
        pathways: [
            {
                title: "On-the-Job Training",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "On-the-Job Training", duration: "1-2 years", description: "Learn machine operation in factory or workshop." }
                ],
                totalDuration: "3 + 3 + 1-2 = 7-8 years",
                nextSteps: "Work in manufacturing, factories, construction sites."
            },
            {
                title: "Technical Institute",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Technical Institute", duration: "1-2 years", description: "Complete machine operator certification." }
                ],
                totalDuration: "3 + 3 + 1-2 = 7-8 years",
                nextSteps: "Work in manufacturing, factories, construction sites."
            }
        ]
    },

    Fabricator: {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Apprenticeship", duration: "3-4 years", description: "Train in metal fabrication." }
                ],
                totalDuration: "3 + 3 + 3-4 = 9-10 years",
                nextSteps: "Work in fabrication shops, start own workshop."
            },
            {
                title: "Technical Institute",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Technical Institute", duration: "2 years", description: "Complete full-time fabrication training with certification." },
                    { stage: "Apprenticeship", duration: "1-2 years", description: "Gain practical experience under supervision." }
                ],
                totalDuration: "3 + 3 + 2 + 1-2 = 9-10 years",
                nextSteps: "Work in fabrication shops, start own workshop."
            }
        ]
    },

    "Construction Worker": {
        pathways: [
            {
                title: "On-the-Job Training",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Any program." },
                    { stage: "On-the-Job Training", duration: "1-2 years", description: "Learn construction skills on site." }
                ],
                totalDuration: "3 + 3 + 1-2 = 7-8 years",
                nextSteps: "Work with construction companies, specialize in specific trades."
            },
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Any program." },
                    { stage: "Apprenticeship", duration: "2-3 years", description: "Train under experienced construction worker." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Work with construction companies, specialize in specific trades."
            }
        ]
    },

    "Heavy Equipment Operator": {
        pathways: [
            {
                title: "Operator Training",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Operator Training", duration: "1-2 years", description: "Complete heavy equipment certification." }
                ],
                totalDuration: "3 + 3 + 1-2 = 7-8 years",
                nextSteps: "Work in construction, mining, or quarry companies."
            },
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Apprenticeship", duration: "2-3 years", description: "Train under experienced equipment operator." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Work in construction, mining, or quarry companies."
            }
        ]
    },

    "Refrigeration Technician": {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Apprenticeship", duration: "3-4 years", description: "Train under experienced technician." }
                ],
                totalDuration: "3 + 3 + 3-4 = 9-10 years",
                nextSteps: "Work with refrigeration companies, start own repair business."
            },
            {
                title: "Technical Institute",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Technical Institute", duration: "2 years", description: "Complete refrigeration training with certification." },
                    { stage: "Apprenticeship", duration: "1-2 years", description: "Gain practical experience under supervision." }
                ],
                totalDuration: "3 + 3 + 2 + 1-2 = 9-10 years",
                nextSteps: "Work with refrigeration companies, start own repair business."
            }
        ]
    },

    "Industrial Technician": {
        pathways: [
            {
                title: "Technical University",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational or STEM." },
                    { stage: "Technical University", duration: "3 years", description: "Complete HND in Industrial Engineering." }
                ],
                totalDuration: "3 + 3 + 3 = 9 years",
                nextSteps: "Work in factories, manufacturing plants, industrial maintenance."
            },
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Apprenticeship", duration: "3-4 years", description: "Train under experienced industrial technician." }
                ],
                totalDuration: "3 + 3 + 3-4 = 9-10 years",
                nextSteps: "Work in factories, manufacturing plants, industrial maintenance."
            }
        ]
    },

    "Electronics Repair Technician": {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Apprenticeship", duration: "2-3 years", description: "Train in electronics repair." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Open repair shop, work with electronics companies."
            },
            {
                title: "Technical Institute",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational or ICT." },
                    { stage: "Technical Institute", duration: "2 years", description: "Complete electronics repair training with certification." }
                ],
                totalDuration: "3 + 3 + 2 = 8 years",
                nextSteps: "Open repair shop, work with electronics companies."
            }
        ]
    },

    "Hairdresser / Barber": {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Home Economics / Visual Art." },
                    { stage: "Apprenticeship", duration: "2-3 years", description: "Train in a salon under experienced stylist." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Open own salon, work in established salons, specialize in specific services."
            },
            {
                title: "Beauty School",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Home Economics / Visual Art." },
                    { stage: "Beauty School", duration: "1-2 years", description: "Complete professional hairdressing certification." }
                ],
                totalDuration: "3 + 3 + 1-2 = 7-8 years",
                nextSteps: "Open own salon, work in established salons, specialize in barbering or cosmetology."
            }
        ]
    },

    "Dressmaker / Tailor": {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Home Economics or Visual Arts." },
                    { stage: "Apprenticeship", duration: "2-3 years", description: "Train under master tailor." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Open own tailoring shop, specialize in specific clothing types."
            },
            {
                title: "Fashion School",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Home Economics or Visual Arts." },
                    { stage: "Fashion School", duration: "2-3 years", description: "Complete formal fashion design training." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Open own boutique, produce custom clothing, start fashion brand."
            }
        ]
    },

    "Painter / Decorator": {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational or Visual Arts." },
                    { stage: "Apprenticeship", duration: "2-3 years", description: "Train under experienced painter/decorator." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Start own painting business, work with construction companies."
            },
            {
                title: "Technical Institute",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational or Visual Arts." },
                    { stage: "Technical Institute", duration: "2 years", description: "Complete painting and decorating training with certification." }
                ],
                totalDuration: "3 + 3 + 2 = 8 years",
                nextSteps: "Start own painting business, work with construction companies."
            }
        ]
    },

    Tiler: {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Apprenticeship", duration: "2-3 years", description: "Train under experienced tiler." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Start own tiling business, work with construction companies."
            },
            {
                title: "Technical Institute",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Technical Institute", duration: "2 years", description: "Complete tiling training with certification." }
                ],
                totalDuration: "3 + 3 + 2 = 8 years",
                nextSteps: "Start own tiling business, work with construction companies."
            }
        ]
    },

    Glazier: {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Apprenticeship", duration: "2-3 years", description: "Train under experienced glazier." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Work with glass suppliers, construction companies, start own glazing business."
            },
            {
                title: "Technical Institute",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Technical/Vocational program." },
                    { stage: "Technical Institute", duration: "2 years", description: "Complete glazing training with certification." }
                ],
                totalDuration: "3 + 3 + 2 = 8 years",
                nextSteps: "Work with glass suppliers, construction companies, start own glazing business."
            }
        ]
    },

    // ========================================
    // 💼 BUSINESS / ENTREPRENEURSHIP CAREERS
    // ========================================

    "Business Owner / Entrepreneur": {
        pathways: [
            {
                title: "Direct Business Start",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business or any program." },
                    { stage: "Business Launch", duration: "Ongoing", description: "Start small business, learn through experience." }
                ],
                totalDuration: "3 + 3 = 6 years to start",
                nextSteps: "Identify business opportunity, develop business plan, secure capital, launch business."
            },
            {
                title: "University + Business",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business program." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Business Administration." },
                    { stage: "Business Launch", duration: "Ongoing", description: "Start business with academic knowledge." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Network, find mentors, launch business with solid business plan."
            }
        ]
    },

    "Real Estate Developer": {
        pathways: [
            {
                title: "Education + Experience",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business or General Arts." },
                    { stage: "University", duration: "4 years", description: "Complete degree in Real Estate, Construction, or Business." },
                    { stage: "Industry Experience", duration: "2-3 years", description: "Work in real estate or construction." }
                ],
                totalDuration: "3 + 3 + 4 + 2-3 = 12-13 years",
                nextSteps: "Build capital, network with investors, start development projects."
            },
            {
                title: "Apprenticeship + Experience",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business or General Arts." },
                    { stage: "Apprenticeship", duration: "3 years", description: "Work with real estate firm, learn the business." },
                    { stage: "Start Own Projects", duration: "Ongoing", description: "Begin small-scale development projects." }
                ],
                totalDuration: "3 + 3 + 3 = 9 years to start",
                nextSteps: "Build capital, network with investors, start development projects."
            }
        ]
    },

    "Event Planner": {
        pathways: [
            {
                title: "Hands-on Experience",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business, Home Economics, or General Arts." },
                    { stage: "Event Planning Experience", duration: "1-2 years", description: "Work with established planners, volunteer at events." }
                ],
                totalDuration: "3 + 3 + 1-2 = 7-8 years",
                nextSteps: "Start own event planning business, specialize in weddings, corporate events, or parties."
            },
            {
                title: "Event Management Course",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Home Economics or General Arts." },
                    { stage: "Event Management Certification", duration: "6-12 months", description: "Complete professional event planning certification." },
                    { stage: "Start Working", duration: "Ongoing", description: "Begin working as an event planner." }
                ],
                totalDuration: "3 + 3 + 0.5-1 = 6.5-7 years",
                nextSteps: "Start own event planning business, specialize in weddings, corporate events, or parties."
            }
        ]
    },

    "Digital Marketer": {
        pathways: [
            {
                title: "Online Learning",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business or General Arts." },
                    { stage: "Online Courses", duration: "6-12 months", description: "Complete digital marketing certifications." },
                    { stage: "Freelance", duration: "Ongoing", description: "Start freelancing, build portfolio." }
                ],
                totalDuration: "3 + 3 + 0.5-1 = 6.5-7 years",
                nextSteps: "Apply to marketing agencies, start own agency, specialize in areas like SEO or social media."
            },
            {
                title: "University Marketing",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business or General Arts." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Marketing." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Apply to marketing agencies, pursue certifications, specialize in digital marketing."
            }
        ]
    },

    "Sales Executive": {
        pathways: [
            {
                title: "On-the-Job Training",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business or any program." },
                    { stage: "Sales Training", duration: "6-12 months", description: "Learn sales techniques on the job." }
                ],
                totalDuration: "3 + 3 + 0.5-1 = 6.5-7 years",
                nextSteps: "Work in sales for companies, progress to senior sales roles."
            },
            {
                title: "Professional Sales Certification",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business." },
                    { stage: "Sales Certification", duration: "6-12 months", description: "Complete professional sales training." },
                    { stage: "Start Working", duration: "Ongoing", description: "Begin sales career." }
                ],
                totalDuration: "3 + 3 + 0.5-1 = 6.5-7 years",
                nextSteps: "Work in sales for companies, progress to senior sales roles."
            }
        ]
    },

    "Retail Trader": {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business or any program." },
                    { stage: "Apprenticeship", duration: "1-2 years", description: "Learn from experienced trader." },
                    { stage: "Start Trading", duration: "Ongoing", description: "Begin small-scale trading." }
                ],
                totalDuration: "3 + 3 + 1-2 = 7-8 years",
                nextSteps: "Build customer base, expand product range, consider moving to larger premises."
            },
            {
                title: "Business Management Course",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business." },
                    { stage: "Business Management Certification", duration: "6-12 months", description: "Complete business management training." },
                    { stage: "Start Trading", duration: "Ongoing", description: "Begin small-scale trading." }
                ],
                totalDuration: "3 + 3 + 0.5-1 = 6.5-7 years",
                nextSteps: "Build customer base, expand product range, consider moving to larger premises."
            }
        ]
    },

    "Business Consultant": {
        pathways: [
            {
                title: "Education Pathway",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business or General Arts." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Business Administration." },
                    { stage: "MBA", duration: "2 years", description: "Complete Master's in Business Administration." },
                    { stage: "Experience", duration: "3-5 years", description: "Gain industry experience." }
                ],
                totalDuration: "3 + 3 + 4 + 2 + 3-5 = 15-17 years",
                nextSteps: "Apply to consulting firms, start own consulting practice."
            },
            {
                title: "Professional Certification + Experience",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business." },
                    { stage: "Professional Certification", duration: "2-3 years", description: "Complete CIMA, ACCA, or consulting certification." },
                    { stage: "Experience", duration: "2-3 years", description: "Work in business roles." }
                ],
                totalDuration: "3 + 3 + 2-3 + 2-3 = 10-12 years",
                nextSteps: "Apply to consulting firms, start own consulting practice."
            }
        ]
    },

    "Logistics Manager": {
        pathways: [
            {
                title: "Education + Experience",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business or General Arts." },
                    { stage: "University", duration: "4 years", description: "Complete degree in Logistics or Supply Chain." },
                    { stage: "Industry Experience", duration: "2-3 years", description: "Work in logistics companies." }
                ],
                totalDuration: "3 + 3 + 4 + 2-3 = 12-13 years",
                nextSteps: "Apply for logistics manager positions, pursue professional certifications."
            },
            {
                title: "Professional Certification",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business." },
                    { stage: "Professional Certification", duration: "2-3 years", description: "Complete CILT or logistics certification." },
                    { stage: "Experience", duration: "2-3 years", description: "Work in logistics roles." }
                ],
                totalDuration: "3 + 3 + 2-3 + 2-3 = 10-12 years",
                nextSteps: "Apply for logistics manager positions, pursue professional certifications."
            }
        ]
    },

    "Financial Advisor": {
        pathways: [
            {
                title: "Education + Certification",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business or General Arts." },
                    { stage: "University", duration: "4 years", description: "Complete degree in Finance or Economics." },
                    { stage: "Professional Certification", duration: "2 years", description: "Complete financial planning certification." }
                ],
                totalDuration: "3 + 3 + 4 + 2 = 12 years",
                nextSteps: "Work with banks, insurance companies, or start independent practice."
            },
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business." },
                    { stage: "Apprenticeship", duration: "2 years", description: "Work under senior financial advisor." },
                    { stage: "Certification", duration: "2 years", description: "Complete financial planning certification concurrently." }
                ],
                totalDuration: "3 + 3 + 2 + 2 = 10 years",
                nextSteps: "Work with banks, insurance companies, or start independent practice."
            }
        ]
    },

    "Marketing Manager": {
        pathways: [
            {
                title: "Education + Experience",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business or General Arts." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Marketing." },
                    { stage: "Experience", duration: "3-5 years", description: "Work in marketing roles." }
                ],
                totalDuration: "3 + 3 + 4 + 3-5 = 13-15 years",
                nextSteps: "Apply for marketing manager positions, pursue MBA for advancement."
            },
            {
                title: "Professional Certification",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business." },
                    { stage: "Professional Certification", duration: "2-3 years", description: "Complete CIM or marketing certification." },
                    { stage: "Experience", duration: "3-5 years", description: "Work in marketing roles." }
                ],
                totalDuration: "3 + 3 + 2-3 + 3-5 = 11-14 years",
                nextSteps: "Apply for marketing manager positions, pursue MBA for advancement."
            }
        ]
    },

    "Chef / Catering Services": {
        pathways: [
            {
                title: "Culinary School",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Home Economics or General Arts." },
                    { stage: "Culinary School", duration: "2-3 years", description: "Complete professional culinary training." },
                    { stage: "Kitchen Experience", duration: "2 years", description: "Work in hotels or restaurants." }
                ],
                totalDuration: "3 + 3 + 2-3 + 2 = 10-11 years",
                nextSteps: "Work as chef in restaurants, hotels, catering, or start own restaurant."
            },
            {
                title: "Catering Business",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Home Economics or Business." },
                    { stage: "Culinary Training", duration: "1-2 years", description: "Learn food preparation and catering skills." },
                    { stage: "Start Catering Business", duration: "Ongoing", description: "Begin with small events, grow client base." }
                ],
                totalDuration: "3 + 3 + 1-2 = 7-8 years",
                nextSteps: "Build reputation, expand to larger events, hire staff, open catering venue."
            }
        ]
    },

    "Hotel / Hospitality Manager": {
        pathways: [
            {
                title: "University Hospitality",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business or Home Economics." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Hospitality Management." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Apply to hotels, resorts, restaurants, work in front office, food & beverage, or management."
            },
            {
                title: "Diploma + Top-up",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Home Economics or Business." },
                    { stage: "Diploma in Hospitality", duration: "2 years", description: "Complete diploma at a polytechnic." },
                    { stage: "Top-up to BSc", duration: "2 years", description: "Complete top-up degree at a university." }
                ],
                totalDuration: "3 + 3 + 2 + 2 = 10 years",
                nextSteps: "Apply to hotels, resorts, restaurants, work in front office, food & beverage, or management."
            }
        ]
    },

    "Home / Household Manager": {
        pathways: [
            {
                title: "Experience-based",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Home Economics." },
                    { stage: "Practical Experience", duration: "1-2 years", description: "Learn household management skills." }
                ],
                totalDuration: "3 + 3 + 1-2 = 7-8 years",
                nextSteps: "Work as household manager, start home management service."
            },
            {
                title: "Formal Training",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Home Economics." },
                    { stage: "Household Management Certification", duration: "6-12 months", description: "Complete professional household management training." },
                    { stage: "Start Working", duration: "Ongoing", description: "Begin working as a household manager." }
                ],
                totalDuration: "3 + 3 + 0.5-1 = 6.5-7 years",
                nextSteps: "Work as household manager, start home management service."
            }
        ]
    },

    "Human Resources Manager": {
        pathways: [
            {
                title: "University + Experience",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business or General Arts." },
                    { stage: "University", duration: "4 years", description: "Complete degree in Human Resource Management, Business Administration, or Psychology." },
                    { stage: "Professional Certification", duration: "1-2 years", description: "Obtain CIPD, SHRM, or IHRMP certification." },
                    { stage: "Experience", duration: "2-3 years", description: "Work in HR roles." }
                ],
                totalDuration: "3 + 3 + 4 + 1-2 + 2-3 = 13-15 years",
                nextSteps: "Apply for HR manager positions, specialize in recruitment, training, or employee relations."
            },
            {
                title: "Professional Certification + Experience",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts or Business." },
                    { stage: "Professional Certification", duration: "1-2 years", description: "Obtain CIPD, SHRM, or IHRMP certification." },
                    { stage: "Experience", duration: "2-3 years", description: "Work in HR roles." }
                ],
                totalDuration: "3 + 3 + 1-2 + 2-3 = 9-11 years",
                nextSteps: "Apply for HR manager positions, specialize in recruitment, training, or employee relations."
            }
        ]
    },

    Banker: {
        pathways: [
            {
                title: "University Banking",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business with Accounting, Economics, and Elective Mathematics." },
                    { stage: "University", duration: "4 years", description: "Complete degree in Banking & Finance, Accounting, or Business Administration." },
                    { stage: "Professional Certification", duration: "1-2 years", description: "Pursue ICAG, CIB, or banking certifications." }
                ],
                totalDuration: "3 + 3 + 4 + 1-2 = 11-12 years",
                nextSteps: "Apply to banks, start as teller or customer service, progress to management."
            },
            {
                title: "Professional Certification",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on Mathematics." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Business." },
                    { stage: "Professional Certification", duration: "2-3 years", description: "Complete CIB, ICAG, or banking certification." },
                    { stage: "Entry-level Banking Job", duration: "Ongoing", description: "Start working in banking while completing certification." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Apply to banks, start as teller or customer service, progress to management."
            }
        ]
    },

    "Farmer (Crops / Livestock)": {
        pathways: [
            {
                title: "Agricultural Training",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Agriculture or Business." },
                    { stage: "Agricultural Training", duration: "2 years", description: "Complete agricultural training at college." },
                    { stage: "Start Farm", duration: "Ongoing", description: "Start farming operation." }
                ],
                totalDuration: "3 + 3 + 2 = 8 years",
                nextSteps: "Secure land, get farming inputs, learn modern farming techniques, join agricultural cooperatives."
            },
            {
                title: "Hands-on Experience",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Any program." },
                    { stage: "Farm Apprenticeship", duration: "2-3 years", description: "Work on established farm, learn practical skills." },
                    { stage: "Start Own Farm", duration: "Ongoing", description: "Begin own farming operation." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Acquire land, secure funding, start with small-scale farming, expand gradually."
            }
        ]
    },

    // ========================================
    // 🎨 CREATIVE CAREERS
    // ========================================

    "Graphic Designer": {
        pathways: [
            {
                title: "Formal Education",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Visual Arts or General Arts." },
                    { stage: "University / Art School", duration: "3-4 years", description: "Complete graphic design degree." }
                ],
                totalDuration: "3 + 3 + 3-4 = 9-10 years",
                nextSteps: "Build portfolio, apply to design studios, freelance."
            },
            {
                title: "Self-taught / Online",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Any program." },
                    { stage: "Online Courses", duration: "6-12 months", description: "Learn design software and principles." },
                    { stage: "Portfolio Development", duration: "Ongoing", description: "Create projects to showcase skills." }
                ],
                totalDuration: "3 + 3 + 0.5-1 = 6.5-7 years",
                nextSteps: "Freelance on platforms, apply for junior designer roles."
            }
        ]
    },

    "Fashion Designer / Boutique Owner": {
        pathways: [
            {
                title: "Fashion School",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Visual Arts or Home Economics." },
                    { stage: "Fashion School", duration: "2-3 years", description: "Learn design, pattern making, and sewing." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Start own fashion line, work with established designers, open boutique."
            },
            {
                title: "Apprenticeship + Boutique",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Home Economics or Visual Arts." },
                    { stage: "Apprenticeship", duration: "2-3 years", description: "Train under experienced designer/tailor." },
                    { stage: "Retail Experience", duration: "1-2 years", description: "Work in fashion retail." },
                    { stage: "Open Boutique", duration: "Ongoing", description: "Start own boutique." }
                ],
                totalDuration: "3 + 3 + 2-3 + 1-2 = 9-11 years",
                nextSteps: "Source products, build customer base, expand inventory, create own designs."
            }
        ]
    },

    "Photo / Videographer": {
        pathways: [
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Visual Arts or General Arts." },
                    { stage: "Apprenticeship", duration: "1-2 years", description: "Train under professional photographer/videographer." },
                    { stage: "Build Portfolio", duration: "Ongoing", description: "Develop skills in both photo and video." }
                ],
                totalDuration: "3 + 3 + 1-2 = 7-8 years",
                nextSteps: "Start own business, specialize in areas like weddings, events, corporate, or creative content."
            },
            {
                title: "Media Production",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Visual Arts or ICT." },
                    { stage: "Media School", duration: "2-3 years", description: "Complete media production training." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Work with production companies, build strong portfolio, specialize in niche markets."
            }
        ]
    },

    Musician: {
        pathways: [
            {
                title: "Music School",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts or Visual Arts." },
                    { stage: "Music School", duration: "2-3 years", description: "Formal music training." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Build audience, record music, perform, collaborate with other artists."
            },
            {
                title: "Self-taught",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Any program." },
                    { stage: "Practice", duration: "Ongoing", description: "Develop musical skills." },
                    { stage: "Build Audience", duration: "Ongoing", description: "Share music online, perform locally." }
                ],
                totalDuration: "3 + 3 = 6 years to start",
                nextSteps: "Record music, build social media presence, perform at events."
            }
        ]
    },

    Actor: {
        pathways: [
            {
                title: "Drama School",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts or Visual Arts." },
                    { stage: "Drama School", duration: "2-3 years", description: "Formal acting training." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Audition for roles, join theater groups, build acting portfolio."
            },
            {
                title: "Theater Experience",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts." },
                    { stage: "Join Theater Groups", duration: "Ongoing", description: "Participate in plays and productions." }
                ],
                totalDuration: "3 + 3 = 6 years to start",
                nextSteps: "Audition for TV and film roles, build network in entertainment industry."
            }
        ]
    },

    "Content Creator": {
        pathways: [
            {
                title: "Self-taught",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Any program." },
                    { stage: "Create Content", duration: "Ongoing", description: "Start creating videos, blogs, or social media content." },
                    { stage: "Build Audience", duration: "Ongoing", description: "Grow following on platforms." }
                ],
                totalDuration: "3 + 3 = 6 years to start",
                nextSteps: "Monetize content, collaborate with brands, diversify platforms."
            },
            {
                title: "Media Training",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Any program." },
                    { stage: "Media/Content Creation Certification", duration: "6-12 months", description: "Complete content creation training." },
                    { stage: "Start Creating", duration: "Ongoing", description: "Begin creating content professionally." }
                ],
                totalDuration: "3 + 3 + 0.5-1 = 6.5-7 years",
                nextSteps: "Monetize content, collaborate with brands, diversify platforms."
            }
        ]
    },

    Animator: {
        pathways: [
            {
                title: "University Animation",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Visual Arts or STEM." },
                    { stage: "University", duration: "4 years", description: "Complete animation or multimedia degree." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Build portfolio, apply to animation studios, freelance."
            },
            {
                title: "Online Learning",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Visual Arts." },
                    { stage: "Online Courses", duration: "1-2 years", description: "Learn animation software." },
                    { stage: "Build Portfolio", duration: "Ongoing", description: "Create animated projects." }
                ],
                totalDuration: "3 + 3 + 1-2 = 7-8 years",
                nextSteps: "Freelance on platforms, apply for junior animator roles."
            }
        ]
    },

    "Interior Designer": {
        pathways: [
            {
                title: "Design School",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Visual Arts or Home Economics." },
                    { stage: "Design School", duration: "2-3 years", description: "Complete interior design training." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Work with design firms, start own interior design business."
            },
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Visual Arts or Home Economics." },
                    { stage: "Apprenticeship", duration: "2-3 years", description: "Train under senior interior designer." },
                    { stage: "Start Own Practice", duration: "Ongoing", description: "Begin own interior design business." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Work with design firms, start own interior design business."
            }
        ]
    },

    "UI/UX / App Designer": {
        pathways: [
            {
                title: "Bootcamp",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Visual Arts, STEM, or Business." },
                    { stage: "UI/UX Bootcamp", duration: "6-12 months", description: "Complete intensive design program." },
                    { stage: "Build Portfolio", duration: "Ongoing", description: "Create case studies." }
                ],
                totalDuration: "3 + 3 + 0.5-1 = 6.5-7 years",
                nextSteps: "Apply to tech companies, freelance, specialize in user research or product design."
            },
            {
                title: "University Education",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Visual Arts or STEM." },
                    { stage: "University", duration: "4 years", description: "Complete degree in Graphic Design, Computer Science, or HCI." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Build portfolio of app designs, apply to tech companies, pursue internships."
            }
        ]
    },

    "Sound Engineer": {
        pathways: [
            {
                title: "Media Production",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue Visual Arts or ICT." },
                    { stage: "Media School", duration: "2-3 years", description: "Complete sound engineering or audio production training." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Work in recording studios, live events, film production, or radio stations."
            },
            {
                title: "Apprenticeship",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Any program with music or ICT focus." },
                    { stage: "Studio Apprenticeship", duration: "1-2 years", description: "Train in recording studio." },
                    { stage: "Build Portfolio", duration: "Ongoing", description: "Work on projects, build client base." }
                ],
                totalDuration: "3 + 3 + 1-2 = 7-8 years",
                nextSteps: "Open own studio, freelance, specialize in music production or film sound."
            }
        ]
    },

    // ========================================
    // ⚽ SPORTS / PERFORMANCE CAREERS
    // ========================================

    "Player (Football, Volleyball, etc.)": {
        pathways: [
            {
                title: "Academy to Professional",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS while playing sports." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts with Physical Education. Join school team and local club." },
                    { stage: "Sports Academy", duration: "2-3 years", description: "Join professional academy for advanced training." },
                    { stage: "Professional Club", duration: "Ongoing", description: "Sign contract with professional club." }
                ],
                totalDuration: "Continuous from early age",
                nextSteps: "Train consistently, attend trials, sign with club, progress through ranks."
            },
            {
                title: "University Sports",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS while playing sports." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts with Physical Education." },
                    { stage: "University", duration: "4 years", description: "Study Sports Science or related degree while playing for university team." },
                    { stage: "Professional League", duration: "Ongoing", description: "Sign with professional club after graduation." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Get a degree while playing, attend trials, sign with professional club."
            }
        ]
    },

    Athlete: {
        pathways: [
            {
                title: "Athletics Club",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS while participating in sports." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts with Physical Education. Join school athletics team." },
                    { stage: "Athletics Club", duration: "Ongoing", description: "Join professional athletics club." },
                    { stage: "Competitions", duration: "Ongoing", description: "Compete at regional, national, and international levels." }
                ],
                totalDuration: "Continuous from early age",
                nextSteps: "Train consistently, work with coaches, compete in higher level competitions."
            },
            {
                title: "University Athletics",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS while participating in sports." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts or Science with Physical Education." },
                    { stage: "University", duration: "4 years", description: "Study while competing in university athletics." },
                    { stage: "Professional Athletics", duration: "Ongoing", description: "Sign with professional club or national team." }
                ],
                totalDuration: "3 + 3 + 4 = 10 years",
                nextSteps: "Get a degree while competing, work with coaches, compete in higher level competitions."
            }
        ]
    },

    "Coach / Fitness Trainer": {
        pathways: [
            {
                title: "Sports Science",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts with Physical Education." },
                    { stage: "University", duration: "4 years", description: "Complete BSc Sports Science." },
                    { stage: "Coaching Certification", duration: "1 year", description: "Obtain coaching license or fitness certification." }
                ],
                totalDuration: "3 + 3 + 4 + 1 = 11 years",
                nextSteps: "Coach at schools, clubs, or national level; work in gyms as trainer."
            },
            {
                title: "Experience-based",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Any program. Play sports actively." },
                    { stage: "Fitness/Coaching Certification", duration: "1-2 years", description: "Obtain coaching or fitness certification." },
                    { stage: "Experience", duration: "2-3 years", description: "Start coaching or training at youth level or gym." }
                ],
                totalDuration: "3 + 3 + 1-2 + 2-3 = 9-11 years",
                nextSteps: "Progress to higher level coaching positions, specialize in age group or fitness area."
            }
        ]
    },

    "Referee / Sports Official": {
        pathways: [
            {
                title: "Referee Training",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts with Physical Education." },
                    { stage: "Referee Training", duration: "1 year", description: "Complete refereeing certification." },
                    { stage: "Progression", duration: "Ongoing", description: "Start with local matches, progress to regional and national levels." }
                ],
                totalDuration: "3 + 3 + 1 = 7 years to start",
                nextSteps: "Officiate matches, attend advanced courses, progress to higher level competitions."
            },
            {
                title: "Referee Progression",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Any program." },
                    { stage: "Referee Certification", duration: "1 year", description: "Start at grassroots level." },
                    { stage: "Progression to Regional/National", duration: "2-3 years", description: "Work through the ranks to higher level." }
                ],
                totalDuration: "3 + 3 + 1 + 2-3 = 9-10 years to reach high level",
                nextSteps: "Officiate matches, attend advanced courses, progress to higher level competitions."
            }
        ]
    },

    Dancer: {
        pathways: [
            {
                title: "Dance School",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Pursue General Arts or Visual Arts." },
                    { stage: "Dance School", duration: "2-3 years", description: "Formal dance training." },
                    { stage: "Join Dance Company", duration: "Ongoing", description: "Perform with professional groups." }
                ],
                totalDuration: "3 + 3 + 2-3 = 8-9 years",
                nextSteps: "Perform at events, join dance troupes, teach dance."
            },
            {
                title: "Self-taught",
                steps: [
                    { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS." },
                    { stage: "Second Cycle Education", duration: "3 years", description: "Any program." },
                    { stage: "Practice", duration: "Ongoing", description: "Develop dance skills." },
                    { stage: "Join Crew", duration: "Ongoing", description: "Join local dance groups, perform." }
                ],
                totalDuration: "3 + 3 = 6 years to start",
                nextSteps: "Build reputation, perform at events, create online presence."
            }
        ]
    }
};

// Fallback roadmap for careers not listed
const FALLBACK_ROADMAP = {
    pathways: [
        {
            title: "Standard Pathway",
            steps: [
                { stage: "Basic Education (JHS)", duration: "3 years", description: "Complete JHS with focus on core subjects." },
                { stage: "Second Cycle Education", duration: "3 years", description: "Pursue relevant program based on career interests." },
                { stage: "Tertiary Education / Training", duration: "3-4 years", description: "Complete education or training in your chosen field." },
                { stage: "Career Entry", duration: "Ongoing", description: "Begin your career journey and continue developing skills." }
            ],
            totalDuration: "3 + 3 + 3-4 = 9-10 years",
            nextSteps: "Research specific requirements for your chosen career, seek mentorship, gain practical experience."
        }
    ]
};

// Helper function to get roadmap for a career
export const getRoadmapForCareer = (careerName) => {
    // Check if we have a roadmap for this career
    if (CAREER_ROADMAPS[careerName]) {
        return CAREER_ROADMAPS[careerName];
    }
    
    // Try case-insensitive matching
    const matchingKey = Object.keys(CAREER_ROADMAPS).find(
        key => key.toLowerCase() === careerName.toLowerCase()
    );
    
    if (matchingKey) {
        return CAREER_ROADMAPS[matchingKey];
    }
    
    // Return fallback roadmap
    return FALLBACK_ROADMAP;
};

export default {
    CAREER_ROADMAPS,
    getRoadmapForCareer
};