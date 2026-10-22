// ========================================
// JOURNA - Assessment Module
// Frontend-only career assessment with static data
// ========================================

import { QUESTIONS as QUESTIONS_DATA, CAREER_LISTS, getAllCareers } from './config.js';
import { showNotification } from './utils.js';

// Import all question weights
import { Q1_WEIGHTS } from './weights/q1-subjects.js';
import { Q2_WEIGHTS } from './weights/q2-activities.js';
import { Q3_WEIGHTS } from './weights/q3-work-environment.js';
import { Q4_WEIGHTS } from './weights/q4-natural-strengths.js';
import { Q5_WEIGHTS } from './weights/q5-work-style.js';
import { Q6_WEIGHTS } from './weights/q6-motivation.js';
import { Q7_WEIGHTS } from './weights/q7-study-years.js';
import { Q8_WEIGHTS } from './weights/q8-hands-on-work.js';
import { Q9_WEIGHTS } from './weights/q9-risk-taking.js';
import { Q10_WEIGHTS } from './weights/q10-personality.js';
import { Q11_WEIGHTS } from './weights/q11-success-goal.js';
import { Q12_WEIGHTS } from './weights/q12-career-path.js';
import { Q13_WEIGHTS } from './weights/q13-daily-activity.js';

// Export QUESTIONS for use in HTML
export const QUESTIONS = QUESTIONS_DATA;

// ========================================
// COMBINED ANSWER-TO-CAREER WEIGHTS
// ========================================

const ANSWER_CAREER_WEIGHTS = {
    // Q1: Subjects
    ...Q1_WEIGHTS,
    
    // Q2: Activities
    ...Q2_WEIGHTS,
    
    // Q3: Work Environment
    ...Q3_WEIGHTS,
    
    // Q4: Natural Strengths
    ...Q4_WEIGHTS,
    
    // Q5: Work Style
    ...Q5_WEIGHTS,
    
    // Q6: Motivation
    ...Q6_WEIGHTS,
    
    // Q7: Study Years
    ...Q7_WEIGHTS,
    
    // Q8: Hands-on Work
    ...Q8_WEIGHTS,
    
    // Q9: Risk Taking
    ...Q9_WEIGHTS,
    
    // Q10: Personality
    ...Q10_WEIGHTS,
    
    // Q11: Success Goal
    ...Q11_WEIGHTS,
    
    // Q12: Career Path
    ...Q12_WEIGHTS,
    
    // Q13: Daily Activity
    ...Q13_WEIGHTS
};

// ========================================
// SCORING SYSTEM
// ========================================

/**
 * Calculate career scores based on user answers
 * Uses direct answer-to-career weights only (no category scoring)
 */
export const calculateCareerScores = (userAnswers) => {
    const allCareers = getAllCareers();
    
    // Initialize scores for all careers to 0
    const careerScores = {};
    allCareers.forEach(career => {
        careerScores[career.name] = 0;
    });
    
    // Process each answer and add points to specific careers
    Object.entries(userAnswers).forEach(([questionId, answer]) => {
        const question = QUESTIONS.find(q => q.id === parseInt(questionId));
        if (!question) return;
        
        // Handle both single and multi-select answers
        const answerValues = Array.isArray(answer) ? answer : [answer];
        
        answerValues.forEach(answerText => {
            // Check if this answer has career weights
            if (ANSWER_CAREER_WEIGHTS[answerText]) {
                const weights = ANSWER_CAREER_WEIGHTS[answerText];
                
                // Add points to each career in the weight object
                Object.entries(weights).forEach(([careerName, points]) => {
                    if (careerScores[careerName] !== undefined) {
                        careerScores[careerName] += points;
                    }
                });
            }
        });
    });
    
    // Convert to array and filter out careers with zero score
    const careerScoreArray = allCareers
        .map(career => ({
            ...career,
            rawScore: careerScores[career.name] || 0
        }))
        .filter(c => c.rawScore > 0);
    
    // Sort by raw score (highest first)
    careerScoreArray.sort((a, b) => b.rawScore - a.rawScore);
    
    // If no careers have scores, return empty results
    if (careerScoreArray.length === 0) {
        return {
            primary: [],
            alternative: [],
            all: [],
            categoryScores: { PRO: 0, TECH: 0, BUS: 0, CRE: 0, SPT: 0 },
            topCategories: []
        };
    }
    
    // Get top careers for percentage calculation
    const topCareers = careerScoreArray.slice(0, 20);
    const maxScore = topCareers[0]?.rawScore || 1;
    
    // Calculate true percentages based on actual scores
    topCareers.forEach(career => {
        let percentage = Math.round((career.rawScore / maxScore) * 100);
        if (percentage < 10 && career.rawScore > 0) percentage = 10;
        career.matchPercentage = Math.min(100, percentage);
    });
    
    // Get top 5 careers for final results
    const finalCareers = topCareers.slice(0, 5);
    
    // Sort final careers by match percentage
    finalCareers.sort((a, b) => b.matchPercentage - a.matchPercentage);
    
    // Calculate category scores for display purposes only (not used in scoring)
    const categoryScores = calculateCategoryScores(userAnswers);
    
    return {
        primary: finalCareers.slice(0, 3),
        alternative: finalCareers.slice(3, 5),
        all: finalCareers,
        categoryScores: categoryScores,
        topCategories: Object.entries(categoryScores)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 2)
            .map(([cat, score]) => ({ cat, score }))
    };
};

/**
 * Calculate category scores based on user answers
 * This is for display purposes only and does NOT affect career scoring
 * Note: This function now returns zeros since categories are removed from config.js
 * If you want category scores displayed, you can remove this function or keep it as is
 */
export const calculateCategoryScores = (userAnswers) => {
    // Since categories are no longer in ASSESSMENT_QUESTIONS, return zeros
    // This function can be removed if category display is not needed
    return {
        PRO: 0,
        TECH: 0,
        BUS: 0,
        CRE: 0,
        SPT: 0
    };
};

// ========================================
// ASSESSMENT MANAGEMENT
// ========================================

let currentQuestionIndex = 0;
let answers = {};

export const loadQuestions = () => {
    return QUESTIONS;
};

export const saveAnswer = (questionId, answer) => {
    answers[questionId] = answer;
    try {
        localStorage.setItem('journa_assessment_answers', JSON.stringify(answers));
    } catch (e) {
        // Silently handle storage errors (e.g., quota exceeded, private mode)
        console.warn('Unable to save answers to localStorage:', e);
        showNotification('Unable to save progress locally. Please check your browser storage settings.', 'warning');
    }
};

export const getSavedAnswers = () => {
    try {
        const saved = localStorage.getItem('journa_assessment_answers');
        if (saved) {
            answers = JSON.parse(saved);
        }
    } catch (e) {
        console.warn('Unable to retrieve answers from localStorage:', e);
        answers = {};
    }
    return answers;
};

export const clearAnswers = () => {
    answers = {};
    try {
        localStorage.removeItem('journa_assessment_answers');
    } catch (e) {
        console.warn('Unable to clear answers from localStorage:', e);
    }
};

export const getCurrentQuestionIndex = () => currentQuestionIndex;
export const setCurrentQuestionIndex = (index) => { currentQuestionIndex = index; };

export const isAssessmentComplete = () => {
    const totalQuestions = QUESTIONS.length;
    const answeredCount = Object.keys(answers).length;
    return answeredCount >= totalQuestions;
};

export const getAnsweredCount = () => Object.keys(answers).length;

// ========================================
// RESULTS MANAGEMENT
// ========================================

export const calculateAndSaveResults = () => {
    const categoryScores = calculateCategoryScores(answers);
    const results = calculateCareerScores(answers);
    
    try {
        localStorage.setItem('journa_results', JSON.stringify({
            timestamp: new Date().toISOString(),
            answers: answers,
            results: results
        }));
    } catch (e) {
        console.warn('Unable to save results to localStorage:', e);
        showNotification('Results calculated but could not be saved locally.', 'warning');
    }
    
    return results;
};

export const getSavedResults = () => {
    try {
        const saved = localStorage.getItem('journa_results');
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.warn('Unable to retrieve results from localStorage:', e);
    }
    return null;
};

export const getPublicResults = () => getSavedResults();

// Export all functions
export default {
    QUESTIONS,
    loadQuestions,
    saveAnswer,
    getSavedAnswers,
    clearAnswers,
    calculateCategoryScores,
    calculateCareerScores,
    calculateAndSaveResults,
    getSavedResults,
    getPublicResults,
    getCurrentQuestionIndex,
    setCurrentQuestionIndex,
    isAssessmentComplete,
    getAnsweredCount
};