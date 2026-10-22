// ========================================
// JOURNA — shared application shell
// ========================================
// Renders the unified application chrome (app bar, mobile tab bar, service
// switcher, network status, install prompt) and wires up the PWA:
// service-worker registration, update handling and offline detection.
//
// The shell is deliberately independent of both services. It only needs to
// know which service and page it is currently rendering.
//
// Page contract (added to <body> of every page):
//   <body data-journa-service="career" data-journa-page="assessment">

import { APP, SERVICES, SERVICE_ORDER, ICONS, LOGO_MARK } from './config.js';

// The application root is the folder that holds sw.js / manifest.webmanifest.
// shell.js lives in <root>/assets/journa/, so two levels up is the root.
const APP_ROOT = new URL('../../', import.meta.url);

const body = document.body;
const serviceId = body.dataset.journaService || 'home';
const pageKey = body.dataset.journaPage || '';

const service = SERVICES[serviceId] || null;

// ---------------------------------------------------------------------------
// URLs
// ---------------------------------------------------------------------------

function serviceUrl(id) {
    const svc = SERVICES[id];
    return new URL(svc.root, APP_ROOT).href;
}

function icon(key, className) {
    const path = ICONS[key] || ICONS.home;
    return `<svg viewBox="0 0 24 24" class="${className || ''}" aria-hidden="true" focusable="false">${path}</svg>`;
}

function esc(value) {
    return String(value).replace(/[&<>"']/g, (c) => (
        { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
}

// ---------------------------------------------------------------------------
// Chrome markup
// ---------------------------------------------------------------------------

function appBarMarkup() {
    const navItems = service
        ? service.nav.map((item) => {
            const current = item.key === pageKey ? ' aria-current="page"' : '';
            return `<a class="jn-appbar__link" href="${esc(new URL(item.href, new URL(service.root, APP_ROOT)).href)}"${current}>${esc(item.label)}</a>`;
        }).join('')
        : `<a class="jn-appbar__link" href="${esc(new URL('index.html', APP_ROOT).href)}" aria-current="page">Home</a>` +
          SERVICE_ORDER.map((id) => `<a class="jn-appbar__link" href="${esc(serviceUrl(id))}">${esc(SERVICES[id].name)}</a>`).join('');

    const switchItems = SERVICE_ORDER.map((id) => {
        const svc = SERVICES[id];
        const active = id === serviceId;
        return `<li><a class="jn-switch__item" href="${esc(serviceUrl(id))}"${active ? ' aria-current="true"' : ''}>
            <span class="jn-switch__icon${id === 'career' ? ' jn-switch__icon--teal' : ''}">${icon(id === 'career' ? 'assessment' : 'selection')}</span>
            <span>
                <span class="jn-switch__itemname">${esc(svc.name)}</span>
                <span class="jn-switch__itemdesc">${esc(svc.blurb)}</span>
            </span>
        </a></li>`;
    }).join('');

    const serviceLabel = service ? service.name : APP.subtitle;

    return `
        <a class="jn-skip" href="#main">Skip to main content</a>
        <header class="jn-appbar">
            <div class="jn-appbar__inner">
                <a class="jn-appbar__brand" href="${esc(new URL('index.html', APP_ROOT).href)}">
                    ${LOGO_MARK}
                    <span class="jn-appbar__titles">
                        <span class="jn-appbar__name">${esc(APP.name)}</span>
                        <span class="jn-appbar__service">${esc(serviceLabel)}</span>
                    </span>
                </a>
                <nav class="jn-appbar__nav" aria-label="${esc(serviceLabel)}">${navItems}</nav>
                <div class="jn-appbar__tools">
                    <div class="jn-switch">
                        <button type="button" class="jn-switch__btn" id="jnSwitchBtn" aria-expanded="false" aria-controls="jnSwitchMenu">
                            <span>${esc(service ? service.shortName : 'Services')}</span>
                            <span class="jn-switch__caret" aria-hidden="true"></span>
                        </button>
                        <ul class="jn-switch__menu" id="jnSwitchMenu">
                            <li><a class="jn-switch__item" href="${esc(new URL('index.html', APP_ROOT).href)}">
                                <span class="jn-switch__icon">${icon('home')}</span>
                                <span>
                                    <span class="jn-switch__itemname">${esc(APP.name)} home</span>
                                    <span class="jn-switch__itemdesc">Both services in one place</span>
                                </span>
                            </a></li>
                            ${switchItems}
                        </ul>
                    </div>
                    <button type="button" class="jn-install" id="jnInstall" data-available="false">
                        <span aria-hidden="true">&#x2193;</span><span>Install</span>
                    </button>
                    <span class="jn-netstatus" id="jnNetStatus" data-state="online" role="status" aria-live="polite">
                        <span id="jnNetLabel">Online</span>
                    </span>
                </div>
            </div>
        </header>`;
}

function tabBarMarkup() {
    if (!service) {
        // The app home is a launcher, so it gets a small tab bar of its own:
        // home plus the two services.
        const home = `<a class="jn-tabbar__item" href="${esc(new URL('index.html', APP_ROOT).href)}" aria-current="page">
            ${icon('home')}
            <span class="jn-tabbar__label">Home</span>
        </a>`;
        const services = SERVICE_ORDER.map((id) => `
            <a class="jn-tabbar__item" href="${esc(serviceUrl(id))}">
                ${icon(id === 'career' ? 'assessment' : 'selection')}
                <span class="jn-tabbar__label">${esc(SERVICES[id].shortName)}</span>
            </a>`).join('');
        return `<nav class="jn-tabbar" aria-label="${esc(APP.name)}">${home}${services}</nav>`;
    }

    const primary = service.primary
        .map((key) => service.nav.find((n) => n.key === key))
        .filter(Boolean);

    const tabs = primary.map((item) => {
        const current = item.key === pageKey ? ' aria-current="page"' : '';
        const href = esc(new URL(item.href, new URL(service.root, APP_ROOT)).href);
        return `<a class="jn-tabbar__item" href="${href}"${current}>
            ${icon(item.key)}
            <span class="jn-tabbar__label">${esc(item.label)}</span>
        </a>`;
    }).join('');

    const more = `<button type="button" class="jn-tabbar__item jn-tabbar__item--button" id="jnMoreBtn" aria-haspopup="dialog">
            ${icon('more')}
            <span class="jn-tabbar__label">More</span>
        </button>`;

    return `<nav class="jn-tabbar" aria-label="${esc(service.name)}">${tabs}${more}</nav>`;
}

function sheetMarkup() {
    if (!service) return '';
    const links = service.nav.map((item) => {
        const current = item.key === pageKey ? ' aria-current="page"' : '';
        const href = esc(new URL(item.href, new URL(service.root, APP_ROOT)).href);
        return `<a class="jn-sheet__link" href="${href}"${current}>${icon(item.key)}<span>${esc(item.label)}</span></a>`;
    }).join('');

    const other = SERVICE_ORDER
        .filter((id) => id !== serviceId)
        .map((id) => {
            const svc = SERVICES[id];
            return `<a class="jn-sheet__link" href="${esc(serviceUrl(id))}">${icon(id === 'career' ? 'assessment' : 'selection')}<span>${esc(svc.name)}</span></a>`;
        }).join('');

    return `
        <div class="jn-sheet" id="jnSheet" data-open="false" role="dialog" aria-modal="true" aria-label="More">
            <button type="button" class="jn-sheet__scrim" id="jnSheetScrim" aria-label="Close menu"></button>
            <div class="jn-sheet__panel">
                <div class="jn-sheet__grip" aria-hidden="true"></div>
                <h2 class="jn-sheet__title">${esc(service.name)}</h2>
                <div class="jn-sheet__group">
                    <p class="jn-sheet__grouplabel">Sections</p>
                    ${links}
                </div>
                <div class="jn-sheet__group">
                    <p class="jn-sheet__grouplabel">Switch service</p>
                    ${other}
                    <a class="jn-sheet__link" href="${esc(new URL('index.html', APP_ROOT).href)}">${icon('home')}<span>${esc(APP.name)} home</span></a>
                </div>
            </div>
        </div>`;
}

// ---------------------------------------------------------------------------
// Mount
// ---------------------------------------------------------------------------

function mount() {
    // The chrome elements are inserted straight into <body> rather than into
    // a wrapper element: a `position: sticky` box can only travel inside its
    // own containing block, so the app bar must not be nested one level down.
    const markup =
        appBarMarkup() +
        '<div class="jn-offlinebar" id="jnOfflineBar" role="status" aria-live="polite">You are offline. Journa keeps working — your saved answers and choices stay on this device.</div>' +
        tabBarMarkup() +
        sheetMarkup() +
        '<div class="jn-toast" id="jnToast" role="status" aria-live="polite" data-open="false">' +
        '<span class="jn-toast__text" id="jnToastText">A new version of Journa is ready.</span>' +
        '<button type="button" class="jn-toast__action" id="jnToastAction">Reload</button>' +
        '<button type="button" class="jn-toast__dismiss" id="jnToastDismiss" aria-label="Dismiss">&times;</button>' +
        '</div>';

    const holder = document.createElement('div');
    holder.innerHTML = markup;

    const fragment = document.createDocumentFragment();
    for (const node of Array.from(holder.childNodes)) {
        if (node.nodeType === Node.ELEMENT_NODE) node.setAttribute('data-journa-chrome', '');
        fragment.appendChild(node);
    }

    body.insertBefore(fragment, body.firstChild);
}

// ---------------------------------------------------------------------------
// Interaction
// ---------------------------------------------------------------------------

function setupSwitcher() {
    const btn = document.getElementById('jnSwitchBtn');
    const menu = document.getElementById('jnSwitchMenu');
    if (!btn || !menu) return;

    const setOpen = (open) => {
        menu.dataset.open = open ? 'true' : 'false';
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    btn.addEventListener('click', (event) => {
        event.stopPropagation();
        setOpen(menu.dataset.open !== 'true');
    });

    document.addEventListener('click', (event) => {
        if (menu.dataset.open === 'true' && !menu.contains(event.target)) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menu.dataset.open === 'true') {
            setOpen(false);
            btn.focus();
        }
    });
}

function setupSheet() {
    const sheet = document.getElementById('jnSheet');
    const openBtn = document.getElementById('jnMoreBtn');
    const scrim = document.getElementById('jnSheetScrim');
    if (!sheet || !openBtn) return;

    let lastFocused = null;

    const setOpen = (open) => {
        sheet.dataset.open = open ? 'true' : 'false';
        if (open) {
            lastFocused = document.activeElement;
            const first = sheet.querySelector('a, button');
            if (first) first.focus();
        } else if (lastFocused instanceof HTMLElement) {
            lastFocused.focus();
        }
    };

    openBtn.addEventListener('click', () => setOpen(true));
    scrim?.addEventListener('click', () => setOpen(false));
    sheet.addEventListener('click', (event) => {
        if (event.target instanceof HTMLElement && event.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && sheet.dataset.open === 'true') setOpen(false);
    });
}

// ---------------------------------------------------------------------------
// Network status
// ---------------------------------------------------------------------------

function setupNetworkStatus() {
    const status = document.getElementById('jnNetStatus');
    const label = document.getElementById('jnNetLabel');
    const bar = document.getElementById('jnOfflineBar');
    if (!status || !label) return;

    const paint = (state) => {
        status.dataset.state = state;
        label.textContent = state === 'offline' ? 'Offline' : (state === 'syncing' ? 'Syncing' : 'Online');
        if (bar) bar.dataset.open = state === 'offline' ? 'true' : 'false';
    };

    const isOnline = () => navigator.onLine !== false;

    paint(isOnline() ? 'online' : 'offline');

    window.addEventListener('offline', () => paint('offline'));
    window.addEventListener('online', () => {
        paint('syncing');
        setTimeout(() => paint('online'), 1200);
    });
}

// ---------------------------------------------------------------------------
// Install prompt
// ---------------------------------------------------------------------------

function setupInstall() {
    const buttons = Array.from(document.querySelectorAll('#jnInstall, [data-journa-install]'));
    if (!buttons.length) return;

    let deferred = null;

    const setAvailable = (available) => {
        for (const btn of buttons) {
            btn.dataset.available = available ? 'true' : 'false';
            if (btn.id !== 'jnInstall') btn.hidden = !available;
        }
    };

    window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        deferred = event;
        setAvailable(true);
    });

    for (const btn of buttons) {
        btn.addEventListener('click', async () => {
            if (!deferred) return;
            setAvailable(false);
            deferred.prompt();
            try { await deferred.userChoice; } catch (_) { /* ignore */ }
            deferred = null;
        });
    }

    window.addEventListener('appinstalled', () => {
        setAvailable(false);
        deferred = null;
    });
}

// ---------------------------------------------------------------------------
// Service worker + update handling
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Unsaved-work detection
// ---------------------------------------------------------------------------
//
// A control that ships with a pre-selected default (the school-selection
// pathway radio, for example) is not "work in progress". So the shell
// snapshots the checked radio/checkbox controls once the page has settled
// and only treats a difference from that snapshot as unsaved work.

let baselineChecks = new Set();

function checkKey(el) {
    return `${el.name || el.id || ''}::${el.value || ''}`;
}

function currentChecks() {
    const set = new Set();
    for (const el of document.querySelectorAll('input[type=radio], input[type=checkbox]')) {
        if (el.closest('[data-journa-chrome]')) continue;
        if (el.checked) set.add(checkKey(el));
    }
    return set;
}

function captureBaseline() {
    baselineChecks = currentChecks();
}

function hasUnsavedWork() {
    const fields = document.querySelectorAll('input, select, textarea');
    for (const field of fields) {
        if (field.closest('[data-journa-chrome]')) continue;
        const type = (field.type || '').toLowerCase();
        if (type === 'hidden') continue;
        if (type === 'checkbox' || type === 'radio') continue;   // compared below
        const value = (field.value || '').trim();
        if (value) return true;
    }

    // Radio / checkbox groups: only a change against the shipped default counts.
    const now = currentChecks();
    if (now.size !== baselineChecks.size) return true;
    for (const key of now) {
        if (!baselineChecks.has(key)) return true;
    }

    // Choices that are not form fields: the assessment's answer options and
    // anything flagged with aria-selected / aria-checked.
    const picked = document.querySelectorAll(
        'main .grid-option.selected, main [aria-selected="true"], main [aria-checked="true"]'
    );
    return picked.length > 0;
}

function setupServiceWorker() {
    if (!('serviceWorker' in navigator)) return;

    const toast = document.getElementById('jnToast');
    const toastText = document.getElementById('jnToastText');
    const toastAction = document.getElementById('jnToastAction');
    const toastDismiss = document.getElementById('jnToastDismiss');

    let reloading = false;

    const showUpdateToast = () => {
        if (!toast) return;
        toastText.textContent = 'A new version of Journa is ready.';
        toast.dataset.open = 'true';
    };

    const hideToast = () => {
        if (toast) toast.dataset.open = 'false';
    };

    const applyUpdate = () => {
        const waiting = navigator.serviceWorker.getRegistration().then((reg) => reg && reg.waiting);
        waiting.then((worker) => {
            if (worker) worker.postMessage({ type: 'SKIP_WAITING' });
            else location.reload();
        });
    };

    toastAction?.addEventListener('click', () => {
        hideToast();
        applyUpdate();
    });

    toastDismiss?.addEventListener('click', hideToast);

    const hadController = !!navigator.serviceWorker.controller;

    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!hadController) return;      // first install: nothing to refresh
        if (reloading) return;
        reloading = true;
        location.reload();
    });

    window.addEventListener('load', async () => {
        try {
            const reg = await navigator.serviceWorker.register(new URL('sw.js', APP_ROOT), { scope: APP_ROOT });

            if (reg.waiting && hadController) {
                showUpdateToast();
            }

            reg.addEventListener('updatefound', () => {
                const worker = reg.installing;
                if (!worker) return;
                worker.addEventListener('statechange', () => {
                    if (worker.state === 'installed' && navigator.serviceWorker.controller) {
                        // Deploy happened. Update now unless the user has
                        // unsaved work in a form, in which case ask first so
                        // nothing they typed is lost.
                        if (hasUnsavedWork()) {
                            showUpdateToast();
                        } else {
                            worker.postMessage({ type: 'SKIP_WAITING' });
                        }
                    }
                });
            });

            // Re-check for a newer version when the app is brought back to
            // the foreground, so a deploy is picked up without a hard refresh.
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible') reg.update().catch(() => {});
            });
        } catch (error) {
            console.warn('Journa: service worker registration failed', error);
        }
    });
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------

mount();
setupSwitcher();
setupSheet();
setupNetworkStatus();
setupInstall();
setupServiceWorker();

// Snapshot the pre-selected controls once the page has settled, so the
// update guard can tell a default selection from real user input.
window.addEventListener('load', () => {
    setTimeout(captureBaseline, 0);
});
