// ========================================
// JOURNA — service worker
// ========================================
// Deliberate caching strategy
// ---------------------------
//  1. PRECACHE (versioned)
//     The whole local application is precached on install: the app shell,
//     every HTML page of both services, all local CSS, all ES modules,
//     the school/career/roadmap datasets and the UI images.
//
//     Cache-first. The cache name carries a version, so a deploy produces a
//     new cache and old ones are deleted on activate. Users therefore move
//     to the new version instead of being pinned to stale files.
//
//  2. RUNTIME (stale-while-revalidate)
//     Third-party resources (Google Fonts, Font Awesome) are cached on first
//     use and served from cache while a background refresh runs. If they
//     have never been cached the request fails gracefully and the page
//     falls back to the system font stack.
//
//  3. NAVIGATIONS
//     Served from the precache (cache-first). If a page is somehow not
//     cached, the network is tried, and finally offline.html is shown.
//
// User data (assessment answers, school selections) lives in localStorage
// and is never touched by the cache, so it survives offline sessions and
// updates.
//
// 📝 HOW TO EDIT:
// 1. To ship a new version → change VERSION below and commit.
// 2. To add files to the offline bundle → add them to PRECACHE.

const VERSION = '1.0.1';
const CACHE_PREFIX = 'journa-';
const PRECACHE = `${CACHE_PREFIX}precache-v${VERSION}`;
const RUNTIME = `${CACHE_PREFIX}runtime-v${VERSION}`;

// The application root — the folder that holds this file.
const ROOT = new URL('./', self.location.href);

// Local files that make up the offline bundle.
const PRECACHE_URLS = [
    './index.html',
    './offline.html',
    './manifest.webmanifest',
    './assets/journa/config.js',
    './assets/journa/shell.css',
    './assets/journa/shell.js',
    './assets/journa/icons/apple-touch-icon.png',
    './assets/journa/icons/favicon-32.png',
    './assets/journa/icons/icon-192.png',
    './assets/journa/icons/icon-512.png',
    './assets/journa/icons/icon-maskable-192.png',
    './assets/journa/icons/icon-maskable-512.png',
    './career-guidance/JOURNA -Project/index.html',
    './career-guidance/JOURNA -Project/assessment.html',
    './career-guidance/JOURNA -Project/results.html',
    './career-guidance/JOURNA -Project/career-library.html',
    './career-guidance/JOURNA -Project/shs-recommendation.html',
    './career-guidance/JOURNA -Project/schools.html',
    './career-guidance/JOURNA -Project/roadmap.html',
    './career-guidance/JOURNA -Project/assets/images/career.webp',
    './career-guidance/JOURNA -Project/assets/images/hero-image.webp',
    './career-guidance/JOURNA -Project/css/components.css',
    './career-guidance/JOURNA -Project/css/layout.css',
    './career-guidance/JOURNA -Project/css/main.css',
    './career-guidance/JOURNA -Project/css/pages.css',
    './career-guidance/JOURNA -Project/css/reset.css',
    './career-guidance/JOURNA -Project/css/utilities.css',
    './career-guidance/JOURNA -Project/css/variables.css',
    './career-guidance/JOURNA -Project/js/assessment.js',
    './career-guidance/JOURNA -Project/js/career-schools.js',
    './career-guidance/JOURNA -Project/js/config.js',
    './career-guidance/JOURNA -Project/js/footer.js',
    './career-guidance/JOURNA -Project/js/header-config.js',
    './career-guidance/JOURNA -Project/js/header-renderer.js',
    './career-guidance/JOURNA -Project/js/results.js',
    './career-guidance/JOURNA -Project/js/roadmap-data.js',
    './career-guidance/JOURNA -Project/js/school-data.js',
    './career-guidance/JOURNA -Project/js/shs-recommendation.js',
    './career-guidance/JOURNA -Project/js/utils.js',
    './career-guidance/JOURNA -Project/js/weights/q1-subjects.js',
    './career-guidance/JOURNA -Project/js/weights/q2-activities.js',
    './career-guidance/JOURNA -Project/js/weights/q3-work-environment.js',
    './career-guidance/JOURNA -Project/js/weights/q4-natural-strengths.js',
    './career-guidance/JOURNA -Project/js/weights/q5-work-style.js',
    './career-guidance/JOURNA -Project/js/weights/q6-motivation.js',
    './career-guidance/JOURNA -Project/js/weights/q7-study-years.js',
    './career-guidance/JOURNA -Project/js/weights/q8-hands-on-work.js',
    './career-guidance/JOURNA -Project/js/weights/q9-risk-taking.js',
    './career-guidance/JOURNA -Project/js/weights/q10-personality.js',
    './career-guidance/JOURNA -Project/js/weights/q11-success-goal.js',
    './career-guidance/JOURNA -Project/js/weights/q12-career-path.js',
    './career-guidance/JOURNA -Project/js/weights/q13-daily-activity.js',
    './school-selection/index.html',
    './school-selection/guidelines/index.html',
    './school-selection/selection/index.html',
    './school-selection/review/index.html',
    './school-selection/review/placement-form.html',
    './school-selection/review/coat-of-arms.jpg',
    './school-selection/css/components.css',
    './school-selection/css/guidelines.css',
    './school-selection/css/layout.css',
    './school-selection/css/main.css',
    './school-selection/css/pages.css',
    './school-selection/css/placement-form.css',
    './school-selection/css/reset.css',
    './school-selection/css/review.css',
    './school-selection/css/selection.css',
    './school-selection/css/utilities.css',
    './school-selection/css/variables.css',
    './school-selection/js/alternatives.js',
    './school-selection/js/alternatives-state.js',
    './school-selection/js/candidate-state.js',
    './school-selection/js/guidelines.js',
    './school-selection/js/guidelines-data.js',
    './school-selection/js/home.js',
    './school-selection/js/layout.js',
    './school-selection/js/pathways.js',
    './school-selection/js/pathway-state.js',
    './school-selection/js/programme-codes.js',
    './school-selection/js/prototype-schools.js',
    './school-selection/js/review.js',
    './school-selection/js/review-model.js',
    './school-selection/js/school-data.js',
    './school-selection/js/school-search.js',
    './school-selection/js/selection.js',
    './school-selection/js/selection-state.js',
    './school-selection/js/validation.js'
];

// ---------------------------------------------------------------------------
// Install — precache the whole local application
// ---------------------------------------------------------------------------

self.addEventListener('install', (event) => {
    event.waitUntil((async () => {
        const cache = await caches.open(PRECACHE);
        // Each file is added individually so one bad entry cannot fail the
        // whole install and leave the user with no offline copy at all.
        const results = await Promise.allSettled(
            PRECACHE_URLS.map(async (path) => {
                const url = new URL(path, ROOT);
                const request = new Request(url.href, { cache: 'reload' });
                const response = await fetch(request);
                if (!response.ok) throw new Error(`${response.status} ${path}`);
                await cache.put(url.href, response);
            })
        );
        const failed = results
            .map((r, i) => (r.status === 'rejected' ? PRECACHE_URLS[i] : null))
            .filter(Boolean);
        if (failed.length) {
            console.warn('[journa-sw] not precached:', failed.join(', '));
        }
        // The page decides when to activate the new worker (it may defer if
        // the user has unsaved work in a form).
    })());
});

// ---------------------------------------------------------------------------
// Activate — drop old caches and take control
// ---------------------------------------------------------------------------

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        const keys = await caches.keys();
        await Promise.all(
            keys
                .filter((key) => key.startsWith(CACHE_PREFIX) && key !== PRECACHE && key !== RUNTIME)
                .map((key) => caches.delete(key))
        );
        await self.clients.claim();
    })());
});

// ---------------------------------------------------------------------------
// Message — apply an update when the page asks for it
// ---------------------------------------------------------------------------

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

function isSameOrigin(url) {
    return url.origin === self.location.origin;
}

async function cacheFirst(request) {
    const cached = await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;
    const response = await fetch(request);
    if (response && response.ok && response.type === 'basic') {
        const cache = await caches.open(PRECACHE);
        cache.put(request, response.clone());
    }
    return response;
}

async function staleWhileRevalidate(request) {
    const cache = await caches.open(RUNTIME);
    const cached = await cache.match(request);
    const network = fetch(request)
        .then((response) => {
            if (response && (response.ok || response.type === 'opaque')) {
                cache.put(request, response.clone());
            }
            return response;
        })
        .catch(() => null);

    if (cached) return cached;

    const response = await network;
    if (response) return response;

    // Never cached and the network is gone: fail this subresource so the
    // page falls back to the system font stack instead of breaking.
    return new Response('', { status: 504, statusText: 'Offline' });
}

async function handleNavigation(request) {
    // Cache-first: the precache holds every page of the application and is
    // versioned, so a deploy swaps the content atomically.
    const cached = await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;

    try {
        const response = await fetch(request);
        if (response && response.ok) {
            const cache = await caches.open(PRECACHE);
            cache.put(request, response.clone());
        }
        return response;
    } catch (error) {
        const offline = await caches.match(new URL('./offline.html', ROOT).href);
        if (offline) return offline;
        return new Response(
            '<!doctype html><meta charset="utf-8"><title>Journa — offline</title>' +
            '<p style="font:16px/1.5 system-ui;padding:24px">You are offline and this page is not available yet.</p>',
            { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
        );
    }
}

self.addEventListener('fetch', (event) => {
    const request = event.request;

    if (request.method !== 'GET') return;

    const url = new URL(request.url);

    // Never cache API-ish or non-http schemes.
    if (!url.protocol.startsWith('http')) return;

    if (request.mode === 'navigate') {
        event.respondWith(handleNavigation(request));
        return;
    }

    if (isSameOrigin(url)) {
        event.respondWith(cacheFirst(request));
        return;
    }

    // Third-party (fonts, Font Awesome): serve from cache, refresh in the
    // background. Unavailable offline -> the request simply fails and the
    // page uses its system-font fallback.
    event.respondWith(staleWhileRevalidate(request));
});
