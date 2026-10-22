// ========================================
// QUESTION 7: Study Years Weights
// ========================================
// 📝 Point Values:
// 5 = Strong preference / Required
// 4 = Highly suitable
// 3 = Suitable
// 2 = Acceptable
// 1 = Low preference (not used)
// 0 = Not suitable / No points
// ========================================

export const Q7_WEIGHTS = {
    // ========================================
    // YES, I'M READY FOR A LONG JOURNEY
    // ========================================
    "Yes, I'm ready for a long journey": {
        // Professional
        "Doctor": 5,
        "Nurse": 4,
        "Pharmacist": 5,
        "Lawyer": 5,
        "Teacher / Lecturer": 4,
        "Civil Engineer": 5,
        "Mechanical Engineer": 5,
        "Electrical Engineer": 5,
        "Software Developer": 4,
        "Data Analyst / Statistician": 4,
        "Architect": 5,
        "Accountant": 4,
        "Economist": 5,
        "Psychologist / Therapist": 5,
        "Counsellor": 4,
        "Journalist": 3,
        "Social Worker": 3,
        "Environmental Scientist": 5,
        "Urban Planner": 4,
        "Nutritionist / Dietitian": 4,
        "Food Scientist / Technologist": 4,
        "Childcare / Educator": 2,
        "Security Forces (Police, Soldier, etc.)": 3,
        "Pilot": 5,
        "Air Host / Flight Attendant": 3,

        
        // Technical
        "Electrician": 2,
        "Plumber": 2,
        "Welder": 2,
        "Carpenter": 2,
        "Mason": 0,
        "Auto Mechanic": 2,
        "HVAC Technician": 2,
        "Solar Technician": 2,
        "Machine Operator": 0,
        "Fabricator": 2,
        "Construction Worker": 0,
        "Heavy Equipment Operator": 0,
        "Refrigeration Technician": 2,
        "Industrial Technician": 3,
        "Electronics Repair Technician": 2,
        "Hairdresser / Barber": 0,
        "Dressmaker / Tailor": 0,
        "Painter / Decorator": 0,
        "Tiler": 0,
        "Glazier": 0,
        
        // Business
        "Business Owner / Entrepreneur": 2,
        "Real Estate Developer": 2,
        "Event Planner": 0,
        "Digital Marketer": 0,
        "Sales Executive": 0,
        "Retail Trader": 0,
        "Business Consultant": 4,
        "Logistics Manager": 3,
        "Financial Advisor": 4,
        "Marketing Manager": 3,
        "Chef / Catering Services": 0,
        "Hotel / Hospitality Manager": 2,
        "Home / Household Manager": 0,
        "Human Resources Manager": 3,
        "Banker": 3,
        "Farmer (Crops / Livestock)": 2,
        
        // Creative
        "Graphic Designer": 0,
        "Fashion Designer / Boutique Owner": 0,
        "Photo / Videographer": 0,
        "Musician": 0,
        "Actor": 0,
        "Content Creator": 0,
        "Animator": 0,
        "Interior Designer": 2,
        "UI/UX / App Designer": 2,
        "Sound Engineer": 0,
        
        // Sports
        "Player (Football, Volleyball, etc.)": 0,
        "Athlete": 0,
        "Coach / Fitness Trainer": 2,
        "Referee / Sports Official": 0,
        "Dancer": 0
    },

    // ========================================
    // MAYBE, DEPENDS ON WHAT I WANT TO DO
    // ========================================
    "Maybe, depends on what I want to do": {
        // Professional
        "Doctor": 2,
        "Nurse": 4,
        "Pharmacist": 2,
        "Lawyer": 2,
        "Teacher / Lecturer": 4,
        "Civil Engineer": 2,
        "Mechanical Engineer": 2,
        "Electrical Engineer": 2,
        "Software Developer": 3,
        "Data Analyst / Statistician": 3,
        "Architect": 2,
        "Accountant": 3,
        "Economist": 2,
        "Psychologist / Therapist": 2,
        "Counsellor": 4,
        "Journalist": 4,
        "Social Worker": 4,
        "Environmental Scientist": 2,
        "Urban Planner": 3,
        "Nutritionist / Dietitian": 3,
        "Food Scientist / Technologist": 3,
        "Childcare / Educator": 4,
        "Security Forces (Police, Soldier, etc.)": 4,
        "Pilot": 2,
        "Air Host / Flight Attendant": 4,
        
        // Technical
        "Electrician": 3,
        "Plumber": 3,
        "Welder": 3,
        "Carpenter": 3,
        "Mason": 3,
        "Auto Mechanic": 3,
        "HVAC Technician": 3,
        "Solar Technician": 4,
        "Machine Operator": 3,
        "Fabricator": 3,
        "Construction Worker": 2,
        "Heavy Equipment Operator": 2,
        "Refrigeration Technician": 3,
        "Industrial Technician": 4,
        "Electronics Repair Technician": 4,
        "Hairdresser / Barber": 3,
        "Dressmaker / Tailor": 3,
        "Painter / Decorator": 3,
        "Tiler": 3,
        "Glazier": 3,
        
        // Business
        "Business Owner / Entrepreneur": 4,
        "Real Estate Developer": 4,
        "Event Planner": 4,
        "Digital Marketer": 3,
        "Sales Executive": 3,
        "Retail Trader": 3,
        "Business Consultant": 3,
        "Logistics Manager": 4,
        "Financial Advisor": 3,
        "Marketing Manager": 4,
        "Chef / Catering Services": 3,
        "Hotel / Hospitality Manager": 4,
        "Home / Household Manager": 3,
        "Human Resources Manager": 4,
        "Banker": 3,
        "Farmer (Crops / Livestock)": 4,
        
        // Creative
        "Graphic Designer": 3,
        "Fashion Designer / Boutique Owner": 3,
        "Photo / Videographer": 3,
        "Musician": 3,
        "Actor": 3,
        "Content Creator": 3,
        "Animator": 3,
        "Interior Designer": 4,
        "UI/UX / App Designer": 4,
        "Sound Engineer": 3,
        
        // Sports
        "Player (Football, Volleyball, etc.)": 2,
        "Athlete": 2,
        "Coach / Fitness Trainer": 4,
        "Referee / Sports Official": 2,
        "Dancer": 2
    },

    // ========================================
    // NO, I PREFER SHORTER TRAINING
    // ========================================
    "No, I prefer shorter training": {
        // Professional
        "Doctor": 0,
        "Nurse": 0,
        "Pharmacist": 0,
        "Lawyer": 0,
        "Teacher / Lecturer": 0,
        "Civil Engineer": 0,
        "Mechanical Engineer": 0,
        "Electrical Engineer": 0,
        "Software Developer": 2,
        "Data Analyst / Statistician": 2,
        "Architect": 0,
        "Accountant": 2,
        "Economist": 0,
        "Psychologist / Therapist": 0,
        "Counsellor": 0,
        "Journalist": 2,
        "Social Worker": 2,
        "Environmental Scientist": 0,
        "Urban Planner": 0,
        "Nutritionist / Dietitian": 0,
        "Food Scientist / Technologist": 0,
        "Childcare / Educator": 3,
        "Security Forces (Police, Soldier, etc.)": 2,
        "Pilot": 0,
        
        // Technical
        "Electrician": 4,
        "Plumber": 4,
        "Welder": 4,
        "Carpenter": 4,
        "Mason": 5,
        "Auto Mechanic": 4,
        "HVAC Technician": 4,
        "Solar Technician": 3,
        "Machine Operator": 5,
        "Fabricator": 4,
        "Construction Worker": 5,
        "Heavy Equipment Operator": 5,
        "Refrigeration Technician": 4,
        "Industrial Technician": 2,
        "Electronics Repair Technician": 3,
        "Hairdresser / Barber": 5,
        "Dressmaker / Tailor": 5,
        "Painter / Decorator": 5,
        "Tiler": 5,
        "Glazier": 5,
        
        // Business
        "Business Owner / Entrepreneur": 3,
        "Real Estate Developer": 3,
        "Event Planner": 4,
        "Digital Marketer": 5,
        "Sales Executive": 5,
        "Retail Trader": 5,
        "Business Consultant": 0,
        "Logistics Manager": 2,
        "Financial Advisor": 2,
        "Marketing Manager": 2,
        "Chef / Catering Services": 5,
        "Hotel / Hospitality Manager": 3,
        "Home / Household Manager": 5,
        "Human Resources Manager": 2,
        "Banker": 2,
        "Farmer (Crops / Livestock)": 3,
        
        // Creative
        "Graphic Designer": 5,
        "Fashion Designer / Boutique Owner": 5,
        "Photo / Videographer": 5,
        "Musician": 5,
        "Actor": 5,
        "Content Creator": 5,
        "Animator": 5,
        "Interior Designer": 3,
        "UI/UX / App Designer": 3,
        "Sound Engineer": 5,
        
        // Sports
        "Player (Football, Volleyball, etc.)": 5,
        "Athlete": 5,
        "Coach / Fitness Trainer": 3,
        "Referee / Sports Official": 5,
        "Dancer": 5
    }
};