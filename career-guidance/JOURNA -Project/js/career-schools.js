// ========================================
// JOURNA - Career to Schools Connection
// ========================================
// This module connects career recommendations to
// actual schools in Ghana that offer the right programs.
// ========================================

import { getCategoryName } from './config.js';
import { getAllSchools } from './school-data.js';

/**
 * Get the programs needed for a specific career from the career object
 * @param {Object} career - The career object (must have programs property)
 * @returns {Object} - Primary and secondary programs
 */
export const getProgramsForCareer = (career) => {
    if (!career || !career.programs) {
        return {
            primary: [],
            secondary: [],
            type: 'SHS'
        };
    }
    return {
        primary: career.programs.primary || [],
        secondary: career.programs.secondary || [],
        type: 'SHS'
    };
};

/**
 * Normalize a program name for matching against school programs
 * e.g., "STEM – Biomedical Science" → "STEM"
 *       "STEM – Engineering Science" → "STEM"
 *       "STEM – Computing" → "STEM"
 *       "STEM – Agric Science" → "STEM"
 *       "STEM – Aviation & Aerospace" → "STEM"
 *       "STEM – Manufacturing Engineering" → "STEM"
 */
const normalizeProgram = (programName) => {
    // If it starts with "STEM – ", extract the base "STEM"
    if (programName.startsWith('STEM – ')) {
        return 'STEM';
    }
    return programName;
};

/**
 * Check if a school offers a specific program (with fuzzy matching)
 */
const schoolOffersProgram = (schoolPrograms, targetProgram) => {
    if (!schoolPrograms || schoolPrograms.length === 0) return false;
    
    const normalizedTarget = normalizeProgram(targetProgram);
    
    return schoolPrograms.some(schoolProg => {
        // Direct match
        if (schoolProg === targetProgram) return true;
        // Normalized match (e.g., "STEM" matches "STEM – Biomedical Science")
        if (normalizeProgram(schoolProg) === normalizedTarget) return true;
        // Partial match (e.g., "General Science" matches "General Science")
        if (schoolProg.includes(targetProgram) || targetProgram.includes(schoolProg)) return true;
        return false;
    });
};

/**
 * Get all schools that offer programs for a specific career
 * @param {Object} career - The career object
 * @param {string} region - Optional region filter
 * @param {string} gender - Optional gender filter
 * @returns {Array} - List of schools
 */
export const getSchoolsForCareer = (career, region = null, gender = null) => {
    // Get the programs needed for this career
    const { primary, secondary } = getProgramsForCareer(career);
    
    // Combine all relevant programs
    const relevantPrograms = [...primary, ...secondary];
    
    if (relevantPrograms.length === 0) {
        return [];
    }
    
    // Get all schools
    let allSchools = getAllSchools();
    
    // Filter schools that offer any of the relevant programs
    let matchedSchools = allSchools.filter(school => {
        if (!school.programs || school.programs.length === 0) return false;
        
        // Check if the school offers any of the relevant programs
        return relevantPrograms.some(program => 
            schoolOffersProgram(school.programs, program)
        );
    });
    
    // Apply region filter
    if (region && region !== 'all') {
        matchedSchools = matchedSchools.filter(school => school.region === region);
    }
    
    // Apply gender filter
    if (gender && gender !== 'all') {
        matchedSchools = matchedSchools.filter(school => school.gender === gender);
    }
    
    // Sort by school name
    matchedSchools.sort((a, b) => a.name.localeCompare(b.name));
    
    return matchedSchools;
};

/**
 * Get school count for each region for a specific career
 * @param {Object} career - The career object
 * @returns {Object} - Region → count mapping
 */
export const getRegionCountsForCareer = (career) => {
    const schools = getSchoolsForCareer(career);
    const counts = {};
    
    schools.forEach(school => {
        const region = school.region || 'Unknown';
        counts[region] = (counts[region] || 0) + 1;
    });
    
    return counts;
};

/**
 * Get unique school types available for a career
 * @param {Object} career - The career object
 * @returns {Array} - List of school types (SHS, SHTS, TVET, etc.)
 */
export const getSchoolTypesForCareer = (career) => {
    const schools = getSchoolsForCareer(career);
    const types = new Set();
    
    schools.forEach(school => {
        if (school.school_type) {
            types.add(school.school_type);
        }
    });
    
    return Array.from(types).sort();
};

/**
 * Check if a school offers programs for a specific career
 * @param {Object} school - The school object
 * @param {Object} career - The career object
 * @returns {boolean} - True if the school offers relevant programs
 */
export const schoolOffersCareer = (school, career) => {
    const { primary, secondary } = getProgramsForCareer(career);
    const relevantPrograms = [...primary, ...secondary];
    
    if (!school.programs || school.programs.length === 0) return false;
    
    return relevantPrograms.some(program => 
        schoolOffersProgram(school.programs, program)
    );
};

/**
 * Get all regions that have schools for a specific career
 * @param {Object} career - The career object
 * @returns {Array} - List of regions with schools
 */
export const getAvailableRegionsForCareer = (career) => {
    const schools = getSchoolsForCareer(career);
    const regions = new Set();
    
    schools.forEach(school => {
        if (school.region) {
            regions.add(school.region);
        }
    });
    
    return Array.from(regions).sort();
};

/**
 * Get a summary of career-to-schools info
 * @param {Object} career - The career object
 * @returns {Object} - Summary information
 */
export const getCareerSchoolSummary = (career) => {
    // Ensure career has required properties
    if (!career || !career.name) {
        return {
            careerName: 'Unknown',
            careerCategory: 'Unknown',
            categoryName: 'Unknown',
            programs: { primary: [], secondary: [], type: 'SHS' },
            stats: { totalSchools: 0, totalRegions: 0, regions: [], schoolTypes: [] },
            schools: []
        };
    }
    
    const { primary, secondary, type } = getProgramsForCareer(career);
    const schools = getSchoolsForCareer(career);
    const regions = getAvailableRegionsForCareer(career);
    const schoolTypes = getSchoolTypesForCareer(career);
    
    return {
        careerName: career.name,
        careerCategory: career.category || 'Unknown',
        categoryName: getCategoryName(career.category || 'PRO'),
        programs: {
            primary,
            secondary,
            type
        },
        stats: {
            totalSchools: schools.length,
            totalRegions: regions.length,
            regions: regions,
            schoolTypes: schoolTypes
        },
        schools: schools
    };
};

// Export all functions
export default {
    getProgramsForCareer,
    getSchoolsForCareer,
    getRegionCountsForCareer,
    getSchoolTypesForCareer,
    schoolOffersCareer,
    getAvailableRegionsForCareer,
    getCareerSchoolSummary
};