// ========================================
// JOURNA - Results Module
// Displays and manages career assessment results
// ========================================

import { getCategoryName, getCareerById, ROADMAP_TEMPLATES} from './config.js';
import { showNotification } from './utils.js';
import { getRoadmapForCareer } from './roadmap-data.js';
import { getSchoolsForCareer, getCareerSchoolSummary } from './career-schools.js';

// ========================================
// 1. CORE RESULT FUNCTIONS
// ========================================

/**
 * Get saved results from localStorage
 * @returns {Object|null} Results or null if not found
 */
export const getSavedResults = () => {
    const saved = localStorage.getItem('journa_results');
    if (saved) {
        return JSON.parse(saved);
    }
    return null;
};

/**
 * Format results for display
 * @param {Object} results - Raw results from assessment
 * @returns {Object} Formatted results
 */
export const formatResults = (results) => {
    if (!results || !results.results) return null;
    
    // Helper to get full career data by ID
    const enrichCareer = (career) => {
        // Try to get the full career from config.js using the ID
        const fullCareer = getCareerById(career.id);
        // If found, use it; otherwise fall back to the provided career data
        return fullCareer || career;
    };
    
    const formatted = {
        ...results.results,
        formattedDate: new Date(results.timestamp).toLocaleDateString('en-GH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        topCategories: results.results.topCategories.map(tc => ({
            ...tc,
            name: getCategoryName(tc.cat),
            color: getCategoryColor(tc.cat)
        })),
        primary: results.results.primary.map(career => {
            // Get the full career data (with programs) from config.js
            const fullCareer = enrichCareer(career);
            return {
                ...career,
                formattedCategory: getCategoryName(career.category),
                matchLevel: getMatchLevel(career.matchPercentage),
                colorClass: getMatchColorClass(career.matchPercentage),
                // Pass the full career to getCareerSchoolSummary so it has programs data
                schoolInfo: getCareerSchoolSummary(fullCareer),
                // Preserve programs from the full career
                programs: fullCareer.programs || career.programs
            };
        }),
        alternative: results.results.alternative.map(career => {
            // Get the full career data (with programs) from config.js
            const fullCareer = enrichCareer(career);
            return {
                ...career,
                formattedCategory: getCategoryName(career.category),
                matchLevel: getMatchLevel(career.matchPercentage),
                colorClass: getMatchColorClass(career.matchPercentage),
                // Pass the full career to getCareerSchoolSummary so it has programs data
                schoolInfo: getCareerSchoolSummary(fullCareer),
                // Preserve programs from the full career
                programs: fullCareer.programs || career.programs
            };
        })
    };
    
    return formatted;
};

/**
 * Get match level based on score
 * @param {number} score - Match percentage
 * @returns {string} Match level
 */
export const getMatchLevel = (score) => {
    if (score >= 85) return 'Excellent Match';
    if (score >= 70) return 'Strong Match';
    if (score >= 60) return 'Good Match';
    if (score >= 50) return 'Potential Match';
    return 'Consider Exploring';
};

/**
 * Get color class for match level
 * @param {number} score - Match percentage
 * @returns {string} CSS class
 */
export const getMatchColorClass = (score) => {
    if (score >= 85) return 'match-excellent';
    if (score >= 70) return 'match-strong';
    if (score >= 60) return 'match-good';
    if (score >= 50) return 'match-potential';
    return 'match-explore';
};

/**
 * Get category color
 * @param {string} category - Category code
 * @returns {string} Color code
 */
export const getCategoryColor = (category) => {
    const colors = {
        PRO: '#6B5B95',
        TECH: '#2E8B57',
        BUS: '#F4A261',
        CRE: '#E76F51',
        SPT: '#2A9D8F'
    };
    return colors[category] || '#6C757D';
};

/**
 * Get statistics from results
 * @param {Object} results - Results object
 * @returns {Object} Statistics
 */
export const getStatistics = (results) => {
    if (!results || !results.results) {
        return {
            totalMatches: 0,
            averageScore: 0,
            highestScore: 0,
            categoriesCount: 0
        };
    }
    
    const allCareers = [...results.results.primary, ...results.results.alternative];
    const scores = allCareers.map(c => c.matchPercentage);
    
    const uniqueCategories = new Set(allCareers.map(c => c.category));
    
    return {
        totalMatches: allCareers.length,
        averageScore: scores.length > 0 
            ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
            : 0,
        highestScore: scores.length > 0 ? Math.max(...scores) : 0,
        categoriesCount: uniqueCategories.size,
        topMatch: allCareers[0] || null
    };
};

/**
 * Get program recommendation for a specific career
 * @param {Object} career - Career object with programs property
 * @returns {Object} Program recommendation
 */
export const getProgramRecommendation = (career) => {
    if (!career || !career.programs) {
        return {
            primary: [],
            secondary: [],
            description: "No specific program recommendations available."
        };
    }
    
    const programs = career.programs;
    return {
        primary: programs.primary || [],
        secondary: programs.secondary || [],
        description: getProgramDescription(career.category)
    };
};

/**
 * Get program description
 * @param {string} category - Career category
 * @returns {string} Description
 */
const getProgramDescription = (category) => {
    const descriptions = {
        PRO: "Focus on General Science, General Arts, Business, or Home Economics at SHS. Aim for university admission with good WASSCE results.",
        TECH: "Focus on Technical/Vocational programs or Home Economics. Consider TVET institutions for hands-on training and certification.",
        BUS: "Focus on Business, General Arts, or Home Economics programs. Develop entrepreneurial skills while studying. Consider starting small businesses.",
        CRE: "Focus on Visual Arts, General Arts, or Home Economics. Build your portfolio and develop creative skills through practice.",
        SPT: "Focus on General Arts with Physical Education. Join sports teams and seek professional training opportunities."
    };
    return descriptions[category] || "Consult with your school counselor for the best program options.";
};

/**
 * Get roadmap for a career
 * @param {Object} career - Career object
 * @returns {Object} Roadmap steps with multiple pathways
 */
export const getCareerRoadmap = (career) => {
    const careerRoadmap = getRoadmapForCareer(career.name);
    
    if (careerRoadmap && careerRoadmap.pathways && careerRoadmap.pathways.length > 0) {
        const pathway = careerRoadmap.pathways[0];
        return {
            hasMultiplePathways: careerRoadmap.pathways.length > 1,
            pathways: careerRoadmap.pathways,
            steps: pathway.steps.map(step => ({
                title: step.stage,
                period: step.duration,
                description: step.description,
                icon: getIconForStage(step.stage)
            })),
            duration: pathway.totalDuration,
            nextSteps: pathway.nextSteps
        };
    }
    
    const template = ROADMAP_TEMPLATES[career.category] || ROADMAP_TEMPLATES.PRO;
    
    return {
        hasMultiplePathways: false,
        pathways: [{
            title: "Standard Pathway",
            steps: [
                { stage: "Junior High School (JHS)", duration: "3 years", description: template.jhs },
                { stage: "Senior High School (SHS)", duration: "3 years", description: template.shs },
                { stage: "Tertiary Education / Training", duration: template.tertiary.includes("university") ? "4 years" : "2-3 years", description: template.tertiary },
                { stage: "Career Entry", duration: "Ongoing", description: "Begin your career journey. Continue learning and developing skills throughout your career." }
            ]
        }],
        steps: [
            { title: "Junior High School (JHS)", period: "3 years", description: template.jhs, icon: "fa-school" },
            { title: "Senior High School (SHS)", period: "3 years", description: template.shs, icon: "fa-graduation-cap" },
            { title: "Tertiary Education / Training", period: template.tertiary.includes("university") ? "4 years" : "2-3 years", description: template.tertiary, icon: "fa-university" },
            { title: "Career Entry", period: "Ongoing", description: "Begin your career journey. Continue learning and developing skills throughout your career.", icon: "fa-briefcase" }
        ],
        duration: template.duration,
        nextSteps: template.next
    };
};

/**
 * Get icon for stage name
 */
const getIconForStage = (stage) => {
    if (stage.includes("JHS") || stage.includes("Basic")) return "fa-school";
    if (stage.includes("Second Cycle") || stage.includes("SHS")) return "fa-graduation-cap";
    if (stage.includes("University") || stage.includes("College") || stage.includes("School") || stage.includes("Academy")) return "fa-university";
    if (stage.includes("Apprenticeship") || stage.includes("Training")) return "fa-tools";
    if (stage.includes("Career") || stage.includes("Work")) return "fa-briefcase";
    if (stage.includes("Certification") || stage.includes("Licensure")) return "fa-certificate";
    if (stage.includes("Internship")) return "fa-chalkboard-user";
    return "fa-star";
};

/**
 * Get schools for a specific career (for modal/filtering)
 * @param {Object} career - The career object
 * @param {string} region - Optional region filter
 * @param {string} gender - Optional gender filter
 * @returns {Array} - List of schools
 */
export const getSchoolsForCareerFiltered = (career, region = 'all', gender = 'all') => {
    const regionFilter = region === 'all' ? null : region;
    const genderFilter = gender === 'all' ? null : gender;
    return getSchoolsForCareer(career, regionFilter, genderFilter);
};

/**
 * Download results as PDF
 * @param {Object} results - Results to download
 */
export const downloadResults = (results) => {
    try {
        const printContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>JOURNA Career Results</title>
                <meta charset="UTF-8">
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body { font-family: 'Inter', Arial, sans-serif; padding: 40px; line-height: 1.6; color: #212529; max-width: 800px; margin: 0 auto; }
                    h1 { color: #1E3A8A; font-size: 28px; margin-bottom: 8px; }
                    h2 { color: #1E3A8A; font-size: 20px; margin-top: 24px; margin-bottom: 16px; border-bottom: 2px solid #E9ECEF; padding-bottom: 8px; }
                    .date { color: #6C757D; margin-bottom: 24px; font-size: 14px; }
                    .career { margin-bottom: 20px; padding: 16px; background: #F8F9FA; border-radius: 8px; border-left: 4px solid #1E7B6B; }
                    .career-title { font-size: 18px; font-weight: 600; color: #1E3A8A; margin-bottom: 4px; }
                    .match { color: #1E7B6B; font-weight: bold; font-size: 14px; }
                    .category { color: #6C757D; font-size: 12px; margin-bottom: 8px; }
                    .description { font-size: 14px; color: #495057; margin-top: 8px; }
                    .alternative { margin-bottom: 12px; padding: 12px; background: #FFFFFF; border: 1px solid #E9ECEF; border-radius: 6px; }
                    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #E9ECEF; text-align: center; font-size: 12px; color: #ADB5BD; }
                </style>
            </head>
            <body>
                <h1>JOURNA Career Assessment Results</h1>
                <div class="date">Date: ${new Date().toLocaleDateString('en-GH', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                
                <h2>🎯 Your Top Career Matches</h2>
                ${results.primary.map((career, idx) => `
                    <div class="career">
                        <div class="career-title">${idx + 1}. ${career.name}</div>
                        <div class="match">${career.matchPercentage}% Match</div>
                        <div class="category">Category: ${career.formattedCategory}</div>
                        <div class="description">${career.description || 'Explore this exciting career path in Ghana.'}</div>
                    </div>
                `).join('')}
                
                ${results.alternative.length > 0 ? '<h2>📌 Alternative Careers</h2>' : ''}
                ${results.alternative.map(career => `
                    <div class="alternative">
                        <strong>${career.name}</strong>
                        <span style="color: #1E7B6B;"> (${career.matchPercentage}% match)</span>
                        <div style="color: #6C757D; font-size: 12px;">Category: ${career.formattedCategory}</div>
                    </div>
                `).join('')}
                
                <div class="footer">
                    Generated by JOURNA - Your Career Guide<br>
                    www.journa.com
                </div>
            </body>
            </html>
        `;
        
        const printWindow = window.open('', '_blank');
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.print();
        
        showNotification('Opening PDF preview...', 'info');
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        showNotification('Failed to generate PDF', 'error');
    }
};

/**
 * Share results via email
 * @param {Object} results - Results to share
 * @param {string} email - Email address
 */
export const shareViaEmail = (results, email) => {
    try {
        const subject = 'My JOURNA Career Assessment Results';
        const body = `Check out my career matches from JOURNA!\n\nTop Careers:\n${results.primary.map(c => 
            `- ${c.name} (${c.matchPercentage}% match)`
        ).join('\n')}\n\nTake the assessment at: ${window.location.origin}`;
        
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        showNotification('Opening email client...', 'info');
        
    } catch (error) {
        console.error('Error sharing results:', error);
        showNotification('Failed to share results', 'error');
    }
};

/**
 * Export results as text
 * @param {Object} results - Results to export
 */
export const exportAsText = (results) => {
    try {
        let content = 'JOURNA Career Assessment Results\n';
        content += '================================\n\n';
        content += `Date: ${new Date().toLocaleDateString()}\n\n`;
        
        content += 'Top Categories:\n';
        results.topCategories.forEach(cat => {
            content += `  - ${cat.name}: ${cat.score} points\n`;
        });
        
        content += '\nYour Top Career Matches:\n';
        results.primary.forEach((career, idx) => {
            content += `\n${idx + 1}. ${career.name}\n`;
            content += `   Match: ${career.matchPercentage}%\n`;
            content += `   Category: ${career.formattedCategory}\n`;
            content += `   Description: ${career.description}\n`;
        });
        
        if (results.alternative.length > 0) {
            content += '\nAlternative Careers:\n';
            results.alternative.forEach((career, idx) => {
                content += `  - ${career.name} (${career.matchPercentage}% match)\n`;
            });
        }
        
        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `journa-results-${new Date().toISOString().split('T')[0]}.txt`;
        a.click();
        
        window.URL.revokeObjectURL(url);
        showNotification('Export started!', 'success');
        
    } catch (error) {
        console.error('Error exporting results:', error);
        showNotification('Failed to export results', 'error');
    }
};

// Export all functions
export default {
    getSavedResults,
    formatResults,
    getMatchLevel,
    getMatchColorClass,
    getCategoryColor,
    getStatistics,
    getProgramRecommendation,
    getCareerRoadmap,
    getSchoolsForCareerFiltered,
    downloadResults,
    shareViaEmail,
    exportAsText
};