// ========================================
// Application chrome: notice banner, footer
// ========================================
// Shared by every page so the notice and footer stay consistent and links
// resolve correctly from nested pages.
//
// The primary navigation (application bar, mobile tab bar, service switcher)
// is rendered by the shared Journa shell in assets/journa/shell.js, so it is
// not built here.
//
// Page contract:
//   <body data-page="home">            (root page)
//   <body data-page="guidelines" data-base="../">   (nested page)
//   <div id="site-header"></div>  ... <div id="site-footer"></div>

import { LOGO_MARK } from '../../assets/journa/config.js';

const base = document.body.dataset.base || '';
const currentPage = document.body.dataset.page || '';

const NAV_ITEMS = [
    { key: 'home',       href: 'index.html',            label: 'Home' },
    { key: 'guidelines', href: 'guidelines/index.html', label: 'Guidelines' },
    { key: 'selection',  href: 'selection/index.html',  label: 'Select schools' },
    { key: 'review',     href: 'review/index.html',     label: 'Review' }
];

function navLink(item, className) {
    const isActive = item.key === currentPage;
    const classes = isActive ? `${className} active` : className;
    const current = isActive ? ' aria-current="page"' : '';
    return `<a class="${classes}" href="${base}${item.href}"${current}>${item.label}</a>`;
}

const footerNav = NAV_ITEMS.map((item) => `<li>${navLink(item, 'footer-link')}</li>`).join('');

const headerTarget = document.getElementById('site-header');
if (headerTarget) {
    headerTarget.innerHTML = `
        <p class="demo-banner" role="note">
            Prototype &middot; guidance only. Nothing is submitted to CSSPS.
        </p>
    `;
}

const footerTarget = document.getElementById('site-footer');
if (footerTarget) {
    footerTarget.innerHTML = `
        <footer class="footer">
            <div class="container footer-grid">
                <div class="footer-brand">
                    <p class="footer-logo">${LOGO_MARK}<span>Journa</span></p>
                    <p class="footer-about">School selection guidance for BECE candidates and families. Part of Journa, alongside Career Guidance.</p>
                </div>
                <div class="footer-links">
                    <h2>Explore</h2>
                    <ul>${footerNav}</ul>
                </div>
                <div class="footer-links">
                    <h2>Important</h2>
                    <ul>
                        <li><a class="footer-link" href="${base}index.html#scope">Prototype scope</a></li>
                        <li><a class="footer-link" href="${base}index.html#disclaimer">Disclaimer</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom container">
                <p>Prototype. Not affiliated with or endorsed by GES or CSSPS.</p>
                <p>&copy; <span id="footer-year"></span> Journa &middot; School Selection</p>
            </div>
        </footer>
    `;
}

const yearEl = document.getElementById('footer-year');
if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
}

