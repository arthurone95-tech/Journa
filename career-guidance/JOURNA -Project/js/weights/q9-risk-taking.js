// ========================================
// QUESTION 9: Risk Taking Weights
// ========================================
// 📝 Point Values:
// 5 = Strong preference / Risk-taker essential
// 4 = Highly suitable / Comfortable with risk
// 3 = Suitable / Moderate risk tolerance
// 2 = Acceptable / Some risk tolerance
// 1 = Minor preference (not used)
// 0 = Not suitable / Avoids risk
// ========================================

export const Q9_WEIGHTS = {
    // ========================================
    // YES, I LIKE TRYING NEW THINGS
    // ========================================
    "Yes, I like trying new things": {
        // Professional
        "Doctor": 0,
        "Nurse": 0,
        "Pharmacist": 0,
        "Lawyer": 0,
        "Teacher / Lecturer": 0,
        "Civil Engineer": 2,
        "Mechanical Engineer": 2,
        "Electrical Engineer": 2,
        "Software Developer": 3,
        "Data Analyst / Statistician": 2,
        "Architect": 2,
        "Accountant": 0,
        "Economist": 2,
        "Psychologist / Therapist": 0,
        "Counsellor": 0,
        "Journalist": 3,
        "Social Worker": 2,
        "Environmental Scientist": 2,
        "Urban Planner": 2,
        "Nutritionist / Dietitian": 2,
        "Food Scientist / Technologist": 2,
        "Childcare / Educator": 2,
        "Security Forces (Police, Soldier, etc.)": 2,
        "Pilot": 2,
        
        // Technical
        "Electrician": 2,
        "Plumber": 2,
        "Welder": 2,
        "Carpenter": 2,
        "Mason": 2,
        "Auto Mechanic": 2,
        "HVAC Technician": 2,
        "Solar Technician": 3,
        "Machine Operator": 0,
        "Fabricator": 2,
        "Construction Worker": 2,
        "Heavy Equipment Operator": 2,
        "Refrigeration Technician": 2,
        "Industrial Technician": 2,
        "Electronics Repair Technician": 2,
        "Hairdresser / Barber": 2,
        "Dressmaker / Tailor": 2,
        "Painter / Decorator": 2,
        "Tiler": 2,
        "Glazier": 2,
        
        // Business
        "Business Owner / Entrepreneur": 5,
        "Real Estate Developer": 4,
        "Event Planner": 3,
        "Digital Marketer": 4,
        "Sales Executive": 4,
        "Retail Trader": 4,
        "Business Consultant": 3,
        "Logistics Manager": 2,
        "Financial Advisor": 2,
        "Marketing Manager": 3,
        "Chef / Catering Services": 3,
        "Hotel / Hospitality Manager": 2,
        "Home / Household Manager": 2,
        "Human Resources Manager": 2,
        "Banker": 2,
        "Farmer (Crops / Livestock)": 3,
        
        // Creative
        "Graphic Designer": 3,
        "Fashion Designer / Boutique Owner": 3,
        "Photo / Videographer": 3,
        "Musician": 4,
        "Actor": 4,
        "Content Creator": 4,
        "Animator": 3,
        "Interior Designer": 2,
        "UI/UX / App Designer": 3,
        "Sound Engineer": 2,
        
        // Sports
        "Player (Football, Volleyball, etc.)": 2,
        "Athlete": 2,
        "Coach / Fitness Trainer": 2,
        "Referee / Sports Official": 0,
        "Dancer": 3
    },

    // ========================================
    // SOMETIMES, IF I'M SURE
    // ========================================
    "Sometimes, if I'm sure": {
        // Professional
        "Doctor": 2,
        "Nurse": 2,
        "Pharmacist": 2,
        "Lawyer": 3,
        "Teacher / Lecturer": 3,
        "Civil Engineer": 4,
        "Mechanical Engineer": 4,
        "Electrical Engineer": 4,
        "Software Developer": 4,
        "Data Analyst / Statistician": 4,
        "Architect": 4,
        "Accountant": 3,
        "Economist": 4,
        "Psychologist / Therapist": 3,
        "Counsellor": 3,
        "Journalist": 4,
        "Social Worker": 4,
        "Environmental Scientist": 4,
        "Urban Planner": 4,
        "Nutritionist / Dietitian": 4,
        "Food Scientist / Technologist": 4,
        "Childcare / Educator": 4,
        "Security Forces (Police, Soldier, etc.)": 4,
        "Pilot": 3,
        "Air Host / Flight Attendant": 3,
        
        // Technical
        "Electrician": 4,
        "Plumber": 4,
        "Welder": 4,
        "Carpenter": 4,
        "Mason": 4,
        "Auto Mechanic": 4,
        "HVAC Technician": 4,
        "Solar Technician": 4,
        "Machine Operator": 3,
        "Fabricator": 4,
        "Construction Worker": 4,
        "Heavy Equipment Operator": 4,
        "Refrigeration Technician": 4,
        "Industrial Technician": 4,
        "Electronics Repair Technician": 4,
        "Hairdresser / Barber": 4,
        "Dressmaker / Tailor": 4,
        "Painter / Decorator": 4,
        "Tiler": 4,
        "Glazier": 4,
        
        // Business
        "Business Owner / Entrepreneur": 2,
        "Real Estate Developer": 3,
        "Event Planner": 4,
        "Digital Marketer": 3,
        "Sales Executive": 3,
        "Retail Trader": 3,
        "Business Consultant": 4,
        "Logistics Manager": 4,
        "Financial Advisor": 4,
        "Marketing Manager": 4,
        "Chef / Catering Services": 4,
        "Hotel / Hospitality Manager": 4,
        "Home / Household Manager": 4,
        "Human Resources Manager": 4,
        "Banker": 3,
        "Farmer (Crops / Livestock)": 4,
        
        // Creative
        "Graphic Designer": 4,
        "Fashion Designer / Boutique Owner": 4,
        "Photo / Videographer": 4,
        "Musician": 3,
        "Actor": 3,
        "Content Creator": 3,
        "Animator": 4,
        "Interior Designer": 4,
        "UI/UX / App Designer": 4,
        "Sound Engineer": 4,
        
        // Sports
        "Player (Football, Volleyball, etc.)": 4,
        "Athlete": 4,
        "Coach / Fitness Trainer": 4,
        "Referee / Sports Official": 3,
        "Dancer": 4
    },

    // ========================================
    // NO, I PREFER TO BE SAFE
    // ========================================
    "No, I prefer to be safe": {
        // Professional
        "Doctor": 5,
        "Nurse": 5,
        "Pharmacist": 5,
        "Lawyer": 4,
        "Teacher / Lecturer": 4,
        "Civil Engineer": 3,
        "Mechanical Engineer": 3,
        "Electrical Engineer": 3,
        "Software Developer": 2,
        "Data Analyst / Statistician": 3,
        "Architect": 3,
        "Accountant": 5,
        "Economist": 3,
        "Psychologist / Therapist": 4,
        "Counsellor": 4,
        "Journalist": 2,
        "Social Worker": 3,
        "Environmental Scientist": 3,
        "Urban Planner": 3,
        "Nutritionist / Dietitian": 3,
        "Food Scientist / Technologist": 3,
        "Childcare / Educator": 3,
        "Security Forces (Police, Soldier, etc.)": 3,
        "Pilot": 3,
        
        // Technical
        "Electrician": 3,
        "Plumber": 3,
        "Welder": 3,
        "Carpenter": 3,
        "Mason": 3,
        "Auto Mechanic": 3,
        "HVAC Technician": 3,
        "Solar Technician": 2,
        "Machine Operator": 5,
        "Fabricator": 3,
        "Construction Worker": 3,
        "Heavy Equipment Operator": 3,
        "Refrigeration Technician": 3,
        "Industrial Technician": 3,
        "Electronics Repair Technician": 3,
        "Hairdresser / Barber": 3,
        "Dressmaker / Tailor": 3,
        "Painter / Decorator": 3,
        "Tiler": 3,
        "Glazier": 3,
        
        // Business
        "Business Owner / Entrepreneur": 0,
        "Real Estate Developer": 2,
        "Event Planner": 2,
        "Digital Marketer": 0,
        "Sales Executive": 0,
        "Retail Trader": 0,
        "Business Consultant": 2,
        "Logistics Manager": 3,
        "Financial Advisor": 3,
        "Marketing Manager": 2,
        "Chef / Catering Services": 2,
        "Hotel / Hospitality Manager": 2,
        "Home / Household Manager": 3,
        "Human Resources Manager": 3,
        "Banker": 4,
        "Farmer (Crops / Livestock)": 2,
        
        // Creative
        "Graphic Designer": 2,
        "Fashion Designer / Boutique Owner": 2,
        "Photo / Videographer": 2,
        "Musician": 0,
        "Actor": 0,
        "Content Creator": 0,
        "Animator": 2,
        "Interior Designer": 3,
        "UI/UX / App Designer": 2,
        "Sound Engineer": 3,
        
        // Sports
        "Player (Football, Volleyball, etc.)": 0,
        "Athlete": 0,
        "Coach / Fitness Trainer": 2,
        "Referee / Sports Official": 5,
        "Dancer": 0
    }
};