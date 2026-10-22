// ========================================
// JOURNA - Header Renderer
// Handles rendering the header on all pages (frontend-only)
// ========================================

import { navOrder, isActiveLink } from './header-config.js';

/**
 * Render the header on all pages
 */
export const renderHeader = async () => {
    const currentPage = getCurrentPage();
    
    // Get header containers
    const navLinksContainer = document.getElementById('navLinks');
    const mobileNavLinksContainer = document.getElementById('mobileNavLinks');
    
    if (!navLinksContainer || !mobileNavLinksContainer) {
        console.error('Header containers not found');
        return;
    }
    
    // Render navigation links
    renderNavLinks(navLinksContainer, mobileNavLinksContainer, currentPage);
    
    // Initialize mobile menu after header is rendered
    initMobileMenu();
};

/**
 * Get current page name
 */
const getCurrentPage = () => {
    const path = window.location.pathname;
    return path.split('/').pop() || 'index.html';
};

/**
 * Render navigation links
 */
const renderNavLinks = (navContainer, mobileContainer, currentPage) => {
    // Desktop navigation
    navContainer.innerHTML = navOrder.map(link => {
        const activeClass = isActiveLink(link.href) ? 'active' : '';
        return `<a href="${link.href}" class="nav-link ${activeClass}">${link.text}</a>`;
    }).join('');
    
    // Mobile navigation
    mobileContainer.innerHTML = navOrder.map(link => {
        const activeClass = isActiveLink(link.href) ? 'active' : '';
        return `<a href="${link.href}" class="mobile-nav-link ${activeClass}">${link.text}</a>`;
    }).join('');
};

/**
 * Initialize mobile menu functionality
 */
const initMobileMenu = () => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileOverlay = document.getElementById('mobileOverlay');
    
    if (!mobileMenuToggle || !mobileNav || !mobileOverlay) return;
    
    const toggleIcon = mobileMenuToggle.querySelector('i');
    
    const openMobileMenu = () => {
        mobileNav.classList.add('active');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (toggleIcon) toggleIcon.className = 'fas fa-times';
    };
    
    const closeMobileMenu = () => {
        mobileNav.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
        if (toggleIcon) toggleIcon.className = 'fas fa-bars';
    };
    
    mobileMenuToggle.addEventListener('click', function() {
        if (mobileNav.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    
    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', closeMobileMenu);
    }
    
    mobileOverlay.addEventListener('click', closeMobileMenu);
    
    document.addEventListener('click', function(e) {
        if (e.target.classList && e.target.classList.contains('mobile-nav-link')) {
            closeMobileMenu();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
};

// Export a function to initialize the header on any page
export const initHeader = async () => {
    await renderHeader();
};