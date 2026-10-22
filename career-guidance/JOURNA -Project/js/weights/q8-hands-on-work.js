// ========================================
// QUESTION 8: Hands-on Work Weights
// ========================================
// 📝 Point Values:
// 5 = Strong preference / Essential
// 4 = Highly suitable
// 3 = Suitable
// 2 = Acceptable
// 1 = Low preference (not used)
// 0 = Not suitable / No points
// ========================================

export const Q8_WEIGHTS = {
    // ========================================
    // YES, I LOVE IT!
    // ========================================
    "Yes, I love it!": {
        // Professional
        "Doctor": 0,
        "Nurse": 0,
        "Pharmacist": 0,
        "Lawyer": 0,
        "Teacher / Lecturer": 0,
        "Civil Engineer": 3,
        "Mechanical Engineer": 4,
        "Electrical Engineer": 4,
        "Software Developer": 0,
        "Data Analyst / Statistician": 0,
        "Architect": 2,
        "Accountant": 0,
        "Economist": 0,
        "Psychologist / Therapist": 0,
        "Counsellor": 0,
        "Journalist": 0,
        "Social Worker": 0,
        "Environmental Scientist": 2,
        "Urban Planner": 0,
        "Nutritionist / Dietitian": 2,
        "Food Scientist / Technologist": 3,
        "Childcare / Educator": 2,
        "Security Forces (Police, Soldier, etc.)": 3,
        "Pilot": 0,
        
        // Technical
        "Electrician": 5,
        "Plumber": 5,
        "Welder": 5,
        "Carpenter": 5,
        "Mason": 5,
        "Auto Mechanic": 5,
        "HVAC Technician": 5,
        "Solar Technician": 4,
        "Machine Operator": 5,
        "Fabricator": 5,
        "Construction Worker": 5,
        "Heavy Equipment Operator": 5,
        "Refrigeration Technician": 5,
        "Industrial Technician": 4,
        "Electronics Repair Technician": 4,
        "Hairdresser / Barber": 4,
        "Dressmaker / Tailor": 5,
        "Painter / Decorator": 5,
        "Tiler": 5,
        "Glazier": 5,
        
        // Business
        "Business Owner / Entrepreneur": 2,
        "Real Estate Developer": 0,
        "Event Planner": 0,
        "Digital Marketer": 0,
        "Sales Executive": 0,
        "Retail Trader": 0,
        "Business Consultant": 0,
        "Logistics Manager": 0,
        "Financial Advisor": 0,
        "Marketing Manager": 0,
        "Chef / Catering Services": 4,
        "Hotel / Hospitality Manager": 0,
        "Home / Household Manager": 3,
        "Human Resources Manager": 0,
        "Banker": 0,
        "Farmer (Crops / Livestock)": 4,
        
        // Creative
        "Graphic Designer": 0,
        "Fashion Designer / Boutique Owner": 3,
        "Photo / Videographer": 0,
        "Musician": 0,
        "Actor": 0,
        "Content Creator": 0,
        "Animator": 0,
        "Interior Designer": 2,
        "UI/UX / App Designer": 0,
        "Sound Engineer": 2,
        
        // Sports
        "Player (Football, Volleyball, etc.)": 3,
        "Athlete": 3,
        "Coach / Fitness Trainer": 3,
        "Referee / Sports Official": 0,
        "Dancer": 3
    },

    // ========================================
    // SOMETIMES, I ENJOY BOTH
    // ========================================
    "Sometimes, I enjoy both": {
        // Professional
        "Doctor": 2,
        "Nurse": 3,
        "Pharmacist": 3,
        "Lawyer": 2,
        "Teacher / Lecturer": 3,
        "Civil Engineer": 4,
        "Mechanical Engineer": 3,
        "Electrical Engineer": 3,
        "Software Developer": 2,
        "Data Analyst / Statistician": 2,
        "Architect": 4,
        "Accountant": 2,
        "Economist": 2,
        "Psychologist / Therapist": 2,
        "Counsellor": 2,
        "Journalist": 3,
        "Social Worker": 3,
        "Environmental Scientist": 4,
        "Urban Planner": 3,
        "Nutritionist / Dietitian": 4,
        "Food Scientist / Technologist": 4,
        "Childcare / Educator": 4,
        "Security Forces (Police, Soldier, etc.)": 3,
        "Pilot": 2,
        "Air Host / Flight Attendant": 3,
        
        // Technical
        "Electrician": 2,
        "Plumber": 2,
        "Welder": 2,
        "Carpenter": 2,
        "Mason": 2,
        "Auto Mechanic": 2,
        "HVAC Technician": 2,
        "Solar Technician": 3,
        "Machine Operator": 2,
        "Fabricator": 2,
        "Construction Worker": 2,
        "Heavy Equipment Operator": 2,
        "Refrigeration Technician": 2,
        "Industrial Technician": 3,
        "Electronics Repair Technician": 3,
        "Hairdresser / Barber": 3,
        "Dressmaker / Tailor": 2,
        "Painter / Decorator": 2,
        "Tiler": 2,
        "Glazier": 2,
        
        // Business
        "Business Owner / Entrepreneur": 4,
        "Real Estate Developer": 3,
        "Event Planner": 4,
        "Digital Marketer": 3,
        "Sales Executive": 3,
        "Retail Trader": 3,
        "Business Consultant": 3,
        "Logistics Manager": 3,
        "Financial Advisor": 2,
        "Marketing Manager": 3,
        "Chef / Catering Services": 3,
        "Hotel / Hospitality Manager": 4,
        "Home / Household Manager": 4,
        "Human Resources Manager": 3,
        "Banker": 2,
        "Farmer (Crops / Livestock)": 3,
        
        // Creative
        "Graphic Designer": 4,
        "Fashion Designer / Boutique Owner": 4,
        "Photo / Videographer": 4,
        "Musician": 4,
        "Actor": 4,
        "Content Creator": 4,
        "Animator": 4,
        "Interior Designer": 4,
        "UI/UX / App Designer": 3,
        "Sound Engineer": 3,
        
        // Sports
        "Player (Football, Volleyball, etc.)": 4,
        "Athlete": 4,
        "Coach / Fitness Trainer": 4,
        "Referee / Sports Official": 3,
        "Dancer": 4
    },

    // ========================================
    // NO, I PREFER OTHER THINGS
    // ========================================
    "No, I prefer other things": {
        // Professional
        "Doctor": 5,
        "Nurse": 4,
        "Pharmacist": 4,
        "Lawyer": 5,
        "Teacher / Lecturer": 4,
        "Civil Engineer": 2,
        "Mechanical Engineer": 0,
        "Electrical Engineer": 0,
        "Software Developer": 5,
        "Data Analyst / Statistician": 5,
        "Architect": 2,
        "Accountant": 5,
        "Economist": 5,
        "Psychologist / Therapist": 5,
        "Counsellor": 4,
        "Journalist": 4,
        "Social Worker": 4,
        "Environmental Scientist": 2,
        "Urban Planner": 4,
        "Nutritionist / Dietitian": 2,
        "Food Scientist / Technologist": 0,
        "Childcare / Educator": 2,
        "Security Forces (Police, Soldier, etc.)": 2,
        "Pilot": 3,
        "Air Host / Flight Attendant": 2,
        
        // Technical
        "Electrician": 0,
        "Plumber": 0,
        "Welder": 0,
        "Carpenter": 0,
        "Mason": 0,
        "Auto Mechanic": 0,
        "HVAC Technician": 0,
        "Solar Technician": 0,
        "Machine Operator": 0,
        "Fabricator": 0,
        "Construction Worker": 0,
        "Heavy Equipment Operator": 0,
        "Refrigeration Technician": 0,
        "Industrial Technician": 0,
        "Electronics Repair Technician": 0,
        "Hairdresser / Barber": 0,
        "Dressmaker / Tailor": 0,
        "Painter / Decorator": 0,
        "Tiler": 0,
        "Glazier": 0,
        
        // Business
        "Business Owner / Entrepreneur": 2,
        "Real Estate Developer": 3,
        "Event Planner": 3,
        "Digital Marketer": 4,
        "Sales Executive": 4,
        "Retail Trader": 4,
        "Business Consultant": 4,
        "Logistics Manager": 3,
        "Financial Advisor": 5,
        "Marketing Manager": 4,
        "Chef / Catering Services": 0,
        "Hotel / Hospitality Manager": 3,
        "Home / Household Manager": 0,
        "Human Resources Manager": 4,
        "Banker": 5,
        "Farmer (Crops / Livestock)": 0,
        
        // Creative
        "Graphic Designer": 3,
        "Fashion Designer / Boutique Owner": 0,
        "Photo / Videographer": 3,
        "Musician": 3,
        "Actor": 3,
        "Content Creator": 3,
        "Animator": 3,
        "Interior Designer": 2,
        "UI/UX / App Designer": 4,
        "Sound Engineer": 3,
        
        // Sports
        "Player (Football, Volleyball, etc.)": 0,
        "Athlete": 0,
        "Coach / Fitness Trainer": 2,
        "Referee / Sports Official": 4,
        "Dancer": 0
    }
};