// ========================================
// JOURNA — Shared application configuration
// ========================================
// Single source of truth for the application shell: branding, the two
// services, their navigation and the pages that promote to the mobile
// tab bar.
//
// Both services remain independent applications. This file only describes
// how the unified shell presents them.
//
// 📝 HOW TO EDIT:
// 1. To change a service's navigation → edit the `nav` array for that service
// 2. To change what appears in the mobile tab bar → edit the `primary` array
// 3. To rename the product → edit APP.name / APP.tagline

export const APP = {
    name: 'Journa',
    subtitle: 'Career & School Guidance',
    tagline: 'Career and school guidance for Ghanaian students',
    themeColor: '#1E3A8A',
    backgroundColor: '#F6F8FC'
};

// The two services of the combined product.
export const SERVICES = {

    career: {
        id: 'career',
        name: 'Career Guidance',
        shortName: 'Careers',
        blurb: 'Discover careers, take the assessment and plan your path.',
        // Path relative to the application root (the folder holding sw.js).
        // It points at the page file, not the folder, so the URL is one of
        // the precached entries and therefore resolves while offline.
        root: 'career-guidance/JOURNA -Project/index.html',
        nav: [
            { key: 'home',       label: 'Home',       href: 'index.html' },
            { key: 'assessment', label: 'Assessment', href: 'assessment.html' },
            { key: 'results',    label: 'Results',    href: 'results.html' },
            { key: 'careers',    label: 'Careers',    href: 'career-library.html' },
            { key: 'programs',   label: 'Programs',   href: 'shs-recommendation.html' },
            { key: 'schools',    label: 'Schools',    href: 'schools.html' },
            { key: 'roadmaps',   label: 'Roadmaps',   href: 'roadmap.html' }
        ],
        // Promoted to the mobile tab bar (max 5).
        primary: ['home', 'assessment', 'careers', 'schools', 'roadmaps']
    },

    school: {
        id: 'school',
        name: 'School Selection',
        shortName: 'Schools',
        blurb: 'Learn the rules, choose your schools and check your choices.',
        root: 'school-selection/index.html',
        nav: [
            { key: 'home',       label: 'Home',           href: 'index.html' },
            { key: 'guidelines', label: 'Guidelines',     href: 'guidelines/index.html' },
            { key: 'selection',  label: 'Select schools', href: 'selection/index.html' },
            { key: 'review',     label: 'Review',         href: 'review/index.html' }
        ],
        primary: ['home', 'guidelines', 'selection', 'review']
    }
};

// Service ids in the order they are offered in the service switcher.
export const SERVICE_ORDER = ['career', 'school'];

// Icons for the mobile tab bar and the service switcher.
// Inline SVG so they work offline with no icon font.
export const ICONS = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V20h13V9.5"/>',
    assessment: '<circle cx="12" cy="12" r="8.5"/><path d="m14.8 9.2-1.6 4-4 1.6 1.6-4z"/>',
    results: '<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M21 20H3"/>',
    careers: '<rect x="3" y="7.5" width="18" height="12.5" rx="2"/><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5"/><path d="M3 12.5h18"/>',
    programs: '<path d="m3 9 9-5 9 5"/><path d="M5 10v9M10 10v9M14 10v9M19 10v9"/><path d="M3 21h18"/>',
    schools: '<path d="M12 3 3 8l9 5 9-5z"/><path d="M6 10.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-6.5"/>',
    roadmaps: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18h5a3.5 3.5 0 0 0 0-7h-3a3.5 3.5 0 0 1 0-7h5"/>',
    guidelines: '<path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14.5 3v5.5H20"/><path d="M8.5 13h7M8.5 17h5"/>',
    selection: '<path d="M9 11l2.5 2.5L16 9"/><rect x="3.5" y="3.5" width="17" height="17" rx="3"/>',
    review: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h9"/><circle cx="18.5" cy="18" r="2.5"/>',
    more: '<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>'
};

// The Journa product mark (inline SVG, no external asset needed).
export const LOGO_MARK = '<svg class="jn-mark" viewBox="0 0 40 40" width="32" height="32" aria-hidden="true" focusable="false">' +
    '<rect x="1" y="1" width="38" height="38" rx="11" fill="currentColor"/>' +
    '<path d="M23.5 9.5v11.2c0 3.6-2.6 5.9-6.3 5.9-2.5 0-4.3-1.1-4.9-3.1l3.2-.9c.4 1 1.1 1.5 2 1.5 1.4 0 2.2-.9 2.2-2.4V9.5z" fill="#fff"/>' +
    '<rect x="19.4" y="7" width="4.2" height="2.4" fill="#F4A261"/>' +
    '</svg>';
