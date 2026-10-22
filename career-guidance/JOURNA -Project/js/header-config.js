// ========================================
// JOURNA - Header Configuration
// ========================================
// 📝 HOW TO EDIT:
// 1. To add/remove navigation links → Edit "NAVIGATION_MENU" section below
// 2. To change order → Just rearrange the items in the array
// 3. To change a link's text or page → Edit the text or href
// ========================================

// ========================================
// 📋 SECTION 1: NAVIGATION MENU (Edit menu items here)
// ========================================
// Each menu item needs:
// - text: The text shown on the menu
// - href: The page filename (e.g., 'index.html')
// - icon: Font Awesome icon class (optional, for future use)

export const NAVIGATION_MENU = [
    { text: 'Home', href: 'index.html', icon: 'fa-home' },
    { text: 'Assessment', href: 'assessment.html', icon: 'fa-compass' },
    { text: 'Results', href: 'results.html', icon: 'fa-chart-bar' },
    { text: 'Careers', href: 'career-library.html', icon: 'fa-briefcase' },
    { text: 'Programs', href: 'shs-recommendation.html', icon: 'fa-school' },
    { text: 'Schools', href: 'schools.html', icon: 'fa-university' },
    { text: 'Roadmaps', href: 'roadmap.html', icon: 'fa-road' }
];

// ========================================
// 🛠️ FUNCTIONS (Don't edit below unless needed)
// ========================================

// Keep navOrder for backward compatibility
export const navOrder = NAVIGATION_MENU;

/**
 * Get the current page name from URL
 * @returns {string} Current page filename
 */
export const getCurrentPage = () => {
    const path = window.location.pathname;
    return path.split('/').pop() || 'index.html';
};

/**
 * Check if a link should be active
 * @param {string} linkHref - The href of the link
 * @returns {boolean} True if this link is the current page
 */
export const isActiveLink = (linkHref) => {
    const currentPage = getCurrentPage();
    
    // Handle special cases
    if (currentPage === '' || currentPage === '/') {
        return linkHref === 'index.html';
    }
    
    return currentPage === linkHref;
};